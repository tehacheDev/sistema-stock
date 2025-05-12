import { NotFoundError } from "../../../../shared/errors/AppError";
import { VarianteRepository } from "../../domain/repositories/VarianteRepository";

export class EliminarVariante {
  constructor(private readonly varianteRepo: VarianteRepository) {} 

  async eliminar(id: number): Promise<void> {
    const varianteEliminado = await this.varianteRepo.eliminarVariante(id);
    if (!varianteEliminado) throw new NotFoundError('Variante no encontrado');
  }
}