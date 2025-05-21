// Application
export { RegistrarProducto } from './application/useCases/productos/RegistrarProductoConVariantes';
export { ListarProductos } from './application/useCases/productos/ListarProductos';
export { ListarVariantes } from './application/useCases/variantes/ListarVariantes';
export { ListarVariante } from './application/useCases/variantes/ListarVariante';
export { ActualizarProducto } from './application/useCases/productos/ActualizarProducto';
export { ActualizarVariante } from './application/useCases/variantes/ActualizarVariante';
export { EliminarProducto } from './application/useCases/productos/EliminarProducto';
export { EliminarVariante } from './application/useCases/variantes/EliminarVariante';
export { RestarStock } from './application/useCases/variantes/RestarStock';

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