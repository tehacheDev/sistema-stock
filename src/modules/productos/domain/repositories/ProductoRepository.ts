import { Producto } from '../entities/Producto';

export interface ProductoRepository {
  crearProducto(producto: Producto): Promise<Producto>;
  obtenerProductos(): Promise<Producto[]>;
  actualizarProducto(id: number, producto: Producto): Promise<Producto>;
  eliminarProducto(id: number): Promise<void>;
};
