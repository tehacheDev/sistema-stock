import { Producto } from '../entities/Producto';
import { Variante } from '../entities/Variante';

export interface IProductoRepository {
  withTransaction<T>(fn: (tx: any) => Promise<T>): Promise<T>;

  crearProductoConVariante(producto: Producto, variantes: Variante[], tx?: any): Promise<number>;
  listarProductos(): Promise<Producto[]>;
  listarVariantePorId(id: number): Promise<Variante[]>;
  listarVariante(id: number, tx?: any): Promise<Variante>;
  actualizarProducto(id: number, producto: Producto): Promise<number>;
  actualizarVariante(id: number, variante: Variante): Promise<number>;
  eliminarProductoConVariantes(id: number): Promise<boolean>;
  eliminarVariante(id: number): Promise<boolean>;
  restarStockVariante(id: number, cantidad: number, tx?: any): Promise<boolean>;
  buscarCategoriaPorId(id: number): Promise<boolean>;
}