import { Producto } from '../../../domain/entities/Producto';
import { ProductoDTO } from '../../dtos/ProductoDTO';
import { NotFoundError } from '../../../../../shared/errors/AppError';
import { IProductoRepository } from '../../../domain/repositories/IProductoRepository';

export class ActualizarProducto {
  constructor(private readonly productoRepo: IProductoRepository) {}

  async ejecutar(id_producto: number, data: ProductoDTO): Promise<number> {
    const producto = new Producto(
      data.id_categoria,
      data.nombre,
      data.costo,
      data.precio_unitario
    );
    const productoActualizado = await this.productoRepo.actualizarProducto(id_producto, producto);
    if (!productoActualizado) throw new NotFoundError('Producto no encontrado');
    return productoActualizado;
  }
}