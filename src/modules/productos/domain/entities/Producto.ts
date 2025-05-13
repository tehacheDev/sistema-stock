import { ProductoDTO } from "../../application/dtos/ProductoDTO";

export class Producto {
  constructor(
    public nombre: string,
    public categoria: string,
    public costo: number,
    public precio_unitario: number,
    public id_producto?: number
  ) {}

  static fromRow(row: ProductoDTO): Producto {
    return new Producto(
      row.nombre,
      row.categoria,
      row.costo,
      row.precio_unitario,
      row.id_producto
    );
  }
}