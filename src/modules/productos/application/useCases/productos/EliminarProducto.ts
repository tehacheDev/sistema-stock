import { NotFoundError } from '../../../../../shared/errors/AppError';
import { IProductoRepository } from '../../../domain/repositories/IProductoRepository';

export class EliminarProducto {
  constructor(private readonly productoRepo: IProductoRepository) {}

  async ejecutar(id: number): Promise<void> {
    const productoEliminado = await this.productoRepo.eliminarProductoConVariantes(id);
    if (!productoEliminado) throw new NotFoundError('Producto no encontrado');
  }
}