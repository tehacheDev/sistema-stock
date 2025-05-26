import { IMovimientoRepository } from "../../domain/repositories/IMovimientoRepository";
import { MovimientoDTO } from "../dtos/MovimientoDTO";

export class ListarTodos {
  constructor(private readonly movimientoRepo: IMovimientoRepository) {}

  async ejecutar(): Promise<MovimientoDTO[]> {
    return await this.movimientoRepo.listarTodos();
  }
}