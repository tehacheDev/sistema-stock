import { VarianteRepository } from "../../domain/repositories/VarianteRepository";

export class EliminarVariante {
  constructor(private readonly varianteRepo: VarianteRepository) {} 

  async eliminar(id: number): Promise<void> {
    await this.varianteRepo.eliminarVariante(id);
  }
}