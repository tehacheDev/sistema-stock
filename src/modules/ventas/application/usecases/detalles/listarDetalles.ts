import { IVentaRepository } from '../../../domain/repositories/IVentaRepository';
import { DetalleVentaDTO } from '../../dtos/DetalleVentaDTO';

export class ListarDetalles {
  constructor(private readonly ventaRepo: IVentaRepository) {}

  async listarDetalles(id: number): Promise<DetalleVentaDTO[]> {
    return await this.ventaRepo.listarDetallesPorVenta(id);
  }
}