import { Decimal } from "@prisma/client/runtime/library";

export interface DetalleVentaDTO {
    id_venta: number;
    id_producto_variante: number;
    cantidad: number;
    precio_unitario: Decimal;
    id_detalle_venta?: number;
}