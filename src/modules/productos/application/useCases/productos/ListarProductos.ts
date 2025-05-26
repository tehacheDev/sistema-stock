import { IProductoRepository } from '../../../domain/repositories/IProductoRepository';
import { Producto } from '../../../domain/entities/Producto';

export class ListarProductos {
  constructor(private readonly productoRepo: IProductoRepository) {}

  async ejecutar(): Promise<Producto[]> {
    return await this.productoRepo.listarProductos();
  }
}