import { IVentaRepository } from '../../../domain/repositories/IVentaRepository';
import { IProductoRepository } from '../../../../productos/index';
import { VentaDTO } from '../../dtos/VentaDTO';
import { DetalleVentaDTO } from '../../dtos/DetalleVentaDTO';
import { NotFoundError } from '../../../../../shared/errors/AppError';

export class CrearVenta {
  constructor(
    private readonly ventaRepository: IVentaRepository,
    private readonly productoRepository: IProductoRepository
  ) {}

  async execute(venta: VentaDTO, detalles: DetalleVentaDTO[]): Promise<number> {
    // 1. Validar stock
    for (const detalle of detalles) {
      const variante = await this.productoRepository.listarVariante(detalle.id_producto);
      if (!variante || variante.stock_actual < detalle.cantidad) {
        throw new NotFoundError(`Stock insuficiente para la venta`);
      }
    }

    // 2. Crear la venta 
    const idVenta = await this.ventaRepository.crearVenta(venta, detalles);

    // 3. Restar stock
    for (const detalle of detalles) {
      await this.productoRepository.restarStock(detalle.id_producto, detalle.cantidad);
    }

    // 4. Crea el Pago
    
    return idVenta;
  }
}