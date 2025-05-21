export interface DetalleVentaDTO {
    id_operacion_venta: number,
    id_producto: number,
    cantidad: number,
    precio_unitario: number,
    id_detalle_venta?: number
}