
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.8.2
 * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
 */
Prisma.prismaVersion = {
  client: "6.8.2",
  engine: "2060c79ba17c6bb9f5823312b6f6b7f4a845738e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Categoria_productoScalarFieldEnum = {
  id_categoria_producto: 'id_categoria_producto',
  nombre: 'nombre'
};

exports.Prisma.ClienteScalarFieldEnum = {
  id_cliente: 'id_cliente',
  nombre: 'nombre',
  apellido: 'apellido',
  celular: 'celular'
};

exports.Prisma.Estado_operacionScalarFieldEnum = {
  id_estado_operacion: 'id_estado_operacion',
  nombre: 'nombre'
};

exports.Prisma.Inventario_movimientoScalarFieldEnum = {
  id_movimiento: 'id_movimiento',
  id_producto_variante: 'id_producto_variante',
  tipo_movimiento: 'tipo_movimiento',
  cantidad: 'cantidad',
  id_operacion: 'id_operacion',
  fecha_movimiento: 'fecha_movimiento',
  comentario: 'comentario'
};

exports.Prisma.Metodo_pagoScalarFieldEnum = {
  id_metodo_pago: 'id_metodo_pago',
  nombre: 'nombre'
};

exports.Prisma.OperacionScalarFieldEnum = {
  id_operacion: 'id_operacion',
  id_tipo_operacion: 'id_tipo_operacion',
  id_estado_operacion: 'id_estado_operacion',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion'
};

exports.Prisma.Operacion_ventaScalarFieldEnum = {
  id_venta: 'id_venta',
  id_operacion: 'id_operacion',
  id_cliente: 'id_cliente',
  id_metodo_pago: 'id_metodo_pago',
  total: 'total'
};

exports.Prisma.PagoScalarFieldEnum = {
  id_pago: 'id_pago',
  id_venta: 'id_venta',
  id_metodo_pago: 'id_metodo_pago',
  monto_pagado: 'monto_pagado',
  fecha_creacion: 'fecha_creacion'
};

exports.Prisma.ProductoScalarFieldEnum = {
  id_producto: 'id_producto',
  id_categoria: 'id_categoria',
  nombre: 'nombre',
  costo: 'costo',
  precio_unitario: 'precio_unitario'
};

exports.Prisma.Producto_varianteScalarFieldEnum = {
  id_producto_variante: 'id_producto_variante',
  id_producto: 'id_producto',
  talle: 'talle',
  color: 'color',
  stock: 'stock'
};

exports.Prisma.Tipo_operacionScalarFieldEnum = {
  id_tipo_operacion: 'id_tipo_operacion',
  nombre: 'nombre'
};

exports.Prisma.Venta_detalleScalarFieldEnum = {
  id_venta: 'id_venta',
  id_producto_variante: 'id_producto_variante',
  cantidad: 'cantidad',
  precio_unitario: 'precio_unitario'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  categoria_producto: 'categoria_producto',
  cliente: 'cliente',
  estado_operacion: 'estado_operacion',
  inventario_movimiento: 'inventario_movimiento',
  metodo_pago: 'metodo_pago',
  operacion: 'operacion',
  operacion_venta: 'operacion_venta',
  pago: 'pago',
  producto: 'producto',
  producto_variante: 'producto_variante',
  tipo_operacion: 'tipo_operacion',
  venta_detalle: 'venta_detalle'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
