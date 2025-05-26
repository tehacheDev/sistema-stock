import { IMovimientoRepository } from "../../domain/repositories/IMovimientoRepository";
import { MovimientoDTO } from "../dtos/MovimientoDTO";

export class BuscarPorOperacion {
  constructor(private readonly movimientoRepo: IMovimientoRepository) {}

  async ejecutar(operacion: number): Promise<MovimientoDTO[]> {
    return await this.movimientoRepo.buscarPorOperacion(operacion);
  }
}