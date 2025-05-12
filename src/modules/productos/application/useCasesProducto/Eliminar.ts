import { NotFoundError } from '../../../../shared/errors/AppError';
import { ProductoRepository } from '../../domain/repositories/ProductoRepository';

export class EliminarProducto {
  constructor(private readonly productoRepo: ProductoRepository) {}

  async eliminar(id: number): Promise<void> {
    const productoEliminado = await this.productoRepo.eliminarProducto(id);
    if (!productoEliminado) throw new NotFoundError('Producto no encontrado');
  }
}