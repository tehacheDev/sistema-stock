import { ProductoVariante } from '../../domain/entities/ProductoVariante';
import { VarianteRepository } from '../../domain/repositories/VarianteRepository';


export class RegistrarVariante {
  constructor( private readonly varianteRepo: VarianteRepository ) {}

  async registrar(variante: ProductoVariante) {
    const {id_producto} = await this.varianteRepo.guardarVariante(variante);
    
    return id_producto;
  }
}