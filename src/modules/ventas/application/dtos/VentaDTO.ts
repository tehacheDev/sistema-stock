export interface VentaDTO {
    id_cliente: number,
    fecha: Date,
    total: number,
    metodo_pago: string,
    id_operacion?: number,
    id_operacion_ventas?: number
}