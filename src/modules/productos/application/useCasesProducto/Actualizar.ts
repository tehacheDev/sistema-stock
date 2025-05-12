import { NotFoundError } from '../../../../shared/errors/AppError';
import { Producto } from '../../domain/entities/Producto';
import { ProductoRepository } from '../../domain/repositories/ProductoRepository';

export class ActualizarProducto {
  constructor(private readonly productoRepo: ProductoRepository) {}

  async actualizar(id_producto: number, data: Producto): Promise<Producto> {
    const producto = new Producto(
      data.nombre,
      data.categoria,
      data.costo,
      data.precio_unitario
    );
    const productoActualizado = await this.productoRepo.actualizarProducto(id_producto, producto);
    if (!productoActualizado) throw new NotFoundError('Producto no encontrado');
    return productoActualizado;
  }
}