
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model categoria_producto
 * 
 */
export type categoria_producto = $Result.DefaultSelection<Prisma.$categoria_productoPayload>
/**
 * Model cliente
 * 
 */
export type cliente = $Result.DefaultSelection<Prisma.$clientePayload>
/**
 * Model estado_operacion
 * 
 */
export type estado_operacion = $Result.DefaultSelection<Prisma.$estado_operacionPayload>
/**
 * Model inventario_movimiento
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type inventario_movimiento = $Result.DefaultSelection<Prisma.$inventario_movimientoPayload>
/**
 * Model metodo_pago
 * 
 */
export type metodo_pago = $Result.DefaultSelection<Prisma.$metodo_pagoPayload>
/**
 * Model operacion
 * 
 */
export type operacion = $Result.DefaultSelection<Prisma.$operacionPayload>
/**
 * Model operacion_venta
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type operacion_venta = $Result.DefaultSelection<Prisma.$operacion_ventaPayload>
/**
 * Model pago
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type pago = $Result.DefaultSelection<Prisma.$pagoPayload>
/**
 * Model producto
 * 
 */
export type producto = $Result.DefaultSelection<Prisma.$productoPayload>
/**
 * Model producto_variante
 * 
 */
export type producto_variante = $Result.DefaultSelection<Prisma.$producto_variantePayload>
/**
 * Model tipo_operacion
 * 
 */
export type tipo_operacion = $Result.DefaultSelection<Prisma.$tipo_operacionPayload>
/**
 * Model venta_detalle
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type venta_detalle = $Result.DefaultSelection<Prisma.$venta_detallePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categoria_productos
 * const categoria_productos = await prisma.categoria_producto.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categoria_productos
   * const categoria_productos = await prisma.categoria_producto.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categoria_producto`: Exposes CRUD operations for the **categoria_producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categoria_productos
    * const categoria_productos = await prisma.categoria_producto.findMany()
    * ```
    */
  get categoria_producto(): Prisma.categoria_productoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.clienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estado_operacion`: Exposes CRUD operations for the **estado_operacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estado_operacions
    * const estado_operacions = await prisma.estado_operacion.findMany()
    * ```
    */
  get estado_operacion(): Prisma.estado_operacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventario_movimiento`: Exposes CRUD operations for the **inventario_movimiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventario_movimientos
    * const inventario_movimientos = await prisma.inventario_movimiento.findMany()
    * ```
    */
  get inventario_movimiento(): Prisma.inventario_movimientoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metodo_pago`: Exposes CRUD operations for the **metodo_pago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metodo_pagos
    * const metodo_pagos = await prisma.metodo_pago.findMany()
    * ```
    */
  get metodo_pago(): Prisma.metodo_pagoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operacion`: Exposes CRUD operations for the **operacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operacions
    * const operacions = await prisma.operacion.findMany()
    * ```
    */
  get operacion(): Prisma.operacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operacion_venta`: Exposes CRUD operations for the **operacion_venta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operacion_ventas
    * const operacion_ventas = await prisma.operacion_venta.findMany()
    * ```
    */
  get operacion_venta(): Prisma.operacion_ventaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pago`: Exposes CRUD operations for the **pago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagos
    * const pagos = await prisma.pago.findMany()
    * ```
    */
  get pago(): Prisma.pagoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.productoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto_variante`: Exposes CRUD operations for the **producto_variante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Producto_variantes
    * const producto_variantes = await prisma.producto_variante.findMany()
    * ```
    */
  get producto_variante(): Prisma.producto_varianteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipo_operacion`: Exposes CRUD operations for the **tipo_operacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipo_operacions
    * const tipo_operacions = await prisma.tipo_operacion.findMany()
    * ```
    */
  get tipo_operacion(): Prisma.tipo_operacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venta_detalle`: Exposes CRUD operations for the **venta_detalle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Venta_detalles
    * const venta_detalles = await prisma.venta_detalle.findMany()
    * ```
    */
  get venta_detalle(): Prisma.venta_detalleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categoria_producto" | "cliente" | "estado_operacion" | "inventario_movimiento" | "metodo_pago" | "operacion" | "operacion_venta" | "pago" | "producto" | "producto_variante" | "tipo_operacion" | "venta_detalle"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categoria_producto: {
        payload: Prisma.$categoria_productoPayload<ExtArgs>
        fields: Prisma.categoria_productoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoria_productoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_productoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoria_productoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_productoPayload>
          }
          findFirst: {
            args: Prisma.categoria_productoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_productoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoria_productoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_productoPayload>
          }
          findMany: {
            args: Prisma.categoria_productoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_productoPayload>[]
          }
          create: {
            args: Prisma.categoria_productoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_productoPayload>
          }
          createMany: {
            args: Prisma.categoria_productoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoria_productoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_productoPayload>[]
          }
          delete: {
            args: Prisma.categoria_productoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_productoPayload>
          }
          update: {
            args: Prisma.categoria_productoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_productoPayload>
          }
          deleteMany: {
            args: Prisma.categoria_productoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoria_productoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoria_productoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_productoPayload>[]
          }
          upsert: {
            args: Prisma.categoria_productoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_productoPayload>
          }
          aggregate: {
            args: Prisma.Categoria_productoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria_producto>
          }
          groupBy: {
            args: Prisma.categoria_productoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Categoria_productoGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoria_productoCountArgs<ExtArgs>
            result: $Utils.Optional<Categoria_productoCountAggregateOutputType> | number
          }
        }
      }
      cliente: {
        payload: Prisma.$clientePayload<ExtArgs>
        fields: Prisma.clienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findFirst: {
            args: Prisma.clienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findMany: {
            args: Prisma.clienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          create: {
            args: Prisma.clienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          createMany: {
            args: Prisma.clienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          delete: {
            args: Prisma.clienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          update: {
            args: Prisma.clienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          deleteMany: {
            args: Prisma.clienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          upsert: {
            args: Prisma.clienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.clienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.clienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      estado_operacion: {
        payload: Prisma.$estado_operacionPayload<ExtArgs>
        fields: Prisma.estado_operacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.estado_operacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_operacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.estado_operacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_operacionPayload>
          }
          findFirst: {
            args: Prisma.estado_operacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_operacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.estado_operacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_operacionPayload>
          }
          findMany: {
            args: Prisma.estado_operacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_operacionPayload>[]
          }
          create: {
            args: Prisma.estado_operacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_operacionPayload>
          }
          createMany: {
            args: Prisma.estado_operacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.estado_operacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_operacionPayload>[]
          }
          delete: {
            args: Prisma.estado_operacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_operacionPayload>
          }
          update: {
            args: Prisma.estado_operacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_operacionPayload>
          }
          deleteMany: {
            args: Prisma.estado_operacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.estado_operacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.estado_operacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_operacionPayload>[]
          }
          upsert: {
            args: Prisma.estado_operacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_operacionPayload>
          }
          aggregate: {
            args: Prisma.Estado_operacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstado_operacion>
          }
          groupBy: {
            args: Prisma.estado_operacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Estado_operacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.estado_operacionCountArgs<ExtArgs>
            result: $Utils.Optional<Estado_operacionCountAggregateOutputType> | number
          }
        }
      }
      inventario_movimiento: {
        payload: Prisma.$inventario_movimientoPayload<ExtArgs>
        fields: Prisma.inventario_movimientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventario_movimientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_movimientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventario_movimientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_movimientoPayload>
          }
          findFirst: {
            args: Prisma.inventario_movimientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_movimientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventario_movimientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_movimientoPayload>
          }
          findMany: {
            args: Prisma.inventario_movimientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_movimientoPayload>[]
          }
          create: {
            args: Prisma.inventario_movimientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_movimientoPayload>
          }
          createMany: {
            args: Prisma.inventario_movimientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inventario_movimientoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_movimientoPayload>[]
          }
          delete: {
            args: Prisma.inventario_movimientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_movimientoPayload>
          }
          update: {
            args: Prisma.inventario_movimientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_movimientoPayload>
          }
          deleteMany: {
            args: Prisma.inventario_movimientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventario_movimientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.inventario_movimientoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_movimientoPayload>[]
          }
          upsert: {
            args: Prisma.inventario_movimientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_movimientoPayload>
          }
          aggregate: {
            args: Prisma.Inventario_movimientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventario_movimiento>
          }
          groupBy: {
            args: Prisma.inventario_movimientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Inventario_movimientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventario_movimientoCountArgs<ExtArgs>
            result: $Utils.Optional<Inventario_movimientoCountAggregateOutputType> | number
          }
        }
      }
      metodo_pago: {
        payload: Prisma.$metodo_pagoPayload<ExtArgs>
        fields: Prisma.metodo_pagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.metodo_pagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodo_pagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.metodo_pagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodo_pagoPayload>
          }
          findFirst: {
            args: Prisma.metodo_pagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodo_pagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.metodo_pagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodo_pagoPayload>
          }
          findMany: {
            args: Prisma.metodo_pagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodo_pagoPayload>[]
          }
          create: {
            args: Prisma.metodo_pagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodo_pagoPayload>
          }
          createMany: {
            args: Prisma.metodo_pagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.metodo_pagoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodo_pagoPayload>[]
          }
          delete: {
            args: Prisma.metodo_pagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodo_pagoPayload>
          }
          update: {
            args: Prisma.metodo_pagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodo_pagoPayload>
          }
          deleteMany: {
            args: Prisma.metodo_pagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.metodo_pagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.metodo_pagoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodo_pagoPayload>[]
          }
          upsert: {
            args: Prisma.metodo_pagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodo_pagoPayload>
          }
          aggregate: {
            args: Prisma.Metodo_pagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetodo_pago>
          }
          groupBy: {
            args: Prisma.metodo_pagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Metodo_pagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.metodo_pagoCountArgs<ExtArgs>
            result: $Utils.Optional<Metodo_pagoCountAggregateOutputType> | number
          }
        }
      }
      operacion: {
        payload: Prisma.$operacionPayload<ExtArgs>
        fields: Prisma.operacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.operacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.operacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload>
          }
          findFirst: {
            args: Prisma.operacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.operacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload>
          }
          findMany: {
            args: Prisma.operacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload>[]
          }
          create: {
            args: Prisma.operacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload>
          }
          createMany: {
            args: Prisma.operacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.operacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload>[]
          }
          delete: {
            args: Prisma.operacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload>
          }
          update: {
            args: Prisma.operacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload>
          }
          deleteMany: {
            args: Prisma.operacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.operacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.operacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload>[]
          }
          upsert: {
            args: Prisma.operacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload>
          }
          aggregate: {
            args: Prisma.OperacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperacion>
          }
          groupBy: {
            args: Prisma.operacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.operacionCountArgs<ExtArgs>
            result: $Utils.Optional<OperacionCountAggregateOutputType> | number
          }
        }
      }
      operacion_venta: {
        payload: Prisma.$operacion_ventaPayload<ExtArgs>
        fields: Prisma.operacion_ventaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.operacion_ventaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacion_ventaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.operacion_ventaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacion_ventaPayload>
          }
          findFirst: {
            args: Prisma.operacion_ventaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacion_ventaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.operacion_ventaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacion_ventaPayload>
          }
          findMany: {
            args: Prisma.operacion_ventaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacion_ventaPayload>[]
          }
          create: {
            args: Prisma.operacion_ventaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacion_ventaPayload>
          }
          createMany: {
            args: Prisma.operacion_ventaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.operacion_ventaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacion_ventaPayload>[]
          }
          delete: {
            args: Prisma.operacion_ventaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacion_ventaPayload>
          }
          update: {
            args: Prisma.operacion_ventaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacion_ventaPayload>
          }
          deleteMany: {
            args: Prisma.operacion_ventaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.operacion_ventaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.operacion_ventaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacion_ventaPayload>[]
          }
          upsert: {
            args: Prisma.operacion_ventaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacion_ventaPayload>
          }
          aggregate: {
            args: Prisma.Operacion_ventaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperacion_venta>
          }
          groupBy: {
            args: Prisma.operacion_ventaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Operacion_ventaGroupByOutputType>[]
          }
          count: {
            args: Prisma.operacion_ventaCountArgs<ExtArgs>
            result: $Utils.Optional<Operacion_ventaCountAggregateOutputType> | number
          }
        }
      }
      pago: {
        payload: Prisma.$pagoPayload<ExtArgs>
        fields: Prisma.pagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload>
          }
          findFirst: {
            args: Prisma.pagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload>
          }
          findMany: {
            args: Prisma.pagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload>[]
          }
          create: {
            args: Prisma.pagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload>
          }
          createMany: {
            args: Prisma.pagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pagoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload>[]
          }
          delete: {
            args: Prisma.pagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload>
          }
          update: {
            args: Prisma.pagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload>
          }
          deleteMany: {
            args: Prisma.pagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pagoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload>[]
          }
          upsert: {
            args: Prisma.pagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload>
          }
          aggregate: {
            args: Prisma.PagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePago>
          }
          groupBy: {
            args: Prisma.pagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pagoCountArgs<ExtArgs>
            result: $Utils.Optional<PagoCountAggregateOutputType> | number
          }
        }
      }
      producto: {
        payload: Prisma.$productoPayload<ExtArgs>
        fields: Prisma.productoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          findFirst: {
            args: Prisma.productoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          findMany: {
            args: Prisma.productoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>[]
          }
          create: {
            args: Prisma.productoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          createMany: {
            args: Prisma.productoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>[]
          }
          delete: {
            args: Prisma.productoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          update: {
            args: Prisma.productoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          deleteMany: {
            args: Prisma.productoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>[]
          }
          upsert: {
            args: Prisma.productoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.productoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.productoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      producto_variante: {
        payload: Prisma.$producto_variantePayload<ExtArgs>
        fields: Prisma.producto_varianteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.producto_varianteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$producto_variantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.producto_varianteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$producto_variantePayload>
          }
          findFirst: {
            args: Prisma.producto_varianteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$producto_variantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.producto_varianteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$producto_variantePayload>
          }
          findMany: {
            args: Prisma.producto_varianteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$producto_variantePayload>[]
          }
          create: {
            args: Prisma.producto_varianteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$producto_variantePayload>
          }
          createMany: {
            args: Prisma.producto_varianteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.producto_varianteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$producto_variantePayload>[]
          }
          delete: {
            args: Prisma.producto_varianteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$producto_variantePayload>
          }
          update: {
            args: Prisma.producto_varianteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$producto_variantePayload>
          }
          deleteMany: {
            args: Prisma.producto_varianteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.producto_varianteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.producto_varianteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$producto_variantePayload>[]
          }
          upsert: {
            args: Prisma.producto_varianteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$producto_variantePayload>
          }
          aggregate: {
            args: Prisma.Producto_varianteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto_variante>
          }
          groupBy: {
            args: Prisma.producto_varianteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Producto_varianteGroupByOutputType>[]
          }
          count: {
            args: Prisma.producto_varianteCountArgs<ExtArgs>
            result: $Utils.Optional<Producto_varianteCountAggregateOutputType> | number
          }
        }
      }
      tipo_operacion: {
        payload: Prisma.$tipo_operacionPayload<ExtArgs>
        fields: Prisma.tipo_operacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipo_operacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_operacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipo_operacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_operacionPayload>
          }
          findFirst: {
            args: Prisma.tipo_operacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_operacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipo_operacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_operacionPayload>
          }
          findMany: {
            args: Prisma.tipo_operacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_operacionPayload>[]
          }
          create: {
            args: Prisma.tipo_operacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_operacionPayload>
          }
          createMany: {
            args: Prisma.tipo_operacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tipo_operacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_operacionPayload>[]
          }
          delete: {
            args: Prisma.tipo_operacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_operacionPayload>
          }
          update: {
            args: Prisma.tipo_operacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_operacionPayload>
          }
          deleteMany: {
            args: Prisma.tipo_operacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipo_operacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tipo_operacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_operacionPayload>[]
          }
          upsert: {
            args: Prisma.tipo_operacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_operacionPayload>
          }
          aggregate: {
            args: Prisma.Tipo_operacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo_operacion>
          }
          groupBy: {
            args: Prisma.tipo_operacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipo_operacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipo_operacionCountArgs<ExtArgs>
            result: $Utils.Optional<Tipo_operacionCountAggregateOutputType> | number
          }
        }
      }
      venta_detalle: {
        payload: Prisma.$venta_detallePayload<ExtArgs>
        fields: Prisma.venta_detalleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.venta_detalleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venta_detallePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.venta_detalleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venta_detallePayload>
          }
          findFirst: {
            args: Prisma.venta_detalleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venta_detallePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.venta_detalleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venta_detallePayload>
          }
          findMany: {
            args: Prisma.venta_detalleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venta_detallePayload>[]
          }
          create: {
            args: Prisma.venta_detalleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venta_detallePayload>
          }
          createMany: {
            args: Prisma.venta_detalleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.venta_detalleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venta_detallePayload>[]
          }
          delete: {
            args: Prisma.venta_detalleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venta_detallePayload>
          }
          update: {
            args: Prisma.venta_detalleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venta_detallePayload>
          }
          deleteMany: {
            args: Prisma.venta_detalleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.venta_detalleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.venta_detalleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venta_detallePayload>[]
          }
          upsert: {
            args: Prisma.venta_detalleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venta_detallePayload>
          }
          aggregate: {
            args: Prisma.Venta_detalleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenta_detalle>
          }
          groupBy: {
            args: Prisma.venta_detalleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Venta_detalleGroupByOutputType>[]
          }
          count: {
            args: Prisma.venta_detalleCountArgs<ExtArgs>
            result: $Utils.Optional<Venta_detalleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    categoria_producto?: categoria_productoOmit
    cliente?: clienteOmit
    estado_operacion?: estado_operacionOmit
    inventario_movimiento?: inventario_movimientoOmit
    metodo_pago?: metodo_pagoOmit
    operacion?: operacionOmit
    operacion_venta?: operacion_ventaOmit
    pago?: pagoOmit
    producto?: productoOmit
    producto_variante?: producto_varianteOmit
    tipo_operacion?: tipo_operacionOmit
    venta_detalle?: venta_detalleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Categoria_productoCountOutputType
   */

  export type Categoria_productoCountOutputType = {
    producto: number
  }

  export type Categoria_productoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | Categoria_productoCountOutputTypeCountProductoArgs
  }

  // Custom InputTypes
  /**
   * Categoria_productoCountOutputType without action
   */
  export type Categoria_productoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria_productoCountOutputType
     */
    select?: Categoria_productoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Categoria_productoCountOutputType without action
   */
  export type Categoria_productoCountOutputTypeCountProductoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    operacion_venta: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operacion_venta?: boolean | ClienteCountOutputTypeCountOperacion_ventaArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountOperacion_ventaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operacion_ventaWhereInput
  }


  /**
   * Count Type Estado_operacionCountOutputType
   */

  export type Estado_operacionCountOutputType = {
    operacion: number
  }

  export type Estado_operacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operacion?: boolean | Estado_operacionCountOutputTypeCountOperacionArgs
  }

  // Custom InputTypes
  /**
   * Estado_operacionCountOutputType without action
   */
  export type Estado_operacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_operacionCountOutputType
     */
    select?: Estado_operacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Estado_operacionCountOutputType without action
   */
  export type Estado_operacionCountOutputTypeCountOperacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operacionWhereInput
  }


  /**
   * Count Type Metodo_pagoCountOutputType
   */

  export type Metodo_pagoCountOutputType = {
    operacion_venta: number
    pago: number
  }

  export type Metodo_pagoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operacion_venta?: boolean | Metodo_pagoCountOutputTypeCountOperacion_ventaArgs
    pago?: boolean | Metodo_pagoCountOutputTypeCountPagoArgs
  }

  // Custom InputTypes
  /**
   * Metodo_pagoCountOutputType without action
   */
  export type Metodo_pagoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metodo_pagoCountOutputType
     */
    select?: Metodo_pagoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Metodo_pagoCountOutputType without action
   */
  export type Metodo_pagoCountOutputTypeCountOperacion_ventaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operacion_ventaWhereInput
  }

  /**
   * Metodo_pagoCountOutputType without action
   */
  export type Metodo_pagoCountOutputTypeCountPagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagoWhereInput
  }


  /**
   * Count Type OperacionCountOutputType
   */

  export type OperacionCountOutputType = {
    inventario_movimiento: number
    operacion_venta: number
  }

  export type OperacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventario_movimiento?: boolean | OperacionCountOutputTypeCountInventario_movimientoArgs
    operacion_venta?: boolean | OperacionCountOutputTypeCountOperacion_ventaArgs
  }

  // Custom InputTypes
  /**
   * OperacionCountOutputType without action
   */
  export type OperacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacionCountOutputType
     */
    select?: OperacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OperacionCountOutputType without action
   */
  export type OperacionCountOutputTypeCountInventario_movimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventario_movimientoWhereInput
  }

  /**
   * OperacionCountOutputType without action
   */
  export type OperacionCountOutputTypeCountOperacion_ventaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operacion_ventaWhereInput
  }


  /**
   * Count Type Operacion_ventaCountOutputType
   */

  export type Operacion_ventaCountOutputType = {
    pago: number
    venta_detalle: number
  }

  export type Operacion_ventaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pago?: boolean | Operacion_ventaCountOutputTypeCountPagoArgs
    venta_detalle?: boolean | Operacion_ventaCountOutputTypeCountVenta_detalleArgs
  }

  // Custom InputTypes
  /**
   * Operacion_ventaCountOutputType without action
   */
  export type Operacion_ventaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operacion_ventaCountOutputType
     */
    select?: Operacion_ventaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Operacion_ventaCountOutputType without action
   */
  export type Operacion_ventaCountOutputTypeCountPagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagoWhereInput
  }

  /**
   * Operacion_ventaCountOutputType without action
   */
  export type Operacion_ventaCountOutputTypeCountVenta_detalleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: venta_detalleWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    producto_variante: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto_variante?: boolean | ProductoCountOutputTypeCountProducto_varianteArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountProducto_varianteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: producto_varianteWhereInput
  }


  /**
   * Count Type Producto_varianteCountOutputType
   */

  export type Producto_varianteCountOutputType = {
    inventario_movimiento: number
    venta_detalle: number
  }

  export type Producto_varianteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventario_movimiento?: boolean | Producto_varianteCountOutputTypeCountInventario_movimientoArgs
    venta_detalle?: boolean | Producto_varianteCountOutputTypeCountVenta_detalleArgs
  }

  // Custom InputTypes
  /**
   * Producto_varianteCountOutputType without action
   */
  export type Producto_varianteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto_varianteCountOutputType
     */
    select?: Producto_varianteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Producto_varianteCountOutputType without action
   */
  export type Producto_varianteCountOutputTypeCountInventario_movimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventario_movimientoWhereInput
  }

  /**
   * Producto_varianteCountOutputType without action
   */
  export type Producto_varianteCountOutputTypeCountVenta_detalleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: venta_detalleWhereInput
  }


  /**
   * Count Type Tipo_operacionCountOutputType
   */

  export type Tipo_operacionCountOutputType = {
    operacion: number
  }

  export type Tipo_operacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operacion?: boolean | Tipo_operacionCountOutputTypeCountOperacionArgs
  }

  // Custom InputTypes
  /**
   * Tipo_operacionCountOutputType without action
   */
  export type Tipo_operacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_operacionCountOutputType
     */
    select?: Tipo_operacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipo_operacionCountOutputType without action
   */
  export type Tipo_operacionCountOutputTypeCountOperacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operacionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categoria_producto
   */

  export type AggregateCategoria_producto = {
    _count: Categoria_productoCountAggregateOutputType | null
    _avg: Categoria_productoAvgAggregateOutputType | null
    _sum: Categoria_productoSumAggregateOutputType | null
    _min: Categoria_productoMinAggregateOutputType | null
    _max: Categoria_productoMaxAggregateOutputType | null
  }

  export type Categoria_productoAvgAggregateOutputType = {
    id_categoria_producto: number | null
  }

  export type Categoria_productoSumAggregateOutputType = {
    id_categoria_producto: number | null
  }

  export type Categoria_productoMinAggregateOutputType = {
    id_categoria_producto: number | null
    nombre: string | null
  }

  export type Categoria_productoMaxAggregateOutputType = {
    id_categoria_producto: number | null
    nombre: string | null
  }

  export type Categoria_productoCountAggregateOutputType = {
    id_categoria_producto: number
    nombre: number
    _all: number
  }


  export type Categoria_productoAvgAggregateInputType = {
    id_categoria_producto?: true
  }

  export type Categoria_productoSumAggregateInputType = {
    id_categoria_producto?: true
  }

  export type Categoria_productoMinAggregateInputType = {
    id_categoria_producto?: true
    nombre?: true
  }

  export type Categoria_productoMaxAggregateInputType = {
    id_categoria_producto?: true
    nombre?: true
  }

  export type Categoria_productoCountAggregateInputType = {
    id_categoria_producto?: true
    nombre?: true
    _all?: true
  }

  export type Categoria_productoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoria_producto to aggregate.
     */
    where?: categoria_productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoria_productos to fetch.
     */
    orderBy?: categoria_productoOrderByWithRelationInput | categoria_productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoria_productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoria_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoria_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categoria_productos
    **/
    _count?: true | Categoria_productoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Categoria_productoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Categoria_productoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Categoria_productoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Categoria_productoMaxAggregateInputType
  }

  export type GetCategoria_productoAggregateType<T extends Categoria_productoAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria_producto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria_producto[P]>
      : GetScalarType<T[P], AggregateCategoria_producto[P]>
  }




  export type categoria_productoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoria_productoWhereInput
    orderBy?: categoria_productoOrderByWithAggregationInput | categoria_productoOrderByWithAggregationInput[]
    by: Categoria_productoScalarFieldEnum[] | Categoria_productoScalarFieldEnum
    having?: categoria_productoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Categoria_productoCountAggregateInputType | true
    _avg?: Categoria_productoAvgAggregateInputType
    _sum?: Categoria_productoSumAggregateInputType
    _min?: Categoria_productoMinAggregateInputType
    _max?: Categoria_productoMaxAggregateInputType
  }

  export type Categoria_productoGroupByOutputType = {
    id_categoria_producto: number
    nombre: string
    _count: Categoria_productoCountAggregateOutputType | null
    _avg: Categoria_productoAvgAggregateOutputType | null
    _sum: Categoria_productoSumAggregateOutputType | null
    _min: Categoria_productoMinAggregateOutputType | null
    _max: Categoria_productoMaxAggregateOutputType | null
  }

  type GetCategoria_productoGroupByPayload<T extends categoria_productoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Categoria_productoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Categoria_productoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Categoria_productoGroupByOutputType[P]>
            : GetScalarType<T[P], Categoria_productoGroupByOutputType[P]>
        }
      >
    >


  export type categoria_productoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria_producto?: boolean
    nombre?: boolean
    producto?: boolean | categoria_producto$productoArgs<ExtArgs>
    _count?: boolean | Categoria_productoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria_producto"]>

  export type categoria_productoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria_producto?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria_producto"]>

  export type categoria_productoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria_producto?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria_producto"]>

  export type categoria_productoSelectScalar = {
    id_categoria_producto?: boolean
    nombre?: boolean
  }

  export type categoria_productoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_categoria_producto" | "nombre", ExtArgs["result"]["categoria_producto"]>
  export type categoria_productoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | categoria_producto$productoArgs<ExtArgs>
    _count?: boolean | Categoria_productoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoria_productoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoria_productoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoria_productoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categoria_producto"
    objects: {
      producto: Prisma.$productoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_categoria_producto: number
      nombre: string
    }, ExtArgs["result"]["categoria_producto"]>
    composites: {}
  }

  type categoria_productoGetPayload<S extends boolean | null | undefined | categoria_productoDefaultArgs> = $Result.GetResult<Prisma.$categoria_productoPayload, S>

  type categoria_productoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoria_productoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Categoria_productoCountAggregateInputType | true
    }

  export interface categoria_productoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categoria_producto'], meta: { name: 'categoria_producto' } }
    /**
     * Find zero or one Categoria_producto that matches the filter.
     * @param {categoria_productoFindUniqueArgs} args - Arguments to find a Categoria_producto
     * @example
     * // Get one Categoria_producto
     * const categoria_producto = await prisma.categoria_producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoria_productoFindUniqueArgs>(args: SelectSubset<T, categoria_productoFindUniqueArgs<ExtArgs>>): Prisma__categoria_productoClient<$Result.GetResult<Prisma.$categoria_productoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria_producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoria_productoFindUniqueOrThrowArgs} args - Arguments to find a Categoria_producto
     * @example
     * // Get one Categoria_producto
     * const categoria_producto = await prisma.categoria_producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoria_productoFindUniqueOrThrowArgs>(args: SelectSubset<T, categoria_productoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoria_productoClient<$Result.GetResult<Prisma.$categoria_productoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria_producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoria_productoFindFirstArgs} args - Arguments to find a Categoria_producto
     * @example
     * // Get one Categoria_producto
     * const categoria_producto = await prisma.categoria_producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoria_productoFindFirstArgs>(args?: SelectSubset<T, categoria_productoFindFirstArgs<ExtArgs>>): Prisma__categoria_productoClient<$Result.GetResult<Prisma.$categoria_productoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria_producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoria_productoFindFirstOrThrowArgs} args - Arguments to find a Categoria_producto
     * @example
     * // Get one Categoria_producto
     * const categoria_producto = await prisma.categoria_producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoria_productoFindFirstOrThrowArgs>(args?: SelectSubset<T, categoria_productoFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoria_productoClient<$Result.GetResult<Prisma.$categoria_productoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categoria_productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoria_productoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categoria_productos
     * const categoria_productos = await prisma.categoria_producto.findMany()
     * 
     * // Get first 10 Categoria_productos
     * const categoria_productos = await prisma.categoria_producto.findMany({ take: 10 })
     * 
     * // Only select the `id_categoria_producto`
     * const categoria_productoWithId_categoria_productoOnly = await prisma.categoria_producto.findMany({ select: { id_categoria_producto: true } })
     * 
     */
    findMany<T extends categoria_productoFindManyArgs>(args?: SelectSubset<T, categoria_productoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoria_productoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria_producto.
     * @param {categoria_productoCreateArgs} args - Arguments to create a Categoria_producto.
     * @example
     * // Create one Categoria_producto
     * const Categoria_producto = await prisma.categoria_producto.create({
     *   data: {
     *     // ... data to create a Categoria_producto
     *   }
     * })
     * 
     */
    create<T extends categoria_productoCreateArgs>(args: SelectSubset<T, categoria_productoCreateArgs<ExtArgs>>): Prisma__categoria_productoClient<$Result.GetResult<Prisma.$categoria_productoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categoria_productos.
     * @param {categoria_productoCreateManyArgs} args - Arguments to create many Categoria_productos.
     * @example
     * // Create many Categoria_productos
     * const categoria_producto = await prisma.categoria_producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoria_productoCreateManyArgs>(args?: SelectSubset<T, categoria_productoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categoria_productos and returns the data saved in the database.
     * @param {categoria_productoCreateManyAndReturnArgs} args - Arguments to create many Categoria_productos.
     * @example
     * // Create many Categoria_productos
     * const categoria_producto = await prisma.categoria_producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categoria_productos and only return the `id_categoria_producto`
     * const categoria_productoWithId_categoria_productoOnly = await prisma.categoria_producto.createManyAndReturn({
     *   select: { id_categoria_producto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoria_productoCreateManyAndReturnArgs>(args?: SelectSubset<T, categoria_productoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoria_productoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria_producto.
     * @param {categoria_productoDeleteArgs} args - Arguments to delete one Categoria_producto.
     * @example
     * // Delete one Categoria_producto
     * const Categoria_producto = await prisma.categoria_producto.delete({
     *   where: {
     *     // ... filter to delete one Categoria_producto
     *   }
     * })
     * 
     */
    delete<T extends categoria_productoDeleteArgs>(args: SelectSubset<T, categoria_productoDeleteArgs<ExtArgs>>): Prisma__categoria_productoClient<$Result.GetResult<Prisma.$categoria_productoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria_producto.
     * @param {categoria_productoUpdateArgs} args - Arguments to update one Categoria_producto.
     * @example
     * // Update one Categoria_producto
     * const categoria_producto = await prisma.categoria_producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoria_productoUpdateArgs>(args: SelectSubset<T, categoria_productoUpdateArgs<ExtArgs>>): Prisma__categoria_productoClient<$Result.GetResult<Prisma.$categoria_productoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categoria_productos.
     * @param {categoria_productoDeleteManyArgs} args - Arguments to filter Categoria_productos to delete.
     * @example
     * // Delete a few Categoria_productos
     * const { count } = await prisma.categoria_producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoria_productoDeleteManyArgs>(args?: SelectSubset<T, categoria_productoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categoria_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoria_productoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categoria_productos
     * const categoria_producto = await prisma.categoria_producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoria_productoUpdateManyArgs>(args: SelectSubset<T, categoria_productoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categoria_productos and returns the data updated in the database.
     * @param {categoria_productoUpdateManyAndReturnArgs} args - Arguments to update many Categoria_productos.
     * @example
     * // Update many Categoria_productos
     * const categoria_producto = await prisma.categoria_producto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categoria_productos and only return the `id_categoria_producto`
     * const categoria_productoWithId_categoria_productoOnly = await prisma.categoria_producto.updateManyAndReturn({
     *   select: { id_categoria_producto: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoria_productoUpdateManyAndReturnArgs>(args: SelectSubset<T, categoria_productoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoria_productoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria_producto.
     * @param {categoria_productoUpsertArgs} args - Arguments to update or create a Categoria_producto.
     * @example
     * // Update or create a Categoria_producto
     * const categoria_producto = await prisma.categoria_producto.upsert({
     *   create: {
     *     // ... data to create a Categoria_producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria_producto we want to update
     *   }
     * })
     */
    upsert<T extends categoria_productoUpsertArgs>(args: SelectSubset<T, categoria_productoUpsertArgs<ExtArgs>>): Prisma__categoria_productoClient<$Result.GetResult<Prisma.$categoria_productoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categoria_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoria_productoCountArgs} args - Arguments to filter Categoria_productos to count.
     * @example
     * // Count the number of Categoria_productos
     * const count = await prisma.categoria_producto.count({
     *   where: {
     *     // ... the filter for the Categoria_productos we want to count
     *   }
     * })
    **/
    count<T extends categoria_productoCountArgs>(
      args?: Subset<T, categoria_productoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Categoria_productoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria_producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Categoria_productoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Categoria_productoAggregateArgs>(args: Subset<T, Categoria_productoAggregateArgs>): Prisma.PrismaPromise<GetCategoria_productoAggregateType<T>>

    /**
     * Group by Categoria_producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoria_productoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoria_productoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoria_productoGroupByArgs['orderBy'] }
        : { orderBy?: categoria_productoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoria_productoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoria_productoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categoria_producto model
   */
  readonly fields: categoria_productoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categoria_producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoria_productoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends categoria_producto$productoArgs<ExtArgs> = {}>(args?: Subset<T, categoria_producto$productoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categoria_producto model
   */
  interface categoria_productoFieldRefs {
    readonly id_categoria_producto: FieldRef<"categoria_producto", 'Int'>
    readonly nombre: FieldRef<"categoria_producto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categoria_producto findUnique
   */
  export type categoria_productoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_producto
     */
    select?: categoria_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_producto
     */
    omit?: categoria_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_productoInclude<ExtArgs> | null
    /**
     * Filter, which categoria_producto to fetch.
     */
    where: categoria_productoWhereUniqueInput
  }

  /**
   * categoria_producto findUniqueOrThrow
   */
  export type categoria_productoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_producto
     */
    select?: categoria_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_producto
     */
    omit?: categoria_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_productoInclude<ExtArgs> | null
    /**
     * Filter, which categoria_producto to fetch.
     */
    where: categoria_productoWhereUniqueInput
  }

  /**
   * categoria_producto findFirst
   */
  export type categoria_productoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_producto
     */
    select?: categoria_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_producto
     */
    omit?: categoria_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_productoInclude<ExtArgs> | null
    /**
     * Filter, which categoria_producto to fetch.
     */
    where?: categoria_productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoria_productos to fetch.
     */
    orderBy?: categoria_productoOrderByWithRelationInput | categoria_productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categoria_productos.
     */
    cursor?: categoria_productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoria_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoria_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categoria_productos.
     */
    distinct?: Categoria_productoScalarFieldEnum | Categoria_productoScalarFieldEnum[]
  }

  /**
   * categoria_producto findFirstOrThrow
   */
  export type categoria_productoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_producto
     */
    select?: categoria_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_producto
     */
    omit?: categoria_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_productoInclude<ExtArgs> | null
    /**
     * Filter, which categoria_producto to fetch.
     */
    where?: categoria_productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoria_productos to fetch.
     */
    orderBy?: categoria_productoOrderByWithRelationInput | categoria_productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categoria_productos.
     */
    cursor?: categoria_productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoria_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoria_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categoria_productos.
     */
    distinct?: Categoria_productoScalarFieldEnum | Categoria_productoScalarFieldEnum[]
  }

  /**
   * categoria_producto findMany
   */
  export type categoria_productoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_producto
     */
    select?: categoria_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_producto
     */
    omit?: categoria_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_productoInclude<ExtArgs> | null
    /**
     * Filter, which categoria_productos to fetch.
     */
    where?: categoria_productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoria_productos to fetch.
     */
    orderBy?: categoria_productoOrderByWithRelationInput | categoria_productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categoria_productos.
     */
    cursor?: categoria_productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoria_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoria_productos.
     */
    skip?: number
    distinct?: Categoria_productoScalarFieldEnum | Categoria_productoScalarFieldEnum[]
  }

  /**
   * categoria_producto create
   */
  export type categoria_productoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_producto
     */
    select?: categoria_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_producto
     */
    omit?: categoria_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_productoInclude<ExtArgs> | null
    /**
     * The data needed to create a categoria_producto.
     */
    data: XOR<categoria_productoCreateInput, categoria_productoUncheckedCreateInput>
  }

  /**
   * categoria_producto createMany
   */
  export type categoria_productoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categoria_productos.
     */
    data: categoria_productoCreateManyInput | categoria_productoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoria_producto createManyAndReturn
   */
  export type categoria_productoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_producto
     */
    select?: categoria_productoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_producto
     */
    omit?: categoria_productoOmit<ExtArgs> | null
    /**
     * The data used to create many categoria_productos.
     */
    data: categoria_productoCreateManyInput | categoria_productoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoria_producto update
   */
  export type categoria_productoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_producto
     */
    select?: categoria_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_producto
     */
    omit?: categoria_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_productoInclude<ExtArgs> | null
    /**
     * The data needed to update a categoria_producto.
     */
    data: XOR<categoria_productoUpdateInput, categoria_productoUncheckedUpdateInput>
    /**
     * Choose, which categoria_producto to update.
     */
    where: categoria_productoWhereUniqueInput
  }

  /**
   * categoria_producto updateMany
   */
  export type categoria_productoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categoria_productos.
     */
    data: XOR<categoria_productoUpdateManyMutationInput, categoria_productoUncheckedUpdateManyInput>
    /**
     * Filter which categoria_productos to update
     */
    where?: categoria_productoWhereInput
    /**
     * Limit how many categoria_productos to update.
     */
    limit?: number
  }

  /**
   * categoria_producto updateManyAndReturn
   */
  export type categoria_productoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_producto
     */
    select?: categoria_productoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_producto
     */
    omit?: categoria_productoOmit<ExtArgs> | null
    /**
     * The data used to update categoria_productos.
     */
    data: XOR<categoria_productoUpdateManyMutationInput, categoria_productoUncheckedUpdateManyInput>
    /**
     * Filter which categoria_productos to update
     */
    where?: categoria_productoWhereInput
    /**
     * Limit how many categoria_productos to update.
     */
    limit?: number
  }

  /**
   * categoria_producto upsert
   */
  export type categoria_productoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_producto
     */
    select?: categoria_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_producto
     */
    omit?: categoria_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_productoInclude<ExtArgs> | null
    /**
     * The filter to search for the categoria_producto to update in case it exists.
     */
    where: categoria_productoWhereUniqueInput
    /**
     * In case the categoria_producto found by the `where` argument doesn't exist, create a new categoria_producto with this data.
     */
    create: XOR<categoria_productoCreateInput, categoria_productoUncheckedCreateInput>
    /**
     * In case the categoria_producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoria_productoUpdateInput, categoria_productoUncheckedUpdateInput>
  }

  /**
   * categoria_producto delete
   */
  export type categoria_productoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_producto
     */
    select?: categoria_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_producto
     */
    omit?: categoria_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_productoInclude<ExtArgs> | null
    /**
     * Filter which categoria_producto to delete.
     */
    where: categoria_productoWhereUniqueInput
  }

  /**
   * categoria_producto deleteMany
   */
  export type categoria_productoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoria_productos to delete
     */
    where?: categoria_productoWhereInput
    /**
     * Limit how many categoria_productos to delete.
     */
    limit?: number
  }

  /**
   * categoria_producto.producto
   */
  export type categoria_producto$productoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    where?: productoWhereInput
    orderBy?: productoOrderByWithRelationInput | productoOrderByWithRelationInput[]
    cursor?: productoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * categoria_producto without action
   */
  export type categoria_productoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_producto
     */
    select?: categoria_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_producto
     */
    omit?: categoria_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_productoInclude<ExtArgs> | null
  }


  /**
   * Model cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id_cliente: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id_cliente: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id_cliente: number | null
    nombre: string | null
    apellido: string | null
    celular: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id_cliente: number | null
    nombre: string | null
    apellido: string | null
    celular: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id_cliente: number
    nombre: number
    apellido: number
    celular: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id_cliente?: true
  }

  export type ClienteSumAggregateInputType = {
    id_cliente?: true
  }

  export type ClienteMinAggregateInputType = {
    id_cliente?: true
    nombre?: true
    apellido?: true
    celular?: true
  }

  export type ClienteMaxAggregateInputType = {
    id_cliente?: true
    nombre?: true
    apellido?: true
    celular?: true
  }

  export type ClienteCountAggregateInputType = {
    id_cliente?: true
    nombre?: true
    apellido?: true
    celular?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cliente to aggregate.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type clienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clienteWhereInput
    orderBy?: clienteOrderByWithAggregationInput | clienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id_cliente: number
    nombre: string
    apellido: string
    celular: string | null
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends clienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type clienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre?: boolean
    apellido?: boolean
    celular?: boolean
    operacion_venta?: boolean | cliente$operacion_ventaArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre?: boolean
    apellido?: boolean
    celular?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre?: boolean
    apellido?: boolean
    celular?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectScalar = {
    id_cliente?: boolean
    nombre?: boolean
    apellido?: boolean
    celular?: boolean
  }

  export type clienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cliente" | "nombre" | "apellido" | "celular", ExtArgs["result"]["cliente"]>
  export type clienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operacion_venta?: boolean | cliente$operacion_ventaArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type clienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $clientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cliente"
    objects: {
      operacion_venta: Prisma.$operacion_ventaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cliente: number
      nombre: string
      apellido: string
      celular: string | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type clienteGetPayload<S extends boolean | null | undefined | clienteDefaultArgs> = $Result.GetResult<Prisma.$clientePayload, S>

  type clienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface clienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cliente'], meta: { name: 'cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {clienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clienteFindUniqueArgs>(args: SelectSubset<T, clienteFindUniqueArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clienteFindUniqueOrThrowArgs>(args: SelectSubset<T, clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clienteFindFirstArgs>(args?: SelectSubset<T, clienteFindFirstArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clienteFindFirstOrThrowArgs>(args?: SelectSubset<T, clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.findMany({ select: { id_cliente: true } })
     * 
     */
    findMany<T extends clienteFindManyArgs>(args?: SelectSubset<T, clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {clienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends clienteCreateArgs>(args: SelectSubset<T, clienteCreateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {clienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clienteCreateManyArgs>(args?: SelectSubset<T, clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {clienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id_cliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clienteCreateManyAndReturnArgs>(args?: SelectSubset<T, clienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {clienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends clienteDeleteArgs>(args: SelectSubset<T, clienteDeleteArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {clienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clienteUpdateArgs>(args: SelectSubset<T, clienteUpdateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {clienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clienteDeleteManyArgs>(args?: SelectSubset<T, clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clienteUpdateManyArgs>(args: SelectSubset<T, clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {clienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id_cliente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends clienteUpdateManyAndReturnArgs>(args: SelectSubset<T, clienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {clienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends clienteUpsertArgs>(args: SelectSubset<T, clienteUpsertArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clienteCountArgs>(
      args?: Subset<T, clienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clienteGroupByArgs['orderBy'] }
        : { orderBy?: clienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cliente model
   */
  readonly fields: clienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operacion_venta<T extends cliente$operacion_ventaArgs<ExtArgs> = {}>(args?: Subset<T, cliente$operacion_ventaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operacion_ventaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cliente model
   */
  interface clienteFieldRefs {
    readonly id_cliente: FieldRef<"cliente", 'Int'>
    readonly nombre: FieldRef<"cliente", 'String'>
    readonly apellido: FieldRef<"cliente", 'String'>
    readonly celular: FieldRef<"cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cliente findUnique
   */
  export type clienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findUniqueOrThrow
   */
  export type clienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findFirst
   */
  export type clienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findFirstOrThrow
   */
  export type clienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findMany
   */
  export type clienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente create
   */
  export type clienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to create a cliente.
     */
    data: XOR<clienteCreateInput, clienteUncheckedCreateInput>
  }

  /**
   * cliente createMany
   */
  export type clienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cliente createManyAndReturn
   */
  export type clienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cliente update
   */
  export type clienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to update a cliente.
     */
    data: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
    /**
     * Choose, which cliente to update.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente updateMany
   */
  export type clienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * cliente updateManyAndReturn
   */
  export type clienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * cliente upsert
   */
  export type clienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The filter to search for the cliente to update in case it exists.
     */
    where: clienteWhereUniqueInput
    /**
     * In case the cliente found by the `where` argument doesn't exist, create a new cliente with this data.
     */
    create: XOR<clienteCreateInput, clienteUncheckedCreateInput>
    /**
     * In case the cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
  }

  /**
   * cliente delete
   */
  export type clienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter which cliente to delete.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente deleteMany
   */
  export type clienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to delete.
     */
    limit?: number
  }

  /**
   * cliente.operacion_venta
   */
  export type cliente$operacion_ventaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion_venta
     */
    select?: operacion_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion_venta
     */
    omit?: operacion_ventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacion_ventaInclude<ExtArgs> | null
    where?: operacion_ventaWhereInput
    orderBy?: operacion_ventaOrderByWithRelationInput | operacion_ventaOrderByWithRelationInput[]
    cursor?: operacion_ventaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Operacion_ventaScalarFieldEnum | Operacion_ventaScalarFieldEnum[]
  }

  /**
   * cliente without action
   */
  export type clienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
  }


  /**
   * Model estado_operacion
   */

  export type AggregateEstado_operacion = {
    _count: Estado_operacionCountAggregateOutputType | null
    _avg: Estado_operacionAvgAggregateOutputType | null
    _sum: Estado_operacionSumAggregateOutputType | null
    _min: Estado_operacionMinAggregateOutputType | null
    _max: Estado_operacionMaxAggregateOutputType | null
  }

  export type Estado_operacionAvgAggregateOutputType = {
    id_estado_operacion: number | null
  }

  export type Estado_operacionSumAggregateOutputType = {
    id_estado_operacion: number | null
  }

  export type Estado_operacionMinAggregateOutputType = {
    id_estado_operacion: number | null
    nombre: string | null
  }

  export type Estado_operacionMaxAggregateOutputType = {
    id_estado_operacion: number | null
    nombre: string | null
  }

  export type Estado_operacionCountAggregateOutputType = {
    id_estado_operacion: number
    nombre: number
    _all: number
  }


  export type Estado_operacionAvgAggregateInputType = {
    id_estado_operacion?: true
  }

  export type Estado_operacionSumAggregateInputType = {
    id_estado_operacion?: true
  }

  export type Estado_operacionMinAggregateInputType = {
    id_estado_operacion?: true
    nombre?: true
  }

  export type Estado_operacionMaxAggregateInputType = {
    id_estado_operacion?: true
    nombre?: true
  }

  export type Estado_operacionCountAggregateInputType = {
    id_estado_operacion?: true
    nombre?: true
    _all?: true
  }

  export type Estado_operacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estado_operacion to aggregate.
     */
    where?: estado_operacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estado_operacions to fetch.
     */
    orderBy?: estado_operacionOrderByWithRelationInput | estado_operacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: estado_operacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estado_operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estado_operacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned estado_operacions
    **/
    _count?: true | Estado_operacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Estado_operacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Estado_operacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Estado_operacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Estado_operacionMaxAggregateInputType
  }

  export type GetEstado_operacionAggregateType<T extends Estado_operacionAggregateArgs> = {
        [P in keyof T & keyof AggregateEstado_operacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstado_operacion[P]>
      : GetScalarType<T[P], AggregateEstado_operacion[P]>
  }




  export type estado_operacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estado_operacionWhereInput
    orderBy?: estado_operacionOrderByWithAggregationInput | estado_operacionOrderByWithAggregationInput[]
    by: Estado_operacionScalarFieldEnum[] | Estado_operacionScalarFieldEnum
    having?: estado_operacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Estado_operacionCountAggregateInputType | true
    _avg?: Estado_operacionAvgAggregateInputType
    _sum?: Estado_operacionSumAggregateInputType
    _min?: Estado_operacionMinAggregateInputType
    _max?: Estado_operacionMaxAggregateInputType
  }

  export type Estado_operacionGroupByOutputType = {
    id_estado_operacion: number
    nombre: string
    _count: Estado_operacionCountAggregateOutputType | null
    _avg: Estado_operacionAvgAggregateOutputType | null
    _sum: Estado_operacionSumAggregateOutputType | null
    _min: Estado_operacionMinAggregateOutputType | null
    _max: Estado_operacionMaxAggregateOutputType | null
  }

  type GetEstado_operacionGroupByPayload<T extends estado_operacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Estado_operacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Estado_operacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Estado_operacionGroupByOutputType[P]>
            : GetScalarType<T[P], Estado_operacionGroupByOutputType[P]>
        }
      >
    >


  export type estado_operacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado_operacion?: boolean
    nombre?: boolean
    operacion?: boolean | estado_operacion$operacionArgs<ExtArgs>
    _count?: boolean | Estado_operacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado_operacion"]>

  export type estado_operacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado_operacion?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["estado_operacion"]>

  export type estado_operacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado_operacion?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["estado_operacion"]>

  export type estado_operacionSelectScalar = {
    id_estado_operacion?: boolean
    nombre?: boolean
  }

  export type estado_operacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_estado_operacion" | "nombre", ExtArgs["result"]["estado_operacion"]>
  export type estado_operacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operacion?: boolean | estado_operacion$operacionArgs<ExtArgs>
    _count?: boolean | Estado_operacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type estado_operacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type estado_operacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $estado_operacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "estado_operacion"
    objects: {
      operacion: Prisma.$operacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_estado_operacion: number
      nombre: string
    }, ExtArgs["result"]["estado_operacion"]>
    composites: {}
  }

  type estado_operacionGetPayload<S extends boolean | null | undefined | estado_operacionDefaultArgs> = $Result.GetResult<Prisma.$estado_operacionPayload, S>

  type estado_operacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<estado_operacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Estado_operacionCountAggregateInputType | true
    }

  export interface estado_operacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estado_operacion'], meta: { name: 'estado_operacion' } }
    /**
     * Find zero or one Estado_operacion that matches the filter.
     * @param {estado_operacionFindUniqueArgs} args - Arguments to find a Estado_operacion
     * @example
     * // Get one Estado_operacion
     * const estado_operacion = await prisma.estado_operacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends estado_operacionFindUniqueArgs>(args: SelectSubset<T, estado_operacionFindUniqueArgs<ExtArgs>>): Prisma__estado_operacionClient<$Result.GetResult<Prisma.$estado_operacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estado_operacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {estado_operacionFindUniqueOrThrowArgs} args - Arguments to find a Estado_operacion
     * @example
     * // Get one Estado_operacion
     * const estado_operacion = await prisma.estado_operacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends estado_operacionFindUniqueOrThrowArgs>(args: SelectSubset<T, estado_operacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__estado_operacionClient<$Result.GetResult<Prisma.$estado_operacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado_operacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_operacionFindFirstArgs} args - Arguments to find a Estado_operacion
     * @example
     * // Get one Estado_operacion
     * const estado_operacion = await prisma.estado_operacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends estado_operacionFindFirstArgs>(args?: SelectSubset<T, estado_operacionFindFirstArgs<ExtArgs>>): Prisma__estado_operacionClient<$Result.GetResult<Prisma.$estado_operacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado_operacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_operacionFindFirstOrThrowArgs} args - Arguments to find a Estado_operacion
     * @example
     * // Get one Estado_operacion
     * const estado_operacion = await prisma.estado_operacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends estado_operacionFindFirstOrThrowArgs>(args?: SelectSubset<T, estado_operacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__estado_operacionClient<$Result.GetResult<Prisma.$estado_operacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estado_operacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_operacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estado_operacions
     * const estado_operacions = await prisma.estado_operacion.findMany()
     * 
     * // Get first 10 Estado_operacions
     * const estado_operacions = await prisma.estado_operacion.findMany({ take: 10 })
     * 
     * // Only select the `id_estado_operacion`
     * const estado_operacionWithId_estado_operacionOnly = await prisma.estado_operacion.findMany({ select: { id_estado_operacion: true } })
     * 
     */
    findMany<T extends estado_operacionFindManyArgs>(args?: SelectSubset<T, estado_operacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estado_operacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estado_operacion.
     * @param {estado_operacionCreateArgs} args - Arguments to create a Estado_operacion.
     * @example
     * // Create one Estado_operacion
     * const Estado_operacion = await prisma.estado_operacion.create({
     *   data: {
     *     // ... data to create a Estado_operacion
     *   }
     * })
     * 
     */
    create<T extends estado_operacionCreateArgs>(args: SelectSubset<T, estado_operacionCreateArgs<ExtArgs>>): Prisma__estado_operacionClient<$Result.GetResult<Prisma.$estado_operacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estado_operacions.
     * @param {estado_operacionCreateManyArgs} args - Arguments to create many Estado_operacions.
     * @example
     * // Create many Estado_operacions
     * const estado_operacion = await prisma.estado_operacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends estado_operacionCreateManyArgs>(args?: SelectSubset<T, estado_operacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estado_operacions and returns the data saved in the database.
     * @param {estado_operacionCreateManyAndReturnArgs} args - Arguments to create many Estado_operacions.
     * @example
     * // Create many Estado_operacions
     * const estado_operacion = await prisma.estado_operacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estado_operacions and only return the `id_estado_operacion`
     * const estado_operacionWithId_estado_operacionOnly = await prisma.estado_operacion.createManyAndReturn({
     *   select: { id_estado_operacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends estado_operacionCreateManyAndReturnArgs>(args?: SelectSubset<T, estado_operacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estado_operacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estado_operacion.
     * @param {estado_operacionDeleteArgs} args - Arguments to delete one Estado_operacion.
     * @example
     * // Delete one Estado_operacion
     * const Estado_operacion = await prisma.estado_operacion.delete({
     *   where: {
     *     // ... filter to delete one Estado_operacion
     *   }
     * })
     * 
     */
    delete<T extends estado_operacionDeleteArgs>(args: SelectSubset<T, estado_operacionDeleteArgs<ExtArgs>>): Prisma__estado_operacionClient<$Result.GetResult<Prisma.$estado_operacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estado_operacion.
     * @param {estado_operacionUpdateArgs} args - Arguments to update one Estado_operacion.
     * @example
     * // Update one Estado_operacion
     * const estado_operacion = await prisma.estado_operacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends estado_operacionUpdateArgs>(args: SelectSubset<T, estado_operacionUpdateArgs<ExtArgs>>): Prisma__estado_operacionClient<$Result.GetResult<Prisma.$estado_operacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estado_operacions.
     * @param {estado_operacionDeleteManyArgs} args - Arguments to filter Estado_operacions to delete.
     * @example
     * // Delete a few Estado_operacions
     * const { count } = await prisma.estado_operacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends estado_operacionDeleteManyArgs>(args?: SelectSubset<T, estado_operacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estado_operacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_operacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estado_operacions
     * const estado_operacion = await prisma.estado_operacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends estado_operacionUpdateManyArgs>(args: SelectSubset<T, estado_operacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estado_operacions and returns the data updated in the database.
     * @param {estado_operacionUpdateManyAndReturnArgs} args - Arguments to update many Estado_operacions.
     * @example
     * // Update many Estado_operacions
     * const estado_operacion = await prisma.estado_operacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estado_operacions and only return the `id_estado_operacion`
     * const estado_operacionWithId_estado_operacionOnly = await prisma.estado_operacion.updateManyAndReturn({
     *   select: { id_estado_operacion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends estado_operacionUpdateManyAndReturnArgs>(args: SelectSubset<T, estado_operacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estado_operacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estado_operacion.
     * @param {estado_operacionUpsertArgs} args - Arguments to update or create a Estado_operacion.
     * @example
     * // Update or create a Estado_operacion
     * const estado_operacion = await prisma.estado_operacion.upsert({
     *   create: {
     *     // ... data to create a Estado_operacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estado_operacion we want to update
     *   }
     * })
     */
    upsert<T extends estado_operacionUpsertArgs>(args: SelectSubset<T, estado_operacionUpsertArgs<ExtArgs>>): Prisma__estado_operacionClient<$Result.GetResult<Prisma.$estado_operacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estado_operacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_operacionCountArgs} args - Arguments to filter Estado_operacions to count.
     * @example
     * // Count the number of Estado_operacions
     * const count = await prisma.estado_operacion.count({
     *   where: {
     *     // ... the filter for the Estado_operacions we want to count
     *   }
     * })
    **/
    count<T extends estado_operacionCountArgs>(
      args?: Subset<T, estado_operacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Estado_operacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estado_operacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_operacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Estado_operacionAggregateArgs>(args: Subset<T, Estado_operacionAggregateArgs>): Prisma.PrismaPromise<GetEstado_operacionAggregateType<T>>

    /**
     * Group by Estado_operacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_operacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends estado_operacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estado_operacionGroupByArgs['orderBy'] }
        : { orderBy?: estado_operacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, estado_operacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstado_operacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the estado_operacion model
   */
  readonly fields: estado_operacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estado_operacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estado_operacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operacion<T extends estado_operacion$operacionArgs<ExtArgs> = {}>(args?: Subset<T, estado_operacion$operacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the estado_operacion model
   */
  interface estado_operacionFieldRefs {
    readonly id_estado_operacion: FieldRef<"estado_operacion", 'Int'>
    readonly nombre: FieldRef<"estado_operacion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * estado_operacion findUnique
   */
  export type estado_operacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_operacion
     */
    select?: estado_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_operacion
     */
    omit?: estado_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_operacionInclude<ExtArgs> | null
    /**
     * Filter, which estado_operacion to fetch.
     */
    where: estado_operacionWhereUniqueInput
  }

  /**
   * estado_operacion findUniqueOrThrow
   */
  export type estado_operacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_operacion
     */
    select?: estado_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_operacion
     */
    omit?: estado_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_operacionInclude<ExtArgs> | null
    /**
     * Filter, which estado_operacion to fetch.
     */
    where: estado_operacionWhereUniqueInput
  }

  /**
   * estado_operacion findFirst
   */
  export type estado_operacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_operacion
     */
    select?: estado_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_operacion
     */
    omit?: estado_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_operacionInclude<ExtArgs> | null
    /**
     * Filter, which estado_operacion to fetch.
     */
    where?: estado_operacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estado_operacions to fetch.
     */
    orderBy?: estado_operacionOrderByWithRelationInput | estado_operacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estado_operacions.
     */
    cursor?: estado_operacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estado_operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estado_operacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estado_operacions.
     */
    distinct?: Estado_operacionScalarFieldEnum | Estado_operacionScalarFieldEnum[]
  }

  /**
   * estado_operacion findFirstOrThrow
   */
  export type estado_operacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_operacion
     */
    select?: estado_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_operacion
     */
    omit?: estado_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_operacionInclude<ExtArgs> | null
    /**
     * Filter, which estado_operacion to fetch.
     */
    where?: estado_operacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estado_operacions to fetch.
     */
    orderBy?: estado_operacionOrderByWithRelationInput | estado_operacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estado_operacions.
     */
    cursor?: estado_operacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estado_operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estado_operacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estado_operacions.
     */
    distinct?: Estado_operacionScalarFieldEnum | Estado_operacionScalarFieldEnum[]
  }

  /**
   * estado_operacion findMany
   */
  export type estado_operacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_operacion
     */
    select?: estado_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_operacion
     */
    omit?: estado_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_operacionInclude<ExtArgs> | null
    /**
     * Filter, which estado_operacions to fetch.
     */
    where?: estado_operacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estado_operacions to fetch.
     */
    orderBy?: estado_operacionOrderByWithRelationInput | estado_operacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing estado_operacions.
     */
    cursor?: estado_operacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estado_operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estado_operacions.
     */
    skip?: number
    distinct?: Estado_operacionScalarFieldEnum | Estado_operacionScalarFieldEnum[]
  }

  /**
   * estado_operacion create
   */
  export type estado_operacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_operacion
     */
    select?: estado_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_operacion
     */
    omit?: estado_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_operacionInclude<ExtArgs> | null
    /**
     * The data needed to create a estado_operacion.
     */
    data: XOR<estado_operacionCreateInput, estado_operacionUncheckedCreateInput>
  }

  /**
   * estado_operacion createMany
   */
  export type estado_operacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estado_operacions.
     */
    data: estado_operacionCreateManyInput | estado_operacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estado_operacion createManyAndReturn
   */
  export type estado_operacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_operacion
     */
    select?: estado_operacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estado_operacion
     */
    omit?: estado_operacionOmit<ExtArgs> | null
    /**
     * The data used to create many estado_operacions.
     */
    data: estado_operacionCreateManyInput | estado_operacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estado_operacion update
   */
  export type estado_operacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_operacion
     */
    select?: estado_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_operacion
     */
    omit?: estado_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_operacionInclude<ExtArgs> | null
    /**
     * The data needed to update a estado_operacion.
     */
    data: XOR<estado_operacionUpdateInput, estado_operacionUncheckedUpdateInput>
    /**
     * Choose, which estado_operacion to update.
     */
    where: estado_operacionWhereUniqueInput
  }

  /**
   * estado_operacion updateMany
   */
  export type estado_operacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estado_operacions.
     */
    data: XOR<estado_operacionUpdateManyMutationInput, estado_operacionUncheckedUpdateManyInput>
    /**
     * Filter which estado_operacions to update
     */
    where?: estado_operacionWhereInput
    /**
     * Limit how many estado_operacions to update.
     */
    limit?: number
  }

  /**
   * estado_operacion updateManyAndReturn
   */
  export type estado_operacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_operacion
     */
    select?: estado_operacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estado_operacion
     */
    omit?: estado_operacionOmit<ExtArgs> | null
    /**
     * The data used to update estado_operacions.
     */
    data: XOR<estado_operacionUpdateManyMutationInput, estado_operacionUncheckedUpdateManyInput>
    /**
     * Filter which estado_operacions to update
     */
    where?: estado_operacionWhereInput
    /**
     * Limit how many estado_operacions to update.
     */
    limit?: number
  }

  /**
   * estado_operacion upsert
   */
  export type estado_operacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_operacion
     */
    select?: estado_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_operacion
     */
    omit?: estado_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_operacionInclude<ExtArgs> | null
    /**
     * The filter to search for the estado_operacion to update in case it exists.
     */
    where: estado_operacionWhereUniqueInput
    /**
     * In case the estado_operacion found by the `where` argument doesn't exist, create a new estado_operacion with this data.
     */
    create: XOR<estado_operacionCreateInput, estado_operacionUncheckedCreateInput>
    /**
     * In case the estado_operacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estado_operacionUpdateInput, estado_operacionUncheckedUpdateInput>
  }

  /**
   * estado_operacion delete
   */
  export type estado_operacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_operacion
     */
    select?: estado_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_operacion
     */
    omit?: estado_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_operacionInclude<ExtArgs> | null
    /**
     * Filter which estado_operacion to delete.
     */
    where: estado_operacionWhereUniqueInput
  }

  /**
   * estado_operacion deleteMany
   */
  export type estado_operacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estado_operacions to delete
     */
    where?: estado_operacionWhereInput
    /**
     * Limit how many estado_operacions to delete.
     */
    limit?: number
  }

  /**
   * estado_operacion.operacion
   */
  export type estado_operacion$operacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    where?: operacionWhereInput
    orderBy?: operacionOrderByWithRelationInput | operacionOrderByWithRelationInput[]
    cursor?: operacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperacionScalarFieldEnum | OperacionScalarFieldEnum[]
  }

  /**
   * estado_operacion without action
   */
  export type estado_operacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_operacion
     */
    select?: estado_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_operacion
     */
    omit?: estado_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_operacionInclude<ExtArgs> | null
  }


  /**
   * Model inventario_movimiento
   */

  export type AggregateInventario_movimiento = {
    _count: Inventario_movimientoCountAggregateOutputType | null
    _avg: Inventario_movimientoAvgAggregateOutputType | null
    _sum: Inventario_movimientoSumAggregateOutputType | null
    _min: Inventario_movimientoMinAggregateOutputType | null
    _max: Inventario_movimientoMaxAggregateOutputType | null
  }

  export type Inventario_movimientoAvgAggregateOutputType = {
    id_movimiento: number | null
    id_producto_variante: number | null
    cantidad: number | null
    id_operacion: number | null
  }

  export type Inventario_movimientoSumAggregateOutputType = {
    id_movimiento: number | null
    id_producto_variante: number | null
    cantidad: number | null
    id_operacion: number | null
  }

  export type Inventario_movimientoMinAggregateOutputType = {
    id_movimiento: number | null
    id_producto_variante: number | null
    tipo_movimiento: string | null
    cantidad: number | null
    id_operacion: number | null
    fecha_movimiento: Date | null
    comentario: string | null
  }

  export type Inventario_movimientoMaxAggregateOutputType = {
    id_movimiento: number | null
    id_producto_variante: number | null
    tipo_movimiento: string | null
    cantidad: number | null
    id_operacion: number | null
    fecha_movimiento: Date | null
    comentario: string | null
  }

  export type Inventario_movimientoCountAggregateOutputType = {
    id_movimiento: number
    id_producto_variante: number
    tipo_movimiento: number
    cantidad: number
    id_operacion: number
    fecha_movimiento: number
    comentario: number
    _all: number
  }


  export type Inventario_movimientoAvgAggregateInputType = {
    id_movimiento?: true
    id_producto_variante?: true
    cantidad?: true
    id_operacion?: true
  }

  export type Inventario_movimientoSumAggregateInputType = {
    id_movimiento?: true
    id_producto_variante?: true
    cantidad?: true
    id_operacion?: true
  }

  export type Inventario_movimientoMinAggregateInputType = {
    id_movimiento?: true
    id_producto_variante?: true
    tipo_movimiento?: true
    cantidad?: true
    id_operacion?: true
    fecha_movimiento?: true
    comentario?: true
  }

  export type Inventario_movimientoMaxAggregateInputType = {
    id_movimiento?: true
    id_producto_variante?: true
    tipo_movimiento?: true
    cantidad?: true
    id_operacion?: true
    fecha_movimiento?: true
    comentario?: true
  }

  export type Inventario_movimientoCountAggregateInputType = {
    id_movimiento?: true
    id_producto_variante?: true
    tipo_movimiento?: true
    cantidad?: true
    id_operacion?: true
    fecha_movimiento?: true
    comentario?: true
    _all?: true
  }

  export type Inventario_movimientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventario_movimiento to aggregate.
     */
    where?: inventario_movimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventario_movimientos to fetch.
     */
    orderBy?: inventario_movimientoOrderByWithRelationInput | inventario_movimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventario_movimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventario_movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventario_movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventario_movimientos
    **/
    _count?: true | Inventario_movimientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Inventario_movimientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Inventario_movimientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Inventario_movimientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Inventario_movimientoMaxAggregateInputType
  }

  export type GetInventario_movimientoAggregateType<T extends Inventario_movimientoAggregateArgs> = {
        [P in keyof T & keyof AggregateInventario_movimiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventario_movimiento[P]>
      : GetScalarType<T[P], AggregateInventario_movimiento[P]>
  }




  export type inventario_movimientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventario_movimientoWhereInput
    orderBy?: inventario_movimientoOrderByWithAggregationInput | inventario_movimientoOrderByWithAggregationInput[]
    by: Inventario_movimientoScalarFieldEnum[] | Inventario_movimientoScalarFieldEnum
    having?: inventario_movimientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Inventario_movimientoCountAggregateInputType | true
    _avg?: Inventario_movimientoAvgAggregateInputType
    _sum?: Inventario_movimientoSumAggregateInputType
    _min?: Inventario_movimientoMinAggregateInputType
    _max?: Inventario_movimientoMaxAggregateInputType
  }

  export type Inventario_movimientoGroupByOutputType = {
    id_movimiento: number
    id_producto_variante: number
    tipo_movimiento: string
    cantidad: number
    id_operacion: number | null
    fecha_movimiento: Date
    comentario: string | null
    _count: Inventario_movimientoCountAggregateOutputType | null
    _avg: Inventario_movimientoAvgAggregateOutputType | null
    _sum: Inventario_movimientoSumAggregateOutputType | null
    _min: Inventario_movimientoMinAggregateOutputType | null
    _max: Inventario_movimientoMaxAggregateOutputType | null
  }

  type GetInventario_movimientoGroupByPayload<T extends inventario_movimientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Inventario_movimientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Inventario_movimientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Inventario_movimientoGroupByOutputType[P]>
            : GetScalarType<T[P], Inventario_movimientoGroupByOutputType[P]>
        }
      >
    >


  export type inventario_movimientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_movimiento?: boolean
    id_producto_variante?: boolean
    tipo_movimiento?: boolean
    cantidad?: boolean
    id_operacion?: boolean
    fecha_movimiento?: boolean
    comentario?: boolean
    operacion?: boolean | inventario_movimiento$operacionArgs<ExtArgs>
    producto_variante?: boolean | producto_varianteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventario_movimiento"]>

  export type inventario_movimientoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_movimiento?: boolean
    id_producto_variante?: boolean
    tipo_movimiento?: boolean
    cantidad?: boolean
    id_operacion?: boolean
    fecha_movimiento?: boolean
    comentario?: boolean
    operacion?: boolean | inventario_movimiento$operacionArgs<ExtArgs>
    producto_variante?: boolean | producto_varianteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventario_movimiento"]>

  export type inventario_movimientoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_movimiento?: boolean
    id_producto_variante?: boolean
    tipo_movimiento?: boolean
    cantidad?: boolean
    id_operacion?: boolean
    fecha_movimiento?: boolean
    comentario?: boolean
    operacion?: boolean | inventario_movimiento$operacionArgs<ExtArgs>
    producto_variante?: boolean | producto_varianteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventario_movimiento"]>

  export type inventario_movimientoSelectScalar = {
    id_movimiento?: boolean
    id_producto_variante?: boolean
    tipo_movimiento?: boolean
    cantidad?: boolean
    id_operacion?: boolean
    fecha_movimiento?: boolean
    comentario?: boolean
  }

  export type inventario_movimientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_movimiento" | "id_producto_variante" | "tipo_movimiento" | "cantidad" | "id_operacion" | "fecha_movimiento" | "comentario", ExtArgs["result"]["inventario_movimiento"]>
  export type inventario_movimientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operacion?: boolean | inventario_movimiento$operacionArgs<ExtArgs>
    producto_variante?: boolean | producto_varianteDefaultArgs<ExtArgs>
  }
  export type inventario_movimientoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operacion?: boolean | inventario_movimiento$operacionArgs<ExtArgs>
    producto_variante?: boolean | producto_varianteDefaultArgs<ExtArgs>
  }
  export type inventario_movimientoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operacion?: boolean | inventario_movimiento$operacionArgs<ExtArgs>
    producto_variante?: boolean | producto_varianteDefaultArgs<ExtArgs>
  }

  export type $inventario_movimientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventario_movimiento"
    objects: {
      operacion: Prisma.$operacionPayload<ExtArgs> | null
      producto_variante: Prisma.$producto_variantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_movimiento: number
      id_producto_variante: number
      tipo_movimiento: string
      cantidad: number
      id_operacion: number | null
      fecha_movimiento: Date
      comentario: string | null
    }, ExtArgs["result"]["inventario_movimiento"]>
    composites: {}
  }

  type inventario_movimientoGetPayload<S extends boolean | null | undefined | inventario_movimientoDefaultArgs> = $Result.GetResult<Prisma.$inventario_movimientoPayload, S>

  type inventario_movimientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inventario_movimientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Inventario_movimientoCountAggregateInputType | true
    }

  export interface inventario_movimientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventario_movimiento'], meta: { name: 'inventario_movimiento' } }
    /**
     * Find zero or one Inventario_movimiento that matches the filter.
     * @param {inventario_movimientoFindUniqueArgs} args - Arguments to find a Inventario_movimiento
     * @example
     * // Get one Inventario_movimiento
     * const inventario_movimiento = await prisma.inventario_movimiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventario_movimientoFindUniqueArgs>(args: SelectSubset<T, inventario_movimientoFindUniqueArgs<ExtArgs>>): Prisma__inventario_movimientoClient<$Result.GetResult<Prisma.$inventario_movimientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventario_movimiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventario_movimientoFindUniqueOrThrowArgs} args - Arguments to find a Inventario_movimiento
     * @example
     * // Get one Inventario_movimiento
     * const inventario_movimiento = await prisma.inventario_movimiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventario_movimientoFindUniqueOrThrowArgs>(args: SelectSubset<T, inventario_movimientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventario_movimientoClient<$Result.GetResult<Prisma.$inventario_movimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventario_movimiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_movimientoFindFirstArgs} args - Arguments to find a Inventario_movimiento
     * @example
     * // Get one Inventario_movimiento
     * const inventario_movimiento = await prisma.inventario_movimiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventario_movimientoFindFirstArgs>(args?: SelectSubset<T, inventario_movimientoFindFirstArgs<ExtArgs>>): Prisma__inventario_movimientoClient<$Result.GetResult<Prisma.$inventario_movimientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventario_movimiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_movimientoFindFirstOrThrowArgs} args - Arguments to find a Inventario_movimiento
     * @example
     * // Get one Inventario_movimiento
     * const inventario_movimiento = await prisma.inventario_movimiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventario_movimientoFindFirstOrThrowArgs>(args?: SelectSubset<T, inventario_movimientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventario_movimientoClient<$Result.GetResult<Prisma.$inventario_movimientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventario_movimientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_movimientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventario_movimientos
     * const inventario_movimientos = await prisma.inventario_movimiento.findMany()
     * 
     * // Get first 10 Inventario_movimientos
     * const inventario_movimientos = await prisma.inventario_movimiento.findMany({ take: 10 })
     * 
     * // Only select the `id_movimiento`
     * const inventario_movimientoWithId_movimientoOnly = await prisma.inventario_movimiento.findMany({ select: { id_movimiento: true } })
     * 
     */
    findMany<T extends inventario_movimientoFindManyArgs>(args?: SelectSubset<T, inventario_movimientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventario_movimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventario_movimiento.
     * @param {inventario_movimientoCreateArgs} args - Arguments to create a Inventario_movimiento.
     * @example
     * // Create one Inventario_movimiento
     * const Inventario_movimiento = await prisma.inventario_movimiento.create({
     *   data: {
     *     // ... data to create a Inventario_movimiento
     *   }
     * })
     * 
     */
    create<T extends inventario_movimientoCreateArgs>(args: SelectSubset<T, inventario_movimientoCreateArgs<ExtArgs>>): Prisma__inventario_movimientoClient<$Result.GetResult<Prisma.$inventario_movimientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventario_movimientos.
     * @param {inventario_movimientoCreateManyArgs} args - Arguments to create many Inventario_movimientos.
     * @example
     * // Create many Inventario_movimientos
     * const inventario_movimiento = await prisma.inventario_movimiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventario_movimientoCreateManyArgs>(args?: SelectSubset<T, inventario_movimientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventario_movimientos and returns the data saved in the database.
     * @param {inventario_movimientoCreateManyAndReturnArgs} args - Arguments to create many Inventario_movimientos.
     * @example
     * // Create many Inventario_movimientos
     * const inventario_movimiento = await prisma.inventario_movimiento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventario_movimientos and only return the `id_movimiento`
     * const inventario_movimientoWithId_movimientoOnly = await prisma.inventario_movimiento.createManyAndReturn({
     *   select: { id_movimiento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inventario_movimientoCreateManyAndReturnArgs>(args?: SelectSubset<T, inventario_movimientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventario_movimientoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventario_movimiento.
     * @param {inventario_movimientoDeleteArgs} args - Arguments to delete one Inventario_movimiento.
     * @example
     * // Delete one Inventario_movimiento
     * const Inventario_movimiento = await prisma.inventario_movimiento.delete({
     *   where: {
     *     // ... filter to delete one Inventario_movimiento
     *   }
     * })
     * 
     */
    delete<T extends inventario_movimientoDeleteArgs>(args: SelectSubset<T, inventario_movimientoDeleteArgs<ExtArgs>>): Prisma__inventario_movimientoClient<$Result.GetResult<Prisma.$inventario_movimientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventario_movimiento.
     * @param {inventario_movimientoUpdateArgs} args - Arguments to update one Inventario_movimiento.
     * @example
     * // Update one Inventario_movimiento
     * const inventario_movimiento = await prisma.inventario_movimiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventario_movimientoUpdateArgs>(args: SelectSubset<T, inventario_movimientoUpdateArgs<ExtArgs>>): Prisma__inventario_movimientoClient<$Result.GetResult<Prisma.$inventario_movimientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventario_movimientos.
     * @param {inventario_movimientoDeleteManyArgs} args - Arguments to filter Inventario_movimientos to delete.
     * @example
     * // Delete a few Inventario_movimientos
     * const { count } = await prisma.inventario_movimiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventario_movimientoDeleteManyArgs>(args?: SelectSubset<T, inventario_movimientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventario_movimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_movimientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventario_movimientos
     * const inventario_movimiento = await prisma.inventario_movimiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventario_movimientoUpdateManyArgs>(args: SelectSubset<T, inventario_movimientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventario_movimientos and returns the data updated in the database.
     * @param {inventario_movimientoUpdateManyAndReturnArgs} args - Arguments to update many Inventario_movimientos.
     * @example
     * // Update many Inventario_movimientos
     * const inventario_movimiento = await prisma.inventario_movimiento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventario_movimientos and only return the `id_movimiento`
     * const inventario_movimientoWithId_movimientoOnly = await prisma.inventario_movimiento.updateManyAndReturn({
     *   select: { id_movimiento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends inventario_movimientoUpdateManyAndReturnArgs>(args: SelectSubset<T, inventario_movimientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventario_movimientoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventario_movimiento.
     * @param {inventario_movimientoUpsertArgs} args - Arguments to update or create a Inventario_movimiento.
     * @example
     * // Update or create a Inventario_movimiento
     * const inventario_movimiento = await prisma.inventario_movimiento.upsert({
     *   create: {
     *     // ... data to create a Inventario_movimiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventario_movimiento we want to update
     *   }
     * })
     */
    upsert<T extends inventario_movimientoUpsertArgs>(args: SelectSubset<T, inventario_movimientoUpsertArgs<ExtArgs>>): Prisma__inventario_movimientoClient<$Result.GetResult<Prisma.$inventario_movimientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventario_movimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_movimientoCountArgs} args - Arguments to filter Inventario_movimientos to count.
     * @example
     * // Count the number of Inventario_movimientos
     * const count = await prisma.inventario_movimiento.count({
     *   where: {
     *     // ... the filter for the Inventario_movimientos we want to count
     *   }
     * })
    **/
    count<T extends inventario_movimientoCountArgs>(
      args?: Subset<T, inventario_movimientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Inventario_movimientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventario_movimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inventario_movimientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Inventario_movimientoAggregateArgs>(args: Subset<T, Inventario_movimientoAggregateArgs>): Prisma.PrismaPromise<GetInventario_movimientoAggregateType<T>>

    /**
     * Group by Inventario_movimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_movimientoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inventario_movimientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventario_movimientoGroupByArgs['orderBy'] }
        : { orderBy?: inventario_movimientoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inventario_movimientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventario_movimientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventario_movimiento model
   */
  readonly fields: inventario_movimientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventario_movimiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventario_movimientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operacion<T extends inventario_movimiento$operacionArgs<ExtArgs> = {}>(args?: Subset<T, inventario_movimiento$operacionArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    producto_variante<T extends producto_varianteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, producto_varianteDefaultArgs<ExtArgs>>): Prisma__producto_varianteClient<$Result.GetResult<Prisma.$producto_variantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inventario_movimiento model
   */
  interface inventario_movimientoFieldRefs {
    readonly id_movimiento: FieldRef<"inventario_movimiento", 'Int'>
    readonly id_producto_variante: FieldRef<"inventario_movimiento", 'Int'>
    readonly tipo_movimiento: FieldRef<"inventario_movimiento", 'String'>
    readonly cantidad: FieldRef<"inventario_movimiento", 'Int'>
    readonly id_operacion: FieldRef<"inventario_movimiento", 'Int'>
    readonly fecha_movimiento: FieldRef<"inventario_movimiento", 'DateTime'>
    readonly comentario: FieldRef<"inventario_movimiento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * inventario_movimiento findUnique
   */
  export type inventario_movimientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_movimiento
     */
    select?: inventario_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_movimiento
     */
    omit?: inventario_movimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_movimientoInclude<ExtArgs> | null
    /**
     * Filter, which inventario_movimiento to fetch.
     */
    where: inventario_movimientoWhereUniqueInput
  }

  /**
   * inventario_movimiento findUniqueOrThrow
   */
  export type inventario_movimientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_movimiento
     */
    select?: inventario_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_movimiento
     */
    omit?: inventario_movimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_movimientoInclude<ExtArgs> | null
    /**
     * Filter, which inventario_movimiento to fetch.
     */
    where: inventario_movimientoWhereUniqueInput
  }

  /**
   * inventario_movimiento findFirst
   */
  export type inventario_movimientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_movimiento
     */
    select?: inventario_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_movimiento
     */
    omit?: inventario_movimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_movimientoInclude<ExtArgs> | null
    /**
     * Filter, which inventario_movimiento to fetch.
     */
    where?: inventario_movimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventario_movimientos to fetch.
     */
    orderBy?: inventario_movimientoOrderByWithRelationInput | inventario_movimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventario_movimientos.
     */
    cursor?: inventario_movimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventario_movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventario_movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventario_movimientos.
     */
    distinct?: Inventario_movimientoScalarFieldEnum | Inventario_movimientoScalarFieldEnum[]
  }

  /**
   * inventario_movimiento findFirstOrThrow
   */
  export type inventario_movimientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_movimiento
     */
    select?: inventario_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_movimiento
     */
    omit?: inventario_movimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_movimientoInclude<ExtArgs> | null
    /**
     * Filter, which inventario_movimiento to fetch.
     */
    where?: inventario_movimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventario_movimientos to fetch.
     */
    orderBy?: inventario_movimientoOrderByWithRelationInput | inventario_movimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventario_movimientos.
     */
    cursor?: inventario_movimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventario_movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventario_movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventario_movimientos.
     */
    distinct?: Inventario_movimientoScalarFieldEnum | Inventario_movimientoScalarFieldEnum[]
  }

  /**
   * inventario_movimiento findMany
   */
  export type inventario_movimientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_movimiento
     */
    select?: inventario_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_movimiento
     */
    omit?: inventario_movimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_movimientoInclude<ExtArgs> | null
    /**
     * Filter, which inventario_movimientos to fetch.
     */
    where?: inventario_movimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventario_movimientos to fetch.
     */
    orderBy?: inventario_movimientoOrderByWithRelationInput | inventario_movimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventario_movimientos.
     */
    cursor?: inventario_movimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventario_movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventario_movimientos.
     */
    skip?: number
    distinct?: Inventario_movimientoScalarFieldEnum | Inventario_movimientoScalarFieldEnum[]
  }

  /**
   * inventario_movimiento create
   */
  export type inventario_movimientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_movimiento
     */
    select?: inventario_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_movimiento
     */
    omit?: inventario_movimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_movimientoInclude<ExtArgs> | null
    /**
     * The data needed to create a inventario_movimiento.
     */
    data: XOR<inventario_movimientoCreateInput, inventario_movimientoUncheckedCreateInput>
  }

  /**
   * inventario_movimiento createMany
   */
  export type inventario_movimientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventario_movimientos.
     */
    data: inventario_movimientoCreateManyInput | inventario_movimientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventario_movimiento createManyAndReturn
   */
  export type inventario_movimientoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_movimiento
     */
    select?: inventario_movimientoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_movimiento
     */
    omit?: inventario_movimientoOmit<ExtArgs> | null
    /**
     * The data used to create many inventario_movimientos.
     */
    data: inventario_movimientoCreateManyInput | inventario_movimientoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_movimientoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * inventario_movimiento update
   */
  export type inventario_movimientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_movimiento
     */
    select?: inventario_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_movimiento
     */
    omit?: inventario_movimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_movimientoInclude<ExtArgs> | null
    /**
     * The data needed to update a inventario_movimiento.
     */
    data: XOR<inventario_movimientoUpdateInput, inventario_movimientoUncheckedUpdateInput>
    /**
     * Choose, which inventario_movimiento to update.
     */
    where: inventario_movimientoWhereUniqueInput
  }

  /**
   * inventario_movimiento updateMany
   */
  export type inventario_movimientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventario_movimientos.
     */
    data: XOR<inventario_movimientoUpdateManyMutationInput, inventario_movimientoUncheckedUpdateManyInput>
    /**
     * Filter which inventario_movimientos to update
     */
    where?: inventario_movimientoWhereInput
    /**
     * Limit how many inventario_movimientos to update.
     */
    limit?: number
  }

  /**
   * inventario_movimiento updateManyAndReturn
   */
  export type inventario_movimientoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_movimiento
     */
    select?: inventario_movimientoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_movimiento
     */
    omit?: inventario_movimientoOmit<ExtArgs> | null
    /**
     * The data used to update inventario_movimientos.
     */
    data: XOR<inventario_movimientoUpdateManyMutationInput, inventario_movimientoUncheckedUpdateManyInput>
    /**
     * Filter which inventario_movimientos to update
     */
    where?: inventario_movimientoWhereInput
    /**
     * Limit how many inventario_movimientos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_movimientoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * inventario_movimiento upsert
   */
  export type inventario_movimientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_movimiento
     */
    select?: inventario_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_movimiento
     */
    omit?: inventario_movimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_movimientoInclude<ExtArgs> | null
    /**
     * The filter to search for the inventario_movimiento to update in case it exists.
     */
    where: inventario_movimientoWhereUniqueInput
    /**
     * In case the inventario_movimiento found by the `where` argument doesn't exist, create a new inventario_movimiento with this data.
     */
    create: XOR<inventario_movimientoCreateInput, inventario_movimientoUncheckedCreateInput>
    /**
     * In case the inventario_movimiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventario_movimientoUpdateInput, inventario_movimientoUncheckedUpdateInput>
  }

  /**
   * inventario_movimiento delete
   */
  export type inventario_movimientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_movimiento
     */
    select?: inventario_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_movimiento
     */
    omit?: inventario_movimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_movimientoInclude<ExtArgs> | null
    /**
     * Filter which inventario_movimiento to delete.
     */
    where: inventario_movimientoWhereUniqueInput
  }

  /**
   * inventario_movimiento deleteMany
   */
  export type inventario_movimientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventario_movimientos to delete
     */
    where?: inventario_movimientoWhereInput
    /**
     * Limit how many inventario_movimientos to delete.
     */
    limit?: number
  }

  /**
   * inventario_movimiento.operacion
   */
  export type inventario_movimiento$operacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    where?: operacionWhereInput
  }

  /**
   * inventario_movimiento without action
   */
  export type inventario_movimientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_movimiento
     */
    select?: inventario_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_movimiento
     */
    omit?: inventario_movimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_movimientoInclude<ExtArgs> | null
  }


  /**
   * Model metodo_pago
   */

  export type AggregateMetodo_pago = {
    _count: Metodo_pagoCountAggregateOutputType | null
    _avg: Metodo_pagoAvgAggregateOutputType | null
    _sum: Metodo_pagoSumAggregateOutputType | null
    _min: Metodo_pagoMinAggregateOutputType | null
    _max: Metodo_pagoMaxAggregateOutputType | null
  }

  export type Metodo_pagoAvgAggregateOutputType = {
    id_metodo_pago: number | null
  }

  export type Metodo_pagoSumAggregateOutputType = {
    id_metodo_pago: number | null
  }

  export type Metodo_pagoMinAggregateOutputType = {
    id_metodo_pago: number | null
    nombre: string | null
  }

  export type Metodo_pagoMaxAggregateOutputType = {
    id_metodo_pago: number | null
    nombre: string | null
  }

  export type Metodo_pagoCountAggregateOutputType = {
    id_metodo_pago: number
    nombre: number
    _all: number
  }


  export type Metodo_pagoAvgAggregateInputType = {
    id_metodo_pago?: true
  }

  export type Metodo_pagoSumAggregateInputType = {
    id_metodo_pago?: true
  }

  export type Metodo_pagoMinAggregateInputType = {
    id_metodo_pago?: true
    nombre?: true
  }

  export type Metodo_pagoMaxAggregateInputType = {
    id_metodo_pago?: true
    nombre?: true
  }

  export type Metodo_pagoCountAggregateInputType = {
    id_metodo_pago?: true
    nombre?: true
    _all?: true
  }

  export type Metodo_pagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which metodo_pago to aggregate.
     */
    where?: metodo_pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metodo_pagos to fetch.
     */
    orderBy?: metodo_pagoOrderByWithRelationInput | metodo_pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: metodo_pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metodo_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metodo_pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned metodo_pagos
    **/
    _count?: true | Metodo_pagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Metodo_pagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Metodo_pagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Metodo_pagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Metodo_pagoMaxAggregateInputType
  }

  export type GetMetodo_pagoAggregateType<T extends Metodo_pagoAggregateArgs> = {
        [P in keyof T & keyof AggregateMetodo_pago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetodo_pago[P]>
      : GetScalarType<T[P], AggregateMetodo_pago[P]>
  }




  export type metodo_pagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: metodo_pagoWhereInput
    orderBy?: metodo_pagoOrderByWithAggregationInput | metodo_pagoOrderByWithAggregationInput[]
    by: Metodo_pagoScalarFieldEnum[] | Metodo_pagoScalarFieldEnum
    having?: metodo_pagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Metodo_pagoCountAggregateInputType | true
    _avg?: Metodo_pagoAvgAggregateInputType
    _sum?: Metodo_pagoSumAggregateInputType
    _min?: Metodo_pagoMinAggregateInputType
    _max?: Metodo_pagoMaxAggregateInputType
  }

  export type Metodo_pagoGroupByOutputType = {
    id_metodo_pago: number
    nombre: string
    _count: Metodo_pagoCountAggregateOutputType | null
    _avg: Metodo_pagoAvgAggregateOutputType | null
    _sum: Metodo_pagoSumAggregateOutputType | null
    _min: Metodo_pagoMinAggregateOutputType | null
    _max: Metodo_pagoMaxAggregateOutputType | null
  }

  type GetMetodo_pagoGroupByPayload<T extends metodo_pagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Metodo_pagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Metodo_pagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Metodo_pagoGroupByOutputType[P]>
            : GetScalarType<T[P], Metodo_pagoGroupByOutputType[P]>
        }
      >
    >


  export type metodo_pagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_metodo_pago?: boolean
    nombre?: boolean
    operacion_venta?: boolean | metodo_pago$operacion_ventaArgs<ExtArgs>
    pago?: boolean | metodo_pago$pagoArgs<ExtArgs>
    _count?: boolean | Metodo_pagoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metodo_pago"]>

  export type metodo_pagoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_metodo_pago?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["metodo_pago"]>

  export type metodo_pagoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_metodo_pago?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["metodo_pago"]>

  export type metodo_pagoSelectScalar = {
    id_metodo_pago?: boolean
    nombre?: boolean
  }

  export type metodo_pagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_metodo_pago" | "nombre", ExtArgs["result"]["metodo_pago"]>
  export type metodo_pagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operacion_venta?: boolean | metodo_pago$operacion_ventaArgs<ExtArgs>
    pago?: boolean | metodo_pago$pagoArgs<ExtArgs>
    _count?: boolean | Metodo_pagoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type metodo_pagoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type metodo_pagoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $metodo_pagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "metodo_pago"
    objects: {
      operacion_venta: Prisma.$operacion_ventaPayload<ExtArgs>[]
      pago: Prisma.$pagoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_metodo_pago: number
      nombre: string
    }, ExtArgs["result"]["metodo_pago"]>
    composites: {}
  }

  type metodo_pagoGetPayload<S extends boolean | null | undefined | metodo_pagoDefaultArgs> = $Result.GetResult<Prisma.$metodo_pagoPayload, S>

  type metodo_pagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<metodo_pagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Metodo_pagoCountAggregateInputType | true
    }

  export interface metodo_pagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['metodo_pago'], meta: { name: 'metodo_pago' } }
    /**
     * Find zero or one Metodo_pago that matches the filter.
     * @param {metodo_pagoFindUniqueArgs} args - Arguments to find a Metodo_pago
     * @example
     * // Get one Metodo_pago
     * const metodo_pago = await prisma.metodo_pago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends metodo_pagoFindUniqueArgs>(args: SelectSubset<T, metodo_pagoFindUniqueArgs<ExtArgs>>): Prisma__metodo_pagoClient<$Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metodo_pago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {metodo_pagoFindUniqueOrThrowArgs} args - Arguments to find a Metodo_pago
     * @example
     * // Get one Metodo_pago
     * const metodo_pago = await prisma.metodo_pago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends metodo_pagoFindUniqueOrThrowArgs>(args: SelectSubset<T, metodo_pagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__metodo_pagoClient<$Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metodo_pago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metodo_pagoFindFirstArgs} args - Arguments to find a Metodo_pago
     * @example
     * // Get one Metodo_pago
     * const metodo_pago = await prisma.metodo_pago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends metodo_pagoFindFirstArgs>(args?: SelectSubset<T, metodo_pagoFindFirstArgs<ExtArgs>>): Prisma__metodo_pagoClient<$Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metodo_pago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metodo_pagoFindFirstOrThrowArgs} args - Arguments to find a Metodo_pago
     * @example
     * // Get one Metodo_pago
     * const metodo_pago = await prisma.metodo_pago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends metodo_pagoFindFirstOrThrowArgs>(args?: SelectSubset<T, metodo_pagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__metodo_pagoClient<$Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metodo_pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metodo_pagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metodo_pagos
     * const metodo_pagos = await prisma.metodo_pago.findMany()
     * 
     * // Get first 10 Metodo_pagos
     * const metodo_pagos = await prisma.metodo_pago.findMany({ take: 10 })
     * 
     * // Only select the `id_metodo_pago`
     * const metodo_pagoWithId_metodo_pagoOnly = await prisma.metodo_pago.findMany({ select: { id_metodo_pago: true } })
     * 
     */
    findMany<T extends metodo_pagoFindManyArgs>(args?: SelectSubset<T, metodo_pagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metodo_pago.
     * @param {metodo_pagoCreateArgs} args - Arguments to create a Metodo_pago.
     * @example
     * // Create one Metodo_pago
     * const Metodo_pago = await prisma.metodo_pago.create({
     *   data: {
     *     // ... data to create a Metodo_pago
     *   }
     * })
     * 
     */
    create<T extends metodo_pagoCreateArgs>(args: SelectSubset<T, metodo_pagoCreateArgs<ExtArgs>>): Prisma__metodo_pagoClient<$Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metodo_pagos.
     * @param {metodo_pagoCreateManyArgs} args - Arguments to create many Metodo_pagos.
     * @example
     * // Create many Metodo_pagos
     * const metodo_pago = await prisma.metodo_pago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends metodo_pagoCreateManyArgs>(args?: SelectSubset<T, metodo_pagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metodo_pagos and returns the data saved in the database.
     * @param {metodo_pagoCreateManyAndReturnArgs} args - Arguments to create many Metodo_pagos.
     * @example
     * // Create many Metodo_pagos
     * const metodo_pago = await prisma.metodo_pago.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metodo_pagos and only return the `id_metodo_pago`
     * const metodo_pagoWithId_metodo_pagoOnly = await prisma.metodo_pago.createManyAndReturn({
     *   select: { id_metodo_pago: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends metodo_pagoCreateManyAndReturnArgs>(args?: SelectSubset<T, metodo_pagoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Metodo_pago.
     * @param {metodo_pagoDeleteArgs} args - Arguments to delete one Metodo_pago.
     * @example
     * // Delete one Metodo_pago
     * const Metodo_pago = await prisma.metodo_pago.delete({
     *   where: {
     *     // ... filter to delete one Metodo_pago
     *   }
     * })
     * 
     */
    delete<T extends metodo_pagoDeleteArgs>(args: SelectSubset<T, metodo_pagoDeleteArgs<ExtArgs>>): Prisma__metodo_pagoClient<$Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metodo_pago.
     * @param {metodo_pagoUpdateArgs} args - Arguments to update one Metodo_pago.
     * @example
     * // Update one Metodo_pago
     * const metodo_pago = await prisma.metodo_pago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends metodo_pagoUpdateArgs>(args: SelectSubset<T, metodo_pagoUpdateArgs<ExtArgs>>): Prisma__metodo_pagoClient<$Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metodo_pagos.
     * @param {metodo_pagoDeleteManyArgs} args - Arguments to filter Metodo_pagos to delete.
     * @example
     * // Delete a few Metodo_pagos
     * const { count } = await prisma.metodo_pago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends metodo_pagoDeleteManyArgs>(args?: SelectSubset<T, metodo_pagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metodo_pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metodo_pagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metodo_pagos
     * const metodo_pago = await prisma.metodo_pago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends metodo_pagoUpdateManyArgs>(args: SelectSubset<T, metodo_pagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metodo_pagos and returns the data updated in the database.
     * @param {metodo_pagoUpdateManyAndReturnArgs} args - Arguments to update many Metodo_pagos.
     * @example
     * // Update many Metodo_pagos
     * const metodo_pago = await prisma.metodo_pago.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metodo_pagos and only return the `id_metodo_pago`
     * const metodo_pagoWithId_metodo_pagoOnly = await prisma.metodo_pago.updateManyAndReturn({
     *   select: { id_metodo_pago: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends metodo_pagoUpdateManyAndReturnArgs>(args: SelectSubset<T, metodo_pagoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Metodo_pago.
     * @param {metodo_pagoUpsertArgs} args - Arguments to update or create a Metodo_pago.
     * @example
     * // Update or create a Metodo_pago
     * const metodo_pago = await prisma.metodo_pago.upsert({
     *   create: {
     *     // ... data to create a Metodo_pago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metodo_pago we want to update
     *   }
     * })
     */
    upsert<T extends metodo_pagoUpsertArgs>(args: SelectSubset<T, metodo_pagoUpsertArgs<ExtArgs>>): Prisma__metodo_pagoClient<$Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metodo_pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metodo_pagoCountArgs} args - Arguments to filter Metodo_pagos to count.
     * @example
     * // Count the number of Metodo_pagos
     * const count = await prisma.metodo_pago.count({
     *   where: {
     *     // ... the filter for the Metodo_pagos we want to count
     *   }
     * })
    **/
    count<T extends metodo_pagoCountArgs>(
      args?: Subset<T, metodo_pagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Metodo_pagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metodo_pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Metodo_pagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Metodo_pagoAggregateArgs>(args: Subset<T, Metodo_pagoAggregateArgs>): Prisma.PrismaPromise<GetMetodo_pagoAggregateType<T>>

    /**
     * Group by Metodo_pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metodo_pagoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends metodo_pagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: metodo_pagoGroupByArgs['orderBy'] }
        : { orderBy?: metodo_pagoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, metodo_pagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetodo_pagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the metodo_pago model
   */
  readonly fields: metodo_pagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for metodo_pago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__metodo_pagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operacion_venta<T extends metodo_pago$operacion_ventaArgs<ExtArgs> = {}>(args?: Subset<T, metodo_pago$operacion_ventaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operacion_ventaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pago<T extends metodo_pago$pagoArgs<ExtArgs> = {}>(args?: Subset<T, metodo_pago$pagoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the metodo_pago model
   */
  interface metodo_pagoFieldRefs {
    readonly id_metodo_pago: FieldRef<"metodo_pago", 'Int'>
    readonly nombre: FieldRef<"metodo_pago", 'String'>
  }
    

  // Custom InputTypes
  /**
   * metodo_pago findUnique
   */
  export type metodo_pagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodo_pago
     */
    select?: metodo_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodo_pago
     */
    omit?: metodo_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodo_pagoInclude<ExtArgs> | null
    /**
     * Filter, which metodo_pago to fetch.
     */
    where: metodo_pagoWhereUniqueInput
  }

  /**
   * metodo_pago findUniqueOrThrow
   */
  export type metodo_pagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodo_pago
     */
    select?: metodo_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodo_pago
     */
    omit?: metodo_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodo_pagoInclude<ExtArgs> | null
    /**
     * Filter, which metodo_pago to fetch.
     */
    where: metodo_pagoWhereUniqueInput
  }

  /**
   * metodo_pago findFirst
   */
  export type metodo_pagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodo_pago
     */
    select?: metodo_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodo_pago
     */
    omit?: metodo_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodo_pagoInclude<ExtArgs> | null
    /**
     * Filter, which metodo_pago to fetch.
     */
    where?: metodo_pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metodo_pagos to fetch.
     */
    orderBy?: metodo_pagoOrderByWithRelationInput | metodo_pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for metodo_pagos.
     */
    cursor?: metodo_pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metodo_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metodo_pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of metodo_pagos.
     */
    distinct?: Metodo_pagoScalarFieldEnum | Metodo_pagoScalarFieldEnum[]
  }

  /**
   * metodo_pago findFirstOrThrow
   */
  export type metodo_pagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodo_pago
     */
    select?: metodo_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodo_pago
     */
    omit?: metodo_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodo_pagoInclude<ExtArgs> | null
    /**
     * Filter, which metodo_pago to fetch.
     */
    where?: metodo_pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metodo_pagos to fetch.
     */
    orderBy?: metodo_pagoOrderByWithRelationInput | metodo_pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for metodo_pagos.
     */
    cursor?: metodo_pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metodo_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metodo_pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of metodo_pagos.
     */
    distinct?: Metodo_pagoScalarFieldEnum | Metodo_pagoScalarFieldEnum[]
  }

  /**
   * metodo_pago findMany
   */
  export type metodo_pagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodo_pago
     */
    select?: metodo_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodo_pago
     */
    omit?: metodo_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodo_pagoInclude<ExtArgs> | null
    /**
     * Filter, which metodo_pagos to fetch.
     */
    where?: metodo_pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metodo_pagos to fetch.
     */
    orderBy?: metodo_pagoOrderByWithRelationInput | metodo_pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing metodo_pagos.
     */
    cursor?: metodo_pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metodo_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metodo_pagos.
     */
    skip?: number
    distinct?: Metodo_pagoScalarFieldEnum | Metodo_pagoScalarFieldEnum[]
  }

  /**
   * metodo_pago create
   */
  export type metodo_pagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodo_pago
     */
    select?: metodo_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodo_pago
     */
    omit?: metodo_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodo_pagoInclude<ExtArgs> | null
    /**
     * The data needed to create a metodo_pago.
     */
    data: XOR<metodo_pagoCreateInput, metodo_pagoUncheckedCreateInput>
  }

  /**
   * metodo_pago createMany
   */
  export type metodo_pagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many metodo_pagos.
     */
    data: metodo_pagoCreateManyInput | metodo_pagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * metodo_pago createManyAndReturn
   */
  export type metodo_pagoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodo_pago
     */
    select?: metodo_pagoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the metodo_pago
     */
    omit?: metodo_pagoOmit<ExtArgs> | null
    /**
     * The data used to create many metodo_pagos.
     */
    data: metodo_pagoCreateManyInput | metodo_pagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * metodo_pago update
   */
  export type metodo_pagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodo_pago
     */
    select?: metodo_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodo_pago
     */
    omit?: metodo_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodo_pagoInclude<ExtArgs> | null
    /**
     * The data needed to update a metodo_pago.
     */
    data: XOR<metodo_pagoUpdateInput, metodo_pagoUncheckedUpdateInput>
    /**
     * Choose, which metodo_pago to update.
     */
    where: metodo_pagoWhereUniqueInput
  }

  /**
   * metodo_pago updateMany
   */
  export type metodo_pagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update metodo_pagos.
     */
    data: XOR<metodo_pagoUpdateManyMutationInput, metodo_pagoUncheckedUpdateManyInput>
    /**
     * Filter which metodo_pagos to update
     */
    where?: metodo_pagoWhereInput
    /**
     * Limit how many metodo_pagos to update.
     */
    limit?: number
  }

  /**
   * metodo_pago updateManyAndReturn
   */
  export type metodo_pagoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodo_pago
     */
    select?: metodo_pagoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the metodo_pago
     */
    omit?: metodo_pagoOmit<ExtArgs> | null
    /**
     * The data used to update metodo_pagos.
     */
    data: XOR<metodo_pagoUpdateManyMutationInput, metodo_pagoUncheckedUpdateManyInput>
    /**
     * Filter which metodo_pagos to update
     */
    where?: metodo_pagoWhereInput
    /**
     * Limit how many metodo_pagos to update.
     */
    limit?: number
  }

  /**
   * metodo_pago upsert
   */
  export type metodo_pagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodo_pago
     */
    select?: metodo_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodo_pago
     */
    omit?: metodo_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodo_pagoInclude<ExtArgs> | null
    /**
     * The filter to search for the metodo_pago to update in case it exists.
     */
    where: metodo_pagoWhereUniqueInput
    /**
     * In case the metodo_pago found by the `where` argument doesn't exist, create a new metodo_pago with this data.
     */
    create: XOR<metodo_pagoCreateInput, metodo_pagoUncheckedCreateInput>
    /**
     * In case the metodo_pago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<metodo_pagoUpdateInput, metodo_pagoUncheckedUpdateInput>
  }

  /**
   * metodo_pago delete
   */
  export type metodo_pagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodo_pago
     */
    select?: metodo_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodo_pago
     */
    omit?: metodo_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodo_pagoInclude<ExtArgs> | null
    /**
     * Filter which metodo_pago to delete.
     */
    where: metodo_pagoWhereUniqueInput
  }

  /**
   * metodo_pago deleteMany
   */
  export type metodo_pagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which metodo_pagos to delete
     */
    where?: metodo_pagoWhereInput
    /**
     * Limit how many metodo_pagos to delete.
     */
    limit?: number
  }

  /**
   * metodo_pago.operacion_venta
   */
  export type metodo_pago$operacion_ventaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion_venta
     */
    select?: operacion_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion_venta
     */
    omit?: operacion_ventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacion_ventaInclude<ExtArgs> | null
    where?: operacion_ventaWhereInput
    orderBy?: operacion_ventaOrderByWithRelationInput | operacion_ventaOrderByWithRelationInput[]
    cursor?: operacion_ventaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Operacion_ventaScalarFieldEnum | Operacion_ventaScalarFieldEnum[]
  }

  /**
   * metodo_pago.pago
   */
  export type metodo_pago$pagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    where?: pagoWhereInput
    orderBy?: pagoOrderByWithRelationInput | pagoOrderByWithRelationInput[]
    cursor?: pagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * metodo_pago without action
   */
  export type metodo_pagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodo_pago
     */
    select?: metodo_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodo_pago
     */
    omit?: metodo_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodo_pagoInclude<ExtArgs> | null
  }


  /**
   * Model operacion
   */

  export type AggregateOperacion = {
    _count: OperacionCountAggregateOutputType | null
    _avg: OperacionAvgAggregateOutputType | null
    _sum: OperacionSumAggregateOutputType | null
    _min: OperacionMinAggregateOutputType | null
    _max: OperacionMaxAggregateOutputType | null
  }

  export type OperacionAvgAggregateOutputType = {
    id_operacion: number | null
    id_tipo_operacion: number | null
    id_estado_operacion: number | null
  }

  export type OperacionSumAggregateOutputType = {
    id_operacion: number | null
    id_tipo_operacion: number | null
    id_estado_operacion: number | null
  }

  export type OperacionMinAggregateOutputType = {
    id_operacion: number | null
    id_tipo_operacion: number | null
    id_estado_operacion: number | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
  }

  export type OperacionMaxAggregateOutputType = {
    id_operacion: number | null
    id_tipo_operacion: number | null
    id_estado_operacion: number | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
  }

  export type OperacionCountAggregateOutputType = {
    id_operacion: number
    id_tipo_operacion: number
    id_estado_operacion: number
    fecha_creacion: number
    fecha_actualizacion: number
    _all: number
  }


  export type OperacionAvgAggregateInputType = {
    id_operacion?: true
    id_tipo_operacion?: true
    id_estado_operacion?: true
  }

  export type OperacionSumAggregateInputType = {
    id_operacion?: true
    id_tipo_operacion?: true
    id_estado_operacion?: true
  }

  export type OperacionMinAggregateInputType = {
    id_operacion?: true
    id_tipo_operacion?: true
    id_estado_operacion?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
  }

  export type OperacionMaxAggregateInputType = {
    id_operacion?: true
    id_tipo_operacion?: true
    id_estado_operacion?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
  }

  export type OperacionCountAggregateInputType = {
    id_operacion?: true
    id_tipo_operacion?: true
    id_estado_operacion?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    _all?: true
  }

  export type OperacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operacion to aggregate.
     */
    where?: operacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operacions to fetch.
     */
    orderBy?: operacionOrderByWithRelationInput | operacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: operacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned operacions
    **/
    _count?: true | OperacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperacionMaxAggregateInputType
  }

  export type GetOperacionAggregateType<T extends OperacionAggregateArgs> = {
        [P in keyof T & keyof AggregateOperacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperacion[P]>
      : GetScalarType<T[P], AggregateOperacion[P]>
  }




  export type operacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operacionWhereInput
    orderBy?: operacionOrderByWithAggregationInput | operacionOrderByWithAggregationInput[]
    by: OperacionScalarFieldEnum[] | OperacionScalarFieldEnum
    having?: operacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperacionCountAggregateInputType | true
    _avg?: OperacionAvgAggregateInputType
    _sum?: OperacionSumAggregateInputType
    _min?: OperacionMinAggregateInputType
    _max?: OperacionMaxAggregateInputType
  }

  export type OperacionGroupByOutputType = {
    id_operacion: number
    id_tipo_operacion: number
    id_estado_operacion: number
    fecha_creacion: Date
    fecha_actualizacion: Date
    _count: OperacionCountAggregateOutputType | null
    _avg: OperacionAvgAggregateOutputType | null
    _sum: OperacionSumAggregateOutputType | null
    _min: OperacionMinAggregateOutputType | null
    _max: OperacionMaxAggregateOutputType | null
  }

  type GetOperacionGroupByPayload<T extends operacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperacionGroupByOutputType[P]>
            : GetScalarType<T[P], OperacionGroupByOutputType[P]>
        }
      >
    >


  export type operacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_operacion?: boolean
    id_tipo_operacion?: boolean
    id_estado_operacion?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    inventario_movimiento?: boolean | operacion$inventario_movimientoArgs<ExtArgs>
    estado_operacion?: boolean | estado_operacionDefaultArgs<ExtArgs>
    tipo_operacion?: boolean | tipo_operacionDefaultArgs<ExtArgs>
    operacion_venta?: boolean | operacion$operacion_ventaArgs<ExtArgs>
    _count?: boolean | OperacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operacion"]>

  export type operacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_operacion?: boolean
    id_tipo_operacion?: boolean
    id_estado_operacion?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado_operacion?: boolean | estado_operacionDefaultArgs<ExtArgs>
    tipo_operacion?: boolean | tipo_operacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operacion"]>

  export type operacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_operacion?: boolean
    id_tipo_operacion?: boolean
    id_estado_operacion?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado_operacion?: boolean | estado_operacionDefaultArgs<ExtArgs>
    tipo_operacion?: boolean | tipo_operacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operacion"]>

  export type operacionSelectScalar = {
    id_operacion?: boolean
    id_tipo_operacion?: boolean
    id_estado_operacion?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
  }

  export type operacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_operacion" | "id_tipo_operacion" | "id_estado_operacion" | "fecha_creacion" | "fecha_actualizacion", ExtArgs["result"]["operacion"]>
  export type operacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventario_movimiento?: boolean | operacion$inventario_movimientoArgs<ExtArgs>
    estado_operacion?: boolean | estado_operacionDefaultArgs<ExtArgs>
    tipo_operacion?: boolean | tipo_operacionDefaultArgs<ExtArgs>
    operacion_venta?: boolean | operacion$operacion_ventaArgs<ExtArgs>
    _count?: boolean | OperacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type operacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado_operacion?: boolean | estado_operacionDefaultArgs<ExtArgs>
    tipo_operacion?: boolean | tipo_operacionDefaultArgs<ExtArgs>
  }
  export type operacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado_operacion?: boolean | estado_operacionDefaultArgs<ExtArgs>
    tipo_operacion?: boolean | tipo_operacionDefaultArgs<ExtArgs>
  }

  export type $operacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "operacion"
    objects: {
      inventario_movimiento: Prisma.$inventario_movimientoPayload<ExtArgs>[]
      estado_operacion: Prisma.$estado_operacionPayload<ExtArgs>
      tipo_operacion: Prisma.$tipo_operacionPayload<ExtArgs>
      operacion_venta: Prisma.$operacion_ventaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_operacion: number
      id_tipo_operacion: number
      id_estado_operacion: number
      fecha_creacion: Date
      fecha_actualizacion: Date
    }, ExtArgs["result"]["operacion"]>
    composites: {}
  }

  type operacionGetPayload<S extends boolean | null | undefined | operacionDefaultArgs> = $Result.GetResult<Prisma.$operacionPayload, S>

  type operacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<operacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperacionCountAggregateInputType | true
    }

  export interface operacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['operacion'], meta: { name: 'operacion' } }
    /**
     * Find zero or one Operacion that matches the filter.
     * @param {operacionFindUniqueArgs} args - Arguments to find a Operacion
     * @example
     * // Get one Operacion
     * const operacion = await prisma.operacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends operacionFindUniqueArgs>(args: SelectSubset<T, operacionFindUniqueArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {operacionFindUniqueOrThrowArgs} args - Arguments to find a Operacion
     * @example
     * // Get one Operacion
     * const operacion = await prisma.operacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends operacionFindUniqueOrThrowArgs>(args: SelectSubset<T, operacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacionFindFirstArgs} args - Arguments to find a Operacion
     * @example
     * // Get one Operacion
     * const operacion = await prisma.operacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends operacionFindFirstArgs>(args?: SelectSubset<T, operacionFindFirstArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacionFindFirstOrThrowArgs} args - Arguments to find a Operacion
     * @example
     * // Get one Operacion
     * const operacion = await prisma.operacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends operacionFindFirstOrThrowArgs>(args?: SelectSubset<T, operacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operacions
     * const operacions = await prisma.operacion.findMany()
     * 
     * // Get first 10 Operacions
     * const operacions = await prisma.operacion.findMany({ take: 10 })
     * 
     * // Only select the `id_operacion`
     * const operacionWithId_operacionOnly = await prisma.operacion.findMany({ select: { id_operacion: true } })
     * 
     */
    findMany<T extends operacionFindManyArgs>(args?: SelectSubset<T, operacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operacion.
     * @param {operacionCreateArgs} args - Arguments to create a Operacion.
     * @example
     * // Create one Operacion
     * const Operacion = await prisma.operacion.create({
     *   data: {
     *     // ... data to create a Operacion
     *   }
     * })
     * 
     */
    create<T extends operacionCreateArgs>(args: SelectSubset<T, operacionCreateArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operacions.
     * @param {operacionCreateManyArgs} args - Arguments to create many Operacions.
     * @example
     * // Create many Operacions
     * const operacion = await prisma.operacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends operacionCreateManyArgs>(args?: SelectSubset<T, operacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operacions and returns the data saved in the database.
     * @param {operacionCreateManyAndReturnArgs} args - Arguments to create many Operacions.
     * @example
     * // Create many Operacions
     * const operacion = await prisma.operacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operacions and only return the `id_operacion`
     * const operacionWithId_operacionOnly = await prisma.operacion.createManyAndReturn({
     *   select: { id_operacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends operacionCreateManyAndReturnArgs>(args?: SelectSubset<T, operacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Operacion.
     * @param {operacionDeleteArgs} args - Arguments to delete one Operacion.
     * @example
     * // Delete one Operacion
     * const Operacion = await prisma.operacion.delete({
     *   where: {
     *     // ... filter to delete one Operacion
     *   }
     * })
     * 
     */
    delete<T extends operacionDeleteArgs>(args: SelectSubset<T, operacionDeleteArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operacion.
     * @param {operacionUpdateArgs} args - Arguments to update one Operacion.
     * @example
     * // Update one Operacion
     * const operacion = await prisma.operacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends operacionUpdateArgs>(args: SelectSubset<T, operacionUpdateArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operacions.
     * @param {operacionDeleteManyArgs} args - Arguments to filter Operacions to delete.
     * @example
     * // Delete a few Operacions
     * const { count } = await prisma.operacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends operacionDeleteManyArgs>(args?: SelectSubset<T, operacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operacions
     * const operacion = await prisma.operacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends operacionUpdateManyArgs>(args: SelectSubset<T, operacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operacions and returns the data updated in the database.
     * @param {operacionUpdateManyAndReturnArgs} args - Arguments to update many Operacions.
     * @example
     * // Update many Operacions
     * const operacion = await prisma.operacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Operacions and only return the `id_operacion`
     * const operacionWithId_operacionOnly = await prisma.operacion.updateManyAndReturn({
     *   select: { id_operacion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends operacionUpdateManyAndReturnArgs>(args: SelectSubset<T, operacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Operacion.
     * @param {operacionUpsertArgs} args - Arguments to update or create a Operacion.
     * @example
     * // Update or create a Operacion
     * const operacion = await prisma.operacion.upsert({
     *   create: {
     *     // ... data to create a Operacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operacion we want to update
     *   }
     * })
     */
    upsert<T extends operacionUpsertArgs>(args: SelectSubset<T, operacionUpsertArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacionCountArgs} args - Arguments to filter Operacions to count.
     * @example
     * // Count the number of Operacions
     * const count = await prisma.operacion.count({
     *   where: {
     *     // ... the filter for the Operacions we want to count
     *   }
     * })
    **/
    count<T extends operacionCountArgs>(
      args?: Subset<T, operacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OperacionAggregateArgs>(args: Subset<T, OperacionAggregateArgs>): Prisma.PrismaPromise<GetOperacionAggregateType<T>>

    /**
     * Group by Operacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends operacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: operacionGroupByArgs['orderBy'] }
        : { orderBy?: operacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, operacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the operacion model
   */
  readonly fields: operacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for operacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__operacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventario_movimiento<T extends operacion$inventario_movimientoArgs<ExtArgs> = {}>(args?: Subset<T, operacion$inventario_movimientoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventario_movimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estado_operacion<T extends estado_operacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, estado_operacionDefaultArgs<ExtArgs>>): Prisma__estado_operacionClient<$Result.GetResult<Prisma.$estado_operacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipo_operacion<T extends tipo_operacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tipo_operacionDefaultArgs<ExtArgs>>): Prisma__tipo_operacionClient<$Result.GetResult<Prisma.$tipo_operacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operacion_venta<T extends operacion$operacion_ventaArgs<ExtArgs> = {}>(args?: Subset<T, operacion$operacion_ventaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operacion_ventaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the operacion model
   */
  interface operacionFieldRefs {
    readonly id_operacion: FieldRef<"operacion", 'Int'>
    readonly id_tipo_operacion: FieldRef<"operacion", 'Int'>
    readonly id_estado_operacion: FieldRef<"operacion", 'Int'>
    readonly fecha_creacion: FieldRef<"operacion", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"operacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * operacion findUnique
   */
  export type operacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * Filter, which operacion to fetch.
     */
    where: operacionWhereUniqueInput
  }

  /**
   * operacion findUniqueOrThrow
   */
  export type operacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * Filter, which operacion to fetch.
     */
    where: operacionWhereUniqueInput
  }

  /**
   * operacion findFirst
   */
  export type operacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * Filter, which operacion to fetch.
     */
    where?: operacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operacions to fetch.
     */
    orderBy?: operacionOrderByWithRelationInput | operacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operacions.
     */
    cursor?: operacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operacions.
     */
    distinct?: OperacionScalarFieldEnum | OperacionScalarFieldEnum[]
  }

  /**
   * operacion findFirstOrThrow
   */
  export type operacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * Filter, which operacion to fetch.
     */
    where?: operacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operacions to fetch.
     */
    orderBy?: operacionOrderByWithRelationInput | operacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operacions.
     */
    cursor?: operacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operacions.
     */
    distinct?: OperacionScalarFieldEnum | OperacionScalarFieldEnum[]
  }

  /**
   * operacion findMany
   */
  export type operacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * Filter, which operacions to fetch.
     */
    where?: operacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operacions to fetch.
     */
    orderBy?: operacionOrderByWithRelationInput | operacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing operacions.
     */
    cursor?: operacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operacions.
     */
    skip?: number
    distinct?: OperacionScalarFieldEnum | OperacionScalarFieldEnum[]
  }

  /**
   * operacion create
   */
  export type operacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * The data needed to create a operacion.
     */
    data: XOR<operacionCreateInput, operacionUncheckedCreateInput>
  }

  /**
   * operacion createMany
   */
  export type operacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many operacions.
     */
    data: operacionCreateManyInput | operacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * operacion createManyAndReturn
   */
  export type operacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * The data used to create many operacions.
     */
    data: operacionCreateManyInput | operacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * operacion update
   */
  export type operacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * The data needed to update a operacion.
     */
    data: XOR<operacionUpdateInput, operacionUncheckedUpdateInput>
    /**
     * Choose, which operacion to update.
     */
    where: operacionWhereUniqueInput
  }

  /**
   * operacion updateMany
   */
  export type operacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update operacions.
     */
    data: XOR<operacionUpdateManyMutationInput, operacionUncheckedUpdateManyInput>
    /**
     * Filter which operacions to update
     */
    where?: operacionWhereInput
    /**
     * Limit how many operacions to update.
     */
    limit?: number
  }

  /**
   * operacion updateManyAndReturn
   */
  export type operacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * The data used to update operacions.
     */
    data: XOR<operacionUpdateManyMutationInput, operacionUncheckedUpdateManyInput>
    /**
     * Filter which operacions to update
     */
    where?: operacionWhereInput
    /**
     * Limit how many operacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * operacion upsert
   */
  export type operacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * The filter to search for the operacion to update in case it exists.
     */
    where: operacionWhereUniqueInput
    /**
     * In case the operacion found by the `where` argument doesn't exist, create a new operacion with this data.
     */
    create: XOR<operacionCreateInput, operacionUncheckedCreateInput>
    /**
     * In case the operacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<operacionUpdateInput, operacionUncheckedUpdateInput>
  }

  /**
   * operacion delete
   */
  export type operacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * Filter which operacion to delete.
     */
    where: operacionWhereUniqueInput
  }

  /**
   * operacion deleteMany
   */
  export type operacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operacions to delete
     */
    where?: operacionWhereInput
    /**
     * Limit how many operacions to delete.
     */
    limit?: number
  }

  /**
   * operacion.inventario_movimiento
   */
  export type operacion$inventario_movimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_movimiento
     */
    select?: inventario_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_movimiento
     */
    omit?: inventario_movimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_movimientoInclude<ExtArgs> | null
    where?: inventario_movimientoWhereInput
    orderBy?: inventario_movimientoOrderByWithRelationInput | inventario_movimientoOrderByWithRelationInput[]
    cursor?: inventario_movimientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Inventario_movimientoScalarFieldEnum | Inventario_movimientoScalarFieldEnum[]
  }

  /**
   * operacion.operacion_venta
   */
  export type operacion$operacion_ventaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion_venta
     */
    select?: operacion_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion_venta
     */
    omit?: operacion_ventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacion_ventaInclude<ExtArgs> | null
    where?: operacion_ventaWhereInput
    orderBy?: operacion_ventaOrderByWithRelationInput | operacion_ventaOrderByWithRelationInput[]
    cursor?: operacion_ventaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Operacion_ventaScalarFieldEnum | Operacion_ventaScalarFieldEnum[]
  }

  /**
   * operacion without action
   */
  export type operacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
  }


  /**
   * Model operacion_venta
   */

  export type AggregateOperacion_venta = {
    _count: Operacion_ventaCountAggregateOutputType | null
    _avg: Operacion_ventaAvgAggregateOutputType | null
    _sum: Operacion_ventaSumAggregateOutputType | null
    _min: Operacion_ventaMinAggregateOutputType | null
    _max: Operacion_ventaMaxAggregateOutputType | null
  }

  export type Operacion_ventaAvgAggregateOutputType = {
    id_venta: number | null
    id_operacion: number | null
    id_cliente: number | null
    id_metodo_pago: number | null
    total: Decimal | null
  }

  export type Operacion_ventaSumAggregateOutputType = {
    id_venta: number | null
    id_operacion: number | null
    id_cliente: number | null
    id_metodo_pago: number | null
    total: Decimal | null
  }

  export type Operacion_ventaMinAggregateOutputType = {
    id_venta: number | null
    id_operacion: number | null
    id_cliente: number | null
    id_metodo_pago: number | null
    total: Decimal | null
  }

  export type Operacion_ventaMaxAggregateOutputType = {
    id_venta: number | null
    id_operacion: number | null
    id_cliente: number | null
    id_metodo_pago: number | null
    total: Decimal | null
  }

  export type Operacion_ventaCountAggregateOutputType = {
    id_venta: number
    id_operacion: number
    id_cliente: number
    id_metodo_pago: number
    total: number
    _all: number
  }


  export type Operacion_ventaAvgAggregateInputType = {
    id_venta?: true
    id_operacion?: true
    id_cliente?: true
    id_metodo_pago?: true
    total?: true
  }

  export type Operacion_ventaSumAggregateInputType = {
    id_venta?: true
    id_operacion?: true
    id_cliente?: true
    id_metodo_pago?: true
    total?: true
  }

  export type Operacion_ventaMinAggregateInputType = {
    id_venta?: true
    id_operacion?: true
    id_cliente?: true
    id_metodo_pago?: true
    total?: true
  }

  export type Operacion_ventaMaxAggregateInputType = {
    id_venta?: true
    id_operacion?: true
    id_cliente?: true
    id_metodo_pago?: true
    total?: true
  }

  export type Operacion_ventaCountAggregateInputType = {
    id_venta?: true
    id_operacion?: true
    id_cliente?: true
    id_metodo_pago?: true
    total?: true
    _all?: true
  }

  export type Operacion_ventaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operacion_venta to aggregate.
     */
    where?: operacion_ventaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operacion_ventas to fetch.
     */
    orderBy?: operacion_ventaOrderByWithRelationInput | operacion_ventaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: operacion_ventaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operacion_ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operacion_ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned operacion_ventas
    **/
    _count?: true | Operacion_ventaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Operacion_ventaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Operacion_ventaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Operacion_ventaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Operacion_ventaMaxAggregateInputType
  }

  export type GetOperacion_ventaAggregateType<T extends Operacion_ventaAggregateArgs> = {
        [P in keyof T & keyof AggregateOperacion_venta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperacion_venta[P]>
      : GetScalarType<T[P], AggregateOperacion_venta[P]>
  }




  export type operacion_ventaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operacion_ventaWhereInput
    orderBy?: operacion_ventaOrderByWithAggregationInput | operacion_ventaOrderByWithAggregationInput[]
    by: Operacion_ventaScalarFieldEnum[] | Operacion_ventaScalarFieldEnum
    having?: operacion_ventaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Operacion_ventaCountAggregateInputType | true
    _avg?: Operacion_ventaAvgAggregateInputType
    _sum?: Operacion_ventaSumAggregateInputType
    _min?: Operacion_ventaMinAggregateInputType
    _max?: Operacion_ventaMaxAggregateInputType
  }

  export type Operacion_ventaGroupByOutputType = {
    id_venta: number
    id_operacion: number
    id_cliente: number
    id_metodo_pago: number
    total: Decimal
    _count: Operacion_ventaCountAggregateOutputType | null
    _avg: Operacion_ventaAvgAggregateOutputType | null
    _sum: Operacion_ventaSumAggregateOutputType | null
    _min: Operacion_ventaMinAggregateOutputType | null
    _max: Operacion_ventaMaxAggregateOutputType | null
  }

  type GetOperacion_ventaGroupByPayload<T extends operacion_ventaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Operacion_ventaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Operacion_ventaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Operacion_ventaGroupByOutputType[P]>
            : GetScalarType<T[P], Operacion_ventaGroupByOutputType[P]>
        }
      >
    >


  export type operacion_ventaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_venta?: boolean
    id_operacion?: boolean
    id_cliente?: boolean
    id_metodo_pago?: boolean
    total?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    metodo_pago?: boolean | metodo_pagoDefaultArgs<ExtArgs>
    operacion?: boolean | operacionDefaultArgs<ExtArgs>
    pago?: boolean | operacion_venta$pagoArgs<ExtArgs>
    venta_detalle?: boolean | operacion_venta$venta_detalleArgs<ExtArgs>
    _count?: boolean | Operacion_ventaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operacion_venta"]>

  export type operacion_ventaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_venta?: boolean
    id_operacion?: boolean
    id_cliente?: boolean
    id_metodo_pago?: boolean
    total?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    metodo_pago?: boolean | metodo_pagoDefaultArgs<ExtArgs>
    operacion?: boolean | operacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operacion_venta"]>

  export type operacion_ventaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_venta?: boolean
    id_operacion?: boolean
    id_cliente?: boolean
    id_metodo_pago?: boolean
    total?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    metodo_pago?: boolean | metodo_pagoDefaultArgs<ExtArgs>
    operacion?: boolean | operacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operacion_venta"]>

  export type operacion_ventaSelectScalar = {
    id_venta?: boolean
    id_operacion?: boolean
    id_cliente?: boolean
    id_metodo_pago?: boolean
    total?: boolean
  }

  export type operacion_ventaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_venta" | "id_operacion" | "id_cliente" | "id_metodo_pago" | "total", ExtArgs["result"]["operacion_venta"]>
  export type operacion_ventaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    metodo_pago?: boolean | metodo_pagoDefaultArgs<ExtArgs>
    operacion?: boolean | operacionDefaultArgs<ExtArgs>
    pago?: boolean | operacion_venta$pagoArgs<ExtArgs>
    venta_detalle?: boolean | operacion_venta$venta_detalleArgs<ExtArgs>
    _count?: boolean | Operacion_ventaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type operacion_ventaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    metodo_pago?: boolean | metodo_pagoDefaultArgs<ExtArgs>
    operacion?: boolean | operacionDefaultArgs<ExtArgs>
  }
  export type operacion_ventaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    metodo_pago?: boolean | metodo_pagoDefaultArgs<ExtArgs>
    operacion?: boolean | operacionDefaultArgs<ExtArgs>
  }

  export type $operacion_ventaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "operacion_venta"
    objects: {
      cliente: Prisma.$clientePayload<ExtArgs>
      metodo_pago: Prisma.$metodo_pagoPayload<ExtArgs>
      operacion: Prisma.$operacionPayload<ExtArgs>
      pago: Prisma.$pagoPayload<ExtArgs>[]
      venta_detalle: Prisma.$venta_detallePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_venta: number
      id_operacion: number
      id_cliente: number
      id_metodo_pago: number
      total: Prisma.Decimal
    }, ExtArgs["result"]["operacion_venta"]>
    composites: {}
  }

  type operacion_ventaGetPayload<S extends boolean | null | undefined | operacion_ventaDefaultArgs> = $Result.GetResult<Prisma.$operacion_ventaPayload, S>

  type operacion_ventaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<operacion_ventaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Operacion_ventaCountAggregateInputType | true
    }

  export interface operacion_ventaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['operacion_venta'], meta: { name: 'operacion_venta' } }
    /**
     * Find zero or one Operacion_venta that matches the filter.
     * @param {operacion_ventaFindUniqueArgs} args - Arguments to find a Operacion_venta
     * @example
     * // Get one Operacion_venta
     * const operacion_venta = await prisma.operacion_venta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends operacion_ventaFindUniqueArgs>(args: SelectSubset<T, operacion_ventaFindUniqueArgs<ExtArgs>>): Prisma__operacion_ventaClient<$Result.GetResult<Prisma.$operacion_ventaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operacion_venta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {operacion_ventaFindUniqueOrThrowArgs} args - Arguments to find a Operacion_venta
     * @example
     * // Get one Operacion_venta
     * const operacion_venta = await prisma.operacion_venta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends operacion_ventaFindUniqueOrThrowArgs>(args: SelectSubset<T, operacion_ventaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__operacion_ventaClient<$Result.GetResult<Prisma.$operacion_ventaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operacion_venta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacion_ventaFindFirstArgs} args - Arguments to find a Operacion_venta
     * @example
     * // Get one Operacion_venta
     * const operacion_venta = await prisma.operacion_venta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends operacion_ventaFindFirstArgs>(args?: SelectSubset<T, operacion_ventaFindFirstArgs<ExtArgs>>): Prisma__operacion_ventaClient<$Result.GetResult<Prisma.$operacion_ventaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operacion_venta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacion_ventaFindFirstOrThrowArgs} args - Arguments to find a Operacion_venta
     * @example
     * // Get one Operacion_venta
     * const operacion_venta = await prisma.operacion_venta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends operacion_ventaFindFirstOrThrowArgs>(args?: SelectSubset<T, operacion_ventaFindFirstOrThrowArgs<ExtArgs>>): Prisma__operacion_ventaClient<$Result.GetResult<Prisma.$operacion_ventaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operacion_ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacion_ventaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operacion_ventas
     * const operacion_ventas = await prisma.operacion_venta.findMany()
     * 
     * // Get first 10 Operacion_ventas
     * const operacion_ventas = await prisma.operacion_venta.findMany({ take: 10 })
     * 
     * // Only select the `id_venta`
     * const operacion_ventaWithId_ventaOnly = await prisma.operacion_venta.findMany({ select: { id_venta: true } })
     * 
     */
    findMany<T extends operacion_ventaFindManyArgs>(args?: SelectSubset<T, operacion_ventaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operacion_ventaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operacion_venta.
     * @param {operacion_ventaCreateArgs} args - Arguments to create a Operacion_venta.
     * @example
     * // Create one Operacion_venta
     * const Operacion_venta = await prisma.operacion_venta.create({
     *   data: {
     *     // ... data to create a Operacion_venta
     *   }
     * })
     * 
     */
    create<T extends operacion_ventaCreateArgs>(args: SelectSubset<T, operacion_ventaCreateArgs<ExtArgs>>): Prisma__operacion_ventaClient<$Result.GetResult<Prisma.$operacion_ventaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operacion_ventas.
     * @param {operacion_ventaCreateManyArgs} args - Arguments to create many Operacion_ventas.
     * @example
     * // Create many Operacion_ventas
     * const operacion_venta = await prisma.operacion_venta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends operacion_ventaCreateManyArgs>(args?: SelectSubset<T, operacion_ventaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operacion_ventas and returns the data saved in the database.
     * @param {operacion_ventaCreateManyAndReturnArgs} args - Arguments to create many Operacion_ventas.
     * @example
     * // Create many Operacion_ventas
     * const operacion_venta = await prisma.operacion_venta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operacion_ventas and only return the `id_venta`
     * const operacion_ventaWithId_ventaOnly = await prisma.operacion_venta.createManyAndReturn({
     *   select: { id_venta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends operacion_ventaCreateManyAndReturnArgs>(args?: SelectSubset<T, operacion_ventaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operacion_ventaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Operacion_venta.
     * @param {operacion_ventaDeleteArgs} args - Arguments to delete one Operacion_venta.
     * @example
     * // Delete one Operacion_venta
     * const Operacion_venta = await prisma.operacion_venta.delete({
     *   where: {
     *     // ... filter to delete one Operacion_venta
     *   }
     * })
     * 
     */
    delete<T extends operacion_ventaDeleteArgs>(args: SelectSubset<T, operacion_ventaDeleteArgs<ExtArgs>>): Prisma__operacion_ventaClient<$Result.GetResult<Prisma.$operacion_ventaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operacion_venta.
     * @param {operacion_ventaUpdateArgs} args - Arguments to update one Operacion_venta.
     * @example
     * // Update one Operacion_venta
     * const operacion_venta = await prisma.operacion_venta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends operacion_ventaUpdateArgs>(args: SelectSubset<T, operacion_ventaUpdateArgs<ExtArgs>>): Prisma__operacion_ventaClient<$Result.GetResult<Prisma.$operacion_ventaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operacion_ventas.
     * @param {operacion_ventaDeleteManyArgs} args - Arguments to filter Operacion_ventas to delete.
     * @example
     * // Delete a few Operacion_ventas
     * const { count } = await prisma.operacion_venta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends operacion_ventaDeleteManyArgs>(args?: SelectSubset<T, operacion_ventaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operacion_ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacion_ventaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operacion_ventas
     * const operacion_venta = await prisma.operacion_venta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends operacion_ventaUpdateManyArgs>(args: SelectSubset<T, operacion_ventaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operacion_ventas and returns the data updated in the database.
     * @param {operacion_ventaUpdateManyAndReturnArgs} args - Arguments to update many Operacion_ventas.
     * @example
     * // Update many Operacion_ventas
     * const operacion_venta = await prisma.operacion_venta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Operacion_ventas and only return the `id_venta`
     * const operacion_ventaWithId_ventaOnly = await prisma.operacion_venta.updateManyAndReturn({
     *   select: { id_venta: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends operacion_ventaUpdateManyAndReturnArgs>(args: SelectSubset<T, operacion_ventaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operacion_ventaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Operacion_venta.
     * @param {operacion_ventaUpsertArgs} args - Arguments to update or create a Operacion_venta.
     * @example
     * // Update or create a Operacion_venta
     * const operacion_venta = await prisma.operacion_venta.upsert({
     *   create: {
     *     // ... data to create a Operacion_venta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operacion_venta we want to update
     *   }
     * })
     */
    upsert<T extends operacion_ventaUpsertArgs>(args: SelectSubset<T, operacion_ventaUpsertArgs<ExtArgs>>): Prisma__operacion_ventaClient<$Result.GetResult<Prisma.$operacion_ventaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operacion_ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacion_ventaCountArgs} args - Arguments to filter Operacion_ventas to count.
     * @example
     * // Count the number of Operacion_ventas
     * const count = await prisma.operacion_venta.count({
     *   where: {
     *     // ... the filter for the Operacion_ventas we want to count
     *   }
     * })
    **/
    count<T extends operacion_ventaCountArgs>(
      args?: Subset<T, operacion_ventaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Operacion_ventaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operacion_venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operacion_ventaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Operacion_ventaAggregateArgs>(args: Subset<T, Operacion_ventaAggregateArgs>): Prisma.PrismaPromise<GetOperacion_ventaAggregateType<T>>

    /**
     * Group by Operacion_venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacion_ventaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends operacion_ventaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: operacion_ventaGroupByArgs['orderBy'] }
        : { orderBy?: operacion_ventaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, operacion_ventaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperacion_ventaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the operacion_venta model
   */
  readonly fields: operacion_ventaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for operacion_venta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__operacion_ventaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends clienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clienteDefaultArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    metodo_pago<T extends metodo_pagoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, metodo_pagoDefaultArgs<ExtArgs>>): Prisma__metodo_pagoClient<$Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operacion<T extends operacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, operacionDefaultArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pago<T extends operacion_venta$pagoArgs<ExtArgs> = {}>(args?: Subset<T, operacion_venta$pagoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    venta_detalle<T extends operacion_venta$venta_detalleArgs<ExtArgs> = {}>(args?: Subset<T, operacion_venta$venta_detalleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$venta_detallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the operacion_venta model
   */
  interface operacion_ventaFieldRefs {
    readonly id_venta: FieldRef<"operacion_venta", 'Int'>
    readonly id_operacion: FieldRef<"operacion_venta", 'Int'>
    readonly id_cliente: FieldRef<"operacion_venta", 'Int'>
    readonly id_metodo_pago: FieldRef<"operacion_venta", 'Int'>
    readonly total: FieldRef<"operacion_venta", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * operacion_venta findUnique
   */
  export type operacion_ventaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion_venta
     */
    select?: operacion_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion_venta
     */
    omit?: operacion_ventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacion_ventaInclude<ExtArgs> | null
    /**
     * Filter, which operacion_venta to fetch.
     */
    where: operacion_ventaWhereUniqueInput
  }

  /**
   * operacion_venta findUniqueOrThrow
   */
  export type operacion_ventaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion_venta
     */
    select?: operacion_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion_venta
     */
    omit?: operacion_ventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacion_ventaInclude<ExtArgs> | null
    /**
     * Filter, which operacion_venta to fetch.
     */
    where: operacion_ventaWhereUniqueInput
  }

  /**
   * operacion_venta findFirst
   */
  export type operacion_ventaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion_venta
     */
    select?: operacion_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion_venta
     */
    omit?: operacion_ventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacion_ventaInclude<ExtArgs> | null
    /**
     * Filter, which operacion_venta to fetch.
     */
    where?: operacion_ventaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operacion_ventas to fetch.
     */
    orderBy?: operacion_ventaOrderByWithRelationInput | operacion_ventaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operacion_ventas.
     */
    cursor?: operacion_ventaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operacion_ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operacion_ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operacion_ventas.
     */
    distinct?: Operacion_ventaScalarFieldEnum | Operacion_ventaScalarFieldEnum[]
  }

  /**
   * operacion_venta findFirstOrThrow
   */
  export type operacion_ventaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion_venta
     */
    select?: operacion_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion_venta
     */
    omit?: operacion_ventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacion_ventaInclude<ExtArgs> | null
    /**
     * Filter, which operacion_venta to fetch.
     */
    where?: operacion_ventaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operacion_ventas to fetch.
     */
    orderBy?: operacion_ventaOrderByWithRelationInput | operacion_ventaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operacion_ventas.
     */
    cursor?: operacion_ventaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operacion_ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operacion_ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operacion_ventas.
     */
    distinct?: Operacion_ventaScalarFieldEnum | Operacion_ventaScalarFieldEnum[]
  }

  /**
   * operacion_venta findMany
   */
  export type operacion_ventaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion_venta
     */
    select?: operacion_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion_venta
     */
    omit?: operacion_ventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacion_ventaInclude<ExtArgs> | null
    /**
     * Filter, which operacion_ventas to fetch.
     */
    where?: operacion_ventaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operacion_ventas to fetch.
     */
    orderBy?: operacion_ventaOrderByWithRelationInput | operacion_ventaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing operacion_ventas.
     */
    cursor?: operacion_ventaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operacion_ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operacion_ventas.
     */
    skip?: number
    distinct?: Operacion_ventaScalarFieldEnum | Operacion_ventaScalarFieldEnum[]
  }

  /**
   * operacion_venta create
   */
  export type operacion_ventaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion_venta
     */
    select?: operacion_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion_venta
     */
    omit?: operacion_ventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacion_ventaInclude<ExtArgs> | null
    /**
     * The data needed to create a operacion_venta.
     */
    data: XOR<operacion_ventaCreateInput, operacion_ventaUncheckedCreateInput>
  }

  /**
   * operacion_venta createMany
   */
  export type operacion_ventaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many operacion_ventas.
     */
    data: operacion_ventaCreateManyInput | operacion_ventaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * operacion_venta createManyAndReturn
   */
  export type operacion_ventaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion_venta
     */
    select?: operacion_ventaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the operacion_venta
     */
    omit?: operacion_ventaOmit<ExtArgs> | null
    /**
     * The data used to create many operacion_ventas.
     */
    data: operacion_ventaCreateManyInput | operacion_ventaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacion_ventaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * operacion_venta update
   */
  export type operacion_ventaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion_venta
     */
    select?: operacion_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion_venta
     */
    omit?: operacion_ventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacion_ventaInclude<ExtArgs> | null
    /**
     * The data needed to update a operacion_venta.
     */
    data: XOR<operacion_ventaUpdateInput, operacion_ventaUncheckedUpdateInput>
    /**
     * Choose, which operacion_venta to update.
     */
    where: operacion_ventaWhereUniqueInput
  }

  /**
   * operacion_venta updateMany
   */
  export type operacion_ventaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update operacion_ventas.
     */
    data: XOR<operacion_ventaUpdateManyMutationInput, operacion_ventaUncheckedUpdateManyInput>
    /**
     * Filter which operacion_ventas to update
     */
    where?: operacion_ventaWhereInput
    /**
     * Limit how many operacion_ventas to update.
     */
    limit?: number
  }

  /**
   * operacion_venta updateManyAndReturn
   */
  export type operacion_ventaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion_venta
     */
    select?: operacion_ventaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the operacion_venta
     */
    omit?: operacion_ventaOmit<ExtArgs> | null
    /**
     * The data used to update operacion_ventas.
     */
    data: XOR<operacion_ventaUpdateManyMutationInput, operacion_ventaUncheckedUpdateManyInput>
    /**
     * Filter which operacion_ventas to update
     */
    where?: operacion_ventaWhereInput
    /**
     * Limit how many operacion_ventas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacion_ventaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * operacion_venta upsert
   */
  export type operacion_ventaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion_venta
     */
    select?: operacion_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion_venta
     */
    omit?: operacion_ventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacion_ventaInclude<ExtArgs> | null
    /**
     * The filter to search for the operacion_venta to update in case it exists.
     */
    where: operacion_ventaWhereUniqueInput
    /**
     * In case the operacion_venta found by the `where` argument doesn't exist, create a new operacion_venta with this data.
     */
    create: XOR<operacion_ventaCreateInput, operacion_ventaUncheckedCreateInput>
    /**
     * In case the operacion_venta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<operacion_ventaUpdateInput, operacion_ventaUncheckedUpdateInput>
  }

  /**
   * operacion_venta delete
   */
  export type operacion_ventaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion_venta
     */
    select?: operacion_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion_venta
     */
    omit?: operacion_ventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacion_ventaInclude<ExtArgs> | null
    /**
     * Filter which operacion_venta to delete.
     */
    where: operacion_ventaWhereUniqueInput
  }

  /**
   * operacion_venta deleteMany
   */
  export type operacion_ventaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operacion_ventas to delete
     */
    where?: operacion_ventaWhereInput
    /**
     * Limit how many operacion_ventas to delete.
     */
    limit?: number
  }

  /**
   * operacion_venta.pago
   */
  export type operacion_venta$pagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    where?: pagoWhereInput
    orderBy?: pagoOrderByWithRelationInput | pagoOrderByWithRelationInput[]
    cursor?: pagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * operacion_venta.venta_detalle
   */
  export type operacion_venta$venta_detalleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venta_detalle
     */
    select?: venta_detalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venta_detalle
     */
    omit?: venta_detalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venta_detalleInclude<ExtArgs> | null
    where?: venta_detalleWhereInput
    orderBy?: venta_detalleOrderByWithRelationInput | venta_detalleOrderByWithRelationInput[]
    cursor?: venta_detalleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Venta_detalleScalarFieldEnum | Venta_detalleScalarFieldEnum[]
  }

  /**
   * operacion_venta without action
   */
  export type operacion_ventaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion_venta
     */
    select?: operacion_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion_venta
     */
    omit?: operacion_ventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacion_ventaInclude<ExtArgs> | null
  }


  /**
   * Model pago
   */

  export type AggregatePago = {
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  export type PagoAvgAggregateOutputType = {
    id_pago: number | null
    id_venta: number | null
    id_metodo_pago: number | null
    monto_pagado: Decimal | null
  }

  export type PagoSumAggregateOutputType = {
    id_pago: number | null
    id_venta: number | null
    id_metodo_pago: number | null
    monto_pagado: Decimal | null
  }

  export type PagoMinAggregateOutputType = {
    id_pago: number | null
    id_venta: number | null
    id_metodo_pago: number | null
    monto_pagado: Decimal | null
    fecha_creacion: Date | null
  }

  export type PagoMaxAggregateOutputType = {
    id_pago: number | null
    id_venta: number | null
    id_metodo_pago: number | null
    monto_pagado: Decimal | null
    fecha_creacion: Date | null
  }

  export type PagoCountAggregateOutputType = {
    id_pago: number
    id_venta: number
    id_metodo_pago: number
    monto_pagado: number
    fecha_creacion: number
    _all: number
  }


  export type PagoAvgAggregateInputType = {
    id_pago?: true
    id_venta?: true
    id_metodo_pago?: true
    monto_pagado?: true
  }

  export type PagoSumAggregateInputType = {
    id_pago?: true
    id_venta?: true
    id_metodo_pago?: true
    monto_pagado?: true
  }

  export type PagoMinAggregateInputType = {
    id_pago?: true
    id_venta?: true
    id_metodo_pago?: true
    monto_pagado?: true
    fecha_creacion?: true
  }

  export type PagoMaxAggregateInputType = {
    id_pago?: true
    id_venta?: true
    id_metodo_pago?: true
    monto_pagado?: true
    fecha_creacion?: true
  }

  export type PagoCountAggregateInputType = {
    id_pago?: true
    id_venta?: true
    id_metodo_pago?: true
    monto_pagado?: true
    fecha_creacion?: true
    _all?: true
  }

  export type PagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pago to aggregate.
     */
    where?: pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagoOrderByWithRelationInput | pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pagos
    **/
    _count?: true | PagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagoMaxAggregateInputType
  }

  export type GetPagoAggregateType<T extends PagoAggregateArgs> = {
        [P in keyof T & keyof AggregatePago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePago[P]>
      : GetScalarType<T[P], AggregatePago[P]>
  }




  export type pagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagoWhereInput
    orderBy?: pagoOrderByWithAggregationInput | pagoOrderByWithAggregationInput[]
    by: PagoScalarFieldEnum[] | PagoScalarFieldEnum
    having?: pagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagoCountAggregateInputType | true
    _avg?: PagoAvgAggregateInputType
    _sum?: PagoSumAggregateInputType
    _min?: PagoMinAggregateInputType
    _max?: PagoMaxAggregateInputType
  }

  export type PagoGroupByOutputType = {
    id_pago: number
    id_venta: number
    id_metodo_pago: number
    monto_pagado: Decimal
    fecha_creacion: Date
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  type GetPagoGroupByPayload<T extends pagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagoGroupByOutputType[P]>
            : GetScalarType<T[P], PagoGroupByOutputType[P]>
        }
      >
    >


  export type pagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pago?: boolean
    id_venta?: boolean
    id_metodo_pago?: boolean
    monto_pagado?: boolean
    fecha_creacion?: boolean
    metodo_pago?: boolean | metodo_pagoDefaultArgs<ExtArgs>
    operacion_venta?: boolean | operacion_ventaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pago"]>

  export type pagoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pago?: boolean
    id_venta?: boolean
    id_metodo_pago?: boolean
    monto_pagado?: boolean
    fecha_creacion?: boolean
    metodo_pago?: boolean | metodo_pagoDefaultArgs<ExtArgs>
    operacion_venta?: boolean | operacion_ventaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pago"]>

  export type pagoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pago?: boolean
    id_venta?: boolean
    id_metodo_pago?: boolean
    monto_pagado?: boolean
    fecha_creacion?: boolean
    metodo_pago?: boolean | metodo_pagoDefaultArgs<ExtArgs>
    operacion_venta?: boolean | operacion_ventaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pago"]>

  export type pagoSelectScalar = {
    id_pago?: boolean
    id_venta?: boolean
    id_metodo_pago?: boolean
    monto_pagado?: boolean
    fecha_creacion?: boolean
  }

  export type pagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pago" | "id_venta" | "id_metodo_pago" | "monto_pagado" | "fecha_creacion", ExtArgs["result"]["pago"]>
  export type pagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metodo_pago?: boolean | metodo_pagoDefaultArgs<ExtArgs>
    operacion_venta?: boolean | operacion_ventaDefaultArgs<ExtArgs>
  }
  export type pagoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metodo_pago?: boolean | metodo_pagoDefaultArgs<ExtArgs>
    operacion_venta?: boolean | operacion_ventaDefaultArgs<ExtArgs>
  }
  export type pagoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metodo_pago?: boolean | metodo_pagoDefaultArgs<ExtArgs>
    operacion_venta?: boolean | operacion_ventaDefaultArgs<ExtArgs>
  }

  export type $pagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pago"
    objects: {
      metodo_pago: Prisma.$metodo_pagoPayload<ExtArgs>
      operacion_venta: Prisma.$operacion_ventaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pago: number
      id_venta: number
      id_metodo_pago: number
      monto_pagado: Prisma.Decimal
      fecha_creacion: Date
    }, ExtArgs["result"]["pago"]>
    composites: {}
  }

  type pagoGetPayload<S extends boolean | null | undefined | pagoDefaultArgs> = $Result.GetResult<Prisma.$pagoPayload, S>

  type pagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagoCountAggregateInputType | true
    }

  export interface pagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pago'], meta: { name: 'pago' } }
    /**
     * Find zero or one Pago that matches the filter.
     * @param {pagoFindUniqueArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pagoFindUniqueArgs>(args: SelectSubset<T, pagoFindUniqueArgs<ExtArgs>>): Prisma__pagoClient<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pagoFindUniqueOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pagoFindUniqueOrThrowArgs>(args: SelectSubset<T, pagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pagoClient<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoFindFirstArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pagoFindFirstArgs>(args?: SelectSubset<T, pagoFindFirstArgs<ExtArgs>>): Prisma__pagoClient<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoFindFirstOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pagoFindFirstOrThrowArgs>(args?: SelectSubset<T, pagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pagoClient<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pago.findMany()
     * 
     * // Get first 10 Pagos
     * const pagos = await prisma.pago.findMany({ take: 10 })
     * 
     * // Only select the `id_pago`
     * const pagoWithId_pagoOnly = await prisma.pago.findMany({ select: { id_pago: true } })
     * 
     */
    findMany<T extends pagoFindManyArgs>(args?: SelectSubset<T, pagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pago.
     * @param {pagoCreateArgs} args - Arguments to create a Pago.
     * @example
     * // Create one Pago
     * const Pago = await prisma.pago.create({
     *   data: {
     *     // ... data to create a Pago
     *   }
     * })
     * 
     */
    create<T extends pagoCreateArgs>(args: SelectSubset<T, pagoCreateArgs<ExtArgs>>): Prisma__pagoClient<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagos.
     * @param {pagoCreateManyArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pago = await prisma.pago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pagoCreateManyArgs>(args?: SelectSubset<T, pagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagos and returns the data saved in the database.
     * @param {pagoCreateManyAndReturnArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pago = await prisma.pago.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagos and only return the `id_pago`
     * const pagoWithId_pagoOnly = await prisma.pago.createManyAndReturn({
     *   select: { id_pago: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pagoCreateManyAndReturnArgs>(args?: SelectSubset<T, pagoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pago.
     * @param {pagoDeleteArgs} args - Arguments to delete one Pago.
     * @example
     * // Delete one Pago
     * const Pago = await prisma.pago.delete({
     *   where: {
     *     // ... filter to delete one Pago
     *   }
     * })
     * 
     */
    delete<T extends pagoDeleteArgs>(args: SelectSubset<T, pagoDeleteArgs<ExtArgs>>): Prisma__pagoClient<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pago.
     * @param {pagoUpdateArgs} args - Arguments to update one Pago.
     * @example
     * // Update one Pago
     * const pago = await prisma.pago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pagoUpdateArgs>(args: SelectSubset<T, pagoUpdateArgs<ExtArgs>>): Prisma__pagoClient<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagos.
     * @param {pagoDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pagoDeleteManyArgs>(args?: SelectSubset<T, pagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pago = await prisma.pago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pagoUpdateManyArgs>(args: SelectSubset<T, pagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos and returns the data updated in the database.
     * @param {pagoUpdateManyAndReturnArgs} args - Arguments to update many Pagos.
     * @example
     * // Update many Pagos
     * const pago = await prisma.pago.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagos and only return the `id_pago`
     * const pagoWithId_pagoOnly = await prisma.pago.updateManyAndReturn({
     *   select: { id_pago: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pagoUpdateManyAndReturnArgs>(args: SelectSubset<T, pagoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pago.
     * @param {pagoUpsertArgs} args - Arguments to update or create a Pago.
     * @example
     * // Update or create a Pago
     * const pago = await prisma.pago.upsert({
     *   create: {
     *     // ... data to create a Pago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pago we want to update
     *   }
     * })
     */
    upsert<T extends pagoUpsertArgs>(args: SelectSubset<T, pagoUpsertArgs<ExtArgs>>): Prisma__pagoClient<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pago.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends pagoCountArgs>(
      args?: Subset<T, pagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagoAggregateArgs>(args: Subset<T, PagoAggregateArgs>): Prisma.PrismaPromise<GetPagoAggregateType<T>>

    /**
     * Group by Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pagoGroupByArgs['orderBy'] }
        : { orderBy?: pagoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pago model
   */
  readonly fields: pagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    metodo_pago<T extends metodo_pagoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, metodo_pagoDefaultArgs<ExtArgs>>): Prisma__metodo_pagoClient<$Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operacion_venta<T extends operacion_ventaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, operacion_ventaDefaultArgs<ExtArgs>>): Prisma__operacion_ventaClient<$Result.GetResult<Prisma.$operacion_ventaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pago model
   */
  interface pagoFieldRefs {
    readonly id_pago: FieldRef<"pago", 'Int'>
    readonly id_venta: FieldRef<"pago", 'Int'>
    readonly id_metodo_pago: FieldRef<"pago", 'Int'>
    readonly monto_pagado: FieldRef<"pago", 'Decimal'>
    readonly fecha_creacion: FieldRef<"pago", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pago findUnique
   */
  export type pagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * Filter, which pago to fetch.
     */
    where: pagoWhereUniqueInput
  }

  /**
   * pago findUniqueOrThrow
   */
  export type pagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * Filter, which pago to fetch.
     */
    where: pagoWhereUniqueInput
  }

  /**
   * pago findFirst
   */
  export type pagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * Filter, which pago to fetch.
     */
    where?: pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagoOrderByWithRelationInput | pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagos.
     */
    cursor?: pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * pago findFirstOrThrow
   */
  export type pagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * Filter, which pago to fetch.
     */
    where?: pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagoOrderByWithRelationInput | pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagos.
     */
    cursor?: pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * pago findMany
   */
  export type pagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where?: pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagoOrderByWithRelationInput | pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pagos.
     */
    cursor?: pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * pago create
   */
  export type pagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * The data needed to create a pago.
     */
    data: XOR<pagoCreateInput, pagoUncheckedCreateInput>
  }

  /**
   * pago createMany
   */
  export type pagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pagos.
     */
    data: pagoCreateManyInput | pagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pago createManyAndReturn
   */
  export type pagoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * The data used to create many pagos.
     */
    data: pagoCreateManyInput | pagoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pago update
   */
  export type pagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * The data needed to update a pago.
     */
    data: XOR<pagoUpdateInput, pagoUncheckedUpdateInput>
    /**
     * Choose, which pago to update.
     */
    where: pagoWhereUniqueInput
  }

  /**
   * pago updateMany
   */
  export type pagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pagos.
     */
    data: XOR<pagoUpdateManyMutationInput, pagoUncheckedUpdateManyInput>
    /**
     * Filter which pagos to update
     */
    where?: pagoWhereInput
    /**
     * Limit how many pagos to update.
     */
    limit?: number
  }

  /**
   * pago updateManyAndReturn
   */
  export type pagoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * The data used to update pagos.
     */
    data: XOR<pagoUpdateManyMutationInput, pagoUncheckedUpdateManyInput>
    /**
     * Filter which pagos to update
     */
    where?: pagoWhereInput
    /**
     * Limit how many pagos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pago upsert
   */
  export type pagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * The filter to search for the pago to update in case it exists.
     */
    where: pagoWhereUniqueInput
    /**
     * In case the pago found by the `where` argument doesn't exist, create a new pago with this data.
     */
    create: XOR<pagoCreateInput, pagoUncheckedCreateInput>
    /**
     * In case the pago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pagoUpdateInput, pagoUncheckedUpdateInput>
  }

  /**
   * pago delete
   */
  export type pagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * Filter which pago to delete.
     */
    where: pagoWhereUniqueInput
  }

  /**
   * pago deleteMany
   */
  export type pagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagos to delete
     */
    where?: pagoWhereInput
    /**
     * Limit how many pagos to delete.
     */
    limit?: number
  }

  /**
   * pago without action
   */
  export type pagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
  }


  /**
   * Model producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id_producto: number | null
    id_categoria: number | null
    costo: Decimal | null
    precio_unitario: Decimal | null
  }

  export type ProductoSumAggregateOutputType = {
    id_producto: number | null
    id_categoria: number | null
    costo: Decimal | null
    precio_unitario: Decimal | null
  }

  export type ProductoMinAggregateOutputType = {
    id_producto: number | null
    id_categoria: number | null
    nombre: string | null
    costo: Decimal | null
    precio_unitario: Decimal | null
  }

  export type ProductoMaxAggregateOutputType = {
    id_producto: number | null
    id_categoria: number | null
    nombre: string | null
    costo: Decimal | null
    precio_unitario: Decimal | null
  }

  export type ProductoCountAggregateOutputType = {
    id_producto: number
    id_categoria: number
    nombre: number
    costo: number
    precio_unitario: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id_producto?: true
    id_categoria?: true
    costo?: true
    precio_unitario?: true
  }

  export type ProductoSumAggregateInputType = {
    id_producto?: true
    id_categoria?: true
    costo?: true
    precio_unitario?: true
  }

  export type ProductoMinAggregateInputType = {
    id_producto?: true
    id_categoria?: true
    nombre?: true
    costo?: true
    precio_unitario?: true
  }

  export type ProductoMaxAggregateInputType = {
    id_producto?: true
    id_categoria?: true
    nombre?: true
    costo?: true
    precio_unitario?: true
  }

  export type ProductoCountAggregateInputType = {
    id_producto?: true
    id_categoria?: true
    nombre?: true
    costo?: true
    precio_unitario?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which producto to aggregate.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productoOrderByWithRelationInput | productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type productoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productoWhereInput
    orderBy?: productoOrderByWithAggregationInput | productoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: productoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id_producto: number
    id_categoria: number
    nombre: string
    costo: Decimal
    precio_unitario: Decimal
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends productoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type productoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_producto?: boolean
    id_categoria?: boolean
    nombre?: boolean
    costo?: boolean
    precio_unitario?: boolean
    categoria_producto?: boolean | categoria_productoDefaultArgs<ExtArgs>
    producto_variante?: boolean | producto$producto_varianteArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type productoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_producto?: boolean
    id_categoria?: boolean
    nombre?: boolean
    costo?: boolean
    precio_unitario?: boolean
    categoria_producto?: boolean | categoria_productoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type productoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_producto?: boolean
    id_categoria?: boolean
    nombre?: boolean
    costo?: boolean
    precio_unitario?: boolean
    categoria_producto?: boolean | categoria_productoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type productoSelectScalar = {
    id_producto?: boolean
    id_categoria?: boolean
    nombre?: boolean
    costo?: boolean
    precio_unitario?: boolean
  }

  export type productoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_producto" | "id_categoria" | "nombre" | "costo" | "precio_unitario", ExtArgs["result"]["producto"]>
  export type productoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria_producto?: boolean | categoria_productoDefaultArgs<ExtArgs>
    producto_variante?: boolean | producto$producto_varianteArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria_producto?: boolean | categoria_productoDefaultArgs<ExtArgs>
  }
  export type productoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria_producto?: boolean | categoria_productoDefaultArgs<ExtArgs>
  }

  export type $productoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "producto"
    objects: {
      categoria_producto: Prisma.$categoria_productoPayload<ExtArgs>
      producto_variante: Prisma.$producto_variantePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_producto: number
      id_categoria: number
      nombre: string
      costo: Prisma.Decimal
      precio_unitario: Prisma.Decimal
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type productoGetPayload<S extends boolean | null | undefined | productoDefaultArgs> = $Result.GetResult<Prisma.$productoPayload, S>

  type productoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface productoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['producto'], meta: { name: 'producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {productoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productoFindUniqueArgs>(args: SelectSubset<T, productoFindUniqueArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productoFindUniqueOrThrowArgs>(args: SelectSubset<T, productoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productoFindFirstArgs>(args?: SelectSubset<T, productoFindFirstArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productoFindFirstOrThrowArgs>(args?: SelectSubset<T, productoFindFirstOrThrowArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id_producto`
     * const productoWithId_productoOnly = await prisma.producto.findMany({ select: { id_producto: true } })
     * 
     */
    findMany<T extends productoFindManyArgs>(args?: SelectSubset<T, productoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {productoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends productoCreateArgs>(args: SelectSubset<T, productoCreateArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {productoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productoCreateManyArgs>(args?: SelectSubset<T, productoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {productoCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id_producto`
     * const productoWithId_productoOnly = await prisma.producto.createManyAndReturn({
     *   select: { id_producto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productoCreateManyAndReturnArgs>(args?: SelectSubset<T, productoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Producto.
     * @param {productoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends productoDeleteArgs>(args: SelectSubset<T, productoDeleteArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {productoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productoUpdateArgs>(args: SelectSubset<T, productoUpdateArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {productoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productoDeleteManyArgs>(args?: SelectSubset<T, productoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productoUpdateManyArgs>(args: SelectSubset<T, productoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {productoUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id_producto`
     * const productoWithId_productoOnly = await prisma.producto.updateManyAndReturn({
     *   select: { id_producto: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productoUpdateManyAndReturnArgs>(args: SelectSubset<T, productoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Producto.
     * @param {productoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends productoUpsertArgs>(args: SelectSubset<T, productoUpsertArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends productoCountArgs>(
      args?: Subset<T, productoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productoGroupByArgs['orderBy'] }
        : { orderBy?: productoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the producto model
   */
  readonly fields: productoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria_producto<T extends categoria_productoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoria_productoDefaultArgs<ExtArgs>>): Prisma__categoria_productoClient<$Result.GetResult<Prisma.$categoria_productoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto_variante<T extends producto$producto_varianteArgs<ExtArgs> = {}>(args?: Subset<T, producto$producto_varianteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$producto_variantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the producto model
   */
  interface productoFieldRefs {
    readonly id_producto: FieldRef<"producto", 'Int'>
    readonly id_categoria: FieldRef<"producto", 'Int'>
    readonly nombre: FieldRef<"producto", 'String'>
    readonly costo: FieldRef<"producto", 'Decimal'>
    readonly precio_unitario: FieldRef<"producto", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * producto findUnique
   */
  export type productoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which producto to fetch.
     */
    where: productoWhereUniqueInput
  }

  /**
   * producto findUniqueOrThrow
   */
  export type productoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which producto to fetch.
     */
    where: productoWhereUniqueInput
  }

  /**
   * producto findFirst
   */
  export type productoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which producto to fetch.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productoOrderByWithRelationInput | productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * producto findFirstOrThrow
   */
  export type productoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which producto to fetch.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productoOrderByWithRelationInput | productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * producto findMany
   */
  export type productoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productoOrderByWithRelationInput | productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productos.
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * producto create
   */
  export type productoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * The data needed to create a producto.
     */
    data: XOR<productoCreateInput, productoUncheckedCreateInput>
  }

  /**
   * producto createMany
   */
  export type productoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productos.
     */
    data: productoCreateManyInput | productoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * producto createManyAndReturn
   */
  export type productoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * The data used to create many productos.
     */
    data: productoCreateManyInput | productoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * producto update
   */
  export type productoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * The data needed to update a producto.
     */
    data: XOR<productoUpdateInput, productoUncheckedUpdateInput>
    /**
     * Choose, which producto to update.
     */
    where: productoWhereUniqueInput
  }

  /**
   * producto updateMany
   */
  export type productoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productos.
     */
    data: XOR<productoUpdateManyMutationInput, productoUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productoWhereInput
    /**
     * Limit how many productos to update.
     */
    limit?: number
  }

  /**
   * producto updateManyAndReturn
   */
  export type productoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * The data used to update productos.
     */
    data: XOR<productoUpdateManyMutationInput, productoUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productoWhereInput
    /**
     * Limit how many productos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * producto upsert
   */
  export type productoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * The filter to search for the producto to update in case it exists.
     */
    where: productoWhereUniqueInput
    /**
     * In case the producto found by the `where` argument doesn't exist, create a new producto with this data.
     */
    create: XOR<productoCreateInput, productoUncheckedCreateInput>
    /**
     * In case the producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productoUpdateInput, productoUncheckedUpdateInput>
  }

  /**
   * producto delete
   */
  export type productoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter which producto to delete.
     */
    where: productoWhereUniqueInput
  }

  /**
   * producto deleteMany
   */
  export type productoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to delete
     */
    where?: productoWhereInput
    /**
     * Limit how many productos to delete.
     */
    limit?: number
  }

  /**
   * producto.producto_variante
   */
  export type producto$producto_varianteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto_variante
     */
    select?: producto_varianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto_variante
     */
    omit?: producto_varianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: producto_varianteInclude<ExtArgs> | null
    where?: producto_varianteWhereInput
    orderBy?: producto_varianteOrderByWithRelationInput | producto_varianteOrderByWithRelationInput[]
    cursor?: producto_varianteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Producto_varianteScalarFieldEnum | Producto_varianteScalarFieldEnum[]
  }

  /**
   * producto without action
   */
  export type productoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
  }


  /**
   * Model producto_variante
   */

  export type AggregateProducto_variante = {
    _count: Producto_varianteCountAggregateOutputType | null
    _avg: Producto_varianteAvgAggregateOutputType | null
    _sum: Producto_varianteSumAggregateOutputType | null
    _min: Producto_varianteMinAggregateOutputType | null
    _max: Producto_varianteMaxAggregateOutputType | null
  }

  export type Producto_varianteAvgAggregateOutputType = {
    id_producto_variante: number | null
    id_producto: number | null
    stock: number | null
  }

  export type Producto_varianteSumAggregateOutputType = {
    id_producto_variante: number | null
    id_producto: number | null
    stock: number | null
  }

  export type Producto_varianteMinAggregateOutputType = {
    id_producto_variante: number | null
    id_producto: number | null
    talle: string | null
    color: string | null
    stock: number | null
  }

  export type Producto_varianteMaxAggregateOutputType = {
    id_producto_variante: number | null
    id_producto: number | null
    talle: string | null
    color: string | null
    stock: number | null
  }

  export type Producto_varianteCountAggregateOutputType = {
    id_producto_variante: number
    id_producto: number
    talle: number
    color: number
    stock: number
    _all: number
  }


  export type Producto_varianteAvgAggregateInputType = {
    id_producto_variante?: true
    id_producto?: true
    stock?: true
  }

  export type Producto_varianteSumAggregateInputType = {
    id_producto_variante?: true
    id_producto?: true
    stock?: true
  }

  export type Producto_varianteMinAggregateInputType = {
    id_producto_variante?: true
    id_producto?: true
    talle?: true
    color?: true
    stock?: true
  }

  export type Producto_varianteMaxAggregateInputType = {
    id_producto_variante?: true
    id_producto?: true
    talle?: true
    color?: true
    stock?: true
  }

  export type Producto_varianteCountAggregateInputType = {
    id_producto_variante?: true
    id_producto?: true
    talle?: true
    color?: true
    stock?: true
    _all?: true
  }

  export type Producto_varianteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which producto_variante to aggregate.
     */
    where?: producto_varianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of producto_variantes to fetch.
     */
    orderBy?: producto_varianteOrderByWithRelationInput | producto_varianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: producto_varianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` producto_variantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` producto_variantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned producto_variantes
    **/
    _count?: true | Producto_varianteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Producto_varianteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Producto_varianteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Producto_varianteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Producto_varianteMaxAggregateInputType
  }

  export type GetProducto_varianteAggregateType<T extends Producto_varianteAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto_variante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto_variante[P]>
      : GetScalarType<T[P], AggregateProducto_variante[P]>
  }




  export type producto_varianteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: producto_varianteWhereInput
    orderBy?: producto_varianteOrderByWithAggregationInput | producto_varianteOrderByWithAggregationInput[]
    by: Producto_varianteScalarFieldEnum[] | Producto_varianteScalarFieldEnum
    having?: producto_varianteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Producto_varianteCountAggregateInputType | true
    _avg?: Producto_varianteAvgAggregateInputType
    _sum?: Producto_varianteSumAggregateInputType
    _min?: Producto_varianteMinAggregateInputType
    _max?: Producto_varianteMaxAggregateInputType
  }

  export type Producto_varianteGroupByOutputType = {
    id_producto_variante: number
    id_producto: number
    talle: string
    color: string
    stock: number
    _count: Producto_varianteCountAggregateOutputType | null
    _avg: Producto_varianteAvgAggregateOutputType | null
    _sum: Producto_varianteSumAggregateOutputType | null
    _min: Producto_varianteMinAggregateOutputType | null
    _max: Producto_varianteMaxAggregateOutputType | null
  }

  type GetProducto_varianteGroupByPayload<T extends producto_varianteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Producto_varianteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Producto_varianteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Producto_varianteGroupByOutputType[P]>
            : GetScalarType<T[P], Producto_varianteGroupByOutputType[P]>
        }
      >
    >


  export type producto_varianteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_producto_variante?: boolean
    id_producto?: boolean
    talle?: boolean
    color?: boolean
    stock?: boolean
    inventario_movimiento?: boolean | producto_variante$inventario_movimientoArgs<ExtArgs>
    producto?: boolean | productoDefaultArgs<ExtArgs>
    venta_detalle?: boolean | producto_variante$venta_detalleArgs<ExtArgs>
    _count?: boolean | Producto_varianteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto_variante"]>

  export type producto_varianteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_producto_variante?: boolean
    id_producto?: boolean
    talle?: boolean
    color?: boolean
    stock?: boolean
    producto?: boolean | productoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto_variante"]>

  export type producto_varianteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_producto_variante?: boolean
    id_producto?: boolean
    talle?: boolean
    color?: boolean
    stock?: boolean
    producto?: boolean | productoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto_variante"]>

  export type producto_varianteSelectScalar = {
    id_producto_variante?: boolean
    id_producto?: boolean
    talle?: boolean
    color?: boolean
    stock?: boolean
  }

  export type producto_varianteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_producto_variante" | "id_producto" | "talle" | "color" | "stock", ExtArgs["result"]["producto_variante"]>
  export type producto_varianteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventario_movimiento?: boolean | producto_variante$inventario_movimientoArgs<ExtArgs>
    producto?: boolean | productoDefaultArgs<ExtArgs>
    venta_detalle?: boolean | producto_variante$venta_detalleArgs<ExtArgs>
    _count?: boolean | Producto_varianteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type producto_varianteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | productoDefaultArgs<ExtArgs>
  }
  export type producto_varianteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | productoDefaultArgs<ExtArgs>
  }

  export type $producto_variantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "producto_variante"
    objects: {
      inventario_movimiento: Prisma.$inventario_movimientoPayload<ExtArgs>[]
      producto: Prisma.$productoPayload<ExtArgs>
      venta_detalle: Prisma.$venta_detallePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_producto_variante: number
      id_producto: number
      talle: string
      color: string
      stock: number
    }, ExtArgs["result"]["producto_variante"]>
    composites: {}
  }

  type producto_varianteGetPayload<S extends boolean | null | undefined | producto_varianteDefaultArgs> = $Result.GetResult<Prisma.$producto_variantePayload, S>

  type producto_varianteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<producto_varianteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Producto_varianteCountAggregateInputType | true
    }

  export interface producto_varianteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['producto_variante'], meta: { name: 'producto_variante' } }
    /**
     * Find zero or one Producto_variante that matches the filter.
     * @param {producto_varianteFindUniqueArgs} args - Arguments to find a Producto_variante
     * @example
     * // Get one Producto_variante
     * const producto_variante = await prisma.producto_variante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends producto_varianteFindUniqueArgs>(args: SelectSubset<T, producto_varianteFindUniqueArgs<ExtArgs>>): Prisma__producto_varianteClient<$Result.GetResult<Prisma.$producto_variantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto_variante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {producto_varianteFindUniqueOrThrowArgs} args - Arguments to find a Producto_variante
     * @example
     * // Get one Producto_variante
     * const producto_variante = await prisma.producto_variante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends producto_varianteFindUniqueOrThrowArgs>(args: SelectSubset<T, producto_varianteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__producto_varianteClient<$Result.GetResult<Prisma.$producto_variantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto_variante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {producto_varianteFindFirstArgs} args - Arguments to find a Producto_variante
     * @example
     * // Get one Producto_variante
     * const producto_variante = await prisma.producto_variante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends producto_varianteFindFirstArgs>(args?: SelectSubset<T, producto_varianteFindFirstArgs<ExtArgs>>): Prisma__producto_varianteClient<$Result.GetResult<Prisma.$producto_variantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto_variante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {producto_varianteFindFirstOrThrowArgs} args - Arguments to find a Producto_variante
     * @example
     * // Get one Producto_variante
     * const producto_variante = await prisma.producto_variante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends producto_varianteFindFirstOrThrowArgs>(args?: SelectSubset<T, producto_varianteFindFirstOrThrowArgs<ExtArgs>>): Prisma__producto_varianteClient<$Result.GetResult<Prisma.$producto_variantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Producto_variantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {producto_varianteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Producto_variantes
     * const producto_variantes = await prisma.producto_variante.findMany()
     * 
     * // Get first 10 Producto_variantes
     * const producto_variantes = await prisma.producto_variante.findMany({ take: 10 })
     * 
     * // Only select the `id_producto_variante`
     * const producto_varianteWithId_producto_varianteOnly = await prisma.producto_variante.findMany({ select: { id_producto_variante: true } })
     * 
     */
    findMany<T extends producto_varianteFindManyArgs>(args?: SelectSubset<T, producto_varianteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$producto_variantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto_variante.
     * @param {producto_varianteCreateArgs} args - Arguments to create a Producto_variante.
     * @example
     * // Create one Producto_variante
     * const Producto_variante = await prisma.producto_variante.create({
     *   data: {
     *     // ... data to create a Producto_variante
     *   }
     * })
     * 
     */
    create<T extends producto_varianteCreateArgs>(args: SelectSubset<T, producto_varianteCreateArgs<ExtArgs>>): Prisma__producto_varianteClient<$Result.GetResult<Prisma.$producto_variantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Producto_variantes.
     * @param {producto_varianteCreateManyArgs} args - Arguments to create many Producto_variantes.
     * @example
     * // Create many Producto_variantes
     * const producto_variante = await prisma.producto_variante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends producto_varianteCreateManyArgs>(args?: SelectSubset<T, producto_varianteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Producto_variantes and returns the data saved in the database.
     * @param {producto_varianteCreateManyAndReturnArgs} args - Arguments to create many Producto_variantes.
     * @example
     * // Create many Producto_variantes
     * const producto_variante = await prisma.producto_variante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Producto_variantes and only return the `id_producto_variante`
     * const producto_varianteWithId_producto_varianteOnly = await prisma.producto_variante.createManyAndReturn({
     *   select: { id_producto_variante: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends producto_varianteCreateManyAndReturnArgs>(args?: SelectSubset<T, producto_varianteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$producto_variantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Producto_variante.
     * @param {producto_varianteDeleteArgs} args - Arguments to delete one Producto_variante.
     * @example
     * // Delete one Producto_variante
     * const Producto_variante = await prisma.producto_variante.delete({
     *   where: {
     *     // ... filter to delete one Producto_variante
     *   }
     * })
     * 
     */
    delete<T extends producto_varianteDeleteArgs>(args: SelectSubset<T, producto_varianteDeleteArgs<ExtArgs>>): Prisma__producto_varianteClient<$Result.GetResult<Prisma.$producto_variantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto_variante.
     * @param {producto_varianteUpdateArgs} args - Arguments to update one Producto_variante.
     * @example
     * // Update one Producto_variante
     * const producto_variante = await prisma.producto_variante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends producto_varianteUpdateArgs>(args: SelectSubset<T, producto_varianteUpdateArgs<ExtArgs>>): Prisma__producto_varianteClient<$Result.GetResult<Prisma.$producto_variantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Producto_variantes.
     * @param {producto_varianteDeleteManyArgs} args - Arguments to filter Producto_variantes to delete.
     * @example
     * // Delete a few Producto_variantes
     * const { count } = await prisma.producto_variante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends producto_varianteDeleteManyArgs>(args?: SelectSubset<T, producto_varianteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Producto_variantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {producto_varianteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Producto_variantes
     * const producto_variante = await prisma.producto_variante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends producto_varianteUpdateManyArgs>(args: SelectSubset<T, producto_varianteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Producto_variantes and returns the data updated in the database.
     * @param {producto_varianteUpdateManyAndReturnArgs} args - Arguments to update many Producto_variantes.
     * @example
     * // Update many Producto_variantes
     * const producto_variante = await prisma.producto_variante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Producto_variantes and only return the `id_producto_variante`
     * const producto_varianteWithId_producto_varianteOnly = await prisma.producto_variante.updateManyAndReturn({
     *   select: { id_producto_variante: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends producto_varianteUpdateManyAndReturnArgs>(args: SelectSubset<T, producto_varianteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$producto_variantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Producto_variante.
     * @param {producto_varianteUpsertArgs} args - Arguments to update or create a Producto_variante.
     * @example
     * // Update or create a Producto_variante
     * const producto_variante = await prisma.producto_variante.upsert({
     *   create: {
     *     // ... data to create a Producto_variante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto_variante we want to update
     *   }
     * })
     */
    upsert<T extends producto_varianteUpsertArgs>(args: SelectSubset<T, producto_varianteUpsertArgs<ExtArgs>>): Prisma__producto_varianteClient<$Result.GetResult<Prisma.$producto_variantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Producto_variantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {producto_varianteCountArgs} args - Arguments to filter Producto_variantes to count.
     * @example
     * // Count the number of Producto_variantes
     * const count = await prisma.producto_variante.count({
     *   where: {
     *     // ... the filter for the Producto_variantes we want to count
     *   }
     * })
    **/
    count<T extends producto_varianteCountArgs>(
      args?: Subset<T, producto_varianteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Producto_varianteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto_variante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Producto_varianteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Producto_varianteAggregateArgs>(args: Subset<T, Producto_varianteAggregateArgs>): Prisma.PrismaPromise<GetProducto_varianteAggregateType<T>>

    /**
     * Group by Producto_variante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {producto_varianteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends producto_varianteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: producto_varianteGroupByArgs['orderBy'] }
        : { orderBy?: producto_varianteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, producto_varianteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProducto_varianteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the producto_variante model
   */
  readonly fields: producto_varianteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for producto_variante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__producto_varianteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventario_movimiento<T extends producto_variante$inventario_movimientoArgs<ExtArgs> = {}>(args?: Subset<T, producto_variante$inventario_movimientoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventario_movimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    producto<T extends productoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productoDefaultArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    venta_detalle<T extends producto_variante$venta_detalleArgs<ExtArgs> = {}>(args?: Subset<T, producto_variante$venta_detalleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$venta_detallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the producto_variante model
   */
  interface producto_varianteFieldRefs {
    readonly id_producto_variante: FieldRef<"producto_variante", 'Int'>
    readonly id_producto: FieldRef<"producto_variante", 'Int'>
    readonly talle: FieldRef<"producto_variante", 'String'>
    readonly color: FieldRef<"producto_variante", 'String'>
    readonly stock: FieldRef<"producto_variante", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * producto_variante findUnique
   */
  export type producto_varianteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto_variante
     */
    select?: producto_varianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto_variante
     */
    omit?: producto_varianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: producto_varianteInclude<ExtArgs> | null
    /**
     * Filter, which producto_variante to fetch.
     */
    where: producto_varianteWhereUniqueInput
  }

  /**
   * producto_variante findUniqueOrThrow
   */
  export type producto_varianteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto_variante
     */
    select?: producto_varianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto_variante
     */
    omit?: producto_varianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: producto_varianteInclude<ExtArgs> | null
    /**
     * Filter, which producto_variante to fetch.
     */
    where: producto_varianteWhereUniqueInput
  }

  /**
   * producto_variante findFirst
   */
  export type producto_varianteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto_variante
     */
    select?: producto_varianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto_variante
     */
    omit?: producto_varianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: producto_varianteInclude<ExtArgs> | null
    /**
     * Filter, which producto_variante to fetch.
     */
    where?: producto_varianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of producto_variantes to fetch.
     */
    orderBy?: producto_varianteOrderByWithRelationInput | producto_varianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for producto_variantes.
     */
    cursor?: producto_varianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` producto_variantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` producto_variantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of producto_variantes.
     */
    distinct?: Producto_varianteScalarFieldEnum | Producto_varianteScalarFieldEnum[]
  }

  /**
   * producto_variante findFirstOrThrow
   */
  export type producto_varianteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto_variante
     */
    select?: producto_varianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto_variante
     */
    omit?: producto_varianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: producto_varianteInclude<ExtArgs> | null
    /**
     * Filter, which producto_variante to fetch.
     */
    where?: producto_varianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of producto_variantes to fetch.
     */
    orderBy?: producto_varianteOrderByWithRelationInput | producto_varianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for producto_variantes.
     */
    cursor?: producto_varianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` producto_variantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` producto_variantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of producto_variantes.
     */
    distinct?: Producto_varianteScalarFieldEnum | Producto_varianteScalarFieldEnum[]
  }

  /**
   * producto_variante findMany
   */
  export type producto_varianteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto_variante
     */
    select?: producto_varianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto_variante
     */
    omit?: producto_varianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: producto_varianteInclude<ExtArgs> | null
    /**
     * Filter, which producto_variantes to fetch.
     */
    where?: producto_varianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of producto_variantes to fetch.
     */
    orderBy?: producto_varianteOrderByWithRelationInput | producto_varianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing producto_variantes.
     */
    cursor?: producto_varianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` producto_variantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` producto_variantes.
     */
    skip?: number
    distinct?: Producto_varianteScalarFieldEnum | Producto_varianteScalarFieldEnum[]
  }

  /**
   * producto_variante create
   */
  export type producto_varianteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto_variante
     */
    select?: producto_varianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto_variante
     */
    omit?: producto_varianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: producto_varianteInclude<ExtArgs> | null
    /**
     * The data needed to create a producto_variante.
     */
    data: XOR<producto_varianteCreateInput, producto_varianteUncheckedCreateInput>
  }

  /**
   * producto_variante createMany
   */
  export type producto_varianteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many producto_variantes.
     */
    data: producto_varianteCreateManyInput | producto_varianteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * producto_variante createManyAndReturn
   */
  export type producto_varianteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto_variante
     */
    select?: producto_varianteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the producto_variante
     */
    omit?: producto_varianteOmit<ExtArgs> | null
    /**
     * The data used to create many producto_variantes.
     */
    data: producto_varianteCreateManyInput | producto_varianteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: producto_varianteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * producto_variante update
   */
  export type producto_varianteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto_variante
     */
    select?: producto_varianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto_variante
     */
    omit?: producto_varianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: producto_varianteInclude<ExtArgs> | null
    /**
     * The data needed to update a producto_variante.
     */
    data: XOR<producto_varianteUpdateInput, producto_varianteUncheckedUpdateInput>
    /**
     * Choose, which producto_variante to update.
     */
    where: producto_varianteWhereUniqueInput
  }

  /**
   * producto_variante updateMany
   */
  export type producto_varianteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update producto_variantes.
     */
    data: XOR<producto_varianteUpdateManyMutationInput, producto_varianteUncheckedUpdateManyInput>
    /**
     * Filter which producto_variantes to update
     */
    where?: producto_varianteWhereInput
    /**
     * Limit how many producto_variantes to update.
     */
    limit?: number
  }

  /**
   * producto_variante updateManyAndReturn
   */
  export type producto_varianteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto_variante
     */
    select?: producto_varianteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the producto_variante
     */
    omit?: producto_varianteOmit<ExtArgs> | null
    /**
     * The data used to update producto_variantes.
     */
    data: XOR<producto_varianteUpdateManyMutationInput, producto_varianteUncheckedUpdateManyInput>
    /**
     * Filter which producto_variantes to update
     */
    where?: producto_varianteWhereInput
    /**
     * Limit how many producto_variantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: producto_varianteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * producto_variante upsert
   */
  export type producto_varianteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto_variante
     */
    select?: producto_varianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto_variante
     */
    omit?: producto_varianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: producto_varianteInclude<ExtArgs> | null
    /**
     * The filter to search for the producto_variante to update in case it exists.
     */
    where: producto_varianteWhereUniqueInput
    /**
     * In case the producto_variante found by the `where` argument doesn't exist, create a new producto_variante with this data.
     */
    create: XOR<producto_varianteCreateInput, producto_varianteUncheckedCreateInput>
    /**
     * In case the producto_variante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<producto_varianteUpdateInput, producto_varianteUncheckedUpdateInput>
  }

  /**
   * producto_variante delete
   */
  export type producto_varianteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto_variante
     */
    select?: producto_varianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto_variante
     */
    omit?: producto_varianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: producto_varianteInclude<ExtArgs> | null
    /**
     * Filter which producto_variante to delete.
     */
    where: producto_varianteWhereUniqueInput
  }

  /**
   * producto_variante deleteMany
   */
  export type producto_varianteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which producto_variantes to delete
     */
    where?: producto_varianteWhereInput
    /**
     * Limit how many producto_variantes to delete.
     */
    limit?: number
  }

  /**
   * producto_variante.inventario_movimiento
   */
  export type producto_variante$inventario_movimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_movimiento
     */
    select?: inventario_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_movimiento
     */
    omit?: inventario_movimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_movimientoInclude<ExtArgs> | null
    where?: inventario_movimientoWhereInput
    orderBy?: inventario_movimientoOrderByWithRelationInput | inventario_movimientoOrderByWithRelationInput[]
    cursor?: inventario_movimientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Inventario_movimientoScalarFieldEnum | Inventario_movimientoScalarFieldEnum[]
  }

  /**
   * producto_variante.venta_detalle
   */
  export type producto_variante$venta_detalleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venta_detalle
     */
    select?: venta_detalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venta_detalle
     */
    omit?: venta_detalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venta_detalleInclude<ExtArgs> | null
    where?: venta_detalleWhereInput
    orderBy?: venta_detalleOrderByWithRelationInput | venta_detalleOrderByWithRelationInput[]
    cursor?: venta_detalleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Venta_detalleScalarFieldEnum | Venta_detalleScalarFieldEnum[]
  }

  /**
   * producto_variante without action
   */
  export type producto_varianteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto_variante
     */
    select?: producto_varianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto_variante
     */
    omit?: producto_varianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: producto_varianteInclude<ExtArgs> | null
  }


  /**
   * Model tipo_operacion
   */

  export type AggregateTipo_operacion = {
    _count: Tipo_operacionCountAggregateOutputType | null
    _avg: Tipo_operacionAvgAggregateOutputType | null
    _sum: Tipo_operacionSumAggregateOutputType | null
    _min: Tipo_operacionMinAggregateOutputType | null
    _max: Tipo_operacionMaxAggregateOutputType | null
  }

  export type Tipo_operacionAvgAggregateOutputType = {
    id_tipo_operacion: number | null
  }

  export type Tipo_operacionSumAggregateOutputType = {
    id_tipo_operacion: number | null
  }

  export type Tipo_operacionMinAggregateOutputType = {
    id_tipo_operacion: number | null
    nombre: string | null
  }

  export type Tipo_operacionMaxAggregateOutputType = {
    id_tipo_operacion: number | null
    nombre: string | null
  }

  export type Tipo_operacionCountAggregateOutputType = {
    id_tipo_operacion: number
    nombre: number
    _all: number
  }


  export type Tipo_operacionAvgAggregateInputType = {
    id_tipo_operacion?: true
  }

  export type Tipo_operacionSumAggregateInputType = {
    id_tipo_operacion?: true
  }

  export type Tipo_operacionMinAggregateInputType = {
    id_tipo_operacion?: true
    nombre?: true
  }

  export type Tipo_operacionMaxAggregateInputType = {
    id_tipo_operacion?: true
    nombre?: true
  }

  export type Tipo_operacionCountAggregateInputType = {
    id_tipo_operacion?: true
    nombre?: true
    _all?: true
  }

  export type Tipo_operacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_operacion to aggregate.
     */
    where?: tipo_operacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_operacions to fetch.
     */
    orderBy?: tipo_operacionOrderByWithRelationInput | tipo_operacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipo_operacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_operacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipo_operacions
    **/
    _count?: true | Tipo_operacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipo_operacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipo_operacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipo_operacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipo_operacionMaxAggregateInputType
  }

  export type GetTipo_operacionAggregateType<T extends Tipo_operacionAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo_operacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo_operacion[P]>
      : GetScalarType<T[P], AggregateTipo_operacion[P]>
  }




  export type tipo_operacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_operacionWhereInput
    orderBy?: tipo_operacionOrderByWithAggregationInput | tipo_operacionOrderByWithAggregationInput[]
    by: Tipo_operacionScalarFieldEnum[] | Tipo_operacionScalarFieldEnum
    having?: tipo_operacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipo_operacionCountAggregateInputType | true
    _avg?: Tipo_operacionAvgAggregateInputType
    _sum?: Tipo_operacionSumAggregateInputType
    _min?: Tipo_operacionMinAggregateInputType
    _max?: Tipo_operacionMaxAggregateInputType
  }

  export type Tipo_operacionGroupByOutputType = {
    id_tipo_operacion: number
    nombre: string
    _count: Tipo_operacionCountAggregateOutputType | null
    _avg: Tipo_operacionAvgAggregateOutputType | null
    _sum: Tipo_operacionSumAggregateOutputType | null
    _min: Tipo_operacionMinAggregateOutputType | null
    _max: Tipo_operacionMaxAggregateOutputType | null
  }

  type GetTipo_operacionGroupByPayload<T extends tipo_operacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipo_operacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipo_operacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipo_operacionGroupByOutputType[P]>
            : GetScalarType<T[P], Tipo_operacionGroupByOutputType[P]>
        }
      >
    >


  export type tipo_operacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_operacion?: boolean
    nombre?: boolean
    operacion?: boolean | tipo_operacion$operacionArgs<ExtArgs>
    _count?: boolean | Tipo_operacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo_operacion"]>

  export type tipo_operacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_operacion?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["tipo_operacion"]>

  export type tipo_operacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_operacion?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["tipo_operacion"]>

  export type tipo_operacionSelectScalar = {
    id_tipo_operacion?: boolean
    nombre?: boolean
  }

  export type tipo_operacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tipo_operacion" | "nombre", ExtArgs["result"]["tipo_operacion"]>
  export type tipo_operacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operacion?: boolean | tipo_operacion$operacionArgs<ExtArgs>
    _count?: boolean | Tipo_operacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tipo_operacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tipo_operacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tipo_operacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipo_operacion"
    objects: {
      operacion: Prisma.$operacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tipo_operacion: number
      nombre: string
    }, ExtArgs["result"]["tipo_operacion"]>
    composites: {}
  }

  type tipo_operacionGetPayload<S extends boolean | null | undefined | tipo_operacionDefaultArgs> = $Result.GetResult<Prisma.$tipo_operacionPayload, S>

  type tipo_operacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipo_operacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tipo_operacionCountAggregateInputType | true
    }

  export interface tipo_operacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipo_operacion'], meta: { name: 'tipo_operacion' } }
    /**
     * Find zero or one Tipo_operacion that matches the filter.
     * @param {tipo_operacionFindUniqueArgs} args - Arguments to find a Tipo_operacion
     * @example
     * // Get one Tipo_operacion
     * const tipo_operacion = await prisma.tipo_operacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipo_operacionFindUniqueArgs>(args: SelectSubset<T, tipo_operacionFindUniqueArgs<ExtArgs>>): Prisma__tipo_operacionClient<$Result.GetResult<Prisma.$tipo_operacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipo_operacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipo_operacionFindUniqueOrThrowArgs} args - Arguments to find a Tipo_operacion
     * @example
     * // Get one Tipo_operacion
     * const tipo_operacion = await prisma.tipo_operacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipo_operacionFindUniqueOrThrowArgs>(args: SelectSubset<T, tipo_operacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipo_operacionClient<$Result.GetResult<Prisma.$tipo_operacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_operacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_operacionFindFirstArgs} args - Arguments to find a Tipo_operacion
     * @example
     * // Get one Tipo_operacion
     * const tipo_operacion = await prisma.tipo_operacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipo_operacionFindFirstArgs>(args?: SelectSubset<T, tipo_operacionFindFirstArgs<ExtArgs>>): Prisma__tipo_operacionClient<$Result.GetResult<Prisma.$tipo_operacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_operacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_operacionFindFirstOrThrowArgs} args - Arguments to find a Tipo_operacion
     * @example
     * // Get one Tipo_operacion
     * const tipo_operacion = await prisma.tipo_operacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipo_operacionFindFirstOrThrowArgs>(args?: SelectSubset<T, tipo_operacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipo_operacionClient<$Result.GetResult<Prisma.$tipo_operacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipo_operacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_operacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipo_operacions
     * const tipo_operacions = await prisma.tipo_operacion.findMany()
     * 
     * // Get first 10 Tipo_operacions
     * const tipo_operacions = await prisma.tipo_operacion.findMany({ take: 10 })
     * 
     * // Only select the `id_tipo_operacion`
     * const tipo_operacionWithId_tipo_operacionOnly = await prisma.tipo_operacion.findMany({ select: { id_tipo_operacion: true } })
     * 
     */
    findMany<T extends tipo_operacionFindManyArgs>(args?: SelectSubset<T, tipo_operacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_operacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipo_operacion.
     * @param {tipo_operacionCreateArgs} args - Arguments to create a Tipo_operacion.
     * @example
     * // Create one Tipo_operacion
     * const Tipo_operacion = await prisma.tipo_operacion.create({
     *   data: {
     *     // ... data to create a Tipo_operacion
     *   }
     * })
     * 
     */
    create<T extends tipo_operacionCreateArgs>(args: SelectSubset<T, tipo_operacionCreateArgs<ExtArgs>>): Prisma__tipo_operacionClient<$Result.GetResult<Prisma.$tipo_operacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipo_operacions.
     * @param {tipo_operacionCreateManyArgs} args - Arguments to create many Tipo_operacions.
     * @example
     * // Create many Tipo_operacions
     * const tipo_operacion = await prisma.tipo_operacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipo_operacionCreateManyArgs>(args?: SelectSubset<T, tipo_operacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipo_operacions and returns the data saved in the database.
     * @param {tipo_operacionCreateManyAndReturnArgs} args - Arguments to create many Tipo_operacions.
     * @example
     * // Create many Tipo_operacions
     * const tipo_operacion = await prisma.tipo_operacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipo_operacions and only return the `id_tipo_operacion`
     * const tipo_operacionWithId_tipo_operacionOnly = await prisma.tipo_operacion.createManyAndReturn({
     *   select: { id_tipo_operacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tipo_operacionCreateManyAndReturnArgs>(args?: SelectSubset<T, tipo_operacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_operacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipo_operacion.
     * @param {tipo_operacionDeleteArgs} args - Arguments to delete one Tipo_operacion.
     * @example
     * // Delete one Tipo_operacion
     * const Tipo_operacion = await prisma.tipo_operacion.delete({
     *   where: {
     *     // ... filter to delete one Tipo_operacion
     *   }
     * })
     * 
     */
    delete<T extends tipo_operacionDeleteArgs>(args: SelectSubset<T, tipo_operacionDeleteArgs<ExtArgs>>): Prisma__tipo_operacionClient<$Result.GetResult<Prisma.$tipo_operacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipo_operacion.
     * @param {tipo_operacionUpdateArgs} args - Arguments to update one Tipo_operacion.
     * @example
     * // Update one Tipo_operacion
     * const tipo_operacion = await prisma.tipo_operacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipo_operacionUpdateArgs>(args: SelectSubset<T, tipo_operacionUpdateArgs<ExtArgs>>): Prisma__tipo_operacionClient<$Result.GetResult<Prisma.$tipo_operacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipo_operacions.
     * @param {tipo_operacionDeleteManyArgs} args - Arguments to filter Tipo_operacions to delete.
     * @example
     * // Delete a few Tipo_operacions
     * const { count } = await prisma.tipo_operacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipo_operacionDeleteManyArgs>(args?: SelectSubset<T, tipo_operacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_operacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_operacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipo_operacions
     * const tipo_operacion = await prisma.tipo_operacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipo_operacionUpdateManyArgs>(args: SelectSubset<T, tipo_operacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_operacions and returns the data updated in the database.
     * @param {tipo_operacionUpdateManyAndReturnArgs} args - Arguments to update many Tipo_operacions.
     * @example
     * // Update many Tipo_operacions
     * const tipo_operacion = await prisma.tipo_operacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipo_operacions and only return the `id_tipo_operacion`
     * const tipo_operacionWithId_tipo_operacionOnly = await prisma.tipo_operacion.updateManyAndReturn({
     *   select: { id_tipo_operacion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tipo_operacionUpdateManyAndReturnArgs>(args: SelectSubset<T, tipo_operacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_operacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipo_operacion.
     * @param {tipo_operacionUpsertArgs} args - Arguments to update or create a Tipo_operacion.
     * @example
     * // Update or create a Tipo_operacion
     * const tipo_operacion = await prisma.tipo_operacion.upsert({
     *   create: {
     *     // ... data to create a Tipo_operacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo_operacion we want to update
     *   }
     * })
     */
    upsert<T extends tipo_operacionUpsertArgs>(args: SelectSubset<T, tipo_operacionUpsertArgs<ExtArgs>>): Prisma__tipo_operacionClient<$Result.GetResult<Prisma.$tipo_operacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipo_operacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_operacionCountArgs} args - Arguments to filter Tipo_operacions to count.
     * @example
     * // Count the number of Tipo_operacions
     * const count = await prisma.tipo_operacion.count({
     *   where: {
     *     // ... the filter for the Tipo_operacions we want to count
     *   }
     * })
    **/
    count<T extends tipo_operacionCountArgs>(
      args?: Subset<T, tipo_operacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipo_operacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo_operacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_operacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tipo_operacionAggregateArgs>(args: Subset<T, Tipo_operacionAggregateArgs>): Prisma.PrismaPromise<GetTipo_operacionAggregateType<T>>

    /**
     * Group by Tipo_operacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_operacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tipo_operacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipo_operacionGroupByArgs['orderBy'] }
        : { orderBy?: tipo_operacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tipo_operacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipo_operacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipo_operacion model
   */
  readonly fields: tipo_operacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipo_operacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipo_operacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operacion<T extends tipo_operacion$operacionArgs<ExtArgs> = {}>(args?: Subset<T, tipo_operacion$operacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tipo_operacion model
   */
  interface tipo_operacionFieldRefs {
    readonly id_tipo_operacion: FieldRef<"tipo_operacion", 'Int'>
    readonly nombre: FieldRef<"tipo_operacion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipo_operacion findUnique
   */
  export type tipo_operacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_operacion
     */
    select?: tipo_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_operacion
     */
    omit?: tipo_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_operacionInclude<ExtArgs> | null
    /**
     * Filter, which tipo_operacion to fetch.
     */
    where: tipo_operacionWhereUniqueInput
  }

  /**
   * tipo_operacion findUniqueOrThrow
   */
  export type tipo_operacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_operacion
     */
    select?: tipo_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_operacion
     */
    omit?: tipo_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_operacionInclude<ExtArgs> | null
    /**
     * Filter, which tipo_operacion to fetch.
     */
    where: tipo_operacionWhereUniqueInput
  }

  /**
   * tipo_operacion findFirst
   */
  export type tipo_operacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_operacion
     */
    select?: tipo_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_operacion
     */
    omit?: tipo_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_operacionInclude<ExtArgs> | null
    /**
     * Filter, which tipo_operacion to fetch.
     */
    where?: tipo_operacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_operacions to fetch.
     */
    orderBy?: tipo_operacionOrderByWithRelationInput | tipo_operacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_operacions.
     */
    cursor?: tipo_operacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_operacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_operacions.
     */
    distinct?: Tipo_operacionScalarFieldEnum | Tipo_operacionScalarFieldEnum[]
  }

  /**
   * tipo_operacion findFirstOrThrow
   */
  export type tipo_operacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_operacion
     */
    select?: tipo_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_operacion
     */
    omit?: tipo_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_operacionInclude<ExtArgs> | null
    /**
     * Filter, which tipo_operacion to fetch.
     */
    where?: tipo_operacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_operacions to fetch.
     */
    orderBy?: tipo_operacionOrderByWithRelationInput | tipo_operacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_operacions.
     */
    cursor?: tipo_operacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_operacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_operacions.
     */
    distinct?: Tipo_operacionScalarFieldEnum | Tipo_operacionScalarFieldEnum[]
  }

  /**
   * tipo_operacion findMany
   */
  export type tipo_operacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_operacion
     */
    select?: tipo_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_operacion
     */
    omit?: tipo_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_operacionInclude<ExtArgs> | null
    /**
     * Filter, which tipo_operacions to fetch.
     */
    where?: tipo_operacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_operacions to fetch.
     */
    orderBy?: tipo_operacionOrderByWithRelationInput | tipo_operacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipo_operacions.
     */
    cursor?: tipo_operacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_operacions.
     */
    skip?: number
    distinct?: Tipo_operacionScalarFieldEnum | Tipo_operacionScalarFieldEnum[]
  }

  /**
   * tipo_operacion create
   */
  export type tipo_operacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_operacion
     */
    select?: tipo_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_operacion
     */
    omit?: tipo_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_operacionInclude<ExtArgs> | null
    /**
     * The data needed to create a tipo_operacion.
     */
    data: XOR<tipo_operacionCreateInput, tipo_operacionUncheckedCreateInput>
  }

  /**
   * tipo_operacion createMany
   */
  export type tipo_operacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipo_operacions.
     */
    data: tipo_operacionCreateManyInput | tipo_operacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipo_operacion createManyAndReturn
   */
  export type tipo_operacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_operacion
     */
    select?: tipo_operacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_operacion
     */
    omit?: tipo_operacionOmit<ExtArgs> | null
    /**
     * The data used to create many tipo_operacions.
     */
    data: tipo_operacionCreateManyInput | tipo_operacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipo_operacion update
   */
  export type tipo_operacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_operacion
     */
    select?: tipo_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_operacion
     */
    omit?: tipo_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_operacionInclude<ExtArgs> | null
    /**
     * The data needed to update a tipo_operacion.
     */
    data: XOR<tipo_operacionUpdateInput, tipo_operacionUncheckedUpdateInput>
    /**
     * Choose, which tipo_operacion to update.
     */
    where: tipo_operacionWhereUniqueInput
  }

  /**
   * tipo_operacion updateMany
   */
  export type tipo_operacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipo_operacions.
     */
    data: XOR<tipo_operacionUpdateManyMutationInput, tipo_operacionUncheckedUpdateManyInput>
    /**
     * Filter which tipo_operacions to update
     */
    where?: tipo_operacionWhereInput
    /**
     * Limit how many tipo_operacions to update.
     */
    limit?: number
  }

  /**
   * tipo_operacion updateManyAndReturn
   */
  export type tipo_operacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_operacion
     */
    select?: tipo_operacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_operacion
     */
    omit?: tipo_operacionOmit<ExtArgs> | null
    /**
     * The data used to update tipo_operacions.
     */
    data: XOR<tipo_operacionUpdateManyMutationInput, tipo_operacionUncheckedUpdateManyInput>
    /**
     * Filter which tipo_operacions to update
     */
    where?: tipo_operacionWhereInput
    /**
     * Limit how many tipo_operacions to update.
     */
    limit?: number
  }

  /**
   * tipo_operacion upsert
   */
  export type tipo_operacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_operacion
     */
    select?: tipo_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_operacion
     */
    omit?: tipo_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_operacionInclude<ExtArgs> | null
    /**
     * The filter to search for the tipo_operacion to update in case it exists.
     */
    where: tipo_operacionWhereUniqueInput
    /**
     * In case the tipo_operacion found by the `where` argument doesn't exist, create a new tipo_operacion with this data.
     */
    create: XOR<tipo_operacionCreateInput, tipo_operacionUncheckedCreateInput>
    /**
     * In case the tipo_operacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipo_operacionUpdateInput, tipo_operacionUncheckedUpdateInput>
  }

  /**
   * tipo_operacion delete
   */
  export type tipo_operacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_operacion
     */
    select?: tipo_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_operacion
     */
    omit?: tipo_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_operacionInclude<ExtArgs> | null
    /**
     * Filter which tipo_operacion to delete.
     */
    where: tipo_operacionWhereUniqueInput
  }

  /**
   * tipo_operacion deleteMany
   */
  export type tipo_operacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_operacions to delete
     */
    where?: tipo_operacionWhereInput
    /**
     * Limit how many tipo_operacions to delete.
     */
    limit?: number
  }

  /**
   * tipo_operacion.operacion
   */
  export type tipo_operacion$operacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    where?: operacionWhereInput
    orderBy?: operacionOrderByWithRelationInput | operacionOrderByWithRelationInput[]
    cursor?: operacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperacionScalarFieldEnum | OperacionScalarFieldEnum[]
  }

  /**
   * tipo_operacion without action
   */
  export type tipo_operacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_operacion
     */
    select?: tipo_operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_operacion
     */
    omit?: tipo_operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_operacionInclude<ExtArgs> | null
  }


  /**
   * Model venta_detalle
   */

  export type AggregateVenta_detalle = {
    _count: Venta_detalleCountAggregateOutputType | null
    _avg: Venta_detalleAvgAggregateOutputType | null
    _sum: Venta_detalleSumAggregateOutputType | null
    _min: Venta_detalleMinAggregateOutputType | null
    _max: Venta_detalleMaxAggregateOutputType | null
  }

  export type Venta_detalleAvgAggregateOutputType = {
    id_venta: number | null
    id_producto_variante: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
  }

  export type Venta_detalleSumAggregateOutputType = {
    id_venta: number | null
    id_producto_variante: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
  }

  export type Venta_detalleMinAggregateOutputType = {
    id_venta: number | null
    id_producto_variante: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
  }

  export type Venta_detalleMaxAggregateOutputType = {
    id_venta: number | null
    id_producto_variante: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
  }

  export type Venta_detalleCountAggregateOutputType = {
    id_venta: number
    id_producto_variante: number
    cantidad: number
    precio_unitario: number
    _all: number
  }


  export type Venta_detalleAvgAggregateInputType = {
    id_venta?: true
    id_producto_variante?: true
    cantidad?: true
    precio_unitario?: true
  }

  export type Venta_detalleSumAggregateInputType = {
    id_venta?: true
    id_producto_variante?: true
    cantidad?: true
    precio_unitario?: true
  }

  export type Venta_detalleMinAggregateInputType = {
    id_venta?: true
    id_producto_variante?: true
    cantidad?: true
    precio_unitario?: true
  }

  export type Venta_detalleMaxAggregateInputType = {
    id_venta?: true
    id_producto_variante?: true
    cantidad?: true
    precio_unitario?: true
  }

  export type Venta_detalleCountAggregateInputType = {
    id_venta?: true
    id_producto_variante?: true
    cantidad?: true
    precio_unitario?: true
    _all?: true
  }

  export type Venta_detalleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which venta_detalle to aggregate.
     */
    where?: venta_detalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of venta_detalles to fetch.
     */
    orderBy?: venta_detalleOrderByWithRelationInput | venta_detalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: venta_detalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` venta_detalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` venta_detalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned venta_detalles
    **/
    _count?: true | Venta_detalleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Venta_detalleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Venta_detalleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Venta_detalleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Venta_detalleMaxAggregateInputType
  }

  export type GetVenta_detalleAggregateType<T extends Venta_detalleAggregateArgs> = {
        [P in keyof T & keyof AggregateVenta_detalle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenta_detalle[P]>
      : GetScalarType<T[P], AggregateVenta_detalle[P]>
  }




  export type venta_detalleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: venta_detalleWhereInput
    orderBy?: venta_detalleOrderByWithAggregationInput | venta_detalleOrderByWithAggregationInput[]
    by: Venta_detalleScalarFieldEnum[] | Venta_detalleScalarFieldEnum
    having?: venta_detalleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Venta_detalleCountAggregateInputType | true
    _avg?: Venta_detalleAvgAggregateInputType
    _sum?: Venta_detalleSumAggregateInputType
    _min?: Venta_detalleMinAggregateInputType
    _max?: Venta_detalleMaxAggregateInputType
  }

  export type Venta_detalleGroupByOutputType = {
    id_venta: number
    id_producto_variante: number
    cantidad: number
    precio_unitario: Decimal
    _count: Venta_detalleCountAggregateOutputType | null
    _avg: Venta_detalleAvgAggregateOutputType | null
    _sum: Venta_detalleSumAggregateOutputType | null
    _min: Venta_detalleMinAggregateOutputType | null
    _max: Venta_detalleMaxAggregateOutputType | null
  }

  type GetVenta_detalleGroupByPayload<T extends venta_detalleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Venta_detalleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Venta_detalleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Venta_detalleGroupByOutputType[P]>
            : GetScalarType<T[P], Venta_detalleGroupByOutputType[P]>
        }
      >
    >


  export type venta_detalleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_venta?: boolean
    id_producto_variante?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    producto_variante?: boolean | producto_varianteDefaultArgs<ExtArgs>
    operacion_venta?: boolean | operacion_ventaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta_detalle"]>

  export type venta_detalleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_venta?: boolean
    id_producto_variante?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    producto_variante?: boolean | producto_varianteDefaultArgs<ExtArgs>
    operacion_venta?: boolean | operacion_ventaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta_detalle"]>

  export type venta_detalleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_venta?: boolean
    id_producto_variante?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    producto_variante?: boolean | producto_varianteDefaultArgs<ExtArgs>
    operacion_venta?: boolean | operacion_ventaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta_detalle"]>

  export type venta_detalleSelectScalar = {
    id_venta?: boolean
    id_producto_variante?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
  }

  export type venta_detalleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_venta" | "id_producto_variante" | "cantidad" | "precio_unitario", ExtArgs["result"]["venta_detalle"]>
  export type venta_detalleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto_variante?: boolean | producto_varianteDefaultArgs<ExtArgs>
    operacion_venta?: boolean | operacion_ventaDefaultArgs<ExtArgs>
  }
  export type venta_detalleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto_variante?: boolean | producto_varianteDefaultArgs<ExtArgs>
    operacion_venta?: boolean | operacion_ventaDefaultArgs<ExtArgs>
  }
  export type venta_detalleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto_variante?: boolean | producto_varianteDefaultArgs<ExtArgs>
    operacion_venta?: boolean | operacion_ventaDefaultArgs<ExtArgs>
  }

  export type $venta_detallePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "venta_detalle"
    objects: {
      producto_variante: Prisma.$producto_variantePayload<ExtArgs>
      operacion_venta: Prisma.$operacion_ventaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_venta: number
      id_producto_variante: number
      cantidad: number
      precio_unitario: Prisma.Decimal
    }, ExtArgs["result"]["venta_detalle"]>
    composites: {}
  }

  type venta_detalleGetPayload<S extends boolean | null | undefined | venta_detalleDefaultArgs> = $Result.GetResult<Prisma.$venta_detallePayload, S>

  type venta_detalleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<venta_detalleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Venta_detalleCountAggregateInputType | true
    }

  export interface venta_detalleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['venta_detalle'], meta: { name: 'venta_detalle' } }
    /**
     * Find zero or one Venta_detalle that matches the filter.
     * @param {venta_detalleFindUniqueArgs} args - Arguments to find a Venta_detalle
     * @example
     * // Get one Venta_detalle
     * const venta_detalle = await prisma.venta_detalle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends venta_detalleFindUniqueArgs>(args: SelectSubset<T, venta_detalleFindUniqueArgs<ExtArgs>>): Prisma__venta_detalleClient<$Result.GetResult<Prisma.$venta_detallePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venta_detalle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {venta_detalleFindUniqueOrThrowArgs} args - Arguments to find a Venta_detalle
     * @example
     * // Get one Venta_detalle
     * const venta_detalle = await prisma.venta_detalle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends venta_detalleFindUniqueOrThrowArgs>(args: SelectSubset<T, venta_detalleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__venta_detalleClient<$Result.GetResult<Prisma.$venta_detallePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta_detalle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venta_detalleFindFirstArgs} args - Arguments to find a Venta_detalle
     * @example
     * // Get one Venta_detalle
     * const venta_detalle = await prisma.venta_detalle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends venta_detalleFindFirstArgs>(args?: SelectSubset<T, venta_detalleFindFirstArgs<ExtArgs>>): Prisma__venta_detalleClient<$Result.GetResult<Prisma.$venta_detallePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta_detalle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venta_detalleFindFirstOrThrowArgs} args - Arguments to find a Venta_detalle
     * @example
     * // Get one Venta_detalle
     * const venta_detalle = await prisma.venta_detalle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends venta_detalleFindFirstOrThrowArgs>(args?: SelectSubset<T, venta_detalleFindFirstOrThrowArgs<ExtArgs>>): Prisma__venta_detalleClient<$Result.GetResult<Prisma.$venta_detallePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Venta_detalles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venta_detalleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Venta_detalles
     * const venta_detalles = await prisma.venta_detalle.findMany()
     * 
     * // Get first 10 Venta_detalles
     * const venta_detalles = await prisma.venta_detalle.findMany({ take: 10 })
     * 
     * // Only select the `id_venta`
     * const venta_detalleWithId_ventaOnly = await prisma.venta_detalle.findMany({ select: { id_venta: true } })
     * 
     */
    findMany<T extends venta_detalleFindManyArgs>(args?: SelectSubset<T, venta_detalleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$venta_detallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venta_detalle.
     * @param {venta_detalleCreateArgs} args - Arguments to create a Venta_detalle.
     * @example
     * // Create one Venta_detalle
     * const Venta_detalle = await prisma.venta_detalle.create({
     *   data: {
     *     // ... data to create a Venta_detalle
     *   }
     * })
     * 
     */
    create<T extends venta_detalleCreateArgs>(args: SelectSubset<T, venta_detalleCreateArgs<ExtArgs>>): Prisma__venta_detalleClient<$Result.GetResult<Prisma.$venta_detallePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Venta_detalles.
     * @param {venta_detalleCreateManyArgs} args - Arguments to create many Venta_detalles.
     * @example
     * // Create many Venta_detalles
     * const venta_detalle = await prisma.venta_detalle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends venta_detalleCreateManyArgs>(args?: SelectSubset<T, venta_detalleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Venta_detalles and returns the data saved in the database.
     * @param {venta_detalleCreateManyAndReturnArgs} args - Arguments to create many Venta_detalles.
     * @example
     * // Create many Venta_detalles
     * const venta_detalle = await prisma.venta_detalle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Venta_detalles and only return the `id_venta`
     * const venta_detalleWithId_ventaOnly = await prisma.venta_detalle.createManyAndReturn({
     *   select: { id_venta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends venta_detalleCreateManyAndReturnArgs>(args?: SelectSubset<T, venta_detalleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$venta_detallePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venta_detalle.
     * @param {venta_detalleDeleteArgs} args - Arguments to delete one Venta_detalle.
     * @example
     * // Delete one Venta_detalle
     * const Venta_detalle = await prisma.venta_detalle.delete({
     *   where: {
     *     // ... filter to delete one Venta_detalle
     *   }
     * })
     * 
     */
    delete<T extends venta_detalleDeleteArgs>(args: SelectSubset<T, venta_detalleDeleteArgs<ExtArgs>>): Prisma__venta_detalleClient<$Result.GetResult<Prisma.$venta_detallePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venta_detalle.
     * @param {venta_detalleUpdateArgs} args - Arguments to update one Venta_detalle.
     * @example
     * // Update one Venta_detalle
     * const venta_detalle = await prisma.venta_detalle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends venta_detalleUpdateArgs>(args: SelectSubset<T, venta_detalleUpdateArgs<ExtArgs>>): Prisma__venta_detalleClient<$Result.GetResult<Prisma.$venta_detallePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Venta_detalles.
     * @param {venta_detalleDeleteManyArgs} args - Arguments to filter Venta_detalles to delete.
     * @example
     * // Delete a few Venta_detalles
     * const { count } = await prisma.venta_detalle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends venta_detalleDeleteManyArgs>(args?: SelectSubset<T, venta_detalleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venta_detalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venta_detalleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Venta_detalles
     * const venta_detalle = await prisma.venta_detalle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends venta_detalleUpdateManyArgs>(args: SelectSubset<T, venta_detalleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venta_detalles and returns the data updated in the database.
     * @param {venta_detalleUpdateManyAndReturnArgs} args - Arguments to update many Venta_detalles.
     * @example
     * // Update many Venta_detalles
     * const venta_detalle = await prisma.venta_detalle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Venta_detalles and only return the `id_venta`
     * const venta_detalleWithId_ventaOnly = await prisma.venta_detalle.updateManyAndReturn({
     *   select: { id_venta: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends venta_detalleUpdateManyAndReturnArgs>(args: SelectSubset<T, venta_detalleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$venta_detallePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venta_detalle.
     * @param {venta_detalleUpsertArgs} args - Arguments to update or create a Venta_detalle.
     * @example
     * // Update or create a Venta_detalle
     * const venta_detalle = await prisma.venta_detalle.upsert({
     *   create: {
     *     // ... data to create a Venta_detalle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venta_detalle we want to update
     *   }
     * })
     */
    upsert<T extends venta_detalleUpsertArgs>(args: SelectSubset<T, venta_detalleUpsertArgs<ExtArgs>>): Prisma__venta_detalleClient<$Result.GetResult<Prisma.$venta_detallePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Venta_detalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venta_detalleCountArgs} args - Arguments to filter Venta_detalles to count.
     * @example
     * // Count the number of Venta_detalles
     * const count = await prisma.venta_detalle.count({
     *   where: {
     *     // ... the filter for the Venta_detalles we want to count
     *   }
     * })
    **/
    count<T extends venta_detalleCountArgs>(
      args?: Subset<T, venta_detalleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Venta_detalleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venta_detalle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Venta_detalleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Venta_detalleAggregateArgs>(args: Subset<T, Venta_detalleAggregateArgs>): Prisma.PrismaPromise<GetVenta_detalleAggregateType<T>>

    /**
     * Group by Venta_detalle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venta_detalleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends venta_detalleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: venta_detalleGroupByArgs['orderBy'] }
        : { orderBy?: venta_detalleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, venta_detalleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenta_detalleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the venta_detalle model
   */
  readonly fields: venta_detalleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for venta_detalle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__venta_detalleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto_variante<T extends producto_varianteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, producto_varianteDefaultArgs<ExtArgs>>): Prisma__producto_varianteClient<$Result.GetResult<Prisma.$producto_variantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operacion_venta<T extends operacion_ventaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, operacion_ventaDefaultArgs<ExtArgs>>): Prisma__operacion_ventaClient<$Result.GetResult<Prisma.$operacion_ventaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the venta_detalle model
   */
  interface venta_detalleFieldRefs {
    readonly id_venta: FieldRef<"venta_detalle", 'Int'>
    readonly id_producto_variante: FieldRef<"venta_detalle", 'Int'>
    readonly cantidad: FieldRef<"venta_detalle", 'Int'>
    readonly precio_unitario: FieldRef<"venta_detalle", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * venta_detalle findUnique
   */
  export type venta_detalleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venta_detalle
     */
    select?: venta_detalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venta_detalle
     */
    omit?: venta_detalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venta_detalleInclude<ExtArgs> | null
    /**
     * Filter, which venta_detalle to fetch.
     */
    where: venta_detalleWhereUniqueInput
  }

  /**
   * venta_detalle findUniqueOrThrow
   */
  export type venta_detalleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venta_detalle
     */
    select?: venta_detalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venta_detalle
     */
    omit?: venta_detalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venta_detalleInclude<ExtArgs> | null
    /**
     * Filter, which venta_detalle to fetch.
     */
    where: venta_detalleWhereUniqueInput
  }

  /**
   * venta_detalle findFirst
   */
  export type venta_detalleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venta_detalle
     */
    select?: venta_detalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venta_detalle
     */
    omit?: venta_detalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venta_detalleInclude<ExtArgs> | null
    /**
     * Filter, which venta_detalle to fetch.
     */
    where?: venta_detalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of venta_detalles to fetch.
     */
    orderBy?: venta_detalleOrderByWithRelationInput | venta_detalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for venta_detalles.
     */
    cursor?: venta_detalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` venta_detalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` venta_detalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of venta_detalles.
     */
    distinct?: Venta_detalleScalarFieldEnum | Venta_detalleScalarFieldEnum[]
  }

  /**
   * venta_detalle findFirstOrThrow
   */
  export type venta_detalleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venta_detalle
     */
    select?: venta_detalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venta_detalle
     */
    omit?: venta_detalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venta_detalleInclude<ExtArgs> | null
    /**
     * Filter, which venta_detalle to fetch.
     */
    where?: venta_detalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of venta_detalles to fetch.
     */
    orderBy?: venta_detalleOrderByWithRelationInput | venta_detalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for venta_detalles.
     */
    cursor?: venta_detalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` venta_detalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` venta_detalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of venta_detalles.
     */
    distinct?: Venta_detalleScalarFieldEnum | Venta_detalleScalarFieldEnum[]
  }

  /**
   * venta_detalle findMany
   */
  export type venta_detalleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venta_detalle
     */
    select?: venta_detalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venta_detalle
     */
    omit?: venta_detalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venta_detalleInclude<ExtArgs> | null
    /**
     * Filter, which venta_detalles to fetch.
     */
    where?: venta_detalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of venta_detalles to fetch.
     */
    orderBy?: venta_detalleOrderByWithRelationInput | venta_detalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing venta_detalles.
     */
    cursor?: venta_detalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` venta_detalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` venta_detalles.
     */
    skip?: number
    distinct?: Venta_detalleScalarFieldEnum | Venta_detalleScalarFieldEnum[]
  }

  /**
   * venta_detalle create
   */
  export type venta_detalleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venta_detalle
     */
    select?: venta_detalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venta_detalle
     */
    omit?: venta_detalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venta_detalleInclude<ExtArgs> | null
    /**
     * The data needed to create a venta_detalle.
     */
    data: XOR<venta_detalleCreateInput, venta_detalleUncheckedCreateInput>
  }

  /**
   * venta_detalle createMany
   */
  export type venta_detalleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many venta_detalles.
     */
    data: venta_detalleCreateManyInput | venta_detalleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * venta_detalle createManyAndReturn
   */
  export type venta_detalleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venta_detalle
     */
    select?: venta_detalleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the venta_detalle
     */
    omit?: venta_detalleOmit<ExtArgs> | null
    /**
     * The data used to create many venta_detalles.
     */
    data: venta_detalleCreateManyInput | venta_detalleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venta_detalleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * venta_detalle update
   */
  export type venta_detalleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venta_detalle
     */
    select?: venta_detalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venta_detalle
     */
    omit?: venta_detalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venta_detalleInclude<ExtArgs> | null
    /**
     * The data needed to update a venta_detalle.
     */
    data: XOR<venta_detalleUpdateInput, venta_detalleUncheckedUpdateInput>
    /**
     * Choose, which venta_detalle to update.
     */
    where: venta_detalleWhereUniqueInput
  }

  /**
   * venta_detalle updateMany
   */
  export type venta_detalleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update venta_detalles.
     */
    data: XOR<venta_detalleUpdateManyMutationInput, venta_detalleUncheckedUpdateManyInput>
    /**
     * Filter which venta_detalles to update
     */
    where?: venta_detalleWhereInput
    /**
     * Limit how many venta_detalles to update.
     */
    limit?: number
  }

  /**
   * venta_detalle updateManyAndReturn
   */
  export type venta_detalleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venta_detalle
     */
    select?: venta_detalleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the venta_detalle
     */
    omit?: venta_detalleOmit<ExtArgs> | null
    /**
     * The data used to update venta_detalles.
     */
    data: XOR<venta_detalleUpdateManyMutationInput, venta_detalleUncheckedUpdateManyInput>
    /**
     * Filter which venta_detalles to update
     */
    where?: venta_detalleWhereInput
    /**
     * Limit how many venta_detalles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venta_detalleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * venta_detalle upsert
   */
  export type venta_detalleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venta_detalle
     */
    select?: venta_detalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venta_detalle
     */
    omit?: venta_detalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venta_detalleInclude<ExtArgs> | null
    /**
     * The filter to search for the venta_detalle to update in case it exists.
     */
    where: venta_detalleWhereUniqueInput
    /**
     * In case the venta_detalle found by the `where` argument doesn't exist, create a new venta_detalle with this data.
     */
    create: XOR<venta_detalleCreateInput, venta_detalleUncheckedCreateInput>
    /**
     * In case the venta_detalle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<venta_detalleUpdateInput, venta_detalleUncheckedUpdateInput>
  }

  /**
   * venta_detalle delete
   */
  export type venta_detalleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venta_detalle
     */
    select?: venta_detalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venta_detalle
     */
    omit?: venta_detalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venta_detalleInclude<ExtArgs> | null
    /**
     * Filter which venta_detalle to delete.
     */
    where: venta_detalleWhereUniqueInput
  }

  /**
   * venta_detalle deleteMany
   */
  export type venta_detalleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which venta_detalles to delete
     */
    where?: venta_detalleWhereInput
    /**
     * Limit how many venta_detalles to delete.
     */
    limit?: number
  }

  /**
   * venta_detalle without action
   */
  export type venta_detalleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venta_detalle
     */
    select?: venta_detalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venta_detalle
     */
    omit?: venta_detalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venta_detalleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Categoria_productoScalarFieldEnum: {
    id_categoria_producto: 'id_categoria_producto',
    nombre: 'nombre'
  };

  export type Categoria_productoScalarFieldEnum = (typeof Categoria_productoScalarFieldEnum)[keyof typeof Categoria_productoScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id_cliente: 'id_cliente',
    nombre: 'nombre',
    apellido: 'apellido',
    celular: 'celular'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const Estado_operacionScalarFieldEnum: {
    id_estado_operacion: 'id_estado_operacion',
    nombre: 'nombre'
  };

  export type Estado_operacionScalarFieldEnum = (typeof Estado_operacionScalarFieldEnum)[keyof typeof Estado_operacionScalarFieldEnum]


  export const Inventario_movimientoScalarFieldEnum: {
    id_movimiento: 'id_movimiento',
    id_producto_variante: 'id_producto_variante',
    tipo_movimiento: 'tipo_movimiento',
    cantidad: 'cantidad',
    id_operacion: 'id_operacion',
    fecha_movimiento: 'fecha_movimiento',
    comentario: 'comentario'
  };

  export type Inventario_movimientoScalarFieldEnum = (typeof Inventario_movimientoScalarFieldEnum)[keyof typeof Inventario_movimientoScalarFieldEnum]


  export const Metodo_pagoScalarFieldEnum: {
    id_metodo_pago: 'id_metodo_pago',
    nombre: 'nombre'
  };

  export type Metodo_pagoScalarFieldEnum = (typeof Metodo_pagoScalarFieldEnum)[keyof typeof Metodo_pagoScalarFieldEnum]


  export const OperacionScalarFieldEnum: {
    id_operacion: 'id_operacion',
    id_tipo_operacion: 'id_tipo_operacion',
    id_estado_operacion: 'id_estado_operacion',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizacion: 'fecha_actualizacion'
  };

  export type OperacionScalarFieldEnum = (typeof OperacionScalarFieldEnum)[keyof typeof OperacionScalarFieldEnum]


  export const Operacion_ventaScalarFieldEnum: {
    id_venta: 'id_venta',
    id_operacion: 'id_operacion',
    id_cliente: 'id_cliente',
    id_metodo_pago: 'id_metodo_pago',
    total: 'total'
  };

  export type Operacion_ventaScalarFieldEnum = (typeof Operacion_ventaScalarFieldEnum)[keyof typeof Operacion_ventaScalarFieldEnum]


  export const PagoScalarFieldEnum: {
    id_pago: 'id_pago',
    id_venta: 'id_venta',
    id_metodo_pago: 'id_metodo_pago',
    monto_pagado: 'monto_pagado',
    fecha_creacion: 'fecha_creacion'
  };

  export type PagoScalarFieldEnum = (typeof PagoScalarFieldEnum)[keyof typeof PagoScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id_producto: 'id_producto',
    id_categoria: 'id_categoria',
    nombre: 'nombre',
    costo: 'costo',
    precio_unitario: 'precio_unitario'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const Producto_varianteScalarFieldEnum: {
    id_producto_variante: 'id_producto_variante',
    id_producto: 'id_producto',
    talle: 'talle',
    color: 'color',
    stock: 'stock'
  };

  export type Producto_varianteScalarFieldEnum = (typeof Producto_varianteScalarFieldEnum)[keyof typeof Producto_varianteScalarFieldEnum]


  export const Tipo_operacionScalarFieldEnum: {
    id_tipo_operacion: 'id_tipo_operacion',
    nombre: 'nombre'
  };

  export type Tipo_operacionScalarFieldEnum = (typeof Tipo_operacionScalarFieldEnum)[keyof typeof Tipo_operacionScalarFieldEnum]


  export const Venta_detalleScalarFieldEnum: {
    id_venta: 'id_venta',
    id_producto_variante: 'id_producto_variante',
    cantidad: 'cantidad',
    precio_unitario: 'precio_unitario'
  };

  export type Venta_detalleScalarFieldEnum = (typeof Venta_detalleScalarFieldEnum)[keyof typeof Venta_detalleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type categoria_productoWhereInput = {
    AND?: categoria_productoWhereInput | categoria_productoWhereInput[]
    OR?: categoria_productoWhereInput[]
    NOT?: categoria_productoWhereInput | categoria_productoWhereInput[]
    id_categoria_producto?: IntFilter<"categoria_producto"> | number
    nombre?: StringFilter<"categoria_producto"> | string
    producto?: ProductoListRelationFilter
  }

  export type categoria_productoOrderByWithRelationInput = {
    id_categoria_producto?: SortOrder
    nombre?: SortOrder
    producto?: productoOrderByRelationAggregateInput
  }

  export type categoria_productoWhereUniqueInput = Prisma.AtLeast<{
    id_categoria_producto?: number
    nombre?: string
    AND?: categoria_productoWhereInput | categoria_productoWhereInput[]
    OR?: categoria_productoWhereInput[]
    NOT?: categoria_productoWhereInput | categoria_productoWhereInput[]
    producto?: ProductoListRelationFilter
  }, "id_categoria_producto" | "nombre">

  export type categoria_productoOrderByWithAggregationInput = {
    id_categoria_producto?: SortOrder
    nombre?: SortOrder
    _count?: categoria_productoCountOrderByAggregateInput
    _avg?: categoria_productoAvgOrderByAggregateInput
    _max?: categoria_productoMaxOrderByAggregateInput
    _min?: categoria_productoMinOrderByAggregateInput
    _sum?: categoria_productoSumOrderByAggregateInput
  }

  export type categoria_productoScalarWhereWithAggregatesInput = {
    AND?: categoria_productoScalarWhereWithAggregatesInput | categoria_productoScalarWhereWithAggregatesInput[]
    OR?: categoria_productoScalarWhereWithAggregatesInput[]
    NOT?: categoria_productoScalarWhereWithAggregatesInput | categoria_productoScalarWhereWithAggregatesInput[]
    id_categoria_producto?: IntWithAggregatesFilter<"categoria_producto"> | number
    nombre?: StringWithAggregatesFilter<"categoria_producto"> | string
  }

  export type clienteWhereInput = {
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    id_cliente?: IntFilter<"cliente"> | number
    nombre?: StringFilter<"cliente"> | string
    apellido?: StringFilter<"cliente"> | string
    celular?: StringNullableFilter<"cliente"> | string | null
    operacion_venta?: Operacion_ventaListRelationFilter
  }

  export type clienteOrderByWithRelationInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    celular?: SortOrderInput | SortOrder
    operacion_venta?: operacion_ventaOrderByRelationAggregateInput
  }

  export type clienteWhereUniqueInput = Prisma.AtLeast<{
    id_cliente?: number
    nombre_apellido_celular?: clienteNombreApellidoCelularCompoundUniqueInput
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    nombre?: StringFilter<"cliente"> | string
    apellido?: StringFilter<"cliente"> | string
    celular?: StringNullableFilter<"cliente"> | string | null
    operacion_venta?: Operacion_ventaListRelationFilter
  }, "id_cliente" | "nombre_apellido_celular">

  export type clienteOrderByWithAggregationInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    celular?: SortOrderInput | SortOrder
    _count?: clienteCountOrderByAggregateInput
    _avg?: clienteAvgOrderByAggregateInput
    _max?: clienteMaxOrderByAggregateInput
    _min?: clienteMinOrderByAggregateInput
    _sum?: clienteSumOrderByAggregateInput
  }

  export type clienteScalarWhereWithAggregatesInput = {
    AND?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    OR?: clienteScalarWhereWithAggregatesInput[]
    NOT?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    id_cliente?: IntWithAggregatesFilter<"cliente"> | number
    nombre?: StringWithAggregatesFilter<"cliente"> | string
    apellido?: StringWithAggregatesFilter<"cliente"> | string
    celular?: StringNullableWithAggregatesFilter<"cliente"> | string | null
  }

  export type estado_operacionWhereInput = {
    AND?: estado_operacionWhereInput | estado_operacionWhereInput[]
    OR?: estado_operacionWhereInput[]
    NOT?: estado_operacionWhereInput | estado_operacionWhereInput[]
    id_estado_operacion?: IntFilter<"estado_operacion"> | number
    nombre?: StringFilter<"estado_operacion"> | string
    operacion?: OperacionListRelationFilter
  }

  export type estado_operacionOrderByWithRelationInput = {
    id_estado_operacion?: SortOrder
    nombre?: SortOrder
    operacion?: operacionOrderByRelationAggregateInput
  }

  export type estado_operacionWhereUniqueInput = Prisma.AtLeast<{
    id_estado_operacion?: number
    nombre?: string
    AND?: estado_operacionWhereInput | estado_operacionWhereInput[]
    OR?: estado_operacionWhereInput[]
    NOT?: estado_operacionWhereInput | estado_operacionWhereInput[]
    operacion?: OperacionListRelationFilter
  }, "id_estado_operacion" | "nombre">

  export type estado_operacionOrderByWithAggregationInput = {
    id_estado_operacion?: SortOrder
    nombre?: SortOrder
    _count?: estado_operacionCountOrderByAggregateInput
    _avg?: estado_operacionAvgOrderByAggregateInput
    _max?: estado_operacionMaxOrderByAggregateInput
    _min?: estado_operacionMinOrderByAggregateInput
    _sum?: estado_operacionSumOrderByAggregateInput
  }

  export type estado_operacionScalarWhereWithAggregatesInput = {
    AND?: estado_operacionScalarWhereWithAggregatesInput | estado_operacionScalarWhereWithAggregatesInput[]
    OR?: estado_operacionScalarWhereWithAggregatesInput[]
    NOT?: estado_operacionScalarWhereWithAggregatesInput | estado_operacionScalarWhereWithAggregatesInput[]
    id_estado_operacion?: IntWithAggregatesFilter<"estado_operacion"> | number
    nombre?: StringWithAggregatesFilter<"estado_operacion"> | string
  }

  export type inventario_movimientoWhereInput = {
    AND?: inventario_movimientoWhereInput | inventario_movimientoWhereInput[]
    OR?: inventario_movimientoWhereInput[]
    NOT?: inventario_movimientoWhereInput | inventario_movimientoWhereInput[]
    id_movimiento?: IntFilter<"inventario_movimiento"> | number
    id_producto_variante?: IntFilter<"inventario_movimiento"> | number
    tipo_movimiento?: StringFilter<"inventario_movimiento"> | string
    cantidad?: IntFilter<"inventario_movimiento"> | number
    id_operacion?: IntNullableFilter<"inventario_movimiento"> | number | null
    fecha_movimiento?: DateTimeFilter<"inventario_movimiento"> | Date | string
    comentario?: StringNullableFilter<"inventario_movimiento"> | string | null
    operacion?: XOR<OperacionNullableScalarRelationFilter, operacionWhereInput> | null
    producto_variante?: XOR<Producto_varianteScalarRelationFilter, producto_varianteWhereInput>
  }

  export type inventario_movimientoOrderByWithRelationInput = {
    id_movimiento?: SortOrder
    id_producto_variante?: SortOrder
    tipo_movimiento?: SortOrder
    cantidad?: SortOrder
    id_operacion?: SortOrderInput | SortOrder
    fecha_movimiento?: SortOrder
    comentario?: SortOrderInput | SortOrder
    operacion?: operacionOrderByWithRelationInput
    producto_variante?: producto_varianteOrderByWithRelationInput
  }

  export type inventario_movimientoWhereUniqueInput = Prisma.AtLeast<{
    id_movimiento?: number
    AND?: inventario_movimientoWhereInput | inventario_movimientoWhereInput[]
    OR?: inventario_movimientoWhereInput[]
    NOT?: inventario_movimientoWhereInput | inventario_movimientoWhereInput[]
    id_producto_variante?: IntFilter<"inventario_movimiento"> | number
    tipo_movimiento?: StringFilter<"inventario_movimiento"> | string
    cantidad?: IntFilter<"inventario_movimiento"> | number
    id_operacion?: IntNullableFilter<"inventario_movimiento"> | number | null
    fecha_movimiento?: DateTimeFilter<"inventario_movimiento"> | Date | string
    comentario?: StringNullableFilter<"inventario_movimiento"> | string | null
    operacion?: XOR<OperacionNullableScalarRelationFilter, operacionWhereInput> | null
    producto_variante?: XOR<Producto_varianteScalarRelationFilter, producto_varianteWhereInput>
  }, "id_movimiento">

  export type inventario_movimientoOrderByWithAggregationInput = {
    id_movimiento?: SortOrder
    id_producto_variante?: SortOrder
    tipo_movimiento?: SortOrder
    cantidad?: SortOrder
    id_operacion?: SortOrderInput | SortOrder
    fecha_movimiento?: SortOrder
    comentario?: SortOrderInput | SortOrder
    _count?: inventario_movimientoCountOrderByAggregateInput
    _avg?: inventario_movimientoAvgOrderByAggregateInput
    _max?: inventario_movimientoMaxOrderByAggregateInput
    _min?: inventario_movimientoMinOrderByAggregateInput
    _sum?: inventario_movimientoSumOrderByAggregateInput
  }

  export type inventario_movimientoScalarWhereWithAggregatesInput = {
    AND?: inventario_movimientoScalarWhereWithAggregatesInput | inventario_movimientoScalarWhereWithAggregatesInput[]
    OR?: inventario_movimientoScalarWhereWithAggregatesInput[]
    NOT?: inventario_movimientoScalarWhereWithAggregatesInput | inventario_movimientoScalarWhereWithAggregatesInput[]
    id_movimiento?: IntWithAggregatesFilter<"inventario_movimiento"> | number
    id_producto_variante?: IntWithAggregatesFilter<"inventario_movimiento"> | number
    tipo_movimiento?: StringWithAggregatesFilter<"inventario_movimiento"> | string
    cantidad?: IntWithAggregatesFilter<"inventario_movimiento"> | number
    id_operacion?: IntNullableWithAggregatesFilter<"inventario_movimiento"> | number | null
    fecha_movimiento?: DateTimeWithAggregatesFilter<"inventario_movimiento"> | Date | string
    comentario?: StringNullableWithAggregatesFilter<"inventario_movimiento"> | string | null
  }

  export type metodo_pagoWhereInput = {
    AND?: metodo_pagoWhereInput | metodo_pagoWhereInput[]
    OR?: metodo_pagoWhereInput[]
    NOT?: metodo_pagoWhereInput | metodo_pagoWhereInput[]
    id_metodo_pago?: IntFilter<"metodo_pago"> | number
    nombre?: StringFilter<"metodo_pago"> | string
    operacion_venta?: Operacion_ventaListRelationFilter
    pago?: PagoListRelationFilter
  }

  export type metodo_pagoOrderByWithRelationInput = {
    id_metodo_pago?: SortOrder
    nombre?: SortOrder
    operacion_venta?: operacion_ventaOrderByRelationAggregateInput
    pago?: pagoOrderByRelationAggregateInput
  }

  export type metodo_pagoWhereUniqueInput = Prisma.AtLeast<{
    id_metodo_pago?: number
    nombre?: string
    AND?: metodo_pagoWhereInput | metodo_pagoWhereInput[]
    OR?: metodo_pagoWhereInput[]
    NOT?: metodo_pagoWhereInput | metodo_pagoWhereInput[]
    operacion_venta?: Operacion_ventaListRelationFilter
    pago?: PagoListRelationFilter
  }, "id_metodo_pago" | "nombre">

  export type metodo_pagoOrderByWithAggregationInput = {
    id_metodo_pago?: SortOrder
    nombre?: SortOrder
    _count?: metodo_pagoCountOrderByAggregateInput
    _avg?: metodo_pagoAvgOrderByAggregateInput
    _max?: metodo_pagoMaxOrderByAggregateInput
    _min?: metodo_pagoMinOrderByAggregateInput
    _sum?: metodo_pagoSumOrderByAggregateInput
  }

  export type metodo_pagoScalarWhereWithAggregatesInput = {
    AND?: metodo_pagoScalarWhereWithAggregatesInput | metodo_pagoScalarWhereWithAggregatesInput[]
    OR?: metodo_pagoScalarWhereWithAggregatesInput[]
    NOT?: metodo_pagoScalarWhereWithAggregatesInput | metodo_pagoScalarWhereWithAggregatesInput[]
    id_metodo_pago?: IntWithAggregatesFilter<"metodo_pago"> | number
    nombre?: StringWithAggregatesFilter<"metodo_pago"> | string
  }

  export type operacionWhereInput = {
    AND?: operacionWhereInput | operacionWhereInput[]
    OR?: operacionWhereInput[]
    NOT?: operacionWhereInput | operacionWhereInput[]
    id_operacion?: IntFilter<"operacion"> | number
    id_tipo_operacion?: IntFilter<"operacion"> | number
    id_estado_operacion?: IntFilter<"operacion"> | number
    fecha_creacion?: DateTimeFilter<"operacion"> | Date | string
    fecha_actualizacion?: DateTimeFilter<"operacion"> | Date | string
    inventario_movimiento?: Inventario_movimientoListRelationFilter
    estado_operacion?: XOR<Estado_operacionScalarRelationFilter, estado_operacionWhereInput>
    tipo_operacion?: XOR<Tipo_operacionScalarRelationFilter, tipo_operacionWhereInput>
    operacion_venta?: Operacion_ventaListRelationFilter
  }

  export type operacionOrderByWithRelationInput = {
    id_operacion?: SortOrder
    id_tipo_operacion?: SortOrder
    id_estado_operacion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    inventario_movimiento?: inventario_movimientoOrderByRelationAggregateInput
    estado_operacion?: estado_operacionOrderByWithRelationInput
    tipo_operacion?: tipo_operacionOrderByWithRelationInput
    operacion_venta?: operacion_ventaOrderByRelationAggregateInput
  }

  export type operacionWhereUniqueInput = Prisma.AtLeast<{
    id_operacion?: number
    AND?: operacionWhereInput | operacionWhereInput[]
    OR?: operacionWhereInput[]
    NOT?: operacionWhereInput | operacionWhereInput[]
    id_tipo_operacion?: IntFilter<"operacion"> | number
    id_estado_operacion?: IntFilter<"operacion"> | number
    fecha_creacion?: DateTimeFilter<"operacion"> | Date | string
    fecha_actualizacion?: DateTimeFilter<"operacion"> | Date | string
    inventario_movimiento?: Inventario_movimientoListRelationFilter
    estado_operacion?: XOR<Estado_operacionScalarRelationFilter, estado_operacionWhereInput>
    tipo_operacion?: XOR<Tipo_operacionScalarRelationFilter, tipo_operacionWhereInput>
    operacion_venta?: Operacion_ventaListRelationFilter
  }, "id_operacion">

  export type operacionOrderByWithAggregationInput = {
    id_operacion?: SortOrder
    id_tipo_operacion?: SortOrder
    id_estado_operacion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    _count?: operacionCountOrderByAggregateInput
    _avg?: operacionAvgOrderByAggregateInput
    _max?: operacionMaxOrderByAggregateInput
    _min?: operacionMinOrderByAggregateInput
    _sum?: operacionSumOrderByAggregateInput
  }

  export type operacionScalarWhereWithAggregatesInput = {
    AND?: operacionScalarWhereWithAggregatesInput | operacionScalarWhereWithAggregatesInput[]
    OR?: operacionScalarWhereWithAggregatesInput[]
    NOT?: operacionScalarWhereWithAggregatesInput | operacionScalarWhereWithAggregatesInput[]
    id_operacion?: IntWithAggregatesFilter<"operacion"> | number
    id_tipo_operacion?: IntWithAggregatesFilter<"operacion"> | number
    id_estado_operacion?: IntWithAggregatesFilter<"operacion"> | number
    fecha_creacion?: DateTimeWithAggregatesFilter<"operacion"> | Date | string
    fecha_actualizacion?: DateTimeWithAggregatesFilter<"operacion"> | Date | string
  }

  export type operacion_ventaWhereInput = {
    AND?: operacion_ventaWhereInput | operacion_ventaWhereInput[]
    OR?: operacion_ventaWhereInput[]
    NOT?: operacion_ventaWhereInput | operacion_ventaWhereInput[]
    id_venta?: IntFilter<"operacion_venta"> | number
    id_operacion?: IntFilter<"operacion_venta"> | number
    id_cliente?: IntFilter<"operacion_venta"> | number
    id_metodo_pago?: IntFilter<"operacion_venta"> | number
    total?: DecimalFilter<"operacion_venta"> | Decimal | DecimalJsLike | number | string
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
    metodo_pago?: XOR<Metodo_pagoScalarRelationFilter, metodo_pagoWhereInput>
    operacion?: XOR<OperacionScalarRelationFilter, operacionWhereInput>
    pago?: PagoListRelationFilter
    venta_detalle?: Venta_detalleListRelationFilter
  }

  export type operacion_ventaOrderByWithRelationInput = {
    id_venta?: SortOrder
    id_operacion?: SortOrder
    id_cliente?: SortOrder
    id_metodo_pago?: SortOrder
    total?: SortOrder
    cliente?: clienteOrderByWithRelationInput
    metodo_pago?: metodo_pagoOrderByWithRelationInput
    operacion?: operacionOrderByWithRelationInput
    pago?: pagoOrderByRelationAggregateInput
    venta_detalle?: venta_detalleOrderByRelationAggregateInput
  }

  export type operacion_ventaWhereUniqueInput = Prisma.AtLeast<{
    id_venta?: number
    AND?: operacion_ventaWhereInput | operacion_ventaWhereInput[]
    OR?: operacion_ventaWhereInput[]
    NOT?: operacion_ventaWhereInput | operacion_ventaWhereInput[]
    id_operacion?: IntFilter<"operacion_venta"> | number
    id_cliente?: IntFilter<"operacion_venta"> | number
    id_metodo_pago?: IntFilter<"operacion_venta"> | number
    total?: DecimalFilter<"operacion_venta"> | Decimal | DecimalJsLike | number | string
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
    metodo_pago?: XOR<Metodo_pagoScalarRelationFilter, metodo_pagoWhereInput>
    operacion?: XOR<OperacionScalarRelationFilter, operacionWhereInput>
    pago?: PagoListRelationFilter
    venta_detalle?: Venta_detalleListRelationFilter
  }, "id_venta">

  export type operacion_ventaOrderByWithAggregationInput = {
    id_venta?: SortOrder
    id_operacion?: SortOrder
    id_cliente?: SortOrder
    id_metodo_pago?: SortOrder
    total?: SortOrder
    _count?: operacion_ventaCountOrderByAggregateInput
    _avg?: operacion_ventaAvgOrderByAggregateInput
    _max?: operacion_ventaMaxOrderByAggregateInput
    _min?: operacion_ventaMinOrderByAggregateInput
    _sum?: operacion_ventaSumOrderByAggregateInput
  }

  export type operacion_ventaScalarWhereWithAggregatesInput = {
    AND?: operacion_ventaScalarWhereWithAggregatesInput | operacion_ventaScalarWhereWithAggregatesInput[]
    OR?: operacion_ventaScalarWhereWithAggregatesInput[]
    NOT?: operacion_ventaScalarWhereWithAggregatesInput | operacion_ventaScalarWhereWithAggregatesInput[]
    id_venta?: IntWithAggregatesFilter<"operacion_venta"> | number
    id_operacion?: IntWithAggregatesFilter<"operacion_venta"> | number
    id_cliente?: IntWithAggregatesFilter<"operacion_venta"> | number
    id_metodo_pago?: IntWithAggregatesFilter<"operacion_venta"> | number
    total?: DecimalWithAggregatesFilter<"operacion_venta"> | Decimal | DecimalJsLike | number | string
  }

  export type pagoWhereInput = {
    AND?: pagoWhereInput | pagoWhereInput[]
    OR?: pagoWhereInput[]
    NOT?: pagoWhereInput | pagoWhereInput[]
    id_pago?: IntFilter<"pago"> | number
    id_venta?: IntFilter<"pago"> | number
    id_metodo_pago?: IntFilter<"pago"> | number
    monto_pagado?: DecimalFilter<"pago"> | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeFilter<"pago"> | Date | string
    metodo_pago?: XOR<Metodo_pagoScalarRelationFilter, metodo_pagoWhereInput>
    operacion_venta?: XOR<Operacion_ventaScalarRelationFilter, operacion_ventaWhereInput>
  }

  export type pagoOrderByWithRelationInput = {
    id_pago?: SortOrder
    id_venta?: SortOrder
    id_metodo_pago?: SortOrder
    monto_pagado?: SortOrder
    fecha_creacion?: SortOrder
    metodo_pago?: metodo_pagoOrderByWithRelationInput
    operacion_venta?: operacion_ventaOrderByWithRelationInput
  }

  export type pagoWhereUniqueInput = Prisma.AtLeast<{
    id_pago?: number
    AND?: pagoWhereInput | pagoWhereInput[]
    OR?: pagoWhereInput[]
    NOT?: pagoWhereInput | pagoWhereInput[]
    id_venta?: IntFilter<"pago"> | number
    id_metodo_pago?: IntFilter<"pago"> | number
    monto_pagado?: DecimalFilter<"pago"> | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeFilter<"pago"> | Date | string
    metodo_pago?: XOR<Metodo_pagoScalarRelationFilter, metodo_pagoWhereInput>
    operacion_venta?: XOR<Operacion_ventaScalarRelationFilter, operacion_ventaWhereInput>
  }, "id_pago">

  export type pagoOrderByWithAggregationInput = {
    id_pago?: SortOrder
    id_venta?: SortOrder
    id_metodo_pago?: SortOrder
    monto_pagado?: SortOrder
    fecha_creacion?: SortOrder
    _count?: pagoCountOrderByAggregateInput
    _avg?: pagoAvgOrderByAggregateInput
    _max?: pagoMaxOrderByAggregateInput
    _min?: pagoMinOrderByAggregateInput
    _sum?: pagoSumOrderByAggregateInput
  }

  export type pagoScalarWhereWithAggregatesInput = {
    AND?: pagoScalarWhereWithAggregatesInput | pagoScalarWhereWithAggregatesInput[]
    OR?: pagoScalarWhereWithAggregatesInput[]
    NOT?: pagoScalarWhereWithAggregatesInput | pagoScalarWhereWithAggregatesInput[]
    id_pago?: IntWithAggregatesFilter<"pago"> | number
    id_venta?: IntWithAggregatesFilter<"pago"> | number
    id_metodo_pago?: IntWithAggregatesFilter<"pago"> | number
    monto_pagado?: DecimalWithAggregatesFilter<"pago"> | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeWithAggregatesFilter<"pago"> | Date | string
  }

  export type productoWhereInput = {
    AND?: productoWhereInput | productoWhereInput[]
    OR?: productoWhereInput[]
    NOT?: productoWhereInput | productoWhereInput[]
    id_producto?: IntFilter<"producto"> | number
    id_categoria?: IntFilter<"producto"> | number
    nombre?: StringFilter<"producto"> | string
    costo?: DecimalFilter<"producto"> | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFilter<"producto"> | Decimal | DecimalJsLike | number | string
    categoria_producto?: XOR<Categoria_productoScalarRelationFilter, categoria_productoWhereInput>
    producto_variante?: Producto_varianteListRelationFilter
  }

  export type productoOrderByWithRelationInput = {
    id_producto?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    costo?: SortOrder
    precio_unitario?: SortOrder
    categoria_producto?: categoria_productoOrderByWithRelationInput
    producto_variante?: producto_varianteOrderByRelationAggregateInput
  }

  export type productoWhereUniqueInput = Prisma.AtLeast<{
    id_producto?: number
    AND?: productoWhereInput | productoWhereInput[]
    OR?: productoWhereInput[]
    NOT?: productoWhereInput | productoWhereInput[]
    id_categoria?: IntFilter<"producto"> | number
    nombre?: StringFilter<"producto"> | string
    costo?: DecimalFilter<"producto"> | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFilter<"producto"> | Decimal | DecimalJsLike | number | string
    categoria_producto?: XOR<Categoria_productoScalarRelationFilter, categoria_productoWhereInput>
    producto_variante?: Producto_varianteListRelationFilter
  }, "id_producto">

  export type productoOrderByWithAggregationInput = {
    id_producto?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    costo?: SortOrder
    precio_unitario?: SortOrder
    _count?: productoCountOrderByAggregateInput
    _avg?: productoAvgOrderByAggregateInput
    _max?: productoMaxOrderByAggregateInput
    _min?: productoMinOrderByAggregateInput
    _sum?: productoSumOrderByAggregateInput
  }

  export type productoScalarWhereWithAggregatesInput = {
    AND?: productoScalarWhereWithAggregatesInput | productoScalarWhereWithAggregatesInput[]
    OR?: productoScalarWhereWithAggregatesInput[]
    NOT?: productoScalarWhereWithAggregatesInput | productoScalarWhereWithAggregatesInput[]
    id_producto?: IntWithAggregatesFilter<"producto"> | number
    id_categoria?: IntWithAggregatesFilter<"producto"> | number
    nombre?: StringWithAggregatesFilter<"producto"> | string
    costo?: DecimalWithAggregatesFilter<"producto"> | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalWithAggregatesFilter<"producto"> | Decimal | DecimalJsLike | number | string
  }

  export type producto_varianteWhereInput = {
    AND?: producto_varianteWhereInput | producto_varianteWhereInput[]
    OR?: producto_varianteWhereInput[]
    NOT?: producto_varianteWhereInput | producto_varianteWhereInput[]
    id_producto_variante?: IntFilter<"producto_variante"> | number
    id_producto?: IntFilter<"producto_variante"> | number
    talle?: StringFilter<"producto_variante"> | string
    color?: StringFilter<"producto_variante"> | string
    stock?: IntFilter<"producto_variante"> | number
    inventario_movimiento?: Inventario_movimientoListRelationFilter
    producto?: XOR<ProductoScalarRelationFilter, productoWhereInput>
    venta_detalle?: Venta_detalleListRelationFilter
  }

  export type producto_varianteOrderByWithRelationInput = {
    id_producto_variante?: SortOrder
    id_producto?: SortOrder
    talle?: SortOrder
    color?: SortOrder
    stock?: SortOrder
    inventario_movimiento?: inventario_movimientoOrderByRelationAggregateInput
    producto?: productoOrderByWithRelationInput
    venta_detalle?: venta_detalleOrderByRelationAggregateInput
  }

  export type producto_varianteWhereUniqueInput = Prisma.AtLeast<{
    id_producto_variante?: number
    id_producto_talle_color?: producto_varianteId_productoTalleColorCompoundUniqueInput
    AND?: producto_varianteWhereInput | producto_varianteWhereInput[]
    OR?: producto_varianteWhereInput[]
    NOT?: producto_varianteWhereInput | producto_varianteWhereInput[]
    id_producto?: IntFilter<"producto_variante"> | number
    talle?: StringFilter<"producto_variante"> | string
    color?: StringFilter<"producto_variante"> | string
    stock?: IntFilter<"producto_variante"> | number
    inventario_movimiento?: Inventario_movimientoListRelationFilter
    producto?: XOR<ProductoScalarRelationFilter, productoWhereInput>
    venta_detalle?: Venta_detalleListRelationFilter
  }, "id_producto_variante" | "id_producto_talle_color">

  export type producto_varianteOrderByWithAggregationInput = {
    id_producto_variante?: SortOrder
    id_producto?: SortOrder
    talle?: SortOrder
    color?: SortOrder
    stock?: SortOrder
    _count?: producto_varianteCountOrderByAggregateInput
    _avg?: producto_varianteAvgOrderByAggregateInput
    _max?: producto_varianteMaxOrderByAggregateInput
    _min?: producto_varianteMinOrderByAggregateInput
    _sum?: producto_varianteSumOrderByAggregateInput
  }

  export type producto_varianteScalarWhereWithAggregatesInput = {
    AND?: producto_varianteScalarWhereWithAggregatesInput | producto_varianteScalarWhereWithAggregatesInput[]
    OR?: producto_varianteScalarWhereWithAggregatesInput[]
    NOT?: producto_varianteScalarWhereWithAggregatesInput | producto_varianteScalarWhereWithAggregatesInput[]
    id_producto_variante?: IntWithAggregatesFilter<"producto_variante"> | number
    id_producto?: IntWithAggregatesFilter<"producto_variante"> | number
    talle?: StringWithAggregatesFilter<"producto_variante"> | string
    color?: StringWithAggregatesFilter<"producto_variante"> | string
    stock?: IntWithAggregatesFilter<"producto_variante"> | number
  }

  export type tipo_operacionWhereInput = {
    AND?: tipo_operacionWhereInput | tipo_operacionWhereInput[]
    OR?: tipo_operacionWhereInput[]
    NOT?: tipo_operacionWhereInput | tipo_operacionWhereInput[]
    id_tipo_operacion?: IntFilter<"tipo_operacion"> | number
    nombre?: StringFilter<"tipo_operacion"> | string
    operacion?: OperacionListRelationFilter
  }

  export type tipo_operacionOrderByWithRelationInput = {
    id_tipo_operacion?: SortOrder
    nombre?: SortOrder
    operacion?: operacionOrderByRelationAggregateInput
  }

  export type tipo_operacionWhereUniqueInput = Prisma.AtLeast<{
    id_tipo_operacion?: number
    nombre?: string
    AND?: tipo_operacionWhereInput | tipo_operacionWhereInput[]
    OR?: tipo_operacionWhereInput[]
    NOT?: tipo_operacionWhereInput | tipo_operacionWhereInput[]
    operacion?: OperacionListRelationFilter
  }, "id_tipo_operacion" | "nombre">

  export type tipo_operacionOrderByWithAggregationInput = {
    id_tipo_operacion?: SortOrder
    nombre?: SortOrder
    _count?: tipo_operacionCountOrderByAggregateInput
    _avg?: tipo_operacionAvgOrderByAggregateInput
    _max?: tipo_operacionMaxOrderByAggregateInput
    _min?: tipo_operacionMinOrderByAggregateInput
    _sum?: tipo_operacionSumOrderByAggregateInput
  }

  export type tipo_operacionScalarWhereWithAggregatesInput = {
    AND?: tipo_operacionScalarWhereWithAggregatesInput | tipo_operacionScalarWhereWithAggregatesInput[]
    OR?: tipo_operacionScalarWhereWithAggregatesInput[]
    NOT?: tipo_operacionScalarWhereWithAggregatesInput | tipo_operacionScalarWhereWithAggregatesInput[]
    id_tipo_operacion?: IntWithAggregatesFilter<"tipo_operacion"> | number
    nombre?: StringWithAggregatesFilter<"tipo_operacion"> | string
  }

  export type venta_detalleWhereInput = {
    AND?: venta_detalleWhereInput | venta_detalleWhereInput[]
    OR?: venta_detalleWhereInput[]
    NOT?: venta_detalleWhereInput | venta_detalleWhereInput[]
    id_venta?: IntFilter<"venta_detalle"> | number
    id_producto_variante?: IntFilter<"venta_detalle"> | number
    cantidad?: IntFilter<"venta_detalle"> | number
    precio_unitario?: DecimalFilter<"venta_detalle"> | Decimal | DecimalJsLike | number | string
    producto_variante?: XOR<Producto_varianteScalarRelationFilter, producto_varianteWhereInput>
    operacion_venta?: XOR<Operacion_ventaScalarRelationFilter, operacion_ventaWhereInput>
  }

  export type venta_detalleOrderByWithRelationInput = {
    id_venta?: SortOrder
    id_producto_variante?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    producto_variante?: producto_varianteOrderByWithRelationInput
    operacion_venta?: operacion_ventaOrderByWithRelationInput
  }

  export type venta_detalleWhereUniqueInput = Prisma.AtLeast<{
    id_venta_id_producto_variante?: venta_detalleId_ventaId_producto_varianteCompoundUniqueInput
    AND?: venta_detalleWhereInput | venta_detalleWhereInput[]
    OR?: venta_detalleWhereInput[]
    NOT?: venta_detalleWhereInput | venta_detalleWhereInput[]
    id_venta?: IntFilter<"venta_detalle"> | number
    id_producto_variante?: IntFilter<"venta_detalle"> | number
    cantidad?: IntFilter<"venta_detalle"> | number
    precio_unitario?: DecimalFilter<"venta_detalle"> | Decimal | DecimalJsLike | number | string
    producto_variante?: XOR<Producto_varianteScalarRelationFilter, producto_varianteWhereInput>
    operacion_venta?: XOR<Operacion_ventaScalarRelationFilter, operacion_ventaWhereInput>
  }, "id_venta_id_producto_variante">

  export type venta_detalleOrderByWithAggregationInput = {
    id_venta?: SortOrder
    id_producto_variante?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    _count?: venta_detalleCountOrderByAggregateInput
    _avg?: venta_detalleAvgOrderByAggregateInput
    _max?: venta_detalleMaxOrderByAggregateInput
    _min?: venta_detalleMinOrderByAggregateInput
    _sum?: venta_detalleSumOrderByAggregateInput
  }

  export type venta_detalleScalarWhereWithAggregatesInput = {
    AND?: venta_detalleScalarWhereWithAggregatesInput | venta_detalleScalarWhereWithAggregatesInput[]
    OR?: venta_detalleScalarWhereWithAggregatesInput[]
    NOT?: venta_detalleScalarWhereWithAggregatesInput | venta_detalleScalarWhereWithAggregatesInput[]
    id_venta?: IntWithAggregatesFilter<"venta_detalle"> | number
    id_producto_variante?: IntWithAggregatesFilter<"venta_detalle"> | number
    cantidad?: IntWithAggregatesFilter<"venta_detalle"> | number
    precio_unitario?: DecimalWithAggregatesFilter<"venta_detalle"> | Decimal | DecimalJsLike | number | string
  }

  export type categoria_productoCreateInput = {
    nombre: string
    producto?: productoCreateNestedManyWithoutCategoria_productoInput
  }

  export type categoria_productoUncheckedCreateInput = {
    id_categoria_producto?: number
    nombre: string
    producto?: productoUncheckedCreateNestedManyWithoutCategoria_productoInput
  }

  export type categoria_productoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    producto?: productoUpdateManyWithoutCategoria_productoNestedInput
  }

  export type categoria_productoUncheckedUpdateInput = {
    id_categoria_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    producto?: productoUncheckedUpdateManyWithoutCategoria_productoNestedInput
  }

  export type categoria_productoCreateManyInput = {
    id_categoria_producto?: number
    nombre: string
  }

  export type categoria_productoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type categoria_productoUncheckedUpdateManyInput = {
    id_categoria_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type clienteCreateInput = {
    nombre: string
    apellido: string
    celular?: string | null
    operacion_venta?: operacion_ventaCreateNestedManyWithoutClienteInput
  }

  export type clienteUncheckedCreateInput = {
    id_cliente?: number
    nombre: string
    apellido: string
    celular?: string | null
    operacion_venta?: operacion_ventaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type clienteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    operacion_venta?: operacion_ventaUpdateManyWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    operacion_venta?: operacion_ventaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type clienteCreateManyInput = {
    id_cliente?: number
    nombre: string
    apellido: string
    celular?: string | null
  }

  export type clienteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clienteUncheckedUpdateManyInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type estado_operacionCreateInput = {
    nombre: string
    operacion?: operacionCreateNestedManyWithoutEstado_operacionInput
  }

  export type estado_operacionUncheckedCreateInput = {
    id_estado_operacion?: number
    nombre: string
    operacion?: operacionUncheckedCreateNestedManyWithoutEstado_operacionInput
  }

  export type estado_operacionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    operacion?: operacionUpdateManyWithoutEstado_operacionNestedInput
  }

  export type estado_operacionUncheckedUpdateInput = {
    id_estado_operacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    operacion?: operacionUncheckedUpdateManyWithoutEstado_operacionNestedInput
  }

  export type estado_operacionCreateManyInput = {
    id_estado_operacion?: number
    nombre: string
  }

  export type estado_operacionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type estado_operacionUncheckedUpdateManyInput = {
    id_estado_operacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type inventario_movimientoCreateInput = {
    tipo_movimiento: string
    cantidad: number
    fecha_movimiento?: Date | string
    comentario?: string | null
    operacion?: operacionCreateNestedOneWithoutInventario_movimientoInput
    producto_variante: producto_varianteCreateNestedOneWithoutInventario_movimientoInput
  }

  export type inventario_movimientoUncheckedCreateInput = {
    id_movimiento?: number
    id_producto_variante: number
    tipo_movimiento: string
    cantidad: number
    id_operacion?: number | null
    fecha_movimiento?: Date | string
    comentario?: string | null
  }

  export type inventario_movimientoUpdateInput = {
    tipo_movimiento?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha_movimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    operacion?: operacionUpdateOneWithoutInventario_movimientoNestedInput
    producto_variante?: producto_varianteUpdateOneRequiredWithoutInventario_movimientoNestedInput
  }

  export type inventario_movimientoUncheckedUpdateInput = {
    id_movimiento?: IntFieldUpdateOperationsInput | number
    id_producto_variante?: IntFieldUpdateOperationsInput | number
    tipo_movimiento?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    id_operacion?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_movimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inventario_movimientoCreateManyInput = {
    id_movimiento?: number
    id_producto_variante: number
    tipo_movimiento: string
    cantidad: number
    id_operacion?: number | null
    fecha_movimiento?: Date | string
    comentario?: string | null
  }

  export type inventario_movimientoUpdateManyMutationInput = {
    tipo_movimiento?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha_movimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inventario_movimientoUncheckedUpdateManyInput = {
    id_movimiento?: IntFieldUpdateOperationsInput | number
    id_producto_variante?: IntFieldUpdateOperationsInput | number
    tipo_movimiento?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    id_operacion?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_movimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type metodo_pagoCreateInput = {
    nombre: string
    operacion_venta?: operacion_ventaCreateNestedManyWithoutMetodo_pagoInput
    pago?: pagoCreateNestedManyWithoutMetodo_pagoInput
  }

  export type metodo_pagoUncheckedCreateInput = {
    id_metodo_pago?: number
    nombre: string
    operacion_venta?: operacion_ventaUncheckedCreateNestedManyWithoutMetodo_pagoInput
    pago?: pagoUncheckedCreateNestedManyWithoutMetodo_pagoInput
  }

  export type metodo_pagoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    operacion_venta?: operacion_ventaUpdateManyWithoutMetodo_pagoNestedInput
    pago?: pagoUpdateManyWithoutMetodo_pagoNestedInput
  }

  export type metodo_pagoUncheckedUpdateInput = {
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    operacion_venta?: operacion_ventaUncheckedUpdateManyWithoutMetodo_pagoNestedInput
    pago?: pagoUncheckedUpdateManyWithoutMetodo_pagoNestedInput
  }

  export type metodo_pagoCreateManyInput = {
    id_metodo_pago?: number
    nombre: string
  }

  export type metodo_pagoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type metodo_pagoUncheckedUpdateManyInput = {
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type operacionCreateInput = {
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string
    inventario_movimiento?: inventario_movimientoCreateNestedManyWithoutOperacionInput
    estado_operacion: estado_operacionCreateNestedOneWithoutOperacionInput
    tipo_operacion: tipo_operacionCreateNestedOneWithoutOperacionInput
    operacion_venta?: operacion_ventaCreateNestedManyWithoutOperacionInput
  }

  export type operacionUncheckedCreateInput = {
    id_operacion?: number
    id_tipo_operacion: number
    id_estado_operacion: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string
    inventario_movimiento?: inventario_movimientoUncheckedCreateNestedManyWithoutOperacionInput
    operacion_venta?: operacion_ventaUncheckedCreateNestedManyWithoutOperacionInput
  }

  export type operacionUpdateInput = {
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    inventario_movimiento?: inventario_movimientoUpdateManyWithoutOperacionNestedInput
    estado_operacion?: estado_operacionUpdateOneRequiredWithoutOperacionNestedInput
    tipo_operacion?: tipo_operacionUpdateOneRequiredWithoutOperacionNestedInput
    operacion_venta?: operacion_ventaUpdateManyWithoutOperacionNestedInput
  }

  export type operacionUncheckedUpdateInput = {
    id_operacion?: IntFieldUpdateOperationsInput | number
    id_tipo_operacion?: IntFieldUpdateOperationsInput | number
    id_estado_operacion?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    inventario_movimiento?: inventario_movimientoUncheckedUpdateManyWithoutOperacionNestedInput
    operacion_venta?: operacion_ventaUncheckedUpdateManyWithoutOperacionNestedInput
  }

  export type operacionCreateManyInput = {
    id_operacion?: number
    id_tipo_operacion: number
    id_estado_operacion: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string
  }

  export type operacionUpdateManyMutationInput = {
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type operacionUncheckedUpdateManyInput = {
    id_operacion?: IntFieldUpdateOperationsInput | number
    id_tipo_operacion?: IntFieldUpdateOperationsInput | number
    id_estado_operacion?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type operacion_ventaCreateInput = {
    total: Decimal | DecimalJsLike | number | string
    cliente: clienteCreateNestedOneWithoutOperacion_ventaInput
    metodo_pago: metodo_pagoCreateNestedOneWithoutOperacion_ventaInput
    operacion: operacionCreateNestedOneWithoutOperacion_ventaInput
    pago?: pagoCreateNestedManyWithoutOperacion_ventaInput
    venta_detalle?: venta_detalleCreateNestedManyWithoutOperacion_ventaInput
  }

  export type operacion_ventaUncheckedCreateInput = {
    id_venta?: number
    id_operacion: number
    id_cliente: number
    id_metodo_pago: number
    total: Decimal | DecimalJsLike | number | string
    pago?: pagoUncheckedCreateNestedManyWithoutOperacion_ventaInput
    venta_detalle?: venta_detalleUncheckedCreateNestedManyWithoutOperacion_ventaInput
  }

  export type operacion_ventaUpdateInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cliente?: clienteUpdateOneRequiredWithoutOperacion_ventaNestedInput
    metodo_pago?: metodo_pagoUpdateOneRequiredWithoutOperacion_ventaNestedInput
    operacion?: operacionUpdateOneRequiredWithoutOperacion_ventaNestedInput
    pago?: pagoUpdateManyWithoutOperacion_ventaNestedInput
    venta_detalle?: venta_detalleUpdateManyWithoutOperacion_ventaNestedInput
  }

  export type operacion_ventaUncheckedUpdateInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_operacion?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pago?: pagoUncheckedUpdateManyWithoutOperacion_ventaNestedInput
    venta_detalle?: venta_detalleUncheckedUpdateManyWithoutOperacion_ventaNestedInput
  }

  export type operacion_ventaCreateManyInput = {
    id_venta?: number
    id_operacion: number
    id_cliente: number
    id_metodo_pago: number
    total: Decimal | DecimalJsLike | number | string
  }

  export type operacion_ventaUpdateManyMutationInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type operacion_ventaUncheckedUpdateManyInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_operacion?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type pagoCreateInput = {
    monto_pagado: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string
    metodo_pago: metodo_pagoCreateNestedOneWithoutPagoInput
    operacion_venta: operacion_ventaCreateNestedOneWithoutPagoInput
  }

  export type pagoUncheckedCreateInput = {
    id_pago?: number
    id_venta: number
    id_metodo_pago: number
    monto_pagado: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string
  }

  export type pagoUpdateInput = {
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    metodo_pago?: metodo_pagoUpdateOneRequiredWithoutPagoNestedInput
    operacion_venta?: operacion_ventaUpdateOneRequiredWithoutPagoNestedInput
  }

  export type pagoUncheckedUpdateInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    id_venta?: IntFieldUpdateOperationsInput | number
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagoCreateManyInput = {
    id_pago?: number
    id_venta: number
    id_metodo_pago: number
    monto_pagado: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string
  }

  export type pagoUpdateManyMutationInput = {
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagoUncheckedUpdateManyInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    id_venta?: IntFieldUpdateOperationsInput | number
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productoCreateInput = {
    nombre: string
    costo: Decimal | DecimalJsLike | number | string
    precio_unitario: Decimal | DecimalJsLike | number | string
    categoria_producto: categoria_productoCreateNestedOneWithoutProductoInput
    producto_variante?: producto_varianteCreateNestedManyWithoutProductoInput
  }

  export type productoUncheckedCreateInput = {
    id_producto?: number
    id_categoria: number
    nombre: string
    costo: Decimal | DecimalJsLike | number | string
    precio_unitario: Decimal | DecimalJsLike | number | string
    producto_variante?: producto_varianteUncheckedCreateNestedManyWithoutProductoInput
  }

  export type productoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoria_producto?: categoria_productoUpdateOneRequiredWithoutProductoNestedInput
    producto_variante?: producto_varianteUpdateManyWithoutProductoNestedInput
  }

  export type productoUncheckedUpdateInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producto_variante?: producto_varianteUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type productoCreateManyInput = {
    id_producto?: number
    id_categoria: number
    nombre: string
    costo: Decimal | DecimalJsLike | number | string
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type productoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type productoUncheckedUpdateManyInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type producto_varianteCreateInput = {
    talle: string
    color: string
    stock: number
    inventario_movimiento?: inventario_movimientoCreateNestedManyWithoutProducto_varianteInput
    producto: productoCreateNestedOneWithoutProducto_varianteInput
    venta_detalle?: venta_detalleCreateNestedManyWithoutProducto_varianteInput
  }

  export type producto_varianteUncheckedCreateInput = {
    id_producto_variante?: number
    id_producto: number
    talle: string
    color: string
    stock: number
    inventario_movimiento?: inventario_movimientoUncheckedCreateNestedManyWithoutProducto_varianteInput
    venta_detalle?: venta_detalleUncheckedCreateNestedManyWithoutProducto_varianteInput
  }

  export type producto_varianteUpdateInput = {
    talle?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    inventario_movimiento?: inventario_movimientoUpdateManyWithoutProducto_varianteNestedInput
    producto?: productoUpdateOneRequiredWithoutProducto_varianteNestedInput
    venta_detalle?: venta_detalleUpdateManyWithoutProducto_varianteNestedInput
  }

  export type producto_varianteUncheckedUpdateInput = {
    id_producto_variante?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    talle?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    inventario_movimiento?: inventario_movimientoUncheckedUpdateManyWithoutProducto_varianteNestedInput
    venta_detalle?: venta_detalleUncheckedUpdateManyWithoutProducto_varianteNestedInput
  }

  export type producto_varianteCreateManyInput = {
    id_producto_variante?: number
    id_producto: number
    talle: string
    color: string
    stock: number
  }

  export type producto_varianteUpdateManyMutationInput = {
    talle?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type producto_varianteUncheckedUpdateManyInput = {
    id_producto_variante?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    talle?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type tipo_operacionCreateInput = {
    nombre: string
    operacion?: operacionCreateNestedManyWithoutTipo_operacionInput
  }

  export type tipo_operacionUncheckedCreateInput = {
    id_tipo_operacion?: number
    nombre: string
    operacion?: operacionUncheckedCreateNestedManyWithoutTipo_operacionInput
  }

  export type tipo_operacionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    operacion?: operacionUpdateManyWithoutTipo_operacionNestedInput
  }

  export type tipo_operacionUncheckedUpdateInput = {
    id_tipo_operacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    operacion?: operacionUncheckedUpdateManyWithoutTipo_operacionNestedInput
  }

  export type tipo_operacionCreateManyInput = {
    id_tipo_operacion?: number
    nombre: string
  }

  export type tipo_operacionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_operacionUncheckedUpdateManyInput = {
    id_tipo_operacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type venta_detalleCreateInput = {
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    producto_variante: producto_varianteCreateNestedOneWithoutVenta_detalleInput
    operacion_venta: operacion_ventaCreateNestedOneWithoutVenta_detalleInput
  }

  export type venta_detalleUncheckedCreateInput = {
    id_venta: number
    id_producto_variante: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type venta_detalleUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producto_variante?: producto_varianteUpdateOneRequiredWithoutVenta_detalleNestedInput
    operacion_venta?: operacion_ventaUpdateOneRequiredWithoutVenta_detalleNestedInput
  }

  export type venta_detalleUncheckedUpdateInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_producto_variante?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type venta_detalleCreateManyInput = {
    id_venta: number
    id_producto_variante: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type venta_detalleUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type venta_detalleUncheckedUpdateManyInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_producto_variante?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProductoListRelationFilter = {
    every?: productoWhereInput
    some?: productoWhereInput
    none?: productoWhereInput
  }

  export type productoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoria_productoCountOrderByAggregateInput = {
    id_categoria_producto?: SortOrder
    nombre?: SortOrder
  }

  export type categoria_productoAvgOrderByAggregateInput = {
    id_categoria_producto?: SortOrder
  }

  export type categoria_productoMaxOrderByAggregateInput = {
    id_categoria_producto?: SortOrder
    nombre?: SortOrder
  }

  export type categoria_productoMinOrderByAggregateInput = {
    id_categoria_producto?: SortOrder
    nombre?: SortOrder
  }

  export type categoria_productoSumOrderByAggregateInput = {
    id_categoria_producto?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Operacion_ventaListRelationFilter = {
    every?: operacion_ventaWhereInput
    some?: operacion_ventaWhereInput
    none?: operacion_ventaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type operacion_ventaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clienteNombreApellidoCelularCompoundUniqueInput = {
    nombre: string
    apellido: string
    celular: string
  }

  export type clienteCountOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    celular?: SortOrder
  }

  export type clienteAvgOrderByAggregateInput = {
    id_cliente?: SortOrder
  }

  export type clienteMaxOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    celular?: SortOrder
  }

  export type clienteMinOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    celular?: SortOrder
  }

  export type clienteSumOrderByAggregateInput = {
    id_cliente?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type OperacionListRelationFilter = {
    every?: operacionWhereInput
    some?: operacionWhereInput
    none?: operacionWhereInput
  }

  export type operacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type estado_operacionCountOrderByAggregateInput = {
    id_estado_operacion?: SortOrder
    nombre?: SortOrder
  }

  export type estado_operacionAvgOrderByAggregateInput = {
    id_estado_operacion?: SortOrder
  }

  export type estado_operacionMaxOrderByAggregateInput = {
    id_estado_operacion?: SortOrder
    nombre?: SortOrder
  }

  export type estado_operacionMinOrderByAggregateInput = {
    id_estado_operacion?: SortOrder
    nombre?: SortOrder
  }

  export type estado_operacionSumOrderByAggregateInput = {
    id_estado_operacion?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OperacionNullableScalarRelationFilter = {
    is?: operacionWhereInput | null
    isNot?: operacionWhereInput | null
  }

  export type Producto_varianteScalarRelationFilter = {
    is?: producto_varianteWhereInput
    isNot?: producto_varianteWhereInput
  }

  export type inventario_movimientoCountOrderByAggregateInput = {
    id_movimiento?: SortOrder
    id_producto_variante?: SortOrder
    tipo_movimiento?: SortOrder
    cantidad?: SortOrder
    id_operacion?: SortOrder
    fecha_movimiento?: SortOrder
    comentario?: SortOrder
  }

  export type inventario_movimientoAvgOrderByAggregateInput = {
    id_movimiento?: SortOrder
    id_producto_variante?: SortOrder
    cantidad?: SortOrder
    id_operacion?: SortOrder
  }

  export type inventario_movimientoMaxOrderByAggregateInput = {
    id_movimiento?: SortOrder
    id_producto_variante?: SortOrder
    tipo_movimiento?: SortOrder
    cantidad?: SortOrder
    id_operacion?: SortOrder
    fecha_movimiento?: SortOrder
    comentario?: SortOrder
  }

  export type inventario_movimientoMinOrderByAggregateInput = {
    id_movimiento?: SortOrder
    id_producto_variante?: SortOrder
    tipo_movimiento?: SortOrder
    cantidad?: SortOrder
    id_operacion?: SortOrder
    fecha_movimiento?: SortOrder
    comentario?: SortOrder
  }

  export type inventario_movimientoSumOrderByAggregateInput = {
    id_movimiento?: SortOrder
    id_producto_variante?: SortOrder
    cantidad?: SortOrder
    id_operacion?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PagoListRelationFilter = {
    every?: pagoWhereInput
    some?: pagoWhereInput
    none?: pagoWhereInput
  }

  export type pagoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type metodo_pagoCountOrderByAggregateInput = {
    id_metodo_pago?: SortOrder
    nombre?: SortOrder
  }

  export type metodo_pagoAvgOrderByAggregateInput = {
    id_metodo_pago?: SortOrder
  }

  export type metodo_pagoMaxOrderByAggregateInput = {
    id_metodo_pago?: SortOrder
    nombre?: SortOrder
  }

  export type metodo_pagoMinOrderByAggregateInput = {
    id_metodo_pago?: SortOrder
    nombre?: SortOrder
  }

  export type metodo_pagoSumOrderByAggregateInput = {
    id_metodo_pago?: SortOrder
  }

  export type Inventario_movimientoListRelationFilter = {
    every?: inventario_movimientoWhereInput
    some?: inventario_movimientoWhereInput
    none?: inventario_movimientoWhereInput
  }

  export type Estado_operacionScalarRelationFilter = {
    is?: estado_operacionWhereInput
    isNot?: estado_operacionWhereInput
  }

  export type Tipo_operacionScalarRelationFilter = {
    is?: tipo_operacionWhereInput
    isNot?: tipo_operacionWhereInput
  }

  export type inventario_movimientoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type operacionCountOrderByAggregateInput = {
    id_operacion?: SortOrder
    id_tipo_operacion?: SortOrder
    id_estado_operacion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
  }

  export type operacionAvgOrderByAggregateInput = {
    id_operacion?: SortOrder
    id_tipo_operacion?: SortOrder
    id_estado_operacion?: SortOrder
  }

  export type operacionMaxOrderByAggregateInput = {
    id_operacion?: SortOrder
    id_tipo_operacion?: SortOrder
    id_estado_operacion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
  }

  export type operacionMinOrderByAggregateInput = {
    id_operacion?: SortOrder
    id_tipo_operacion?: SortOrder
    id_estado_operacion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
  }

  export type operacionSumOrderByAggregateInput = {
    id_operacion?: SortOrder
    id_tipo_operacion?: SortOrder
    id_estado_operacion?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ClienteScalarRelationFilter = {
    is?: clienteWhereInput
    isNot?: clienteWhereInput
  }

  export type Metodo_pagoScalarRelationFilter = {
    is?: metodo_pagoWhereInput
    isNot?: metodo_pagoWhereInput
  }

  export type OperacionScalarRelationFilter = {
    is?: operacionWhereInput
    isNot?: operacionWhereInput
  }

  export type Venta_detalleListRelationFilter = {
    every?: venta_detalleWhereInput
    some?: venta_detalleWhereInput
    none?: venta_detalleWhereInput
  }

  export type venta_detalleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type operacion_ventaCountOrderByAggregateInput = {
    id_venta?: SortOrder
    id_operacion?: SortOrder
    id_cliente?: SortOrder
    id_metodo_pago?: SortOrder
    total?: SortOrder
  }

  export type operacion_ventaAvgOrderByAggregateInput = {
    id_venta?: SortOrder
    id_operacion?: SortOrder
    id_cliente?: SortOrder
    id_metodo_pago?: SortOrder
    total?: SortOrder
  }

  export type operacion_ventaMaxOrderByAggregateInput = {
    id_venta?: SortOrder
    id_operacion?: SortOrder
    id_cliente?: SortOrder
    id_metodo_pago?: SortOrder
    total?: SortOrder
  }

  export type operacion_ventaMinOrderByAggregateInput = {
    id_venta?: SortOrder
    id_operacion?: SortOrder
    id_cliente?: SortOrder
    id_metodo_pago?: SortOrder
    total?: SortOrder
  }

  export type operacion_ventaSumOrderByAggregateInput = {
    id_venta?: SortOrder
    id_operacion?: SortOrder
    id_cliente?: SortOrder
    id_metodo_pago?: SortOrder
    total?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Operacion_ventaScalarRelationFilter = {
    is?: operacion_ventaWhereInput
    isNot?: operacion_ventaWhereInput
  }

  export type pagoCountOrderByAggregateInput = {
    id_pago?: SortOrder
    id_venta?: SortOrder
    id_metodo_pago?: SortOrder
    monto_pagado?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type pagoAvgOrderByAggregateInput = {
    id_pago?: SortOrder
    id_venta?: SortOrder
    id_metodo_pago?: SortOrder
    monto_pagado?: SortOrder
  }

  export type pagoMaxOrderByAggregateInput = {
    id_pago?: SortOrder
    id_venta?: SortOrder
    id_metodo_pago?: SortOrder
    monto_pagado?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type pagoMinOrderByAggregateInput = {
    id_pago?: SortOrder
    id_venta?: SortOrder
    id_metodo_pago?: SortOrder
    monto_pagado?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type pagoSumOrderByAggregateInput = {
    id_pago?: SortOrder
    id_venta?: SortOrder
    id_metodo_pago?: SortOrder
    monto_pagado?: SortOrder
  }

  export type Categoria_productoScalarRelationFilter = {
    is?: categoria_productoWhereInput
    isNot?: categoria_productoWhereInput
  }

  export type Producto_varianteListRelationFilter = {
    every?: producto_varianteWhereInput
    some?: producto_varianteWhereInput
    none?: producto_varianteWhereInput
  }

  export type producto_varianteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productoCountOrderByAggregateInput = {
    id_producto?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    costo?: SortOrder
    precio_unitario?: SortOrder
  }

  export type productoAvgOrderByAggregateInput = {
    id_producto?: SortOrder
    id_categoria?: SortOrder
    costo?: SortOrder
    precio_unitario?: SortOrder
  }

  export type productoMaxOrderByAggregateInput = {
    id_producto?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    costo?: SortOrder
    precio_unitario?: SortOrder
  }

  export type productoMinOrderByAggregateInput = {
    id_producto?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    costo?: SortOrder
    precio_unitario?: SortOrder
  }

  export type productoSumOrderByAggregateInput = {
    id_producto?: SortOrder
    id_categoria?: SortOrder
    costo?: SortOrder
    precio_unitario?: SortOrder
  }

  export type ProductoScalarRelationFilter = {
    is?: productoWhereInput
    isNot?: productoWhereInput
  }

  export type producto_varianteId_productoTalleColorCompoundUniqueInput = {
    id_producto: number
    talle: string
    color: string
  }

  export type producto_varianteCountOrderByAggregateInput = {
    id_producto_variante?: SortOrder
    id_producto?: SortOrder
    talle?: SortOrder
    color?: SortOrder
    stock?: SortOrder
  }

  export type producto_varianteAvgOrderByAggregateInput = {
    id_producto_variante?: SortOrder
    id_producto?: SortOrder
    stock?: SortOrder
  }

  export type producto_varianteMaxOrderByAggregateInput = {
    id_producto_variante?: SortOrder
    id_producto?: SortOrder
    talle?: SortOrder
    color?: SortOrder
    stock?: SortOrder
  }

  export type producto_varianteMinOrderByAggregateInput = {
    id_producto_variante?: SortOrder
    id_producto?: SortOrder
    talle?: SortOrder
    color?: SortOrder
    stock?: SortOrder
  }

  export type producto_varianteSumOrderByAggregateInput = {
    id_producto_variante?: SortOrder
    id_producto?: SortOrder
    stock?: SortOrder
  }

  export type tipo_operacionCountOrderByAggregateInput = {
    id_tipo_operacion?: SortOrder
    nombre?: SortOrder
  }

  export type tipo_operacionAvgOrderByAggregateInput = {
    id_tipo_operacion?: SortOrder
  }

  export type tipo_operacionMaxOrderByAggregateInput = {
    id_tipo_operacion?: SortOrder
    nombre?: SortOrder
  }

  export type tipo_operacionMinOrderByAggregateInput = {
    id_tipo_operacion?: SortOrder
    nombre?: SortOrder
  }

  export type tipo_operacionSumOrderByAggregateInput = {
    id_tipo_operacion?: SortOrder
  }

  export type venta_detalleId_ventaId_producto_varianteCompoundUniqueInput = {
    id_venta: number
    id_producto_variante: number
  }

  export type venta_detalleCountOrderByAggregateInput = {
    id_venta?: SortOrder
    id_producto_variante?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
  }

  export type venta_detalleAvgOrderByAggregateInput = {
    id_venta?: SortOrder
    id_producto_variante?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
  }

  export type venta_detalleMaxOrderByAggregateInput = {
    id_venta?: SortOrder
    id_producto_variante?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
  }

  export type venta_detalleMinOrderByAggregateInput = {
    id_venta?: SortOrder
    id_producto_variante?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
  }

  export type venta_detalleSumOrderByAggregateInput = {
    id_venta?: SortOrder
    id_producto_variante?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
  }

  export type productoCreateNestedManyWithoutCategoria_productoInput = {
    create?: XOR<productoCreateWithoutCategoria_productoInput, productoUncheckedCreateWithoutCategoria_productoInput> | productoCreateWithoutCategoria_productoInput[] | productoUncheckedCreateWithoutCategoria_productoInput[]
    connectOrCreate?: productoCreateOrConnectWithoutCategoria_productoInput | productoCreateOrConnectWithoutCategoria_productoInput[]
    createMany?: productoCreateManyCategoria_productoInputEnvelope
    connect?: productoWhereUniqueInput | productoWhereUniqueInput[]
  }

  export type productoUncheckedCreateNestedManyWithoutCategoria_productoInput = {
    create?: XOR<productoCreateWithoutCategoria_productoInput, productoUncheckedCreateWithoutCategoria_productoInput> | productoCreateWithoutCategoria_productoInput[] | productoUncheckedCreateWithoutCategoria_productoInput[]
    connectOrCreate?: productoCreateOrConnectWithoutCategoria_productoInput | productoCreateOrConnectWithoutCategoria_productoInput[]
    createMany?: productoCreateManyCategoria_productoInputEnvelope
    connect?: productoWhereUniqueInput | productoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type productoUpdateManyWithoutCategoria_productoNestedInput = {
    create?: XOR<productoCreateWithoutCategoria_productoInput, productoUncheckedCreateWithoutCategoria_productoInput> | productoCreateWithoutCategoria_productoInput[] | productoUncheckedCreateWithoutCategoria_productoInput[]
    connectOrCreate?: productoCreateOrConnectWithoutCategoria_productoInput | productoCreateOrConnectWithoutCategoria_productoInput[]
    upsert?: productoUpsertWithWhereUniqueWithoutCategoria_productoInput | productoUpsertWithWhereUniqueWithoutCategoria_productoInput[]
    createMany?: productoCreateManyCategoria_productoInputEnvelope
    set?: productoWhereUniqueInput | productoWhereUniqueInput[]
    disconnect?: productoWhereUniqueInput | productoWhereUniqueInput[]
    delete?: productoWhereUniqueInput | productoWhereUniqueInput[]
    connect?: productoWhereUniqueInput | productoWhereUniqueInput[]
    update?: productoUpdateWithWhereUniqueWithoutCategoria_productoInput | productoUpdateWithWhereUniqueWithoutCategoria_productoInput[]
    updateMany?: productoUpdateManyWithWhereWithoutCategoria_productoInput | productoUpdateManyWithWhereWithoutCategoria_productoInput[]
    deleteMany?: productoScalarWhereInput | productoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productoUncheckedUpdateManyWithoutCategoria_productoNestedInput = {
    create?: XOR<productoCreateWithoutCategoria_productoInput, productoUncheckedCreateWithoutCategoria_productoInput> | productoCreateWithoutCategoria_productoInput[] | productoUncheckedCreateWithoutCategoria_productoInput[]
    connectOrCreate?: productoCreateOrConnectWithoutCategoria_productoInput | productoCreateOrConnectWithoutCategoria_productoInput[]
    upsert?: productoUpsertWithWhereUniqueWithoutCategoria_productoInput | productoUpsertWithWhereUniqueWithoutCategoria_productoInput[]
    createMany?: productoCreateManyCategoria_productoInputEnvelope
    set?: productoWhereUniqueInput | productoWhereUniqueInput[]
    disconnect?: productoWhereUniqueInput | productoWhereUniqueInput[]
    delete?: productoWhereUniqueInput | productoWhereUniqueInput[]
    connect?: productoWhereUniqueInput | productoWhereUniqueInput[]
    update?: productoUpdateWithWhereUniqueWithoutCategoria_productoInput | productoUpdateWithWhereUniqueWithoutCategoria_productoInput[]
    updateMany?: productoUpdateManyWithWhereWithoutCategoria_productoInput | productoUpdateManyWithWhereWithoutCategoria_productoInput[]
    deleteMany?: productoScalarWhereInput | productoScalarWhereInput[]
  }

  export type operacion_ventaCreateNestedManyWithoutClienteInput = {
    create?: XOR<operacion_ventaCreateWithoutClienteInput, operacion_ventaUncheckedCreateWithoutClienteInput> | operacion_ventaCreateWithoutClienteInput[] | operacion_ventaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: operacion_ventaCreateOrConnectWithoutClienteInput | operacion_ventaCreateOrConnectWithoutClienteInput[]
    createMany?: operacion_ventaCreateManyClienteInputEnvelope
    connect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
  }

  export type operacion_ventaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<operacion_ventaCreateWithoutClienteInput, operacion_ventaUncheckedCreateWithoutClienteInput> | operacion_ventaCreateWithoutClienteInput[] | operacion_ventaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: operacion_ventaCreateOrConnectWithoutClienteInput | operacion_ventaCreateOrConnectWithoutClienteInput[]
    createMany?: operacion_ventaCreateManyClienteInputEnvelope
    connect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type operacion_ventaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<operacion_ventaCreateWithoutClienteInput, operacion_ventaUncheckedCreateWithoutClienteInput> | operacion_ventaCreateWithoutClienteInput[] | operacion_ventaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: operacion_ventaCreateOrConnectWithoutClienteInput | operacion_ventaCreateOrConnectWithoutClienteInput[]
    upsert?: operacion_ventaUpsertWithWhereUniqueWithoutClienteInput | operacion_ventaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: operacion_ventaCreateManyClienteInputEnvelope
    set?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    disconnect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    delete?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    connect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    update?: operacion_ventaUpdateWithWhereUniqueWithoutClienteInput | operacion_ventaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: operacion_ventaUpdateManyWithWhereWithoutClienteInput | operacion_ventaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: operacion_ventaScalarWhereInput | operacion_ventaScalarWhereInput[]
  }

  export type operacion_ventaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<operacion_ventaCreateWithoutClienteInput, operacion_ventaUncheckedCreateWithoutClienteInput> | operacion_ventaCreateWithoutClienteInput[] | operacion_ventaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: operacion_ventaCreateOrConnectWithoutClienteInput | operacion_ventaCreateOrConnectWithoutClienteInput[]
    upsert?: operacion_ventaUpsertWithWhereUniqueWithoutClienteInput | operacion_ventaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: operacion_ventaCreateManyClienteInputEnvelope
    set?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    disconnect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    delete?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    connect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    update?: operacion_ventaUpdateWithWhereUniqueWithoutClienteInput | operacion_ventaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: operacion_ventaUpdateManyWithWhereWithoutClienteInput | operacion_ventaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: operacion_ventaScalarWhereInput | operacion_ventaScalarWhereInput[]
  }

  export type operacionCreateNestedManyWithoutEstado_operacionInput = {
    create?: XOR<operacionCreateWithoutEstado_operacionInput, operacionUncheckedCreateWithoutEstado_operacionInput> | operacionCreateWithoutEstado_operacionInput[] | operacionUncheckedCreateWithoutEstado_operacionInput[]
    connectOrCreate?: operacionCreateOrConnectWithoutEstado_operacionInput | operacionCreateOrConnectWithoutEstado_operacionInput[]
    createMany?: operacionCreateManyEstado_operacionInputEnvelope
    connect?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
  }

  export type operacionUncheckedCreateNestedManyWithoutEstado_operacionInput = {
    create?: XOR<operacionCreateWithoutEstado_operacionInput, operacionUncheckedCreateWithoutEstado_operacionInput> | operacionCreateWithoutEstado_operacionInput[] | operacionUncheckedCreateWithoutEstado_operacionInput[]
    connectOrCreate?: operacionCreateOrConnectWithoutEstado_operacionInput | operacionCreateOrConnectWithoutEstado_operacionInput[]
    createMany?: operacionCreateManyEstado_operacionInputEnvelope
    connect?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
  }

  export type operacionUpdateManyWithoutEstado_operacionNestedInput = {
    create?: XOR<operacionCreateWithoutEstado_operacionInput, operacionUncheckedCreateWithoutEstado_operacionInput> | operacionCreateWithoutEstado_operacionInput[] | operacionUncheckedCreateWithoutEstado_operacionInput[]
    connectOrCreate?: operacionCreateOrConnectWithoutEstado_operacionInput | operacionCreateOrConnectWithoutEstado_operacionInput[]
    upsert?: operacionUpsertWithWhereUniqueWithoutEstado_operacionInput | operacionUpsertWithWhereUniqueWithoutEstado_operacionInput[]
    createMany?: operacionCreateManyEstado_operacionInputEnvelope
    set?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
    disconnect?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
    delete?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
    connect?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
    update?: operacionUpdateWithWhereUniqueWithoutEstado_operacionInput | operacionUpdateWithWhereUniqueWithoutEstado_operacionInput[]
    updateMany?: operacionUpdateManyWithWhereWithoutEstado_operacionInput | operacionUpdateManyWithWhereWithoutEstado_operacionInput[]
    deleteMany?: operacionScalarWhereInput | operacionScalarWhereInput[]
  }

  export type operacionUncheckedUpdateManyWithoutEstado_operacionNestedInput = {
    create?: XOR<operacionCreateWithoutEstado_operacionInput, operacionUncheckedCreateWithoutEstado_operacionInput> | operacionCreateWithoutEstado_operacionInput[] | operacionUncheckedCreateWithoutEstado_operacionInput[]
    connectOrCreate?: operacionCreateOrConnectWithoutEstado_operacionInput | operacionCreateOrConnectWithoutEstado_operacionInput[]
    upsert?: operacionUpsertWithWhereUniqueWithoutEstado_operacionInput | operacionUpsertWithWhereUniqueWithoutEstado_operacionInput[]
    createMany?: operacionCreateManyEstado_operacionInputEnvelope
    set?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
    disconnect?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
    delete?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
    connect?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
    update?: operacionUpdateWithWhereUniqueWithoutEstado_operacionInput | operacionUpdateWithWhereUniqueWithoutEstado_operacionInput[]
    updateMany?: operacionUpdateManyWithWhereWithoutEstado_operacionInput | operacionUpdateManyWithWhereWithoutEstado_operacionInput[]
    deleteMany?: operacionScalarWhereInput | operacionScalarWhereInput[]
  }

  export type operacionCreateNestedOneWithoutInventario_movimientoInput = {
    create?: XOR<operacionCreateWithoutInventario_movimientoInput, operacionUncheckedCreateWithoutInventario_movimientoInput>
    connectOrCreate?: operacionCreateOrConnectWithoutInventario_movimientoInput
    connect?: operacionWhereUniqueInput
  }

  export type producto_varianteCreateNestedOneWithoutInventario_movimientoInput = {
    create?: XOR<producto_varianteCreateWithoutInventario_movimientoInput, producto_varianteUncheckedCreateWithoutInventario_movimientoInput>
    connectOrCreate?: producto_varianteCreateOrConnectWithoutInventario_movimientoInput
    connect?: producto_varianteWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type operacionUpdateOneWithoutInventario_movimientoNestedInput = {
    create?: XOR<operacionCreateWithoutInventario_movimientoInput, operacionUncheckedCreateWithoutInventario_movimientoInput>
    connectOrCreate?: operacionCreateOrConnectWithoutInventario_movimientoInput
    upsert?: operacionUpsertWithoutInventario_movimientoInput
    disconnect?: operacionWhereInput | boolean
    delete?: operacionWhereInput | boolean
    connect?: operacionWhereUniqueInput
    update?: XOR<XOR<operacionUpdateToOneWithWhereWithoutInventario_movimientoInput, operacionUpdateWithoutInventario_movimientoInput>, operacionUncheckedUpdateWithoutInventario_movimientoInput>
  }

  export type producto_varianteUpdateOneRequiredWithoutInventario_movimientoNestedInput = {
    create?: XOR<producto_varianteCreateWithoutInventario_movimientoInput, producto_varianteUncheckedCreateWithoutInventario_movimientoInput>
    connectOrCreate?: producto_varianteCreateOrConnectWithoutInventario_movimientoInput
    upsert?: producto_varianteUpsertWithoutInventario_movimientoInput
    connect?: producto_varianteWhereUniqueInput
    update?: XOR<XOR<producto_varianteUpdateToOneWithWhereWithoutInventario_movimientoInput, producto_varianteUpdateWithoutInventario_movimientoInput>, producto_varianteUncheckedUpdateWithoutInventario_movimientoInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type operacion_ventaCreateNestedManyWithoutMetodo_pagoInput = {
    create?: XOR<operacion_ventaCreateWithoutMetodo_pagoInput, operacion_ventaUncheckedCreateWithoutMetodo_pagoInput> | operacion_ventaCreateWithoutMetodo_pagoInput[] | operacion_ventaUncheckedCreateWithoutMetodo_pagoInput[]
    connectOrCreate?: operacion_ventaCreateOrConnectWithoutMetodo_pagoInput | operacion_ventaCreateOrConnectWithoutMetodo_pagoInput[]
    createMany?: operacion_ventaCreateManyMetodo_pagoInputEnvelope
    connect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
  }

  export type pagoCreateNestedManyWithoutMetodo_pagoInput = {
    create?: XOR<pagoCreateWithoutMetodo_pagoInput, pagoUncheckedCreateWithoutMetodo_pagoInput> | pagoCreateWithoutMetodo_pagoInput[] | pagoUncheckedCreateWithoutMetodo_pagoInput[]
    connectOrCreate?: pagoCreateOrConnectWithoutMetodo_pagoInput | pagoCreateOrConnectWithoutMetodo_pagoInput[]
    createMany?: pagoCreateManyMetodo_pagoInputEnvelope
    connect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
  }

  export type operacion_ventaUncheckedCreateNestedManyWithoutMetodo_pagoInput = {
    create?: XOR<operacion_ventaCreateWithoutMetodo_pagoInput, operacion_ventaUncheckedCreateWithoutMetodo_pagoInput> | operacion_ventaCreateWithoutMetodo_pagoInput[] | operacion_ventaUncheckedCreateWithoutMetodo_pagoInput[]
    connectOrCreate?: operacion_ventaCreateOrConnectWithoutMetodo_pagoInput | operacion_ventaCreateOrConnectWithoutMetodo_pagoInput[]
    createMany?: operacion_ventaCreateManyMetodo_pagoInputEnvelope
    connect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
  }

  export type pagoUncheckedCreateNestedManyWithoutMetodo_pagoInput = {
    create?: XOR<pagoCreateWithoutMetodo_pagoInput, pagoUncheckedCreateWithoutMetodo_pagoInput> | pagoCreateWithoutMetodo_pagoInput[] | pagoUncheckedCreateWithoutMetodo_pagoInput[]
    connectOrCreate?: pagoCreateOrConnectWithoutMetodo_pagoInput | pagoCreateOrConnectWithoutMetodo_pagoInput[]
    createMany?: pagoCreateManyMetodo_pagoInputEnvelope
    connect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
  }

  export type operacion_ventaUpdateManyWithoutMetodo_pagoNestedInput = {
    create?: XOR<operacion_ventaCreateWithoutMetodo_pagoInput, operacion_ventaUncheckedCreateWithoutMetodo_pagoInput> | operacion_ventaCreateWithoutMetodo_pagoInput[] | operacion_ventaUncheckedCreateWithoutMetodo_pagoInput[]
    connectOrCreate?: operacion_ventaCreateOrConnectWithoutMetodo_pagoInput | operacion_ventaCreateOrConnectWithoutMetodo_pagoInput[]
    upsert?: operacion_ventaUpsertWithWhereUniqueWithoutMetodo_pagoInput | operacion_ventaUpsertWithWhereUniqueWithoutMetodo_pagoInput[]
    createMany?: operacion_ventaCreateManyMetodo_pagoInputEnvelope
    set?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    disconnect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    delete?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    connect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    update?: operacion_ventaUpdateWithWhereUniqueWithoutMetodo_pagoInput | operacion_ventaUpdateWithWhereUniqueWithoutMetodo_pagoInput[]
    updateMany?: operacion_ventaUpdateManyWithWhereWithoutMetodo_pagoInput | operacion_ventaUpdateManyWithWhereWithoutMetodo_pagoInput[]
    deleteMany?: operacion_ventaScalarWhereInput | operacion_ventaScalarWhereInput[]
  }

  export type pagoUpdateManyWithoutMetodo_pagoNestedInput = {
    create?: XOR<pagoCreateWithoutMetodo_pagoInput, pagoUncheckedCreateWithoutMetodo_pagoInput> | pagoCreateWithoutMetodo_pagoInput[] | pagoUncheckedCreateWithoutMetodo_pagoInput[]
    connectOrCreate?: pagoCreateOrConnectWithoutMetodo_pagoInput | pagoCreateOrConnectWithoutMetodo_pagoInput[]
    upsert?: pagoUpsertWithWhereUniqueWithoutMetodo_pagoInput | pagoUpsertWithWhereUniqueWithoutMetodo_pagoInput[]
    createMany?: pagoCreateManyMetodo_pagoInputEnvelope
    set?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    disconnect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    delete?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    connect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    update?: pagoUpdateWithWhereUniqueWithoutMetodo_pagoInput | pagoUpdateWithWhereUniqueWithoutMetodo_pagoInput[]
    updateMany?: pagoUpdateManyWithWhereWithoutMetodo_pagoInput | pagoUpdateManyWithWhereWithoutMetodo_pagoInput[]
    deleteMany?: pagoScalarWhereInput | pagoScalarWhereInput[]
  }

  export type operacion_ventaUncheckedUpdateManyWithoutMetodo_pagoNestedInput = {
    create?: XOR<operacion_ventaCreateWithoutMetodo_pagoInput, operacion_ventaUncheckedCreateWithoutMetodo_pagoInput> | operacion_ventaCreateWithoutMetodo_pagoInput[] | operacion_ventaUncheckedCreateWithoutMetodo_pagoInput[]
    connectOrCreate?: operacion_ventaCreateOrConnectWithoutMetodo_pagoInput | operacion_ventaCreateOrConnectWithoutMetodo_pagoInput[]
    upsert?: operacion_ventaUpsertWithWhereUniqueWithoutMetodo_pagoInput | operacion_ventaUpsertWithWhereUniqueWithoutMetodo_pagoInput[]
    createMany?: operacion_ventaCreateManyMetodo_pagoInputEnvelope
    set?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    disconnect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    delete?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    connect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    update?: operacion_ventaUpdateWithWhereUniqueWithoutMetodo_pagoInput | operacion_ventaUpdateWithWhereUniqueWithoutMetodo_pagoInput[]
    updateMany?: operacion_ventaUpdateManyWithWhereWithoutMetodo_pagoInput | operacion_ventaUpdateManyWithWhereWithoutMetodo_pagoInput[]
    deleteMany?: operacion_ventaScalarWhereInput | operacion_ventaScalarWhereInput[]
  }

  export type pagoUncheckedUpdateManyWithoutMetodo_pagoNestedInput = {
    create?: XOR<pagoCreateWithoutMetodo_pagoInput, pagoUncheckedCreateWithoutMetodo_pagoInput> | pagoCreateWithoutMetodo_pagoInput[] | pagoUncheckedCreateWithoutMetodo_pagoInput[]
    connectOrCreate?: pagoCreateOrConnectWithoutMetodo_pagoInput | pagoCreateOrConnectWithoutMetodo_pagoInput[]
    upsert?: pagoUpsertWithWhereUniqueWithoutMetodo_pagoInput | pagoUpsertWithWhereUniqueWithoutMetodo_pagoInput[]
    createMany?: pagoCreateManyMetodo_pagoInputEnvelope
    set?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    disconnect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    delete?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    connect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    update?: pagoUpdateWithWhereUniqueWithoutMetodo_pagoInput | pagoUpdateWithWhereUniqueWithoutMetodo_pagoInput[]
    updateMany?: pagoUpdateManyWithWhereWithoutMetodo_pagoInput | pagoUpdateManyWithWhereWithoutMetodo_pagoInput[]
    deleteMany?: pagoScalarWhereInput | pagoScalarWhereInput[]
  }

  export type inventario_movimientoCreateNestedManyWithoutOperacionInput = {
    create?: XOR<inventario_movimientoCreateWithoutOperacionInput, inventario_movimientoUncheckedCreateWithoutOperacionInput> | inventario_movimientoCreateWithoutOperacionInput[] | inventario_movimientoUncheckedCreateWithoutOperacionInput[]
    connectOrCreate?: inventario_movimientoCreateOrConnectWithoutOperacionInput | inventario_movimientoCreateOrConnectWithoutOperacionInput[]
    createMany?: inventario_movimientoCreateManyOperacionInputEnvelope
    connect?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
  }

  export type estado_operacionCreateNestedOneWithoutOperacionInput = {
    create?: XOR<estado_operacionCreateWithoutOperacionInput, estado_operacionUncheckedCreateWithoutOperacionInput>
    connectOrCreate?: estado_operacionCreateOrConnectWithoutOperacionInput
    connect?: estado_operacionWhereUniqueInput
  }

  export type tipo_operacionCreateNestedOneWithoutOperacionInput = {
    create?: XOR<tipo_operacionCreateWithoutOperacionInput, tipo_operacionUncheckedCreateWithoutOperacionInput>
    connectOrCreate?: tipo_operacionCreateOrConnectWithoutOperacionInput
    connect?: tipo_operacionWhereUniqueInput
  }

  export type operacion_ventaCreateNestedManyWithoutOperacionInput = {
    create?: XOR<operacion_ventaCreateWithoutOperacionInput, operacion_ventaUncheckedCreateWithoutOperacionInput> | operacion_ventaCreateWithoutOperacionInput[] | operacion_ventaUncheckedCreateWithoutOperacionInput[]
    connectOrCreate?: operacion_ventaCreateOrConnectWithoutOperacionInput | operacion_ventaCreateOrConnectWithoutOperacionInput[]
    createMany?: operacion_ventaCreateManyOperacionInputEnvelope
    connect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
  }

  export type inventario_movimientoUncheckedCreateNestedManyWithoutOperacionInput = {
    create?: XOR<inventario_movimientoCreateWithoutOperacionInput, inventario_movimientoUncheckedCreateWithoutOperacionInput> | inventario_movimientoCreateWithoutOperacionInput[] | inventario_movimientoUncheckedCreateWithoutOperacionInput[]
    connectOrCreate?: inventario_movimientoCreateOrConnectWithoutOperacionInput | inventario_movimientoCreateOrConnectWithoutOperacionInput[]
    createMany?: inventario_movimientoCreateManyOperacionInputEnvelope
    connect?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
  }

  export type operacion_ventaUncheckedCreateNestedManyWithoutOperacionInput = {
    create?: XOR<operacion_ventaCreateWithoutOperacionInput, operacion_ventaUncheckedCreateWithoutOperacionInput> | operacion_ventaCreateWithoutOperacionInput[] | operacion_ventaUncheckedCreateWithoutOperacionInput[]
    connectOrCreate?: operacion_ventaCreateOrConnectWithoutOperacionInput | operacion_ventaCreateOrConnectWithoutOperacionInput[]
    createMany?: operacion_ventaCreateManyOperacionInputEnvelope
    connect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
  }

  export type inventario_movimientoUpdateManyWithoutOperacionNestedInput = {
    create?: XOR<inventario_movimientoCreateWithoutOperacionInput, inventario_movimientoUncheckedCreateWithoutOperacionInput> | inventario_movimientoCreateWithoutOperacionInput[] | inventario_movimientoUncheckedCreateWithoutOperacionInput[]
    connectOrCreate?: inventario_movimientoCreateOrConnectWithoutOperacionInput | inventario_movimientoCreateOrConnectWithoutOperacionInput[]
    upsert?: inventario_movimientoUpsertWithWhereUniqueWithoutOperacionInput | inventario_movimientoUpsertWithWhereUniqueWithoutOperacionInput[]
    createMany?: inventario_movimientoCreateManyOperacionInputEnvelope
    set?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
    disconnect?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
    delete?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
    connect?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
    update?: inventario_movimientoUpdateWithWhereUniqueWithoutOperacionInput | inventario_movimientoUpdateWithWhereUniqueWithoutOperacionInput[]
    updateMany?: inventario_movimientoUpdateManyWithWhereWithoutOperacionInput | inventario_movimientoUpdateManyWithWhereWithoutOperacionInput[]
    deleteMany?: inventario_movimientoScalarWhereInput | inventario_movimientoScalarWhereInput[]
  }

  export type estado_operacionUpdateOneRequiredWithoutOperacionNestedInput = {
    create?: XOR<estado_operacionCreateWithoutOperacionInput, estado_operacionUncheckedCreateWithoutOperacionInput>
    connectOrCreate?: estado_operacionCreateOrConnectWithoutOperacionInput
    upsert?: estado_operacionUpsertWithoutOperacionInput
    connect?: estado_operacionWhereUniqueInput
    update?: XOR<XOR<estado_operacionUpdateToOneWithWhereWithoutOperacionInput, estado_operacionUpdateWithoutOperacionInput>, estado_operacionUncheckedUpdateWithoutOperacionInput>
  }

  export type tipo_operacionUpdateOneRequiredWithoutOperacionNestedInput = {
    create?: XOR<tipo_operacionCreateWithoutOperacionInput, tipo_operacionUncheckedCreateWithoutOperacionInput>
    connectOrCreate?: tipo_operacionCreateOrConnectWithoutOperacionInput
    upsert?: tipo_operacionUpsertWithoutOperacionInput
    connect?: tipo_operacionWhereUniqueInput
    update?: XOR<XOR<tipo_operacionUpdateToOneWithWhereWithoutOperacionInput, tipo_operacionUpdateWithoutOperacionInput>, tipo_operacionUncheckedUpdateWithoutOperacionInput>
  }

  export type operacion_ventaUpdateManyWithoutOperacionNestedInput = {
    create?: XOR<operacion_ventaCreateWithoutOperacionInput, operacion_ventaUncheckedCreateWithoutOperacionInput> | operacion_ventaCreateWithoutOperacionInput[] | operacion_ventaUncheckedCreateWithoutOperacionInput[]
    connectOrCreate?: operacion_ventaCreateOrConnectWithoutOperacionInput | operacion_ventaCreateOrConnectWithoutOperacionInput[]
    upsert?: operacion_ventaUpsertWithWhereUniqueWithoutOperacionInput | operacion_ventaUpsertWithWhereUniqueWithoutOperacionInput[]
    createMany?: operacion_ventaCreateManyOperacionInputEnvelope
    set?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    disconnect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    delete?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    connect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    update?: operacion_ventaUpdateWithWhereUniqueWithoutOperacionInput | operacion_ventaUpdateWithWhereUniqueWithoutOperacionInput[]
    updateMany?: operacion_ventaUpdateManyWithWhereWithoutOperacionInput | operacion_ventaUpdateManyWithWhereWithoutOperacionInput[]
    deleteMany?: operacion_ventaScalarWhereInput | operacion_ventaScalarWhereInput[]
  }

  export type inventario_movimientoUncheckedUpdateManyWithoutOperacionNestedInput = {
    create?: XOR<inventario_movimientoCreateWithoutOperacionInput, inventario_movimientoUncheckedCreateWithoutOperacionInput> | inventario_movimientoCreateWithoutOperacionInput[] | inventario_movimientoUncheckedCreateWithoutOperacionInput[]
    connectOrCreate?: inventario_movimientoCreateOrConnectWithoutOperacionInput | inventario_movimientoCreateOrConnectWithoutOperacionInput[]
    upsert?: inventario_movimientoUpsertWithWhereUniqueWithoutOperacionInput | inventario_movimientoUpsertWithWhereUniqueWithoutOperacionInput[]
    createMany?: inventario_movimientoCreateManyOperacionInputEnvelope
    set?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
    disconnect?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
    delete?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
    connect?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
    update?: inventario_movimientoUpdateWithWhereUniqueWithoutOperacionInput | inventario_movimientoUpdateWithWhereUniqueWithoutOperacionInput[]
    updateMany?: inventario_movimientoUpdateManyWithWhereWithoutOperacionInput | inventario_movimientoUpdateManyWithWhereWithoutOperacionInput[]
    deleteMany?: inventario_movimientoScalarWhereInput | inventario_movimientoScalarWhereInput[]
  }

  export type operacion_ventaUncheckedUpdateManyWithoutOperacionNestedInput = {
    create?: XOR<operacion_ventaCreateWithoutOperacionInput, operacion_ventaUncheckedCreateWithoutOperacionInput> | operacion_ventaCreateWithoutOperacionInput[] | operacion_ventaUncheckedCreateWithoutOperacionInput[]
    connectOrCreate?: operacion_ventaCreateOrConnectWithoutOperacionInput | operacion_ventaCreateOrConnectWithoutOperacionInput[]
    upsert?: operacion_ventaUpsertWithWhereUniqueWithoutOperacionInput | operacion_ventaUpsertWithWhereUniqueWithoutOperacionInput[]
    createMany?: operacion_ventaCreateManyOperacionInputEnvelope
    set?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    disconnect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    delete?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    connect?: operacion_ventaWhereUniqueInput | operacion_ventaWhereUniqueInput[]
    update?: operacion_ventaUpdateWithWhereUniqueWithoutOperacionInput | operacion_ventaUpdateWithWhereUniqueWithoutOperacionInput[]
    updateMany?: operacion_ventaUpdateManyWithWhereWithoutOperacionInput | operacion_ventaUpdateManyWithWhereWithoutOperacionInput[]
    deleteMany?: operacion_ventaScalarWhereInput | operacion_ventaScalarWhereInput[]
  }

  export type clienteCreateNestedOneWithoutOperacion_ventaInput = {
    create?: XOR<clienteCreateWithoutOperacion_ventaInput, clienteUncheckedCreateWithoutOperacion_ventaInput>
    connectOrCreate?: clienteCreateOrConnectWithoutOperacion_ventaInput
    connect?: clienteWhereUniqueInput
  }

  export type metodo_pagoCreateNestedOneWithoutOperacion_ventaInput = {
    create?: XOR<metodo_pagoCreateWithoutOperacion_ventaInput, metodo_pagoUncheckedCreateWithoutOperacion_ventaInput>
    connectOrCreate?: metodo_pagoCreateOrConnectWithoutOperacion_ventaInput
    connect?: metodo_pagoWhereUniqueInput
  }

  export type operacionCreateNestedOneWithoutOperacion_ventaInput = {
    create?: XOR<operacionCreateWithoutOperacion_ventaInput, operacionUncheckedCreateWithoutOperacion_ventaInput>
    connectOrCreate?: operacionCreateOrConnectWithoutOperacion_ventaInput
    connect?: operacionWhereUniqueInput
  }

  export type pagoCreateNestedManyWithoutOperacion_ventaInput = {
    create?: XOR<pagoCreateWithoutOperacion_ventaInput, pagoUncheckedCreateWithoutOperacion_ventaInput> | pagoCreateWithoutOperacion_ventaInput[] | pagoUncheckedCreateWithoutOperacion_ventaInput[]
    connectOrCreate?: pagoCreateOrConnectWithoutOperacion_ventaInput | pagoCreateOrConnectWithoutOperacion_ventaInput[]
    createMany?: pagoCreateManyOperacion_ventaInputEnvelope
    connect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
  }

  export type venta_detalleCreateNestedManyWithoutOperacion_ventaInput = {
    create?: XOR<venta_detalleCreateWithoutOperacion_ventaInput, venta_detalleUncheckedCreateWithoutOperacion_ventaInput> | venta_detalleCreateWithoutOperacion_ventaInput[] | venta_detalleUncheckedCreateWithoutOperacion_ventaInput[]
    connectOrCreate?: venta_detalleCreateOrConnectWithoutOperacion_ventaInput | venta_detalleCreateOrConnectWithoutOperacion_ventaInput[]
    createMany?: venta_detalleCreateManyOperacion_ventaInputEnvelope
    connect?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
  }

  export type pagoUncheckedCreateNestedManyWithoutOperacion_ventaInput = {
    create?: XOR<pagoCreateWithoutOperacion_ventaInput, pagoUncheckedCreateWithoutOperacion_ventaInput> | pagoCreateWithoutOperacion_ventaInput[] | pagoUncheckedCreateWithoutOperacion_ventaInput[]
    connectOrCreate?: pagoCreateOrConnectWithoutOperacion_ventaInput | pagoCreateOrConnectWithoutOperacion_ventaInput[]
    createMany?: pagoCreateManyOperacion_ventaInputEnvelope
    connect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
  }

  export type venta_detalleUncheckedCreateNestedManyWithoutOperacion_ventaInput = {
    create?: XOR<venta_detalleCreateWithoutOperacion_ventaInput, venta_detalleUncheckedCreateWithoutOperacion_ventaInput> | venta_detalleCreateWithoutOperacion_ventaInput[] | venta_detalleUncheckedCreateWithoutOperacion_ventaInput[]
    connectOrCreate?: venta_detalleCreateOrConnectWithoutOperacion_ventaInput | venta_detalleCreateOrConnectWithoutOperacion_ventaInput[]
    createMany?: venta_detalleCreateManyOperacion_ventaInputEnvelope
    connect?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type clienteUpdateOneRequiredWithoutOperacion_ventaNestedInput = {
    create?: XOR<clienteCreateWithoutOperacion_ventaInput, clienteUncheckedCreateWithoutOperacion_ventaInput>
    connectOrCreate?: clienteCreateOrConnectWithoutOperacion_ventaInput
    upsert?: clienteUpsertWithoutOperacion_ventaInput
    connect?: clienteWhereUniqueInput
    update?: XOR<XOR<clienteUpdateToOneWithWhereWithoutOperacion_ventaInput, clienteUpdateWithoutOperacion_ventaInput>, clienteUncheckedUpdateWithoutOperacion_ventaInput>
  }

  export type metodo_pagoUpdateOneRequiredWithoutOperacion_ventaNestedInput = {
    create?: XOR<metodo_pagoCreateWithoutOperacion_ventaInput, metodo_pagoUncheckedCreateWithoutOperacion_ventaInput>
    connectOrCreate?: metodo_pagoCreateOrConnectWithoutOperacion_ventaInput
    upsert?: metodo_pagoUpsertWithoutOperacion_ventaInput
    connect?: metodo_pagoWhereUniqueInput
    update?: XOR<XOR<metodo_pagoUpdateToOneWithWhereWithoutOperacion_ventaInput, metodo_pagoUpdateWithoutOperacion_ventaInput>, metodo_pagoUncheckedUpdateWithoutOperacion_ventaInput>
  }

  export type operacionUpdateOneRequiredWithoutOperacion_ventaNestedInput = {
    create?: XOR<operacionCreateWithoutOperacion_ventaInput, operacionUncheckedCreateWithoutOperacion_ventaInput>
    connectOrCreate?: operacionCreateOrConnectWithoutOperacion_ventaInput
    upsert?: operacionUpsertWithoutOperacion_ventaInput
    connect?: operacionWhereUniqueInput
    update?: XOR<XOR<operacionUpdateToOneWithWhereWithoutOperacion_ventaInput, operacionUpdateWithoutOperacion_ventaInput>, operacionUncheckedUpdateWithoutOperacion_ventaInput>
  }

  export type pagoUpdateManyWithoutOperacion_ventaNestedInput = {
    create?: XOR<pagoCreateWithoutOperacion_ventaInput, pagoUncheckedCreateWithoutOperacion_ventaInput> | pagoCreateWithoutOperacion_ventaInput[] | pagoUncheckedCreateWithoutOperacion_ventaInput[]
    connectOrCreate?: pagoCreateOrConnectWithoutOperacion_ventaInput | pagoCreateOrConnectWithoutOperacion_ventaInput[]
    upsert?: pagoUpsertWithWhereUniqueWithoutOperacion_ventaInput | pagoUpsertWithWhereUniqueWithoutOperacion_ventaInput[]
    createMany?: pagoCreateManyOperacion_ventaInputEnvelope
    set?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    disconnect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    delete?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    connect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    update?: pagoUpdateWithWhereUniqueWithoutOperacion_ventaInput | pagoUpdateWithWhereUniqueWithoutOperacion_ventaInput[]
    updateMany?: pagoUpdateManyWithWhereWithoutOperacion_ventaInput | pagoUpdateManyWithWhereWithoutOperacion_ventaInput[]
    deleteMany?: pagoScalarWhereInput | pagoScalarWhereInput[]
  }

  export type venta_detalleUpdateManyWithoutOperacion_ventaNestedInput = {
    create?: XOR<venta_detalleCreateWithoutOperacion_ventaInput, venta_detalleUncheckedCreateWithoutOperacion_ventaInput> | venta_detalleCreateWithoutOperacion_ventaInput[] | venta_detalleUncheckedCreateWithoutOperacion_ventaInput[]
    connectOrCreate?: venta_detalleCreateOrConnectWithoutOperacion_ventaInput | venta_detalleCreateOrConnectWithoutOperacion_ventaInput[]
    upsert?: venta_detalleUpsertWithWhereUniqueWithoutOperacion_ventaInput | venta_detalleUpsertWithWhereUniqueWithoutOperacion_ventaInput[]
    createMany?: venta_detalleCreateManyOperacion_ventaInputEnvelope
    set?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
    disconnect?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
    delete?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
    connect?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
    update?: venta_detalleUpdateWithWhereUniqueWithoutOperacion_ventaInput | venta_detalleUpdateWithWhereUniqueWithoutOperacion_ventaInput[]
    updateMany?: venta_detalleUpdateManyWithWhereWithoutOperacion_ventaInput | venta_detalleUpdateManyWithWhereWithoutOperacion_ventaInput[]
    deleteMany?: venta_detalleScalarWhereInput | venta_detalleScalarWhereInput[]
  }

  export type pagoUncheckedUpdateManyWithoutOperacion_ventaNestedInput = {
    create?: XOR<pagoCreateWithoutOperacion_ventaInput, pagoUncheckedCreateWithoutOperacion_ventaInput> | pagoCreateWithoutOperacion_ventaInput[] | pagoUncheckedCreateWithoutOperacion_ventaInput[]
    connectOrCreate?: pagoCreateOrConnectWithoutOperacion_ventaInput | pagoCreateOrConnectWithoutOperacion_ventaInput[]
    upsert?: pagoUpsertWithWhereUniqueWithoutOperacion_ventaInput | pagoUpsertWithWhereUniqueWithoutOperacion_ventaInput[]
    createMany?: pagoCreateManyOperacion_ventaInputEnvelope
    set?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    disconnect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    delete?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    connect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    update?: pagoUpdateWithWhereUniqueWithoutOperacion_ventaInput | pagoUpdateWithWhereUniqueWithoutOperacion_ventaInput[]
    updateMany?: pagoUpdateManyWithWhereWithoutOperacion_ventaInput | pagoUpdateManyWithWhereWithoutOperacion_ventaInput[]
    deleteMany?: pagoScalarWhereInput | pagoScalarWhereInput[]
  }

  export type venta_detalleUncheckedUpdateManyWithoutOperacion_ventaNestedInput = {
    create?: XOR<venta_detalleCreateWithoutOperacion_ventaInput, venta_detalleUncheckedCreateWithoutOperacion_ventaInput> | venta_detalleCreateWithoutOperacion_ventaInput[] | venta_detalleUncheckedCreateWithoutOperacion_ventaInput[]
    connectOrCreate?: venta_detalleCreateOrConnectWithoutOperacion_ventaInput | venta_detalleCreateOrConnectWithoutOperacion_ventaInput[]
    upsert?: venta_detalleUpsertWithWhereUniqueWithoutOperacion_ventaInput | venta_detalleUpsertWithWhereUniqueWithoutOperacion_ventaInput[]
    createMany?: venta_detalleCreateManyOperacion_ventaInputEnvelope
    set?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
    disconnect?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
    delete?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
    connect?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
    update?: venta_detalleUpdateWithWhereUniqueWithoutOperacion_ventaInput | venta_detalleUpdateWithWhereUniqueWithoutOperacion_ventaInput[]
    updateMany?: venta_detalleUpdateManyWithWhereWithoutOperacion_ventaInput | venta_detalleUpdateManyWithWhereWithoutOperacion_ventaInput[]
    deleteMany?: venta_detalleScalarWhereInput | venta_detalleScalarWhereInput[]
  }

  export type metodo_pagoCreateNestedOneWithoutPagoInput = {
    create?: XOR<metodo_pagoCreateWithoutPagoInput, metodo_pagoUncheckedCreateWithoutPagoInput>
    connectOrCreate?: metodo_pagoCreateOrConnectWithoutPagoInput
    connect?: metodo_pagoWhereUniqueInput
  }

  export type operacion_ventaCreateNestedOneWithoutPagoInput = {
    create?: XOR<operacion_ventaCreateWithoutPagoInput, operacion_ventaUncheckedCreateWithoutPagoInput>
    connectOrCreate?: operacion_ventaCreateOrConnectWithoutPagoInput
    connect?: operacion_ventaWhereUniqueInput
  }

  export type metodo_pagoUpdateOneRequiredWithoutPagoNestedInput = {
    create?: XOR<metodo_pagoCreateWithoutPagoInput, metodo_pagoUncheckedCreateWithoutPagoInput>
    connectOrCreate?: metodo_pagoCreateOrConnectWithoutPagoInput
    upsert?: metodo_pagoUpsertWithoutPagoInput
    connect?: metodo_pagoWhereUniqueInput
    update?: XOR<XOR<metodo_pagoUpdateToOneWithWhereWithoutPagoInput, metodo_pagoUpdateWithoutPagoInput>, metodo_pagoUncheckedUpdateWithoutPagoInput>
  }

  export type operacion_ventaUpdateOneRequiredWithoutPagoNestedInput = {
    create?: XOR<operacion_ventaCreateWithoutPagoInput, operacion_ventaUncheckedCreateWithoutPagoInput>
    connectOrCreate?: operacion_ventaCreateOrConnectWithoutPagoInput
    upsert?: operacion_ventaUpsertWithoutPagoInput
    connect?: operacion_ventaWhereUniqueInput
    update?: XOR<XOR<operacion_ventaUpdateToOneWithWhereWithoutPagoInput, operacion_ventaUpdateWithoutPagoInput>, operacion_ventaUncheckedUpdateWithoutPagoInput>
  }

  export type categoria_productoCreateNestedOneWithoutProductoInput = {
    create?: XOR<categoria_productoCreateWithoutProductoInput, categoria_productoUncheckedCreateWithoutProductoInput>
    connectOrCreate?: categoria_productoCreateOrConnectWithoutProductoInput
    connect?: categoria_productoWhereUniqueInput
  }

  export type producto_varianteCreateNestedManyWithoutProductoInput = {
    create?: XOR<producto_varianteCreateWithoutProductoInput, producto_varianteUncheckedCreateWithoutProductoInput> | producto_varianteCreateWithoutProductoInput[] | producto_varianteUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: producto_varianteCreateOrConnectWithoutProductoInput | producto_varianteCreateOrConnectWithoutProductoInput[]
    createMany?: producto_varianteCreateManyProductoInputEnvelope
    connect?: producto_varianteWhereUniqueInput | producto_varianteWhereUniqueInput[]
  }

  export type producto_varianteUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<producto_varianteCreateWithoutProductoInput, producto_varianteUncheckedCreateWithoutProductoInput> | producto_varianteCreateWithoutProductoInput[] | producto_varianteUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: producto_varianteCreateOrConnectWithoutProductoInput | producto_varianteCreateOrConnectWithoutProductoInput[]
    createMany?: producto_varianteCreateManyProductoInputEnvelope
    connect?: producto_varianteWhereUniqueInput | producto_varianteWhereUniqueInput[]
  }

  export type categoria_productoUpdateOneRequiredWithoutProductoNestedInput = {
    create?: XOR<categoria_productoCreateWithoutProductoInput, categoria_productoUncheckedCreateWithoutProductoInput>
    connectOrCreate?: categoria_productoCreateOrConnectWithoutProductoInput
    upsert?: categoria_productoUpsertWithoutProductoInput
    connect?: categoria_productoWhereUniqueInput
    update?: XOR<XOR<categoria_productoUpdateToOneWithWhereWithoutProductoInput, categoria_productoUpdateWithoutProductoInput>, categoria_productoUncheckedUpdateWithoutProductoInput>
  }

  export type producto_varianteUpdateManyWithoutProductoNestedInput = {
    create?: XOR<producto_varianteCreateWithoutProductoInput, producto_varianteUncheckedCreateWithoutProductoInput> | producto_varianteCreateWithoutProductoInput[] | producto_varianteUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: producto_varianteCreateOrConnectWithoutProductoInput | producto_varianteCreateOrConnectWithoutProductoInput[]
    upsert?: producto_varianteUpsertWithWhereUniqueWithoutProductoInput | producto_varianteUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: producto_varianteCreateManyProductoInputEnvelope
    set?: producto_varianteWhereUniqueInput | producto_varianteWhereUniqueInput[]
    disconnect?: producto_varianteWhereUniqueInput | producto_varianteWhereUniqueInput[]
    delete?: producto_varianteWhereUniqueInput | producto_varianteWhereUniqueInput[]
    connect?: producto_varianteWhereUniqueInput | producto_varianteWhereUniqueInput[]
    update?: producto_varianteUpdateWithWhereUniqueWithoutProductoInput | producto_varianteUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: producto_varianteUpdateManyWithWhereWithoutProductoInput | producto_varianteUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: producto_varianteScalarWhereInput | producto_varianteScalarWhereInput[]
  }

  export type producto_varianteUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<producto_varianteCreateWithoutProductoInput, producto_varianteUncheckedCreateWithoutProductoInput> | producto_varianteCreateWithoutProductoInput[] | producto_varianteUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: producto_varianteCreateOrConnectWithoutProductoInput | producto_varianteCreateOrConnectWithoutProductoInput[]
    upsert?: producto_varianteUpsertWithWhereUniqueWithoutProductoInput | producto_varianteUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: producto_varianteCreateManyProductoInputEnvelope
    set?: producto_varianteWhereUniqueInput | producto_varianteWhereUniqueInput[]
    disconnect?: producto_varianteWhereUniqueInput | producto_varianteWhereUniqueInput[]
    delete?: producto_varianteWhereUniqueInput | producto_varianteWhereUniqueInput[]
    connect?: producto_varianteWhereUniqueInput | producto_varianteWhereUniqueInput[]
    update?: producto_varianteUpdateWithWhereUniqueWithoutProductoInput | producto_varianteUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: producto_varianteUpdateManyWithWhereWithoutProductoInput | producto_varianteUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: producto_varianteScalarWhereInput | producto_varianteScalarWhereInput[]
  }

  export type inventario_movimientoCreateNestedManyWithoutProducto_varianteInput = {
    create?: XOR<inventario_movimientoCreateWithoutProducto_varianteInput, inventario_movimientoUncheckedCreateWithoutProducto_varianteInput> | inventario_movimientoCreateWithoutProducto_varianteInput[] | inventario_movimientoUncheckedCreateWithoutProducto_varianteInput[]
    connectOrCreate?: inventario_movimientoCreateOrConnectWithoutProducto_varianteInput | inventario_movimientoCreateOrConnectWithoutProducto_varianteInput[]
    createMany?: inventario_movimientoCreateManyProducto_varianteInputEnvelope
    connect?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
  }

  export type productoCreateNestedOneWithoutProducto_varianteInput = {
    create?: XOR<productoCreateWithoutProducto_varianteInput, productoUncheckedCreateWithoutProducto_varianteInput>
    connectOrCreate?: productoCreateOrConnectWithoutProducto_varianteInput
    connect?: productoWhereUniqueInput
  }

  export type venta_detalleCreateNestedManyWithoutProducto_varianteInput = {
    create?: XOR<venta_detalleCreateWithoutProducto_varianteInput, venta_detalleUncheckedCreateWithoutProducto_varianteInput> | venta_detalleCreateWithoutProducto_varianteInput[] | venta_detalleUncheckedCreateWithoutProducto_varianteInput[]
    connectOrCreate?: venta_detalleCreateOrConnectWithoutProducto_varianteInput | venta_detalleCreateOrConnectWithoutProducto_varianteInput[]
    createMany?: venta_detalleCreateManyProducto_varianteInputEnvelope
    connect?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
  }

  export type inventario_movimientoUncheckedCreateNestedManyWithoutProducto_varianteInput = {
    create?: XOR<inventario_movimientoCreateWithoutProducto_varianteInput, inventario_movimientoUncheckedCreateWithoutProducto_varianteInput> | inventario_movimientoCreateWithoutProducto_varianteInput[] | inventario_movimientoUncheckedCreateWithoutProducto_varianteInput[]
    connectOrCreate?: inventario_movimientoCreateOrConnectWithoutProducto_varianteInput | inventario_movimientoCreateOrConnectWithoutProducto_varianteInput[]
    createMany?: inventario_movimientoCreateManyProducto_varianteInputEnvelope
    connect?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
  }

  export type venta_detalleUncheckedCreateNestedManyWithoutProducto_varianteInput = {
    create?: XOR<venta_detalleCreateWithoutProducto_varianteInput, venta_detalleUncheckedCreateWithoutProducto_varianteInput> | venta_detalleCreateWithoutProducto_varianteInput[] | venta_detalleUncheckedCreateWithoutProducto_varianteInput[]
    connectOrCreate?: venta_detalleCreateOrConnectWithoutProducto_varianteInput | venta_detalleCreateOrConnectWithoutProducto_varianteInput[]
    createMany?: venta_detalleCreateManyProducto_varianteInputEnvelope
    connect?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
  }

  export type inventario_movimientoUpdateManyWithoutProducto_varianteNestedInput = {
    create?: XOR<inventario_movimientoCreateWithoutProducto_varianteInput, inventario_movimientoUncheckedCreateWithoutProducto_varianteInput> | inventario_movimientoCreateWithoutProducto_varianteInput[] | inventario_movimientoUncheckedCreateWithoutProducto_varianteInput[]
    connectOrCreate?: inventario_movimientoCreateOrConnectWithoutProducto_varianteInput | inventario_movimientoCreateOrConnectWithoutProducto_varianteInput[]
    upsert?: inventario_movimientoUpsertWithWhereUniqueWithoutProducto_varianteInput | inventario_movimientoUpsertWithWhereUniqueWithoutProducto_varianteInput[]
    createMany?: inventario_movimientoCreateManyProducto_varianteInputEnvelope
    set?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
    disconnect?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
    delete?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
    connect?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
    update?: inventario_movimientoUpdateWithWhereUniqueWithoutProducto_varianteInput | inventario_movimientoUpdateWithWhereUniqueWithoutProducto_varianteInput[]
    updateMany?: inventario_movimientoUpdateManyWithWhereWithoutProducto_varianteInput | inventario_movimientoUpdateManyWithWhereWithoutProducto_varianteInput[]
    deleteMany?: inventario_movimientoScalarWhereInput | inventario_movimientoScalarWhereInput[]
  }

  export type productoUpdateOneRequiredWithoutProducto_varianteNestedInput = {
    create?: XOR<productoCreateWithoutProducto_varianteInput, productoUncheckedCreateWithoutProducto_varianteInput>
    connectOrCreate?: productoCreateOrConnectWithoutProducto_varianteInput
    upsert?: productoUpsertWithoutProducto_varianteInput
    connect?: productoWhereUniqueInput
    update?: XOR<XOR<productoUpdateToOneWithWhereWithoutProducto_varianteInput, productoUpdateWithoutProducto_varianteInput>, productoUncheckedUpdateWithoutProducto_varianteInput>
  }

  export type venta_detalleUpdateManyWithoutProducto_varianteNestedInput = {
    create?: XOR<venta_detalleCreateWithoutProducto_varianteInput, venta_detalleUncheckedCreateWithoutProducto_varianteInput> | venta_detalleCreateWithoutProducto_varianteInput[] | venta_detalleUncheckedCreateWithoutProducto_varianteInput[]
    connectOrCreate?: venta_detalleCreateOrConnectWithoutProducto_varianteInput | venta_detalleCreateOrConnectWithoutProducto_varianteInput[]
    upsert?: venta_detalleUpsertWithWhereUniqueWithoutProducto_varianteInput | venta_detalleUpsertWithWhereUniqueWithoutProducto_varianteInput[]
    createMany?: venta_detalleCreateManyProducto_varianteInputEnvelope
    set?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
    disconnect?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
    delete?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
    connect?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
    update?: venta_detalleUpdateWithWhereUniqueWithoutProducto_varianteInput | venta_detalleUpdateWithWhereUniqueWithoutProducto_varianteInput[]
    updateMany?: venta_detalleUpdateManyWithWhereWithoutProducto_varianteInput | venta_detalleUpdateManyWithWhereWithoutProducto_varianteInput[]
    deleteMany?: venta_detalleScalarWhereInput | venta_detalleScalarWhereInput[]
  }

  export type inventario_movimientoUncheckedUpdateManyWithoutProducto_varianteNestedInput = {
    create?: XOR<inventario_movimientoCreateWithoutProducto_varianteInput, inventario_movimientoUncheckedCreateWithoutProducto_varianteInput> | inventario_movimientoCreateWithoutProducto_varianteInput[] | inventario_movimientoUncheckedCreateWithoutProducto_varianteInput[]
    connectOrCreate?: inventario_movimientoCreateOrConnectWithoutProducto_varianteInput | inventario_movimientoCreateOrConnectWithoutProducto_varianteInput[]
    upsert?: inventario_movimientoUpsertWithWhereUniqueWithoutProducto_varianteInput | inventario_movimientoUpsertWithWhereUniqueWithoutProducto_varianteInput[]
    createMany?: inventario_movimientoCreateManyProducto_varianteInputEnvelope
    set?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
    disconnect?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
    delete?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
    connect?: inventario_movimientoWhereUniqueInput | inventario_movimientoWhereUniqueInput[]
    update?: inventario_movimientoUpdateWithWhereUniqueWithoutProducto_varianteInput | inventario_movimientoUpdateWithWhereUniqueWithoutProducto_varianteInput[]
    updateMany?: inventario_movimientoUpdateManyWithWhereWithoutProducto_varianteInput | inventario_movimientoUpdateManyWithWhereWithoutProducto_varianteInput[]
    deleteMany?: inventario_movimientoScalarWhereInput | inventario_movimientoScalarWhereInput[]
  }

  export type venta_detalleUncheckedUpdateManyWithoutProducto_varianteNestedInput = {
    create?: XOR<venta_detalleCreateWithoutProducto_varianteInput, venta_detalleUncheckedCreateWithoutProducto_varianteInput> | venta_detalleCreateWithoutProducto_varianteInput[] | venta_detalleUncheckedCreateWithoutProducto_varianteInput[]
    connectOrCreate?: venta_detalleCreateOrConnectWithoutProducto_varianteInput | venta_detalleCreateOrConnectWithoutProducto_varianteInput[]
    upsert?: venta_detalleUpsertWithWhereUniqueWithoutProducto_varianteInput | venta_detalleUpsertWithWhereUniqueWithoutProducto_varianteInput[]
    createMany?: venta_detalleCreateManyProducto_varianteInputEnvelope
    set?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
    disconnect?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
    delete?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
    connect?: venta_detalleWhereUniqueInput | venta_detalleWhereUniqueInput[]
    update?: venta_detalleUpdateWithWhereUniqueWithoutProducto_varianteInput | venta_detalleUpdateWithWhereUniqueWithoutProducto_varianteInput[]
    updateMany?: venta_detalleUpdateManyWithWhereWithoutProducto_varianteInput | venta_detalleUpdateManyWithWhereWithoutProducto_varianteInput[]
    deleteMany?: venta_detalleScalarWhereInput | venta_detalleScalarWhereInput[]
  }

  export type operacionCreateNestedManyWithoutTipo_operacionInput = {
    create?: XOR<operacionCreateWithoutTipo_operacionInput, operacionUncheckedCreateWithoutTipo_operacionInput> | operacionCreateWithoutTipo_operacionInput[] | operacionUncheckedCreateWithoutTipo_operacionInput[]
    connectOrCreate?: operacionCreateOrConnectWithoutTipo_operacionInput | operacionCreateOrConnectWithoutTipo_operacionInput[]
    createMany?: operacionCreateManyTipo_operacionInputEnvelope
    connect?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
  }

  export type operacionUncheckedCreateNestedManyWithoutTipo_operacionInput = {
    create?: XOR<operacionCreateWithoutTipo_operacionInput, operacionUncheckedCreateWithoutTipo_operacionInput> | operacionCreateWithoutTipo_operacionInput[] | operacionUncheckedCreateWithoutTipo_operacionInput[]
    connectOrCreate?: operacionCreateOrConnectWithoutTipo_operacionInput | operacionCreateOrConnectWithoutTipo_operacionInput[]
    createMany?: operacionCreateManyTipo_operacionInputEnvelope
    connect?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
  }

  export type operacionUpdateManyWithoutTipo_operacionNestedInput = {
    create?: XOR<operacionCreateWithoutTipo_operacionInput, operacionUncheckedCreateWithoutTipo_operacionInput> | operacionCreateWithoutTipo_operacionInput[] | operacionUncheckedCreateWithoutTipo_operacionInput[]
    connectOrCreate?: operacionCreateOrConnectWithoutTipo_operacionInput | operacionCreateOrConnectWithoutTipo_operacionInput[]
    upsert?: operacionUpsertWithWhereUniqueWithoutTipo_operacionInput | operacionUpsertWithWhereUniqueWithoutTipo_operacionInput[]
    createMany?: operacionCreateManyTipo_operacionInputEnvelope
    set?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
    disconnect?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
    delete?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
    connect?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
    update?: operacionUpdateWithWhereUniqueWithoutTipo_operacionInput | operacionUpdateWithWhereUniqueWithoutTipo_operacionInput[]
    updateMany?: operacionUpdateManyWithWhereWithoutTipo_operacionInput | operacionUpdateManyWithWhereWithoutTipo_operacionInput[]
    deleteMany?: operacionScalarWhereInput | operacionScalarWhereInput[]
  }

  export type operacionUncheckedUpdateManyWithoutTipo_operacionNestedInput = {
    create?: XOR<operacionCreateWithoutTipo_operacionInput, operacionUncheckedCreateWithoutTipo_operacionInput> | operacionCreateWithoutTipo_operacionInput[] | operacionUncheckedCreateWithoutTipo_operacionInput[]
    connectOrCreate?: operacionCreateOrConnectWithoutTipo_operacionInput | operacionCreateOrConnectWithoutTipo_operacionInput[]
    upsert?: operacionUpsertWithWhereUniqueWithoutTipo_operacionInput | operacionUpsertWithWhereUniqueWithoutTipo_operacionInput[]
    createMany?: operacionCreateManyTipo_operacionInputEnvelope
    set?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
    disconnect?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
    delete?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
    connect?: operacionWhereUniqueInput | operacionWhereUniqueInput[]
    update?: operacionUpdateWithWhereUniqueWithoutTipo_operacionInput | operacionUpdateWithWhereUniqueWithoutTipo_operacionInput[]
    updateMany?: operacionUpdateManyWithWhereWithoutTipo_operacionInput | operacionUpdateManyWithWhereWithoutTipo_operacionInput[]
    deleteMany?: operacionScalarWhereInput | operacionScalarWhereInput[]
  }

  export type producto_varianteCreateNestedOneWithoutVenta_detalleInput = {
    create?: XOR<producto_varianteCreateWithoutVenta_detalleInput, producto_varianteUncheckedCreateWithoutVenta_detalleInput>
    connectOrCreate?: producto_varianteCreateOrConnectWithoutVenta_detalleInput
    connect?: producto_varianteWhereUniqueInput
  }

  export type operacion_ventaCreateNestedOneWithoutVenta_detalleInput = {
    create?: XOR<operacion_ventaCreateWithoutVenta_detalleInput, operacion_ventaUncheckedCreateWithoutVenta_detalleInput>
    connectOrCreate?: operacion_ventaCreateOrConnectWithoutVenta_detalleInput
    connect?: operacion_ventaWhereUniqueInput
  }

  export type producto_varianteUpdateOneRequiredWithoutVenta_detalleNestedInput = {
    create?: XOR<producto_varianteCreateWithoutVenta_detalleInput, producto_varianteUncheckedCreateWithoutVenta_detalleInput>
    connectOrCreate?: producto_varianteCreateOrConnectWithoutVenta_detalleInput
    upsert?: producto_varianteUpsertWithoutVenta_detalleInput
    connect?: producto_varianteWhereUniqueInput
    update?: XOR<XOR<producto_varianteUpdateToOneWithWhereWithoutVenta_detalleInput, producto_varianteUpdateWithoutVenta_detalleInput>, producto_varianteUncheckedUpdateWithoutVenta_detalleInput>
  }

  export type operacion_ventaUpdateOneRequiredWithoutVenta_detalleNestedInput = {
    create?: XOR<operacion_ventaCreateWithoutVenta_detalleInput, operacion_ventaUncheckedCreateWithoutVenta_detalleInput>
    connectOrCreate?: operacion_ventaCreateOrConnectWithoutVenta_detalleInput
    upsert?: operacion_ventaUpsertWithoutVenta_detalleInput
    connect?: operacion_ventaWhereUniqueInput
    update?: XOR<XOR<operacion_ventaUpdateToOneWithWhereWithoutVenta_detalleInput, operacion_ventaUpdateWithoutVenta_detalleInput>, operacion_ventaUncheckedUpdateWithoutVenta_detalleInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type productoCreateWithoutCategoria_productoInput = {
    nombre: string
    costo: Decimal | DecimalJsLike | number | string
    precio_unitario: Decimal | DecimalJsLike | number | string
    producto_variante?: producto_varianteCreateNestedManyWithoutProductoInput
  }

  export type productoUncheckedCreateWithoutCategoria_productoInput = {
    id_producto?: number
    nombre: string
    costo: Decimal | DecimalJsLike | number | string
    precio_unitario: Decimal | DecimalJsLike | number | string
    producto_variante?: producto_varianteUncheckedCreateNestedManyWithoutProductoInput
  }

  export type productoCreateOrConnectWithoutCategoria_productoInput = {
    where: productoWhereUniqueInput
    create: XOR<productoCreateWithoutCategoria_productoInput, productoUncheckedCreateWithoutCategoria_productoInput>
  }

  export type productoCreateManyCategoria_productoInputEnvelope = {
    data: productoCreateManyCategoria_productoInput | productoCreateManyCategoria_productoInput[]
    skipDuplicates?: boolean
  }

  export type productoUpsertWithWhereUniqueWithoutCategoria_productoInput = {
    where: productoWhereUniqueInput
    update: XOR<productoUpdateWithoutCategoria_productoInput, productoUncheckedUpdateWithoutCategoria_productoInput>
    create: XOR<productoCreateWithoutCategoria_productoInput, productoUncheckedCreateWithoutCategoria_productoInput>
  }

  export type productoUpdateWithWhereUniqueWithoutCategoria_productoInput = {
    where: productoWhereUniqueInput
    data: XOR<productoUpdateWithoutCategoria_productoInput, productoUncheckedUpdateWithoutCategoria_productoInput>
  }

  export type productoUpdateManyWithWhereWithoutCategoria_productoInput = {
    where: productoScalarWhereInput
    data: XOR<productoUpdateManyMutationInput, productoUncheckedUpdateManyWithoutCategoria_productoInput>
  }

  export type productoScalarWhereInput = {
    AND?: productoScalarWhereInput | productoScalarWhereInput[]
    OR?: productoScalarWhereInput[]
    NOT?: productoScalarWhereInput | productoScalarWhereInput[]
    id_producto?: IntFilter<"producto"> | number
    id_categoria?: IntFilter<"producto"> | number
    nombre?: StringFilter<"producto"> | string
    costo?: DecimalFilter<"producto"> | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFilter<"producto"> | Decimal | DecimalJsLike | number | string
  }

  export type operacion_ventaCreateWithoutClienteInput = {
    total: Decimal | DecimalJsLike | number | string
    metodo_pago: metodo_pagoCreateNestedOneWithoutOperacion_ventaInput
    operacion: operacionCreateNestedOneWithoutOperacion_ventaInput
    pago?: pagoCreateNestedManyWithoutOperacion_ventaInput
    venta_detalle?: venta_detalleCreateNestedManyWithoutOperacion_ventaInput
  }

  export type operacion_ventaUncheckedCreateWithoutClienteInput = {
    id_venta?: number
    id_operacion: number
    id_metodo_pago: number
    total: Decimal | DecimalJsLike | number | string
    pago?: pagoUncheckedCreateNestedManyWithoutOperacion_ventaInput
    venta_detalle?: venta_detalleUncheckedCreateNestedManyWithoutOperacion_ventaInput
  }

  export type operacion_ventaCreateOrConnectWithoutClienteInput = {
    where: operacion_ventaWhereUniqueInput
    create: XOR<operacion_ventaCreateWithoutClienteInput, operacion_ventaUncheckedCreateWithoutClienteInput>
  }

  export type operacion_ventaCreateManyClienteInputEnvelope = {
    data: operacion_ventaCreateManyClienteInput | operacion_ventaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type operacion_ventaUpsertWithWhereUniqueWithoutClienteInput = {
    where: operacion_ventaWhereUniqueInput
    update: XOR<operacion_ventaUpdateWithoutClienteInput, operacion_ventaUncheckedUpdateWithoutClienteInput>
    create: XOR<operacion_ventaCreateWithoutClienteInput, operacion_ventaUncheckedCreateWithoutClienteInput>
  }

  export type operacion_ventaUpdateWithWhereUniqueWithoutClienteInput = {
    where: operacion_ventaWhereUniqueInput
    data: XOR<operacion_ventaUpdateWithoutClienteInput, operacion_ventaUncheckedUpdateWithoutClienteInput>
  }

  export type operacion_ventaUpdateManyWithWhereWithoutClienteInput = {
    where: operacion_ventaScalarWhereInput
    data: XOR<operacion_ventaUpdateManyMutationInput, operacion_ventaUncheckedUpdateManyWithoutClienteInput>
  }

  export type operacion_ventaScalarWhereInput = {
    AND?: operacion_ventaScalarWhereInput | operacion_ventaScalarWhereInput[]
    OR?: operacion_ventaScalarWhereInput[]
    NOT?: operacion_ventaScalarWhereInput | operacion_ventaScalarWhereInput[]
    id_venta?: IntFilter<"operacion_venta"> | number
    id_operacion?: IntFilter<"operacion_venta"> | number
    id_cliente?: IntFilter<"operacion_venta"> | number
    id_metodo_pago?: IntFilter<"operacion_venta"> | number
    total?: DecimalFilter<"operacion_venta"> | Decimal | DecimalJsLike | number | string
  }

  export type operacionCreateWithoutEstado_operacionInput = {
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string
    inventario_movimiento?: inventario_movimientoCreateNestedManyWithoutOperacionInput
    tipo_operacion: tipo_operacionCreateNestedOneWithoutOperacionInput
    operacion_venta?: operacion_ventaCreateNestedManyWithoutOperacionInput
  }

  export type operacionUncheckedCreateWithoutEstado_operacionInput = {
    id_operacion?: number
    id_tipo_operacion: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string
    inventario_movimiento?: inventario_movimientoUncheckedCreateNestedManyWithoutOperacionInput
    operacion_venta?: operacion_ventaUncheckedCreateNestedManyWithoutOperacionInput
  }

  export type operacionCreateOrConnectWithoutEstado_operacionInput = {
    where: operacionWhereUniqueInput
    create: XOR<operacionCreateWithoutEstado_operacionInput, operacionUncheckedCreateWithoutEstado_operacionInput>
  }

  export type operacionCreateManyEstado_operacionInputEnvelope = {
    data: operacionCreateManyEstado_operacionInput | operacionCreateManyEstado_operacionInput[]
    skipDuplicates?: boolean
  }

  export type operacionUpsertWithWhereUniqueWithoutEstado_operacionInput = {
    where: operacionWhereUniqueInput
    update: XOR<operacionUpdateWithoutEstado_operacionInput, operacionUncheckedUpdateWithoutEstado_operacionInput>
    create: XOR<operacionCreateWithoutEstado_operacionInput, operacionUncheckedCreateWithoutEstado_operacionInput>
  }

  export type operacionUpdateWithWhereUniqueWithoutEstado_operacionInput = {
    where: operacionWhereUniqueInput
    data: XOR<operacionUpdateWithoutEstado_operacionInput, operacionUncheckedUpdateWithoutEstado_operacionInput>
  }

  export type operacionUpdateManyWithWhereWithoutEstado_operacionInput = {
    where: operacionScalarWhereInput
    data: XOR<operacionUpdateManyMutationInput, operacionUncheckedUpdateManyWithoutEstado_operacionInput>
  }

  export type operacionScalarWhereInput = {
    AND?: operacionScalarWhereInput | operacionScalarWhereInput[]
    OR?: operacionScalarWhereInput[]
    NOT?: operacionScalarWhereInput | operacionScalarWhereInput[]
    id_operacion?: IntFilter<"operacion"> | number
    id_tipo_operacion?: IntFilter<"operacion"> | number
    id_estado_operacion?: IntFilter<"operacion"> | number
    fecha_creacion?: DateTimeFilter<"operacion"> | Date | string
    fecha_actualizacion?: DateTimeFilter<"operacion"> | Date | string
  }

  export type operacionCreateWithoutInventario_movimientoInput = {
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string
    estado_operacion: estado_operacionCreateNestedOneWithoutOperacionInput
    tipo_operacion: tipo_operacionCreateNestedOneWithoutOperacionInput
    operacion_venta?: operacion_ventaCreateNestedManyWithoutOperacionInput
  }

  export type operacionUncheckedCreateWithoutInventario_movimientoInput = {
    id_operacion?: number
    id_tipo_operacion: number
    id_estado_operacion: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string
    operacion_venta?: operacion_ventaUncheckedCreateNestedManyWithoutOperacionInput
  }

  export type operacionCreateOrConnectWithoutInventario_movimientoInput = {
    where: operacionWhereUniqueInput
    create: XOR<operacionCreateWithoutInventario_movimientoInput, operacionUncheckedCreateWithoutInventario_movimientoInput>
  }

  export type producto_varianteCreateWithoutInventario_movimientoInput = {
    talle: string
    color: string
    stock: number
    producto: productoCreateNestedOneWithoutProducto_varianteInput
    venta_detalle?: venta_detalleCreateNestedManyWithoutProducto_varianteInput
  }

  export type producto_varianteUncheckedCreateWithoutInventario_movimientoInput = {
    id_producto_variante?: number
    id_producto: number
    talle: string
    color: string
    stock: number
    venta_detalle?: venta_detalleUncheckedCreateNestedManyWithoutProducto_varianteInput
  }

  export type producto_varianteCreateOrConnectWithoutInventario_movimientoInput = {
    where: producto_varianteWhereUniqueInput
    create: XOR<producto_varianteCreateWithoutInventario_movimientoInput, producto_varianteUncheckedCreateWithoutInventario_movimientoInput>
  }

  export type operacionUpsertWithoutInventario_movimientoInput = {
    update: XOR<operacionUpdateWithoutInventario_movimientoInput, operacionUncheckedUpdateWithoutInventario_movimientoInput>
    create: XOR<operacionCreateWithoutInventario_movimientoInput, operacionUncheckedCreateWithoutInventario_movimientoInput>
    where?: operacionWhereInput
  }

  export type operacionUpdateToOneWithWhereWithoutInventario_movimientoInput = {
    where?: operacionWhereInput
    data: XOR<operacionUpdateWithoutInventario_movimientoInput, operacionUncheckedUpdateWithoutInventario_movimientoInput>
  }

  export type operacionUpdateWithoutInventario_movimientoInput = {
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_operacion?: estado_operacionUpdateOneRequiredWithoutOperacionNestedInput
    tipo_operacion?: tipo_operacionUpdateOneRequiredWithoutOperacionNestedInput
    operacion_venta?: operacion_ventaUpdateManyWithoutOperacionNestedInput
  }

  export type operacionUncheckedUpdateWithoutInventario_movimientoInput = {
    id_operacion?: IntFieldUpdateOperationsInput | number
    id_tipo_operacion?: IntFieldUpdateOperationsInput | number
    id_estado_operacion?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    operacion_venta?: operacion_ventaUncheckedUpdateManyWithoutOperacionNestedInput
  }

  export type producto_varianteUpsertWithoutInventario_movimientoInput = {
    update: XOR<producto_varianteUpdateWithoutInventario_movimientoInput, producto_varianteUncheckedUpdateWithoutInventario_movimientoInput>
    create: XOR<producto_varianteCreateWithoutInventario_movimientoInput, producto_varianteUncheckedCreateWithoutInventario_movimientoInput>
    where?: producto_varianteWhereInput
  }

  export type producto_varianteUpdateToOneWithWhereWithoutInventario_movimientoInput = {
    where?: producto_varianteWhereInput
    data: XOR<producto_varianteUpdateWithoutInventario_movimientoInput, producto_varianteUncheckedUpdateWithoutInventario_movimientoInput>
  }

  export type producto_varianteUpdateWithoutInventario_movimientoInput = {
    talle?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    producto?: productoUpdateOneRequiredWithoutProducto_varianteNestedInput
    venta_detalle?: venta_detalleUpdateManyWithoutProducto_varianteNestedInput
  }

  export type producto_varianteUncheckedUpdateWithoutInventario_movimientoInput = {
    id_producto_variante?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    talle?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    venta_detalle?: venta_detalleUncheckedUpdateManyWithoutProducto_varianteNestedInput
  }

  export type operacion_ventaCreateWithoutMetodo_pagoInput = {
    total: Decimal | DecimalJsLike | number | string
    cliente: clienteCreateNestedOneWithoutOperacion_ventaInput
    operacion: operacionCreateNestedOneWithoutOperacion_ventaInput
    pago?: pagoCreateNestedManyWithoutOperacion_ventaInput
    venta_detalle?: venta_detalleCreateNestedManyWithoutOperacion_ventaInput
  }

  export type operacion_ventaUncheckedCreateWithoutMetodo_pagoInput = {
    id_venta?: number
    id_operacion: number
    id_cliente: number
    total: Decimal | DecimalJsLike | number | string
    pago?: pagoUncheckedCreateNestedManyWithoutOperacion_ventaInput
    venta_detalle?: venta_detalleUncheckedCreateNestedManyWithoutOperacion_ventaInput
  }

  export type operacion_ventaCreateOrConnectWithoutMetodo_pagoInput = {
    where: operacion_ventaWhereUniqueInput
    create: XOR<operacion_ventaCreateWithoutMetodo_pagoInput, operacion_ventaUncheckedCreateWithoutMetodo_pagoInput>
  }

  export type operacion_ventaCreateManyMetodo_pagoInputEnvelope = {
    data: operacion_ventaCreateManyMetodo_pagoInput | operacion_ventaCreateManyMetodo_pagoInput[]
    skipDuplicates?: boolean
  }

  export type pagoCreateWithoutMetodo_pagoInput = {
    monto_pagado: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string
    operacion_venta: operacion_ventaCreateNestedOneWithoutPagoInput
  }

  export type pagoUncheckedCreateWithoutMetodo_pagoInput = {
    id_pago?: number
    id_venta: number
    monto_pagado: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string
  }

  export type pagoCreateOrConnectWithoutMetodo_pagoInput = {
    where: pagoWhereUniqueInput
    create: XOR<pagoCreateWithoutMetodo_pagoInput, pagoUncheckedCreateWithoutMetodo_pagoInput>
  }

  export type pagoCreateManyMetodo_pagoInputEnvelope = {
    data: pagoCreateManyMetodo_pagoInput | pagoCreateManyMetodo_pagoInput[]
    skipDuplicates?: boolean
  }

  export type operacion_ventaUpsertWithWhereUniqueWithoutMetodo_pagoInput = {
    where: operacion_ventaWhereUniqueInput
    update: XOR<operacion_ventaUpdateWithoutMetodo_pagoInput, operacion_ventaUncheckedUpdateWithoutMetodo_pagoInput>
    create: XOR<operacion_ventaCreateWithoutMetodo_pagoInput, operacion_ventaUncheckedCreateWithoutMetodo_pagoInput>
  }

  export type operacion_ventaUpdateWithWhereUniqueWithoutMetodo_pagoInput = {
    where: operacion_ventaWhereUniqueInput
    data: XOR<operacion_ventaUpdateWithoutMetodo_pagoInput, operacion_ventaUncheckedUpdateWithoutMetodo_pagoInput>
  }

  export type operacion_ventaUpdateManyWithWhereWithoutMetodo_pagoInput = {
    where: operacion_ventaScalarWhereInput
    data: XOR<operacion_ventaUpdateManyMutationInput, operacion_ventaUncheckedUpdateManyWithoutMetodo_pagoInput>
  }

  export type pagoUpsertWithWhereUniqueWithoutMetodo_pagoInput = {
    where: pagoWhereUniqueInput
    update: XOR<pagoUpdateWithoutMetodo_pagoInput, pagoUncheckedUpdateWithoutMetodo_pagoInput>
    create: XOR<pagoCreateWithoutMetodo_pagoInput, pagoUncheckedCreateWithoutMetodo_pagoInput>
  }

  export type pagoUpdateWithWhereUniqueWithoutMetodo_pagoInput = {
    where: pagoWhereUniqueInput
    data: XOR<pagoUpdateWithoutMetodo_pagoInput, pagoUncheckedUpdateWithoutMetodo_pagoInput>
  }

  export type pagoUpdateManyWithWhereWithoutMetodo_pagoInput = {
    where: pagoScalarWhereInput
    data: XOR<pagoUpdateManyMutationInput, pagoUncheckedUpdateManyWithoutMetodo_pagoInput>
  }

  export type pagoScalarWhereInput = {
    AND?: pagoScalarWhereInput | pagoScalarWhereInput[]
    OR?: pagoScalarWhereInput[]
    NOT?: pagoScalarWhereInput | pagoScalarWhereInput[]
    id_pago?: IntFilter<"pago"> | number
    id_venta?: IntFilter<"pago"> | number
    id_metodo_pago?: IntFilter<"pago"> | number
    monto_pagado?: DecimalFilter<"pago"> | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeFilter<"pago"> | Date | string
  }

  export type inventario_movimientoCreateWithoutOperacionInput = {
    tipo_movimiento: string
    cantidad: number
    fecha_movimiento?: Date | string
    comentario?: string | null
    producto_variante: producto_varianteCreateNestedOneWithoutInventario_movimientoInput
  }

  export type inventario_movimientoUncheckedCreateWithoutOperacionInput = {
    id_movimiento?: number
    id_producto_variante: number
    tipo_movimiento: string
    cantidad: number
    fecha_movimiento?: Date | string
    comentario?: string | null
  }

  export type inventario_movimientoCreateOrConnectWithoutOperacionInput = {
    where: inventario_movimientoWhereUniqueInput
    create: XOR<inventario_movimientoCreateWithoutOperacionInput, inventario_movimientoUncheckedCreateWithoutOperacionInput>
  }

  export type inventario_movimientoCreateManyOperacionInputEnvelope = {
    data: inventario_movimientoCreateManyOperacionInput | inventario_movimientoCreateManyOperacionInput[]
    skipDuplicates?: boolean
  }

  export type estado_operacionCreateWithoutOperacionInput = {
    nombre: string
  }

  export type estado_operacionUncheckedCreateWithoutOperacionInput = {
    id_estado_operacion?: number
    nombre: string
  }

  export type estado_operacionCreateOrConnectWithoutOperacionInput = {
    where: estado_operacionWhereUniqueInput
    create: XOR<estado_operacionCreateWithoutOperacionInput, estado_operacionUncheckedCreateWithoutOperacionInput>
  }

  export type tipo_operacionCreateWithoutOperacionInput = {
    nombre: string
  }

  export type tipo_operacionUncheckedCreateWithoutOperacionInput = {
    id_tipo_operacion?: number
    nombre: string
  }

  export type tipo_operacionCreateOrConnectWithoutOperacionInput = {
    where: tipo_operacionWhereUniqueInput
    create: XOR<tipo_operacionCreateWithoutOperacionInput, tipo_operacionUncheckedCreateWithoutOperacionInput>
  }

  export type operacion_ventaCreateWithoutOperacionInput = {
    total: Decimal | DecimalJsLike | number | string
    cliente: clienteCreateNestedOneWithoutOperacion_ventaInput
    metodo_pago: metodo_pagoCreateNestedOneWithoutOperacion_ventaInput
    pago?: pagoCreateNestedManyWithoutOperacion_ventaInput
    venta_detalle?: venta_detalleCreateNestedManyWithoutOperacion_ventaInput
  }

  export type operacion_ventaUncheckedCreateWithoutOperacionInput = {
    id_venta?: number
    id_cliente: number
    id_metodo_pago: number
    total: Decimal | DecimalJsLike | number | string
    pago?: pagoUncheckedCreateNestedManyWithoutOperacion_ventaInput
    venta_detalle?: venta_detalleUncheckedCreateNestedManyWithoutOperacion_ventaInput
  }

  export type operacion_ventaCreateOrConnectWithoutOperacionInput = {
    where: operacion_ventaWhereUniqueInput
    create: XOR<operacion_ventaCreateWithoutOperacionInput, operacion_ventaUncheckedCreateWithoutOperacionInput>
  }

  export type operacion_ventaCreateManyOperacionInputEnvelope = {
    data: operacion_ventaCreateManyOperacionInput | operacion_ventaCreateManyOperacionInput[]
    skipDuplicates?: boolean
  }

  export type inventario_movimientoUpsertWithWhereUniqueWithoutOperacionInput = {
    where: inventario_movimientoWhereUniqueInput
    update: XOR<inventario_movimientoUpdateWithoutOperacionInput, inventario_movimientoUncheckedUpdateWithoutOperacionInput>
    create: XOR<inventario_movimientoCreateWithoutOperacionInput, inventario_movimientoUncheckedCreateWithoutOperacionInput>
  }

  export type inventario_movimientoUpdateWithWhereUniqueWithoutOperacionInput = {
    where: inventario_movimientoWhereUniqueInput
    data: XOR<inventario_movimientoUpdateWithoutOperacionInput, inventario_movimientoUncheckedUpdateWithoutOperacionInput>
  }

  export type inventario_movimientoUpdateManyWithWhereWithoutOperacionInput = {
    where: inventario_movimientoScalarWhereInput
    data: XOR<inventario_movimientoUpdateManyMutationInput, inventario_movimientoUncheckedUpdateManyWithoutOperacionInput>
  }

  export type inventario_movimientoScalarWhereInput = {
    AND?: inventario_movimientoScalarWhereInput | inventario_movimientoScalarWhereInput[]
    OR?: inventario_movimientoScalarWhereInput[]
    NOT?: inventario_movimientoScalarWhereInput | inventario_movimientoScalarWhereInput[]
    id_movimiento?: IntFilter<"inventario_movimiento"> | number
    id_producto_variante?: IntFilter<"inventario_movimiento"> | number
    tipo_movimiento?: StringFilter<"inventario_movimiento"> | string
    cantidad?: IntFilter<"inventario_movimiento"> | number
    id_operacion?: IntNullableFilter<"inventario_movimiento"> | number | null
    fecha_movimiento?: DateTimeFilter<"inventario_movimiento"> | Date | string
    comentario?: StringNullableFilter<"inventario_movimiento"> | string | null
  }

  export type estado_operacionUpsertWithoutOperacionInput = {
    update: XOR<estado_operacionUpdateWithoutOperacionInput, estado_operacionUncheckedUpdateWithoutOperacionInput>
    create: XOR<estado_operacionCreateWithoutOperacionInput, estado_operacionUncheckedCreateWithoutOperacionInput>
    where?: estado_operacionWhereInput
  }

  export type estado_operacionUpdateToOneWithWhereWithoutOperacionInput = {
    where?: estado_operacionWhereInput
    data: XOR<estado_operacionUpdateWithoutOperacionInput, estado_operacionUncheckedUpdateWithoutOperacionInput>
  }

  export type estado_operacionUpdateWithoutOperacionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type estado_operacionUncheckedUpdateWithoutOperacionInput = {
    id_estado_operacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_operacionUpsertWithoutOperacionInput = {
    update: XOR<tipo_operacionUpdateWithoutOperacionInput, tipo_operacionUncheckedUpdateWithoutOperacionInput>
    create: XOR<tipo_operacionCreateWithoutOperacionInput, tipo_operacionUncheckedCreateWithoutOperacionInput>
    where?: tipo_operacionWhereInput
  }

  export type tipo_operacionUpdateToOneWithWhereWithoutOperacionInput = {
    where?: tipo_operacionWhereInput
    data: XOR<tipo_operacionUpdateWithoutOperacionInput, tipo_operacionUncheckedUpdateWithoutOperacionInput>
  }

  export type tipo_operacionUpdateWithoutOperacionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_operacionUncheckedUpdateWithoutOperacionInput = {
    id_tipo_operacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type operacion_ventaUpsertWithWhereUniqueWithoutOperacionInput = {
    where: operacion_ventaWhereUniqueInput
    update: XOR<operacion_ventaUpdateWithoutOperacionInput, operacion_ventaUncheckedUpdateWithoutOperacionInput>
    create: XOR<operacion_ventaCreateWithoutOperacionInput, operacion_ventaUncheckedCreateWithoutOperacionInput>
  }

  export type operacion_ventaUpdateWithWhereUniqueWithoutOperacionInput = {
    where: operacion_ventaWhereUniqueInput
    data: XOR<operacion_ventaUpdateWithoutOperacionInput, operacion_ventaUncheckedUpdateWithoutOperacionInput>
  }

  export type operacion_ventaUpdateManyWithWhereWithoutOperacionInput = {
    where: operacion_ventaScalarWhereInput
    data: XOR<operacion_ventaUpdateManyMutationInput, operacion_ventaUncheckedUpdateManyWithoutOperacionInput>
  }

  export type clienteCreateWithoutOperacion_ventaInput = {
    nombre: string
    apellido: string
    celular?: string | null
  }

  export type clienteUncheckedCreateWithoutOperacion_ventaInput = {
    id_cliente?: number
    nombre: string
    apellido: string
    celular?: string | null
  }

  export type clienteCreateOrConnectWithoutOperacion_ventaInput = {
    where: clienteWhereUniqueInput
    create: XOR<clienteCreateWithoutOperacion_ventaInput, clienteUncheckedCreateWithoutOperacion_ventaInput>
  }

  export type metodo_pagoCreateWithoutOperacion_ventaInput = {
    nombre: string
    pago?: pagoCreateNestedManyWithoutMetodo_pagoInput
  }

  export type metodo_pagoUncheckedCreateWithoutOperacion_ventaInput = {
    id_metodo_pago?: number
    nombre: string
    pago?: pagoUncheckedCreateNestedManyWithoutMetodo_pagoInput
  }

  export type metodo_pagoCreateOrConnectWithoutOperacion_ventaInput = {
    where: metodo_pagoWhereUniqueInput
    create: XOR<metodo_pagoCreateWithoutOperacion_ventaInput, metodo_pagoUncheckedCreateWithoutOperacion_ventaInput>
  }

  export type operacionCreateWithoutOperacion_ventaInput = {
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string
    inventario_movimiento?: inventario_movimientoCreateNestedManyWithoutOperacionInput
    estado_operacion: estado_operacionCreateNestedOneWithoutOperacionInput
    tipo_operacion: tipo_operacionCreateNestedOneWithoutOperacionInput
  }

  export type operacionUncheckedCreateWithoutOperacion_ventaInput = {
    id_operacion?: number
    id_tipo_operacion: number
    id_estado_operacion: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string
    inventario_movimiento?: inventario_movimientoUncheckedCreateNestedManyWithoutOperacionInput
  }

  export type operacionCreateOrConnectWithoutOperacion_ventaInput = {
    where: operacionWhereUniqueInput
    create: XOR<operacionCreateWithoutOperacion_ventaInput, operacionUncheckedCreateWithoutOperacion_ventaInput>
  }

  export type pagoCreateWithoutOperacion_ventaInput = {
    monto_pagado: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string
    metodo_pago: metodo_pagoCreateNestedOneWithoutPagoInput
  }

  export type pagoUncheckedCreateWithoutOperacion_ventaInput = {
    id_pago?: number
    id_metodo_pago: number
    monto_pagado: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string
  }

  export type pagoCreateOrConnectWithoutOperacion_ventaInput = {
    where: pagoWhereUniqueInput
    create: XOR<pagoCreateWithoutOperacion_ventaInput, pagoUncheckedCreateWithoutOperacion_ventaInput>
  }

  export type pagoCreateManyOperacion_ventaInputEnvelope = {
    data: pagoCreateManyOperacion_ventaInput | pagoCreateManyOperacion_ventaInput[]
    skipDuplicates?: boolean
  }

  export type venta_detalleCreateWithoutOperacion_ventaInput = {
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    producto_variante: producto_varianteCreateNestedOneWithoutVenta_detalleInput
  }

  export type venta_detalleUncheckedCreateWithoutOperacion_ventaInput = {
    id_producto_variante: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type venta_detalleCreateOrConnectWithoutOperacion_ventaInput = {
    where: venta_detalleWhereUniqueInput
    create: XOR<venta_detalleCreateWithoutOperacion_ventaInput, venta_detalleUncheckedCreateWithoutOperacion_ventaInput>
  }

  export type venta_detalleCreateManyOperacion_ventaInputEnvelope = {
    data: venta_detalleCreateManyOperacion_ventaInput | venta_detalleCreateManyOperacion_ventaInput[]
    skipDuplicates?: boolean
  }

  export type clienteUpsertWithoutOperacion_ventaInput = {
    update: XOR<clienteUpdateWithoutOperacion_ventaInput, clienteUncheckedUpdateWithoutOperacion_ventaInput>
    create: XOR<clienteCreateWithoutOperacion_ventaInput, clienteUncheckedCreateWithoutOperacion_ventaInput>
    where?: clienteWhereInput
  }

  export type clienteUpdateToOneWithWhereWithoutOperacion_ventaInput = {
    where?: clienteWhereInput
    data: XOR<clienteUpdateWithoutOperacion_ventaInput, clienteUncheckedUpdateWithoutOperacion_ventaInput>
  }

  export type clienteUpdateWithoutOperacion_ventaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clienteUncheckedUpdateWithoutOperacion_ventaInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type metodo_pagoUpsertWithoutOperacion_ventaInput = {
    update: XOR<metodo_pagoUpdateWithoutOperacion_ventaInput, metodo_pagoUncheckedUpdateWithoutOperacion_ventaInput>
    create: XOR<metodo_pagoCreateWithoutOperacion_ventaInput, metodo_pagoUncheckedCreateWithoutOperacion_ventaInput>
    where?: metodo_pagoWhereInput
  }

  export type metodo_pagoUpdateToOneWithWhereWithoutOperacion_ventaInput = {
    where?: metodo_pagoWhereInput
    data: XOR<metodo_pagoUpdateWithoutOperacion_ventaInput, metodo_pagoUncheckedUpdateWithoutOperacion_ventaInput>
  }

  export type metodo_pagoUpdateWithoutOperacion_ventaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pago?: pagoUpdateManyWithoutMetodo_pagoNestedInput
  }

  export type metodo_pagoUncheckedUpdateWithoutOperacion_ventaInput = {
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    pago?: pagoUncheckedUpdateManyWithoutMetodo_pagoNestedInput
  }

  export type operacionUpsertWithoutOperacion_ventaInput = {
    update: XOR<operacionUpdateWithoutOperacion_ventaInput, operacionUncheckedUpdateWithoutOperacion_ventaInput>
    create: XOR<operacionCreateWithoutOperacion_ventaInput, operacionUncheckedCreateWithoutOperacion_ventaInput>
    where?: operacionWhereInput
  }

  export type operacionUpdateToOneWithWhereWithoutOperacion_ventaInput = {
    where?: operacionWhereInput
    data: XOR<operacionUpdateWithoutOperacion_ventaInput, operacionUncheckedUpdateWithoutOperacion_ventaInput>
  }

  export type operacionUpdateWithoutOperacion_ventaInput = {
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    inventario_movimiento?: inventario_movimientoUpdateManyWithoutOperacionNestedInput
    estado_operacion?: estado_operacionUpdateOneRequiredWithoutOperacionNestedInput
    tipo_operacion?: tipo_operacionUpdateOneRequiredWithoutOperacionNestedInput
  }

  export type operacionUncheckedUpdateWithoutOperacion_ventaInput = {
    id_operacion?: IntFieldUpdateOperationsInput | number
    id_tipo_operacion?: IntFieldUpdateOperationsInput | number
    id_estado_operacion?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    inventario_movimiento?: inventario_movimientoUncheckedUpdateManyWithoutOperacionNestedInput
  }

  export type pagoUpsertWithWhereUniqueWithoutOperacion_ventaInput = {
    where: pagoWhereUniqueInput
    update: XOR<pagoUpdateWithoutOperacion_ventaInput, pagoUncheckedUpdateWithoutOperacion_ventaInput>
    create: XOR<pagoCreateWithoutOperacion_ventaInput, pagoUncheckedCreateWithoutOperacion_ventaInput>
  }

  export type pagoUpdateWithWhereUniqueWithoutOperacion_ventaInput = {
    where: pagoWhereUniqueInput
    data: XOR<pagoUpdateWithoutOperacion_ventaInput, pagoUncheckedUpdateWithoutOperacion_ventaInput>
  }

  export type pagoUpdateManyWithWhereWithoutOperacion_ventaInput = {
    where: pagoScalarWhereInput
    data: XOR<pagoUpdateManyMutationInput, pagoUncheckedUpdateManyWithoutOperacion_ventaInput>
  }

  export type venta_detalleUpsertWithWhereUniqueWithoutOperacion_ventaInput = {
    where: venta_detalleWhereUniqueInput
    update: XOR<venta_detalleUpdateWithoutOperacion_ventaInput, venta_detalleUncheckedUpdateWithoutOperacion_ventaInput>
    create: XOR<venta_detalleCreateWithoutOperacion_ventaInput, venta_detalleUncheckedCreateWithoutOperacion_ventaInput>
  }

  export type venta_detalleUpdateWithWhereUniqueWithoutOperacion_ventaInput = {
    where: venta_detalleWhereUniqueInput
    data: XOR<venta_detalleUpdateWithoutOperacion_ventaInput, venta_detalleUncheckedUpdateWithoutOperacion_ventaInput>
  }

  export type venta_detalleUpdateManyWithWhereWithoutOperacion_ventaInput = {
    where: venta_detalleScalarWhereInput
    data: XOR<venta_detalleUpdateManyMutationInput, venta_detalleUncheckedUpdateManyWithoutOperacion_ventaInput>
  }

  export type venta_detalleScalarWhereInput = {
    AND?: venta_detalleScalarWhereInput | venta_detalleScalarWhereInput[]
    OR?: venta_detalleScalarWhereInput[]
    NOT?: venta_detalleScalarWhereInput | venta_detalleScalarWhereInput[]
    id_venta?: IntFilter<"venta_detalle"> | number
    id_producto_variante?: IntFilter<"venta_detalle"> | number
    cantidad?: IntFilter<"venta_detalle"> | number
    precio_unitario?: DecimalFilter<"venta_detalle"> | Decimal | DecimalJsLike | number | string
  }

  export type metodo_pagoCreateWithoutPagoInput = {
    nombre: string
    operacion_venta?: operacion_ventaCreateNestedManyWithoutMetodo_pagoInput
  }

  export type metodo_pagoUncheckedCreateWithoutPagoInput = {
    id_metodo_pago?: number
    nombre: string
    operacion_venta?: operacion_ventaUncheckedCreateNestedManyWithoutMetodo_pagoInput
  }

  export type metodo_pagoCreateOrConnectWithoutPagoInput = {
    where: metodo_pagoWhereUniqueInput
    create: XOR<metodo_pagoCreateWithoutPagoInput, metodo_pagoUncheckedCreateWithoutPagoInput>
  }

  export type operacion_ventaCreateWithoutPagoInput = {
    total: Decimal | DecimalJsLike | number | string
    cliente: clienteCreateNestedOneWithoutOperacion_ventaInput
    metodo_pago: metodo_pagoCreateNestedOneWithoutOperacion_ventaInput
    operacion: operacionCreateNestedOneWithoutOperacion_ventaInput
    venta_detalle?: venta_detalleCreateNestedManyWithoutOperacion_ventaInput
  }

  export type operacion_ventaUncheckedCreateWithoutPagoInput = {
    id_venta?: number
    id_operacion: number
    id_cliente: number
    id_metodo_pago: number
    total: Decimal | DecimalJsLike | number | string
    venta_detalle?: venta_detalleUncheckedCreateNestedManyWithoutOperacion_ventaInput
  }

  export type operacion_ventaCreateOrConnectWithoutPagoInput = {
    where: operacion_ventaWhereUniqueInput
    create: XOR<operacion_ventaCreateWithoutPagoInput, operacion_ventaUncheckedCreateWithoutPagoInput>
  }

  export type metodo_pagoUpsertWithoutPagoInput = {
    update: XOR<metodo_pagoUpdateWithoutPagoInput, metodo_pagoUncheckedUpdateWithoutPagoInput>
    create: XOR<metodo_pagoCreateWithoutPagoInput, metodo_pagoUncheckedCreateWithoutPagoInput>
    where?: metodo_pagoWhereInput
  }

  export type metodo_pagoUpdateToOneWithWhereWithoutPagoInput = {
    where?: metodo_pagoWhereInput
    data: XOR<metodo_pagoUpdateWithoutPagoInput, metodo_pagoUncheckedUpdateWithoutPagoInput>
  }

  export type metodo_pagoUpdateWithoutPagoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    operacion_venta?: operacion_ventaUpdateManyWithoutMetodo_pagoNestedInput
  }

  export type metodo_pagoUncheckedUpdateWithoutPagoInput = {
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    operacion_venta?: operacion_ventaUncheckedUpdateManyWithoutMetodo_pagoNestedInput
  }

  export type operacion_ventaUpsertWithoutPagoInput = {
    update: XOR<operacion_ventaUpdateWithoutPagoInput, operacion_ventaUncheckedUpdateWithoutPagoInput>
    create: XOR<operacion_ventaCreateWithoutPagoInput, operacion_ventaUncheckedCreateWithoutPagoInput>
    where?: operacion_ventaWhereInput
  }

  export type operacion_ventaUpdateToOneWithWhereWithoutPagoInput = {
    where?: operacion_ventaWhereInput
    data: XOR<operacion_ventaUpdateWithoutPagoInput, operacion_ventaUncheckedUpdateWithoutPagoInput>
  }

  export type operacion_ventaUpdateWithoutPagoInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cliente?: clienteUpdateOneRequiredWithoutOperacion_ventaNestedInput
    metodo_pago?: metodo_pagoUpdateOneRequiredWithoutOperacion_ventaNestedInput
    operacion?: operacionUpdateOneRequiredWithoutOperacion_ventaNestedInput
    venta_detalle?: venta_detalleUpdateManyWithoutOperacion_ventaNestedInput
  }

  export type operacion_ventaUncheckedUpdateWithoutPagoInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_operacion?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venta_detalle?: venta_detalleUncheckedUpdateManyWithoutOperacion_ventaNestedInput
  }

  export type categoria_productoCreateWithoutProductoInput = {
    nombre: string
  }

  export type categoria_productoUncheckedCreateWithoutProductoInput = {
    id_categoria_producto?: number
    nombre: string
  }

  export type categoria_productoCreateOrConnectWithoutProductoInput = {
    where: categoria_productoWhereUniqueInput
    create: XOR<categoria_productoCreateWithoutProductoInput, categoria_productoUncheckedCreateWithoutProductoInput>
  }

  export type producto_varianteCreateWithoutProductoInput = {
    talle: string
    color: string
    stock: number
    inventario_movimiento?: inventario_movimientoCreateNestedManyWithoutProducto_varianteInput
    venta_detalle?: venta_detalleCreateNestedManyWithoutProducto_varianteInput
  }

  export type producto_varianteUncheckedCreateWithoutProductoInput = {
    id_producto_variante?: number
    talle: string
    color: string
    stock: number
    inventario_movimiento?: inventario_movimientoUncheckedCreateNestedManyWithoutProducto_varianteInput
    venta_detalle?: venta_detalleUncheckedCreateNestedManyWithoutProducto_varianteInput
  }

  export type producto_varianteCreateOrConnectWithoutProductoInput = {
    where: producto_varianteWhereUniqueInput
    create: XOR<producto_varianteCreateWithoutProductoInput, producto_varianteUncheckedCreateWithoutProductoInput>
  }

  export type producto_varianteCreateManyProductoInputEnvelope = {
    data: producto_varianteCreateManyProductoInput | producto_varianteCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type categoria_productoUpsertWithoutProductoInput = {
    update: XOR<categoria_productoUpdateWithoutProductoInput, categoria_productoUncheckedUpdateWithoutProductoInput>
    create: XOR<categoria_productoCreateWithoutProductoInput, categoria_productoUncheckedCreateWithoutProductoInput>
    where?: categoria_productoWhereInput
  }

  export type categoria_productoUpdateToOneWithWhereWithoutProductoInput = {
    where?: categoria_productoWhereInput
    data: XOR<categoria_productoUpdateWithoutProductoInput, categoria_productoUncheckedUpdateWithoutProductoInput>
  }

  export type categoria_productoUpdateWithoutProductoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type categoria_productoUncheckedUpdateWithoutProductoInput = {
    id_categoria_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type producto_varianteUpsertWithWhereUniqueWithoutProductoInput = {
    where: producto_varianteWhereUniqueInput
    update: XOR<producto_varianteUpdateWithoutProductoInput, producto_varianteUncheckedUpdateWithoutProductoInput>
    create: XOR<producto_varianteCreateWithoutProductoInput, producto_varianteUncheckedCreateWithoutProductoInput>
  }

  export type producto_varianteUpdateWithWhereUniqueWithoutProductoInput = {
    where: producto_varianteWhereUniqueInput
    data: XOR<producto_varianteUpdateWithoutProductoInput, producto_varianteUncheckedUpdateWithoutProductoInput>
  }

  export type producto_varianteUpdateManyWithWhereWithoutProductoInput = {
    where: producto_varianteScalarWhereInput
    data: XOR<producto_varianteUpdateManyMutationInput, producto_varianteUncheckedUpdateManyWithoutProductoInput>
  }

  export type producto_varianteScalarWhereInput = {
    AND?: producto_varianteScalarWhereInput | producto_varianteScalarWhereInput[]
    OR?: producto_varianteScalarWhereInput[]
    NOT?: producto_varianteScalarWhereInput | producto_varianteScalarWhereInput[]
    id_producto_variante?: IntFilter<"producto_variante"> | number
    id_producto?: IntFilter<"producto_variante"> | number
    talle?: StringFilter<"producto_variante"> | string
    color?: StringFilter<"producto_variante"> | string
    stock?: IntFilter<"producto_variante"> | number
  }

  export type inventario_movimientoCreateWithoutProducto_varianteInput = {
    tipo_movimiento: string
    cantidad: number
    fecha_movimiento?: Date | string
    comentario?: string | null
    operacion?: operacionCreateNestedOneWithoutInventario_movimientoInput
  }

  export type inventario_movimientoUncheckedCreateWithoutProducto_varianteInput = {
    id_movimiento?: number
    tipo_movimiento: string
    cantidad: number
    id_operacion?: number | null
    fecha_movimiento?: Date | string
    comentario?: string | null
  }

  export type inventario_movimientoCreateOrConnectWithoutProducto_varianteInput = {
    where: inventario_movimientoWhereUniqueInput
    create: XOR<inventario_movimientoCreateWithoutProducto_varianteInput, inventario_movimientoUncheckedCreateWithoutProducto_varianteInput>
  }

  export type inventario_movimientoCreateManyProducto_varianteInputEnvelope = {
    data: inventario_movimientoCreateManyProducto_varianteInput | inventario_movimientoCreateManyProducto_varianteInput[]
    skipDuplicates?: boolean
  }

  export type productoCreateWithoutProducto_varianteInput = {
    nombre: string
    costo: Decimal | DecimalJsLike | number | string
    precio_unitario: Decimal | DecimalJsLike | number | string
    categoria_producto: categoria_productoCreateNestedOneWithoutProductoInput
  }

  export type productoUncheckedCreateWithoutProducto_varianteInput = {
    id_producto?: number
    id_categoria: number
    nombre: string
    costo: Decimal | DecimalJsLike | number | string
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type productoCreateOrConnectWithoutProducto_varianteInput = {
    where: productoWhereUniqueInput
    create: XOR<productoCreateWithoutProducto_varianteInput, productoUncheckedCreateWithoutProducto_varianteInput>
  }

  export type venta_detalleCreateWithoutProducto_varianteInput = {
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    operacion_venta: operacion_ventaCreateNestedOneWithoutVenta_detalleInput
  }

  export type venta_detalleUncheckedCreateWithoutProducto_varianteInput = {
    id_venta: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type venta_detalleCreateOrConnectWithoutProducto_varianteInput = {
    where: venta_detalleWhereUniqueInput
    create: XOR<venta_detalleCreateWithoutProducto_varianteInput, venta_detalleUncheckedCreateWithoutProducto_varianteInput>
  }

  export type venta_detalleCreateManyProducto_varianteInputEnvelope = {
    data: venta_detalleCreateManyProducto_varianteInput | venta_detalleCreateManyProducto_varianteInput[]
    skipDuplicates?: boolean
  }

  export type inventario_movimientoUpsertWithWhereUniqueWithoutProducto_varianteInput = {
    where: inventario_movimientoWhereUniqueInput
    update: XOR<inventario_movimientoUpdateWithoutProducto_varianteInput, inventario_movimientoUncheckedUpdateWithoutProducto_varianteInput>
    create: XOR<inventario_movimientoCreateWithoutProducto_varianteInput, inventario_movimientoUncheckedCreateWithoutProducto_varianteInput>
  }

  export type inventario_movimientoUpdateWithWhereUniqueWithoutProducto_varianteInput = {
    where: inventario_movimientoWhereUniqueInput
    data: XOR<inventario_movimientoUpdateWithoutProducto_varianteInput, inventario_movimientoUncheckedUpdateWithoutProducto_varianteInput>
  }

  export type inventario_movimientoUpdateManyWithWhereWithoutProducto_varianteInput = {
    where: inventario_movimientoScalarWhereInput
    data: XOR<inventario_movimientoUpdateManyMutationInput, inventario_movimientoUncheckedUpdateManyWithoutProducto_varianteInput>
  }

  export type productoUpsertWithoutProducto_varianteInput = {
    update: XOR<productoUpdateWithoutProducto_varianteInput, productoUncheckedUpdateWithoutProducto_varianteInput>
    create: XOR<productoCreateWithoutProducto_varianteInput, productoUncheckedCreateWithoutProducto_varianteInput>
    where?: productoWhereInput
  }

  export type productoUpdateToOneWithWhereWithoutProducto_varianteInput = {
    where?: productoWhereInput
    data: XOR<productoUpdateWithoutProducto_varianteInput, productoUncheckedUpdateWithoutProducto_varianteInput>
  }

  export type productoUpdateWithoutProducto_varianteInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoria_producto?: categoria_productoUpdateOneRequiredWithoutProductoNestedInput
  }

  export type productoUncheckedUpdateWithoutProducto_varianteInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type venta_detalleUpsertWithWhereUniqueWithoutProducto_varianteInput = {
    where: venta_detalleWhereUniqueInput
    update: XOR<venta_detalleUpdateWithoutProducto_varianteInput, venta_detalleUncheckedUpdateWithoutProducto_varianteInput>
    create: XOR<venta_detalleCreateWithoutProducto_varianteInput, venta_detalleUncheckedCreateWithoutProducto_varianteInput>
  }

  export type venta_detalleUpdateWithWhereUniqueWithoutProducto_varianteInput = {
    where: venta_detalleWhereUniqueInput
    data: XOR<venta_detalleUpdateWithoutProducto_varianteInput, venta_detalleUncheckedUpdateWithoutProducto_varianteInput>
  }

  export type venta_detalleUpdateManyWithWhereWithoutProducto_varianteInput = {
    where: venta_detalleScalarWhereInput
    data: XOR<venta_detalleUpdateManyMutationInput, venta_detalleUncheckedUpdateManyWithoutProducto_varianteInput>
  }

  export type operacionCreateWithoutTipo_operacionInput = {
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string
    inventario_movimiento?: inventario_movimientoCreateNestedManyWithoutOperacionInput
    estado_operacion: estado_operacionCreateNestedOneWithoutOperacionInput
    operacion_venta?: operacion_ventaCreateNestedManyWithoutOperacionInput
  }

  export type operacionUncheckedCreateWithoutTipo_operacionInput = {
    id_operacion?: number
    id_estado_operacion: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string
    inventario_movimiento?: inventario_movimientoUncheckedCreateNestedManyWithoutOperacionInput
    operacion_venta?: operacion_ventaUncheckedCreateNestedManyWithoutOperacionInput
  }

  export type operacionCreateOrConnectWithoutTipo_operacionInput = {
    where: operacionWhereUniqueInput
    create: XOR<operacionCreateWithoutTipo_operacionInput, operacionUncheckedCreateWithoutTipo_operacionInput>
  }

  export type operacionCreateManyTipo_operacionInputEnvelope = {
    data: operacionCreateManyTipo_operacionInput | operacionCreateManyTipo_operacionInput[]
    skipDuplicates?: boolean
  }

  export type operacionUpsertWithWhereUniqueWithoutTipo_operacionInput = {
    where: operacionWhereUniqueInput
    update: XOR<operacionUpdateWithoutTipo_operacionInput, operacionUncheckedUpdateWithoutTipo_operacionInput>
    create: XOR<operacionCreateWithoutTipo_operacionInput, operacionUncheckedCreateWithoutTipo_operacionInput>
  }

  export type operacionUpdateWithWhereUniqueWithoutTipo_operacionInput = {
    where: operacionWhereUniqueInput
    data: XOR<operacionUpdateWithoutTipo_operacionInput, operacionUncheckedUpdateWithoutTipo_operacionInput>
  }

  export type operacionUpdateManyWithWhereWithoutTipo_operacionInput = {
    where: operacionScalarWhereInput
    data: XOR<operacionUpdateManyMutationInput, operacionUncheckedUpdateManyWithoutTipo_operacionInput>
  }

  export type producto_varianteCreateWithoutVenta_detalleInput = {
    talle: string
    color: string
    stock: number
    inventario_movimiento?: inventario_movimientoCreateNestedManyWithoutProducto_varianteInput
    producto: productoCreateNestedOneWithoutProducto_varianteInput
  }

  export type producto_varianteUncheckedCreateWithoutVenta_detalleInput = {
    id_producto_variante?: number
    id_producto: number
    talle: string
    color: string
    stock: number
    inventario_movimiento?: inventario_movimientoUncheckedCreateNestedManyWithoutProducto_varianteInput
  }

  export type producto_varianteCreateOrConnectWithoutVenta_detalleInput = {
    where: producto_varianteWhereUniqueInput
    create: XOR<producto_varianteCreateWithoutVenta_detalleInput, producto_varianteUncheckedCreateWithoutVenta_detalleInput>
  }

  export type operacion_ventaCreateWithoutVenta_detalleInput = {
    total: Decimal | DecimalJsLike | number | string
    cliente: clienteCreateNestedOneWithoutOperacion_ventaInput
    metodo_pago: metodo_pagoCreateNestedOneWithoutOperacion_ventaInput
    operacion: operacionCreateNestedOneWithoutOperacion_ventaInput
    pago?: pagoCreateNestedManyWithoutOperacion_ventaInput
  }

  export type operacion_ventaUncheckedCreateWithoutVenta_detalleInput = {
    id_venta?: number
    id_operacion: number
    id_cliente: number
    id_metodo_pago: number
    total: Decimal | DecimalJsLike | number | string
    pago?: pagoUncheckedCreateNestedManyWithoutOperacion_ventaInput
  }

  export type operacion_ventaCreateOrConnectWithoutVenta_detalleInput = {
    where: operacion_ventaWhereUniqueInput
    create: XOR<operacion_ventaCreateWithoutVenta_detalleInput, operacion_ventaUncheckedCreateWithoutVenta_detalleInput>
  }

  export type producto_varianteUpsertWithoutVenta_detalleInput = {
    update: XOR<producto_varianteUpdateWithoutVenta_detalleInput, producto_varianteUncheckedUpdateWithoutVenta_detalleInput>
    create: XOR<producto_varianteCreateWithoutVenta_detalleInput, producto_varianteUncheckedCreateWithoutVenta_detalleInput>
    where?: producto_varianteWhereInput
  }

  export type producto_varianteUpdateToOneWithWhereWithoutVenta_detalleInput = {
    where?: producto_varianteWhereInput
    data: XOR<producto_varianteUpdateWithoutVenta_detalleInput, producto_varianteUncheckedUpdateWithoutVenta_detalleInput>
  }

  export type producto_varianteUpdateWithoutVenta_detalleInput = {
    talle?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    inventario_movimiento?: inventario_movimientoUpdateManyWithoutProducto_varianteNestedInput
    producto?: productoUpdateOneRequiredWithoutProducto_varianteNestedInput
  }

  export type producto_varianteUncheckedUpdateWithoutVenta_detalleInput = {
    id_producto_variante?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    talle?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    inventario_movimiento?: inventario_movimientoUncheckedUpdateManyWithoutProducto_varianteNestedInput
  }

  export type operacion_ventaUpsertWithoutVenta_detalleInput = {
    update: XOR<operacion_ventaUpdateWithoutVenta_detalleInput, operacion_ventaUncheckedUpdateWithoutVenta_detalleInput>
    create: XOR<operacion_ventaCreateWithoutVenta_detalleInput, operacion_ventaUncheckedCreateWithoutVenta_detalleInput>
    where?: operacion_ventaWhereInput
  }

  export type operacion_ventaUpdateToOneWithWhereWithoutVenta_detalleInput = {
    where?: operacion_ventaWhereInput
    data: XOR<operacion_ventaUpdateWithoutVenta_detalleInput, operacion_ventaUncheckedUpdateWithoutVenta_detalleInput>
  }

  export type operacion_ventaUpdateWithoutVenta_detalleInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cliente?: clienteUpdateOneRequiredWithoutOperacion_ventaNestedInput
    metodo_pago?: metodo_pagoUpdateOneRequiredWithoutOperacion_ventaNestedInput
    operacion?: operacionUpdateOneRequiredWithoutOperacion_ventaNestedInput
    pago?: pagoUpdateManyWithoutOperacion_ventaNestedInput
  }

  export type operacion_ventaUncheckedUpdateWithoutVenta_detalleInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_operacion?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pago?: pagoUncheckedUpdateManyWithoutOperacion_ventaNestedInput
  }

  export type productoCreateManyCategoria_productoInput = {
    id_producto?: number
    nombre: string
    costo: Decimal | DecimalJsLike | number | string
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type productoUpdateWithoutCategoria_productoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producto_variante?: producto_varianteUpdateManyWithoutProductoNestedInput
  }

  export type productoUncheckedUpdateWithoutCategoria_productoInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producto_variante?: producto_varianteUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type productoUncheckedUpdateManyWithoutCategoria_productoInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type operacion_ventaCreateManyClienteInput = {
    id_venta?: number
    id_operacion: number
    id_metodo_pago: number
    total: Decimal | DecimalJsLike | number | string
  }

  export type operacion_ventaUpdateWithoutClienteInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: metodo_pagoUpdateOneRequiredWithoutOperacion_ventaNestedInput
    operacion?: operacionUpdateOneRequiredWithoutOperacion_ventaNestedInput
    pago?: pagoUpdateManyWithoutOperacion_ventaNestedInput
    venta_detalle?: venta_detalleUpdateManyWithoutOperacion_ventaNestedInput
  }

  export type operacion_ventaUncheckedUpdateWithoutClienteInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_operacion?: IntFieldUpdateOperationsInput | number
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pago?: pagoUncheckedUpdateManyWithoutOperacion_ventaNestedInput
    venta_detalle?: venta_detalleUncheckedUpdateManyWithoutOperacion_ventaNestedInput
  }

  export type operacion_ventaUncheckedUpdateManyWithoutClienteInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_operacion?: IntFieldUpdateOperationsInput | number
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type operacionCreateManyEstado_operacionInput = {
    id_operacion?: number
    id_tipo_operacion: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string
  }

  export type operacionUpdateWithoutEstado_operacionInput = {
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    inventario_movimiento?: inventario_movimientoUpdateManyWithoutOperacionNestedInput
    tipo_operacion?: tipo_operacionUpdateOneRequiredWithoutOperacionNestedInput
    operacion_venta?: operacion_ventaUpdateManyWithoutOperacionNestedInput
  }

  export type operacionUncheckedUpdateWithoutEstado_operacionInput = {
    id_operacion?: IntFieldUpdateOperationsInput | number
    id_tipo_operacion?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    inventario_movimiento?: inventario_movimientoUncheckedUpdateManyWithoutOperacionNestedInput
    operacion_venta?: operacion_ventaUncheckedUpdateManyWithoutOperacionNestedInput
  }

  export type operacionUncheckedUpdateManyWithoutEstado_operacionInput = {
    id_operacion?: IntFieldUpdateOperationsInput | number
    id_tipo_operacion?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type operacion_ventaCreateManyMetodo_pagoInput = {
    id_venta?: number
    id_operacion: number
    id_cliente: number
    total: Decimal | DecimalJsLike | number | string
  }

  export type pagoCreateManyMetodo_pagoInput = {
    id_pago?: number
    id_venta: number
    monto_pagado: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string
  }

  export type operacion_ventaUpdateWithoutMetodo_pagoInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cliente?: clienteUpdateOneRequiredWithoutOperacion_ventaNestedInput
    operacion?: operacionUpdateOneRequiredWithoutOperacion_ventaNestedInput
    pago?: pagoUpdateManyWithoutOperacion_ventaNestedInput
    venta_detalle?: venta_detalleUpdateManyWithoutOperacion_ventaNestedInput
  }

  export type operacion_ventaUncheckedUpdateWithoutMetodo_pagoInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_operacion?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pago?: pagoUncheckedUpdateManyWithoutOperacion_ventaNestedInput
    venta_detalle?: venta_detalleUncheckedUpdateManyWithoutOperacion_ventaNestedInput
  }

  export type operacion_ventaUncheckedUpdateManyWithoutMetodo_pagoInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_operacion?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type pagoUpdateWithoutMetodo_pagoInput = {
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    operacion_venta?: operacion_ventaUpdateOneRequiredWithoutPagoNestedInput
  }

  export type pagoUncheckedUpdateWithoutMetodo_pagoInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    id_venta?: IntFieldUpdateOperationsInput | number
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagoUncheckedUpdateManyWithoutMetodo_pagoInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    id_venta?: IntFieldUpdateOperationsInput | number
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inventario_movimientoCreateManyOperacionInput = {
    id_movimiento?: number
    id_producto_variante: number
    tipo_movimiento: string
    cantidad: number
    fecha_movimiento?: Date | string
    comentario?: string | null
  }

  export type operacion_ventaCreateManyOperacionInput = {
    id_venta?: number
    id_cliente: number
    id_metodo_pago: number
    total: Decimal | DecimalJsLike | number | string
  }

  export type inventario_movimientoUpdateWithoutOperacionInput = {
    tipo_movimiento?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha_movimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    producto_variante?: producto_varianteUpdateOneRequiredWithoutInventario_movimientoNestedInput
  }

  export type inventario_movimientoUncheckedUpdateWithoutOperacionInput = {
    id_movimiento?: IntFieldUpdateOperationsInput | number
    id_producto_variante?: IntFieldUpdateOperationsInput | number
    tipo_movimiento?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha_movimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inventario_movimientoUncheckedUpdateManyWithoutOperacionInput = {
    id_movimiento?: IntFieldUpdateOperationsInput | number
    id_producto_variante?: IntFieldUpdateOperationsInput | number
    tipo_movimiento?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha_movimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type operacion_ventaUpdateWithoutOperacionInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cliente?: clienteUpdateOneRequiredWithoutOperacion_ventaNestedInput
    metodo_pago?: metodo_pagoUpdateOneRequiredWithoutOperacion_ventaNestedInput
    pago?: pagoUpdateManyWithoutOperacion_ventaNestedInput
    venta_detalle?: venta_detalleUpdateManyWithoutOperacion_ventaNestedInput
  }

  export type operacion_ventaUncheckedUpdateWithoutOperacionInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pago?: pagoUncheckedUpdateManyWithoutOperacion_ventaNestedInput
    venta_detalle?: venta_detalleUncheckedUpdateManyWithoutOperacion_ventaNestedInput
  }

  export type operacion_ventaUncheckedUpdateManyWithoutOperacionInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type pagoCreateManyOperacion_ventaInput = {
    id_pago?: number
    id_metodo_pago: number
    monto_pagado: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string
  }

  export type venta_detalleCreateManyOperacion_ventaInput = {
    id_producto_variante: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type pagoUpdateWithoutOperacion_ventaInput = {
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    metodo_pago?: metodo_pagoUpdateOneRequiredWithoutPagoNestedInput
  }

  export type pagoUncheckedUpdateWithoutOperacion_ventaInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagoUncheckedUpdateManyWithoutOperacion_ventaInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type venta_detalleUpdateWithoutOperacion_ventaInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producto_variante?: producto_varianteUpdateOneRequiredWithoutVenta_detalleNestedInput
  }

  export type venta_detalleUncheckedUpdateWithoutOperacion_ventaInput = {
    id_producto_variante?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type venta_detalleUncheckedUpdateManyWithoutOperacion_ventaInput = {
    id_producto_variante?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type producto_varianteCreateManyProductoInput = {
    id_producto_variante?: number
    talle: string
    color: string
    stock: number
  }

  export type producto_varianteUpdateWithoutProductoInput = {
    talle?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    inventario_movimiento?: inventario_movimientoUpdateManyWithoutProducto_varianteNestedInput
    venta_detalle?: venta_detalleUpdateManyWithoutProducto_varianteNestedInput
  }

  export type producto_varianteUncheckedUpdateWithoutProductoInput = {
    id_producto_variante?: IntFieldUpdateOperationsInput | number
    talle?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    inventario_movimiento?: inventario_movimientoUncheckedUpdateManyWithoutProducto_varianteNestedInput
    venta_detalle?: venta_detalleUncheckedUpdateManyWithoutProducto_varianteNestedInput
  }

  export type producto_varianteUncheckedUpdateManyWithoutProductoInput = {
    id_producto_variante?: IntFieldUpdateOperationsInput | number
    talle?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type inventario_movimientoCreateManyProducto_varianteInput = {
    id_movimiento?: number
    tipo_movimiento: string
    cantidad: number
    id_operacion?: number | null
    fecha_movimiento?: Date | string
    comentario?: string | null
  }

  export type venta_detalleCreateManyProducto_varianteInput = {
    id_venta: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type inventario_movimientoUpdateWithoutProducto_varianteInput = {
    tipo_movimiento?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha_movimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    operacion?: operacionUpdateOneWithoutInventario_movimientoNestedInput
  }

  export type inventario_movimientoUncheckedUpdateWithoutProducto_varianteInput = {
    id_movimiento?: IntFieldUpdateOperationsInput | number
    tipo_movimiento?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    id_operacion?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_movimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inventario_movimientoUncheckedUpdateManyWithoutProducto_varianteInput = {
    id_movimiento?: IntFieldUpdateOperationsInput | number
    tipo_movimiento?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    id_operacion?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_movimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type venta_detalleUpdateWithoutProducto_varianteInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operacion_venta?: operacion_ventaUpdateOneRequiredWithoutVenta_detalleNestedInput
  }

  export type venta_detalleUncheckedUpdateWithoutProducto_varianteInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type venta_detalleUncheckedUpdateManyWithoutProducto_varianteInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type operacionCreateManyTipo_operacionInput = {
    id_operacion?: number
    id_estado_operacion: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string
  }

  export type operacionUpdateWithoutTipo_operacionInput = {
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    inventario_movimiento?: inventario_movimientoUpdateManyWithoutOperacionNestedInput
    estado_operacion?: estado_operacionUpdateOneRequiredWithoutOperacionNestedInput
    operacion_venta?: operacion_ventaUpdateManyWithoutOperacionNestedInput
  }

  export type operacionUncheckedUpdateWithoutTipo_operacionInput = {
    id_operacion?: IntFieldUpdateOperationsInput | number
    id_estado_operacion?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    inventario_movimiento?: inventario_movimientoUncheckedUpdateManyWithoutOperacionNestedInput
    operacion_venta?: operacion_ventaUncheckedUpdateManyWithoutOperacionNestedInput
  }

  export type operacionUncheckedUpdateManyWithoutTipo_operacionInput = {
    id_operacion?: IntFieldUpdateOperationsInput | number
    id_estado_operacion?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}