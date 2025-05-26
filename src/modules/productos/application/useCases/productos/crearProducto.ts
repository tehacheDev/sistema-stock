import { BadRequestError } from '../../../../../shared/errors/AppError';
import { Producto } from '../../../domain/entities/Producto';
import { IProductoRepository } from '../../../domain/repositories/IProductoRepository';
import { ProductoDTO } from '../../dtos/ProductoDTO';
import { VarianteDTO } from '../../dtos/VarianteDTO';


export class CrearProducto {
  constructor( private readonly productoRepo: IProductoRepository ) {}

  async ejecutar(productoDTO: ProductoDTO, variantesDTO: VarianteDTO[]): Promise<number> {
    
    const categoria = productoDTO.id_categoria;
    const booleanCategoria = await this.productoRepo.buscarCategoriaPorId(categoria);
    if (!booleanCategoria) throw new BadRequestError('Categoria no encontrada');
    
    const producto = new Producto(
      productoDTO.id_categoria,
      productoDTO.nombre,
      productoDTO.costo,
      productoDTO.precio_unitario
    );
    
    const variantes = variantesDTO.map((variante) => {
      return {
        id_producto: 0,
        talle: variante.talle,
        color: variante.color,
        stock: variante.stock,
      };
    });
    const result = await this.productoRepo.crearProductoConVariante(producto, variantes);
    return result;
  }
}