import { ProductoVariante } from '../../domain/entities/ProductoVariante';
import { VarianteRepository } from '../../domain/repositories/VarianteRepository';

export class ActualizarVariante {
  constructor(private readonly productoRepo: VarianteRepository) {}

  async actualizar(id_variante: number, data: ProductoVariante): Promise<void> {
    const variante = new ProductoVariante(
      data.id_producto,
      data.talle,
      data.stock_actual,
      data.color
    );

    await this.productoRepo.actualizarVariante(id_variante, variante);
  }
}