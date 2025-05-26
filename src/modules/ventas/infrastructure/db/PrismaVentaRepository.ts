import { Venta } from '../../domain/entities/Venta';
import { DetalleVenta } from '../../domain/entities/DetalleVenta';
import { VentaDTO } from '../../application/dtos/VentaDTO';
import { DetalleVentaDTO } from '../../application/dtos/DetalleVentaDTO';
import { getPrismaClient } from '../../../../shared/db/prisma';
import { IVentaRepository } from '../../domain/repositories/IVentaRepository';
import { NotFoundError } from '../../../../shared/errors/AppError';

const prisma = getPrismaClient();

export class PrismaVentaRepository implements IVentaRepository {
    async withTransaction<T>(fn: (tx: Parameters<typeof prisma.$transaction>[0] extends (arg: infer U) => any ? U : never) => Promise<T>): Promise<T> {
        return prisma.$transaction(async (tx) => fn(tx));
    }

    async crearVenta(venta: VentaDTO, detalles: DetalleVentaDTO[]): Promise<number> {
        try {
            const result = await prisma.$transaction(async (tx) => {
                const operacion = await tx.operacion.create({
                    data: {
                        id_tipo_operacion: 1,
                        id_estado_operacion: 1,
                        fecha_creacion: new Date(),
                        fecha_actualizacion: new Date(),
                    },
                });
                const operacionVenta = await tx.operacion_venta.create({
                    data: {
                        id_operacion: operacion.id_operacion,
                        id_cliente: venta.id_cliente,
                        id_metodo_pago: venta.id_metodo_pago,
                        total: venta.total,
                    },
                });
                const id_venta = operacionVenta.id_venta;

                for (const detalle of detalles) {
                    await tx.venta_detalle.create({
                        data: {
                            id_venta: id_venta,
                            id_producto_variante: detalle.id_producto_variante,
                            cantidad: detalle.cantidad,
                            precio_unitario: detalle.precio_unitario,
                        },
                    });
                }
                return id_venta;
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    async listarVentas(): Promise<VentaDTO[]> {
        const ventas = await prisma.operacion_venta.findMany({
            include: {
                venta_detalle: true,
            }
        });
        return ventas.map(Venta.fromRow);
    }

    async obtenerVentaPorId(id: number): Promise<VentaDTO> {
        const venta = await prisma.operacion_venta.findUnique({
            where: { id_venta: id },
            include: { venta_detalle: true },
        });
        if (!venta) throw new NotFoundError('Venta no encontrada');
        return Venta.fromRow(venta);
    }

    async listarDetallesPorVenta(id: number): Promise<DetalleVentaDTO[]> {
        const detalles = await prisma.venta_detalle.findMany({
            where: { id_venta: id },
        });

        if (!detalles || detalles.length === 0) {
            throw new NotFoundError('Detalles de venta no encontrados');
        }
        return detalles.map(DetalleVenta.fromRow);
    }

    async eliminarVenta(id: number): Promise<boolean> {
        try {
            await prisma.operacion_venta.delete({
                where: { id_venta: id },
            });
            return true;
        } catch (error: any) {
            if (error.code === 'P2025') {
                throw new NotFoundError('Venta no encontrada');
            }
            throw error;
        }
    }
}