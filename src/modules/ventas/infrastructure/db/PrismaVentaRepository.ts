import { Venta } from '../../domain/entities/Venta';
import { DetalleVenta } from '../../domain/entities/DetalleVenta';
import { VentaDTO } from '../../application/dtos/VentaDTO';
import { DetalleVentaDTO } from '../../application/dtos/DetalleVentaDTO';
import { getPrismaClient } from '../../../../shared/db/prisma';
import { IVentaRepository } from '../../domain/repositories/IVentaRepository';
import { NotFoundError } from '../../../../shared/errors/AppError';

const prisma = getPrismaClient();

export class PrismaVentaRepository implements IVentaRepository {
    async crearVenta(venta: VentaDTO, detalles: DetalleVentaDTO[]): Promise<number> {
        try {
            const result = await prisma.$transaction(async (tx) => {
                const operacion = await tx.operacion.create({
                    data: {
                        id_tipo_operacion: 1,
                        estado: 'Inicializado',
                    },
                });
                const operacionVenta = await tx.operacion_ventas.create({
                    data: {
                        id_operacion: operacion.id_operacion,
                        id_cliente: venta.id_cliente,
                        fecha: venta.fecha,
                        total: venta.total,
                        metodo_pago: venta.metodo_pago,
                    },
                });
                const id_operacion_ventas = operacionVenta.id_operacion_ventas;

                for (const detalle of detalles) {
                    await tx.detalle_venta.create({
                        data: {
                            id_operacion_venta: id_operacion_ventas,
                            id_producto: detalle.id_producto,
                            cantidad: detalle.cantidad,
                            precio_unitario: detalle.precio_unitario,
                        },
                    });
                }
                return id_operacion_ventas;
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    async listarVentas(): Promise<VentaDTO[]> {
        const ventas = await prisma.operacion_ventas.findMany({
            include: {
                detalle_venta: true,
            },
            orderBy: {
                fecha: 'desc',
            },
        });
        return ventas.map(Venta.fromRow);
    }

    async obtenerVentaPorId(id: number): Promise<VentaDTO> {
        const venta = await prisma.operacion_ventas.findUnique({
            where: { id_operacion_ventas: id },
            include: { detalle_venta: true },
        });
        if (!venta) throw new NotFoundError('Venta no encontrada');
        return Venta.fromRow(venta);
    }

    async listarDetallesPorVenta(id: number): Promise<DetalleVentaDTO[]> {
        const detalles = await prisma.detalle_venta.findMany({
            where: { id_operacion_venta: id },
        });
        return detalles.map(DetalleVenta.fromRow);
    }

    async eliminarVenta(id: number): Promise<boolean> {
        try {
            await prisma.operacion_ventas.delete({
                where: { id_operacion_ventas: id },
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