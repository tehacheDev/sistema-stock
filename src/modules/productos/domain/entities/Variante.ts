import { VarianteDTO } from "../../application/dtos/VarianteDTO";

export class Variante {
    constructor(
      public id_producto: number,
      public talle: string,
      public color: string,
      public stock: number,
      public id_producto_variante?: number
    ) {}

    static fromRow(row: VarianteDTO): Variante {
      return new Variante(
        row.id_producto,
        row.talle,
        row.color,
        row.stock,
        row.id_producto_variante
      );
    }
}  