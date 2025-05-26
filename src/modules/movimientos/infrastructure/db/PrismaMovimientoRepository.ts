import { PrismaClient } from '../../../../generated/prisma/client';
import { Movimiento } from '../../domain/entities/Movimiento';
import { IMovimientoRepository } from '../../domain/repositories/IMovimientoRepository';

const prisma = new PrismaClient();

export class PrismaMovimientoRepository implements IMovimientoRepository {
    async withTransaction<T>(fn: (tx: Parameters<typeof prisma.$transaction>[0] extends (arg: infer U) => any ? U : never) => Promise<T>): Promise<T> {
        return prisma.$transaction(async (tx) => fn(tx));
    }

    async buscarPorIdVariante(id_variante: number): Promise<Movimiento[]> {
        const movimientos = await prisma.inventario_movimiento.findMany({
            where: { id_producto_variante: id_variante },
        });
        return movimientos.map(movimiento => ({
            id_movimiento: movimiento.id_movimiento,
            id_producto_variante: movimiento.id_producto_variante,
            tipo_movimiento: movimiento.tipo_movimiento,
            cantidad: movimiento.cantidad,
            fecha_movimiento: movimiento.fecha_movimiento,
            comentario: movimiento.comentario || '',
        }));
    }

    async buscarPorOperacion(id_operacion: number): Promise<Movimiento[]> {
        const movimientos = await prisma.inventario_movimiento.findMany({
            where: { id_operacion },
        });
        return movimientos.map(movimiento => ({
            id_movimiento: movimiento.id_movimiento,
            id_producto_variante: movimiento.id_producto_variante,
            tipo_movimiento: movimiento.tipo_movimiento,
            cantidad: movimiento.cantidad,
            fecha_movimiento: movimiento.fecha_movimiento,
            comentario: movimiento.comentario || '',
        }));
    }

    async buscarPorRangoDeFechas(desde: Date, hasta: Date): Promise<Movimiento[]> {
        const movimientos = await prisma.inventario_movimiento.findMany({
            where: {
                fecha_movimiento: {
                    gte: desde,
                    lte: hasta,
                },
            },
        });
        return movimientos.map(movimiento => ({
            id_movimiento: movimiento.id_movimiento,
            id_producto_variante: movimiento.id_producto_variante,
            tipo_movimiento: movimiento.tipo_movimiento,
            cantidad: movimiento.cantidad,
            fecha_movimiento: movimiento.fecha_movimiento,
            comentario: movimiento.comentario || '',
        }));
    }

    async buscarPorTipo(tipo: 'entrada' | 'salida' | 'ajuste'): Promise<Movimiento[]> {
        const movimientos = await prisma.inventario_movimiento.findMany({
            where: { tipo_movimiento: tipo },
        });
        return movimientos.map(movimiento => ({
            id_movimiento: movimiento.id_movimiento,
            id_producto_variante: movimiento.id_producto_variante,
            tipo_movimiento: movimiento.tipo_movimiento,
            cantidad: movimiento.cantidad,
            fecha_movimiento: movimiento.fecha_movimiento,
            comentario: movimiento.comentario || '',
        }));
    }

    async listarTodos(): Promise<Movimiento[]> {
        const movimientos = await prisma.inventario_movimiento.findMany();
        return movimientos.map(movimiento => ({
            id_movimiento: movimiento.id_movimiento,
            id_producto_variante: movimiento.id_producto_variante,
            tipo_movimiento: movimiento.tipo_movimiento,
            cantidad: movimiento.cantidad,
            fecha_movimiento: movimiento.fecha_movimiento,
            comentario: movimiento.comentario || '',
        }));
    }

    async listarMovimientoPorId(id: number): Promise<Movimiento | null> {
        const movimiento = await prisma.inventario_movimiento.findUnique({
            where: { id_movimiento: id },
        });

        if (!movimiento) return null;
        return {
            id_movimiento: movimiento.id_movimiento,
            id_producto_variante: movimiento.id_producto_variante,
            tipo_movimiento: movimiento.tipo_movimiento,
            cantidad: movimiento.cantidad,
            fecha_movimiento: movimiento.fecha_movimiento,
            comentario: movimiento.comentario || '',
        };
    }

    async crearMovimiento(movimiento: Movimiento): Promise<number> {
        const nuevoMovimiento = await prisma.inventario_movimiento.create({
            data: {
                id_producto_variante: movimiento.id_producto_variante,
                tipo_movimiento: movimiento.tipo_movimiento,
                cantidad: movimiento.cantidad,
                fecha_movimiento: movimiento.fecha_movimiento,
                comentario: movimiento.comentario,
            },
        });
        return nuevoMovimiento.id_movimiento;
    }

    async obtenerMovimientoPorId(id: number): Promise<Movimiento | null> {
        const movimiento = await prisma.inventario_movimiento.findUnique({
            where: { id_movimiento: id },
        });
        if (!movimiento) return null;
        return {
            id_movimiento: movimiento.id_movimiento,
            id_producto_variante: movimiento.id_producto_variante,
            tipo_movimiento: movimiento.tipo_movimiento,
            cantidad: movimiento.cantidad,
            fecha_movimiento: movimiento.fecha_movimiento,
            comentario: movimiento.comentario || '',
        };
    }

    async listarMovimientos(): Promise<Movimiento[]> {
        const movimientos = await prisma.inventario_movimiento.findMany();
        return movimientos.map(movimiento => ({
            id_movimiento: movimiento.id_movimiento,
            id_producto_variante: movimiento.id_producto_variante,
            tipo_movimiento: movimiento.tipo_movimiento,
            cantidad: movimiento.cantidad,
            fecha_movimiento: movimiento.fecha_movimiento,
            comentario: movimiento.comentario || '',
        }));
    }

    async eliminarMovimiento(id: number): Promise<void> {
        await prisma.inventario_movimiento.delete({
            where: { id_movimiento: id },
        });
    }

    async actualizarMovimiento(id: number, movimiento: Partial<Movimiento>): Promise<void> {
        await prisma.inventario_movimiento.update({
            where: { id_movimiento: id },
            data: movimiento,
        });
    }
}    