// Application
export { ListarVentas } from './application/usecases/ventas/listarVentas';
export { CrearVenta } from './application/usecases/ventas/crearVenta';

export * from './application/dtos/VentaDTO';
export * from './application/dtos/DetalleVentaDTO';

// Domain
export * from './domain/entities/Venta';
export * from './domain/entities/DetalleVenta';
export * from './domain/repositories/IVentaRepository';

// Infrastructure
export * from './infrastructure/db/PrismaVentaRepository';

// Routes
export { default as ventasRoute } from './infrastructure/routes/ventaRoute';