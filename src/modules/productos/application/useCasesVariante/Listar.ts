import { ProductoVariante } from "../../domain/entities/ProductoVariante";
import { VarianteRepository } from "../../domain/repositories/VarianteRepository";

export class ListarVariante {
    constructor(private readonly varianteRepo: VarianteRepository) {}
    
    async listar(): Promise<ProductoVariante[]> {
        return await this.varianteRepo.obtenerVariantes();
    }
}