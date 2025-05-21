import { Producto } from '../../../domain/entities/Producto';
import { IProductoRepository } from '../../../domain/repositories/IProductoRepository';
import { ProductoDTO } from '../../dtos/ProductoDTO';
import { VarianteDTO } from '../../dtos/VarianteDTO';


export class RegistrarProducto {
  constructor( private readonly productoRepo: IProductoRepository ) {}

  async registrar(productoDTO: ProductoDTO, variantesDTO: VarianteDTO[]): Promise<number> {
    const producto = new Producto(
      productoDTO.nombre,
      productoDTO.categoria,
      productoDTO.costo,
      productoDTO.precio_unitario
    );
    const variantes = variantesDTO.map((variante) => {
      return {
        id_producto: 0,
        talle: variante.talle,
        stock_actual: variante.stock_actual,
        color: variante.color
      };
    });
    const result = await this.productoRepo.crearProductoConVariante(producto, variantes);
    return result;
  }
}