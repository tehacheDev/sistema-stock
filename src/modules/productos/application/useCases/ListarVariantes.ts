import { IProductoRepository } from '../../domain/repositories/IProductoRepository';
import { Variante } from '../../domain/entities/Variante';

export class ListarVariantes {
  constructor(private readonly productoRepo: IProductoRepository) {}

  async listarVariantes(id: number): Promise<Variante[]> {
    const variantes = await this.productoRepo.listarVariantePorId(id);

    return variantes.map((variante) => {
        return {
            id_variante: variante.id_variante,
            id_producto: variante.id_producto,
            talle: variante.talle,
            stock_actual: variante.stock_actual,
            color: variante.color,
        };
    })
  }
}