import { Decimal } from "@prisma/client/runtime/library";
import { ProductoDTO } from "../../application/dtos/ProductoDTO";

export class Producto {
  constructor(
    public id_categoria: number,
    public nombre: string,
    public costo: Decimal,
    public precio_unitario: Decimal,
    public id_producto?: number
  ) {}

  static fromRow(row: ProductoDTO): Producto {
    return new Producto(
      row.id_categoria,
      row.nombre,
      row.costo,
      row.precio_unitario,
      row.id_producto
    );
  }
}