import { ProductoRepository } from '../../domain/repositories/ProductoRepository';
import { Producto } from '../../domain/entities/Producto';

export class ListarProductos {
  constructor(private readonly productoRepo: ProductoRepository) {}

  async listar(): Promise<Producto[]> {
    return await this.productoRepo.obtenerProductos();
  }
}