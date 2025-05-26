// Application
export { CrearProducto } from './application/useCases/productos/crearProducto';
export { ListarProductos } from './application/useCases/productos/listarProductos';
export { ActualizarProducto } from './application/useCases/productos/actualizarProducto';
export { EliminarProducto } from './application/useCases/productos/eliminarProducto';

export { ListarVariantes } from './application/useCases/variantes/listarVariantes';
export { ListarVariantePorId } from './application/useCases/variantes/listarVariantePorId';
export { ActualizarVariante } from './application/useCases/variantes/actualizarVariante';
export { EliminarVariante } from './application/useCases/variantes/eliminarVariante';

export * from './application/dtos/ProductoDTO';
export * from './application/dtos/VarianteDTO';

// Domain
export * from './domain/entities/Producto';
export * from './domain/entities/Variante';
export * from './domain/repositories/IProductoRepository';

// Infrastructure
export * from './infrastructure/db/PrismaProductoRepository';

// Routes
export { default as productoRoutes } from './infrastructure/routes/productoRoutes';

// Controllers
export { ProductoController } from './infrastructure/controllers/productoController';