import { MovimientoDTO } from "../../application/dtos/MovimientoDTO";

export class Movimiento {
  constructor(
    public id_producto_variante: number,
    public tipo_movimiento: string,
    public cantidad: number,
    public fecha_movimiento: Date,
    public comentario?: string,
    public id_movimiento?: number
  ) {}

  static fromRow(row: MovimientoDTO): Movimiento {

    return new Movimiento(
      row.id_producto_variante,
      row.tipo_movimiento,
      row.cantidad,
      row.fecha_movimiento,
      row.comentario,
      row.id_movimiento
    );
  }
}