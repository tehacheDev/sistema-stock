import { NotFoundError } from '../../../../../shared/errors/AppError';
import { IProductoRepository } from '../../../domain/repositories/IProductoRepository';

export class EliminarVariante {
  constructor(private readonly productoRepo: IProductoRepository) {}

  async ejecutar(id: number): Promise<void> {
    const varianteEliminada = await this.productoRepo.eliminarVariante(id);
    if (!varianteEliminada) throw new NotFoundError('Variante no encontrada');
  }
}