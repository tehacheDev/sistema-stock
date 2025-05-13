import { Producto } from '../entities/Producto';
import { Variante } from '../entities/Variante';

export interface IProductoRepository {
  crearProductoConVariante(producto: Producto, variantes: Variante[]): Promise<number>;
  listarProductos(): Promise<Producto[]>;
  listarVariantePorId(id: number): Promise<Variante[]>;
  actualizarProducto(id: number, producto: Producto): Promise<number>;
  actualizarVariante(id: number, variante: Variante): Promise<number>;
  eliminarProductoConVariantes(id: number): Promise<boolean>;
  eliminarVariante(id: number): Promise<boolean>;
}