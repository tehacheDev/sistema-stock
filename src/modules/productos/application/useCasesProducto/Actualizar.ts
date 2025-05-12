import { Producto } from '../../domain/entities/Producto';
import { ProductoRepository } from '../../domain/repositories/ProductoRepository';

export class ActualizarProducto {
  constructor(private readonly productoRepo: ProductoRepository) {}

  async actualizar(id_producto: number, data: Producto): Promise<void> {
    const producto = new Producto(
      data.nombre,
      data.categoria,
      data.costo,
      data.precio_unitario
    );

    await this.productoRepo.actualizarProducto(id_producto, producto);
  }
}