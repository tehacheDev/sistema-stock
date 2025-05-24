import { NotFoundError } from '../../../../../shared/errors/AppError';
import { IVentaRepository } from '../../../domain/repositories/IVentaRepository';

export class EliminarVenta {
  constructor(private readonly ventaRepo: IVentaRepository) {}

    async execute(id: number): Promise<void> {
        const ventaEliminada = await this.ventaRepo.eliminarVenta(id);
        if (!ventaEliminada) throw new NotFoundError('Venta no encontrada');
    }
}