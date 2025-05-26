import { IVentaRepository } from '../../../domain/repositories/IVentaRepository';
import { Venta } from '../../../domain/entities/Venta';

export class ListarVentas {
  constructor(private readonly ventaRepo: IVentaRepository) {}

  async listar(): Promise<Venta[]> {
    return await this.ventaRepo.listarVentas();
  }
}