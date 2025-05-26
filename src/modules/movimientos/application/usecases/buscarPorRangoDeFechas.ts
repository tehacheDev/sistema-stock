import { IMovimientoRepository } from "../../domain/repositories/IMovimientoRepository";
import { MovimientoDTO } from "../dtos/MovimientoDTO";

export class BuscarPorRangoDeFechas {
  constructor(private readonly movimientoRepo: IMovimientoRepository) {}

  async ejecutar(desde: Date, hasta: Date): Promise<MovimientoDTO[]> {
    return await this.movimientoRepo.buscarPorRangoDeFechas(desde, hasta);
  }
}