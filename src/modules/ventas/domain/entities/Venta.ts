import { VentaDTO } from "../../application/dtos/VentaDTO";

export class Venta {
    constructor(
        public id_cliente: number,
        public fecha: Date,
        public total: number,
        public metodo_pago: string,
        public id_operacion?: number,
        public id_operacion_ventas?: number
    ) {}

    static fromRow(venta: VentaDTO): Venta {
        return new Venta(
            venta.id_cliente, 
            venta.fecha, 
            venta.total, 
            venta.metodo_pago, 
            venta.id_operacion, 
            venta.id_operacion_ventas
        );
    }
}