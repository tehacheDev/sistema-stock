export class ProductoVariante {
    constructor(
      public id_producto: number,
      public talle: string,
      public stock_actual: number,
      public color: string,
      public id_variante?: number
    ) {}
}  