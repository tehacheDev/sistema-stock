import { Producto } from '../../../domain/entities/Producto';
import { ProductoDTO } from '../../../application/dtos/ProductoDTO';
import { NotFoundError } from '../../../../../shared/errors/AppError';
import { IProductoRepository } from '../../../domain/repositories/IProductoRepository';

export class ActualizarProducto {
  constructor(private readonly productoRepo: IProductoRepository) {}

  async actualizarProducto(id_producto: number, data: ProductoDTO): Promise<number> {
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