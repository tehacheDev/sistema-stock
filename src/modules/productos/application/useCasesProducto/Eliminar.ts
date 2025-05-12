import { ProductoRepository } from '../../domain/repositories/ProductoRepository';

export class EliminarProducto {
  constructor(private readonly productoRepo: ProductoRepository) {}

  async eliminar(id: number): Promise<void> {
    await this.productoRepo.eliminarProducto(id);
  }
}