import { DetalleVentaDTO } from '../../application/dtos/DetalleVentaDTO';
import { VentaDTO } from '../../application/dtos/VentaDTO';

export interface IVentaRepository {
    withTransaction<T>(fn: (tx: any) => Promise<T>): Promise<T>;
    
    crearVenta(
        venta: VentaDTO, 
        detalles: DetalleVentaDTO[],
        tx?: any // Cliente de transacción opcional
    ): Promise<number>;

    listarVentas(tx?: any): Promise<VentaDTO[]>;

    obtenerVentaPorId(id: number, tx?: any): Promise<VentaDTO>;

    listarDetallesPorVenta(id: number, tx?: any): Promise<DetalleVentaDTO[]>;

    eliminarVenta(id: number, tx?: any): Promise<boolean>;
}