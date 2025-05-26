import { IMovimientoRepository } from "../../domain/repositories/IMovimientoRepository";
import { MovimientoDTO } from "../dtos/MovimientoDTO";

export class ListarMovimientoPorId {
  constructor(private readonly movimientoRepo: IMovimientoRepository) {}

  async ejecutar(id: number): Promise<MovimientoDTO | null> {
    return await this.movimientoRepo.listarMovimientoPorId(id);
  }
}