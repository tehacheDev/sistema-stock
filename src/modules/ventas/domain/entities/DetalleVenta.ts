import { Decimal } from "@prisma/client/runtime/library";
import { DetalleVentaDTO } from "../../application/dtos/DetalleVentaDTO";

export class DetalleVenta {
    constructor(
        public id_venta: number,
        public id_producto_variante: number,
        public cantidad: number,
        public precio_unitario: Decimal,
    ) {}

    static fromRow(detalle: DetalleVentaDTO): DetalleVenta {
        return new DetalleVenta(
            detalle.id_venta,
            detalle.id_producto_variante,
            detalle.cantidad,
            detalle.precio_unitario
        )
    }
}