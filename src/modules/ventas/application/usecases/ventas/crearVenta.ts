import { IVentaRepository } from '../../../domain/repositories/IVentaRepository';
import { IProductoRepository } from '../../../../productos/index';
import { IMovimientoRepository } from '../../../../movimientos';
import { VentaDTO } from '../../dtos/VentaDTO';
import { DetalleVentaDTO } from '../../dtos/DetalleVentaDTO';
import { NotFoundError } from '../../../../../shared/errors/AppError';

export class CrearVenta {
  constructor(
    private readonly ventaRepository: IVentaRepository,
    private readonly productoRepository: IProductoRepository,
    private readonly movimientoRepository: IMovimientoRepository
  ) {}

  async execute(venta: VentaDTO, detalles: DetalleVentaDTO[]): Promise<number> {
    return this.ventaRepository.withTransaction(async (tx) => {
      // 1. Validar stock
      for (const detalle of detalles) {
        const variante = await this.productoRepository.listarVariante(detalle.id_producto_variante, tx);
        if (!variante || variante.stock < detalle.cantidad) throw new NotFoundError(`Stock insuficiente para la venta`);
      }

      // 2. Crear la venta 
      const idVenta = await this.ventaRepository.crearVenta(venta, detalles, tx);

      // 3. Restar stock y crear movimientos
      for (const detalle of detalles) {
        await this.productoRepository.restarStockVariante(detalle.id_producto_variante, detalle.cantidad, tx);

        await this.movimientoRepository.crearMovimiento({
          id_producto_variante: detalle.id_producto_variante,
          tipo_movimiento: 'salida',
          cantidad: detalle.cantidad,
          fecha_movimiento: new Date(),
          comentario: `Venta realizada con ID: ${idVenta}`
        }, tx);
      }

      // 4. Crea el Pago
      return idVenta;
    });
  }
}