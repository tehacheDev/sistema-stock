import { IMovimientoRepository } from "../../domain/repositories/IMovimientoRepository";
import { MovimientoDTO } from "../dtos/MovimientoDTO";

export class BuscarPorTipo {
  constructor(private readonly movimientoRepo: IMovimientoRepository) {}

  async ejecutar(tipo: 'entrada' | 'salida' | 'ajuste'): Promise<MovimientoDTO[]> {
    return await this.movimientoRepo.buscarPorTipo(tipo);
  }
}