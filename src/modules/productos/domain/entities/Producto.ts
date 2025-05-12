export class Producto {
  constructor(
    public nombre: string,
    public categoria: string,
    public costo: number,
    public precio_unitario: number,
    public id_producto?: number
  ) {}
}