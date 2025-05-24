import { IVentaRepository } from '../../../domain/repositories/IVentaRepository';
import { VentaDTO } from '../../dtos/VentaDTO';

export class ListarVenta {
  constructor(private readonly ventaRepo: IVentaRepository) {}

  async listar(id: number): Promise<VentaDTO> {
    return await this.ventaRepo.obtenerVentaPorId(id);
  }
}