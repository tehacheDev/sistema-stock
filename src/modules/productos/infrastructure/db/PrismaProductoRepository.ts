import { getPrismaClient } from '../../../../shared/db/prisma';
import { NotFoundError } from '../../../../shared/errors/AppError';
import { Producto } from '../../domain/entities/Producto';
import { Variante } from '../../domain/entities/Variante';
import { IProductoRepository } from '../../domain/repositories/IProductoRepository';

const prisma = getPrismaClient();

export class PrismaProductoRepository implements IProductoRepository {
  async withTransaction<T>(fn: (tx: Parameters<typeof prisma.$transaction>[0] extends (arg: infer U) => any ? U : never) => Promise<T>): Promise<T> {
    return prisma.$transaction(async (tx) => fn(tx));
  }

  async crearProductoConVariante(producto: Producto, variantes: Variante[]): Promise<number> {
    const nuevoProducto = await prisma.producto.create({
      data: {
        id_categoria: producto.id_categoria,
        nombre: producto.nombre,
        costo: producto.costo,
        precio_unitario: producto.precio_unitario,
        producto_variante: {
          create: variantes.map((variante) => ({
            talle: variante.talle,
            color: variante.color,
            stock: variante.stock,
          })),
        },
      },
      include: { producto_variante: true },
    });

    return nuevoProducto.id_producto;
  }

  async listarProductos(): Promise<Producto[]> {
    const productos = await prisma.producto.findMany();
    return productos.map(Producto.fromRow);
  }

  async listarVariantePorId(id: number): Promise<Variante[]> {
    const variantes = await prisma.producto_variante.findMany({
      where: { id_producto: id },
    });
    return variantes.map(Variante.fromRow);
  }

  async listarVariante(id: number): Promise<Variante> {
    const variante = await prisma.producto_variante.findFirst({
      where: { id_producto: id }
    });
    if (!variante) throw new NotFoundError('Variante no encontrada');
    return Variante.fromRow(variante);
  }

  async actualizarProducto(id: number, producto: Producto): Promise<number> {
    const updated = await prisma.producto.update({
      where: { id_producto: id },
      data: {
        id_categoria: producto.id_categoria,
        nombre: producto.nombre,
        costo: producto.costo,
        precio_unitario: producto.precio_unitario,
      },
    });

    return updated ? id : -1;
  }

  async actualizarVariante(id: number, variante: Variante): Promise<number> {
    const updated = await prisma.producto_variante.update({
      where: { id_producto_variante: id },
      data: {
        talle: variante.talle,
        stock: variante.stock,
        color: variante.color,
      },
    });

    return updated ? id : -1;
  }

  async eliminarProductoConVariantes(id: number): Promise<boolean> {
    const deleted = await prisma.producto.delete({
      where: { id_producto: id },
      include: { producto_variante: true },
    });
    return !!deleted;
  }

  async eliminarVariante(id: number): Promise<boolean> {
    const deleted = await prisma.producto_variante.delete({
      where: { id_producto_variante: id },
    });
    return !!deleted;
  }

  async restarStockVariante(id: number, cantidad: number): Promise<boolean> {
    const variante = await prisma.producto_variante.findUnique({
      where: { id_producto_variante: id },
    });

    if (!variante || variante.stock < cantidad) {
      throw new NotFoundError('Variante no encontrada o stock insuficiente');
    }

    const updated = await prisma.producto_variante.update({
      where: { id_producto_variante: id },
      data: { stock: variante.stock - cantidad },
    });

    return !!updated;
  }

  async buscarCategoriaPorId(id: number): Promise<boolean> {
    const categoria = await prisma.categoria_producto.findUnique({
      where: { id_categoria_producto: id },
    });
    return !!categoria;
  }
}