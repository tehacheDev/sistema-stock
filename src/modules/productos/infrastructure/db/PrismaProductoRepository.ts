import { PrismaClient } from '../../../../generated/prisma/client';
import { Producto } from '../../domain/entities/Producto';
import { Variante } from '../../domain/entities/Variante';
import { IProductoRepository } from '../../domain/repositories/IProductoRepository';

const prisma = new PrismaClient();

export class PrismaProductoRepository implements IProductoRepository {

  async crearProductoConVariante(producto: Producto, variantes: Variante[]): Promise<number> {
    const nuevoProducto = await prisma.productos.create({
      data: {
        nombre: producto.nombre,
        categoria: producto.categoria,
        costo: producto.costo,
        precio_unitario: producto.precio_unitario,
        producto_variantes: {
          create: variantes.map(v => ({
            talle: v.talle,
            color: v.color,
            stock_actual: v.stock_actual,
          })),
        },
      },
      include: { producto_variantes: true },
    });

    return nuevoProducto.id_producto;
  }

  async listarProductos(): Promise<Producto[]> {
    const productos = await prisma.productos.findMany();
    return productos.map(Producto.fromRow);
  }

  async listarVariantePorId(id: number): Promise<Variante[]> {
    const variantes = await prisma.producto_variantes.findMany({
      where: { id_producto: id },
    });
    return variantes.map(Variante.fromRow);
  }

  async actualizarProducto(id: number, producto: Producto): Promise<number> {
    const updated = await prisma.productos.update({
      where: { id_producto: id },
      data: {
        nombre: producto.nombre,
        categoria: producto.categoria,
        costo: producto.costo,
        precio_unitario: producto.precio_unitario,
      },
    });

    return updated ? id : -1;
  }

  async actualizarVariante(id: number, variante: Variante): Promise<number> {
    const updated = await prisma.producto_variantes.update({
      where: { id_variante: id },
      data: {
        talle: variante.talle,
        stock_actual: variante.stock_actual,
        color: variante.color,
      },
    });

    return updated ? id : -1;
  }

  async eliminarProductoConVariantes(id: number): Promise<boolean> {
    try {
      await prisma.$transaction([
        prisma.producto_variantes.deleteMany({ where: { id_producto: id } }),
        prisma.productos.delete({ where: { id_producto: id } }),
      ]);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async eliminarVariante(id: number): Promise<boolean> {
    const deleted = await prisma.producto_variantes.delete({
      where: { id_variante: id },
    });
    return !!deleted;
  }
}