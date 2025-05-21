import { DetalleVentaDTO } from '../../application/dtos/DetalleVentaDTO';
import { VentaDTO } from '../../application/dtos/VentaDTO';

export interface IVentaRepository {
    crearVenta(
        venta: VentaDTO, 
        detalles: DetalleVentaDTO[]
    ): Promise<number>;

    listarVentas(): Promise<VentaDTO[]>;

    obtenerVentaPorId(id: number): Promise<VentaDTO>;

    listarDetallesPorVenta(id: number): Promise<DetalleVentaDTO[]>;

    eliminarVenta(id: number): Promise<boolean>;
}