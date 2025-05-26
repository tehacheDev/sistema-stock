import { IMovimientoRepository } from "../../domain/repositories/IMovimientoRepository";
import { MovimientoDTO } from "../dtos/MovimientoDTO";

export class BuscarPorIdVariante {
  constructor(private readonly movimientoRepo: IMovimientoRepository) {}

  async ejecutar(id_variante: number): Promise<MovimientoDTO[]> {
    return await this.movimientoRepo.buscarPorIdVariante(id_variante);
  }
}