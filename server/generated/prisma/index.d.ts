
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model MenuItem
 * 
 */
export type MenuItem = $Result.DefaultSelection<Prisma.$MenuItemPayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model MenuItemMaterial
 * 
 */
export type MenuItemMaterial = $Result.DefaultSelection<Prisma.$MenuItemMaterialPayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Shift
 * 
 */
export type Shift = $Result.DefaultSelection<Prisma.$ShiftPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model MaterialLog
 * 
 */
export type MaterialLog = $Result.DefaultSelection<Prisma.$MaterialLogPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MaterialPurchase
 * 
 */
export type MaterialPurchase = $Result.DefaultSelection<Prisma.$MaterialPurchasePayload>
/**
 * Model Promo
 * 
 */
export type Promo = $Result.DefaultSelection<Prisma.$PromoPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model Raffle
 * 
 */
export type Raffle = $Result.DefaultSelection<Prisma.$RafflePayload>
/**
 * Model RaffleWinner
 * 
 */
export type RaffleWinner = $Result.DefaultSelection<Prisma.$RaffleWinnerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MenuItems
 * const menuItems = await prisma.menuItem.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more MenuItems
   * const menuItems = await prisma.menuItem.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.menuItem`: Exposes CRUD operations for the **MenuItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItems
    * const menuItems = await prisma.menuItem.findMany()
    * ```
    */
  get menuItem(): Prisma.MenuItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuItemMaterial`: Exposes CRUD operations for the **MenuItemMaterial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItemMaterials
    * const menuItemMaterials = await prisma.menuItemMaterial.findMany()
    * ```
    */
  get menuItemMaterial(): Prisma.MenuItemMaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shift`: Exposes CRUD operations for the **Shift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shifts
    * const shifts = await prisma.shift.findMany()
    * ```
    */
  get shift(): Prisma.ShiftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materialLog`: Exposes CRUD operations for the **MaterialLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaterialLogs
    * const materialLogs = await prisma.materialLog.findMany()
    * ```
    */
  get materialLog(): Prisma.MaterialLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materialPurchase`: Exposes CRUD operations for the **MaterialPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaterialPurchases
    * const materialPurchases = await prisma.materialPurchase.findMany()
    * ```
    */
  get materialPurchase(): Prisma.MaterialPurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promo`: Exposes CRUD operations for the **Promo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promos
    * const promos = await prisma.promo.findMany()
    * ```
    */
  get promo(): Prisma.PromoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raffle`: Exposes CRUD operations for the **Raffle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Raffles
    * const raffles = await prisma.raffle.findMany()
    * ```
    */
  get raffle(): Prisma.RaffleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raffleWinner`: Exposes CRUD operations for the **RaffleWinner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaffleWinners
    * const raffleWinners = await prisma.raffleWinner.findMany()
    * ```
    */
  get raffleWinner(): Prisma.RaffleWinnerDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    MenuItem: 'MenuItem',
    Material: 'Material',
    MenuItemMaterial: 'MenuItemMaterial',
    Sale: 'Sale',
    Order: 'Order',
    Shift: 'Shift',
    Expense: 'Expense',
    MaterialLog: 'MaterialLog',
    User: 'User',
    MaterialPurchase: 'MaterialPurchase',
    Promo: 'Promo',
    ActivityLog: 'ActivityLog',
    Raffle: 'Raffle',
    RaffleWinner: 'RaffleWinner'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "menuItem" | "material" | "menuItemMaterial" | "sale" | "order" | "shift" | "expense" | "materialLog" | "user" | "materialPurchase" | "promo" | "activityLog" | "raffle" | "raffleWinner"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MenuItem: {
        payload: Prisma.$MenuItemPayload<ExtArgs>
        fields: Prisma.MenuItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findFirst: {
            args: Prisma.MenuItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findMany: {
            args: Prisma.MenuItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          create: {
            args: Prisma.MenuItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          createMany: {
            args: Prisma.MenuItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          delete: {
            args: Prisma.MenuItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          update: {
            args: Prisma.MenuItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          upsert: {
            args: Prisma.MenuItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          aggregate: {
            args: Prisma.MenuItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItem>
          }
          groupBy: {
            args: Prisma.MenuItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      MenuItemMaterial: {
        payload: Prisma.$MenuItemMaterialPayload<ExtArgs>
        fields: Prisma.MenuItemMaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemMaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemMaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemMaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemMaterialPayload>
          }
          findFirst: {
            args: Prisma.MenuItemMaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemMaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemMaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemMaterialPayload>
          }
          findMany: {
            args: Prisma.MenuItemMaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemMaterialPayload>[]
          }
          create: {
            args: Prisma.MenuItemMaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemMaterialPayload>
          }
          createMany: {
            args: Prisma.MenuItemMaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuItemMaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemMaterialPayload>[]
          }
          delete: {
            args: Prisma.MenuItemMaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemMaterialPayload>
          }
          update: {
            args: Prisma.MenuItemMaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemMaterialPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemMaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemMaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuItemMaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemMaterialPayload>[]
          }
          upsert: {
            args: Prisma.MenuItemMaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemMaterialPayload>
          }
          aggregate: {
            args: Prisma.MenuItemMaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItemMaterial>
          }
          groupBy: {
            args: Prisma.MenuItemMaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemMaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemMaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemMaterialCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Shift: {
        payload: Prisma.$ShiftPayload<ExtArgs>
        fields: Prisma.ShiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          findFirst: {
            args: Prisma.ShiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          findMany: {
            args: Prisma.ShiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          create: {
            args: Prisma.ShiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          createMany: {
            args: Prisma.ShiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          delete: {
            args: Prisma.ShiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          update: {
            args: Prisma.ShiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          deleteMany: {
            args: Prisma.ShiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShiftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          upsert: {
            args: Prisma.ShiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          aggregate: {
            args: Prisma.ShiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShift>
          }
          groupBy: {
            args: Prisma.ShiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      MaterialLog: {
        payload: Prisma.$MaterialLogPayload<ExtArgs>
        fields: Prisma.MaterialLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialLogPayload>
          }
          findFirst: {
            args: Prisma.MaterialLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialLogPayload>
          }
          findMany: {
            args: Prisma.MaterialLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialLogPayload>[]
          }
          create: {
            args: Prisma.MaterialLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialLogPayload>
          }
          createMany: {
            args: Prisma.MaterialLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialLogPayload>[]
          }
          delete: {
            args: Prisma.MaterialLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialLogPayload>
          }
          update: {
            args: Prisma.MaterialLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialLogPayload>
          }
          deleteMany: {
            args: Prisma.MaterialLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialLogPayload>[]
          }
          upsert: {
            args: Prisma.MaterialLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialLogPayload>
          }
          aggregate: {
            args: Prisma.MaterialLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterialLog>
          }
          groupBy: {
            args: Prisma.MaterialLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialLogCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialLogCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MaterialPurchase: {
        payload: Prisma.$MaterialPurchasePayload<ExtArgs>
        fields: Prisma.MaterialPurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialPurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialPurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPurchasePayload>
          }
          findFirst: {
            args: Prisma.MaterialPurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialPurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPurchasePayload>
          }
          findMany: {
            args: Prisma.MaterialPurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPurchasePayload>[]
          }
          create: {
            args: Prisma.MaterialPurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPurchasePayload>
          }
          createMany: {
            args: Prisma.MaterialPurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialPurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPurchasePayload>[]
          }
          delete: {
            args: Prisma.MaterialPurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPurchasePayload>
          }
          update: {
            args: Prisma.MaterialPurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPurchasePayload>
          }
          deleteMany: {
            args: Prisma.MaterialPurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialPurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialPurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPurchasePayload>[]
          }
          upsert: {
            args: Prisma.MaterialPurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPurchasePayload>
          }
          aggregate: {
            args: Prisma.MaterialPurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterialPurchase>
          }
          groupBy: {
            args: Prisma.MaterialPurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialPurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialPurchaseCountAggregateOutputType> | number
          }
        }
      }
      Promo: {
        payload: Prisma.$PromoPayload<ExtArgs>
        fields: Prisma.PromoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          findFirst: {
            args: Prisma.PromoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          findMany: {
            args: Prisma.PromoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>[]
          }
          create: {
            args: Prisma.PromoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          createMany: {
            args: Prisma.PromoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>[]
          }
          delete: {
            args: Prisma.PromoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          update: {
            args: Prisma.PromoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          deleteMany: {
            args: Prisma.PromoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>[]
          }
          upsert: {
            args: Prisma.PromoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          aggregate: {
            args: Prisma.PromoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromo>
          }
          groupBy: {
            args: Prisma.PromoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromoCountArgs<ExtArgs>
            result: $Utils.Optional<PromoCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      Raffle: {
        payload: Prisma.$RafflePayload<ExtArgs>
        fields: Prisma.RaffleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaffleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RafflePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaffleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RafflePayload>
          }
          findFirst: {
            args: Prisma.RaffleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RafflePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaffleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RafflePayload>
          }
          findMany: {
            args: Prisma.RaffleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RafflePayload>[]
          }
          create: {
            args: Prisma.RaffleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RafflePayload>
          }
          createMany: {
            args: Prisma.RaffleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaffleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RafflePayload>[]
          }
          delete: {
            args: Prisma.RaffleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RafflePayload>
          }
          update: {
            args: Prisma.RaffleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RafflePayload>
          }
          deleteMany: {
            args: Prisma.RaffleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaffleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaffleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RafflePayload>[]
          }
          upsert: {
            args: Prisma.RaffleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RafflePayload>
          }
          aggregate: {
            args: Prisma.RaffleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaffle>
          }
          groupBy: {
            args: Prisma.RaffleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaffleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaffleCountArgs<ExtArgs>
            result: $Utils.Optional<RaffleCountAggregateOutputType> | number
          }
        }
      }
      RaffleWinner: {
        payload: Prisma.$RaffleWinnerPayload<ExtArgs>
        fields: Prisma.RaffleWinnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaffleWinnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleWinnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaffleWinnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleWinnerPayload>
          }
          findFirst: {
            args: Prisma.RaffleWinnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleWinnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaffleWinnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleWinnerPayload>
          }
          findMany: {
            args: Prisma.RaffleWinnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleWinnerPayload>[]
          }
          create: {
            args: Prisma.RaffleWinnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleWinnerPayload>
          }
          createMany: {
            args: Prisma.RaffleWinnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaffleWinnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleWinnerPayload>[]
          }
          delete: {
            args: Prisma.RaffleWinnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleWinnerPayload>
          }
          update: {
            args: Prisma.RaffleWinnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleWinnerPayload>
          }
          deleteMany: {
            args: Prisma.RaffleWinnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaffleWinnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaffleWinnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleWinnerPayload>[]
          }
          upsert: {
            args: Prisma.RaffleWinnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleWinnerPayload>
          }
          aggregate: {
            args: Prisma.RaffleWinnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaffleWinner>
          }
          groupBy: {
            args: Prisma.RaffleWinnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaffleWinnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaffleWinnerCountArgs<ExtArgs>
            result: $Utils.Optional<RaffleWinnerCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    menuItem?: MenuItemOmit
    material?: MaterialOmit
    menuItemMaterial?: MenuItemMaterialOmit
    sale?: SaleOmit
    order?: OrderOmit
    shift?: ShiftOmit
    expense?: ExpenseOmit
    materialLog?: MaterialLogOmit
    user?: UserOmit
    materialPurchase?: MaterialPurchaseOmit
    promo?: PromoOmit
    activityLog?: ActivityLogOmit
    raffle?: RaffleOmit
    raffleWinner?: RaffleWinnerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type MenuItemCountOutputType
   */

  export type MenuItemCountOutputType = {
    recipes: number
    sales: number
  }

  export type MenuItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | MenuItemCountOutputTypeCountRecipesArgs
    sales?: boolean | MenuItemCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCountOutputType
     */
    select?: MenuItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemMaterialWhereInput
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Count Type MaterialCountOutputType
   */

  export type MaterialCountOutputType = {
    logs: number
    purchases: number
    recipes: number
    menuItems: number
  }

  export type MaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | MaterialCountOutputTypeCountLogsArgs
    purchases?: boolean | MaterialCountOutputTypeCountPurchasesArgs
    recipes?: boolean | MaterialCountOutputTypeCountRecipesArgs
    menuItems?: boolean | MaterialCountOutputTypeCountMenuItemsArgs
  }

  // Custom InputTypes
  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCountOutputType
     */
    select?: MaterialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialLogWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialPurchaseWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemMaterialWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountMenuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    sales: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | OrderCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Count Type ShiftCountOutputType
   */

  export type ShiftCountOutputType = {
    sales: number
  }

  export type ShiftCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | ShiftCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * ShiftCountOutputType without action
   */
  export type ShiftCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftCountOutputType
     */
    select?: ShiftCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShiftCountOutputType without action
   */
  export type ShiftCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    shifts: number
    activityLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shifts?: boolean | UserCountOutputTypeCountShiftsArgs
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }


  /**
   * Count Type PromoCountOutputType
   */

  export type PromoCountOutputType = {
    sales: number
  }

  export type PromoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | PromoCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * PromoCountOutputType without action
   */
  export type PromoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCountOutputType
     */
    select?: PromoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromoCountOutputType without action
   */
  export type PromoCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Count Type RaffleCountOutputType
   */

  export type RaffleCountOutputType = {
    winners: number
  }

  export type RaffleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winners?: boolean | RaffleCountOutputTypeCountWinnersArgs
  }

  // Custom InputTypes
  /**
   * RaffleCountOutputType without action
   */
  export type RaffleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleCountOutputType
     */
    select?: RaffleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RaffleCountOutputType without action
   */
  export type RaffleCountOutputTypeCountWinnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaffleWinnerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model MenuItem
   */

  export type AggregateMenuItem = {
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  export type MenuItemAvgAggregateOutputType = {
    id: number | null
    price: number | null
    materialId: number | null
  }

  export type MenuItemSumAggregateOutputType = {
    id: number | null
    price: number | null
    materialId: number | null
  }

  export type MenuItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
    price: number | null
    isRetail: boolean | null
    materialId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
    price: number | null
    isRetail: boolean | null
    materialId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemCountAggregateOutputType = {
    id: number
    name: number
    category: number
    price: number
    isRetail: number
    materialId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuItemAvgAggregateInputType = {
    id?: true
    price?: true
    materialId?: true
  }

  export type MenuItemSumAggregateInputType = {
    id?: true
    price?: true
    materialId?: true
  }

  export type MenuItemMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    price?: true
    isRetail?: true
    materialId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    price?: true
    isRetail?: true
    materialId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    price?: true
    isRetail?: true
    materialId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItem to aggregate.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItems
    **/
    _count?: true | MenuItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemMaxAggregateInputType
  }

  export type GetMenuItemAggregateType<T extends MenuItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItem[P]>
      : GetScalarType<T[P], AggregateMenuItem[P]>
  }




  export type MenuItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithAggregationInput | MenuItemOrderByWithAggregationInput[]
    by: MenuItemScalarFieldEnum[] | MenuItemScalarFieldEnum
    having?: MenuItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemCountAggregateInputType | true
    _avg?: MenuItemAvgAggregateInputType
    _sum?: MenuItemSumAggregateInputType
    _min?: MenuItemMinAggregateInputType
    _max?: MenuItemMaxAggregateInputType
  }

  export type MenuItemGroupByOutputType = {
    id: number
    name: string
    category: string
    price: number
    isRetail: boolean
    materialId: number | null
    createdAt: Date
    updatedAt: Date
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  type GetMenuItemGroupByPayload<T extends MenuItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
    isRetail?: boolean
    materialId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    material?: boolean | MenuItem$materialArgs<ExtArgs>
    recipes?: boolean | MenuItem$recipesArgs<ExtArgs>
    sales?: boolean | MenuItem$salesArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
    isRetail?: boolean
    materialId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    material?: boolean | MenuItem$materialArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
    isRetail?: boolean
    materialId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    material?: boolean | MenuItem$materialArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
    isRetail?: boolean
    materialId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "price" | "isRetail" | "materialId" | "createdAt" | "updatedAt", ExtArgs["result"]["menuItem"]>
  export type MenuItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MenuItem$materialArgs<ExtArgs>
    recipes?: boolean | MenuItem$recipesArgs<ExtArgs>
    sales?: boolean | MenuItem$salesArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MenuItem$materialArgs<ExtArgs>
  }
  export type MenuItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MenuItem$materialArgs<ExtArgs>
  }

  export type $MenuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItem"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs> | null
      recipes: Prisma.$MenuItemMaterialPayload<ExtArgs>[]
      sales: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category: string
      price: number
      isRetail: boolean
      materialId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menuItem"]>
    composites: {}
  }

  type MenuItemGetPayload<S extends boolean | null | undefined | MenuItemDefaultArgs> = $Result.GetResult<Prisma.$MenuItemPayload, S>

  type MenuItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuItemCountAggregateInputType | true
    }

  export interface MenuItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItem'], meta: { name: 'MenuItem' } }
    /**
     * Find zero or one MenuItem that matches the filter.
     * @param {MenuItemFindUniqueArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemFindUniqueArgs>(args: SelectSubset<T, MenuItemFindUniqueArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuItemFindUniqueOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemFindFirstArgs>(args?: SelectSubset<T, MenuItemFindFirstArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItems
     * const menuItems = await prisma.menuItem.findMany()
     * 
     * // Get first 10 MenuItems
     * const menuItems = await prisma.menuItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuItemFindManyArgs>(args?: SelectSubset<T, MenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuItem.
     * @param {MenuItemCreateArgs} args - Arguments to create a MenuItem.
     * @example
     * // Create one MenuItem
     * const MenuItem = await prisma.menuItem.create({
     *   data: {
     *     // ... data to create a MenuItem
     *   }
     * })
     * 
     */
    create<T extends MenuItemCreateArgs>(args: SelectSubset<T, MenuItemCreateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuItems.
     * @param {MenuItemCreateManyArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemCreateManyArgs>(args?: SelectSubset<T, MenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItems and returns the data saved in the database.
     * @param {MenuItemCreateManyAndReturnArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuItem.
     * @param {MenuItemDeleteArgs} args - Arguments to delete one MenuItem.
     * @example
     * // Delete one MenuItem
     * const MenuItem = await prisma.menuItem.delete({
     *   where: {
     *     // ... filter to delete one MenuItem
     *   }
     * })
     * 
     */
    delete<T extends MenuItemDeleteArgs>(args: SelectSubset<T, MenuItemDeleteArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuItem.
     * @param {MenuItemUpdateArgs} args - Arguments to update one MenuItem.
     * @example
     * // Update one MenuItem
     * const menuItem = await prisma.menuItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemUpdateArgs>(args: SelectSubset<T, MenuItemUpdateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuItems.
     * @param {MenuItemDeleteManyArgs} args - Arguments to filter MenuItems to delete.
     * @example
     * // Delete a few MenuItems
     * const { count } = await prisma.menuItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemDeleteManyArgs>(args?: SelectSubset<T, MenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemUpdateManyArgs>(args: SelectSubset<T, MenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems and returns the data updated in the database.
     * @param {MenuItemUpdateManyAndReturnArgs} args - Arguments to update many MenuItems.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends MenuItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuItem.
     * @param {MenuItemUpsertArgs} args - Arguments to update or create a MenuItem.
     * @example
     * // Update or create a MenuItem
     * const menuItem = await prisma.menuItem.upsert({
     *   create: {
     *     // ... data to create a MenuItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItem we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemUpsertArgs>(args: SelectSubset<T, MenuItemUpsertArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCountArgs} args - Arguments to filter MenuItems to count.
     * @example
     * // Count the number of MenuItems
     * const count = await prisma.menuItem.count({
     *   where: {
     *     // ... the filter for the MenuItems we want to count
     *   }
     * })
    **/
    count<T extends MenuItemCountArgs>(
      args?: Subset<T, MenuItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuItemAggregateArgs>(args: Subset<T, MenuItemAggregateArgs>): Prisma.PrismaPromise<GetMenuItemAggregateType<T>>

    /**
     * Group by MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemGroupByArgs} args - Group by arguments.
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
      T extends MenuItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItem model
   */
  readonly fields: MenuItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MenuItem$materialArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$materialArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    recipes<T extends MenuItem$recipesArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends MenuItem$salesArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MenuItem model
   */
  interface MenuItemFieldRefs {
    readonly id: FieldRef<"MenuItem", 'Int'>
    readonly name: FieldRef<"MenuItem", 'String'>
    readonly category: FieldRef<"MenuItem", 'String'>
    readonly price: FieldRef<"MenuItem", 'Float'>
    readonly isRetail: FieldRef<"MenuItem", 'Boolean'>
    readonly materialId: FieldRef<"MenuItem", 'Int'>
    readonly createdAt: FieldRef<"MenuItem", 'DateTime'>
    readonly updatedAt: FieldRef<"MenuItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MenuItem findUnique
   */
  export type MenuItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findUniqueOrThrow
   */
  export type MenuItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findFirst
   */
  export type MenuItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findFirstOrThrow
   */
  export type MenuItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findMany
   */
  export type MenuItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem create
   */
  export type MenuItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuItem.
     */
    data: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
  }

  /**
   * MenuItem createMany
   */
  export type MenuItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItem createManyAndReturn
   */
  export type MenuItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem update
   */
  export type MenuItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuItem.
     */
    data: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
    /**
     * Choose, which MenuItem to update.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem updateMany
   */
  export type MenuItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
  }

  /**
   * MenuItem updateManyAndReturn
   */
  export type MenuItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem upsert
   */
  export type MenuItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuItem to update in case it exists.
     */
    where: MenuItemWhereUniqueInput
    /**
     * In case the MenuItem found by the `where` argument doesn't exist, create a new MenuItem with this data.
     */
    create: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
    /**
     * In case the MenuItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
  }

  /**
   * MenuItem delete
   */
  export type MenuItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter which MenuItem to delete.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem deleteMany
   */
  export type MenuItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to delete
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to delete.
     */
    limit?: number
  }

  /**
   * MenuItem.material
   */
  export type MenuItem$materialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
  }

  /**
   * MenuItem.recipes
   */
  export type MenuItem$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemMaterial
     */
    select?: MenuItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemMaterial
     */
    omit?: MenuItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemMaterialInclude<ExtArgs> | null
    where?: MenuItemMaterialWhereInput
    orderBy?: MenuItemMaterialOrderByWithRelationInput | MenuItemMaterialOrderByWithRelationInput[]
    cursor?: MenuItemMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemMaterialScalarFieldEnum | MenuItemMaterialScalarFieldEnum[]
  }

  /**
   * MenuItem.sales
   */
  export type MenuItem$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * MenuItem without action
   */
  export type MenuItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialAvgAggregateOutputType = {
    id: number | null
    stock: number | null
    costPerUnit: number | null
    minStock: number | null
  }

  export type MaterialSumAggregateOutputType = {
    id: number | null
    stock: number | null
    costPerUnit: number | null
    minStock: number | null
  }

  export type MaterialMinAggregateOutputType = {
    id: number | null
    name: string | null
    unit: string | null
    stock: number | null
    costPerUnit: number | null
    createdAt: Date | null
    updatedAt: Date | null
    minStock: number | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: number | null
    name: string | null
    unit: string | null
    stock: number | null
    costPerUnit: number | null
    createdAt: Date | null
    updatedAt: Date | null
    minStock: number | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    name: number
    unit: number
    stock: number
    costPerUnit: number
    createdAt: number
    updatedAt: number
    minStock: number
    _all: number
  }


  export type MaterialAvgAggregateInputType = {
    id?: true
    stock?: true
    costPerUnit?: true
    minStock?: true
  }

  export type MaterialSumAggregateInputType = {
    id?: true
    stock?: true
    costPerUnit?: true
    minStock?: true
  }

  export type MaterialMinAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    stock?: true
    costPerUnit?: true
    createdAt?: true
    updatedAt?: true
    minStock?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    stock?: true
    costPerUnit?: true
    createdAt?: true
    updatedAt?: true
    minStock?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    stock?: true
    costPerUnit?: true
    createdAt?: true
    updatedAt?: true
    minStock?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _avg?: MaterialAvgAggregateInputType
    _sum?: MaterialSumAggregateInputType
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: number
    name: string
    unit: string
    stock: number
    costPerUnit: number
    createdAt: Date
    updatedAt: Date
    minStock: number
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    stock?: boolean
    costPerUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    minStock?: boolean
    logs?: boolean | Material$logsArgs<ExtArgs>
    purchases?: boolean | Material$purchasesArgs<ExtArgs>
    recipes?: boolean | Material$recipesArgs<ExtArgs>
    menuItems?: boolean | Material$menuItemsArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    stock?: boolean
    costPerUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    minStock?: boolean
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    stock?: boolean
    costPerUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    minStock?: boolean
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectScalar = {
    id?: boolean
    name?: boolean
    unit?: boolean
    stock?: boolean
    costPerUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    minStock?: boolean
  }

  export type MaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "unit" | "stock" | "costPerUnit" | "createdAt" | "updatedAt" | "minStock", ExtArgs["result"]["material"]>
  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | Material$logsArgs<ExtArgs>
    purchases?: boolean | Material$purchasesArgs<ExtArgs>
    recipes?: boolean | Material$recipesArgs<ExtArgs>
    menuItems?: boolean | Material$menuItemsArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      logs: Prisma.$MaterialLogPayload<ExtArgs>[]
      purchases: Prisma.$MaterialPurchasePayload<ExtArgs>[]
      recipes: Prisma.$MenuItemMaterialPayload<ExtArgs>[]
      menuItems: Prisma.$MenuItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      unit: string
      stock: number
      costPerUnit: number
      createdAt: Date
      updatedAt: Date
      minStock: number
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {MaterialUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
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
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends Material$logsArgs<ExtArgs> = {}>(args?: Subset<T, Material$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends Material$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Material$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipes<T extends Material$recipesArgs<ExtArgs> = {}>(args?: Subset<T, Material$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menuItems<T extends Material$menuItemsArgs<ExtArgs> = {}>(args?: Subset<T, Material$menuItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Material model
   */
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'Int'>
    readonly name: FieldRef<"Material", 'String'>
    readonly unit: FieldRef<"Material", 'String'>
    readonly stock: FieldRef<"Material", 'Float'>
    readonly costPerUnit: FieldRef<"Material", 'Float'>
    readonly createdAt: FieldRef<"Material", 'DateTime'>
    readonly updatedAt: FieldRef<"Material", 'DateTime'>
    readonly minStock: FieldRef<"Material", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material createManyAndReturn
   */
  export type MaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material updateManyAndReturn
   */
  export type MaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Material.logs
   */
  export type Material$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialLog
     */
    select?: MaterialLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialLog
     */
    omit?: MaterialLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialLogInclude<ExtArgs> | null
    where?: MaterialLogWhereInput
    orderBy?: MaterialLogOrderByWithRelationInput | MaterialLogOrderByWithRelationInput[]
    cursor?: MaterialLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialLogScalarFieldEnum | MaterialLogScalarFieldEnum[]
  }

  /**
   * Material.purchases
   */
  export type Material$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialPurchase
     */
    select?: MaterialPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialPurchase
     */
    omit?: MaterialPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialPurchaseInclude<ExtArgs> | null
    where?: MaterialPurchaseWhereInput
    orderBy?: MaterialPurchaseOrderByWithRelationInput | MaterialPurchaseOrderByWithRelationInput[]
    cursor?: MaterialPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialPurchaseScalarFieldEnum | MaterialPurchaseScalarFieldEnum[]
  }

  /**
   * Material.recipes
   */
  export type Material$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemMaterial
     */
    select?: MenuItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemMaterial
     */
    omit?: MenuItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemMaterialInclude<ExtArgs> | null
    where?: MenuItemMaterialWhereInput
    orderBy?: MenuItemMaterialOrderByWithRelationInput | MenuItemMaterialOrderByWithRelationInput[]
    cursor?: MenuItemMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemMaterialScalarFieldEnum | MenuItemMaterialScalarFieldEnum[]
  }

  /**
   * Material.menuItems
   */
  export type Material$menuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    cursor?: MenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
  }


  /**
   * Model MenuItemMaterial
   */

  export type AggregateMenuItemMaterial = {
    _count: MenuItemMaterialCountAggregateOutputType | null
    _avg: MenuItemMaterialAvgAggregateOutputType | null
    _sum: MenuItemMaterialSumAggregateOutputType | null
    _min: MenuItemMaterialMinAggregateOutputType | null
    _max: MenuItemMaterialMaxAggregateOutputType | null
  }

  export type MenuItemMaterialAvgAggregateOutputType = {
    id: number | null
    menuItemId: number | null
    materialId: number | null
    quantity: number | null
  }

  export type MenuItemMaterialSumAggregateOutputType = {
    id: number | null
    menuItemId: number | null
    materialId: number | null
    quantity: number | null
  }

  export type MenuItemMaterialMinAggregateOutputType = {
    id: number | null
    menuItemId: number | null
    materialId: number | null
    quantity: number | null
    createdAt: Date | null
  }

  export type MenuItemMaterialMaxAggregateOutputType = {
    id: number | null
    menuItemId: number | null
    materialId: number | null
    quantity: number | null
    createdAt: Date | null
  }

  export type MenuItemMaterialCountAggregateOutputType = {
    id: number
    menuItemId: number
    materialId: number
    quantity: number
    createdAt: number
    _all: number
  }


  export type MenuItemMaterialAvgAggregateInputType = {
    id?: true
    menuItemId?: true
    materialId?: true
    quantity?: true
  }

  export type MenuItemMaterialSumAggregateInputType = {
    id?: true
    menuItemId?: true
    materialId?: true
    quantity?: true
  }

  export type MenuItemMaterialMinAggregateInputType = {
    id?: true
    menuItemId?: true
    materialId?: true
    quantity?: true
    createdAt?: true
  }

  export type MenuItemMaterialMaxAggregateInputType = {
    id?: true
    menuItemId?: true
    materialId?: true
    quantity?: true
    createdAt?: true
  }

  export type MenuItemMaterialCountAggregateInputType = {
    id?: true
    menuItemId?: true
    materialId?: true
    quantity?: true
    createdAt?: true
    _all?: true
  }

  export type MenuItemMaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItemMaterial to aggregate.
     */
    where?: MenuItemMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItemMaterials to fetch.
     */
    orderBy?: MenuItemMaterialOrderByWithRelationInput | MenuItemMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItemMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItemMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItemMaterials
    **/
    _count?: true | MenuItemMaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemMaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemMaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemMaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemMaterialMaxAggregateInputType
  }

  export type GetMenuItemMaterialAggregateType<T extends MenuItemMaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItemMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItemMaterial[P]>
      : GetScalarType<T[P], AggregateMenuItemMaterial[P]>
  }




  export type MenuItemMaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemMaterialWhereInput
    orderBy?: MenuItemMaterialOrderByWithAggregationInput | MenuItemMaterialOrderByWithAggregationInput[]
    by: MenuItemMaterialScalarFieldEnum[] | MenuItemMaterialScalarFieldEnum
    having?: MenuItemMaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemMaterialCountAggregateInputType | true
    _avg?: MenuItemMaterialAvgAggregateInputType
    _sum?: MenuItemMaterialSumAggregateInputType
    _min?: MenuItemMaterialMinAggregateInputType
    _max?: MenuItemMaterialMaxAggregateInputType
  }

  export type MenuItemMaterialGroupByOutputType = {
    id: number
    menuItemId: number
    materialId: number
    quantity: number
    createdAt: Date
    _count: MenuItemMaterialCountAggregateOutputType | null
    _avg: MenuItemMaterialAvgAggregateOutputType | null
    _sum: MenuItemMaterialSumAggregateOutputType | null
    _min: MenuItemMaterialMinAggregateOutputType | null
    _max: MenuItemMaterialMaxAggregateOutputType | null
  }

  type GetMenuItemMaterialGroupByPayload<T extends MenuItemMaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemMaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemMaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemMaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemMaterialGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemMaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuItemId?: boolean
    materialId?: boolean
    quantity?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItemMaterial"]>

  export type MenuItemMaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuItemId?: boolean
    materialId?: boolean
    quantity?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItemMaterial"]>

  export type MenuItemMaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuItemId?: boolean
    materialId?: boolean
    quantity?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItemMaterial"]>

  export type MenuItemMaterialSelectScalar = {
    id?: boolean
    menuItemId?: boolean
    materialId?: boolean
    quantity?: boolean
    createdAt?: boolean
  }

  export type MenuItemMaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "menuItemId" | "materialId" | "quantity" | "createdAt", ExtArgs["result"]["menuItemMaterial"]>
  export type MenuItemMaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }
  export type MenuItemMaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }
  export type MenuItemMaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }

  export type $MenuItemMaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItemMaterial"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs>
      menuItem: Prisma.$MenuItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      menuItemId: number
      materialId: number
      quantity: number
      createdAt: Date
    }, ExtArgs["result"]["menuItemMaterial"]>
    composites: {}
  }

  type MenuItemMaterialGetPayload<S extends boolean | null | undefined | MenuItemMaterialDefaultArgs> = $Result.GetResult<Prisma.$MenuItemMaterialPayload, S>

  type MenuItemMaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuItemMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuItemMaterialCountAggregateInputType | true
    }

  export interface MenuItemMaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItemMaterial'], meta: { name: 'MenuItemMaterial' } }
    /**
     * Find zero or one MenuItemMaterial that matches the filter.
     * @param {MenuItemMaterialFindUniqueArgs} args - Arguments to find a MenuItemMaterial
     * @example
     * // Get one MenuItemMaterial
     * const menuItemMaterial = await prisma.menuItemMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemMaterialFindUniqueArgs>(args: SelectSubset<T, MenuItemMaterialFindUniqueArgs<ExtArgs>>): Prisma__MenuItemMaterialClient<$Result.GetResult<Prisma.$MenuItemMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuItemMaterial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuItemMaterialFindUniqueOrThrowArgs} args - Arguments to find a MenuItemMaterial
     * @example
     * // Get one MenuItemMaterial
     * const menuItemMaterial = await prisma.menuItemMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemMaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemMaterialClient<$Result.GetResult<Prisma.$MenuItemMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItemMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemMaterialFindFirstArgs} args - Arguments to find a MenuItemMaterial
     * @example
     * // Get one MenuItemMaterial
     * const menuItemMaterial = await prisma.menuItemMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemMaterialFindFirstArgs>(args?: SelectSubset<T, MenuItemMaterialFindFirstArgs<ExtArgs>>): Prisma__MenuItemMaterialClient<$Result.GetResult<Prisma.$MenuItemMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItemMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemMaterialFindFirstOrThrowArgs} args - Arguments to find a MenuItemMaterial
     * @example
     * // Get one MenuItemMaterial
     * const menuItemMaterial = await prisma.menuItemMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemMaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemMaterialClient<$Result.GetResult<Prisma.$MenuItemMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuItemMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItemMaterials
     * const menuItemMaterials = await prisma.menuItemMaterial.findMany()
     * 
     * // Get first 10 MenuItemMaterials
     * const menuItemMaterials = await prisma.menuItemMaterial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemMaterialWithIdOnly = await prisma.menuItemMaterial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuItemMaterialFindManyArgs>(args?: SelectSubset<T, MenuItemMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuItemMaterial.
     * @param {MenuItemMaterialCreateArgs} args - Arguments to create a MenuItemMaterial.
     * @example
     * // Create one MenuItemMaterial
     * const MenuItemMaterial = await prisma.menuItemMaterial.create({
     *   data: {
     *     // ... data to create a MenuItemMaterial
     *   }
     * })
     * 
     */
    create<T extends MenuItemMaterialCreateArgs>(args: SelectSubset<T, MenuItemMaterialCreateArgs<ExtArgs>>): Prisma__MenuItemMaterialClient<$Result.GetResult<Prisma.$MenuItemMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuItemMaterials.
     * @param {MenuItemMaterialCreateManyArgs} args - Arguments to create many MenuItemMaterials.
     * @example
     * // Create many MenuItemMaterials
     * const menuItemMaterial = await prisma.menuItemMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemMaterialCreateManyArgs>(args?: SelectSubset<T, MenuItemMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItemMaterials and returns the data saved in the database.
     * @param {MenuItemMaterialCreateManyAndReturnArgs} args - Arguments to create many MenuItemMaterials.
     * @example
     * // Create many MenuItemMaterials
     * const menuItemMaterial = await prisma.menuItemMaterial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItemMaterials and only return the `id`
     * const menuItemMaterialWithIdOnly = await prisma.menuItemMaterial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuItemMaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuItemMaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemMaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuItemMaterial.
     * @param {MenuItemMaterialDeleteArgs} args - Arguments to delete one MenuItemMaterial.
     * @example
     * // Delete one MenuItemMaterial
     * const MenuItemMaterial = await prisma.menuItemMaterial.delete({
     *   where: {
     *     // ... filter to delete one MenuItemMaterial
     *   }
     * })
     * 
     */
    delete<T extends MenuItemMaterialDeleteArgs>(args: SelectSubset<T, MenuItemMaterialDeleteArgs<ExtArgs>>): Prisma__MenuItemMaterialClient<$Result.GetResult<Prisma.$MenuItemMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuItemMaterial.
     * @param {MenuItemMaterialUpdateArgs} args - Arguments to update one MenuItemMaterial.
     * @example
     * // Update one MenuItemMaterial
     * const menuItemMaterial = await prisma.menuItemMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemMaterialUpdateArgs>(args: SelectSubset<T, MenuItemMaterialUpdateArgs<ExtArgs>>): Prisma__MenuItemMaterialClient<$Result.GetResult<Prisma.$MenuItemMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuItemMaterials.
     * @param {MenuItemMaterialDeleteManyArgs} args - Arguments to filter MenuItemMaterials to delete.
     * @example
     * // Delete a few MenuItemMaterials
     * const { count } = await prisma.menuItemMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemMaterialDeleteManyArgs>(args?: SelectSubset<T, MenuItemMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItemMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItemMaterials
     * const menuItemMaterial = await prisma.menuItemMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemMaterialUpdateManyArgs>(args: SelectSubset<T, MenuItemMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItemMaterials and returns the data updated in the database.
     * @param {MenuItemMaterialUpdateManyAndReturnArgs} args - Arguments to update many MenuItemMaterials.
     * @example
     * // Update many MenuItemMaterials
     * const menuItemMaterial = await prisma.menuItemMaterial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuItemMaterials and only return the `id`
     * const menuItemMaterialWithIdOnly = await prisma.menuItemMaterial.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends MenuItemMaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuItemMaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemMaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuItemMaterial.
     * @param {MenuItemMaterialUpsertArgs} args - Arguments to update or create a MenuItemMaterial.
     * @example
     * // Update or create a MenuItemMaterial
     * const menuItemMaterial = await prisma.menuItemMaterial.upsert({
     *   create: {
     *     // ... data to create a MenuItemMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItemMaterial we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemMaterialUpsertArgs>(args: SelectSubset<T, MenuItemMaterialUpsertArgs<ExtArgs>>): Prisma__MenuItemMaterialClient<$Result.GetResult<Prisma.$MenuItemMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuItemMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemMaterialCountArgs} args - Arguments to filter MenuItemMaterials to count.
     * @example
     * // Count the number of MenuItemMaterials
     * const count = await prisma.menuItemMaterial.count({
     *   where: {
     *     // ... the filter for the MenuItemMaterials we want to count
     *   }
     * })
    **/
    count<T extends MenuItemMaterialCountArgs>(
      args?: Subset<T, MenuItemMaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemMaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItemMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuItemMaterialAggregateArgs>(args: Subset<T, MenuItemMaterialAggregateArgs>): Prisma.PrismaPromise<GetMenuItemMaterialAggregateType<T>>

    /**
     * Group by MenuItemMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemMaterialGroupByArgs} args - Group by arguments.
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
      T extends MenuItemMaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemMaterialGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemMaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuItemMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItemMaterial model
   */
  readonly fields: MenuItemMaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItemMaterial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemMaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menuItem<T extends MenuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuItemDefaultArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MenuItemMaterial model
   */
  interface MenuItemMaterialFieldRefs {
    readonly id: FieldRef<"MenuItemMaterial", 'Int'>
    readonly menuItemId: FieldRef<"MenuItemMaterial", 'Int'>
    readonly materialId: FieldRef<"MenuItemMaterial", 'Int'>
    readonly quantity: FieldRef<"MenuItemMaterial", 'Float'>
    readonly createdAt: FieldRef<"MenuItemMaterial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MenuItemMaterial findUnique
   */
  export type MenuItemMaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemMaterial
     */
    select?: MenuItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemMaterial
     */
    omit?: MenuItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemMaterialInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemMaterial to fetch.
     */
    where: MenuItemMaterialWhereUniqueInput
  }

  /**
   * MenuItemMaterial findUniqueOrThrow
   */
  export type MenuItemMaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemMaterial
     */
    select?: MenuItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemMaterial
     */
    omit?: MenuItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemMaterialInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemMaterial to fetch.
     */
    where: MenuItemMaterialWhereUniqueInput
  }

  /**
   * MenuItemMaterial findFirst
   */
  export type MenuItemMaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemMaterial
     */
    select?: MenuItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemMaterial
     */
    omit?: MenuItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemMaterialInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemMaterial to fetch.
     */
    where?: MenuItemMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItemMaterials to fetch.
     */
    orderBy?: MenuItemMaterialOrderByWithRelationInput | MenuItemMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItemMaterials.
     */
    cursor?: MenuItemMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItemMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItemMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItemMaterials.
     */
    distinct?: MenuItemMaterialScalarFieldEnum | MenuItemMaterialScalarFieldEnum[]
  }

  /**
   * MenuItemMaterial findFirstOrThrow
   */
  export type MenuItemMaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemMaterial
     */
    select?: MenuItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemMaterial
     */
    omit?: MenuItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemMaterialInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemMaterial to fetch.
     */
    where?: MenuItemMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItemMaterials to fetch.
     */
    orderBy?: MenuItemMaterialOrderByWithRelationInput | MenuItemMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItemMaterials.
     */
    cursor?: MenuItemMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItemMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItemMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItemMaterials.
     */
    distinct?: MenuItemMaterialScalarFieldEnum | MenuItemMaterialScalarFieldEnum[]
  }

  /**
   * MenuItemMaterial findMany
   */
  export type MenuItemMaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemMaterial
     */
    select?: MenuItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemMaterial
     */
    omit?: MenuItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemMaterialInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemMaterials to fetch.
     */
    where?: MenuItemMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItemMaterials to fetch.
     */
    orderBy?: MenuItemMaterialOrderByWithRelationInput | MenuItemMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItemMaterials.
     */
    cursor?: MenuItemMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItemMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItemMaterials.
     */
    skip?: number
    distinct?: MenuItemMaterialScalarFieldEnum | MenuItemMaterialScalarFieldEnum[]
  }

  /**
   * MenuItemMaterial create
   */
  export type MenuItemMaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemMaterial
     */
    select?: MenuItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemMaterial
     */
    omit?: MenuItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemMaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuItemMaterial.
     */
    data: XOR<MenuItemMaterialCreateInput, MenuItemMaterialUncheckedCreateInput>
  }

  /**
   * MenuItemMaterial createMany
   */
  export type MenuItemMaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItemMaterials.
     */
    data: MenuItemMaterialCreateManyInput | MenuItemMaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItemMaterial createManyAndReturn
   */
  export type MenuItemMaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemMaterial
     */
    select?: MenuItemMaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemMaterial
     */
    omit?: MenuItemMaterialOmit<ExtArgs> | null
    /**
     * The data used to create many MenuItemMaterials.
     */
    data: MenuItemMaterialCreateManyInput | MenuItemMaterialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemMaterialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItemMaterial update
   */
  export type MenuItemMaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemMaterial
     */
    select?: MenuItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemMaterial
     */
    omit?: MenuItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemMaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuItemMaterial.
     */
    data: XOR<MenuItemMaterialUpdateInput, MenuItemMaterialUncheckedUpdateInput>
    /**
     * Choose, which MenuItemMaterial to update.
     */
    where: MenuItemMaterialWhereUniqueInput
  }

  /**
   * MenuItemMaterial updateMany
   */
  export type MenuItemMaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItemMaterials.
     */
    data: XOR<MenuItemMaterialUpdateManyMutationInput, MenuItemMaterialUncheckedUpdateManyInput>
    /**
     * Filter which MenuItemMaterials to update
     */
    where?: MenuItemMaterialWhereInput
    /**
     * Limit how many MenuItemMaterials to update.
     */
    limit?: number
  }

  /**
   * MenuItemMaterial updateManyAndReturn
   */
  export type MenuItemMaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemMaterial
     */
    select?: MenuItemMaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemMaterial
     */
    omit?: MenuItemMaterialOmit<ExtArgs> | null
    /**
     * The data used to update MenuItemMaterials.
     */
    data: XOR<MenuItemMaterialUpdateManyMutationInput, MenuItemMaterialUncheckedUpdateManyInput>
    /**
     * Filter which MenuItemMaterials to update
     */
    where?: MenuItemMaterialWhereInput
    /**
     * Limit how many MenuItemMaterials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemMaterialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItemMaterial upsert
   */
  export type MenuItemMaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemMaterial
     */
    select?: MenuItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemMaterial
     */
    omit?: MenuItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemMaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuItemMaterial to update in case it exists.
     */
    where: MenuItemMaterialWhereUniqueInput
    /**
     * In case the MenuItemMaterial found by the `where` argument doesn't exist, create a new MenuItemMaterial with this data.
     */
    create: XOR<MenuItemMaterialCreateInput, MenuItemMaterialUncheckedCreateInput>
    /**
     * In case the MenuItemMaterial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemMaterialUpdateInput, MenuItemMaterialUncheckedUpdateInput>
  }

  /**
   * MenuItemMaterial delete
   */
  export type MenuItemMaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemMaterial
     */
    select?: MenuItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemMaterial
     */
    omit?: MenuItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemMaterialInclude<ExtArgs> | null
    /**
     * Filter which MenuItemMaterial to delete.
     */
    where: MenuItemMaterialWhereUniqueInput
  }

  /**
   * MenuItemMaterial deleteMany
   */
  export type MenuItemMaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItemMaterials to delete
     */
    where?: MenuItemMaterialWhereInput
    /**
     * Limit how many MenuItemMaterials to delete.
     */
    limit?: number
  }

  /**
   * MenuItemMaterial without action
   */
  export type MenuItemMaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemMaterial
     */
    select?: MenuItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemMaterial
     */
    omit?: MenuItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemMaterialInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    id: number | null
    menuItemId: number | null
    qty: number | null
    priceSnapshot: number | null
    costSnapshot: number | null
    total: number | null
    shiftId: number | null
    discountAmount: number | null
    promoId: number | null
    orderId: number | null
  }

  export type SaleSumAggregateOutputType = {
    id: number | null
    menuItemId: number | null
    qty: number | null
    priceSnapshot: number | null
    costSnapshot: number | null
    total: number | null
    shiftId: number | null
    discountAmount: number | null
    promoId: number | null
    orderId: number | null
  }

  export type SaleMinAggregateOutputType = {
    id: number | null
    date: Date | null
    menuItemId: number | null
    qty: number | null
    priceSnapshot: number | null
    costSnapshot: number | null
    total: number | null
    paymentMethod: string | null
    createdAt: Date | null
    shiftId: number | null
    transactionId: string | null
    discountAmount: number | null
    promoId: number | null
    variants: string | null
    orderId: number | null
  }

  export type SaleMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    menuItemId: number | null
    qty: number | null
    priceSnapshot: number | null
    costSnapshot: number | null
    total: number | null
    paymentMethod: string | null
    createdAt: Date | null
    shiftId: number | null
    transactionId: string | null
    discountAmount: number | null
    promoId: number | null
    variants: string | null
    orderId: number | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    date: number
    menuItemId: number
    qty: number
    priceSnapshot: number
    costSnapshot: number
    total: number
    paymentMethod: number
    createdAt: number
    shiftId: number
    transactionId: number
    discountAmount: number
    promoId: number
    variants: number
    orderId: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    id?: true
    menuItemId?: true
    qty?: true
    priceSnapshot?: true
    costSnapshot?: true
    total?: true
    shiftId?: true
    discountAmount?: true
    promoId?: true
    orderId?: true
  }

  export type SaleSumAggregateInputType = {
    id?: true
    menuItemId?: true
    qty?: true
    priceSnapshot?: true
    costSnapshot?: true
    total?: true
    shiftId?: true
    discountAmount?: true
    promoId?: true
    orderId?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    date?: true
    menuItemId?: true
    qty?: true
    priceSnapshot?: true
    costSnapshot?: true
    total?: true
    paymentMethod?: true
    createdAt?: true
    shiftId?: true
    transactionId?: true
    discountAmount?: true
    promoId?: true
    variants?: true
    orderId?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    date?: true
    menuItemId?: true
    qty?: true
    priceSnapshot?: true
    costSnapshot?: true
    total?: true
    paymentMethod?: true
    createdAt?: true
    shiftId?: true
    transactionId?: true
    discountAmount?: true
    promoId?: true
    variants?: true
    orderId?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    date?: true
    menuItemId?: true
    qty?: true
    priceSnapshot?: true
    costSnapshot?: true
    total?: true
    paymentMethod?: true
    createdAt?: true
    shiftId?: true
    transactionId?: true
    discountAmount?: true
    promoId?: true
    variants?: true
    orderId?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: number
    date: Date
    menuItemId: number
    qty: number
    priceSnapshot: number
    costSnapshot: number
    total: number
    paymentMethod: string
    createdAt: Date
    shiftId: number | null
    transactionId: string | null
    discountAmount: number
    promoId: number | null
    variants: string | null
    orderId: number | null
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    menuItemId?: boolean
    qty?: boolean
    priceSnapshot?: boolean
    costSnapshot?: boolean
    total?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    shiftId?: boolean
    transactionId?: boolean
    discountAmount?: boolean
    promoId?: boolean
    variants?: boolean
    orderId?: boolean
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    shift?: boolean | Sale$shiftArgs<ExtArgs>
    promo?: boolean | Sale$promoArgs<ExtArgs>
    order?: boolean | Sale$orderArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    menuItemId?: boolean
    qty?: boolean
    priceSnapshot?: boolean
    costSnapshot?: boolean
    total?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    shiftId?: boolean
    transactionId?: boolean
    discountAmount?: boolean
    promoId?: boolean
    variants?: boolean
    orderId?: boolean
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    shift?: boolean | Sale$shiftArgs<ExtArgs>
    promo?: boolean | Sale$promoArgs<ExtArgs>
    order?: boolean | Sale$orderArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    menuItemId?: boolean
    qty?: boolean
    priceSnapshot?: boolean
    costSnapshot?: boolean
    total?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    shiftId?: boolean
    transactionId?: boolean
    discountAmount?: boolean
    promoId?: boolean
    variants?: boolean
    orderId?: boolean
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    shift?: boolean | Sale$shiftArgs<ExtArgs>
    promo?: boolean | Sale$promoArgs<ExtArgs>
    order?: boolean | Sale$orderArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    id?: boolean
    date?: boolean
    menuItemId?: boolean
    qty?: boolean
    priceSnapshot?: boolean
    costSnapshot?: boolean
    total?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    shiftId?: boolean
    transactionId?: boolean
    discountAmount?: boolean
    promoId?: boolean
    variants?: boolean
    orderId?: boolean
  }

  export type SaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "menuItemId" | "qty" | "priceSnapshot" | "costSnapshot" | "total" | "paymentMethod" | "createdAt" | "shiftId" | "transactionId" | "discountAmount" | "promoId" | "variants" | "orderId", ExtArgs["result"]["sale"]>
  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    shift?: boolean | Sale$shiftArgs<ExtArgs>
    promo?: boolean | Sale$promoArgs<ExtArgs>
    order?: boolean | Sale$orderArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    shift?: boolean | Sale$shiftArgs<ExtArgs>
    promo?: boolean | Sale$promoArgs<ExtArgs>
    order?: boolean | Sale$orderArgs<ExtArgs>
  }
  export type SaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    shift?: boolean | Sale$shiftArgs<ExtArgs>
    promo?: boolean | Sale$promoArgs<ExtArgs>
    order?: boolean | Sale$orderArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      menuItem: Prisma.$MenuItemPayload<ExtArgs>
      shift: Prisma.$ShiftPayload<ExtArgs> | null
      promo: Prisma.$PromoPayload<ExtArgs> | null
      order: Prisma.$OrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      menuItemId: number
      qty: number
      priceSnapshot: number
      costSnapshot: number
      total: number
      paymentMethod: string
      createdAt: Date
      shiftId: number | null
      transactionId: string | null
      discountAmount: number
      promoId: number | null
      variants: string | null
      orderId: number | null
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SaleUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
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
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menuItem<T extends MenuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuItemDefaultArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shift<T extends Sale$shiftArgs<ExtArgs> = {}>(args?: Subset<T, Sale$shiftArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    promo<T extends Sale$promoArgs<ExtArgs> = {}>(args?: Subset<T, Sale$promoArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order<T extends Sale$orderArgs<ExtArgs> = {}>(args?: Subset<T, Sale$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sale model
   */
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'Int'>
    readonly date: FieldRef<"Sale", 'DateTime'>
    readonly menuItemId: FieldRef<"Sale", 'Int'>
    readonly qty: FieldRef<"Sale", 'Int'>
    readonly priceSnapshot: FieldRef<"Sale", 'Float'>
    readonly costSnapshot: FieldRef<"Sale", 'Float'>
    readonly total: FieldRef<"Sale", 'Float'>
    readonly paymentMethod: FieldRef<"Sale", 'String'>
    readonly createdAt: FieldRef<"Sale", 'DateTime'>
    readonly shiftId: FieldRef<"Sale", 'Int'>
    readonly transactionId: FieldRef<"Sale", 'String'>
    readonly discountAmount: FieldRef<"Sale", 'Float'>
    readonly promoId: FieldRef<"Sale", 'Int'>
    readonly variants: FieldRef<"Sale", 'String'>
    readonly orderId: FieldRef<"Sale", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sale updateManyAndReturn
   */
  export type SaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sale.shift
   */
  export type Sale$shiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    where?: ShiftWhereInput
  }

  /**
   * Sale.promo
   */
  export type Sale$promoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    where?: PromoWhereInput
  }

  /**
   * Sale.order
   */
  export type Sale$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    totalAmount: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    totalAmount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    transactionId: string | null
    customerName: string | null
    tableNumber: string | null
    status: string | null
    totalAmount: number | null
    paymentMethod: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    transactionId: string | null
    customerName: string | null
    tableNumber: string | null
    status: string | null
    totalAmount: number | null
    paymentMethod: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    transactionId: number
    customerName: number
    tableNumber: number
    status: number
    totalAmount: number
    paymentMethod: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    totalAmount?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    totalAmount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    transactionId?: true
    customerName?: true
    tableNumber?: true
    status?: true
    totalAmount?: true
    paymentMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    transactionId?: true
    customerName?: true
    tableNumber?: true
    status?: true
    totalAmount?: true
    paymentMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    transactionId?: true
    customerName?: true
    tableNumber?: true
    status?: true
    totalAmount?: true
    paymentMethod?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    transactionId: string
    customerName: string | null
    tableNumber: string | null
    status: string
    totalAmount: number
    paymentMethod: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    customerName?: boolean
    tableNumber?: boolean
    status?: boolean
    totalAmount?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sales?: boolean | Order$salesArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    customerName?: boolean
    tableNumber?: boolean
    status?: boolean
    totalAmount?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    customerName?: boolean
    tableNumber?: boolean
    status?: boolean
    totalAmount?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    transactionId?: boolean
    customerName?: boolean
    tableNumber?: boolean
    status?: boolean
    totalAmount?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transactionId" | "customerName" | "tableNumber" | "status" | "totalAmount" | "paymentMethod" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | Order$salesArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      sales: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transactionId: string
      customerName: string | null
      tableNumber: string | null
      status: string
      totalAmount: number
      paymentMethod: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends Order$salesArgs<ExtArgs> = {}>(args?: Subset<T, Order$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly transactionId: FieldRef<"Order", 'String'>
    readonly customerName: FieldRef<"Order", 'String'>
    readonly tableNumber: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'String'>
    readonly totalAmount: FieldRef<"Order", 'Float'>
    readonly paymentMethod: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.sales
   */
  export type Order$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Shift
   */

  export type AggregateShift = {
    _count: ShiftCountAggregateOutputType | null
    _avg: ShiftAvgAggregateOutputType | null
    _sum: ShiftSumAggregateOutputType | null
    _min: ShiftMinAggregateOutputType | null
    _max: ShiftMaxAggregateOutputType | null
  }

  export type ShiftAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    openingCash: number | null
    closingCash: number | null
  }

  export type ShiftSumAggregateOutputType = {
    id: number | null
    userId: number | null
    openingCash: number | null
    closingCash: number | null
  }

  export type ShiftMinAggregateOutputType = {
    id: number | null
    userId: number | null
    startTime: Date | null
    endTime: Date | null
    openingCash: number | null
    closingCash: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    startTime: Date | null
    endTime: Date | null
    openingCash: number | null
    closingCash: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftCountAggregateOutputType = {
    id: number
    userId: number
    startTime: number
    endTime: number
    openingCash: number
    closingCash: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShiftAvgAggregateInputType = {
    id?: true
    userId?: true
    openingCash?: true
    closingCash?: true
  }

  export type ShiftSumAggregateInputType = {
    id?: true
    userId?: true
    openingCash?: true
    closingCash?: true
  }

  export type ShiftMinAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    openingCash?: true
    closingCash?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftMaxAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    openingCash?: true
    closingCash?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftCountAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    openingCash?: true
    closingCash?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shift to aggregate.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shifts
    **/
    _count?: true | ShiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShiftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShiftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftMaxAggregateInputType
  }

  export type GetShiftAggregateType<T extends ShiftAggregateArgs> = {
        [P in keyof T & keyof AggregateShift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShift[P]>
      : GetScalarType<T[P], AggregateShift[P]>
  }




  export type ShiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftWhereInput
    orderBy?: ShiftOrderByWithAggregationInput | ShiftOrderByWithAggregationInput[]
    by: ShiftScalarFieldEnum[] | ShiftScalarFieldEnum
    having?: ShiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftCountAggregateInputType | true
    _avg?: ShiftAvgAggregateInputType
    _sum?: ShiftSumAggregateInputType
    _min?: ShiftMinAggregateInputType
    _max?: ShiftMaxAggregateInputType
  }

  export type ShiftGroupByOutputType = {
    id: number
    userId: number | null
    startTime: Date
    endTime: Date | null
    openingCash: number
    closingCash: number | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ShiftCountAggregateOutputType | null
    _avg: ShiftAvgAggregateOutputType | null
    _sum: ShiftSumAggregateOutputType | null
    _min: ShiftMinAggregateOutputType | null
    _max: ShiftMaxAggregateOutputType | null
  }

  type GetShiftGroupByPayload<T extends ShiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftGroupByOutputType[P]>
        }
      >
    >


  export type ShiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    openingCash?: boolean
    closingCash?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sales?: boolean | Shift$salesArgs<ExtArgs>
    user?: boolean | Shift$userArgs<ExtArgs>
    _count?: boolean | ShiftCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    openingCash?: boolean
    closingCash?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Shift$userArgs<ExtArgs>
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    openingCash?: boolean
    closingCash?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Shift$userArgs<ExtArgs>
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectScalar = {
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    openingCash?: boolean
    closingCash?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShiftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "startTime" | "endTime" | "openingCash" | "closingCash" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["shift"]>
  export type ShiftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | Shift$salesArgs<ExtArgs>
    user?: boolean | Shift$userArgs<ExtArgs>
    _count?: boolean | ShiftCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShiftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Shift$userArgs<ExtArgs>
  }
  export type ShiftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Shift$userArgs<ExtArgs>
  }

  export type $ShiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shift"
    objects: {
      sales: Prisma.$SalePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      startTime: Date
      endTime: Date | null
      openingCash: number
      closingCash: number | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shift"]>
    composites: {}
  }

  type ShiftGetPayload<S extends boolean | null | undefined | ShiftDefaultArgs> = $Result.GetResult<Prisma.$ShiftPayload, S>

  type ShiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftCountAggregateInputType | true
    }

  export interface ShiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shift'], meta: { name: 'Shift' } }
    /**
     * Find zero or one Shift that matches the filter.
     * @param {ShiftFindUniqueArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftFindUniqueArgs>(args: SelectSubset<T, ShiftFindUniqueArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shift that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShiftFindUniqueOrThrowArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindFirstArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftFindFirstArgs>(args?: SelectSubset<T, ShiftFindFirstArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindFirstOrThrowArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shifts
     * const shifts = await prisma.shift.findMany()
     * 
     * // Get first 10 Shifts
     * const shifts = await prisma.shift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftWithIdOnly = await prisma.shift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftFindManyArgs>(args?: SelectSubset<T, ShiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shift.
     * @param {ShiftCreateArgs} args - Arguments to create a Shift.
     * @example
     * // Create one Shift
     * const Shift = await prisma.shift.create({
     *   data: {
     *     // ... data to create a Shift
     *   }
     * })
     * 
     */
    create<T extends ShiftCreateArgs>(args: SelectSubset<T, ShiftCreateArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shifts.
     * @param {ShiftCreateManyArgs} args - Arguments to create many Shifts.
     * @example
     * // Create many Shifts
     * const shift = await prisma.shift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftCreateManyArgs>(args?: SelectSubset<T, ShiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shifts and returns the data saved in the database.
     * @param {ShiftCreateManyAndReturnArgs} args - Arguments to create many Shifts.
     * @example
     * // Create many Shifts
     * const shift = await prisma.shift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shifts and only return the `id`
     * const shiftWithIdOnly = await prisma.shift.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shift.
     * @param {ShiftDeleteArgs} args - Arguments to delete one Shift.
     * @example
     * // Delete one Shift
     * const Shift = await prisma.shift.delete({
     *   where: {
     *     // ... filter to delete one Shift
     *   }
     * })
     * 
     */
    delete<T extends ShiftDeleteArgs>(args: SelectSubset<T, ShiftDeleteArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shift.
     * @param {ShiftUpdateArgs} args - Arguments to update one Shift.
     * @example
     * // Update one Shift
     * const shift = await prisma.shift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftUpdateArgs>(args: SelectSubset<T, ShiftUpdateArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shifts.
     * @param {ShiftDeleteManyArgs} args - Arguments to filter Shifts to delete.
     * @example
     * // Delete a few Shifts
     * const { count } = await prisma.shift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftDeleteManyArgs>(args?: SelectSubset<T, ShiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shifts
     * const shift = await prisma.shift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftUpdateManyArgs>(args: SelectSubset<T, ShiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shifts and returns the data updated in the database.
     * @param {ShiftUpdateManyAndReturnArgs} args - Arguments to update many Shifts.
     * @example
     * // Update many Shifts
     * const shift = await prisma.shift.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shifts and only return the `id`
     * const shiftWithIdOnly = await prisma.shift.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ShiftUpdateManyAndReturnArgs>(args: SelectSubset<T, ShiftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shift.
     * @param {ShiftUpsertArgs} args - Arguments to update or create a Shift.
     * @example
     * // Update or create a Shift
     * const shift = await prisma.shift.upsert({
     *   create: {
     *     // ... data to create a Shift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shift we want to update
     *   }
     * })
     */
    upsert<T extends ShiftUpsertArgs>(args: SelectSubset<T, ShiftUpsertArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftCountArgs} args - Arguments to filter Shifts to count.
     * @example
     * // Count the number of Shifts
     * const count = await prisma.shift.count({
     *   where: {
     *     // ... the filter for the Shifts we want to count
     *   }
     * })
    **/
    count<T extends ShiftCountArgs>(
      args?: Subset<T, ShiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShiftAggregateArgs>(args: Subset<T, ShiftAggregateArgs>): Prisma.PrismaPromise<GetShiftAggregateType<T>>

    /**
     * Group by Shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftGroupByArgs} args - Group by arguments.
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
      T extends ShiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftGroupByArgs['orderBy'] }
        : { orderBy?: ShiftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shift model
   */
  readonly fields: ShiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends Shift$salesArgs<ExtArgs> = {}>(args?: Subset<T, Shift$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Shift$userArgs<ExtArgs> = {}>(args?: Subset<T, Shift$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Shift model
   */
  interface ShiftFieldRefs {
    readonly id: FieldRef<"Shift", 'Int'>
    readonly userId: FieldRef<"Shift", 'Int'>
    readonly startTime: FieldRef<"Shift", 'DateTime'>
    readonly endTime: FieldRef<"Shift", 'DateTime'>
    readonly openingCash: FieldRef<"Shift", 'Float'>
    readonly closingCash: FieldRef<"Shift", 'Float'>
    readonly status: FieldRef<"Shift", 'String'>
    readonly createdAt: FieldRef<"Shift", 'DateTime'>
    readonly updatedAt: FieldRef<"Shift", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shift findUnique
   */
  export type ShiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift findUniqueOrThrow
   */
  export type ShiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift findFirst
   */
  export type ShiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     */
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift findFirstOrThrow
   */
  export type ShiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     */
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift findMany
   */
  export type ShiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shifts to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift create
   */
  export type ShiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The data needed to create a Shift.
     */
    data: XOR<ShiftCreateInput, ShiftUncheckedCreateInput>
  }

  /**
   * Shift createMany
   */
  export type ShiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shifts.
     */
    data: ShiftCreateManyInput | ShiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shift createManyAndReturn
   */
  export type ShiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * The data used to create many Shifts.
     */
    data: ShiftCreateManyInput | ShiftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shift update
   */
  export type ShiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The data needed to update a Shift.
     */
    data: XOR<ShiftUpdateInput, ShiftUncheckedUpdateInput>
    /**
     * Choose, which Shift to update.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift updateMany
   */
  export type ShiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shifts.
     */
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyInput>
    /**
     * Filter which Shifts to update
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to update.
     */
    limit?: number
  }

  /**
   * Shift updateManyAndReturn
   */
  export type ShiftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * The data used to update Shifts.
     */
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyInput>
    /**
     * Filter which Shifts to update
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shift upsert
   */
  export type ShiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The filter to search for the Shift to update in case it exists.
     */
    where: ShiftWhereUniqueInput
    /**
     * In case the Shift found by the `where` argument doesn't exist, create a new Shift with this data.
     */
    create: XOR<ShiftCreateInput, ShiftUncheckedCreateInput>
    /**
     * In case the Shift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftUpdateInput, ShiftUncheckedUpdateInput>
  }

  /**
   * Shift delete
   */
  export type ShiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter which Shift to delete.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift deleteMany
   */
  export type ShiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shifts to delete
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to delete.
     */
    limit?: number
  }

  /**
   * Shift.sales
   */
  export type Shift$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Shift.user
   */
  export type Shift$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Shift without action
   */
  export type ShiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: number | null
    date: Date | null
    description: string | null
    category: string | null
    amount: number | null
    note: string | null
    createdAt: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    description: string | null
    category: string | null
    amount: number | null
    note: string | null
    createdAt: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    date: number
    description: number
    category: number
    amount: number
    note: number
    createdAt: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    date?: true
    description?: true
    category?: true
    amount?: true
    note?: true
    createdAt?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    date?: true
    description?: true
    category?: true
    amount?: true
    note?: true
    createdAt?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    date?: true
    description?: true
    category?: true
    amount?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: number
    date: Date
    description: string
    category: string
    amount: number
    note: string | null
    createdAt: Date
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    description?: boolean
    category?: boolean
    amount?: boolean
    note?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    description?: boolean
    category?: boolean
    amount?: boolean
    note?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    description?: boolean
    category?: boolean
    amount?: boolean
    note?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    date?: boolean
    description?: boolean
    category?: boolean
    amount?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "description" | "category" | "amount" | "note" | "createdAt", ExtArgs["result"]["expense"]>

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      description: string
      category: string
      amount: number
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
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
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'Int'>
    readonly date: FieldRef<"Expense", 'DateTime'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly category: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Float'>
    readonly note: FieldRef<"Expense", 'String'>
    readonly createdAt: FieldRef<"Expense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
  }


  /**
   * Model MaterialLog
   */

  export type AggregateMaterialLog = {
    _count: MaterialLogCountAggregateOutputType | null
    _avg: MaterialLogAvgAggregateOutputType | null
    _sum: MaterialLogSumAggregateOutputType | null
    _min: MaterialLogMinAggregateOutputType | null
    _max: MaterialLogMaxAggregateOutputType | null
  }

  export type MaterialLogAvgAggregateOutputType = {
    id: number | null
    materialId: number | null
    quantity: number | null
    balanceAfter: number | null
  }

  export type MaterialLogSumAggregateOutputType = {
    id: number | null
    materialId: number | null
    quantity: number | null
    balanceAfter: number | null
  }

  export type MaterialLogMinAggregateOutputType = {
    id: number | null
    materialId: number | null
    type: string | null
    quantity: number | null
    balanceAfter: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type MaterialLogMaxAggregateOutputType = {
    id: number | null
    materialId: number | null
    type: string | null
    quantity: number | null
    balanceAfter: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type MaterialLogCountAggregateOutputType = {
    id: number
    materialId: number
    type: number
    quantity: number
    balanceAfter: number
    reason: number
    createdAt: number
    _all: number
  }


  export type MaterialLogAvgAggregateInputType = {
    id?: true
    materialId?: true
    quantity?: true
    balanceAfter?: true
  }

  export type MaterialLogSumAggregateInputType = {
    id?: true
    materialId?: true
    quantity?: true
    balanceAfter?: true
  }

  export type MaterialLogMinAggregateInputType = {
    id?: true
    materialId?: true
    type?: true
    quantity?: true
    balanceAfter?: true
    reason?: true
    createdAt?: true
  }

  export type MaterialLogMaxAggregateInputType = {
    id?: true
    materialId?: true
    type?: true
    quantity?: true
    balanceAfter?: true
    reason?: true
    createdAt?: true
  }

  export type MaterialLogCountAggregateInputType = {
    id?: true
    materialId?: true
    type?: true
    quantity?: true
    balanceAfter?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type MaterialLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialLog to aggregate.
     */
    where?: MaterialLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialLogs to fetch.
     */
    orderBy?: MaterialLogOrderByWithRelationInput | MaterialLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaterialLogs
    **/
    _count?: true | MaterialLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialLogMaxAggregateInputType
  }

  export type GetMaterialLogAggregateType<T extends MaterialLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterialLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterialLog[P]>
      : GetScalarType<T[P], AggregateMaterialLog[P]>
  }




  export type MaterialLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialLogWhereInput
    orderBy?: MaterialLogOrderByWithAggregationInput | MaterialLogOrderByWithAggregationInput[]
    by: MaterialLogScalarFieldEnum[] | MaterialLogScalarFieldEnum
    having?: MaterialLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialLogCountAggregateInputType | true
    _avg?: MaterialLogAvgAggregateInputType
    _sum?: MaterialLogSumAggregateInputType
    _min?: MaterialLogMinAggregateInputType
    _max?: MaterialLogMaxAggregateInputType
  }

  export type MaterialLogGroupByOutputType = {
    id: number
    materialId: number
    type: string
    quantity: number
    balanceAfter: number
    reason: string | null
    createdAt: Date
    _count: MaterialLogCountAggregateOutputType | null
    _avg: MaterialLogAvgAggregateOutputType | null
    _sum: MaterialLogSumAggregateOutputType | null
    _min: MaterialLogMinAggregateOutputType | null
    _max: MaterialLogMaxAggregateOutputType | null
  }

  type GetMaterialLogGroupByPayload<T extends MaterialLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialLogGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialLogGroupByOutputType[P]>
        }
      >
    >


  export type MaterialLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    type?: boolean
    quantity?: boolean
    balanceAfter?: boolean
    reason?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialLog"]>

  export type MaterialLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    type?: boolean
    quantity?: boolean
    balanceAfter?: boolean
    reason?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialLog"]>

  export type MaterialLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    type?: boolean
    quantity?: boolean
    balanceAfter?: boolean
    reason?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialLog"]>

  export type MaterialLogSelectScalar = {
    id?: boolean
    materialId?: boolean
    type?: boolean
    quantity?: boolean
    balanceAfter?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type MaterialLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "materialId" | "type" | "quantity" | "balanceAfter" | "reason" | "createdAt", ExtArgs["result"]["materialLog"]>
  export type MaterialLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type MaterialLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type MaterialLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $MaterialLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaterialLog"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      materialId: number
      type: string
      quantity: number
      balanceAfter: number
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["materialLog"]>
    composites: {}
  }

  type MaterialLogGetPayload<S extends boolean | null | undefined | MaterialLogDefaultArgs> = $Result.GetResult<Prisma.$MaterialLogPayload, S>

  type MaterialLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialLogCountAggregateInputType | true
    }

  export interface MaterialLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaterialLog'], meta: { name: 'MaterialLog' } }
    /**
     * Find zero or one MaterialLog that matches the filter.
     * @param {MaterialLogFindUniqueArgs} args - Arguments to find a MaterialLog
     * @example
     * // Get one MaterialLog
     * const materialLog = await prisma.materialLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialLogFindUniqueArgs>(args: SelectSubset<T, MaterialLogFindUniqueArgs<ExtArgs>>): Prisma__MaterialLogClient<$Result.GetResult<Prisma.$MaterialLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaterialLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialLogFindUniqueOrThrowArgs} args - Arguments to find a MaterialLog
     * @example
     * // Get one MaterialLog
     * const materialLog = await prisma.materialLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialLogClient<$Result.GetResult<Prisma.$MaterialLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaterialLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialLogFindFirstArgs} args - Arguments to find a MaterialLog
     * @example
     * // Get one MaterialLog
     * const materialLog = await prisma.materialLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialLogFindFirstArgs>(args?: SelectSubset<T, MaterialLogFindFirstArgs<ExtArgs>>): Prisma__MaterialLogClient<$Result.GetResult<Prisma.$MaterialLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaterialLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialLogFindFirstOrThrowArgs} args - Arguments to find a MaterialLog
     * @example
     * // Get one MaterialLog
     * const materialLog = await prisma.materialLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialLogClient<$Result.GetResult<Prisma.$MaterialLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaterialLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaterialLogs
     * const materialLogs = await prisma.materialLog.findMany()
     * 
     * // Get first 10 MaterialLogs
     * const materialLogs = await prisma.materialLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialLogWithIdOnly = await prisma.materialLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialLogFindManyArgs>(args?: SelectSubset<T, MaterialLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaterialLog.
     * @param {MaterialLogCreateArgs} args - Arguments to create a MaterialLog.
     * @example
     * // Create one MaterialLog
     * const MaterialLog = await prisma.materialLog.create({
     *   data: {
     *     // ... data to create a MaterialLog
     *   }
     * })
     * 
     */
    create<T extends MaterialLogCreateArgs>(args: SelectSubset<T, MaterialLogCreateArgs<ExtArgs>>): Prisma__MaterialLogClient<$Result.GetResult<Prisma.$MaterialLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaterialLogs.
     * @param {MaterialLogCreateManyArgs} args - Arguments to create many MaterialLogs.
     * @example
     * // Create many MaterialLogs
     * const materialLog = await prisma.materialLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialLogCreateManyArgs>(args?: SelectSubset<T, MaterialLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaterialLogs and returns the data saved in the database.
     * @param {MaterialLogCreateManyAndReturnArgs} args - Arguments to create many MaterialLogs.
     * @example
     * // Create many MaterialLogs
     * const materialLog = await prisma.materialLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaterialLogs and only return the `id`
     * const materialLogWithIdOnly = await prisma.materialLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialLogCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaterialLog.
     * @param {MaterialLogDeleteArgs} args - Arguments to delete one MaterialLog.
     * @example
     * // Delete one MaterialLog
     * const MaterialLog = await prisma.materialLog.delete({
     *   where: {
     *     // ... filter to delete one MaterialLog
     *   }
     * })
     * 
     */
    delete<T extends MaterialLogDeleteArgs>(args: SelectSubset<T, MaterialLogDeleteArgs<ExtArgs>>): Prisma__MaterialLogClient<$Result.GetResult<Prisma.$MaterialLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaterialLog.
     * @param {MaterialLogUpdateArgs} args - Arguments to update one MaterialLog.
     * @example
     * // Update one MaterialLog
     * const materialLog = await prisma.materialLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialLogUpdateArgs>(args: SelectSubset<T, MaterialLogUpdateArgs<ExtArgs>>): Prisma__MaterialLogClient<$Result.GetResult<Prisma.$MaterialLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaterialLogs.
     * @param {MaterialLogDeleteManyArgs} args - Arguments to filter MaterialLogs to delete.
     * @example
     * // Delete a few MaterialLogs
     * const { count } = await prisma.materialLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialLogDeleteManyArgs>(args?: SelectSubset<T, MaterialLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaterialLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaterialLogs
     * const materialLog = await prisma.materialLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialLogUpdateManyArgs>(args: SelectSubset<T, MaterialLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaterialLogs and returns the data updated in the database.
     * @param {MaterialLogUpdateManyAndReturnArgs} args - Arguments to update many MaterialLogs.
     * @example
     * // Update many MaterialLogs
     * const materialLog = await prisma.materialLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaterialLogs and only return the `id`
     * const materialLogWithIdOnly = await prisma.materialLog.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends MaterialLogUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaterialLog.
     * @param {MaterialLogUpsertArgs} args - Arguments to update or create a MaterialLog.
     * @example
     * // Update or create a MaterialLog
     * const materialLog = await prisma.materialLog.upsert({
     *   create: {
     *     // ... data to create a MaterialLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaterialLog we want to update
     *   }
     * })
     */
    upsert<T extends MaterialLogUpsertArgs>(args: SelectSubset<T, MaterialLogUpsertArgs<ExtArgs>>): Prisma__MaterialLogClient<$Result.GetResult<Prisma.$MaterialLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaterialLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialLogCountArgs} args - Arguments to filter MaterialLogs to count.
     * @example
     * // Count the number of MaterialLogs
     * const count = await prisma.materialLog.count({
     *   where: {
     *     // ... the filter for the MaterialLogs we want to count
     *   }
     * })
    **/
    count<T extends MaterialLogCountArgs>(
      args?: Subset<T, MaterialLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaterialLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialLogAggregateArgs>(args: Subset<T, MaterialLogAggregateArgs>): Prisma.PrismaPromise<GetMaterialLogAggregateType<T>>

    /**
     * Group by MaterialLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialLogGroupByArgs} args - Group by arguments.
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
      T extends MaterialLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialLogGroupByArgs['orderBy'] }
        : { orderBy?: MaterialLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaterialLog model
   */
  readonly fields: MaterialLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaterialLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MaterialLog model
   */
  interface MaterialLogFieldRefs {
    readonly id: FieldRef<"MaterialLog", 'Int'>
    readonly materialId: FieldRef<"MaterialLog", 'Int'>
    readonly type: FieldRef<"MaterialLog", 'String'>
    readonly quantity: FieldRef<"MaterialLog", 'Float'>
    readonly balanceAfter: FieldRef<"MaterialLog", 'Float'>
    readonly reason: FieldRef<"MaterialLog", 'String'>
    readonly createdAt: FieldRef<"MaterialLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaterialLog findUnique
   */
  export type MaterialLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialLog
     */
    select?: MaterialLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialLog
     */
    omit?: MaterialLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialLogInclude<ExtArgs> | null
    /**
     * Filter, which MaterialLog to fetch.
     */
    where: MaterialLogWhereUniqueInput
  }

  /**
   * MaterialLog findUniqueOrThrow
   */
  export type MaterialLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialLog
     */
    select?: MaterialLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialLog
     */
    omit?: MaterialLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialLogInclude<ExtArgs> | null
    /**
     * Filter, which MaterialLog to fetch.
     */
    where: MaterialLogWhereUniqueInput
  }

  /**
   * MaterialLog findFirst
   */
  export type MaterialLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialLog
     */
    select?: MaterialLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialLog
     */
    omit?: MaterialLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialLogInclude<ExtArgs> | null
    /**
     * Filter, which MaterialLog to fetch.
     */
    where?: MaterialLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialLogs to fetch.
     */
    orderBy?: MaterialLogOrderByWithRelationInput | MaterialLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialLogs.
     */
    cursor?: MaterialLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialLogs.
     */
    distinct?: MaterialLogScalarFieldEnum | MaterialLogScalarFieldEnum[]
  }

  /**
   * MaterialLog findFirstOrThrow
   */
  export type MaterialLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialLog
     */
    select?: MaterialLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialLog
     */
    omit?: MaterialLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialLogInclude<ExtArgs> | null
    /**
     * Filter, which MaterialLog to fetch.
     */
    where?: MaterialLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialLogs to fetch.
     */
    orderBy?: MaterialLogOrderByWithRelationInput | MaterialLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialLogs.
     */
    cursor?: MaterialLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialLogs.
     */
    distinct?: MaterialLogScalarFieldEnum | MaterialLogScalarFieldEnum[]
  }

  /**
   * MaterialLog findMany
   */
  export type MaterialLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialLog
     */
    select?: MaterialLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialLog
     */
    omit?: MaterialLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialLogInclude<ExtArgs> | null
    /**
     * Filter, which MaterialLogs to fetch.
     */
    where?: MaterialLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialLogs to fetch.
     */
    orderBy?: MaterialLogOrderByWithRelationInput | MaterialLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaterialLogs.
     */
    cursor?: MaterialLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialLogs.
     */
    skip?: number
    distinct?: MaterialLogScalarFieldEnum | MaterialLogScalarFieldEnum[]
  }

  /**
   * MaterialLog create
   */
  export type MaterialLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialLog
     */
    select?: MaterialLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialLog
     */
    omit?: MaterialLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MaterialLog.
     */
    data: XOR<MaterialLogCreateInput, MaterialLogUncheckedCreateInput>
  }

  /**
   * MaterialLog createMany
   */
  export type MaterialLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaterialLogs.
     */
    data: MaterialLogCreateManyInput | MaterialLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaterialLog createManyAndReturn
   */
  export type MaterialLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialLog
     */
    select?: MaterialLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialLog
     */
    omit?: MaterialLogOmit<ExtArgs> | null
    /**
     * The data used to create many MaterialLogs.
     */
    data: MaterialLogCreateManyInput | MaterialLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaterialLog update
   */
  export type MaterialLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialLog
     */
    select?: MaterialLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialLog
     */
    omit?: MaterialLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MaterialLog.
     */
    data: XOR<MaterialLogUpdateInput, MaterialLogUncheckedUpdateInput>
    /**
     * Choose, which MaterialLog to update.
     */
    where: MaterialLogWhereUniqueInput
  }

  /**
   * MaterialLog updateMany
   */
  export type MaterialLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaterialLogs.
     */
    data: XOR<MaterialLogUpdateManyMutationInput, MaterialLogUncheckedUpdateManyInput>
    /**
     * Filter which MaterialLogs to update
     */
    where?: MaterialLogWhereInput
    /**
     * Limit how many MaterialLogs to update.
     */
    limit?: number
  }

  /**
   * MaterialLog updateManyAndReturn
   */
  export type MaterialLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialLog
     */
    select?: MaterialLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialLog
     */
    omit?: MaterialLogOmit<ExtArgs> | null
    /**
     * The data used to update MaterialLogs.
     */
    data: XOR<MaterialLogUpdateManyMutationInput, MaterialLogUncheckedUpdateManyInput>
    /**
     * Filter which MaterialLogs to update
     */
    where?: MaterialLogWhereInput
    /**
     * Limit how many MaterialLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaterialLog upsert
   */
  export type MaterialLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialLog
     */
    select?: MaterialLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialLog
     */
    omit?: MaterialLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MaterialLog to update in case it exists.
     */
    where: MaterialLogWhereUniqueInput
    /**
     * In case the MaterialLog found by the `where` argument doesn't exist, create a new MaterialLog with this data.
     */
    create: XOR<MaterialLogCreateInput, MaterialLogUncheckedCreateInput>
    /**
     * In case the MaterialLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialLogUpdateInput, MaterialLogUncheckedUpdateInput>
  }

  /**
   * MaterialLog delete
   */
  export type MaterialLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialLog
     */
    select?: MaterialLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialLog
     */
    omit?: MaterialLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialLogInclude<ExtArgs> | null
    /**
     * Filter which MaterialLog to delete.
     */
    where: MaterialLogWhereUniqueInput
  }

  /**
   * MaterialLog deleteMany
   */
  export type MaterialLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialLogs to delete
     */
    where?: MaterialLogWhereInput
    /**
     * Limit how many MaterialLogs to delete.
     */
    limit?: number
  }

  /**
   * MaterialLog without action
   */
  export type MaterialLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialLog
     */
    select?: MaterialLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialLog
     */
    omit?: MaterialLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialLogInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    pin: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    pin: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    pin: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    pin?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    pin?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    pin?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    pin: string
    role: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pin?: boolean
    role?: boolean
    createdAt?: boolean
    shifts?: boolean | User$shiftsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pin?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pin?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    pin?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "pin" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shifts?: boolean | User$shiftsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      shifts: Prisma.$ShiftPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      pin: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shifts<T extends User$shiftsArgs<ExtArgs> = {}>(args?: Subset<T, User$shiftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly pin: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.shifts
   */
  export type User$shiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    where?: ShiftWhereInput
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    cursor?: ShiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MaterialPurchase
   */

  export type AggregateMaterialPurchase = {
    _count: MaterialPurchaseCountAggregateOutputType | null
    _avg: MaterialPurchaseAvgAggregateOutputType | null
    _sum: MaterialPurchaseSumAggregateOutputType | null
    _min: MaterialPurchaseMinAggregateOutputType | null
    _max: MaterialPurchaseMaxAggregateOutputType | null
  }

  export type MaterialPurchaseAvgAggregateOutputType = {
    id: number | null
    materialId: number | null
    quantity: number | null
    pricePerUnit: number | null
    totalCost: number | null
  }

  export type MaterialPurchaseSumAggregateOutputType = {
    id: number | null
    materialId: number | null
    quantity: number | null
    pricePerUnit: number | null
    totalCost: number | null
  }

  export type MaterialPurchaseMinAggregateOutputType = {
    id: number | null
    materialId: number | null
    quantity: number | null
    pricePerUnit: number | null
    totalCost: number | null
    supplier: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type MaterialPurchaseMaxAggregateOutputType = {
    id: number | null
    materialId: number | null
    quantity: number | null
    pricePerUnit: number | null
    totalCost: number | null
    supplier: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type MaterialPurchaseCountAggregateOutputType = {
    id: number
    materialId: number
    quantity: number
    pricePerUnit: number
    totalCost: number
    supplier: number
    date: number
    createdAt: number
    _all: number
  }


  export type MaterialPurchaseAvgAggregateInputType = {
    id?: true
    materialId?: true
    quantity?: true
    pricePerUnit?: true
    totalCost?: true
  }

  export type MaterialPurchaseSumAggregateInputType = {
    id?: true
    materialId?: true
    quantity?: true
    pricePerUnit?: true
    totalCost?: true
  }

  export type MaterialPurchaseMinAggregateInputType = {
    id?: true
    materialId?: true
    quantity?: true
    pricePerUnit?: true
    totalCost?: true
    supplier?: true
    date?: true
    createdAt?: true
  }

  export type MaterialPurchaseMaxAggregateInputType = {
    id?: true
    materialId?: true
    quantity?: true
    pricePerUnit?: true
    totalCost?: true
    supplier?: true
    date?: true
    createdAt?: true
  }

  export type MaterialPurchaseCountAggregateInputType = {
    id?: true
    materialId?: true
    quantity?: true
    pricePerUnit?: true
    totalCost?: true
    supplier?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type MaterialPurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialPurchase to aggregate.
     */
    where?: MaterialPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialPurchases to fetch.
     */
    orderBy?: MaterialPurchaseOrderByWithRelationInput | MaterialPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaterialPurchases
    **/
    _count?: true | MaterialPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialPurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialPurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialPurchaseMaxAggregateInputType
  }

  export type GetMaterialPurchaseAggregateType<T extends MaterialPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterialPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterialPurchase[P]>
      : GetScalarType<T[P], AggregateMaterialPurchase[P]>
  }




  export type MaterialPurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialPurchaseWhereInput
    orderBy?: MaterialPurchaseOrderByWithAggregationInput | MaterialPurchaseOrderByWithAggregationInput[]
    by: MaterialPurchaseScalarFieldEnum[] | MaterialPurchaseScalarFieldEnum
    having?: MaterialPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialPurchaseCountAggregateInputType | true
    _avg?: MaterialPurchaseAvgAggregateInputType
    _sum?: MaterialPurchaseSumAggregateInputType
    _min?: MaterialPurchaseMinAggregateInputType
    _max?: MaterialPurchaseMaxAggregateInputType
  }

  export type MaterialPurchaseGroupByOutputType = {
    id: number
    materialId: number
    quantity: number
    pricePerUnit: number
    totalCost: number
    supplier: string | null
    date: Date
    createdAt: Date
    _count: MaterialPurchaseCountAggregateOutputType | null
    _avg: MaterialPurchaseAvgAggregateOutputType | null
    _sum: MaterialPurchaseSumAggregateOutputType | null
    _min: MaterialPurchaseMinAggregateOutputType | null
    _max: MaterialPurchaseMaxAggregateOutputType | null
  }

  type GetMaterialPurchaseGroupByPayload<T extends MaterialPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type MaterialPurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    quantity?: boolean
    pricePerUnit?: boolean
    totalCost?: boolean
    supplier?: boolean
    date?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialPurchase"]>

  export type MaterialPurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    quantity?: boolean
    pricePerUnit?: boolean
    totalCost?: boolean
    supplier?: boolean
    date?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialPurchase"]>

  export type MaterialPurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    quantity?: boolean
    pricePerUnit?: boolean
    totalCost?: boolean
    supplier?: boolean
    date?: boolean
    createdAt?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialPurchase"]>

  export type MaterialPurchaseSelectScalar = {
    id?: boolean
    materialId?: boolean
    quantity?: boolean
    pricePerUnit?: boolean
    totalCost?: boolean
    supplier?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type MaterialPurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "materialId" | "quantity" | "pricePerUnit" | "totalCost" | "supplier" | "date" | "createdAt", ExtArgs["result"]["materialPurchase"]>
  export type MaterialPurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type MaterialPurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type MaterialPurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $MaterialPurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaterialPurchase"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      materialId: number
      quantity: number
      pricePerUnit: number
      totalCost: number
      supplier: string | null
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["materialPurchase"]>
    composites: {}
  }

  type MaterialPurchaseGetPayload<S extends boolean | null | undefined | MaterialPurchaseDefaultArgs> = $Result.GetResult<Prisma.$MaterialPurchasePayload, S>

  type MaterialPurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialPurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialPurchaseCountAggregateInputType | true
    }

  export interface MaterialPurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaterialPurchase'], meta: { name: 'MaterialPurchase' } }
    /**
     * Find zero or one MaterialPurchase that matches the filter.
     * @param {MaterialPurchaseFindUniqueArgs} args - Arguments to find a MaterialPurchase
     * @example
     * // Get one MaterialPurchase
     * const materialPurchase = await prisma.materialPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialPurchaseFindUniqueArgs>(args: SelectSubset<T, MaterialPurchaseFindUniqueArgs<ExtArgs>>): Prisma__MaterialPurchaseClient<$Result.GetResult<Prisma.$MaterialPurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaterialPurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialPurchaseFindUniqueOrThrowArgs} args - Arguments to find a MaterialPurchase
     * @example
     * // Get one MaterialPurchase
     * const materialPurchase = await prisma.materialPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialPurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialPurchaseClient<$Result.GetResult<Prisma.$MaterialPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaterialPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialPurchaseFindFirstArgs} args - Arguments to find a MaterialPurchase
     * @example
     * // Get one MaterialPurchase
     * const materialPurchase = await prisma.materialPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialPurchaseFindFirstArgs>(args?: SelectSubset<T, MaterialPurchaseFindFirstArgs<ExtArgs>>): Prisma__MaterialPurchaseClient<$Result.GetResult<Prisma.$MaterialPurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaterialPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialPurchaseFindFirstOrThrowArgs} args - Arguments to find a MaterialPurchase
     * @example
     * // Get one MaterialPurchase
     * const materialPurchase = await prisma.materialPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialPurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialPurchaseClient<$Result.GetResult<Prisma.$MaterialPurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaterialPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaterialPurchases
     * const materialPurchases = await prisma.materialPurchase.findMany()
     * 
     * // Get first 10 MaterialPurchases
     * const materialPurchases = await prisma.materialPurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialPurchaseWithIdOnly = await prisma.materialPurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialPurchaseFindManyArgs>(args?: SelectSubset<T, MaterialPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaterialPurchase.
     * @param {MaterialPurchaseCreateArgs} args - Arguments to create a MaterialPurchase.
     * @example
     * // Create one MaterialPurchase
     * const MaterialPurchase = await prisma.materialPurchase.create({
     *   data: {
     *     // ... data to create a MaterialPurchase
     *   }
     * })
     * 
     */
    create<T extends MaterialPurchaseCreateArgs>(args: SelectSubset<T, MaterialPurchaseCreateArgs<ExtArgs>>): Prisma__MaterialPurchaseClient<$Result.GetResult<Prisma.$MaterialPurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaterialPurchases.
     * @param {MaterialPurchaseCreateManyArgs} args - Arguments to create many MaterialPurchases.
     * @example
     * // Create many MaterialPurchases
     * const materialPurchase = await prisma.materialPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialPurchaseCreateManyArgs>(args?: SelectSubset<T, MaterialPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaterialPurchases and returns the data saved in the database.
     * @param {MaterialPurchaseCreateManyAndReturnArgs} args - Arguments to create many MaterialPurchases.
     * @example
     * // Create many MaterialPurchases
     * const materialPurchase = await prisma.materialPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaterialPurchases and only return the `id`
     * const materialPurchaseWithIdOnly = await prisma.materialPurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialPurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaterialPurchase.
     * @param {MaterialPurchaseDeleteArgs} args - Arguments to delete one MaterialPurchase.
     * @example
     * // Delete one MaterialPurchase
     * const MaterialPurchase = await prisma.materialPurchase.delete({
     *   where: {
     *     // ... filter to delete one MaterialPurchase
     *   }
     * })
     * 
     */
    delete<T extends MaterialPurchaseDeleteArgs>(args: SelectSubset<T, MaterialPurchaseDeleteArgs<ExtArgs>>): Prisma__MaterialPurchaseClient<$Result.GetResult<Prisma.$MaterialPurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaterialPurchase.
     * @param {MaterialPurchaseUpdateArgs} args - Arguments to update one MaterialPurchase.
     * @example
     * // Update one MaterialPurchase
     * const materialPurchase = await prisma.materialPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialPurchaseUpdateArgs>(args: SelectSubset<T, MaterialPurchaseUpdateArgs<ExtArgs>>): Prisma__MaterialPurchaseClient<$Result.GetResult<Prisma.$MaterialPurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaterialPurchases.
     * @param {MaterialPurchaseDeleteManyArgs} args - Arguments to filter MaterialPurchases to delete.
     * @example
     * // Delete a few MaterialPurchases
     * const { count } = await prisma.materialPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialPurchaseDeleteManyArgs>(args?: SelectSubset<T, MaterialPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaterialPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaterialPurchases
     * const materialPurchase = await prisma.materialPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialPurchaseUpdateManyArgs>(args: SelectSubset<T, MaterialPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaterialPurchases and returns the data updated in the database.
     * @param {MaterialPurchaseUpdateManyAndReturnArgs} args - Arguments to update many MaterialPurchases.
     * @example
     * // Update many MaterialPurchases
     * const materialPurchase = await prisma.materialPurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaterialPurchases and only return the `id`
     * const materialPurchaseWithIdOnly = await prisma.materialPurchase.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends MaterialPurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialPurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaterialPurchase.
     * @param {MaterialPurchaseUpsertArgs} args - Arguments to update or create a MaterialPurchase.
     * @example
     * // Update or create a MaterialPurchase
     * const materialPurchase = await prisma.materialPurchase.upsert({
     *   create: {
     *     // ... data to create a MaterialPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaterialPurchase we want to update
     *   }
     * })
     */
    upsert<T extends MaterialPurchaseUpsertArgs>(args: SelectSubset<T, MaterialPurchaseUpsertArgs<ExtArgs>>): Prisma__MaterialPurchaseClient<$Result.GetResult<Prisma.$MaterialPurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaterialPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialPurchaseCountArgs} args - Arguments to filter MaterialPurchases to count.
     * @example
     * // Count the number of MaterialPurchases
     * const count = await prisma.materialPurchase.count({
     *   where: {
     *     // ... the filter for the MaterialPurchases we want to count
     *   }
     * })
    **/
    count<T extends MaterialPurchaseCountArgs>(
      args?: Subset<T, MaterialPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaterialPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialPurchaseAggregateArgs>(args: Subset<T, MaterialPurchaseAggregateArgs>): Prisma.PrismaPromise<GetMaterialPurchaseAggregateType<T>>

    /**
     * Group by MaterialPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialPurchaseGroupByArgs} args - Group by arguments.
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
      T extends MaterialPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: MaterialPurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaterialPurchase model
   */
  readonly fields: MaterialPurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaterialPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialPurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MaterialPurchase model
   */
  interface MaterialPurchaseFieldRefs {
    readonly id: FieldRef<"MaterialPurchase", 'Int'>
    readonly materialId: FieldRef<"MaterialPurchase", 'Int'>
    readonly quantity: FieldRef<"MaterialPurchase", 'Float'>
    readonly pricePerUnit: FieldRef<"MaterialPurchase", 'Float'>
    readonly totalCost: FieldRef<"MaterialPurchase", 'Float'>
    readonly supplier: FieldRef<"MaterialPurchase", 'String'>
    readonly date: FieldRef<"MaterialPurchase", 'DateTime'>
    readonly createdAt: FieldRef<"MaterialPurchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaterialPurchase findUnique
   */
  export type MaterialPurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialPurchase
     */
    select?: MaterialPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialPurchase
     */
    omit?: MaterialPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which MaterialPurchase to fetch.
     */
    where: MaterialPurchaseWhereUniqueInput
  }

  /**
   * MaterialPurchase findUniqueOrThrow
   */
  export type MaterialPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialPurchase
     */
    select?: MaterialPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialPurchase
     */
    omit?: MaterialPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which MaterialPurchase to fetch.
     */
    where: MaterialPurchaseWhereUniqueInput
  }

  /**
   * MaterialPurchase findFirst
   */
  export type MaterialPurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialPurchase
     */
    select?: MaterialPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialPurchase
     */
    omit?: MaterialPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which MaterialPurchase to fetch.
     */
    where?: MaterialPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialPurchases to fetch.
     */
    orderBy?: MaterialPurchaseOrderByWithRelationInput | MaterialPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialPurchases.
     */
    cursor?: MaterialPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialPurchases.
     */
    distinct?: MaterialPurchaseScalarFieldEnum | MaterialPurchaseScalarFieldEnum[]
  }

  /**
   * MaterialPurchase findFirstOrThrow
   */
  export type MaterialPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialPurchase
     */
    select?: MaterialPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialPurchase
     */
    omit?: MaterialPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which MaterialPurchase to fetch.
     */
    where?: MaterialPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialPurchases to fetch.
     */
    orderBy?: MaterialPurchaseOrderByWithRelationInput | MaterialPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialPurchases.
     */
    cursor?: MaterialPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialPurchases.
     */
    distinct?: MaterialPurchaseScalarFieldEnum | MaterialPurchaseScalarFieldEnum[]
  }

  /**
   * MaterialPurchase findMany
   */
  export type MaterialPurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialPurchase
     */
    select?: MaterialPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialPurchase
     */
    omit?: MaterialPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which MaterialPurchases to fetch.
     */
    where?: MaterialPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialPurchases to fetch.
     */
    orderBy?: MaterialPurchaseOrderByWithRelationInput | MaterialPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaterialPurchases.
     */
    cursor?: MaterialPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialPurchases.
     */
    skip?: number
    distinct?: MaterialPurchaseScalarFieldEnum | MaterialPurchaseScalarFieldEnum[]
  }

  /**
   * MaterialPurchase create
   */
  export type MaterialPurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialPurchase
     */
    select?: MaterialPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialPurchase
     */
    omit?: MaterialPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a MaterialPurchase.
     */
    data: XOR<MaterialPurchaseCreateInput, MaterialPurchaseUncheckedCreateInput>
  }

  /**
   * MaterialPurchase createMany
   */
  export type MaterialPurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaterialPurchases.
     */
    data: MaterialPurchaseCreateManyInput | MaterialPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaterialPurchase createManyAndReturn
   */
  export type MaterialPurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialPurchase
     */
    select?: MaterialPurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialPurchase
     */
    omit?: MaterialPurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many MaterialPurchases.
     */
    data: MaterialPurchaseCreateManyInput | MaterialPurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialPurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaterialPurchase update
   */
  export type MaterialPurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialPurchase
     */
    select?: MaterialPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialPurchase
     */
    omit?: MaterialPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a MaterialPurchase.
     */
    data: XOR<MaterialPurchaseUpdateInput, MaterialPurchaseUncheckedUpdateInput>
    /**
     * Choose, which MaterialPurchase to update.
     */
    where: MaterialPurchaseWhereUniqueInput
  }

  /**
   * MaterialPurchase updateMany
   */
  export type MaterialPurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaterialPurchases.
     */
    data: XOR<MaterialPurchaseUpdateManyMutationInput, MaterialPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which MaterialPurchases to update
     */
    where?: MaterialPurchaseWhereInput
    /**
     * Limit how many MaterialPurchases to update.
     */
    limit?: number
  }

  /**
   * MaterialPurchase updateManyAndReturn
   */
  export type MaterialPurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialPurchase
     */
    select?: MaterialPurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialPurchase
     */
    omit?: MaterialPurchaseOmit<ExtArgs> | null
    /**
     * The data used to update MaterialPurchases.
     */
    data: XOR<MaterialPurchaseUpdateManyMutationInput, MaterialPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which MaterialPurchases to update
     */
    where?: MaterialPurchaseWhereInput
    /**
     * Limit how many MaterialPurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialPurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaterialPurchase upsert
   */
  export type MaterialPurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialPurchase
     */
    select?: MaterialPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialPurchase
     */
    omit?: MaterialPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialPurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the MaterialPurchase to update in case it exists.
     */
    where: MaterialPurchaseWhereUniqueInput
    /**
     * In case the MaterialPurchase found by the `where` argument doesn't exist, create a new MaterialPurchase with this data.
     */
    create: XOR<MaterialPurchaseCreateInput, MaterialPurchaseUncheckedCreateInput>
    /**
     * In case the MaterialPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialPurchaseUpdateInput, MaterialPurchaseUncheckedUpdateInput>
  }

  /**
   * MaterialPurchase delete
   */
  export type MaterialPurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialPurchase
     */
    select?: MaterialPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialPurchase
     */
    omit?: MaterialPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialPurchaseInclude<ExtArgs> | null
    /**
     * Filter which MaterialPurchase to delete.
     */
    where: MaterialPurchaseWhereUniqueInput
  }

  /**
   * MaterialPurchase deleteMany
   */
  export type MaterialPurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialPurchases to delete
     */
    where?: MaterialPurchaseWhereInput
    /**
     * Limit how many MaterialPurchases to delete.
     */
    limit?: number
  }

  /**
   * MaterialPurchase without action
   */
  export type MaterialPurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialPurchase
     */
    select?: MaterialPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialPurchase
     */
    omit?: MaterialPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialPurchaseInclude<ExtArgs> | null
  }


  /**
   * Model Promo
   */

  export type AggregatePromo = {
    _count: PromoCountAggregateOutputType | null
    _avg: PromoAvgAggregateOutputType | null
    _sum: PromoSumAggregateOutputType | null
    _min: PromoMinAggregateOutputType | null
    _max: PromoMaxAggregateOutputType | null
  }

  export type PromoAvgAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type PromoSumAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type PromoMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    value: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromoMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    value: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromoCountAggregateOutputType = {
    id: number
    name: number
    type: number
    value: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromoAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type PromoSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type PromoMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    value?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromoMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    value?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromoCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    value?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promo to aggregate.
     */
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     */
    orderBy?: PromoOrderByWithRelationInput | PromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promos
    **/
    _count?: true | PromoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromoMaxAggregateInputType
  }

  export type GetPromoAggregateType<T extends PromoAggregateArgs> = {
        [P in keyof T & keyof AggregatePromo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromo[P]>
      : GetScalarType<T[P], AggregatePromo[P]>
  }




  export type PromoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromoWhereInput
    orderBy?: PromoOrderByWithAggregationInput | PromoOrderByWithAggregationInput[]
    by: PromoScalarFieldEnum[] | PromoScalarFieldEnum
    having?: PromoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromoCountAggregateInputType | true
    _avg?: PromoAvgAggregateInputType
    _sum?: PromoSumAggregateInputType
    _min?: PromoMinAggregateInputType
    _max?: PromoMaxAggregateInputType
  }

  export type PromoGroupByOutputType = {
    id: number
    name: string
    type: string
    value: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PromoCountAggregateOutputType | null
    _avg: PromoAvgAggregateOutputType | null
    _sum: PromoSumAggregateOutputType | null
    _min: PromoMinAggregateOutputType | null
    _max: PromoMaxAggregateOutputType | null
  }

  type GetPromoGroupByPayload<T extends PromoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromoGroupByOutputType[P]>
            : GetScalarType<T[P], PromoGroupByOutputType[P]>
        }
      >
    >


  export type PromoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    value?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sales?: boolean | Promo$salesArgs<ExtArgs>
    _count?: boolean | PromoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promo"]>

  export type PromoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    value?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promo"]>

  export type PromoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    value?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promo"]>

  export type PromoSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    value?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "value" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["promo"]>
  export type PromoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | Promo$salesArgs<ExtArgs>
    _count?: boolean | PromoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PromoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promo"
    objects: {
      sales: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      value: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promo"]>
    composites: {}
  }

  type PromoGetPayload<S extends boolean | null | undefined | PromoDefaultArgs> = $Result.GetResult<Prisma.$PromoPayload, S>

  type PromoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromoCountAggregateInputType | true
    }

  export interface PromoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promo'], meta: { name: 'Promo' } }
    /**
     * Find zero or one Promo that matches the filter.
     * @param {PromoFindUniqueArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromoFindUniqueArgs>(args: SelectSubset<T, PromoFindUniqueArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromoFindUniqueOrThrowArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromoFindUniqueOrThrowArgs>(args: SelectSubset<T, PromoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoFindFirstArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromoFindFirstArgs>(args?: SelectSubset<T, PromoFindFirstArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoFindFirstOrThrowArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromoFindFirstOrThrowArgs>(args?: SelectSubset<T, PromoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promos
     * const promos = await prisma.promo.findMany()
     * 
     * // Get first 10 Promos
     * const promos = await prisma.promo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promoWithIdOnly = await prisma.promo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromoFindManyArgs>(args?: SelectSubset<T, PromoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promo.
     * @param {PromoCreateArgs} args - Arguments to create a Promo.
     * @example
     * // Create one Promo
     * const Promo = await prisma.promo.create({
     *   data: {
     *     // ... data to create a Promo
     *   }
     * })
     * 
     */
    create<T extends PromoCreateArgs>(args: SelectSubset<T, PromoCreateArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promos.
     * @param {PromoCreateManyArgs} args - Arguments to create many Promos.
     * @example
     * // Create many Promos
     * const promo = await prisma.promo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromoCreateManyArgs>(args?: SelectSubset<T, PromoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promos and returns the data saved in the database.
     * @param {PromoCreateManyAndReturnArgs} args - Arguments to create many Promos.
     * @example
     * // Create many Promos
     * const promo = await prisma.promo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promos and only return the `id`
     * const promoWithIdOnly = await prisma.promo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromoCreateManyAndReturnArgs>(args?: SelectSubset<T, PromoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Promo.
     * @param {PromoDeleteArgs} args - Arguments to delete one Promo.
     * @example
     * // Delete one Promo
     * const Promo = await prisma.promo.delete({
     *   where: {
     *     // ... filter to delete one Promo
     *   }
     * })
     * 
     */
    delete<T extends PromoDeleteArgs>(args: SelectSubset<T, PromoDeleteArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promo.
     * @param {PromoUpdateArgs} args - Arguments to update one Promo.
     * @example
     * // Update one Promo
     * const promo = await prisma.promo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromoUpdateArgs>(args: SelectSubset<T, PromoUpdateArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promos.
     * @param {PromoDeleteManyArgs} args - Arguments to filter Promos to delete.
     * @example
     * // Delete a few Promos
     * const { count } = await prisma.promo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromoDeleteManyArgs>(args?: SelectSubset<T, PromoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promos
     * const promo = await prisma.promo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromoUpdateManyArgs>(args: SelectSubset<T, PromoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promos and returns the data updated in the database.
     * @param {PromoUpdateManyAndReturnArgs} args - Arguments to update many Promos.
     * @example
     * // Update many Promos
     * const promo = await prisma.promo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Promos and only return the `id`
     * const promoWithIdOnly = await prisma.promo.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PromoUpdateManyAndReturnArgs>(args: SelectSubset<T, PromoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Promo.
     * @param {PromoUpsertArgs} args - Arguments to update or create a Promo.
     * @example
     * // Update or create a Promo
     * const promo = await prisma.promo.upsert({
     *   create: {
     *     // ... data to create a Promo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promo we want to update
     *   }
     * })
     */
    upsert<T extends PromoUpsertArgs>(args: SelectSubset<T, PromoUpsertArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCountArgs} args - Arguments to filter Promos to count.
     * @example
     * // Count the number of Promos
     * const count = await prisma.promo.count({
     *   where: {
     *     // ... the filter for the Promos we want to count
     *   }
     * })
    **/
    count<T extends PromoCountArgs>(
      args?: Subset<T, PromoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromoAggregateArgs>(args: Subset<T, PromoAggregateArgs>): Prisma.PrismaPromise<GetPromoAggregateType<T>>

    /**
     * Group by Promo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoGroupByArgs} args - Group by arguments.
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
      T extends PromoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromoGroupByArgs['orderBy'] }
        : { orderBy?: PromoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promo model
   */
  readonly fields: PromoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends Promo$salesArgs<ExtArgs> = {}>(args?: Subset<T, Promo$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Promo model
   */
  interface PromoFieldRefs {
    readonly id: FieldRef<"Promo", 'Int'>
    readonly name: FieldRef<"Promo", 'String'>
    readonly type: FieldRef<"Promo", 'String'>
    readonly value: FieldRef<"Promo", 'Float'>
    readonly isActive: FieldRef<"Promo", 'Boolean'>
    readonly createdAt: FieldRef<"Promo", 'DateTime'>
    readonly updatedAt: FieldRef<"Promo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promo findUnique
   */
  export type PromoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promo to fetch.
     */
    where: PromoWhereUniqueInput
  }

  /**
   * Promo findUniqueOrThrow
   */
  export type PromoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promo to fetch.
     */
    where: PromoWhereUniqueInput
  }

  /**
   * Promo findFirst
   */
  export type PromoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promo to fetch.
     */
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     */
    orderBy?: PromoOrderByWithRelationInput | PromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promos.
     */
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promos.
     */
    distinct?: PromoScalarFieldEnum | PromoScalarFieldEnum[]
  }

  /**
   * Promo findFirstOrThrow
   */
  export type PromoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promo to fetch.
     */
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     */
    orderBy?: PromoOrderByWithRelationInput | PromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promos.
     */
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promos.
     */
    distinct?: PromoScalarFieldEnum | PromoScalarFieldEnum[]
  }

  /**
   * Promo findMany
   */
  export type PromoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promos to fetch.
     */
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     */
    orderBy?: PromoOrderByWithRelationInput | PromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promos.
     */
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     */
    skip?: number
    distinct?: PromoScalarFieldEnum | PromoScalarFieldEnum[]
  }

  /**
   * Promo create
   */
  export type PromoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * The data needed to create a Promo.
     */
    data: XOR<PromoCreateInput, PromoUncheckedCreateInput>
  }

  /**
   * Promo createMany
   */
  export type PromoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promos.
     */
    data: PromoCreateManyInput | PromoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promo createManyAndReturn
   */
  export type PromoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * The data used to create many Promos.
     */
    data: PromoCreateManyInput | PromoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promo update
   */
  export type PromoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * The data needed to update a Promo.
     */
    data: XOR<PromoUpdateInput, PromoUncheckedUpdateInput>
    /**
     * Choose, which Promo to update.
     */
    where: PromoWhereUniqueInput
  }

  /**
   * Promo updateMany
   */
  export type PromoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promos.
     */
    data: XOR<PromoUpdateManyMutationInput, PromoUncheckedUpdateManyInput>
    /**
     * Filter which Promos to update
     */
    where?: PromoWhereInput
    /**
     * Limit how many Promos to update.
     */
    limit?: number
  }

  /**
   * Promo updateManyAndReturn
   */
  export type PromoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * The data used to update Promos.
     */
    data: XOR<PromoUpdateManyMutationInput, PromoUncheckedUpdateManyInput>
    /**
     * Filter which Promos to update
     */
    where?: PromoWhereInput
    /**
     * Limit how many Promos to update.
     */
    limit?: number
  }

  /**
   * Promo upsert
   */
  export type PromoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * The filter to search for the Promo to update in case it exists.
     */
    where: PromoWhereUniqueInput
    /**
     * In case the Promo found by the `where` argument doesn't exist, create a new Promo with this data.
     */
    create: XOR<PromoCreateInput, PromoUncheckedCreateInput>
    /**
     * In case the Promo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromoUpdateInput, PromoUncheckedUpdateInput>
  }

  /**
   * Promo delete
   */
  export type PromoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter which Promo to delete.
     */
    where: PromoWhereUniqueInput
  }

  /**
   * Promo deleteMany
   */
  export type PromoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promos to delete
     */
    where?: PromoWhereInput
    /**
     * Limit how many Promos to delete.
     */
    limit?: number
  }

  /**
   * Promo.sales
   */
  export type Promo$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Promo without action
   */
  export type PromoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ActivityLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    entity: string | null
    entityId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    entity: string | null
    entityId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    entity: number
    entityId: number
    description: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ActivityLogAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ActivityLogSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    description?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    description?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    description?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _avg?: ActivityLogAvgAggregateInputType
    _sum?: ActivityLogSumAggregateInputType
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: number
    userId: number | null
    action: string
    entity: string
    entityId: string | null
    description: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "entity" | "entityId" | "description" | "metadata" | "createdAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      action: string
      entity: string
      entityId: string | null
      description: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ActivityLog$userArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'Int'>
    readonly userId: FieldRef<"ActivityLog", 'Int'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly entity: FieldRef<"ActivityLog", 'String'>
    readonly entityId: FieldRef<"ActivityLog", 'String'>
    readonly description: FieldRef<"ActivityLog", 'String'>
    readonly metadata: FieldRef<"ActivityLog", 'Json'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog.user
   */
  export type ActivityLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model Raffle
   */

  export type AggregateRaffle = {
    _count: RaffleCountAggregateOutputType | null
    _avg: RaffleAvgAggregateOutputType | null
    _sum: RaffleSumAggregateOutputType | null
    _min: RaffleMinAggregateOutputType | null
    _max: RaffleMaxAggregateOutputType | null
  }

  export type RaffleAvgAggregateOutputType = {
    id: number | null
    minimumSpend: number | null
  }

  export type RaffleSumAggregateOutputType = {
    id: number | null
    minimumSpend: number | null
  }

  export type RaffleMinAggregateOutputType = {
    id: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    drawDate: Date | null
    status: string | null
    minimumSpend: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RaffleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    drawDate: Date | null
    status: string | null
    minimumSpend: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RaffleCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    drawDate: number
    status: number
    minimumSpend: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RaffleAvgAggregateInputType = {
    id?: true
    minimumSpend?: true
  }

  export type RaffleSumAggregateInputType = {
    id?: true
    minimumSpend?: true
  }

  export type RaffleMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    drawDate?: true
    status?: true
    minimumSpend?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RaffleMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    drawDate?: true
    status?: true
    minimumSpend?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RaffleCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    drawDate?: true
    status?: true
    minimumSpend?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RaffleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Raffle to aggregate.
     */
    where?: RaffleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raffles to fetch.
     */
    orderBy?: RaffleOrderByWithRelationInput | RaffleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaffleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raffles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raffles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Raffles
    **/
    _count?: true | RaffleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaffleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaffleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaffleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaffleMaxAggregateInputType
  }

  export type GetRaffleAggregateType<T extends RaffleAggregateArgs> = {
        [P in keyof T & keyof AggregateRaffle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaffle[P]>
      : GetScalarType<T[P], AggregateRaffle[P]>
  }




  export type RaffleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaffleWhereInput
    orderBy?: RaffleOrderByWithAggregationInput | RaffleOrderByWithAggregationInput[]
    by: RaffleScalarFieldEnum[] | RaffleScalarFieldEnum
    having?: RaffleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaffleCountAggregateInputType | true
    _avg?: RaffleAvgAggregateInputType
    _sum?: RaffleSumAggregateInputType
    _min?: RaffleMinAggregateInputType
    _max?: RaffleMaxAggregateInputType
  }

  export type RaffleGroupByOutputType = {
    id: number
    name: string
    startDate: Date
    endDate: Date
    drawDate: Date | null
    status: string
    minimumSpend: number
    createdAt: Date
    updatedAt: Date
    _count: RaffleCountAggregateOutputType | null
    _avg: RaffleAvgAggregateOutputType | null
    _sum: RaffleSumAggregateOutputType | null
    _min: RaffleMinAggregateOutputType | null
    _max: RaffleMaxAggregateOutputType | null
  }

  type GetRaffleGroupByPayload<T extends RaffleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaffleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaffleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaffleGroupByOutputType[P]>
            : GetScalarType<T[P], RaffleGroupByOutputType[P]>
        }
      >
    >


  export type RaffleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    drawDate?: boolean
    status?: boolean
    minimumSpend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    winners?: boolean | Raffle$winnersArgs<ExtArgs>
    _count?: boolean | RaffleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raffle"]>

  export type RaffleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    drawDate?: boolean
    status?: boolean
    minimumSpend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["raffle"]>

  export type RaffleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    drawDate?: boolean
    status?: boolean
    minimumSpend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["raffle"]>

  export type RaffleSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    drawDate?: boolean
    status?: boolean
    minimumSpend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RaffleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "drawDate" | "status" | "minimumSpend" | "createdAt" | "updatedAt", ExtArgs["result"]["raffle"]>
  export type RaffleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winners?: boolean | Raffle$winnersArgs<ExtArgs>
    _count?: boolean | RaffleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RaffleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RaffleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RafflePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Raffle"
    objects: {
      winners: Prisma.$RaffleWinnerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      startDate: Date
      endDate: Date
      drawDate: Date | null
      status: string
      minimumSpend: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["raffle"]>
    composites: {}
  }

  type RaffleGetPayload<S extends boolean | null | undefined | RaffleDefaultArgs> = $Result.GetResult<Prisma.$RafflePayload, S>

  type RaffleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaffleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaffleCountAggregateInputType | true
    }

  export interface RaffleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Raffle'], meta: { name: 'Raffle' } }
    /**
     * Find zero or one Raffle that matches the filter.
     * @param {RaffleFindUniqueArgs} args - Arguments to find a Raffle
     * @example
     * // Get one Raffle
     * const raffle = await prisma.raffle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaffleFindUniqueArgs>(args: SelectSubset<T, RaffleFindUniqueArgs<ExtArgs>>): Prisma__RaffleClient<$Result.GetResult<Prisma.$RafflePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Raffle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaffleFindUniqueOrThrowArgs} args - Arguments to find a Raffle
     * @example
     * // Get one Raffle
     * const raffle = await prisma.raffle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaffleFindUniqueOrThrowArgs>(args: SelectSubset<T, RaffleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaffleClient<$Result.GetResult<Prisma.$RafflePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raffle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleFindFirstArgs} args - Arguments to find a Raffle
     * @example
     * // Get one Raffle
     * const raffle = await prisma.raffle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaffleFindFirstArgs>(args?: SelectSubset<T, RaffleFindFirstArgs<ExtArgs>>): Prisma__RaffleClient<$Result.GetResult<Prisma.$RafflePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raffle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleFindFirstOrThrowArgs} args - Arguments to find a Raffle
     * @example
     * // Get one Raffle
     * const raffle = await prisma.raffle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaffleFindFirstOrThrowArgs>(args?: SelectSubset<T, RaffleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaffleClient<$Result.GetResult<Prisma.$RafflePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Raffles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Raffles
     * const raffles = await prisma.raffle.findMany()
     * 
     * // Get first 10 Raffles
     * const raffles = await prisma.raffle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raffleWithIdOnly = await prisma.raffle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaffleFindManyArgs>(args?: SelectSubset<T, RaffleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RafflePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Raffle.
     * @param {RaffleCreateArgs} args - Arguments to create a Raffle.
     * @example
     * // Create one Raffle
     * const Raffle = await prisma.raffle.create({
     *   data: {
     *     // ... data to create a Raffle
     *   }
     * })
     * 
     */
    create<T extends RaffleCreateArgs>(args: SelectSubset<T, RaffleCreateArgs<ExtArgs>>): Prisma__RaffleClient<$Result.GetResult<Prisma.$RafflePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Raffles.
     * @param {RaffleCreateManyArgs} args - Arguments to create many Raffles.
     * @example
     * // Create many Raffles
     * const raffle = await prisma.raffle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaffleCreateManyArgs>(args?: SelectSubset<T, RaffleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Raffles and returns the data saved in the database.
     * @param {RaffleCreateManyAndReturnArgs} args - Arguments to create many Raffles.
     * @example
     * // Create many Raffles
     * const raffle = await prisma.raffle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Raffles and only return the `id`
     * const raffleWithIdOnly = await prisma.raffle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaffleCreateManyAndReturnArgs>(args?: SelectSubset<T, RaffleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RafflePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Raffle.
     * @param {RaffleDeleteArgs} args - Arguments to delete one Raffle.
     * @example
     * // Delete one Raffle
     * const Raffle = await prisma.raffle.delete({
     *   where: {
     *     // ... filter to delete one Raffle
     *   }
     * })
     * 
     */
    delete<T extends RaffleDeleteArgs>(args: SelectSubset<T, RaffleDeleteArgs<ExtArgs>>): Prisma__RaffleClient<$Result.GetResult<Prisma.$RafflePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Raffle.
     * @param {RaffleUpdateArgs} args - Arguments to update one Raffle.
     * @example
     * // Update one Raffle
     * const raffle = await prisma.raffle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaffleUpdateArgs>(args: SelectSubset<T, RaffleUpdateArgs<ExtArgs>>): Prisma__RaffleClient<$Result.GetResult<Prisma.$RafflePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Raffles.
     * @param {RaffleDeleteManyArgs} args - Arguments to filter Raffles to delete.
     * @example
     * // Delete a few Raffles
     * const { count } = await prisma.raffle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaffleDeleteManyArgs>(args?: SelectSubset<T, RaffleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raffles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Raffles
     * const raffle = await prisma.raffle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaffleUpdateManyArgs>(args: SelectSubset<T, RaffleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raffles and returns the data updated in the database.
     * @param {RaffleUpdateManyAndReturnArgs} args - Arguments to update many Raffles.
     * @example
     * // Update many Raffles
     * const raffle = await prisma.raffle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Raffles and only return the `id`
     * const raffleWithIdOnly = await prisma.raffle.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends RaffleUpdateManyAndReturnArgs>(args: SelectSubset<T, RaffleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RafflePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Raffle.
     * @param {RaffleUpsertArgs} args - Arguments to update or create a Raffle.
     * @example
     * // Update or create a Raffle
     * const raffle = await prisma.raffle.upsert({
     *   create: {
     *     // ... data to create a Raffle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Raffle we want to update
     *   }
     * })
     */
    upsert<T extends RaffleUpsertArgs>(args: SelectSubset<T, RaffleUpsertArgs<ExtArgs>>): Prisma__RaffleClient<$Result.GetResult<Prisma.$RafflePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Raffles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleCountArgs} args - Arguments to filter Raffles to count.
     * @example
     * // Count the number of Raffles
     * const count = await prisma.raffle.count({
     *   where: {
     *     // ... the filter for the Raffles we want to count
     *   }
     * })
    **/
    count<T extends RaffleCountArgs>(
      args?: Subset<T, RaffleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaffleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Raffle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RaffleAggregateArgs>(args: Subset<T, RaffleAggregateArgs>): Prisma.PrismaPromise<GetRaffleAggregateType<T>>

    /**
     * Group by Raffle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleGroupByArgs} args - Group by arguments.
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
      T extends RaffleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaffleGroupByArgs['orderBy'] }
        : { orderBy?: RaffleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RaffleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaffleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Raffle model
   */
  readonly fields: RaffleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Raffle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaffleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    winners<T extends Raffle$winnersArgs<ExtArgs> = {}>(args?: Subset<T, Raffle$winnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaffleWinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Raffle model
   */
  interface RaffleFieldRefs {
    readonly id: FieldRef<"Raffle", 'Int'>
    readonly name: FieldRef<"Raffle", 'String'>
    readonly startDate: FieldRef<"Raffle", 'DateTime'>
    readonly endDate: FieldRef<"Raffle", 'DateTime'>
    readonly drawDate: FieldRef<"Raffle", 'DateTime'>
    readonly status: FieldRef<"Raffle", 'String'>
    readonly minimumSpend: FieldRef<"Raffle", 'Float'>
    readonly createdAt: FieldRef<"Raffle", 'DateTime'>
    readonly updatedAt: FieldRef<"Raffle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Raffle findUnique
   */
  export type RaffleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raffle
     */
    select?: RaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raffle
     */
    omit?: RaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleInclude<ExtArgs> | null
    /**
     * Filter, which Raffle to fetch.
     */
    where: RaffleWhereUniqueInput
  }

  /**
   * Raffle findUniqueOrThrow
   */
  export type RaffleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raffle
     */
    select?: RaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raffle
     */
    omit?: RaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleInclude<ExtArgs> | null
    /**
     * Filter, which Raffle to fetch.
     */
    where: RaffleWhereUniqueInput
  }

  /**
   * Raffle findFirst
   */
  export type RaffleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raffle
     */
    select?: RaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raffle
     */
    omit?: RaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleInclude<ExtArgs> | null
    /**
     * Filter, which Raffle to fetch.
     */
    where?: RaffleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raffles to fetch.
     */
    orderBy?: RaffleOrderByWithRelationInput | RaffleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Raffles.
     */
    cursor?: RaffleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raffles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raffles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Raffles.
     */
    distinct?: RaffleScalarFieldEnum | RaffleScalarFieldEnum[]
  }

  /**
   * Raffle findFirstOrThrow
   */
  export type RaffleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raffle
     */
    select?: RaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raffle
     */
    omit?: RaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleInclude<ExtArgs> | null
    /**
     * Filter, which Raffle to fetch.
     */
    where?: RaffleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raffles to fetch.
     */
    orderBy?: RaffleOrderByWithRelationInput | RaffleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Raffles.
     */
    cursor?: RaffleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raffles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raffles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Raffles.
     */
    distinct?: RaffleScalarFieldEnum | RaffleScalarFieldEnum[]
  }

  /**
   * Raffle findMany
   */
  export type RaffleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raffle
     */
    select?: RaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raffle
     */
    omit?: RaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleInclude<ExtArgs> | null
    /**
     * Filter, which Raffles to fetch.
     */
    where?: RaffleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raffles to fetch.
     */
    orderBy?: RaffleOrderByWithRelationInput | RaffleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Raffles.
     */
    cursor?: RaffleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raffles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raffles.
     */
    skip?: number
    distinct?: RaffleScalarFieldEnum | RaffleScalarFieldEnum[]
  }

  /**
   * Raffle create
   */
  export type RaffleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raffle
     */
    select?: RaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raffle
     */
    omit?: RaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleInclude<ExtArgs> | null
    /**
     * The data needed to create a Raffle.
     */
    data: XOR<RaffleCreateInput, RaffleUncheckedCreateInput>
  }

  /**
   * Raffle createMany
   */
  export type RaffleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Raffles.
     */
    data: RaffleCreateManyInput | RaffleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Raffle createManyAndReturn
   */
  export type RaffleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raffle
     */
    select?: RaffleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Raffle
     */
    omit?: RaffleOmit<ExtArgs> | null
    /**
     * The data used to create many Raffles.
     */
    data: RaffleCreateManyInput | RaffleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Raffle update
   */
  export type RaffleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raffle
     */
    select?: RaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raffle
     */
    omit?: RaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleInclude<ExtArgs> | null
    /**
     * The data needed to update a Raffle.
     */
    data: XOR<RaffleUpdateInput, RaffleUncheckedUpdateInput>
    /**
     * Choose, which Raffle to update.
     */
    where: RaffleWhereUniqueInput
  }

  /**
   * Raffle updateMany
   */
  export type RaffleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Raffles.
     */
    data: XOR<RaffleUpdateManyMutationInput, RaffleUncheckedUpdateManyInput>
    /**
     * Filter which Raffles to update
     */
    where?: RaffleWhereInput
    /**
     * Limit how many Raffles to update.
     */
    limit?: number
  }

  /**
   * Raffle updateManyAndReturn
   */
  export type RaffleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raffle
     */
    select?: RaffleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Raffle
     */
    omit?: RaffleOmit<ExtArgs> | null
    /**
     * The data used to update Raffles.
     */
    data: XOR<RaffleUpdateManyMutationInput, RaffleUncheckedUpdateManyInput>
    /**
     * Filter which Raffles to update
     */
    where?: RaffleWhereInput
    /**
     * Limit how many Raffles to update.
     */
    limit?: number
  }

  /**
   * Raffle upsert
   */
  export type RaffleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raffle
     */
    select?: RaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raffle
     */
    omit?: RaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleInclude<ExtArgs> | null
    /**
     * The filter to search for the Raffle to update in case it exists.
     */
    where: RaffleWhereUniqueInput
    /**
     * In case the Raffle found by the `where` argument doesn't exist, create a new Raffle with this data.
     */
    create: XOR<RaffleCreateInput, RaffleUncheckedCreateInput>
    /**
     * In case the Raffle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaffleUpdateInput, RaffleUncheckedUpdateInput>
  }

  /**
   * Raffle delete
   */
  export type RaffleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raffle
     */
    select?: RaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raffle
     */
    omit?: RaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleInclude<ExtArgs> | null
    /**
     * Filter which Raffle to delete.
     */
    where: RaffleWhereUniqueInput
  }

  /**
   * Raffle deleteMany
   */
  export type RaffleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Raffles to delete
     */
    where?: RaffleWhereInput
    /**
     * Limit how many Raffles to delete.
     */
    limit?: number
  }

  /**
   * Raffle.winners
   */
  export type Raffle$winnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleWinner
     */
    select?: RaffleWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleWinner
     */
    omit?: RaffleWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleWinnerInclude<ExtArgs> | null
    where?: RaffleWinnerWhereInput
    orderBy?: RaffleWinnerOrderByWithRelationInput | RaffleWinnerOrderByWithRelationInput[]
    cursor?: RaffleWinnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaffleWinnerScalarFieldEnum | RaffleWinnerScalarFieldEnum[]
  }

  /**
   * Raffle without action
   */
  export type RaffleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raffle
     */
    select?: RaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raffle
     */
    omit?: RaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleInclude<ExtArgs> | null
  }


  /**
   * Model RaffleWinner
   */

  export type AggregateRaffleWinner = {
    _count: RaffleWinnerCountAggregateOutputType | null
    _avg: RaffleWinnerAvgAggregateOutputType | null
    _sum: RaffleWinnerSumAggregateOutputType | null
    _min: RaffleWinnerMinAggregateOutputType | null
    _max: RaffleWinnerMaxAggregateOutputType | null
  }

  export type RaffleWinnerAvgAggregateOutputType = {
    id: number | null
    raffleId: number | null
  }

  export type RaffleWinnerSumAggregateOutputType = {
    id: number | null
    raffleId: number | null
  }

  export type RaffleWinnerMinAggregateOutputType = {
    id: number | null
    raffleId: number | null
    transactionId: string | null
    customerName: string | null
    phone: string | null
    prize: string | null
    drawnAt: Date | null
  }

  export type RaffleWinnerMaxAggregateOutputType = {
    id: number | null
    raffleId: number | null
    transactionId: string | null
    customerName: string | null
    phone: string | null
    prize: string | null
    drawnAt: Date | null
  }

  export type RaffleWinnerCountAggregateOutputType = {
    id: number
    raffleId: number
    transactionId: number
    customerName: number
    phone: number
    prize: number
    drawnAt: number
    _all: number
  }


  export type RaffleWinnerAvgAggregateInputType = {
    id?: true
    raffleId?: true
  }

  export type RaffleWinnerSumAggregateInputType = {
    id?: true
    raffleId?: true
  }

  export type RaffleWinnerMinAggregateInputType = {
    id?: true
    raffleId?: true
    transactionId?: true
    customerName?: true
    phone?: true
    prize?: true
    drawnAt?: true
  }

  export type RaffleWinnerMaxAggregateInputType = {
    id?: true
    raffleId?: true
    transactionId?: true
    customerName?: true
    phone?: true
    prize?: true
    drawnAt?: true
  }

  export type RaffleWinnerCountAggregateInputType = {
    id?: true
    raffleId?: true
    transactionId?: true
    customerName?: true
    phone?: true
    prize?: true
    drawnAt?: true
    _all?: true
  }

  export type RaffleWinnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaffleWinner to aggregate.
     */
    where?: RaffleWinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaffleWinners to fetch.
     */
    orderBy?: RaffleWinnerOrderByWithRelationInput | RaffleWinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaffleWinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaffleWinners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaffleWinners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaffleWinners
    **/
    _count?: true | RaffleWinnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaffleWinnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaffleWinnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaffleWinnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaffleWinnerMaxAggregateInputType
  }

  export type GetRaffleWinnerAggregateType<T extends RaffleWinnerAggregateArgs> = {
        [P in keyof T & keyof AggregateRaffleWinner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaffleWinner[P]>
      : GetScalarType<T[P], AggregateRaffleWinner[P]>
  }




  export type RaffleWinnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaffleWinnerWhereInput
    orderBy?: RaffleWinnerOrderByWithAggregationInput | RaffleWinnerOrderByWithAggregationInput[]
    by: RaffleWinnerScalarFieldEnum[] | RaffleWinnerScalarFieldEnum
    having?: RaffleWinnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaffleWinnerCountAggregateInputType | true
    _avg?: RaffleWinnerAvgAggregateInputType
    _sum?: RaffleWinnerSumAggregateInputType
    _min?: RaffleWinnerMinAggregateInputType
    _max?: RaffleWinnerMaxAggregateInputType
  }

  export type RaffleWinnerGroupByOutputType = {
    id: number
    raffleId: number
    transactionId: string
    customerName: string | null
    phone: string | null
    prize: string | null
    drawnAt: Date
    _count: RaffleWinnerCountAggregateOutputType | null
    _avg: RaffleWinnerAvgAggregateOutputType | null
    _sum: RaffleWinnerSumAggregateOutputType | null
    _min: RaffleWinnerMinAggregateOutputType | null
    _max: RaffleWinnerMaxAggregateOutputType | null
  }

  type GetRaffleWinnerGroupByPayload<T extends RaffleWinnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaffleWinnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaffleWinnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaffleWinnerGroupByOutputType[P]>
            : GetScalarType<T[P], RaffleWinnerGroupByOutputType[P]>
        }
      >
    >


  export type RaffleWinnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raffleId?: boolean
    transactionId?: boolean
    customerName?: boolean
    phone?: boolean
    prize?: boolean
    drawnAt?: boolean
    raffle?: boolean | RaffleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raffleWinner"]>

  export type RaffleWinnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raffleId?: boolean
    transactionId?: boolean
    customerName?: boolean
    phone?: boolean
    prize?: boolean
    drawnAt?: boolean
    raffle?: boolean | RaffleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raffleWinner"]>

  export type RaffleWinnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raffleId?: boolean
    transactionId?: boolean
    customerName?: boolean
    phone?: boolean
    prize?: boolean
    drawnAt?: boolean
    raffle?: boolean | RaffleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raffleWinner"]>

  export type RaffleWinnerSelectScalar = {
    id?: boolean
    raffleId?: boolean
    transactionId?: boolean
    customerName?: boolean
    phone?: boolean
    prize?: boolean
    drawnAt?: boolean
  }

  export type RaffleWinnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "raffleId" | "transactionId" | "customerName" | "phone" | "prize" | "drawnAt", ExtArgs["result"]["raffleWinner"]>
  export type RaffleWinnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    raffle?: boolean | RaffleDefaultArgs<ExtArgs>
  }
  export type RaffleWinnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    raffle?: boolean | RaffleDefaultArgs<ExtArgs>
  }
  export type RaffleWinnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    raffle?: boolean | RaffleDefaultArgs<ExtArgs>
  }

  export type $RaffleWinnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaffleWinner"
    objects: {
      raffle: Prisma.$RafflePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      raffleId: number
      transactionId: string
      customerName: string | null
      phone: string | null
      prize: string | null
      drawnAt: Date
    }, ExtArgs["result"]["raffleWinner"]>
    composites: {}
  }

  type RaffleWinnerGetPayload<S extends boolean | null | undefined | RaffleWinnerDefaultArgs> = $Result.GetResult<Prisma.$RaffleWinnerPayload, S>

  type RaffleWinnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaffleWinnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaffleWinnerCountAggregateInputType | true
    }

  export interface RaffleWinnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaffleWinner'], meta: { name: 'RaffleWinner' } }
    /**
     * Find zero or one RaffleWinner that matches the filter.
     * @param {RaffleWinnerFindUniqueArgs} args - Arguments to find a RaffleWinner
     * @example
     * // Get one RaffleWinner
     * const raffleWinner = await prisma.raffleWinner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaffleWinnerFindUniqueArgs>(args: SelectSubset<T, RaffleWinnerFindUniqueArgs<ExtArgs>>): Prisma__RaffleWinnerClient<$Result.GetResult<Prisma.$RaffleWinnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RaffleWinner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaffleWinnerFindUniqueOrThrowArgs} args - Arguments to find a RaffleWinner
     * @example
     * // Get one RaffleWinner
     * const raffleWinner = await prisma.raffleWinner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaffleWinnerFindUniqueOrThrowArgs>(args: SelectSubset<T, RaffleWinnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaffleWinnerClient<$Result.GetResult<Prisma.$RaffleWinnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaffleWinner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleWinnerFindFirstArgs} args - Arguments to find a RaffleWinner
     * @example
     * // Get one RaffleWinner
     * const raffleWinner = await prisma.raffleWinner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaffleWinnerFindFirstArgs>(args?: SelectSubset<T, RaffleWinnerFindFirstArgs<ExtArgs>>): Prisma__RaffleWinnerClient<$Result.GetResult<Prisma.$RaffleWinnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaffleWinner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleWinnerFindFirstOrThrowArgs} args - Arguments to find a RaffleWinner
     * @example
     * // Get one RaffleWinner
     * const raffleWinner = await prisma.raffleWinner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaffleWinnerFindFirstOrThrowArgs>(args?: SelectSubset<T, RaffleWinnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaffleWinnerClient<$Result.GetResult<Prisma.$RaffleWinnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RaffleWinners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleWinnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaffleWinners
     * const raffleWinners = await prisma.raffleWinner.findMany()
     * 
     * // Get first 10 RaffleWinners
     * const raffleWinners = await prisma.raffleWinner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raffleWinnerWithIdOnly = await prisma.raffleWinner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaffleWinnerFindManyArgs>(args?: SelectSubset<T, RaffleWinnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaffleWinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RaffleWinner.
     * @param {RaffleWinnerCreateArgs} args - Arguments to create a RaffleWinner.
     * @example
     * // Create one RaffleWinner
     * const RaffleWinner = await prisma.raffleWinner.create({
     *   data: {
     *     // ... data to create a RaffleWinner
     *   }
     * })
     * 
     */
    create<T extends RaffleWinnerCreateArgs>(args: SelectSubset<T, RaffleWinnerCreateArgs<ExtArgs>>): Prisma__RaffleWinnerClient<$Result.GetResult<Prisma.$RaffleWinnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RaffleWinners.
     * @param {RaffleWinnerCreateManyArgs} args - Arguments to create many RaffleWinners.
     * @example
     * // Create many RaffleWinners
     * const raffleWinner = await prisma.raffleWinner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaffleWinnerCreateManyArgs>(args?: SelectSubset<T, RaffleWinnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaffleWinners and returns the data saved in the database.
     * @param {RaffleWinnerCreateManyAndReturnArgs} args - Arguments to create many RaffleWinners.
     * @example
     * // Create many RaffleWinners
     * const raffleWinner = await prisma.raffleWinner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaffleWinners and only return the `id`
     * const raffleWinnerWithIdOnly = await prisma.raffleWinner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaffleWinnerCreateManyAndReturnArgs>(args?: SelectSubset<T, RaffleWinnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaffleWinnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RaffleWinner.
     * @param {RaffleWinnerDeleteArgs} args - Arguments to delete one RaffleWinner.
     * @example
     * // Delete one RaffleWinner
     * const RaffleWinner = await prisma.raffleWinner.delete({
     *   where: {
     *     // ... filter to delete one RaffleWinner
     *   }
     * })
     * 
     */
    delete<T extends RaffleWinnerDeleteArgs>(args: SelectSubset<T, RaffleWinnerDeleteArgs<ExtArgs>>): Prisma__RaffleWinnerClient<$Result.GetResult<Prisma.$RaffleWinnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RaffleWinner.
     * @param {RaffleWinnerUpdateArgs} args - Arguments to update one RaffleWinner.
     * @example
     * // Update one RaffleWinner
     * const raffleWinner = await prisma.raffleWinner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaffleWinnerUpdateArgs>(args: SelectSubset<T, RaffleWinnerUpdateArgs<ExtArgs>>): Prisma__RaffleWinnerClient<$Result.GetResult<Prisma.$RaffleWinnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RaffleWinners.
     * @param {RaffleWinnerDeleteManyArgs} args - Arguments to filter RaffleWinners to delete.
     * @example
     * // Delete a few RaffleWinners
     * const { count } = await prisma.raffleWinner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaffleWinnerDeleteManyArgs>(args?: SelectSubset<T, RaffleWinnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaffleWinners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleWinnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaffleWinners
     * const raffleWinner = await prisma.raffleWinner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaffleWinnerUpdateManyArgs>(args: SelectSubset<T, RaffleWinnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaffleWinners and returns the data updated in the database.
     * @param {RaffleWinnerUpdateManyAndReturnArgs} args - Arguments to update many RaffleWinners.
     * @example
     * // Update many RaffleWinners
     * const raffleWinner = await prisma.raffleWinner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RaffleWinners and only return the `id`
     * const raffleWinnerWithIdOnly = await prisma.raffleWinner.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends RaffleWinnerUpdateManyAndReturnArgs>(args: SelectSubset<T, RaffleWinnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaffleWinnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RaffleWinner.
     * @param {RaffleWinnerUpsertArgs} args - Arguments to update or create a RaffleWinner.
     * @example
     * // Update or create a RaffleWinner
     * const raffleWinner = await prisma.raffleWinner.upsert({
     *   create: {
     *     // ... data to create a RaffleWinner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaffleWinner we want to update
     *   }
     * })
     */
    upsert<T extends RaffleWinnerUpsertArgs>(args: SelectSubset<T, RaffleWinnerUpsertArgs<ExtArgs>>): Prisma__RaffleWinnerClient<$Result.GetResult<Prisma.$RaffleWinnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RaffleWinners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleWinnerCountArgs} args - Arguments to filter RaffleWinners to count.
     * @example
     * // Count the number of RaffleWinners
     * const count = await prisma.raffleWinner.count({
     *   where: {
     *     // ... the filter for the RaffleWinners we want to count
     *   }
     * })
    **/
    count<T extends RaffleWinnerCountArgs>(
      args?: Subset<T, RaffleWinnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaffleWinnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaffleWinner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleWinnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RaffleWinnerAggregateArgs>(args: Subset<T, RaffleWinnerAggregateArgs>): Prisma.PrismaPromise<GetRaffleWinnerAggregateType<T>>

    /**
     * Group by RaffleWinner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleWinnerGroupByArgs} args - Group by arguments.
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
      T extends RaffleWinnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaffleWinnerGroupByArgs['orderBy'] }
        : { orderBy?: RaffleWinnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RaffleWinnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaffleWinnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaffleWinner model
   */
  readonly fields: RaffleWinnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaffleWinner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaffleWinnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    raffle<T extends RaffleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaffleDefaultArgs<ExtArgs>>): Prisma__RaffleClient<$Result.GetResult<Prisma.$RafflePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RaffleWinner model
   */
  interface RaffleWinnerFieldRefs {
    readonly id: FieldRef<"RaffleWinner", 'Int'>
    readonly raffleId: FieldRef<"RaffleWinner", 'Int'>
    readonly transactionId: FieldRef<"RaffleWinner", 'String'>
    readonly customerName: FieldRef<"RaffleWinner", 'String'>
    readonly phone: FieldRef<"RaffleWinner", 'String'>
    readonly prize: FieldRef<"RaffleWinner", 'String'>
    readonly drawnAt: FieldRef<"RaffleWinner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RaffleWinner findUnique
   */
  export type RaffleWinnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleWinner
     */
    select?: RaffleWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleWinner
     */
    omit?: RaffleWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleWinnerInclude<ExtArgs> | null
    /**
     * Filter, which RaffleWinner to fetch.
     */
    where: RaffleWinnerWhereUniqueInput
  }

  /**
   * RaffleWinner findUniqueOrThrow
   */
  export type RaffleWinnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleWinner
     */
    select?: RaffleWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleWinner
     */
    omit?: RaffleWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleWinnerInclude<ExtArgs> | null
    /**
     * Filter, which RaffleWinner to fetch.
     */
    where: RaffleWinnerWhereUniqueInput
  }

  /**
   * RaffleWinner findFirst
   */
  export type RaffleWinnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleWinner
     */
    select?: RaffleWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleWinner
     */
    omit?: RaffleWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleWinnerInclude<ExtArgs> | null
    /**
     * Filter, which RaffleWinner to fetch.
     */
    where?: RaffleWinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaffleWinners to fetch.
     */
    orderBy?: RaffleWinnerOrderByWithRelationInput | RaffleWinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaffleWinners.
     */
    cursor?: RaffleWinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaffleWinners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaffleWinners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaffleWinners.
     */
    distinct?: RaffleWinnerScalarFieldEnum | RaffleWinnerScalarFieldEnum[]
  }

  /**
   * RaffleWinner findFirstOrThrow
   */
  export type RaffleWinnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleWinner
     */
    select?: RaffleWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleWinner
     */
    omit?: RaffleWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleWinnerInclude<ExtArgs> | null
    /**
     * Filter, which RaffleWinner to fetch.
     */
    where?: RaffleWinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaffleWinners to fetch.
     */
    orderBy?: RaffleWinnerOrderByWithRelationInput | RaffleWinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaffleWinners.
     */
    cursor?: RaffleWinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaffleWinners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaffleWinners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaffleWinners.
     */
    distinct?: RaffleWinnerScalarFieldEnum | RaffleWinnerScalarFieldEnum[]
  }

  /**
   * RaffleWinner findMany
   */
  export type RaffleWinnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleWinner
     */
    select?: RaffleWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleWinner
     */
    omit?: RaffleWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleWinnerInclude<ExtArgs> | null
    /**
     * Filter, which RaffleWinners to fetch.
     */
    where?: RaffleWinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaffleWinners to fetch.
     */
    orderBy?: RaffleWinnerOrderByWithRelationInput | RaffleWinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaffleWinners.
     */
    cursor?: RaffleWinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaffleWinners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaffleWinners.
     */
    skip?: number
    distinct?: RaffleWinnerScalarFieldEnum | RaffleWinnerScalarFieldEnum[]
  }

  /**
   * RaffleWinner create
   */
  export type RaffleWinnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleWinner
     */
    select?: RaffleWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleWinner
     */
    omit?: RaffleWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleWinnerInclude<ExtArgs> | null
    /**
     * The data needed to create a RaffleWinner.
     */
    data: XOR<RaffleWinnerCreateInput, RaffleWinnerUncheckedCreateInput>
  }

  /**
   * RaffleWinner createMany
   */
  export type RaffleWinnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaffleWinners.
     */
    data: RaffleWinnerCreateManyInput | RaffleWinnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RaffleWinner createManyAndReturn
   */
  export type RaffleWinnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleWinner
     */
    select?: RaffleWinnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleWinner
     */
    omit?: RaffleWinnerOmit<ExtArgs> | null
    /**
     * The data used to create many RaffleWinners.
     */
    data: RaffleWinnerCreateManyInput | RaffleWinnerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleWinnerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaffleWinner update
   */
  export type RaffleWinnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleWinner
     */
    select?: RaffleWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleWinner
     */
    omit?: RaffleWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleWinnerInclude<ExtArgs> | null
    /**
     * The data needed to update a RaffleWinner.
     */
    data: XOR<RaffleWinnerUpdateInput, RaffleWinnerUncheckedUpdateInput>
    /**
     * Choose, which RaffleWinner to update.
     */
    where: RaffleWinnerWhereUniqueInput
  }

  /**
   * RaffleWinner updateMany
   */
  export type RaffleWinnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaffleWinners.
     */
    data: XOR<RaffleWinnerUpdateManyMutationInput, RaffleWinnerUncheckedUpdateManyInput>
    /**
     * Filter which RaffleWinners to update
     */
    where?: RaffleWinnerWhereInput
    /**
     * Limit how many RaffleWinners to update.
     */
    limit?: number
  }

  /**
   * RaffleWinner updateManyAndReturn
   */
  export type RaffleWinnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleWinner
     */
    select?: RaffleWinnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleWinner
     */
    omit?: RaffleWinnerOmit<ExtArgs> | null
    /**
     * The data used to update RaffleWinners.
     */
    data: XOR<RaffleWinnerUpdateManyMutationInput, RaffleWinnerUncheckedUpdateManyInput>
    /**
     * Filter which RaffleWinners to update
     */
    where?: RaffleWinnerWhereInput
    /**
     * Limit how many RaffleWinners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleWinnerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaffleWinner upsert
   */
  export type RaffleWinnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleWinner
     */
    select?: RaffleWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleWinner
     */
    omit?: RaffleWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleWinnerInclude<ExtArgs> | null
    /**
     * The filter to search for the RaffleWinner to update in case it exists.
     */
    where: RaffleWinnerWhereUniqueInput
    /**
     * In case the RaffleWinner found by the `where` argument doesn't exist, create a new RaffleWinner with this data.
     */
    create: XOR<RaffleWinnerCreateInput, RaffleWinnerUncheckedCreateInput>
    /**
     * In case the RaffleWinner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaffleWinnerUpdateInput, RaffleWinnerUncheckedUpdateInput>
  }

  /**
   * RaffleWinner delete
   */
  export type RaffleWinnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleWinner
     */
    select?: RaffleWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleWinner
     */
    omit?: RaffleWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleWinnerInclude<ExtArgs> | null
    /**
     * Filter which RaffleWinner to delete.
     */
    where: RaffleWinnerWhereUniqueInput
  }

  /**
   * RaffleWinner deleteMany
   */
  export type RaffleWinnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaffleWinners to delete
     */
    where?: RaffleWinnerWhereInput
    /**
     * Limit how many RaffleWinners to delete.
     */
    limit?: number
  }

  /**
   * RaffleWinner without action
   */
  export type RaffleWinnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleWinner
     */
    select?: RaffleWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleWinner
     */
    omit?: RaffleWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleWinnerInclude<ExtArgs> | null
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


  export const MenuItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    price: 'price',
    isRetail: 'isRetail',
    materialId: 'materialId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    unit: 'unit',
    stock: 'stock',
    costPerUnit: 'costPerUnit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    minStock: 'minStock'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const MenuItemMaterialScalarFieldEnum: {
    id: 'id',
    menuItemId: 'menuItemId',
    materialId: 'materialId',
    quantity: 'quantity',
    createdAt: 'createdAt'
  };

  export type MenuItemMaterialScalarFieldEnum = (typeof MenuItemMaterialScalarFieldEnum)[keyof typeof MenuItemMaterialScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    date: 'date',
    menuItemId: 'menuItemId',
    qty: 'qty',
    priceSnapshot: 'priceSnapshot',
    costSnapshot: 'costSnapshot',
    total: 'total',
    paymentMethod: 'paymentMethod',
    createdAt: 'createdAt',
    shiftId: 'shiftId',
    transactionId: 'transactionId',
    discountAmount: 'discountAmount',
    promoId: 'promoId',
    variants: 'variants',
    orderId: 'orderId'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    customerName: 'customerName',
    tableNumber: 'tableNumber',
    status: 'status',
    totalAmount: 'totalAmount',
    paymentMethod: 'paymentMethod',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ShiftScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    startTime: 'startTime',
    endTime: 'endTime',
    openingCash: 'openingCash',
    closingCash: 'closingCash',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShiftScalarFieldEnum = (typeof ShiftScalarFieldEnum)[keyof typeof ShiftScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    date: 'date',
    description: 'description',
    category: 'category',
    amount: 'amount',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const MaterialLogScalarFieldEnum: {
    id: 'id',
    materialId: 'materialId',
    type: 'type',
    quantity: 'quantity',
    balanceAfter: 'balanceAfter',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type MaterialLogScalarFieldEnum = (typeof MaterialLogScalarFieldEnum)[keyof typeof MaterialLogScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    pin: 'pin',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MaterialPurchaseScalarFieldEnum: {
    id: 'id',
    materialId: 'materialId',
    quantity: 'quantity',
    pricePerUnit: 'pricePerUnit',
    totalCost: 'totalCost',
    supplier: 'supplier',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type MaterialPurchaseScalarFieldEnum = (typeof MaterialPurchaseScalarFieldEnum)[keyof typeof MaterialPurchaseScalarFieldEnum]


  export const PromoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    value: 'value',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromoScalarFieldEnum = (typeof PromoScalarFieldEnum)[keyof typeof PromoScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    description: 'description',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const RaffleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    drawDate: 'drawDate',
    status: 'status',
    minimumSpend: 'minimumSpend',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RaffleScalarFieldEnum = (typeof RaffleScalarFieldEnum)[keyof typeof RaffleScalarFieldEnum]


  export const RaffleWinnerScalarFieldEnum: {
    id: 'id',
    raffleId: 'raffleId',
    transactionId: 'transactionId',
    customerName: 'customerName',
    phone: 'phone',
    prize: 'prize',
    drawnAt: 'drawnAt'
  };

  export type RaffleWinnerScalarFieldEnum = (typeof RaffleWinnerScalarFieldEnum)[keyof typeof RaffleWinnerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type MenuItemWhereInput = {
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    id?: IntFilter<"MenuItem"> | number
    name?: StringFilter<"MenuItem"> | string
    category?: StringFilter<"MenuItem"> | string
    price?: FloatFilter<"MenuItem"> | number
    isRetail?: BoolFilter<"MenuItem"> | boolean
    materialId?: IntNullableFilter<"MenuItem"> | number | null
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    material?: XOR<MaterialNullableScalarRelationFilter, MaterialWhereInput> | null
    recipes?: MenuItemMaterialListRelationFilter
    sales?: SaleListRelationFilter
  }

  export type MenuItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    isRetail?: SortOrder
    materialId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    material?: MaterialOrderByWithRelationInput
    recipes?: MenuItemMaterialOrderByRelationAggregateInput
    sales?: SaleOrderByRelationAggregateInput
  }

  export type MenuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    category?: StringFilter<"MenuItem"> | string
    price?: FloatFilter<"MenuItem"> | number
    isRetail?: BoolFilter<"MenuItem"> | boolean
    materialId?: IntNullableFilter<"MenuItem"> | number | null
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    material?: XOR<MaterialNullableScalarRelationFilter, MaterialWhereInput> | null
    recipes?: MenuItemMaterialListRelationFilter
    sales?: SaleListRelationFilter
  }, "id" | "name">

  export type MenuItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    isRetail?: SortOrder
    materialId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuItemCountOrderByAggregateInput
    _avg?: MenuItemAvgOrderByAggregateInput
    _max?: MenuItemMaxOrderByAggregateInput
    _min?: MenuItemMinOrderByAggregateInput
    _sum?: MenuItemSumOrderByAggregateInput
  }

  export type MenuItemScalarWhereWithAggregatesInput = {
    AND?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    OR?: MenuItemScalarWhereWithAggregatesInput[]
    NOT?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MenuItem"> | number
    name?: StringWithAggregatesFilter<"MenuItem"> | string
    category?: StringWithAggregatesFilter<"MenuItem"> | string
    price?: FloatWithAggregatesFilter<"MenuItem"> | number
    isRetail?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    materialId?: IntNullableWithAggregatesFilter<"MenuItem"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: IntFilter<"Material"> | number
    name?: StringFilter<"Material"> | string
    unit?: StringFilter<"Material"> | string
    stock?: FloatFilter<"Material"> | number
    costPerUnit?: FloatFilter<"Material"> | number
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
    minStock?: FloatFilter<"Material"> | number
    logs?: MaterialLogListRelationFilter
    purchases?: MaterialPurchaseListRelationFilter
    recipes?: MenuItemMaterialListRelationFilter
    menuItems?: MenuItemListRelationFilter
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    stock?: SortOrder
    costPerUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    minStock?: SortOrder
    logs?: MaterialLogOrderByRelationAggregateInput
    purchases?: MaterialPurchaseOrderByRelationAggregateInput
    recipes?: MenuItemMaterialOrderByRelationAggregateInput
    menuItems?: MenuItemOrderByRelationAggregateInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    unit?: StringFilter<"Material"> | string
    stock?: FloatFilter<"Material"> | number
    costPerUnit?: FloatFilter<"Material"> | number
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
    minStock?: FloatFilter<"Material"> | number
    logs?: MaterialLogListRelationFilter
    purchases?: MaterialPurchaseListRelationFilter
    recipes?: MenuItemMaterialListRelationFilter
    menuItems?: MenuItemListRelationFilter
  }, "id" | "name">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    stock?: SortOrder
    costPerUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    minStock?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _avg?: MaterialAvgOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
    _sum?: MaterialSumOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Material"> | number
    name?: StringWithAggregatesFilter<"Material"> | string
    unit?: StringWithAggregatesFilter<"Material"> | string
    stock?: FloatWithAggregatesFilter<"Material"> | number
    costPerUnit?: FloatWithAggregatesFilter<"Material"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
    minStock?: FloatWithAggregatesFilter<"Material"> | number
  }

  export type MenuItemMaterialWhereInput = {
    AND?: MenuItemMaterialWhereInput | MenuItemMaterialWhereInput[]
    OR?: MenuItemMaterialWhereInput[]
    NOT?: MenuItemMaterialWhereInput | MenuItemMaterialWhereInput[]
    id?: IntFilter<"MenuItemMaterial"> | number
    menuItemId?: IntFilter<"MenuItemMaterial"> | number
    materialId?: IntFilter<"MenuItemMaterial"> | number
    quantity?: FloatFilter<"MenuItemMaterial"> | number
    createdAt?: DateTimeFilter<"MenuItemMaterial"> | Date | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
  }

  export type MenuItemMaterialOrderByWithRelationInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    material?: MaterialOrderByWithRelationInput
    menuItem?: MenuItemOrderByWithRelationInput
  }

  export type MenuItemMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MenuItemMaterialWhereInput | MenuItemMaterialWhereInput[]
    OR?: MenuItemMaterialWhereInput[]
    NOT?: MenuItemMaterialWhereInput | MenuItemMaterialWhereInput[]
    menuItemId?: IntFilter<"MenuItemMaterial"> | number
    materialId?: IntFilter<"MenuItemMaterial"> | number
    quantity?: FloatFilter<"MenuItemMaterial"> | number
    createdAt?: DateTimeFilter<"MenuItemMaterial"> | Date | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
  }, "id">

  export type MenuItemMaterialOrderByWithAggregationInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    _count?: MenuItemMaterialCountOrderByAggregateInput
    _avg?: MenuItemMaterialAvgOrderByAggregateInput
    _max?: MenuItemMaterialMaxOrderByAggregateInput
    _min?: MenuItemMaterialMinOrderByAggregateInput
    _sum?: MenuItemMaterialSumOrderByAggregateInput
  }

  export type MenuItemMaterialScalarWhereWithAggregatesInput = {
    AND?: MenuItemMaterialScalarWhereWithAggregatesInput | MenuItemMaterialScalarWhereWithAggregatesInput[]
    OR?: MenuItemMaterialScalarWhereWithAggregatesInput[]
    NOT?: MenuItemMaterialScalarWhereWithAggregatesInput | MenuItemMaterialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MenuItemMaterial"> | number
    menuItemId?: IntWithAggregatesFilter<"MenuItemMaterial"> | number
    materialId?: IntWithAggregatesFilter<"MenuItemMaterial"> | number
    quantity?: FloatWithAggregatesFilter<"MenuItemMaterial"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MenuItemMaterial"> | Date | string
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: IntFilter<"Sale"> | number
    date?: DateTimeFilter<"Sale"> | Date | string
    menuItemId?: IntFilter<"Sale"> | number
    qty?: IntFilter<"Sale"> | number
    priceSnapshot?: FloatFilter<"Sale"> | number
    costSnapshot?: FloatFilter<"Sale"> | number
    total?: FloatFilter<"Sale"> | number
    paymentMethod?: StringFilter<"Sale"> | string
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    shiftId?: IntNullableFilter<"Sale"> | number | null
    transactionId?: StringNullableFilter<"Sale"> | string | null
    discountAmount?: FloatFilter<"Sale"> | number
    promoId?: IntNullableFilter<"Sale"> | number | null
    variants?: StringNullableFilter<"Sale"> | string | null
    orderId?: IntNullableFilter<"Sale"> | number | null
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
    shift?: XOR<ShiftNullableScalarRelationFilter, ShiftWhereInput> | null
    promo?: XOR<PromoNullableScalarRelationFilter, PromoWhereInput> | null
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    menuItemId?: SortOrder
    qty?: SortOrder
    priceSnapshot?: SortOrder
    costSnapshot?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    shiftId?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    discountAmount?: SortOrder
    promoId?: SortOrderInput | SortOrder
    variants?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    menuItem?: MenuItemOrderByWithRelationInput
    shift?: ShiftOrderByWithRelationInput
    promo?: PromoOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    date?: DateTimeFilter<"Sale"> | Date | string
    menuItemId?: IntFilter<"Sale"> | number
    qty?: IntFilter<"Sale"> | number
    priceSnapshot?: FloatFilter<"Sale"> | number
    costSnapshot?: FloatFilter<"Sale"> | number
    total?: FloatFilter<"Sale"> | number
    paymentMethod?: StringFilter<"Sale"> | string
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    shiftId?: IntNullableFilter<"Sale"> | number | null
    transactionId?: StringNullableFilter<"Sale"> | string | null
    discountAmount?: FloatFilter<"Sale"> | number
    promoId?: IntNullableFilter<"Sale"> | number | null
    variants?: StringNullableFilter<"Sale"> | string | null
    orderId?: IntNullableFilter<"Sale"> | number | null
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
    shift?: XOR<ShiftNullableScalarRelationFilter, ShiftWhereInput> | null
    promo?: XOR<PromoNullableScalarRelationFilter, PromoWhereInput> | null
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }, "id">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    menuItemId?: SortOrder
    qty?: SortOrder
    priceSnapshot?: SortOrder
    costSnapshot?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    shiftId?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    discountAmount?: SortOrder
    promoId?: SortOrderInput | SortOrder
    variants?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sale"> | number
    date?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    menuItemId?: IntWithAggregatesFilter<"Sale"> | number
    qty?: IntWithAggregatesFilter<"Sale"> | number
    priceSnapshot?: FloatWithAggregatesFilter<"Sale"> | number
    costSnapshot?: FloatWithAggregatesFilter<"Sale"> | number
    total?: FloatWithAggregatesFilter<"Sale"> | number
    paymentMethod?: StringWithAggregatesFilter<"Sale"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    shiftId?: IntNullableWithAggregatesFilter<"Sale"> | number | null
    transactionId?: StringNullableWithAggregatesFilter<"Sale"> | string | null
    discountAmount?: FloatWithAggregatesFilter<"Sale"> | number
    promoId?: IntNullableWithAggregatesFilter<"Sale"> | number | null
    variants?: StringNullableWithAggregatesFilter<"Sale"> | string | null
    orderId?: IntNullableWithAggregatesFilter<"Sale"> | number | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    transactionId?: StringFilter<"Order"> | string
    customerName?: StringNullableFilter<"Order"> | string | null
    tableNumber?: StringNullableFilter<"Order"> | string | null
    status?: StringFilter<"Order"> | string
    totalAmount?: FloatFilter<"Order"> | number
    paymentMethod?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    sales?: SaleListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    customerName?: SortOrderInput | SortOrder
    tableNumber?: SortOrderInput | SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sales?: SaleOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    transactionId?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    customerName?: StringNullableFilter<"Order"> | string | null
    tableNumber?: StringNullableFilter<"Order"> | string | null
    status?: StringFilter<"Order"> | string
    totalAmount?: FloatFilter<"Order"> | number
    paymentMethod?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    sales?: SaleListRelationFilter
  }, "id" | "transactionId">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    customerName?: SortOrderInput | SortOrder
    tableNumber?: SortOrderInput | SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    transactionId?: StringWithAggregatesFilter<"Order"> | string
    customerName?: StringNullableWithAggregatesFilter<"Order"> | string | null
    tableNumber?: StringNullableWithAggregatesFilter<"Order"> | string | null
    status?: StringWithAggregatesFilter<"Order"> | string
    totalAmount?: FloatWithAggregatesFilter<"Order"> | number
    paymentMethod?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type ShiftWhereInput = {
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    id?: IntFilter<"Shift"> | number
    userId?: IntNullableFilter<"Shift"> | number | null
    startTime?: DateTimeFilter<"Shift"> | Date | string
    endTime?: DateTimeNullableFilter<"Shift"> | Date | string | null
    openingCash?: FloatFilter<"Shift"> | number
    closingCash?: FloatNullableFilter<"Shift"> | number | null
    status?: StringFilter<"Shift"> | string
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
    sales?: SaleListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ShiftOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    openingCash?: SortOrder
    closingCash?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sales?: SaleOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ShiftWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    userId?: IntNullableFilter<"Shift"> | number | null
    startTime?: DateTimeFilter<"Shift"> | Date | string
    endTime?: DateTimeNullableFilter<"Shift"> | Date | string | null
    openingCash?: FloatFilter<"Shift"> | number
    closingCash?: FloatNullableFilter<"Shift"> | number | null
    status?: StringFilter<"Shift"> | string
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
    sales?: SaleListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ShiftOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    openingCash?: SortOrder
    closingCash?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShiftCountOrderByAggregateInput
    _avg?: ShiftAvgOrderByAggregateInput
    _max?: ShiftMaxOrderByAggregateInput
    _min?: ShiftMinOrderByAggregateInput
    _sum?: ShiftSumOrderByAggregateInput
  }

  export type ShiftScalarWhereWithAggregatesInput = {
    AND?: ShiftScalarWhereWithAggregatesInput | ShiftScalarWhereWithAggregatesInput[]
    OR?: ShiftScalarWhereWithAggregatesInput[]
    NOT?: ShiftScalarWhereWithAggregatesInput | ShiftScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shift"> | number
    userId?: IntNullableWithAggregatesFilter<"Shift"> | number | null
    startTime?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"Shift"> | Date | string | null
    openingCash?: FloatWithAggregatesFilter<"Shift"> | number
    closingCash?: FloatNullableWithAggregatesFilter<"Shift"> | number | null
    status?: StringWithAggregatesFilter<"Shift"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: IntFilter<"Expense"> | number
    date?: DateTimeFilter<"Expense"> | Date | string
    description?: StringFilter<"Expense"> | string
    category?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    note?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    date?: DateTimeFilter<"Expense"> | Date | string
    description?: StringFilter<"Expense"> | string
    category?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    note?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Expense"> | number
    date?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    description?: StringWithAggregatesFilter<"Expense"> | string
    category?: StringWithAggregatesFilter<"Expense"> | string
    amount?: FloatWithAggregatesFilter<"Expense"> | number
    note?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
  }

  export type MaterialLogWhereInput = {
    AND?: MaterialLogWhereInput | MaterialLogWhereInput[]
    OR?: MaterialLogWhereInput[]
    NOT?: MaterialLogWhereInput | MaterialLogWhereInput[]
    id?: IntFilter<"MaterialLog"> | number
    materialId?: IntFilter<"MaterialLog"> | number
    type?: StringFilter<"MaterialLog"> | string
    quantity?: FloatFilter<"MaterialLog"> | number
    balanceAfter?: FloatFilter<"MaterialLog"> | number
    reason?: StringNullableFilter<"MaterialLog"> | string | null
    createdAt?: DateTimeFilter<"MaterialLog"> | Date | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }

  export type MaterialLogOrderByWithRelationInput = {
    id?: SortOrder
    materialId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    balanceAfter?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    material?: MaterialOrderByWithRelationInput
  }

  export type MaterialLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaterialLogWhereInput | MaterialLogWhereInput[]
    OR?: MaterialLogWhereInput[]
    NOT?: MaterialLogWhereInput | MaterialLogWhereInput[]
    materialId?: IntFilter<"MaterialLog"> | number
    type?: StringFilter<"MaterialLog"> | string
    quantity?: FloatFilter<"MaterialLog"> | number
    balanceAfter?: FloatFilter<"MaterialLog"> | number
    reason?: StringNullableFilter<"MaterialLog"> | string | null
    createdAt?: DateTimeFilter<"MaterialLog"> | Date | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }, "id">

  export type MaterialLogOrderByWithAggregationInput = {
    id?: SortOrder
    materialId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    balanceAfter?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MaterialLogCountOrderByAggregateInput
    _avg?: MaterialLogAvgOrderByAggregateInput
    _max?: MaterialLogMaxOrderByAggregateInput
    _min?: MaterialLogMinOrderByAggregateInput
    _sum?: MaterialLogSumOrderByAggregateInput
  }

  export type MaterialLogScalarWhereWithAggregatesInput = {
    AND?: MaterialLogScalarWhereWithAggregatesInput | MaterialLogScalarWhereWithAggregatesInput[]
    OR?: MaterialLogScalarWhereWithAggregatesInput[]
    NOT?: MaterialLogScalarWhereWithAggregatesInput | MaterialLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MaterialLog"> | number
    materialId?: IntWithAggregatesFilter<"MaterialLog"> | number
    type?: StringWithAggregatesFilter<"MaterialLog"> | string
    quantity?: FloatWithAggregatesFilter<"MaterialLog"> | number
    balanceAfter?: FloatWithAggregatesFilter<"MaterialLog"> | number
    reason?: StringNullableWithAggregatesFilter<"MaterialLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MaterialLog"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    pin?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    shifts?: ShiftListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    pin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    shifts?: ShiftOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    pin?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    shifts?: ShiftListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    pin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    pin?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MaterialPurchaseWhereInput = {
    AND?: MaterialPurchaseWhereInput | MaterialPurchaseWhereInput[]
    OR?: MaterialPurchaseWhereInput[]
    NOT?: MaterialPurchaseWhereInput | MaterialPurchaseWhereInput[]
    id?: IntFilter<"MaterialPurchase"> | number
    materialId?: IntFilter<"MaterialPurchase"> | number
    quantity?: FloatFilter<"MaterialPurchase"> | number
    pricePerUnit?: FloatFilter<"MaterialPurchase"> | number
    totalCost?: FloatFilter<"MaterialPurchase"> | number
    supplier?: StringNullableFilter<"MaterialPurchase"> | string | null
    date?: DateTimeFilter<"MaterialPurchase"> | Date | string
    createdAt?: DateTimeFilter<"MaterialPurchase"> | Date | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }

  export type MaterialPurchaseOrderByWithRelationInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    totalCost?: SortOrder
    supplier?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    material?: MaterialOrderByWithRelationInput
  }

  export type MaterialPurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaterialPurchaseWhereInput | MaterialPurchaseWhereInput[]
    OR?: MaterialPurchaseWhereInput[]
    NOT?: MaterialPurchaseWhereInput | MaterialPurchaseWhereInput[]
    materialId?: IntFilter<"MaterialPurchase"> | number
    quantity?: FloatFilter<"MaterialPurchase"> | number
    pricePerUnit?: FloatFilter<"MaterialPurchase"> | number
    totalCost?: FloatFilter<"MaterialPurchase"> | number
    supplier?: StringNullableFilter<"MaterialPurchase"> | string | null
    date?: DateTimeFilter<"MaterialPurchase"> | Date | string
    createdAt?: DateTimeFilter<"MaterialPurchase"> | Date | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }, "id">

  export type MaterialPurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    totalCost?: SortOrder
    supplier?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: MaterialPurchaseCountOrderByAggregateInput
    _avg?: MaterialPurchaseAvgOrderByAggregateInput
    _max?: MaterialPurchaseMaxOrderByAggregateInput
    _min?: MaterialPurchaseMinOrderByAggregateInput
    _sum?: MaterialPurchaseSumOrderByAggregateInput
  }

  export type MaterialPurchaseScalarWhereWithAggregatesInput = {
    AND?: MaterialPurchaseScalarWhereWithAggregatesInput | MaterialPurchaseScalarWhereWithAggregatesInput[]
    OR?: MaterialPurchaseScalarWhereWithAggregatesInput[]
    NOT?: MaterialPurchaseScalarWhereWithAggregatesInput | MaterialPurchaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MaterialPurchase"> | number
    materialId?: IntWithAggregatesFilter<"MaterialPurchase"> | number
    quantity?: FloatWithAggregatesFilter<"MaterialPurchase"> | number
    pricePerUnit?: FloatWithAggregatesFilter<"MaterialPurchase"> | number
    totalCost?: FloatWithAggregatesFilter<"MaterialPurchase"> | number
    supplier?: StringNullableWithAggregatesFilter<"MaterialPurchase"> | string | null
    date?: DateTimeWithAggregatesFilter<"MaterialPurchase"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MaterialPurchase"> | Date | string
  }

  export type PromoWhereInput = {
    AND?: PromoWhereInput | PromoWhereInput[]
    OR?: PromoWhereInput[]
    NOT?: PromoWhereInput | PromoWhereInput[]
    id?: IntFilter<"Promo"> | number
    name?: StringFilter<"Promo"> | string
    type?: StringFilter<"Promo"> | string
    value?: FloatFilter<"Promo"> | number
    isActive?: BoolFilter<"Promo"> | boolean
    createdAt?: DateTimeFilter<"Promo"> | Date | string
    updatedAt?: DateTimeFilter<"Promo"> | Date | string
    sales?: SaleListRelationFilter
  }

  export type PromoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sales?: SaleOrderByRelationAggregateInput
  }

  export type PromoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PromoWhereInput | PromoWhereInput[]
    OR?: PromoWhereInput[]
    NOT?: PromoWhereInput | PromoWhereInput[]
    type?: StringFilter<"Promo"> | string
    value?: FloatFilter<"Promo"> | number
    isActive?: BoolFilter<"Promo"> | boolean
    createdAt?: DateTimeFilter<"Promo"> | Date | string
    updatedAt?: DateTimeFilter<"Promo"> | Date | string
    sales?: SaleListRelationFilter
  }, "id" | "name">

  export type PromoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromoCountOrderByAggregateInput
    _avg?: PromoAvgOrderByAggregateInput
    _max?: PromoMaxOrderByAggregateInput
    _min?: PromoMinOrderByAggregateInput
    _sum?: PromoSumOrderByAggregateInput
  }

  export type PromoScalarWhereWithAggregatesInput = {
    AND?: PromoScalarWhereWithAggregatesInput | PromoScalarWhereWithAggregatesInput[]
    OR?: PromoScalarWhereWithAggregatesInput[]
    NOT?: PromoScalarWhereWithAggregatesInput | PromoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Promo"> | number
    name?: StringWithAggregatesFilter<"Promo"> | string
    type?: StringWithAggregatesFilter<"Promo"> | string
    value?: FloatWithAggregatesFilter<"Promo"> | number
    isActive?: BoolWithAggregatesFilter<"Promo"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Promo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Promo"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: IntFilter<"ActivityLog"> | number
    userId?: IntNullableFilter<"ActivityLog"> | number | null
    action?: StringFilter<"ActivityLog"> | string
    entity?: StringFilter<"ActivityLog"> | string
    entityId?: StringNullableFilter<"ActivityLog"> | string | null
    description?: StringNullableFilter<"ActivityLog"> | string | null
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    userId?: IntNullableFilter<"ActivityLog"> | number | null
    action?: StringFilter<"ActivityLog"> | string
    entity?: StringFilter<"ActivityLog"> | string
    entityId?: StringNullableFilter<"ActivityLog"> | string | null
    description?: StringNullableFilter<"ActivityLog"> | string | null
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _avg?: ActivityLogAvgOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
    _sum?: ActivityLogSumOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActivityLog"> | number
    userId?: IntNullableWithAggregatesFilter<"ActivityLog"> | number | null
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    entity?: StringWithAggregatesFilter<"ActivityLog"> | string
    entityId?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    description?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"ActivityLog">
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type RaffleWhereInput = {
    AND?: RaffleWhereInput | RaffleWhereInput[]
    OR?: RaffleWhereInput[]
    NOT?: RaffleWhereInput | RaffleWhereInput[]
    id?: IntFilter<"Raffle"> | number
    name?: StringFilter<"Raffle"> | string
    startDate?: DateTimeFilter<"Raffle"> | Date | string
    endDate?: DateTimeFilter<"Raffle"> | Date | string
    drawDate?: DateTimeNullableFilter<"Raffle"> | Date | string | null
    status?: StringFilter<"Raffle"> | string
    minimumSpend?: FloatFilter<"Raffle"> | number
    createdAt?: DateTimeFilter<"Raffle"> | Date | string
    updatedAt?: DateTimeFilter<"Raffle"> | Date | string
    winners?: RaffleWinnerListRelationFilter
  }

  export type RaffleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    drawDate?: SortOrderInput | SortOrder
    status?: SortOrder
    minimumSpend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    winners?: RaffleWinnerOrderByRelationAggregateInput
  }

  export type RaffleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RaffleWhereInput | RaffleWhereInput[]
    OR?: RaffleWhereInput[]
    NOT?: RaffleWhereInput | RaffleWhereInput[]
    name?: StringFilter<"Raffle"> | string
    startDate?: DateTimeFilter<"Raffle"> | Date | string
    endDate?: DateTimeFilter<"Raffle"> | Date | string
    drawDate?: DateTimeNullableFilter<"Raffle"> | Date | string | null
    status?: StringFilter<"Raffle"> | string
    minimumSpend?: FloatFilter<"Raffle"> | number
    createdAt?: DateTimeFilter<"Raffle"> | Date | string
    updatedAt?: DateTimeFilter<"Raffle"> | Date | string
    winners?: RaffleWinnerListRelationFilter
  }, "id">

  export type RaffleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    drawDate?: SortOrderInput | SortOrder
    status?: SortOrder
    minimumSpend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RaffleCountOrderByAggregateInput
    _avg?: RaffleAvgOrderByAggregateInput
    _max?: RaffleMaxOrderByAggregateInput
    _min?: RaffleMinOrderByAggregateInput
    _sum?: RaffleSumOrderByAggregateInput
  }

  export type RaffleScalarWhereWithAggregatesInput = {
    AND?: RaffleScalarWhereWithAggregatesInput | RaffleScalarWhereWithAggregatesInput[]
    OR?: RaffleScalarWhereWithAggregatesInput[]
    NOT?: RaffleScalarWhereWithAggregatesInput | RaffleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Raffle"> | number
    name?: StringWithAggregatesFilter<"Raffle"> | string
    startDate?: DateTimeWithAggregatesFilter<"Raffle"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Raffle"> | Date | string
    drawDate?: DateTimeNullableWithAggregatesFilter<"Raffle"> | Date | string | null
    status?: StringWithAggregatesFilter<"Raffle"> | string
    minimumSpend?: FloatWithAggregatesFilter<"Raffle"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Raffle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Raffle"> | Date | string
  }

  export type RaffleWinnerWhereInput = {
    AND?: RaffleWinnerWhereInput | RaffleWinnerWhereInput[]
    OR?: RaffleWinnerWhereInput[]
    NOT?: RaffleWinnerWhereInput | RaffleWinnerWhereInput[]
    id?: IntFilter<"RaffleWinner"> | number
    raffleId?: IntFilter<"RaffleWinner"> | number
    transactionId?: StringFilter<"RaffleWinner"> | string
    customerName?: StringNullableFilter<"RaffleWinner"> | string | null
    phone?: StringNullableFilter<"RaffleWinner"> | string | null
    prize?: StringNullableFilter<"RaffleWinner"> | string | null
    drawnAt?: DateTimeFilter<"RaffleWinner"> | Date | string
    raffle?: XOR<RaffleScalarRelationFilter, RaffleWhereInput>
  }

  export type RaffleWinnerOrderByWithRelationInput = {
    id?: SortOrder
    raffleId?: SortOrder
    transactionId?: SortOrder
    customerName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    prize?: SortOrderInput | SortOrder
    drawnAt?: SortOrder
    raffle?: RaffleOrderByWithRelationInput
  }

  export type RaffleWinnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RaffleWinnerWhereInput | RaffleWinnerWhereInput[]
    OR?: RaffleWinnerWhereInput[]
    NOT?: RaffleWinnerWhereInput | RaffleWinnerWhereInput[]
    raffleId?: IntFilter<"RaffleWinner"> | number
    transactionId?: StringFilter<"RaffleWinner"> | string
    customerName?: StringNullableFilter<"RaffleWinner"> | string | null
    phone?: StringNullableFilter<"RaffleWinner"> | string | null
    prize?: StringNullableFilter<"RaffleWinner"> | string | null
    drawnAt?: DateTimeFilter<"RaffleWinner"> | Date | string
    raffle?: XOR<RaffleScalarRelationFilter, RaffleWhereInput>
  }, "id">

  export type RaffleWinnerOrderByWithAggregationInput = {
    id?: SortOrder
    raffleId?: SortOrder
    transactionId?: SortOrder
    customerName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    prize?: SortOrderInput | SortOrder
    drawnAt?: SortOrder
    _count?: RaffleWinnerCountOrderByAggregateInput
    _avg?: RaffleWinnerAvgOrderByAggregateInput
    _max?: RaffleWinnerMaxOrderByAggregateInput
    _min?: RaffleWinnerMinOrderByAggregateInput
    _sum?: RaffleWinnerSumOrderByAggregateInput
  }

  export type RaffleWinnerScalarWhereWithAggregatesInput = {
    AND?: RaffleWinnerScalarWhereWithAggregatesInput | RaffleWinnerScalarWhereWithAggregatesInput[]
    OR?: RaffleWinnerScalarWhereWithAggregatesInput[]
    NOT?: RaffleWinnerScalarWhereWithAggregatesInput | RaffleWinnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RaffleWinner"> | number
    raffleId?: IntWithAggregatesFilter<"RaffleWinner"> | number
    transactionId?: StringWithAggregatesFilter<"RaffleWinner"> | string
    customerName?: StringNullableWithAggregatesFilter<"RaffleWinner"> | string | null
    phone?: StringNullableWithAggregatesFilter<"RaffleWinner"> | string | null
    prize?: StringNullableWithAggregatesFilter<"RaffleWinner"> | string | null
    drawnAt?: DateTimeWithAggregatesFilter<"RaffleWinner"> | Date | string
  }

  export type MenuItemCreateInput = {
    name: string
    category?: string
    price: number
    isRetail?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    material?: MaterialCreateNestedOneWithoutMenuItemsInput
    recipes?: MenuItemMaterialCreateNestedManyWithoutMenuItemInput
    sales?: SaleCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateInput = {
    id?: number
    name: string
    category?: string
    price: number
    isRetail?: boolean
    materialId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipes?: MenuItemMaterialUncheckedCreateNestedManyWithoutMenuItemInput
    sales?: SaleUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isRetail?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneWithoutMenuItemsNestedInput
    recipes?: MenuItemMaterialUpdateManyWithoutMenuItemNestedInput
    sales?: SaleUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isRetail?: BoolFieldUpdateOperationsInput | boolean
    materialId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: MenuItemMaterialUncheckedUpdateManyWithoutMenuItemNestedInput
    sales?: SaleUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemCreateManyInput = {
    id?: number
    name: string
    category?: string
    price: number
    isRetail?: boolean
    materialId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isRetail?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isRetail?: BoolFieldUpdateOperationsInput | boolean
    materialId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateInput = {
    name: string
    unit: string
    stock?: number
    costPerUnit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minStock?: number
    logs?: MaterialLogCreateNestedManyWithoutMaterialInput
    purchases?: MaterialPurchaseCreateNestedManyWithoutMaterialInput
    recipes?: MenuItemMaterialCreateNestedManyWithoutMaterialInput
    menuItems?: MenuItemCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: number
    name: string
    unit: string
    stock?: number
    costPerUnit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minStock?: number
    logs?: MaterialLogUncheckedCreateNestedManyWithoutMaterialInput
    purchases?: MaterialPurchaseUncheckedCreateNestedManyWithoutMaterialInput
    recipes?: MenuItemMaterialUncheckedCreateNestedManyWithoutMaterialInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: FloatFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minStock?: FloatFieldUpdateOperationsInput | number
    logs?: MaterialLogUpdateManyWithoutMaterialNestedInput
    purchases?: MaterialPurchaseUpdateManyWithoutMaterialNestedInput
    recipes?: MenuItemMaterialUpdateManyWithoutMaterialNestedInput
    menuItems?: MenuItemUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: FloatFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minStock?: FloatFieldUpdateOperationsInput | number
    logs?: MaterialLogUncheckedUpdateManyWithoutMaterialNestedInput
    purchases?: MaterialPurchaseUncheckedUpdateManyWithoutMaterialNestedInput
    recipes?: MenuItemMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialCreateManyInput = {
    id?: number
    name: string
    unit: string
    stock?: number
    costPerUnit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minStock?: number
  }

  export type MaterialUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: FloatFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minStock?: FloatFieldUpdateOperationsInput | number
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: FloatFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minStock?: FloatFieldUpdateOperationsInput | number
  }

  export type MenuItemMaterialCreateInput = {
    quantity: number
    createdAt?: Date | string
    material: MaterialCreateNestedOneWithoutRecipesInput
    menuItem: MenuItemCreateNestedOneWithoutRecipesInput
  }

  export type MenuItemMaterialUncheckedCreateInput = {
    id?: number
    menuItemId: number
    materialId: number
    quantity: number
    createdAt?: Date | string
  }

  export type MenuItemMaterialUpdateInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneRequiredWithoutRecipesNestedInput
    menuItem?: MenuItemUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type MenuItemMaterialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuItemId?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemMaterialCreateManyInput = {
    id?: number
    menuItemId: number
    materialId: number
    quantity: number
    createdAt?: Date | string
  }

  export type MenuItemMaterialUpdateManyMutationInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemMaterialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuItemId?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateInput = {
    date?: Date | string
    qty: number
    priceSnapshot: number
    costSnapshot?: number
    total: number
    paymentMethod: string
    createdAt?: Date | string
    transactionId?: string | null
    discountAmount?: number
    variants?: string | null
    menuItem: MenuItemCreateNestedOneWithoutSalesInput
    shift?: ShiftCreateNestedOneWithoutSalesInput
    promo?: PromoCreateNestedOneWithoutSalesInput
    order?: OrderCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateInput = {
    id?: number
    date?: Date | string
    menuItemId: number
    qty: number
    priceSnapshot: number
    costSnapshot?: number
    total: number
    paymentMethod: string
    createdAt?: Date | string
    shiftId?: number | null
    transactionId?: string | null
    discountAmount?: number
    promoId?: number | null
    variants?: string | null
    orderId?: number | null
  }

  export type SaleUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    priceSnapshot?: FloatFieldUpdateOperationsInput | number
    costSnapshot?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: FloatFieldUpdateOperationsInput | number
    variants?: NullableStringFieldUpdateOperationsInput | string | null
    menuItem?: MenuItemUpdateOneRequiredWithoutSalesNestedInput
    shift?: ShiftUpdateOneWithoutSalesNestedInput
    promo?: PromoUpdateOneWithoutSalesNestedInput
    order?: OrderUpdateOneWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    priceSnapshot?: FloatFieldUpdateOperationsInput | number
    costSnapshot?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: FloatFieldUpdateOperationsInput | number
    promoId?: NullableIntFieldUpdateOperationsInput | number | null
    variants?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SaleCreateManyInput = {
    id?: number
    date?: Date | string
    menuItemId: number
    qty: number
    priceSnapshot: number
    costSnapshot?: number
    total: number
    paymentMethod: string
    createdAt?: Date | string
    shiftId?: number | null
    transactionId?: string | null
    discountAmount?: number
    promoId?: number | null
    variants?: string | null
    orderId?: number | null
  }

  export type SaleUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    priceSnapshot?: FloatFieldUpdateOperationsInput | number
    costSnapshot?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: FloatFieldUpdateOperationsInput | number
    variants?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    priceSnapshot?: FloatFieldUpdateOperationsInput | number
    costSnapshot?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: FloatFieldUpdateOperationsInput | number
    promoId?: NullableIntFieldUpdateOperationsInput | number | null
    variants?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderCreateInput = {
    transactionId: string
    customerName?: string | null
    tableNumber?: string | null
    status?: string
    totalAmount: number
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    transactionId: string
    customerName?: string | null
    tableNumber?: string | null
    status?: string
    totalAmount: number
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    tableNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    tableNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    transactionId: string
    customerName?: string | null
    tableNumber?: string | null
    status?: string
    totalAmount: number
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    tableNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    tableNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftCreateInput = {
    startTime?: Date | string
    endTime?: Date | string | null
    openingCash?: number
    closingCash?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleCreateNestedManyWithoutShiftInput
    user?: UserCreateNestedOneWithoutShiftsInput
  }

  export type ShiftUncheckedCreateInput = {
    id?: number
    userId?: number | null
    startTime?: Date | string
    endTime?: Date | string | null
    openingCash?: number
    closingCash?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingCash?: FloatFieldUpdateOperationsInput | number
    closingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutShiftNestedInput
    user?: UserUpdateOneWithoutShiftsNestedInput
  }

  export type ShiftUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingCash?: FloatFieldUpdateOperationsInput | number
    closingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type ShiftCreateManyInput = {
    id?: number
    userId?: number | null
    startTime?: Date | string
    endTime?: Date | string | null
    openingCash?: number
    closingCash?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingCash?: FloatFieldUpdateOperationsInput | number
    closingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingCash?: FloatFieldUpdateOperationsInput | number
    closingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateInput = {
    date?: Date | string
    description: string
    category: string
    amount: number
    note?: string | null
    createdAt?: Date | string
  }

  export type ExpenseUncheckedCreateInput = {
    id?: number
    date?: Date | string
    description: string
    category: string
    amount: number
    note?: string | null
    createdAt?: Date | string
  }

  export type ExpenseUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateManyInput = {
    id?: number
    date?: Date | string
    description: string
    category: string
    amount: number
    note?: string | null
    createdAt?: Date | string
  }

  export type ExpenseUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialLogCreateInput = {
    type: string
    quantity: number
    balanceAfter: number
    reason?: string | null
    createdAt?: Date | string
    material: MaterialCreateNestedOneWithoutLogsInput
  }

  export type MaterialLogUncheckedCreateInput = {
    id?: number
    materialId: number
    type: string
    quantity: number
    balanceAfter: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type MaterialLogUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneRequiredWithoutLogsNestedInput
  }

  export type MaterialLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialLogCreateManyInput = {
    id?: number
    materialId: number
    type: string
    quantity: number
    balanceAfter: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type MaterialLogUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    pin: string
    role: string
    createdAt?: Date | string
    shifts?: ShiftCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    pin: string
    role: string
    createdAt?: Date | string
    shifts?: ShiftUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shifts?: ShiftUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shifts?: ShiftUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    pin: string
    role: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialPurchaseCreateInput = {
    quantity: number
    pricePerUnit: number
    totalCost: number
    supplier?: string | null
    date?: Date | string
    createdAt?: Date | string
    material: MaterialCreateNestedOneWithoutPurchasesInput
  }

  export type MaterialPurchaseUncheckedCreateInput = {
    id?: number
    materialId: number
    quantity: number
    pricePerUnit: number
    totalCost: number
    supplier?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type MaterialPurchaseUpdateInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type MaterialPurchaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialPurchaseCreateManyInput = {
    id?: number
    materialId: number
    quantity: number
    pricePerUnit: number
    totalCost: number
    supplier?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type MaterialPurchaseUpdateManyMutationInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialPurchaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoCreateInput = {
    name: string
    type: string
    value: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleCreateNestedManyWithoutPromoInput
  }

  export type PromoUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    value: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutPromoInput
  }

  export type PromoUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutPromoNestedInput
  }

  export type PromoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutPromoNestedInput
  }

  export type PromoCreateManyInput = {
    id?: number
    name: string
    type: string
    value: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromoUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: number
    userId?: number | null
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: number
    userId?: number | null
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaffleCreateInput = {
    name: string
    startDate: Date | string
    endDate: Date | string
    drawDate?: Date | string | null
    status?: string
    minimumSpend?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    winners?: RaffleWinnerCreateNestedManyWithoutRaffleInput
  }

  export type RaffleUncheckedCreateInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate: Date | string
    drawDate?: Date | string | null
    status?: string
    minimumSpend?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    winners?: RaffleWinnerUncheckedCreateNestedManyWithoutRaffleInput
  }

  export type RaffleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    minimumSpend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winners?: RaffleWinnerUpdateManyWithoutRaffleNestedInput
  }

  export type RaffleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    minimumSpend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winners?: RaffleWinnerUncheckedUpdateManyWithoutRaffleNestedInput
  }

  export type RaffleCreateManyInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate: Date | string
    drawDate?: Date | string | null
    status?: string
    minimumSpend?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RaffleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    minimumSpend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaffleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    minimumSpend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaffleWinnerCreateInput = {
    transactionId: string
    customerName?: string | null
    phone?: string | null
    prize?: string | null
    drawnAt?: Date | string
    raffle: RaffleCreateNestedOneWithoutWinnersInput
  }

  export type RaffleWinnerUncheckedCreateInput = {
    id?: number
    raffleId: number
    transactionId: string
    customerName?: string | null
    phone?: string | null
    prize?: string | null
    drawnAt?: Date | string
  }

  export type RaffleWinnerUpdateInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    drawnAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raffle?: RaffleUpdateOneRequiredWithoutWinnersNestedInput
  }

  export type RaffleWinnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    raffleId?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    drawnAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaffleWinnerCreateManyInput = {
    id?: number
    raffleId: number
    transactionId: string
    customerName?: string | null
    phone?: string | null
    prize?: string | null
    drawnAt?: Date | string
  }

  export type RaffleWinnerUpdateManyMutationInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    drawnAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaffleWinnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    raffleId?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    drawnAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type MaterialNullableScalarRelationFilter = {
    is?: MaterialWhereInput | null
    isNot?: MaterialWhereInput | null
  }

  export type MenuItemMaterialListRelationFilter = {
    every?: MenuItemMaterialWhereInput
    some?: MenuItemMaterialWhereInput
    none?: MenuItemMaterialWhereInput
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MenuItemMaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    isRetail?: SortOrder
    materialId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    materialId?: SortOrder
  }

  export type MenuItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    isRetail?: SortOrder
    materialId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    isRetail?: SortOrder
    materialId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    materialId?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type MaterialLogListRelationFilter = {
    every?: MaterialLogWhereInput
    some?: MaterialLogWhereInput
    none?: MaterialLogWhereInput
  }

  export type MaterialPurchaseListRelationFilter = {
    every?: MaterialPurchaseWhereInput
    some?: MaterialPurchaseWhereInput
    none?: MaterialPurchaseWhereInput
  }

  export type MenuItemListRelationFilter = {
    every?: MenuItemWhereInput
    some?: MenuItemWhereInput
    none?: MenuItemWhereInput
  }

  export type MaterialLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialPurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    stock?: SortOrder
    costPerUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    minStock?: SortOrder
  }

  export type MaterialAvgOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    costPerUnit?: SortOrder
    minStock?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    stock?: SortOrder
    costPerUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    minStock?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    stock?: SortOrder
    costPerUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    minStock?: SortOrder
  }

  export type MaterialSumOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    costPerUnit?: SortOrder
    minStock?: SortOrder
  }

  export type MaterialScalarRelationFilter = {
    is?: MaterialWhereInput
    isNot?: MaterialWhereInput
  }

  export type MenuItemScalarRelationFilter = {
    is?: MenuItemWhereInput
    isNot?: MenuItemWhereInput
  }

  export type MenuItemMaterialCountOrderByAggregateInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type MenuItemMaterialAvgOrderByAggregateInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
  }

  export type MenuItemMaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type MenuItemMaterialMinOrderByAggregateInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type MenuItemMaterialSumOrderByAggregateInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
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

  export type ShiftNullableScalarRelationFilter = {
    is?: ShiftWhereInput | null
    isNot?: ShiftWhereInput | null
  }

  export type PromoNullableScalarRelationFilter = {
    is?: PromoWhereInput | null
    isNot?: PromoWhereInput | null
  }

  export type OrderNullableScalarRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    menuItemId?: SortOrder
    qty?: SortOrder
    priceSnapshot?: SortOrder
    costSnapshot?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    shiftId?: SortOrder
    transactionId?: SortOrder
    discountAmount?: SortOrder
    promoId?: SortOrder
    variants?: SortOrder
    orderId?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    qty?: SortOrder
    priceSnapshot?: SortOrder
    costSnapshot?: SortOrder
    total?: SortOrder
    shiftId?: SortOrder
    discountAmount?: SortOrder
    promoId?: SortOrder
    orderId?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    menuItemId?: SortOrder
    qty?: SortOrder
    priceSnapshot?: SortOrder
    costSnapshot?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    shiftId?: SortOrder
    transactionId?: SortOrder
    discountAmount?: SortOrder
    promoId?: SortOrder
    variants?: SortOrder
    orderId?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    menuItemId?: SortOrder
    qty?: SortOrder
    priceSnapshot?: SortOrder
    costSnapshot?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    shiftId?: SortOrder
    transactionId?: SortOrder
    discountAmount?: SortOrder
    promoId?: SortOrder
    variants?: SortOrder
    orderId?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    qty?: SortOrder
    priceSnapshot?: SortOrder
    costSnapshot?: SortOrder
    total?: SortOrder
    shiftId?: SortOrder
    discountAmount?: SortOrder
    promoId?: SortOrder
    orderId?: SortOrder
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

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    customerName?: SortOrder
    tableNumber?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    customerName?: SortOrder
    tableNumber?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    customerName?: SortOrder
    tableNumber?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ShiftCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    openingCash?: SortOrder
    closingCash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    openingCash?: SortOrder
    closingCash?: SortOrder
  }

  export type ShiftMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    openingCash?: SortOrder
    closingCash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    openingCash?: SortOrder
    closingCash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    openingCash?: SortOrder
    closingCash?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type MaterialLogCountOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    balanceAfter?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type MaterialLogAvgOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    balanceAfter?: SortOrder
  }

  export type MaterialLogMaxOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    balanceAfter?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type MaterialLogMinOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    balanceAfter?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type MaterialLogSumOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    balanceAfter?: SortOrder
  }

  export type ShiftListRelationFilter = {
    every?: ShiftWhereInput
    some?: ShiftWhereInput
    none?: ShiftWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type ShiftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MaterialPurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    totalCost?: SortOrder
    supplier?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type MaterialPurchaseAvgOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    totalCost?: SortOrder
  }

  export type MaterialPurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    totalCost?: SortOrder
    supplier?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type MaterialPurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    totalCost?: SortOrder
    supplier?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type MaterialPurchaseSumOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    totalCost?: SortOrder
  }

  export type PromoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromoAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type PromoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromoSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type RaffleWinnerListRelationFilter = {
    every?: RaffleWinnerWhereInput
    some?: RaffleWinnerWhereInput
    none?: RaffleWinnerWhereInput
  }

  export type RaffleWinnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaffleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    drawDate?: SortOrder
    status?: SortOrder
    minimumSpend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RaffleAvgOrderByAggregateInput = {
    id?: SortOrder
    minimumSpend?: SortOrder
  }

  export type RaffleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    drawDate?: SortOrder
    status?: SortOrder
    minimumSpend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RaffleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    drawDate?: SortOrder
    status?: SortOrder
    minimumSpend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RaffleSumOrderByAggregateInput = {
    id?: SortOrder
    minimumSpend?: SortOrder
  }

  export type RaffleScalarRelationFilter = {
    is?: RaffleWhereInput
    isNot?: RaffleWhereInput
  }

  export type RaffleWinnerCountOrderByAggregateInput = {
    id?: SortOrder
    raffleId?: SortOrder
    transactionId?: SortOrder
    customerName?: SortOrder
    phone?: SortOrder
    prize?: SortOrder
    drawnAt?: SortOrder
  }

  export type RaffleWinnerAvgOrderByAggregateInput = {
    id?: SortOrder
    raffleId?: SortOrder
  }

  export type RaffleWinnerMaxOrderByAggregateInput = {
    id?: SortOrder
    raffleId?: SortOrder
    transactionId?: SortOrder
    customerName?: SortOrder
    phone?: SortOrder
    prize?: SortOrder
    drawnAt?: SortOrder
  }

  export type RaffleWinnerMinOrderByAggregateInput = {
    id?: SortOrder
    raffleId?: SortOrder
    transactionId?: SortOrder
    customerName?: SortOrder
    phone?: SortOrder
    prize?: SortOrder
    drawnAt?: SortOrder
  }

  export type RaffleWinnerSumOrderByAggregateInput = {
    id?: SortOrder
    raffleId?: SortOrder
  }

  export type MaterialCreateNestedOneWithoutMenuItemsInput = {
    create?: XOR<MaterialCreateWithoutMenuItemsInput, MaterialUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutMenuItemsInput
    connect?: MaterialWhereUniqueInput
  }

  export type MenuItemMaterialCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<MenuItemMaterialCreateWithoutMenuItemInput, MenuItemMaterialUncheckedCreateWithoutMenuItemInput> | MenuItemMaterialCreateWithoutMenuItemInput[] | MenuItemMaterialUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: MenuItemMaterialCreateOrConnectWithoutMenuItemInput | MenuItemMaterialCreateOrConnectWithoutMenuItemInput[]
    createMany?: MenuItemMaterialCreateManyMenuItemInputEnvelope
    connect?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<SaleCreateWithoutMenuItemInput, SaleUncheckedCreateWithoutMenuItemInput> | SaleCreateWithoutMenuItemInput[] | SaleUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutMenuItemInput | SaleCreateOrConnectWithoutMenuItemInput[]
    createMany?: SaleCreateManyMenuItemInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type MenuItemMaterialUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<MenuItemMaterialCreateWithoutMenuItemInput, MenuItemMaterialUncheckedCreateWithoutMenuItemInput> | MenuItemMaterialCreateWithoutMenuItemInput[] | MenuItemMaterialUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: MenuItemMaterialCreateOrConnectWithoutMenuItemInput | MenuItemMaterialCreateOrConnectWithoutMenuItemInput[]
    createMany?: MenuItemMaterialCreateManyMenuItemInputEnvelope
    connect?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<SaleCreateWithoutMenuItemInput, SaleUncheckedCreateWithoutMenuItemInput> | SaleCreateWithoutMenuItemInput[] | SaleUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutMenuItemInput | SaleCreateOrConnectWithoutMenuItemInput[]
    createMany?: SaleCreateManyMenuItemInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MaterialUpdateOneWithoutMenuItemsNestedInput = {
    create?: XOR<MaterialCreateWithoutMenuItemsInput, MaterialUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutMenuItemsInput
    upsert?: MaterialUpsertWithoutMenuItemsInput
    disconnect?: MaterialWhereInput | boolean
    delete?: MaterialWhereInput | boolean
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutMenuItemsInput, MaterialUpdateWithoutMenuItemsInput>, MaterialUncheckedUpdateWithoutMenuItemsInput>
  }

  export type MenuItemMaterialUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<MenuItemMaterialCreateWithoutMenuItemInput, MenuItemMaterialUncheckedCreateWithoutMenuItemInput> | MenuItemMaterialCreateWithoutMenuItemInput[] | MenuItemMaterialUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: MenuItemMaterialCreateOrConnectWithoutMenuItemInput | MenuItemMaterialCreateOrConnectWithoutMenuItemInput[]
    upsert?: MenuItemMaterialUpsertWithWhereUniqueWithoutMenuItemInput | MenuItemMaterialUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: MenuItemMaterialCreateManyMenuItemInputEnvelope
    set?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
    disconnect?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
    delete?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
    connect?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
    update?: MenuItemMaterialUpdateWithWhereUniqueWithoutMenuItemInput | MenuItemMaterialUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: MenuItemMaterialUpdateManyWithWhereWithoutMenuItemInput | MenuItemMaterialUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: MenuItemMaterialScalarWhereInput | MenuItemMaterialScalarWhereInput[]
  }

  export type SaleUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<SaleCreateWithoutMenuItemInput, SaleUncheckedCreateWithoutMenuItemInput> | SaleCreateWithoutMenuItemInput[] | SaleUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutMenuItemInput | SaleCreateOrConnectWithoutMenuItemInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutMenuItemInput | SaleUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: SaleCreateManyMenuItemInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutMenuItemInput | SaleUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutMenuItemInput | SaleUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MenuItemMaterialUncheckedUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<MenuItemMaterialCreateWithoutMenuItemInput, MenuItemMaterialUncheckedCreateWithoutMenuItemInput> | MenuItemMaterialCreateWithoutMenuItemInput[] | MenuItemMaterialUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: MenuItemMaterialCreateOrConnectWithoutMenuItemInput | MenuItemMaterialCreateOrConnectWithoutMenuItemInput[]
    upsert?: MenuItemMaterialUpsertWithWhereUniqueWithoutMenuItemInput | MenuItemMaterialUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: MenuItemMaterialCreateManyMenuItemInputEnvelope
    set?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
    disconnect?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
    delete?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
    connect?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
    update?: MenuItemMaterialUpdateWithWhereUniqueWithoutMenuItemInput | MenuItemMaterialUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: MenuItemMaterialUpdateManyWithWhereWithoutMenuItemInput | MenuItemMaterialUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: MenuItemMaterialScalarWhereInput | MenuItemMaterialScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<SaleCreateWithoutMenuItemInput, SaleUncheckedCreateWithoutMenuItemInput> | SaleCreateWithoutMenuItemInput[] | SaleUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutMenuItemInput | SaleCreateOrConnectWithoutMenuItemInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutMenuItemInput | SaleUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: SaleCreateManyMenuItemInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutMenuItemInput | SaleUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutMenuItemInput | SaleUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type MaterialLogCreateNestedManyWithoutMaterialInput = {
    create?: XOR<MaterialLogCreateWithoutMaterialInput, MaterialLogUncheckedCreateWithoutMaterialInput> | MaterialLogCreateWithoutMaterialInput[] | MaterialLogUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialLogCreateOrConnectWithoutMaterialInput | MaterialLogCreateOrConnectWithoutMaterialInput[]
    createMany?: MaterialLogCreateManyMaterialInputEnvelope
    connect?: MaterialLogWhereUniqueInput | MaterialLogWhereUniqueInput[]
  }

  export type MaterialPurchaseCreateNestedManyWithoutMaterialInput = {
    create?: XOR<MaterialPurchaseCreateWithoutMaterialInput, MaterialPurchaseUncheckedCreateWithoutMaterialInput> | MaterialPurchaseCreateWithoutMaterialInput[] | MaterialPurchaseUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialPurchaseCreateOrConnectWithoutMaterialInput | MaterialPurchaseCreateOrConnectWithoutMaterialInput[]
    createMany?: MaterialPurchaseCreateManyMaterialInputEnvelope
    connect?: MaterialPurchaseWhereUniqueInput | MaterialPurchaseWhereUniqueInput[]
  }

  export type MenuItemMaterialCreateNestedManyWithoutMaterialInput = {
    create?: XOR<MenuItemMaterialCreateWithoutMaterialInput, MenuItemMaterialUncheckedCreateWithoutMaterialInput> | MenuItemMaterialCreateWithoutMaterialInput[] | MenuItemMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MenuItemMaterialCreateOrConnectWithoutMaterialInput | MenuItemMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: MenuItemMaterialCreateManyMaterialInputEnvelope
    connect?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
  }

  export type MenuItemCreateNestedManyWithoutMaterialInput = {
    create?: XOR<MenuItemCreateWithoutMaterialInput, MenuItemUncheckedCreateWithoutMaterialInput> | MenuItemCreateWithoutMaterialInput[] | MenuItemUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutMaterialInput | MenuItemCreateOrConnectWithoutMaterialInput[]
    createMany?: MenuItemCreateManyMaterialInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type MaterialLogUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<MaterialLogCreateWithoutMaterialInput, MaterialLogUncheckedCreateWithoutMaterialInput> | MaterialLogCreateWithoutMaterialInput[] | MaterialLogUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialLogCreateOrConnectWithoutMaterialInput | MaterialLogCreateOrConnectWithoutMaterialInput[]
    createMany?: MaterialLogCreateManyMaterialInputEnvelope
    connect?: MaterialLogWhereUniqueInput | MaterialLogWhereUniqueInput[]
  }

  export type MaterialPurchaseUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<MaterialPurchaseCreateWithoutMaterialInput, MaterialPurchaseUncheckedCreateWithoutMaterialInput> | MaterialPurchaseCreateWithoutMaterialInput[] | MaterialPurchaseUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialPurchaseCreateOrConnectWithoutMaterialInput | MaterialPurchaseCreateOrConnectWithoutMaterialInput[]
    createMany?: MaterialPurchaseCreateManyMaterialInputEnvelope
    connect?: MaterialPurchaseWhereUniqueInput | MaterialPurchaseWhereUniqueInput[]
  }

  export type MenuItemMaterialUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<MenuItemMaterialCreateWithoutMaterialInput, MenuItemMaterialUncheckedCreateWithoutMaterialInput> | MenuItemMaterialCreateWithoutMaterialInput[] | MenuItemMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MenuItemMaterialCreateOrConnectWithoutMaterialInput | MenuItemMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: MenuItemMaterialCreateManyMaterialInputEnvelope
    connect?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
  }

  export type MenuItemUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<MenuItemCreateWithoutMaterialInput, MenuItemUncheckedCreateWithoutMaterialInput> | MenuItemCreateWithoutMaterialInput[] | MenuItemUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutMaterialInput | MenuItemCreateOrConnectWithoutMaterialInput[]
    createMany?: MenuItemCreateManyMaterialInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type MaterialLogUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<MaterialLogCreateWithoutMaterialInput, MaterialLogUncheckedCreateWithoutMaterialInput> | MaterialLogCreateWithoutMaterialInput[] | MaterialLogUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialLogCreateOrConnectWithoutMaterialInput | MaterialLogCreateOrConnectWithoutMaterialInput[]
    upsert?: MaterialLogUpsertWithWhereUniqueWithoutMaterialInput | MaterialLogUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: MaterialLogCreateManyMaterialInputEnvelope
    set?: MaterialLogWhereUniqueInput | MaterialLogWhereUniqueInput[]
    disconnect?: MaterialLogWhereUniqueInput | MaterialLogWhereUniqueInput[]
    delete?: MaterialLogWhereUniqueInput | MaterialLogWhereUniqueInput[]
    connect?: MaterialLogWhereUniqueInput | MaterialLogWhereUniqueInput[]
    update?: MaterialLogUpdateWithWhereUniqueWithoutMaterialInput | MaterialLogUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: MaterialLogUpdateManyWithWhereWithoutMaterialInput | MaterialLogUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: MaterialLogScalarWhereInput | MaterialLogScalarWhereInput[]
  }

  export type MaterialPurchaseUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<MaterialPurchaseCreateWithoutMaterialInput, MaterialPurchaseUncheckedCreateWithoutMaterialInput> | MaterialPurchaseCreateWithoutMaterialInput[] | MaterialPurchaseUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialPurchaseCreateOrConnectWithoutMaterialInput | MaterialPurchaseCreateOrConnectWithoutMaterialInput[]
    upsert?: MaterialPurchaseUpsertWithWhereUniqueWithoutMaterialInput | MaterialPurchaseUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: MaterialPurchaseCreateManyMaterialInputEnvelope
    set?: MaterialPurchaseWhereUniqueInput | MaterialPurchaseWhereUniqueInput[]
    disconnect?: MaterialPurchaseWhereUniqueInput | MaterialPurchaseWhereUniqueInput[]
    delete?: MaterialPurchaseWhereUniqueInput | MaterialPurchaseWhereUniqueInput[]
    connect?: MaterialPurchaseWhereUniqueInput | MaterialPurchaseWhereUniqueInput[]
    update?: MaterialPurchaseUpdateWithWhereUniqueWithoutMaterialInput | MaterialPurchaseUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: MaterialPurchaseUpdateManyWithWhereWithoutMaterialInput | MaterialPurchaseUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: MaterialPurchaseScalarWhereInput | MaterialPurchaseScalarWhereInput[]
  }

  export type MenuItemMaterialUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<MenuItemMaterialCreateWithoutMaterialInput, MenuItemMaterialUncheckedCreateWithoutMaterialInput> | MenuItemMaterialCreateWithoutMaterialInput[] | MenuItemMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MenuItemMaterialCreateOrConnectWithoutMaterialInput | MenuItemMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: MenuItemMaterialUpsertWithWhereUniqueWithoutMaterialInput | MenuItemMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: MenuItemMaterialCreateManyMaterialInputEnvelope
    set?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
    disconnect?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
    delete?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
    connect?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
    update?: MenuItemMaterialUpdateWithWhereUniqueWithoutMaterialInput | MenuItemMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: MenuItemMaterialUpdateManyWithWhereWithoutMaterialInput | MenuItemMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: MenuItemMaterialScalarWhereInput | MenuItemMaterialScalarWhereInput[]
  }

  export type MenuItemUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<MenuItemCreateWithoutMaterialInput, MenuItemUncheckedCreateWithoutMaterialInput> | MenuItemCreateWithoutMaterialInput[] | MenuItemUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutMaterialInput | MenuItemCreateOrConnectWithoutMaterialInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutMaterialInput | MenuItemUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: MenuItemCreateManyMaterialInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutMaterialInput | MenuItemUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutMaterialInput | MenuItemUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type MaterialLogUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<MaterialLogCreateWithoutMaterialInput, MaterialLogUncheckedCreateWithoutMaterialInput> | MaterialLogCreateWithoutMaterialInput[] | MaterialLogUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialLogCreateOrConnectWithoutMaterialInput | MaterialLogCreateOrConnectWithoutMaterialInput[]
    upsert?: MaterialLogUpsertWithWhereUniqueWithoutMaterialInput | MaterialLogUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: MaterialLogCreateManyMaterialInputEnvelope
    set?: MaterialLogWhereUniqueInput | MaterialLogWhereUniqueInput[]
    disconnect?: MaterialLogWhereUniqueInput | MaterialLogWhereUniqueInput[]
    delete?: MaterialLogWhereUniqueInput | MaterialLogWhereUniqueInput[]
    connect?: MaterialLogWhereUniqueInput | MaterialLogWhereUniqueInput[]
    update?: MaterialLogUpdateWithWhereUniqueWithoutMaterialInput | MaterialLogUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: MaterialLogUpdateManyWithWhereWithoutMaterialInput | MaterialLogUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: MaterialLogScalarWhereInput | MaterialLogScalarWhereInput[]
  }

  export type MaterialPurchaseUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<MaterialPurchaseCreateWithoutMaterialInput, MaterialPurchaseUncheckedCreateWithoutMaterialInput> | MaterialPurchaseCreateWithoutMaterialInput[] | MaterialPurchaseUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialPurchaseCreateOrConnectWithoutMaterialInput | MaterialPurchaseCreateOrConnectWithoutMaterialInput[]
    upsert?: MaterialPurchaseUpsertWithWhereUniqueWithoutMaterialInput | MaterialPurchaseUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: MaterialPurchaseCreateManyMaterialInputEnvelope
    set?: MaterialPurchaseWhereUniqueInput | MaterialPurchaseWhereUniqueInput[]
    disconnect?: MaterialPurchaseWhereUniqueInput | MaterialPurchaseWhereUniqueInput[]
    delete?: MaterialPurchaseWhereUniqueInput | MaterialPurchaseWhereUniqueInput[]
    connect?: MaterialPurchaseWhereUniqueInput | MaterialPurchaseWhereUniqueInput[]
    update?: MaterialPurchaseUpdateWithWhereUniqueWithoutMaterialInput | MaterialPurchaseUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: MaterialPurchaseUpdateManyWithWhereWithoutMaterialInput | MaterialPurchaseUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: MaterialPurchaseScalarWhereInput | MaterialPurchaseScalarWhereInput[]
  }

  export type MenuItemMaterialUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<MenuItemMaterialCreateWithoutMaterialInput, MenuItemMaterialUncheckedCreateWithoutMaterialInput> | MenuItemMaterialCreateWithoutMaterialInput[] | MenuItemMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MenuItemMaterialCreateOrConnectWithoutMaterialInput | MenuItemMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: MenuItemMaterialUpsertWithWhereUniqueWithoutMaterialInput | MenuItemMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: MenuItemMaterialCreateManyMaterialInputEnvelope
    set?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
    disconnect?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
    delete?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
    connect?: MenuItemMaterialWhereUniqueInput | MenuItemMaterialWhereUniqueInput[]
    update?: MenuItemMaterialUpdateWithWhereUniqueWithoutMaterialInput | MenuItemMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: MenuItemMaterialUpdateManyWithWhereWithoutMaterialInput | MenuItemMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: MenuItemMaterialScalarWhereInput | MenuItemMaterialScalarWhereInput[]
  }

  export type MenuItemUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<MenuItemCreateWithoutMaterialInput, MenuItemUncheckedCreateWithoutMaterialInput> | MenuItemCreateWithoutMaterialInput[] | MenuItemUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutMaterialInput | MenuItemCreateOrConnectWithoutMaterialInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutMaterialInput | MenuItemUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: MenuItemCreateManyMaterialInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutMaterialInput | MenuItemUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutMaterialInput | MenuItemUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type MaterialCreateNestedOneWithoutRecipesInput = {
    create?: XOR<MaterialCreateWithoutRecipesInput, MaterialUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutRecipesInput
    connect?: MaterialWhereUniqueInput
  }

  export type MenuItemCreateNestedOneWithoutRecipesInput = {
    create?: XOR<MenuItemCreateWithoutRecipesInput, MenuItemUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutRecipesInput
    connect?: MenuItemWhereUniqueInput
  }

  export type MaterialUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<MaterialCreateWithoutRecipesInput, MaterialUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutRecipesInput
    upsert?: MaterialUpsertWithoutRecipesInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutRecipesInput, MaterialUpdateWithoutRecipesInput>, MaterialUncheckedUpdateWithoutRecipesInput>
  }

  export type MenuItemUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<MenuItemCreateWithoutRecipesInput, MenuItemUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutRecipesInput
    upsert?: MenuItemUpsertWithoutRecipesInput
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutRecipesInput, MenuItemUpdateWithoutRecipesInput>, MenuItemUncheckedUpdateWithoutRecipesInput>
  }

  export type MenuItemCreateNestedOneWithoutSalesInput = {
    create?: XOR<MenuItemCreateWithoutSalesInput, MenuItemUncheckedCreateWithoutSalesInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutSalesInput
    connect?: MenuItemWhereUniqueInput
  }

  export type ShiftCreateNestedOneWithoutSalesInput = {
    create?: XOR<ShiftCreateWithoutSalesInput, ShiftUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ShiftCreateOrConnectWithoutSalesInput
    connect?: ShiftWhereUniqueInput
  }

  export type PromoCreateNestedOneWithoutSalesInput = {
    create?: XOR<PromoCreateWithoutSalesInput, PromoUncheckedCreateWithoutSalesInput>
    connectOrCreate?: PromoCreateOrConnectWithoutSalesInput
    connect?: PromoWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutSalesInput = {
    create?: XOR<OrderCreateWithoutSalesInput, OrderUncheckedCreateWithoutSalesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutSalesInput
    connect?: OrderWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MenuItemUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<MenuItemCreateWithoutSalesInput, MenuItemUncheckedCreateWithoutSalesInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutSalesInput
    upsert?: MenuItemUpsertWithoutSalesInput
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutSalesInput, MenuItemUpdateWithoutSalesInput>, MenuItemUncheckedUpdateWithoutSalesInput>
  }

  export type ShiftUpdateOneWithoutSalesNestedInput = {
    create?: XOR<ShiftCreateWithoutSalesInput, ShiftUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ShiftCreateOrConnectWithoutSalesInput
    upsert?: ShiftUpsertWithoutSalesInput
    disconnect?: ShiftWhereInput | boolean
    delete?: ShiftWhereInput | boolean
    connect?: ShiftWhereUniqueInput
    update?: XOR<XOR<ShiftUpdateToOneWithWhereWithoutSalesInput, ShiftUpdateWithoutSalesInput>, ShiftUncheckedUpdateWithoutSalesInput>
  }

  export type PromoUpdateOneWithoutSalesNestedInput = {
    create?: XOR<PromoCreateWithoutSalesInput, PromoUncheckedCreateWithoutSalesInput>
    connectOrCreate?: PromoCreateOrConnectWithoutSalesInput
    upsert?: PromoUpsertWithoutSalesInput
    disconnect?: PromoWhereInput | boolean
    delete?: PromoWhereInput | boolean
    connect?: PromoWhereUniqueInput
    update?: XOR<XOR<PromoUpdateToOneWithWhereWithoutSalesInput, PromoUpdateWithoutSalesInput>, PromoUncheckedUpdateWithoutSalesInput>
  }

  export type OrderUpdateOneWithoutSalesNestedInput = {
    create?: XOR<OrderCreateWithoutSalesInput, OrderUncheckedCreateWithoutSalesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutSalesInput
    upsert?: OrderUpsertWithoutSalesInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutSalesInput, OrderUpdateWithoutSalesInput>, OrderUncheckedUpdateWithoutSalesInput>
  }

  export type SaleCreateNestedManyWithoutOrderInput = {
    create?: XOR<SaleCreateWithoutOrderInput, SaleUncheckedCreateWithoutOrderInput> | SaleCreateWithoutOrderInput[] | SaleUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutOrderInput | SaleCreateOrConnectWithoutOrderInput[]
    createMany?: SaleCreateManyOrderInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<SaleCreateWithoutOrderInput, SaleUncheckedCreateWithoutOrderInput> | SaleCreateWithoutOrderInput[] | SaleUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutOrderInput | SaleCreateOrConnectWithoutOrderInput[]
    createMany?: SaleCreateManyOrderInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUpdateManyWithoutOrderNestedInput = {
    create?: XOR<SaleCreateWithoutOrderInput, SaleUncheckedCreateWithoutOrderInput> | SaleCreateWithoutOrderInput[] | SaleUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutOrderInput | SaleCreateOrConnectWithoutOrderInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutOrderInput | SaleUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: SaleCreateManyOrderInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutOrderInput | SaleUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutOrderInput | SaleUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<SaleCreateWithoutOrderInput, SaleUncheckedCreateWithoutOrderInput> | SaleCreateWithoutOrderInput[] | SaleUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutOrderInput | SaleCreateOrConnectWithoutOrderInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutOrderInput | SaleUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: SaleCreateManyOrderInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutOrderInput | SaleUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutOrderInput | SaleUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleCreateNestedManyWithoutShiftInput = {
    create?: XOR<SaleCreateWithoutShiftInput, SaleUncheckedCreateWithoutShiftInput> | SaleCreateWithoutShiftInput[] | SaleUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutShiftInput | SaleCreateOrConnectWithoutShiftInput[]
    createMany?: SaleCreateManyShiftInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutShiftsInput = {
    create?: XOR<UserCreateWithoutShiftsInput, UserUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShiftsInput
    connect?: UserWhereUniqueInput
  }

  export type SaleUncheckedCreateNestedManyWithoutShiftInput = {
    create?: XOR<SaleCreateWithoutShiftInput, SaleUncheckedCreateWithoutShiftInput> | SaleCreateWithoutShiftInput[] | SaleUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutShiftInput | SaleCreateOrConnectWithoutShiftInput[]
    createMany?: SaleCreateManyShiftInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SaleUpdateManyWithoutShiftNestedInput = {
    create?: XOR<SaleCreateWithoutShiftInput, SaleUncheckedCreateWithoutShiftInput> | SaleCreateWithoutShiftInput[] | SaleUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutShiftInput | SaleCreateOrConnectWithoutShiftInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutShiftInput | SaleUpsertWithWhereUniqueWithoutShiftInput[]
    createMany?: SaleCreateManyShiftInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutShiftInput | SaleUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutShiftInput | SaleUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type UserUpdateOneWithoutShiftsNestedInput = {
    create?: XOR<UserCreateWithoutShiftsInput, UserUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShiftsInput
    upsert?: UserUpsertWithoutShiftsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShiftsInput, UserUpdateWithoutShiftsInput>, UserUncheckedUpdateWithoutShiftsInput>
  }

  export type SaleUncheckedUpdateManyWithoutShiftNestedInput = {
    create?: XOR<SaleCreateWithoutShiftInput, SaleUncheckedCreateWithoutShiftInput> | SaleCreateWithoutShiftInput[] | SaleUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutShiftInput | SaleCreateOrConnectWithoutShiftInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutShiftInput | SaleUpsertWithWhereUniqueWithoutShiftInput[]
    createMany?: SaleCreateManyShiftInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutShiftInput | SaleUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutShiftInput | SaleUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type MaterialCreateNestedOneWithoutLogsInput = {
    create?: XOR<MaterialCreateWithoutLogsInput, MaterialUncheckedCreateWithoutLogsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutLogsInput
    connect?: MaterialWhereUniqueInput
  }

  export type MaterialUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<MaterialCreateWithoutLogsInput, MaterialUncheckedCreateWithoutLogsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutLogsInput
    upsert?: MaterialUpsertWithoutLogsInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutLogsInput, MaterialUpdateWithoutLogsInput>, MaterialUncheckedUpdateWithoutLogsInput>
  }

  export type ShiftCreateNestedManyWithoutUserInput = {
    create?: XOR<ShiftCreateWithoutUserInput, ShiftUncheckedCreateWithoutUserInput> | ShiftCreateWithoutUserInput[] | ShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutUserInput | ShiftCreateOrConnectWithoutUserInput[]
    createMany?: ShiftCreateManyUserInputEnvelope
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type ShiftUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShiftCreateWithoutUserInput, ShiftUncheckedCreateWithoutUserInput> | ShiftCreateWithoutUserInput[] | ShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutUserInput | ShiftCreateOrConnectWithoutUserInput[]
    createMany?: ShiftCreateManyUserInputEnvelope
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type ShiftUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShiftCreateWithoutUserInput, ShiftUncheckedCreateWithoutUserInput> | ShiftCreateWithoutUserInput[] | ShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutUserInput | ShiftCreateOrConnectWithoutUserInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutUserInput | ShiftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShiftCreateManyUserInputEnvelope
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutUserInput | ShiftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutUserInput | ShiftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type ShiftUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShiftCreateWithoutUserInput, ShiftUncheckedCreateWithoutUserInput> | ShiftCreateWithoutUserInput[] | ShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutUserInput | ShiftCreateOrConnectWithoutUserInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutUserInput | ShiftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShiftCreateManyUserInputEnvelope
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutUserInput | ShiftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutUserInput | ShiftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type MaterialCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<MaterialCreateWithoutPurchasesInput, MaterialUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutPurchasesInput
    connect?: MaterialWhereUniqueInput
  }

  export type MaterialUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<MaterialCreateWithoutPurchasesInput, MaterialUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutPurchasesInput
    upsert?: MaterialUpsertWithoutPurchasesInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutPurchasesInput, MaterialUpdateWithoutPurchasesInput>, MaterialUncheckedUpdateWithoutPurchasesInput>
  }

  export type SaleCreateNestedManyWithoutPromoInput = {
    create?: XOR<SaleCreateWithoutPromoInput, SaleUncheckedCreateWithoutPromoInput> | SaleCreateWithoutPromoInput[] | SaleUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutPromoInput | SaleCreateOrConnectWithoutPromoInput[]
    createMany?: SaleCreateManyPromoInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutPromoInput = {
    create?: XOR<SaleCreateWithoutPromoInput, SaleUncheckedCreateWithoutPromoInput> | SaleCreateWithoutPromoInput[] | SaleUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutPromoInput | SaleCreateOrConnectWithoutPromoInput[]
    createMany?: SaleCreateManyPromoInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUpdateManyWithoutPromoNestedInput = {
    create?: XOR<SaleCreateWithoutPromoInput, SaleUncheckedCreateWithoutPromoInput> | SaleCreateWithoutPromoInput[] | SaleUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutPromoInput | SaleCreateOrConnectWithoutPromoInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutPromoInput | SaleUpsertWithWhereUniqueWithoutPromoInput[]
    createMany?: SaleCreateManyPromoInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutPromoInput | SaleUpdateWithWhereUniqueWithoutPromoInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutPromoInput | SaleUpdateManyWithWhereWithoutPromoInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutPromoNestedInput = {
    create?: XOR<SaleCreateWithoutPromoInput, SaleUncheckedCreateWithoutPromoInput> | SaleCreateWithoutPromoInput[] | SaleUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutPromoInput | SaleCreateOrConnectWithoutPromoInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutPromoInput | SaleUpsertWithWhereUniqueWithoutPromoInput[]
    createMany?: SaleCreateManyPromoInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutPromoInput | SaleUpdateWithWhereUniqueWithoutPromoInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutPromoInput | SaleUpdateManyWithWhereWithoutPromoInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type RaffleWinnerCreateNestedManyWithoutRaffleInput = {
    create?: XOR<RaffleWinnerCreateWithoutRaffleInput, RaffleWinnerUncheckedCreateWithoutRaffleInput> | RaffleWinnerCreateWithoutRaffleInput[] | RaffleWinnerUncheckedCreateWithoutRaffleInput[]
    connectOrCreate?: RaffleWinnerCreateOrConnectWithoutRaffleInput | RaffleWinnerCreateOrConnectWithoutRaffleInput[]
    createMany?: RaffleWinnerCreateManyRaffleInputEnvelope
    connect?: RaffleWinnerWhereUniqueInput | RaffleWinnerWhereUniqueInput[]
  }

  export type RaffleWinnerUncheckedCreateNestedManyWithoutRaffleInput = {
    create?: XOR<RaffleWinnerCreateWithoutRaffleInput, RaffleWinnerUncheckedCreateWithoutRaffleInput> | RaffleWinnerCreateWithoutRaffleInput[] | RaffleWinnerUncheckedCreateWithoutRaffleInput[]
    connectOrCreate?: RaffleWinnerCreateOrConnectWithoutRaffleInput | RaffleWinnerCreateOrConnectWithoutRaffleInput[]
    createMany?: RaffleWinnerCreateManyRaffleInputEnvelope
    connect?: RaffleWinnerWhereUniqueInput | RaffleWinnerWhereUniqueInput[]
  }

  export type RaffleWinnerUpdateManyWithoutRaffleNestedInput = {
    create?: XOR<RaffleWinnerCreateWithoutRaffleInput, RaffleWinnerUncheckedCreateWithoutRaffleInput> | RaffleWinnerCreateWithoutRaffleInput[] | RaffleWinnerUncheckedCreateWithoutRaffleInput[]
    connectOrCreate?: RaffleWinnerCreateOrConnectWithoutRaffleInput | RaffleWinnerCreateOrConnectWithoutRaffleInput[]
    upsert?: RaffleWinnerUpsertWithWhereUniqueWithoutRaffleInput | RaffleWinnerUpsertWithWhereUniqueWithoutRaffleInput[]
    createMany?: RaffleWinnerCreateManyRaffleInputEnvelope
    set?: RaffleWinnerWhereUniqueInput | RaffleWinnerWhereUniqueInput[]
    disconnect?: RaffleWinnerWhereUniqueInput | RaffleWinnerWhereUniqueInput[]
    delete?: RaffleWinnerWhereUniqueInput | RaffleWinnerWhereUniqueInput[]
    connect?: RaffleWinnerWhereUniqueInput | RaffleWinnerWhereUniqueInput[]
    update?: RaffleWinnerUpdateWithWhereUniqueWithoutRaffleInput | RaffleWinnerUpdateWithWhereUniqueWithoutRaffleInput[]
    updateMany?: RaffleWinnerUpdateManyWithWhereWithoutRaffleInput | RaffleWinnerUpdateManyWithWhereWithoutRaffleInput[]
    deleteMany?: RaffleWinnerScalarWhereInput | RaffleWinnerScalarWhereInput[]
  }

  export type RaffleWinnerUncheckedUpdateManyWithoutRaffleNestedInput = {
    create?: XOR<RaffleWinnerCreateWithoutRaffleInput, RaffleWinnerUncheckedCreateWithoutRaffleInput> | RaffleWinnerCreateWithoutRaffleInput[] | RaffleWinnerUncheckedCreateWithoutRaffleInput[]
    connectOrCreate?: RaffleWinnerCreateOrConnectWithoutRaffleInput | RaffleWinnerCreateOrConnectWithoutRaffleInput[]
    upsert?: RaffleWinnerUpsertWithWhereUniqueWithoutRaffleInput | RaffleWinnerUpsertWithWhereUniqueWithoutRaffleInput[]
    createMany?: RaffleWinnerCreateManyRaffleInputEnvelope
    set?: RaffleWinnerWhereUniqueInput | RaffleWinnerWhereUniqueInput[]
    disconnect?: RaffleWinnerWhereUniqueInput | RaffleWinnerWhereUniqueInput[]
    delete?: RaffleWinnerWhereUniqueInput | RaffleWinnerWhereUniqueInput[]
    connect?: RaffleWinnerWhereUniqueInput | RaffleWinnerWhereUniqueInput[]
    update?: RaffleWinnerUpdateWithWhereUniqueWithoutRaffleInput | RaffleWinnerUpdateWithWhereUniqueWithoutRaffleInput[]
    updateMany?: RaffleWinnerUpdateManyWithWhereWithoutRaffleInput | RaffleWinnerUpdateManyWithWhereWithoutRaffleInput[]
    deleteMany?: RaffleWinnerScalarWhereInput | RaffleWinnerScalarWhereInput[]
  }

  export type RaffleCreateNestedOneWithoutWinnersInput = {
    create?: XOR<RaffleCreateWithoutWinnersInput, RaffleUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: RaffleCreateOrConnectWithoutWinnersInput
    connect?: RaffleWhereUniqueInput
  }

  export type RaffleUpdateOneRequiredWithoutWinnersNestedInput = {
    create?: XOR<RaffleCreateWithoutWinnersInput, RaffleUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: RaffleCreateOrConnectWithoutWinnersInput
    upsert?: RaffleUpsertWithoutWinnersInput
    connect?: RaffleWhereUniqueInput
    update?: XOR<XOR<RaffleUpdateToOneWithWhereWithoutWinnersInput, RaffleUpdateWithoutWinnersInput>, RaffleUncheckedUpdateWithoutWinnersInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MaterialCreateWithoutMenuItemsInput = {
    name: string
    unit: string
    stock?: number
    costPerUnit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minStock?: number
    logs?: MaterialLogCreateNestedManyWithoutMaterialInput
    purchases?: MaterialPurchaseCreateNestedManyWithoutMaterialInput
    recipes?: MenuItemMaterialCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutMenuItemsInput = {
    id?: number
    name: string
    unit: string
    stock?: number
    costPerUnit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minStock?: number
    logs?: MaterialLogUncheckedCreateNestedManyWithoutMaterialInput
    purchases?: MaterialPurchaseUncheckedCreateNestedManyWithoutMaterialInput
    recipes?: MenuItemMaterialUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutMenuItemsInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutMenuItemsInput, MaterialUncheckedCreateWithoutMenuItemsInput>
  }

  export type MenuItemMaterialCreateWithoutMenuItemInput = {
    quantity: number
    createdAt?: Date | string
    material: MaterialCreateNestedOneWithoutRecipesInput
  }

  export type MenuItemMaterialUncheckedCreateWithoutMenuItemInput = {
    id?: number
    materialId: number
    quantity: number
    createdAt?: Date | string
  }

  export type MenuItemMaterialCreateOrConnectWithoutMenuItemInput = {
    where: MenuItemMaterialWhereUniqueInput
    create: XOR<MenuItemMaterialCreateWithoutMenuItemInput, MenuItemMaterialUncheckedCreateWithoutMenuItemInput>
  }

  export type MenuItemMaterialCreateManyMenuItemInputEnvelope = {
    data: MenuItemMaterialCreateManyMenuItemInput | MenuItemMaterialCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type SaleCreateWithoutMenuItemInput = {
    date?: Date | string
    qty: number
    priceSnapshot: number
    costSnapshot?: number
    total: number
    paymentMethod: string
    createdAt?: Date | string
    transactionId?: string | null
    discountAmount?: number
    variants?: string | null
    shift?: ShiftCreateNestedOneWithoutSalesInput
    promo?: PromoCreateNestedOneWithoutSalesInput
    order?: OrderCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutMenuItemInput = {
    id?: number
    date?: Date | string
    qty: number
    priceSnapshot: number
    costSnapshot?: number
    total: number
    paymentMethod: string
    createdAt?: Date | string
    shiftId?: number | null
    transactionId?: string | null
    discountAmount?: number
    promoId?: number | null
    variants?: string | null
    orderId?: number | null
  }

  export type SaleCreateOrConnectWithoutMenuItemInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutMenuItemInput, SaleUncheckedCreateWithoutMenuItemInput>
  }

  export type SaleCreateManyMenuItemInputEnvelope = {
    data: SaleCreateManyMenuItemInput | SaleCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type MaterialUpsertWithoutMenuItemsInput = {
    update: XOR<MaterialUpdateWithoutMenuItemsInput, MaterialUncheckedUpdateWithoutMenuItemsInput>
    create: XOR<MaterialCreateWithoutMenuItemsInput, MaterialUncheckedCreateWithoutMenuItemsInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutMenuItemsInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutMenuItemsInput, MaterialUncheckedUpdateWithoutMenuItemsInput>
  }

  export type MaterialUpdateWithoutMenuItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: FloatFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minStock?: FloatFieldUpdateOperationsInput | number
    logs?: MaterialLogUpdateManyWithoutMaterialNestedInput
    purchases?: MaterialPurchaseUpdateManyWithoutMaterialNestedInput
    recipes?: MenuItemMaterialUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutMenuItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: FloatFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minStock?: FloatFieldUpdateOperationsInput | number
    logs?: MaterialLogUncheckedUpdateManyWithoutMaterialNestedInput
    purchases?: MaterialPurchaseUncheckedUpdateManyWithoutMaterialNestedInput
    recipes?: MenuItemMaterialUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MenuItemMaterialUpsertWithWhereUniqueWithoutMenuItemInput = {
    where: MenuItemMaterialWhereUniqueInput
    update: XOR<MenuItemMaterialUpdateWithoutMenuItemInput, MenuItemMaterialUncheckedUpdateWithoutMenuItemInput>
    create: XOR<MenuItemMaterialCreateWithoutMenuItemInput, MenuItemMaterialUncheckedCreateWithoutMenuItemInput>
  }

  export type MenuItemMaterialUpdateWithWhereUniqueWithoutMenuItemInput = {
    where: MenuItemMaterialWhereUniqueInput
    data: XOR<MenuItemMaterialUpdateWithoutMenuItemInput, MenuItemMaterialUncheckedUpdateWithoutMenuItemInput>
  }

  export type MenuItemMaterialUpdateManyWithWhereWithoutMenuItemInput = {
    where: MenuItemMaterialScalarWhereInput
    data: XOR<MenuItemMaterialUpdateManyMutationInput, MenuItemMaterialUncheckedUpdateManyWithoutMenuItemInput>
  }

  export type MenuItemMaterialScalarWhereInput = {
    AND?: MenuItemMaterialScalarWhereInput | MenuItemMaterialScalarWhereInput[]
    OR?: MenuItemMaterialScalarWhereInput[]
    NOT?: MenuItemMaterialScalarWhereInput | MenuItemMaterialScalarWhereInput[]
    id?: IntFilter<"MenuItemMaterial"> | number
    menuItemId?: IntFilter<"MenuItemMaterial"> | number
    materialId?: IntFilter<"MenuItemMaterial"> | number
    quantity?: FloatFilter<"MenuItemMaterial"> | number
    createdAt?: DateTimeFilter<"MenuItemMaterial"> | Date | string
  }

  export type SaleUpsertWithWhereUniqueWithoutMenuItemInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutMenuItemInput, SaleUncheckedUpdateWithoutMenuItemInput>
    create: XOR<SaleCreateWithoutMenuItemInput, SaleUncheckedCreateWithoutMenuItemInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutMenuItemInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutMenuItemInput, SaleUncheckedUpdateWithoutMenuItemInput>
  }

  export type SaleUpdateManyWithWhereWithoutMenuItemInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutMenuItemInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    id?: IntFilter<"Sale"> | number
    date?: DateTimeFilter<"Sale"> | Date | string
    menuItemId?: IntFilter<"Sale"> | number
    qty?: IntFilter<"Sale"> | number
    priceSnapshot?: FloatFilter<"Sale"> | number
    costSnapshot?: FloatFilter<"Sale"> | number
    total?: FloatFilter<"Sale"> | number
    paymentMethod?: StringFilter<"Sale"> | string
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    shiftId?: IntNullableFilter<"Sale"> | number | null
    transactionId?: StringNullableFilter<"Sale"> | string | null
    discountAmount?: FloatFilter<"Sale"> | number
    promoId?: IntNullableFilter<"Sale"> | number | null
    variants?: StringNullableFilter<"Sale"> | string | null
    orderId?: IntNullableFilter<"Sale"> | number | null
  }

  export type MaterialLogCreateWithoutMaterialInput = {
    type: string
    quantity: number
    balanceAfter: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type MaterialLogUncheckedCreateWithoutMaterialInput = {
    id?: number
    type: string
    quantity: number
    balanceAfter: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type MaterialLogCreateOrConnectWithoutMaterialInput = {
    where: MaterialLogWhereUniqueInput
    create: XOR<MaterialLogCreateWithoutMaterialInput, MaterialLogUncheckedCreateWithoutMaterialInput>
  }

  export type MaterialLogCreateManyMaterialInputEnvelope = {
    data: MaterialLogCreateManyMaterialInput | MaterialLogCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type MaterialPurchaseCreateWithoutMaterialInput = {
    quantity: number
    pricePerUnit: number
    totalCost: number
    supplier?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type MaterialPurchaseUncheckedCreateWithoutMaterialInput = {
    id?: number
    quantity: number
    pricePerUnit: number
    totalCost: number
    supplier?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type MaterialPurchaseCreateOrConnectWithoutMaterialInput = {
    where: MaterialPurchaseWhereUniqueInput
    create: XOR<MaterialPurchaseCreateWithoutMaterialInput, MaterialPurchaseUncheckedCreateWithoutMaterialInput>
  }

  export type MaterialPurchaseCreateManyMaterialInputEnvelope = {
    data: MaterialPurchaseCreateManyMaterialInput | MaterialPurchaseCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type MenuItemMaterialCreateWithoutMaterialInput = {
    quantity: number
    createdAt?: Date | string
    menuItem: MenuItemCreateNestedOneWithoutRecipesInput
  }

  export type MenuItemMaterialUncheckedCreateWithoutMaterialInput = {
    id?: number
    menuItemId: number
    quantity: number
    createdAt?: Date | string
  }

  export type MenuItemMaterialCreateOrConnectWithoutMaterialInput = {
    where: MenuItemMaterialWhereUniqueInput
    create: XOR<MenuItemMaterialCreateWithoutMaterialInput, MenuItemMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type MenuItemMaterialCreateManyMaterialInputEnvelope = {
    data: MenuItemMaterialCreateManyMaterialInput | MenuItemMaterialCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type MenuItemCreateWithoutMaterialInput = {
    name: string
    category?: string
    price: number
    isRetail?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recipes?: MenuItemMaterialCreateNestedManyWithoutMenuItemInput
    sales?: SaleCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutMaterialInput = {
    id?: number
    name: string
    category?: string
    price: number
    isRetail?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recipes?: MenuItemMaterialUncheckedCreateNestedManyWithoutMenuItemInput
    sales?: SaleUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutMaterialInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutMaterialInput, MenuItemUncheckedCreateWithoutMaterialInput>
  }

  export type MenuItemCreateManyMaterialInputEnvelope = {
    data: MenuItemCreateManyMaterialInput | MenuItemCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type MaterialLogUpsertWithWhereUniqueWithoutMaterialInput = {
    where: MaterialLogWhereUniqueInput
    update: XOR<MaterialLogUpdateWithoutMaterialInput, MaterialLogUncheckedUpdateWithoutMaterialInput>
    create: XOR<MaterialLogCreateWithoutMaterialInput, MaterialLogUncheckedCreateWithoutMaterialInput>
  }

  export type MaterialLogUpdateWithWhereUniqueWithoutMaterialInput = {
    where: MaterialLogWhereUniqueInput
    data: XOR<MaterialLogUpdateWithoutMaterialInput, MaterialLogUncheckedUpdateWithoutMaterialInput>
  }

  export type MaterialLogUpdateManyWithWhereWithoutMaterialInput = {
    where: MaterialLogScalarWhereInput
    data: XOR<MaterialLogUpdateManyMutationInput, MaterialLogUncheckedUpdateManyWithoutMaterialInput>
  }

  export type MaterialLogScalarWhereInput = {
    AND?: MaterialLogScalarWhereInput | MaterialLogScalarWhereInput[]
    OR?: MaterialLogScalarWhereInput[]
    NOT?: MaterialLogScalarWhereInput | MaterialLogScalarWhereInput[]
    id?: IntFilter<"MaterialLog"> | number
    materialId?: IntFilter<"MaterialLog"> | number
    type?: StringFilter<"MaterialLog"> | string
    quantity?: FloatFilter<"MaterialLog"> | number
    balanceAfter?: FloatFilter<"MaterialLog"> | number
    reason?: StringNullableFilter<"MaterialLog"> | string | null
    createdAt?: DateTimeFilter<"MaterialLog"> | Date | string
  }

  export type MaterialPurchaseUpsertWithWhereUniqueWithoutMaterialInput = {
    where: MaterialPurchaseWhereUniqueInput
    update: XOR<MaterialPurchaseUpdateWithoutMaterialInput, MaterialPurchaseUncheckedUpdateWithoutMaterialInput>
    create: XOR<MaterialPurchaseCreateWithoutMaterialInput, MaterialPurchaseUncheckedCreateWithoutMaterialInput>
  }

  export type MaterialPurchaseUpdateWithWhereUniqueWithoutMaterialInput = {
    where: MaterialPurchaseWhereUniqueInput
    data: XOR<MaterialPurchaseUpdateWithoutMaterialInput, MaterialPurchaseUncheckedUpdateWithoutMaterialInput>
  }

  export type MaterialPurchaseUpdateManyWithWhereWithoutMaterialInput = {
    where: MaterialPurchaseScalarWhereInput
    data: XOR<MaterialPurchaseUpdateManyMutationInput, MaterialPurchaseUncheckedUpdateManyWithoutMaterialInput>
  }

  export type MaterialPurchaseScalarWhereInput = {
    AND?: MaterialPurchaseScalarWhereInput | MaterialPurchaseScalarWhereInput[]
    OR?: MaterialPurchaseScalarWhereInput[]
    NOT?: MaterialPurchaseScalarWhereInput | MaterialPurchaseScalarWhereInput[]
    id?: IntFilter<"MaterialPurchase"> | number
    materialId?: IntFilter<"MaterialPurchase"> | number
    quantity?: FloatFilter<"MaterialPurchase"> | number
    pricePerUnit?: FloatFilter<"MaterialPurchase"> | number
    totalCost?: FloatFilter<"MaterialPurchase"> | number
    supplier?: StringNullableFilter<"MaterialPurchase"> | string | null
    date?: DateTimeFilter<"MaterialPurchase"> | Date | string
    createdAt?: DateTimeFilter<"MaterialPurchase"> | Date | string
  }

  export type MenuItemMaterialUpsertWithWhereUniqueWithoutMaterialInput = {
    where: MenuItemMaterialWhereUniqueInput
    update: XOR<MenuItemMaterialUpdateWithoutMaterialInput, MenuItemMaterialUncheckedUpdateWithoutMaterialInput>
    create: XOR<MenuItemMaterialCreateWithoutMaterialInput, MenuItemMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type MenuItemMaterialUpdateWithWhereUniqueWithoutMaterialInput = {
    where: MenuItemMaterialWhereUniqueInput
    data: XOR<MenuItemMaterialUpdateWithoutMaterialInput, MenuItemMaterialUncheckedUpdateWithoutMaterialInput>
  }

  export type MenuItemMaterialUpdateManyWithWhereWithoutMaterialInput = {
    where: MenuItemMaterialScalarWhereInput
    data: XOR<MenuItemMaterialUpdateManyMutationInput, MenuItemMaterialUncheckedUpdateManyWithoutMaterialInput>
  }

  export type MenuItemUpsertWithWhereUniqueWithoutMaterialInput = {
    where: MenuItemWhereUniqueInput
    update: XOR<MenuItemUpdateWithoutMaterialInput, MenuItemUncheckedUpdateWithoutMaterialInput>
    create: XOR<MenuItemCreateWithoutMaterialInput, MenuItemUncheckedCreateWithoutMaterialInput>
  }

  export type MenuItemUpdateWithWhereUniqueWithoutMaterialInput = {
    where: MenuItemWhereUniqueInput
    data: XOR<MenuItemUpdateWithoutMaterialInput, MenuItemUncheckedUpdateWithoutMaterialInput>
  }

  export type MenuItemUpdateManyWithWhereWithoutMaterialInput = {
    where: MenuItemScalarWhereInput
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyWithoutMaterialInput>
  }

  export type MenuItemScalarWhereInput = {
    AND?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    OR?: MenuItemScalarWhereInput[]
    NOT?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    id?: IntFilter<"MenuItem"> | number
    name?: StringFilter<"MenuItem"> | string
    category?: StringFilter<"MenuItem"> | string
    price?: FloatFilter<"MenuItem"> | number
    isRetail?: BoolFilter<"MenuItem"> | boolean
    materialId?: IntNullableFilter<"MenuItem"> | number | null
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
  }

  export type MaterialCreateWithoutRecipesInput = {
    name: string
    unit: string
    stock?: number
    costPerUnit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minStock?: number
    logs?: MaterialLogCreateNestedManyWithoutMaterialInput
    purchases?: MaterialPurchaseCreateNestedManyWithoutMaterialInput
    menuItems?: MenuItemCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutRecipesInput = {
    id?: number
    name: string
    unit: string
    stock?: number
    costPerUnit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minStock?: number
    logs?: MaterialLogUncheckedCreateNestedManyWithoutMaterialInput
    purchases?: MaterialPurchaseUncheckedCreateNestedManyWithoutMaterialInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutRecipesInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutRecipesInput, MaterialUncheckedCreateWithoutRecipesInput>
  }

  export type MenuItemCreateWithoutRecipesInput = {
    name: string
    category?: string
    price: number
    isRetail?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    material?: MaterialCreateNestedOneWithoutMenuItemsInput
    sales?: SaleCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutRecipesInput = {
    id?: number
    name: string
    category?: string
    price: number
    isRetail?: boolean
    materialId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutRecipesInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutRecipesInput, MenuItemUncheckedCreateWithoutRecipesInput>
  }

  export type MaterialUpsertWithoutRecipesInput = {
    update: XOR<MaterialUpdateWithoutRecipesInput, MaterialUncheckedUpdateWithoutRecipesInput>
    create: XOR<MaterialCreateWithoutRecipesInput, MaterialUncheckedCreateWithoutRecipesInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutRecipesInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutRecipesInput, MaterialUncheckedUpdateWithoutRecipesInput>
  }

  export type MaterialUpdateWithoutRecipesInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: FloatFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minStock?: FloatFieldUpdateOperationsInput | number
    logs?: MaterialLogUpdateManyWithoutMaterialNestedInput
    purchases?: MaterialPurchaseUpdateManyWithoutMaterialNestedInput
    menuItems?: MenuItemUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutRecipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: FloatFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minStock?: FloatFieldUpdateOperationsInput | number
    logs?: MaterialLogUncheckedUpdateManyWithoutMaterialNestedInput
    purchases?: MaterialPurchaseUncheckedUpdateManyWithoutMaterialNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MenuItemUpsertWithoutRecipesInput = {
    update: XOR<MenuItemUpdateWithoutRecipesInput, MenuItemUncheckedUpdateWithoutRecipesInput>
    create: XOR<MenuItemCreateWithoutRecipesInput, MenuItemUncheckedCreateWithoutRecipesInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutRecipesInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutRecipesInput, MenuItemUncheckedUpdateWithoutRecipesInput>
  }

  export type MenuItemUpdateWithoutRecipesInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isRetail?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneWithoutMenuItemsNestedInput
    sales?: SaleUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutRecipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isRetail?: BoolFieldUpdateOperationsInput | boolean
    materialId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemCreateWithoutSalesInput = {
    name: string
    category?: string
    price: number
    isRetail?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    material?: MaterialCreateNestedOneWithoutMenuItemsInput
    recipes?: MenuItemMaterialCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutSalesInput = {
    id?: number
    name: string
    category?: string
    price: number
    isRetail?: boolean
    materialId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipes?: MenuItemMaterialUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutSalesInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutSalesInput, MenuItemUncheckedCreateWithoutSalesInput>
  }

  export type ShiftCreateWithoutSalesInput = {
    startTime?: Date | string
    endTime?: Date | string | null
    openingCash?: number
    closingCash?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutShiftsInput
  }

  export type ShiftUncheckedCreateWithoutSalesInput = {
    id?: number
    userId?: number | null
    startTime?: Date | string
    endTime?: Date | string | null
    openingCash?: number
    closingCash?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftCreateOrConnectWithoutSalesInput = {
    where: ShiftWhereUniqueInput
    create: XOR<ShiftCreateWithoutSalesInput, ShiftUncheckedCreateWithoutSalesInput>
  }

  export type PromoCreateWithoutSalesInput = {
    name: string
    type: string
    value: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromoUncheckedCreateWithoutSalesInput = {
    id?: number
    name: string
    type: string
    value: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromoCreateOrConnectWithoutSalesInput = {
    where: PromoWhereUniqueInput
    create: XOR<PromoCreateWithoutSalesInput, PromoUncheckedCreateWithoutSalesInput>
  }

  export type OrderCreateWithoutSalesInput = {
    transactionId: string
    customerName?: string | null
    tableNumber?: string | null
    status?: string
    totalAmount: number
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUncheckedCreateWithoutSalesInput = {
    id?: number
    transactionId: string
    customerName?: string | null
    tableNumber?: string | null
    status?: string
    totalAmount: number
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutSalesInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutSalesInput, OrderUncheckedCreateWithoutSalesInput>
  }

  export type MenuItemUpsertWithoutSalesInput = {
    update: XOR<MenuItemUpdateWithoutSalesInput, MenuItemUncheckedUpdateWithoutSalesInput>
    create: XOR<MenuItemCreateWithoutSalesInput, MenuItemUncheckedCreateWithoutSalesInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutSalesInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutSalesInput, MenuItemUncheckedUpdateWithoutSalesInput>
  }

  export type MenuItemUpdateWithoutSalesInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isRetail?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneWithoutMenuItemsNestedInput
    recipes?: MenuItemMaterialUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isRetail?: BoolFieldUpdateOperationsInput | boolean
    materialId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: MenuItemMaterialUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type ShiftUpsertWithoutSalesInput = {
    update: XOR<ShiftUpdateWithoutSalesInput, ShiftUncheckedUpdateWithoutSalesInput>
    create: XOR<ShiftCreateWithoutSalesInput, ShiftUncheckedCreateWithoutSalesInput>
    where?: ShiftWhereInput
  }

  export type ShiftUpdateToOneWithWhereWithoutSalesInput = {
    where?: ShiftWhereInput
    data: XOR<ShiftUpdateWithoutSalesInput, ShiftUncheckedUpdateWithoutSalesInput>
  }

  export type ShiftUpdateWithoutSalesInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingCash?: FloatFieldUpdateOperationsInput | number
    closingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutShiftsNestedInput
  }

  export type ShiftUncheckedUpdateWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingCash?: FloatFieldUpdateOperationsInput | number
    closingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoUpsertWithoutSalesInput = {
    update: XOR<PromoUpdateWithoutSalesInput, PromoUncheckedUpdateWithoutSalesInput>
    create: XOR<PromoCreateWithoutSalesInput, PromoUncheckedCreateWithoutSalesInput>
    where?: PromoWhereInput
  }

  export type PromoUpdateToOneWithWhereWithoutSalesInput = {
    where?: PromoWhereInput
    data: XOR<PromoUpdateWithoutSalesInput, PromoUncheckedUpdateWithoutSalesInput>
  }

  export type PromoUpdateWithoutSalesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoUncheckedUpdateWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpsertWithoutSalesInput = {
    update: XOR<OrderUpdateWithoutSalesInput, OrderUncheckedUpdateWithoutSalesInput>
    create: XOR<OrderCreateWithoutSalesInput, OrderUncheckedCreateWithoutSalesInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutSalesInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutSalesInput, OrderUncheckedUpdateWithoutSalesInput>
  }

  export type OrderUpdateWithoutSalesInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    tableNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    tableNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateWithoutOrderInput = {
    date?: Date | string
    qty: number
    priceSnapshot: number
    costSnapshot?: number
    total: number
    paymentMethod: string
    createdAt?: Date | string
    transactionId?: string | null
    discountAmount?: number
    variants?: string | null
    menuItem: MenuItemCreateNestedOneWithoutSalesInput
    shift?: ShiftCreateNestedOneWithoutSalesInput
    promo?: PromoCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutOrderInput = {
    id?: number
    date?: Date | string
    menuItemId: number
    qty: number
    priceSnapshot: number
    costSnapshot?: number
    total: number
    paymentMethod: string
    createdAt?: Date | string
    shiftId?: number | null
    transactionId?: string | null
    discountAmount?: number
    promoId?: number | null
    variants?: string | null
  }

  export type SaleCreateOrConnectWithoutOrderInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutOrderInput, SaleUncheckedCreateWithoutOrderInput>
  }

  export type SaleCreateManyOrderInputEnvelope = {
    data: SaleCreateManyOrderInput | SaleCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type SaleUpsertWithWhereUniqueWithoutOrderInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutOrderInput, SaleUncheckedUpdateWithoutOrderInput>
    create: XOR<SaleCreateWithoutOrderInput, SaleUncheckedCreateWithoutOrderInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutOrderInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutOrderInput, SaleUncheckedUpdateWithoutOrderInput>
  }

  export type SaleUpdateManyWithWhereWithoutOrderInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutOrderInput>
  }

  export type SaleCreateWithoutShiftInput = {
    date?: Date | string
    qty: number
    priceSnapshot: number
    costSnapshot?: number
    total: number
    paymentMethod: string
    createdAt?: Date | string
    transactionId?: string | null
    discountAmount?: number
    variants?: string | null
    menuItem: MenuItemCreateNestedOneWithoutSalesInput
    promo?: PromoCreateNestedOneWithoutSalesInput
    order?: OrderCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutShiftInput = {
    id?: number
    date?: Date | string
    menuItemId: number
    qty: number
    priceSnapshot: number
    costSnapshot?: number
    total: number
    paymentMethod: string
    createdAt?: Date | string
    transactionId?: string | null
    discountAmount?: number
    promoId?: number | null
    variants?: string | null
    orderId?: number | null
  }

  export type SaleCreateOrConnectWithoutShiftInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutShiftInput, SaleUncheckedCreateWithoutShiftInput>
  }

  export type SaleCreateManyShiftInputEnvelope = {
    data: SaleCreateManyShiftInput | SaleCreateManyShiftInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutShiftsInput = {
    name: string
    pin: string
    role: string
    createdAt?: Date | string
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShiftsInput = {
    id?: number
    name: string
    pin: string
    role: string
    createdAt?: Date | string
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShiftsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShiftsInput, UserUncheckedCreateWithoutShiftsInput>
  }

  export type SaleUpsertWithWhereUniqueWithoutShiftInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutShiftInput, SaleUncheckedUpdateWithoutShiftInput>
    create: XOR<SaleCreateWithoutShiftInput, SaleUncheckedCreateWithoutShiftInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutShiftInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutShiftInput, SaleUncheckedUpdateWithoutShiftInput>
  }

  export type SaleUpdateManyWithWhereWithoutShiftInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutShiftInput>
  }

  export type UserUpsertWithoutShiftsInput = {
    update: XOR<UserUpdateWithoutShiftsInput, UserUncheckedUpdateWithoutShiftsInput>
    create: XOR<UserCreateWithoutShiftsInput, UserUncheckedCreateWithoutShiftsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShiftsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShiftsInput, UserUncheckedUpdateWithoutShiftsInput>
  }

  export type UserUpdateWithoutShiftsInput = {
    name?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShiftsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MaterialCreateWithoutLogsInput = {
    name: string
    unit: string
    stock?: number
    costPerUnit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minStock?: number
    purchases?: MaterialPurchaseCreateNestedManyWithoutMaterialInput
    recipes?: MenuItemMaterialCreateNestedManyWithoutMaterialInput
    menuItems?: MenuItemCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutLogsInput = {
    id?: number
    name: string
    unit: string
    stock?: number
    costPerUnit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minStock?: number
    purchases?: MaterialPurchaseUncheckedCreateNestedManyWithoutMaterialInput
    recipes?: MenuItemMaterialUncheckedCreateNestedManyWithoutMaterialInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutLogsInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutLogsInput, MaterialUncheckedCreateWithoutLogsInput>
  }

  export type MaterialUpsertWithoutLogsInput = {
    update: XOR<MaterialUpdateWithoutLogsInput, MaterialUncheckedUpdateWithoutLogsInput>
    create: XOR<MaterialCreateWithoutLogsInput, MaterialUncheckedCreateWithoutLogsInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutLogsInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutLogsInput, MaterialUncheckedUpdateWithoutLogsInput>
  }

  export type MaterialUpdateWithoutLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: FloatFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minStock?: FloatFieldUpdateOperationsInput | number
    purchases?: MaterialPurchaseUpdateManyWithoutMaterialNestedInput
    recipes?: MenuItemMaterialUpdateManyWithoutMaterialNestedInput
    menuItems?: MenuItemUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: FloatFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minStock?: FloatFieldUpdateOperationsInput | number
    purchases?: MaterialPurchaseUncheckedUpdateManyWithoutMaterialNestedInput
    recipes?: MenuItemMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type ShiftCreateWithoutUserInput = {
    startTime?: Date | string
    endTime?: Date | string | null
    openingCash?: number
    closingCash?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleCreateNestedManyWithoutShiftInput
  }

  export type ShiftUncheckedCreateWithoutUserInput = {
    id?: number
    startTime?: Date | string
    endTime?: Date | string | null
    openingCash?: number
    closingCash?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftCreateOrConnectWithoutUserInput = {
    where: ShiftWhereUniqueInput
    create: XOR<ShiftCreateWithoutUserInput, ShiftUncheckedCreateWithoutUserInput>
  }

  export type ShiftCreateManyUserInputEnvelope = {
    data: ShiftCreateManyUserInput | ShiftCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutUserInput = {
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: number
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShiftUpsertWithWhereUniqueWithoutUserInput = {
    where: ShiftWhereUniqueInput
    update: XOR<ShiftUpdateWithoutUserInput, ShiftUncheckedUpdateWithoutUserInput>
    create: XOR<ShiftCreateWithoutUserInput, ShiftUncheckedCreateWithoutUserInput>
  }

  export type ShiftUpdateWithWhereUniqueWithoutUserInput = {
    where: ShiftWhereUniqueInput
    data: XOR<ShiftUpdateWithoutUserInput, ShiftUncheckedUpdateWithoutUserInput>
  }

  export type ShiftUpdateManyWithWhereWithoutUserInput = {
    where: ShiftScalarWhereInput
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyWithoutUserInput>
  }

  export type ShiftScalarWhereInput = {
    AND?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
    OR?: ShiftScalarWhereInput[]
    NOT?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
    id?: IntFilter<"Shift"> | number
    userId?: IntNullableFilter<"Shift"> | number | null
    startTime?: DateTimeFilter<"Shift"> | Date | string
    endTime?: DateTimeNullableFilter<"Shift"> | Date | string | null
    openingCash?: FloatFilter<"Shift"> | number
    closingCash?: FloatNullableFilter<"Shift"> | number | null
    status?: StringFilter<"Shift"> | string
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: IntFilter<"ActivityLog"> | number
    userId?: IntNullableFilter<"ActivityLog"> | number | null
    action?: StringFilter<"ActivityLog"> | string
    entity?: StringFilter<"ActivityLog"> | string
    entityId?: StringNullableFilter<"ActivityLog"> | string | null
    description?: StringNullableFilter<"ActivityLog"> | string | null
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type MaterialCreateWithoutPurchasesInput = {
    name: string
    unit: string
    stock?: number
    costPerUnit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minStock?: number
    logs?: MaterialLogCreateNestedManyWithoutMaterialInput
    recipes?: MenuItemMaterialCreateNestedManyWithoutMaterialInput
    menuItems?: MenuItemCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutPurchasesInput = {
    id?: number
    name: string
    unit: string
    stock?: number
    costPerUnit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minStock?: number
    logs?: MaterialLogUncheckedCreateNestedManyWithoutMaterialInput
    recipes?: MenuItemMaterialUncheckedCreateNestedManyWithoutMaterialInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutPurchasesInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutPurchasesInput, MaterialUncheckedCreateWithoutPurchasesInput>
  }

  export type MaterialUpsertWithoutPurchasesInput = {
    update: XOR<MaterialUpdateWithoutPurchasesInput, MaterialUncheckedUpdateWithoutPurchasesInput>
    create: XOR<MaterialCreateWithoutPurchasesInput, MaterialUncheckedCreateWithoutPurchasesInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutPurchasesInput, MaterialUncheckedUpdateWithoutPurchasesInput>
  }

  export type MaterialUpdateWithoutPurchasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: FloatFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minStock?: FloatFieldUpdateOperationsInput | number
    logs?: MaterialLogUpdateManyWithoutMaterialNestedInput
    recipes?: MenuItemMaterialUpdateManyWithoutMaterialNestedInput
    menuItems?: MenuItemUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: FloatFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minStock?: FloatFieldUpdateOperationsInput | number
    logs?: MaterialLogUncheckedUpdateManyWithoutMaterialNestedInput
    recipes?: MenuItemMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type SaleCreateWithoutPromoInput = {
    date?: Date | string
    qty: number
    priceSnapshot: number
    costSnapshot?: number
    total: number
    paymentMethod: string
    createdAt?: Date | string
    transactionId?: string | null
    discountAmount?: number
    variants?: string | null
    menuItem: MenuItemCreateNestedOneWithoutSalesInput
    shift?: ShiftCreateNestedOneWithoutSalesInput
    order?: OrderCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutPromoInput = {
    id?: number
    date?: Date | string
    menuItemId: number
    qty: number
    priceSnapshot: number
    costSnapshot?: number
    total: number
    paymentMethod: string
    createdAt?: Date | string
    shiftId?: number | null
    transactionId?: string | null
    discountAmount?: number
    variants?: string | null
    orderId?: number | null
  }

  export type SaleCreateOrConnectWithoutPromoInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutPromoInput, SaleUncheckedCreateWithoutPromoInput>
  }

  export type SaleCreateManyPromoInputEnvelope = {
    data: SaleCreateManyPromoInput | SaleCreateManyPromoInput[]
    skipDuplicates?: boolean
  }

  export type SaleUpsertWithWhereUniqueWithoutPromoInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutPromoInput, SaleUncheckedUpdateWithoutPromoInput>
    create: XOR<SaleCreateWithoutPromoInput, SaleUncheckedCreateWithoutPromoInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutPromoInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutPromoInput, SaleUncheckedUpdateWithoutPromoInput>
  }

  export type SaleUpdateManyWithWhereWithoutPromoInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutPromoInput>
  }

  export type UserCreateWithoutActivityLogsInput = {
    name: string
    pin: string
    role: string
    createdAt?: Date | string
    shifts?: ShiftCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: number
    name: string
    pin: string
    role: string
    createdAt?: Date | string
    shifts?: ShiftUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shifts?: ShiftUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shifts?: ShiftUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RaffleWinnerCreateWithoutRaffleInput = {
    transactionId: string
    customerName?: string | null
    phone?: string | null
    prize?: string | null
    drawnAt?: Date | string
  }

  export type RaffleWinnerUncheckedCreateWithoutRaffleInput = {
    id?: number
    transactionId: string
    customerName?: string | null
    phone?: string | null
    prize?: string | null
    drawnAt?: Date | string
  }

  export type RaffleWinnerCreateOrConnectWithoutRaffleInput = {
    where: RaffleWinnerWhereUniqueInput
    create: XOR<RaffleWinnerCreateWithoutRaffleInput, RaffleWinnerUncheckedCreateWithoutRaffleInput>
  }

  export type RaffleWinnerCreateManyRaffleInputEnvelope = {
    data: RaffleWinnerCreateManyRaffleInput | RaffleWinnerCreateManyRaffleInput[]
    skipDuplicates?: boolean
  }

  export type RaffleWinnerUpsertWithWhereUniqueWithoutRaffleInput = {
    where: RaffleWinnerWhereUniqueInput
    update: XOR<RaffleWinnerUpdateWithoutRaffleInput, RaffleWinnerUncheckedUpdateWithoutRaffleInput>
    create: XOR<RaffleWinnerCreateWithoutRaffleInput, RaffleWinnerUncheckedCreateWithoutRaffleInput>
  }

  export type RaffleWinnerUpdateWithWhereUniqueWithoutRaffleInput = {
    where: RaffleWinnerWhereUniqueInput
    data: XOR<RaffleWinnerUpdateWithoutRaffleInput, RaffleWinnerUncheckedUpdateWithoutRaffleInput>
  }

  export type RaffleWinnerUpdateManyWithWhereWithoutRaffleInput = {
    where: RaffleWinnerScalarWhereInput
    data: XOR<RaffleWinnerUpdateManyMutationInput, RaffleWinnerUncheckedUpdateManyWithoutRaffleInput>
  }

  export type RaffleWinnerScalarWhereInput = {
    AND?: RaffleWinnerScalarWhereInput | RaffleWinnerScalarWhereInput[]
    OR?: RaffleWinnerScalarWhereInput[]
    NOT?: RaffleWinnerScalarWhereInput | RaffleWinnerScalarWhereInput[]
    id?: IntFilter<"RaffleWinner"> | number
    raffleId?: IntFilter<"RaffleWinner"> | number
    transactionId?: StringFilter<"RaffleWinner"> | string
    customerName?: StringNullableFilter<"RaffleWinner"> | string | null
    phone?: StringNullableFilter<"RaffleWinner"> | string | null
    prize?: StringNullableFilter<"RaffleWinner"> | string | null
    drawnAt?: DateTimeFilter<"RaffleWinner"> | Date | string
  }

  export type RaffleCreateWithoutWinnersInput = {
    name: string
    startDate: Date | string
    endDate: Date | string
    drawDate?: Date | string | null
    status?: string
    minimumSpend?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RaffleUncheckedCreateWithoutWinnersInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate: Date | string
    drawDate?: Date | string | null
    status?: string
    minimumSpend?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RaffleCreateOrConnectWithoutWinnersInput = {
    where: RaffleWhereUniqueInput
    create: XOR<RaffleCreateWithoutWinnersInput, RaffleUncheckedCreateWithoutWinnersInput>
  }

  export type RaffleUpsertWithoutWinnersInput = {
    update: XOR<RaffleUpdateWithoutWinnersInput, RaffleUncheckedUpdateWithoutWinnersInput>
    create: XOR<RaffleCreateWithoutWinnersInput, RaffleUncheckedCreateWithoutWinnersInput>
    where?: RaffleWhereInput
  }

  export type RaffleUpdateToOneWithWhereWithoutWinnersInput = {
    where?: RaffleWhereInput
    data: XOR<RaffleUpdateWithoutWinnersInput, RaffleUncheckedUpdateWithoutWinnersInput>
  }

  export type RaffleUpdateWithoutWinnersInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    minimumSpend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaffleUncheckedUpdateWithoutWinnersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    minimumSpend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemMaterialCreateManyMenuItemInput = {
    id?: number
    materialId: number
    quantity: number
    createdAt?: Date | string
  }

  export type SaleCreateManyMenuItemInput = {
    id?: number
    date?: Date | string
    qty: number
    priceSnapshot: number
    costSnapshot?: number
    total: number
    paymentMethod: string
    createdAt?: Date | string
    shiftId?: number | null
    transactionId?: string | null
    discountAmount?: number
    promoId?: number | null
    variants?: string | null
    orderId?: number | null
  }

  export type MenuItemMaterialUpdateWithoutMenuItemInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type MenuItemMaterialUncheckedUpdateWithoutMenuItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemMaterialUncheckedUpdateManyWithoutMenuItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUpdateWithoutMenuItemInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    priceSnapshot?: FloatFieldUpdateOperationsInput | number
    costSnapshot?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: FloatFieldUpdateOperationsInput | number
    variants?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: ShiftUpdateOneWithoutSalesNestedInput
    promo?: PromoUpdateOneWithoutSalesNestedInput
    order?: OrderUpdateOneWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutMenuItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    priceSnapshot?: FloatFieldUpdateOperationsInput | number
    costSnapshot?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: FloatFieldUpdateOperationsInput | number
    promoId?: NullableIntFieldUpdateOperationsInput | number | null
    variants?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SaleUncheckedUpdateManyWithoutMenuItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    priceSnapshot?: FloatFieldUpdateOperationsInput | number
    costSnapshot?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: FloatFieldUpdateOperationsInput | number
    promoId?: NullableIntFieldUpdateOperationsInput | number | null
    variants?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MaterialLogCreateManyMaterialInput = {
    id?: number
    type: string
    quantity: number
    balanceAfter: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type MaterialPurchaseCreateManyMaterialInput = {
    id?: number
    quantity: number
    pricePerUnit: number
    totalCost: number
    supplier?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type MenuItemMaterialCreateManyMaterialInput = {
    id?: number
    menuItemId: number
    quantity: number
    createdAt?: Date | string
  }

  export type MenuItemCreateManyMaterialInput = {
    id?: number
    name: string
    category?: string
    price: number
    isRetail?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialLogUpdateWithoutMaterialInput = {
    type?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialLogUncheckedUpdateWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialLogUncheckedUpdateManyWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialPurchaseUpdateWithoutMaterialInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialPurchaseUncheckedUpdateWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialPurchaseUncheckedUpdateManyWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemMaterialUpdateWithoutMaterialInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: MenuItemUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type MenuItemMaterialUncheckedUpdateWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuItemId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemMaterialUncheckedUpdateManyWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuItemId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUpdateWithoutMaterialInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isRetail?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: MenuItemMaterialUpdateManyWithoutMenuItemNestedInput
    sales?: SaleUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isRetail?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: MenuItemMaterialUncheckedUpdateManyWithoutMenuItemNestedInput
    sales?: SaleUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateManyWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isRetail?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateManyOrderInput = {
    id?: number
    date?: Date | string
    menuItemId: number
    qty: number
    priceSnapshot: number
    costSnapshot?: number
    total: number
    paymentMethod: string
    createdAt?: Date | string
    shiftId?: number | null
    transactionId?: string | null
    discountAmount?: number
    promoId?: number | null
    variants?: string | null
  }

  export type SaleUpdateWithoutOrderInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    priceSnapshot?: FloatFieldUpdateOperationsInput | number
    costSnapshot?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: FloatFieldUpdateOperationsInput | number
    variants?: NullableStringFieldUpdateOperationsInput | string | null
    menuItem?: MenuItemUpdateOneRequiredWithoutSalesNestedInput
    shift?: ShiftUpdateOneWithoutSalesNestedInput
    promo?: PromoUpdateOneWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    priceSnapshot?: FloatFieldUpdateOperationsInput | number
    costSnapshot?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: FloatFieldUpdateOperationsInput | number
    promoId?: NullableIntFieldUpdateOperationsInput | number | null
    variants?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaleUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    priceSnapshot?: FloatFieldUpdateOperationsInput | number
    costSnapshot?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: FloatFieldUpdateOperationsInput | number
    promoId?: NullableIntFieldUpdateOperationsInput | number | null
    variants?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaleCreateManyShiftInput = {
    id?: number
    date?: Date | string
    menuItemId: number
    qty: number
    priceSnapshot: number
    costSnapshot?: number
    total: number
    paymentMethod: string
    createdAt?: Date | string
    transactionId?: string | null
    discountAmount?: number
    promoId?: number | null
    variants?: string | null
    orderId?: number | null
  }

  export type SaleUpdateWithoutShiftInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    priceSnapshot?: FloatFieldUpdateOperationsInput | number
    costSnapshot?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: FloatFieldUpdateOperationsInput | number
    variants?: NullableStringFieldUpdateOperationsInput | string | null
    menuItem?: MenuItemUpdateOneRequiredWithoutSalesNestedInput
    promo?: PromoUpdateOneWithoutSalesNestedInput
    order?: OrderUpdateOneWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutShiftInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    priceSnapshot?: FloatFieldUpdateOperationsInput | number
    costSnapshot?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: FloatFieldUpdateOperationsInput | number
    promoId?: NullableIntFieldUpdateOperationsInput | number | null
    variants?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SaleUncheckedUpdateManyWithoutShiftInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    priceSnapshot?: FloatFieldUpdateOperationsInput | number
    costSnapshot?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: FloatFieldUpdateOperationsInput | number
    promoId?: NullableIntFieldUpdateOperationsInput | number | null
    variants?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ShiftCreateManyUserInput = {
    id?: number
    startTime?: Date | string
    endTime?: Date | string | null
    openingCash?: number
    closingCash?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogCreateManyUserInput = {
    id?: number
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ShiftUpdateWithoutUserInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingCash?: FloatFieldUpdateOperationsInput | number
    closingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingCash?: FloatFieldUpdateOperationsInput | number
    closingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingCash?: FloatFieldUpdateOperationsInput | number
    closingCash?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateManyPromoInput = {
    id?: number
    date?: Date | string
    menuItemId: number
    qty: number
    priceSnapshot: number
    costSnapshot?: number
    total: number
    paymentMethod: string
    createdAt?: Date | string
    shiftId?: number | null
    transactionId?: string | null
    discountAmount?: number
    variants?: string | null
    orderId?: number | null
  }

  export type SaleUpdateWithoutPromoInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    priceSnapshot?: FloatFieldUpdateOperationsInput | number
    costSnapshot?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: FloatFieldUpdateOperationsInput | number
    variants?: NullableStringFieldUpdateOperationsInput | string | null
    menuItem?: MenuItemUpdateOneRequiredWithoutSalesNestedInput
    shift?: ShiftUpdateOneWithoutSalesNestedInput
    order?: OrderUpdateOneWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutPromoInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    priceSnapshot?: FloatFieldUpdateOperationsInput | number
    costSnapshot?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: FloatFieldUpdateOperationsInput | number
    variants?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SaleUncheckedUpdateManyWithoutPromoInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    priceSnapshot?: FloatFieldUpdateOperationsInput | number
    costSnapshot?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: FloatFieldUpdateOperationsInput | number
    variants?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RaffleWinnerCreateManyRaffleInput = {
    id?: number
    transactionId: string
    customerName?: string | null
    phone?: string | null
    prize?: string | null
    drawnAt?: Date | string
  }

  export type RaffleWinnerUpdateWithoutRaffleInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    drawnAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaffleWinnerUncheckedUpdateWithoutRaffleInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    drawnAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaffleWinnerUncheckedUpdateManyWithoutRaffleInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    drawnAt?: DateTimeFieldUpdateOperationsInput | Date | string
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