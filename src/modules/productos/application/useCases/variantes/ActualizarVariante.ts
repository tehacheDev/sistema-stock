import { Variante } from '../../../domain/entities/Variante';
import { VarianteDTO } from '../../dtos/VarianteDTO';
import { NotFoundError } from '../../../../../shared/errors/AppError';
import { IProductoRepository } from '../../../domain/repositories/IProductoRepository';

export class ActualizarVariante {
  constructor(private readonly productoRepo: IProductoRepository) {}

  async actualizarVariante(id_producto: number, data: VarianteDTO): Promise<number> {
    const variante = new Variante(
        data.id_producto,
        data.talle,
        data.stock_actual,
        data.color,
    );
    const varianteActualizado = await this.productoRepo.actualizarVariante(id_producto, variante);
    if (!varianteActualizado) throw new NotFoundError('Variante no encontrado');
    return varianteActualizado;
  }
}