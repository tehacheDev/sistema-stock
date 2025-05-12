import { ProductoVariante } from '../entities/ProductoVariante';

export interface VarianteRepository {
  guardarVariante(variante: ProductoVariante): Promise<ProductoVariante>;
  obtenerVariantes(): Promise<ProductoVariante[]>;
  actualizarVariante(id: number, variante: ProductoVariante): Promise<ProductoVariante>;
  eliminarVariante(id: number): Promise<boolean>;
};
