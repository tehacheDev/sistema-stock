export interface MovimientoDTO {
    id_producto_variante: number;
    tipo_movimiento: string;
    cantidad: number;
    fecha_movimiento: Date;
    comentario?: string;
    id_movimiento?: number;
}