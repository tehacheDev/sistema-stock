import { Decimal } from "@prisma/client/runtime/library";

export interface VentaDTO {
    id_operacion: number,
    id_cliente: number,
    id_metodo_pago: number,
    total: Decimal,
    id_venta?: number
}