import { Decimal } from "@prisma/client/runtime/library";
import { VentaDTO } from "../../application/dtos/VentaDTO";

export class Venta {
    constructor(
        public id_operacion: number,
        public id_cliente: number,
        public id_metodo_pago: number,
        public total: Decimal,
        public id_venta?: number
    ) {}

    static fromRow(venta: VentaDTO): Venta {
        return new Venta(
            venta.id_operacion,
            venta.id_cliente,
            venta.id_metodo_pago,
            venta.total,
            venta.id_venta
        );
    }
}