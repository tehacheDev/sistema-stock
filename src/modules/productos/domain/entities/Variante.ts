import { VarianteDTO } from "../../application/dtos/VarianteDTO";

export class Variante {
    constructor(
      public id_producto: number,
      public talle: string,
      public stock_actual: number,
      public color: string,
      public id_variante?: number
    ) {}

    static fromRow(row: VarianteDTO): Variante {
      return new Variante(
        row.id_producto,
        row.talle,
        row.stock_actual,
        row.color,
        row.id_variante
      );
    }
}  