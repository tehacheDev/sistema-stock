import { Producto } from '../../domain/entities/Producto';
import { ProductoRepository } from '../../domain/repositories/ProductoRepository';


export class RegistrarProducto {
  constructor( private readonly productoRepo: ProductoRepository ) {}

  async registrar(producto: Producto) {
    const result  = await this.productoRepo.crearProducto(producto);
    
    return result.id_producto!;
  }
}