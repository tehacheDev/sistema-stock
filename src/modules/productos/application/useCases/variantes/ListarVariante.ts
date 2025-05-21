import { IProductoRepository } from '../../../domain/repositories/IProductoRepository';
import { Variante } from '../../../domain/entities/Variante';

export class ListarVariante {
  constructor(private readonly productoRepo: IProductoRepository) {}

  async listarVariante(id: number): Promise<Variante> {
    const variante = await this.productoRepo.listarVariante(id);

    return Variante.fromRow(variante);
  }
}