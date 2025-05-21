import { DetalleVentaDTO } from "../../application/dtos/DetalleVentaDTO";

export class DetalleVenta {
    constructor(
        public id_operacion_venta: number,
        public id_producto: number,
        public cantidad: number,
        public precio_unitario: number,
        public id_detalle_venta?: number
    ) {}

    static fromRow(detalle: DetalleVentaDTO): DetalleVenta {
        return new DetalleVenta(
            detalle.id_operacion_venta,
            detalle.id_producto,
            detalle.cantidad,
            detalle.precio_unitario,
            detalle.id_detalle_venta 
        )
    }
}