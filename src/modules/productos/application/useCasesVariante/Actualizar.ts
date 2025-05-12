import { ProductoVariante } from '../../domain/entities/ProductoVariante';
import { VarianteRepository } from '../../domain/repositories/VarianteRepository';

export class ActualizarVariante {
  constructor(private readonly productoRepo: VarianteRepository) {}

  async actualizar(id_variante: number, data: ProductoVariante): Promise<ProductoVariante> {
    const variante = new ProductoVariante(
      data.id_producto,
      data.talle,
      data.stock_actual,
      data.color
    );

    const varianteActualizada = await this.productoRepo.actualizarVariante(id_variante, variante);
    if (!varianteActualizada) throw new Error('Variante no encontrada');
    return varianteActualizada;
  }
}