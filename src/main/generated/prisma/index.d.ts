
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
 * Model Instructor
 * 
 */
export type Instructor = $Result.DefaultSelection<Prisma.$InstructorPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model PrivateSession
 * 
 */
export type PrivateSession = $Result.DefaultSelection<Prisma.$PrivateSessionPayload>
/**
 * Model PrivateSessionBooking
 * 
 */
export type PrivateSessionBooking = $Result.DefaultSelection<Prisma.$PrivateSessionBookingPayload>
/**
 * Model InstructorEarning
 * 
 */
export type InstructorEarning = $Result.DefaultSelection<Prisma.$InstructorEarningPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EarningType: {
  FIXED: 'FIXED',
  REVENUE_SHARE: 'REVENUE_SHARE'
};

export type EarningType = (typeof EarningType)[keyof typeof EarningType]


export const SubscriptionStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  PARTIAL: 'PARTIAL',
  OVERDUE: 'OVERDUE'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]

}

export type EarningType = $Enums.EarningType

export const EarningType: typeof $Enums.EarningType

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Instructors
 * const instructors = await prisma.instructor.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Instructors
   * const instructors = await prisma.instructor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.instructor`: Exposes CRUD operations for the **Instructor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instructors
    * const instructors = await prisma.instructor.findMany()
    * ```
    */
  get instructor(): Prisma.InstructorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privateSession`: Exposes CRUD operations for the **PrivateSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrivateSessions
    * const privateSessions = await prisma.privateSession.findMany()
    * ```
    */
  get privateSession(): Prisma.PrivateSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privateSessionBooking`: Exposes CRUD operations for the **PrivateSessionBooking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrivateSessionBookings
    * const privateSessionBookings = await prisma.privateSessionBooking.findMany()
    * ```
    */
  get privateSessionBooking(): Prisma.PrivateSessionBookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instructorEarning`: Exposes CRUD operations for the **InstructorEarning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstructorEarnings
    * const instructorEarnings = await prisma.instructorEarning.findMany()
    * ```
    */
  get instructorEarning(): Prisma.InstructorEarningDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Instructor: 'Instructor',
    Student: 'Student',
    Group: 'Group',
    Enrollment: 'Enrollment',
    Subscription: 'Subscription',
    PrivateSession: 'PrivateSession',
    PrivateSessionBooking: 'PrivateSessionBooking',
    InstructorEarning: 'InstructorEarning'
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
      modelProps: "instructor" | "student" | "group" | "enrollment" | "subscription" | "privateSession" | "privateSessionBooking" | "instructorEarning"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Instructor: {
        payload: Prisma.$InstructorPayload<ExtArgs>
        fields: Prisma.InstructorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findFirst: {
            args: Prisma.InstructorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findMany: {
            args: Prisma.InstructorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          create: {
            args: Prisma.InstructorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          createMany: {
            args: Prisma.InstructorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          delete: {
            args: Prisma.InstructorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          update: {
            args: Prisma.InstructorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          deleteMany: {
            args: Prisma.InstructorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          upsert: {
            args: Prisma.InstructorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          aggregate: {
            args: Prisma.InstructorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructor>
          }
          groupBy: {
            args: Prisma.InstructorGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructorGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructorCountArgs<ExtArgs>
            result: $Utils.Optional<InstructorCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      PrivateSession: {
        payload: Prisma.$PrivateSessionPayload<ExtArgs>
        fields: Prisma.PrivateSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrivateSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrivateSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionPayload>
          }
          findFirst: {
            args: Prisma.PrivateSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrivateSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionPayload>
          }
          findMany: {
            args: Prisma.PrivateSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionPayload>[]
          }
          create: {
            args: Prisma.PrivateSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionPayload>
          }
          createMany: {
            args: Prisma.PrivateSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrivateSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionPayload>[]
          }
          delete: {
            args: Prisma.PrivateSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionPayload>
          }
          update: {
            args: Prisma.PrivateSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionPayload>
          }
          deleteMany: {
            args: Prisma.PrivateSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrivateSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrivateSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionPayload>[]
          }
          upsert: {
            args: Prisma.PrivateSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionPayload>
          }
          aggregate: {
            args: Prisma.PrivateSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivateSession>
          }
          groupBy: {
            args: Prisma.PrivateSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrivateSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrivateSessionCountArgs<ExtArgs>
            result: $Utils.Optional<PrivateSessionCountAggregateOutputType> | number
          }
        }
      }
      PrivateSessionBooking: {
        payload: Prisma.$PrivateSessionBookingPayload<ExtArgs>
        fields: Prisma.PrivateSessionBookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrivateSessionBookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionBookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrivateSessionBookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionBookingPayload>
          }
          findFirst: {
            args: Prisma.PrivateSessionBookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionBookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrivateSessionBookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionBookingPayload>
          }
          findMany: {
            args: Prisma.PrivateSessionBookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionBookingPayload>[]
          }
          create: {
            args: Prisma.PrivateSessionBookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionBookingPayload>
          }
          createMany: {
            args: Prisma.PrivateSessionBookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrivateSessionBookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionBookingPayload>[]
          }
          delete: {
            args: Prisma.PrivateSessionBookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionBookingPayload>
          }
          update: {
            args: Prisma.PrivateSessionBookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionBookingPayload>
          }
          deleteMany: {
            args: Prisma.PrivateSessionBookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrivateSessionBookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrivateSessionBookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionBookingPayload>[]
          }
          upsert: {
            args: Prisma.PrivateSessionBookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateSessionBookingPayload>
          }
          aggregate: {
            args: Prisma.PrivateSessionBookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivateSessionBooking>
          }
          groupBy: {
            args: Prisma.PrivateSessionBookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrivateSessionBookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrivateSessionBookingCountArgs<ExtArgs>
            result: $Utils.Optional<PrivateSessionBookingCountAggregateOutputType> | number
          }
        }
      }
      InstructorEarning: {
        payload: Prisma.$InstructorEarningPayload<ExtArgs>
        fields: Prisma.InstructorEarningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructorEarningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorEarningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructorEarningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorEarningPayload>
          }
          findFirst: {
            args: Prisma.InstructorEarningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorEarningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructorEarningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorEarningPayload>
          }
          findMany: {
            args: Prisma.InstructorEarningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorEarningPayload>[]
          }
          create: {
            args: Prisma.InstructorEarningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorEarningPayload>
          }
          createMany: {
            args: Prisma.InstructorEarningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructorEarningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorEarningPayload>[]
          }
          delete: {
            args: Prisma.InstructorEarningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorEarningPayload>
          }
          update: {
            args: Prisma.InstructorEarningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorEarningPayload>
          }
          deleteMany: {
            args: Prisma.InstructorEarningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructorEarningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructorEarningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorEarningPayload>[]
          }
          upsert: {
            args: Prisma.InstructorEarningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorEarningPayload>
          }
          aggregate: {
            args: Prisma.InstructorEarningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructorEarning>
          }
          groupBy: {
            args: Prisma.InstructorEarningGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructorEarningGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructorEarningCountArgs<ExtArgs>
            result: $Utils.Optional<InstructorEarningCountAggregateOutputType> | number
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    instructor?: InstructorOmit
    student?: StudentOmit
    group?: GroupOmit
    enrollment?: EnrollmentOmit
    subscription?: SubscriptionOmit
    privateSession?: PrivateSessionOmit
    privateSessionBooking?: PrivateSessionBookingOmit
    instructorEarning?: InstructorEarningOmit
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
   * Count Type InstructorCountOutputType
   */

  export type InstructorCountOutputType = {
    groups: number
    privateSessions: number
    instructorEarnings: number
  }

  export type InstructorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | InstructorCountOutputTypeCountGroupsArgs
    privateSessions?: boolean | InstructorCountOutputTypeCountPrivateSessionsArgs
    instructorEarnings?: boolean | InstructorCountOutputTypeCountInstructorEarningsArgs
  }

  // Custom InputTypes
  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorCountOutputType
     */
    select?: InstructorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeCountPrivateSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateSessionWhereInput
  }

  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeCountInstructorEarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorEarningWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    enrollments: number
    privateSessionBookings: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | StudentCountOutputTypeCountEnrollmentsArgs
    privateSessionBookings?: boolean | StudentCountOutputTypeCountPrivateSessionBookingsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountPrivateSessionBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateSessionBookingWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    enrollments: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | GroupCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * Count Type EnrollmentCountOutputType
   */

  export type EnrollmentCountOutputType = {
    subscriptions: number
  }

  export type EnrollmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | EnrollmentCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * EnrollmentCountOutputType without action
   */
  export type EnrollmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrollmentCountOutputType
     */
    select?: EnrollmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnrollmentCountOutputType without action
   */
  export type EnrollmentCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type PrivateSessionCountOutputType
   */

  export type PrivateSessionCountOutputType = {
    bookings: number
  }

  export type PrivateSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | PrivateSessionCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * PrivateSessionCountOutputType without action
   */
  export type PrivateSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSessionCountOutputType
     */
    select?: PrivateSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrivateSessionCountOutputType without action
   */
  export type PrivateSessionCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateSessionBookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Instructor
   */

  export type AggregateInstructor = {
    _count: InstructorCountAggregateOutputType | null
    _avg: InstructorAvgAggregateOutputType | null
    _sum: InstructorSumAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  export type InstructorAvgAggregateOutputType = {
    id: number | null
    fixedSalary: number | null
    revenueShare: number | null
  }

  export type InstructorSumAggregateOutputType = {
    id: number | null
    fixedSalary: number | null
    revenueShare: number | null
  }

  export type InstructorMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    earningType: $Enums.EarningType | null
    fixedSalary: number | null
    revenueShare: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstructorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    earningType: $Enums.EarningType | null
    fixedSalary: number | null
    revenueShare: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstructorCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    earningType: number
    fixedSalary: number
    revenueShare: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InstructorAvgAggregateInputType = {
    id?: true
    fixedSalary?: true
    revenueShare?: true
  }

  export type InstructorSumAggregateInputType = {
    id?: true
    fixedSalary?: true
    revenueShare?: true
  }

  export type InstructorMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    earningType?: true
    fixedSalary?: true
    revenueShare?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstructorMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    earningType?: true
    fixedSalary?: true
    revenueShare?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstructorCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    earningType?: true
    fixedSalary?: true
    revenueShare?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InstructorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructor to aggregate.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instructors
    **/
    _count?: true | InstructorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstructorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstructorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorMaxAggregateInputType
  }

  export type GetInstructorAggregateType<T extends InstructorAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructor[P]>
      : GetScalarType<T[P], AggregateInstructor[P]>
  }




  export type InstructorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorWhereInput
    orderBy?: InstructorOrderByWithAggregationInput | InstructorOrderByWithAggregationInput[]
    by: InstructorScalarFieldEnum[] | InstructorScalarFieldEnum
    having?: InstructorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorCountAggregateInputType | true
    _avg?: InstructorAvgAggregateInputType
    _sum?: InstructorSumAggregateInputType
    _min?: InstructorMinAggregateInputType
    _max?: InstructorMaxAggregateInputType
  }

  export type InstructorGroupByOutputType = {
    id: number
    name: string
    phone: string | null
    email: string | null
    earningType: $Enums.EarningType
    fixedSalary: number | null
    revenueShare: number | null
    createdAt: Date
    updatedAt: Date
    _count: InstructorCountAggregateOutputType | null
    _avg: InstructorAvgAggregateOutputType | null
    _sum: InstructorSumAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  type GetInstructorGroupByPayload<T extends InstructorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorGroupByOutputType[P]>
        }
      >
    >


  export type InstructorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    earningType?: boolean
    fixedSalary?: boolean
    revenueShare?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groups?: boolean | Instructor$groupsArgs<ExtArgs>
    privateSessions?: boolean | Instructor$privateSessionsArgs<ExtArgs>
    instructorEarnings?: boolean | Instructor$instructorEarningsArgs<ExtArgs>
    _count?: boolean | InstructorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    earningType?: boolean
    fixedSalary?: boolean
    revenueShare?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    earningType?: boolean
    fixedSalary?: boolean
    revenueShare?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    earningType?: boolean
    fixedSalary?: boolean
    revenueShare?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InstructorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "earningType" | "fixedSalary" | "revenueShare" | "createdAt" | "updatedAt", ExtArgs["result"]["instructor"]>
  export type InstructorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | Instructor$groupsArgs<ExtArgs>
    privateSessions?: boolean | Instructor$privateSessionsArgs<ExtArgs>
    instructorEarnings?: boolean | Instructor$instructorEarningsArgs<ExtArgs>
    _count?: boolean | InstructorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstructorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstructorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstructorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instructor"
    objects: {
      groups: Prisma.$GroupPayload<ExtArgs>[]
      privateSessions: Prisma.$PrivateSessionPayload<ExtArgs>[]
      instructorEarnings: Prisma.$InstructorEarningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string | null
      email: string | null
      earningType: $Enums.EarningType
      fixedSalary: number | null
      revenueShare: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["instructor"]>
    composites: {}
  }

  type InstructorGetPayload<S extends boolean | null | undefined | InstructorDefaultArgs> = $Result.GetResult<Prisma.$InstructorPayload, S>

  type InstructorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructorCountAggregateInputType | true
    }

  export interface InstructorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instructor'], meta: { name: 'Instructor' } }
    /**
     * Find zero or one Instructor that matches the filter.
     * @param {InstructorFindUniqueArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructorFindUniqueArgs>(args: SelectSubset<T, InstructorFindUniqueArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instructor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructorFindUniqueOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructorFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructorFindFirstArgs>(args?: SelectSubset<T, InstructorFindFirstArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructorFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructorFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instructors
     * const instructors = await prisma.instructor.findMany()
     * 
     * // Get first 10 Instructors
     * const instructors = await prisma.instructor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructorWithIdOnly = await prisma.instructor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstructorFindManyArgs>(args?: SelectSubset<T, InstructorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instructor.
     * @param {InstructorCreateArgs} args - Arguments to create a Instructor.
     * @example
     * // Create one Instructor
     * const Instructor = await prisma.instructor.create({
     *   data: {
     *     // ... data to create a Instructor
     *   }
     * })
     * 
     */
    create<T extends InstructorCreateArgs>(args: SelectSubset<T, InstructorCreateArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instructors.
     * @param {InstructorCreateManyArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructor = await prisma.instructor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructorCreateManyArgs>(args?: SelectSubset<T, InstructorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instructors and returns the data saved in the database.
     * @param {InstructorCreateManyAndReturnArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructor = await prisma.instructor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instructors and only return the `id`
     * const instructorWithIdOnly = await prisma.instructor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructorCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instructor.
     * @param {InstructorDeleteArgs} args - Arguments to delete one Instructor.
     * @example
     * // Delete one Instructor
     * const Instructor = await prisma.instructor.delete({
     *   where: {
     *     // ... filter to delete one Instructor
     *   }
     * })
     * 
     */
    delete<T extends InstructorDeleteArgs>(args: SelectSubset<T, InstructorDeleteArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instructor.
     * @param {InstructorUpdateArgs} args - Arguments to update one Instructor.
     * @example
     * // Update one Instructor
     * const instructor = await prisma.instructor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructorUpdateArgs>(args: SelectSubset<T, InstructorUpdateArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instructors.
     * @param {InstructorDeleteManyArgs} args - Arguments to filter Instructors to delete.
     * @example
     * // Delete a few Instructors
     * const { count } = await prisma.instructor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructorDeleteManyArgs>(args?: SelectSubset<T, InstructorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instructors
     * const instructor = await prisma.instructor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructorUpdateManyArgs>(args: SelectSubset<T, InstructorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors and returns the data updated in the database.
     * @param {InstructorUpdateManyAndReturnArgs} args - Arguments to update many Instructors.
     * @example
     * // Update many Instructors
     * const instructor = await prisma.instructor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instructors and only return the `id`
     * const instructorWithIdOnly = await prisma.instructor.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstructorUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instructor.
     * @param {InstructorUpsertArgs} args - Arguments to update or create a Instructor.
     * @example
     * // Update or create a Instructor
     * const instructor = await prisma.instructor.upsert({
     *   create: {
     *     // ... data to create a Instructor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instructor we want to update
     *   }
     * })
     */
    upsert<T extends InstructorUpsertArgs>(args: SelectSubset<T, InstructorUpsertArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorCountArgs} args - Arguments to filter Instructors to count.
     * @example
     * // Count the number of Instructors
     * const count = await prisma.instructor.count({
     *   where: {
     *     // ... the filter for the Instructors we want to count
     *   }
     * })
    **/
    count<T extends InstructorCountArgs>(
      args?: Subset<T, InstructorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstructorAggregateArgs>(args: Subset<T, InstructorAggregateArgs>): Prisma.PrismaPromise<GetInstructorAggregateType<T>>

    /**
     * Group by Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorGroupByArgs} args - Group by arguments.
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
      T extends InstructorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructorGroupByArgs['orderBy'] }
        : { orderBy?: InstructorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstructorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instructor model
   */
  readonly fields: InstructorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instructor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groups<T extends Instructor$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Instructor$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    privateSessions<T extends Instructor$privateSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Instructor$privateSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    instructorEarnings<T extends Instructor$instructorEarningsArgs<ExtArgs> = {}>(args?: Subset<T, Instructor$instructorEarningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorEarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Instructor model
   */
  interface InstructorFieldRefs {
    readonly id: FieldRef<"Instructor", 'Int'>
    readonly name: FieldRef<"Instructor", 'String'>
    readonly phone: FieldRef<"Instructor", 'String'>
    readonly email: FieldRef<"Instructor", 'String'>
    readonly earningType: FieldRef<"Instructor", 'EarningType'>
    readonly fixedSalary: FieldRef<"Instructor", 'Float'>
    readonly revenueShare: FieldRef<"Instructor", 'Float'>
    readonly createdAt: FieldRef<"Instructor", 'DateTime'>
    readonly updatedAt: FieldRef<"Instructor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Instructor findUnique
   */
  export type InstructorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor findUniqueOrThrow
   */
  export type InstructorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor findFirst
   */
  export type InstructorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor findFirstOrThrow
   */
  export type InstructorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor findMany
   */
  export type InstructorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructors to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor create
   */
  export type InstructorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The data needed to create a Instructor.
     */
    data: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
  }

  /**
   * Instructor createMany
   */
  export type InstructorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instructors.
     */
    data: InstructorCreateManyInput | InstructorCreateManyInput[]
  }

  /**
   * Instructor createManyAndReturn
   */
  export type InstructorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * The data used to create many Instructors.
     */
    data: InstructorCreateManyInput | InstructorCreateManyInput[]
  }

  /**
   * Instructor update
   */
  export type InstructorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The data needed to update a Instructor.
     */
    data: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
    /**
     * Choose, which Instructor to update.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor updateMany
   */
  export type InstructorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instructors.
     */
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyInput>
    /**
     * Filter which Instructors to update
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to update.
     */
    limit?: number
  }

  /**
   * Instructor updateManyAndReturn
   */
  export type InstructorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * The data used to update Instructors.
     */
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyInput>
    /**
     * Filter which Instructors to update
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to update.
     */
    limit?: number
  }

  /**
   * Instructor upsert
   */
  export type InstructorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The filter to search for the Instructor to update in case it exists.
     */
    where: InstructorWhereUniqueInput
    /**
     * In case the Instructor found by the `where` argument doesn't exist, create a new Instructor with this data.
     */
    create: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
    /**
     * In case the Instructor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
  }

  /**
   * Instructor delete
   */
  export type InstructorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter which Instructor to delete.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor deleteMany
   */
  export type InstructorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructors to delete
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to delete.
     */
    limit?: number
  }

  /**
   * Instructor.groups
   */
  export type Instructor$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Instructor.privateSessions
   */
  export type Instructor$privateSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSession
     */
    select?: PrivateSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSession
     */
    omit?: PrivateSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionInclude<ExtArgs> | null
    where?: PrivateSessionWhereInput
    orderBy?: PrivateSessionOrderByWithRelationInput | PrivateSessionOrderByWithRelationInput[]
    cursor?: PrivateSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateSessionScalarFieldEnum | PrivateSessionScalarFieldEnum[]
  }

  /**
   * Instructor.instructorEarnings
   */
  export type Instructor$instructorEarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorEarning
     */
    select?: InstructorEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorEarning
     */
    omit?: InstructorEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorEarningInclude<ExtArgs> | null
    where?: InstructorEarningWhereInput
    orderBy?: InstructorEarningOrderByWithRelationInput | InstructorEarningOrderByWithRelationInput[]
    cursor?: InstructorEarningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstructorEarningScalarFieldEnum | InstructorEarningScalarFieldEnum[]
  }

  /**
   * Instructor without action
   */
  export type InstructorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    name: string | null
    title: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    title: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    title: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    title?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    title?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    title?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    name: string
    title: string | null
    phone: string
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enrollments?: boolean | Student$enrollmentsArgs<ExtArgs>
    privateSessionBookings?: boolean | Student$privateSessionBookingsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    title?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "title" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | Student$enrollmentsArgs<ExtArgs>
    privateSessionBookings?: boolean | Student$privateSessionBookingsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      privateSessionBookings: Prisma.$PrivateSessionBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      title: string | null
      phone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enrollments<T extends Student$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Student$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    privateSessionBookings<T extends Student$privateSessionBookingsArgs<ExtArgs> = {}>(args?: Subset<T, Student$privateSessionBookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateSessionBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly name: FieldRef<"Student", 'String'>
    readonly title: FieldRef<"Student", 'String'>
    readonly phone: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.enrollments
   */
  export type Student$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Student.privateSessionBookings
   */
  export type Student$privateSessionBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSessionBooking
     */
    select?: PrivateSessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSessionBooking
     */
    omit?: PrivateSessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionBookingInclude<ExtArgs> | null
    where?: PrivateSessionBookingWhereInput
    orderBy?: PrivateSessionBookingOrderByWithRelationInput | PrivateSessionBookingOrderByWithRelationInput[]
    cursor?: PrivateSessionBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateSessionBookingScalarFieldEnum | PrivateSessionBookingScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
    monthlyPrice: number | null
    instructorId: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
    monthlyPrice: number | null
    instructorId: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    monthlyPrice: number | null
    schedule: string | null
    instructorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    monthlyPrice: number | null
    schedule: string | null
    instructorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    description: number
    monthlyPrice: number
    schedule: number
    instructorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
    monthlyPrice?: true
    instructorId?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
    monthlyPrice?: true
    instructorId?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    monthlyPrice?: true
    schedule?: true
    instructorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    monthlyPrice?: true
    schedule?: true
    instructorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    monthlyPrice?: true
    schedule?: true
    instructorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: number
    name: string
    description: string | null
    monthlyPrice: number
    schedule: string | null
    instructorId: number
    createdAt: Date
    updatedAt: Date
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    monthlyPrice?: boolean
    schedule?: boolean
    instructorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
    enrollments?: boolean | Group$enrollmentsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    monthlyPrice?: boolean
    schedule?: boolean
    instructorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    monthlyPrice?: boolean
    schedule?: boolean
    instructorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    monthlyPrice?: boolean
    schedule?: boolean
    instructorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "monthlyPrice" | "schedule" | "instructorId" | "createdAt" | "updatedAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
    enrollments?: boolean | Group$enrollmentsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      instructor: Prisma.$InstructorPayload<ExtArgs>
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      monthlyPrice: number
      schedule: string | null
      instructorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructor<T extends InstructorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstructorDefaultArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    enrollments<T extends Group$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Group$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'Int'>
    readonly name: FieldRef<"Group", 'String'>
    readonly description: FieldRef<"Group", 'String'>
    readonly monthlyPrice: FieldRef<"Group", 'Float'>
    readonly schedule: FieldRef<"Group", 'String'>
    readonly instructorId: FieldRef<"Group", 'Int'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.enrollments
   */
  export type Group$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    groupId: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    groupId: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    groupId: number | null
    isActive: boolean | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    groupId: number | null
    isActive: boolean | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    studentId: number
    groupId: number
    isActive: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
  }

  export type EnrollmentSumAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
  }

  export type EnrollmentMinAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
    isActive?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
    isActive?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
    isActive?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: number
    studentId: number
    groupId: number
    isActive: boolean
    startDate: Date
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    groupId?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
    subscriptions?: boolean | Enrollment$subscriptionsArgs<ExtArgs>
    _count?: boolean | EnrollmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    groupId?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    groupId?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    studentId?: boolean
    groupId?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "groupId" | "isActive" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
    subscriptions?: boolean | Enrollment$subscriptionsArgs<ExtArgs>
    _count?: boolean | EnrollmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      groupId: number
      isActive: boolean
      startDate: Date
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
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
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscriptions<T extends Enrollment$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Enrollment$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'Int'>
    readonly studentId: FieldRef<"Enrollment", 'Int'>
    readonly groupId: FieldRef<"Enrollment", 'Int'>
    readonly isActive: FieldRef<"Enrollment", 'Boolean'>
    readonly startDate: FieldRef<"Enrollment", 'DateTime'>
    readonly endDate: FieldRef<"Enrollment", 'DateTime'>
    readonly createdAt: FieldRef<"Enrollment", 'DateTime'>
    readonly updatedAt: FieldRef<"Enrollment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment.subscriptions
   */
  export type Enrollment$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    id: number | null
    enrollmentId: number | null
    month: number | null
    year: number | null
    amountDue: number | null
    amountPaid: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    id: number | null
    enrollmentId: number | null
    month: number | null
    year: number | null
    amountDue: number | null
    amountPaid: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: number | null
    enrollmentId: number | null
    month: number | null
    year: number | null
    amountDue: number | null
    amountPaid: number | null
    status: $Enums.SubscriptionStatus | null
    paidAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: number | null
    enrollmentId: number | null
    month: number | null
    year: number | null
    amountDue: number | null
    amountPaid: number | null
    status: $Enums.SubscriptionStatus | null
    paidAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    enrollmentId: number
    month: number
    year: number
    amountDue: number
    amountPaid: number
    status: number
    paidAt: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    id?: true
    enrollmentId?: true
    month?: true
    year?: true
    amountDue?: true
    amountPaid?: true
  }

  export type SubscriptionSumAggregateInputType = {
    id?: true
    enrollmentId?: true
    month?: true
    year?: true
    amountDue?: true
    amountPaid?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    enrollmentId?: true
    month?: true
    year?: true
    amountDue?: true
    amountPaid?: true
    status?: true
    paidAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    enrollmentId?: true
    month?: true
    year?: true
    amountDue?: true
    amountPaid?: true
    status?: true
    paidAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    enrollmentId?: true
    month?: true
    year?: true
    amountDue?: true
    amountPaid?: true
    status?: true
    paidAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: number
    enrollmentId: number
    month: number
    year: number
    amountDue: number
    amountPaid: number
    status: $Enums.SubscriptionStatus
    paidAt: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollmentId?: boolean
    month?: boolean
    year?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    status?: boolean
    paidAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollmentId?: boolean
    month?: boolean
    year?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    status?: boolean
    paidAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollmentId?: boolean
    month?: boolean
    year?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    status?: boolean
    paidAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    enrollmentId?: boolean
    month?: boolean
    year?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    status?: boolean
    paidAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enrollmentId" | "month" | "year" | "amountDue" | "amountPaid" | "status" | "paidAt" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      enrollment: Prisma.$EnrollmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      enrollmentId: number
      month: number
      year: number
      amountDue: number
      amountPaid: number
      status: $Enums.SubscriptionStatus
      paidAt: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enrollment<T extends EnrollmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnrollmentDefaultArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'Int'>
    readonly enrollmentId: FieldRef<"Subscription", 'Int'>
    readonly month: FieldRef<"Subscription", 'Int'>
    readonly year: FieldRef<"Subscription", 'Int'>
    readonly amountDue: FieldRef<"Subscription", 'Float'>
    readonly amountPaid: FieldRef<"Subscription", 'Float'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly paidAt: FieldRef<"Subscription", 'DateTime'>
    readonly notes: FieldRef<"Subscription", 'String'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model PrivateSession
   */

  export type AggregatePrivateSession = {
    _count: PrivateSessionCountAggregateOutputType | null
    _avg: PrivateSessionAvgAggregateOutputType | null
    _sum: PrivateSessionSumAggregateOutputType | null
    _min: PrivateSessionMinAggregateOutputType | null
    _max: PrivateSessionMaxAggregateOutputType | null
  }

  export type PrivateSessionAvgAggregateOutputType = {
    id: number | null
    durationHours: number | null
    price: number | null
    instructorId: number | null
  }

  export type PrivateSessionSumAggregateOutputType = {
    id: number | null
    durationHours: number | null
    price: number | null
    instructorId: number | null
  }

  export type PrivateSessionMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    sessionDate: Date | null
    durationHours: number | null
    price: number | null
    instructorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrivateSessionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    sessionDate: Date | null
    durationHours: number | null
    price: number | null
    instructorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrivateSessionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    sessionDate: number
    durationHours: number
    price: number
    instructorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PrivateSessionAvgAggregateInputType = {
    id?: true
    durationHours?: true
    price?: true
    instructorId?: true
  }

  export type PrivateSessionSumAggregateInputType = {
    id?: true
    durationHours?: true
    price?: true
    instructorId?: true
  }

  export type PrivateSessionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    sessionDate?: true
    durationHours?: true
    price?: true
    instructorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrivateSessionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    sessionDate?: true
    durationHours?: true
    price?: true
    instructorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrivateSessionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    sessionDate?: true
    durationHours?: true
    price?: true
    instructorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PrivateSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateSession to aggregate.
     */
    where?: PrivateSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateSessions to fetch.
     */
    orderBy?: PrivateSessionOrderByWithRelationInput | PrivateSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrivateSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrivateSessions
    **/
    _count?: true | PrivateSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrivateSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrivateSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivateSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivateSessionMaxAggregateInputType
  }

  export type GetPrivateSessionAggregateType<T extends PrivateSessionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivateSession[P]>
      : GetScalarType<T[P], AggregatePrivateSession[P]>
  }




  export type PrivateSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateSessionWhereInput
    orderBy?: PrivateSessionOrderByWithAggregationInput | PrivateSessionOrderByWithAggregationInput[]
    by: PrivateSessionScalarFieldEnum[] | PrivateSessionScalarFieldEnum
    having?: PrivateSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivateSessionCountAggregateInputType | true
    _avg?: PrivateSessionAvgAggregateInputType
    _sum?: PrivateSessionSumAggregateInputType
    _min?: PrivateSessionMinAggregateInputType
    _max?: PrivateSessionMaxAggregateInputType
  }

  export type PrivateSessionGroupByOutputType = {
    id: number
    title: string
    description: string | null
    sessionDate: Date
    durationHours: number
    price: number
    instructorId: number
    createdAt: Date
    updatedAt: Date
    _count: PrivateSessionCountAggregateOutputType | null
    _avg: PrivateSessionAvgAggregateOutputType | null
    _sum: PrivateSessionSumAggregateOutputType | null
    _min: PrivateSessionMinAggregateOutputType | null
    _max: PrivateSessionMaxAggregateOutputType | null
  }

  type GetPrivateSessionGroupByPayload<T extends PrivateSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivateSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivateSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivateSessionGroupByOutputType[P]>
            : GetScalarType<T[P], PrivateSessionGroupByOutputType[P]>
        }
      >
    >


  export type PrivateSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    sessionDate?: boolean
    durationHours?: boolean
    price?: boolean
    instructorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
    bookings?: boolean | PrivateSession$bookingsArgs<ExtArgs>
    _count?: boolean | PrivateSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateSession"]>

  export type PrivateSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    sessionDate?: boolean
    durationHours?: boolean
    price?: boolean
    instructorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateSession"]>

  export type PrivateSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    sessionDate?: boolean
    durationHours?: boolean
    price?: boolean
    instructorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateSession"]>

  export type PrivateSessionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    sessionDate?: boolean
    durationHours?: boolean
    price?: boolean
    instructorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PrivateSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "sessionDate" | "durationHours" | "price" | "instructorId" | "createdAt" | "updatedAt", ExtArgs["result"]["privateSession"]>
  export type PrivateSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
    bookings?: boolean | PrivateSession$bookingsArgs<ExtArgs>
    _count?: boolean | PrivateSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrivateSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }
  export type PrivateSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }

  export type $PrivateSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrivateSession"
    objects: {
      instructor: Prisma.$InstructorPayload<ExtArgs>
      bookings: Prisma.$PrivateSessionBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      sessionDate: Date
      durationHours: number
      price: number
      instructorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["privateSession"]>
    composites: {}
  }

  type PrivateSessionGetPayload<S extends boolean | null | undefined | PrivateSessionDefaultArgs> = $Result.GetResult<Prisma.$PrivateSessionPayload, S>

  type PrivateSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrivateSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrivateSessionCountAggregateInputType | true
    }

  export interface PrivateSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrivateSession'], meta: { name: 'PrivateSession' } }
    /**
     * Find zero or one PrivateSession that matches the filter.
     * @param {PrivateSessionFindUniqueArgs} args - Arguments to find a PrivateSession
     * @example
     * // Get one PrivateSession
     * const privateSession = await prisma.privateSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrivateSessionFindUniqueArgs>(args: SelectSubset<T, PrivateSessionFindUniqueArgs<ExtArgs>>): Prisma__PrivateSessionClient<$Result.GetResult<Prisma.$PrivateSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrivateSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrivateSessionFindUniqueOrThrowArgs} args - Arguments to find a PrivateSession
     * @example
     * // Get one PrivateSession
     * const privateSession = await prisma.privateSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrivateSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, PrivateSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrivateSessionClient<$Result.GetResult<Prisma.$PrivateSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateSessionFindFirstArgs} args - Arguments to find a PrivateSession
     * @example
     * // Get one PrivateSession
     * const privateSession = await prisma.privateSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrivateSessionFindFirstArgs>(args?: SelectSubset<T, PrivateSessionFindFirstArgs<ExtArgs>>): Prisma__PrivateSessionClient<$Result.GetResult<Prisma.$PrivateSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateSessionFindFirstOrThrowArgs} args - Arguments to find a PrivateSession
     * @example
     * // Get one PrivateSession
     * const privateSession = await prisma.privateSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrivateSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, PrivateSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrivateSessionClient<$Result.GetResult<Prisma.$PrivateSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrivateSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivateSessions
     * const privateSessions = await prisma.privateSession.findMany()
     * 
     * // Get first 10 PrivateSessions
     * const privateSessions = await prisma.privateSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const privateSessionWithIdOnly = await prisma.privateSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrivateSessionFindManyArgs>(args?: SelectSubset<T, PrivateSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrivateSession.
     * @param {PrivateSessionCreateArgs} args - Arguments to create a PrivateSession.
     * @example
     * // Create one PrivateSession
     * const PrivateSession = await prisma.privateSession.create({
     *   data: {
     *     // ... data to create a PrivateSession
     *   }
     * })
     * 
     */
    create<T extends PrivateSessionCreateArgs>(args: SelectSubset<T, PrivateSessionCreateArgs<ExtArgs>>): Prisma__PrivateSessionClient<$Result.GetResult<Prisma.$PrivateSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrivateSessions.
     * @param {PrivateSessionCreateManyArgs} args - Arguments to create many PrivateSessions.
     * @example
     * // Create many PrivateSessions
     * const privateSession = await prisma.privateSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrivateSessionCreateManyArgs>(args?: SelectSubset<T, PrivateSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrivateSessions and returns the data saved in the database.
     * @param {PrivateSessionCreateManyAndReturnArgs} args - Arguments to create many PrivateSessions.
     * @example
     * // Create many PrivateSessions
     * const privateSession = await prisma.privateSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrivateSessions and only return the `id`
     * const privateSessionWithIdOnly = await prisma.privateSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrivateSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, PrivateSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrivateSession.
     * @param {PrivateSessionDeleteArgs} args - Arguments to delete one PrivateSession.
     * @example
     * // Delete one PrivateSession
     * const PrivateSession = await prisma.privateSession.delete({
     *   where: {
     *     // ... filter to delete one PrivateSession
     *   }
     * })
     * 
     */
    delete<T extends PrivateSessionDeleteArgs>(args: SelectSubset<T, PrivateSessionDeleteArgs<ExtArgs>>): Prisma__PrivateSessionClient<$Result.GetResult<Prisma.$PrivateSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrivateSession.
     * @param {PrivateSessionUpdateArgs} args - Arguments to update one PrivateSession.
     * @example
     * // Update one PrivateSession
     * const privateSession = await prisma.privateSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrivateSessionUpdateArgs>(args: SelectSubset<T, PrivateSessionUpdateArgs<ExtArgs>>): Prisma__PrivateSessionClient<$Result.GetResult<Prisma.$PrivateSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrivateSessions.
     * @param {PrivateSessionDeleteManyArgs} args - Arguments to filter PrivateSessions to delete.
     * @example
     * // Delete a few PrivateSessions
     * const { count } = await prisma.privateSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrivateSessionDeleteManyArgs>(args?: SelectSubset<T, PrivateSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivateSessions
     * const privateSession = await prisma.privateSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrivateSessionUpdateManyArgs>(args: SelectSubset<T, PrivateSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateSessions and returns the data updated in the database.
     * @param {PrivateSessionUpdateManyAndReturnArgs} args - Arguments to update many PrivateSessions.
     * @example
     * // Update many PrivateSessions
     * const privateSession = await prisma.privateSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrivateSessions and only return the `id`
     * const privateSessionWithIdOnly = await prisma.privateSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrivateSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, PrivateSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrivateSession.
     * @param {PrivateSessionUpsertArgs} args - Arguments to update or create a PrivateSession.
     * @example
     * // Update or create a PrivateSession
     * const privateSession = await prisma.privateSession.upsert({
     *   create: {
     *     // ... data to create a PrivateSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivateSession we want to update
     *   }
     * })
     */
    upsert<T extends PrivateSessionUpsertArgs>(args: SelectSubset<T, PrivateSessionUpsertArgs<ExtArgs>>): Prisma__PrivateSessionClient<$Result.GetResult<Prisma.$PrivateSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrivateSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateSessionCountArgs} args - Arguments to filter PrivateSessions to count.
     * @example
     * // Count the number of PrivateSessions
     * const count = await prisma.privateSession.count({
     *   where: {
     *     // ... the filter for the PrivateSessions we want to count
     *   }
     * })
    **/
    count<T extends PrivateSessionCountArgs>(
      args?: Subset<T, PrivateSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivateSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrivateSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrivateSessionAggregateArgs>(args: Subset<T, PrivateSessionAggregateArgs>): Prisma.PrismaPromise<GetPrivateSessionAggregateType<T>>

    /**
     * Group by PrivateSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateSessionGroupByArgs} args - Group by arguments.
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
      T extends PrivateSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivateSessionGroupByArgs['orderBy'] }
        : { orderBy?: PrivateSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrivateSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivateSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrivateSession model
   */
  readonly fields: PrivateSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivateSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrivateSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructor<T extends InstructorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstructorDefaultArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends PrivateSession$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, PrivateSession$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateSessionBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PrivateSession model
   */
  interface PrivateSessionFieldRefs {
    readonly id: FieldRef<"PrivateSession", 'Int'>
    readonly title: FieldRef<"PrivateSession", 'String'>
    readonly description: FieldRef<"PrivateSession", 'String'>
    readonly sessionDate: FieldRef<"PrivateSession", 'DateTime'>
    readonly durationHours: FieldRef<"PrivateSession", 'Float'>
    readonly price: FieldRef<"PrivateSession", 'Float'>
    readonly instructorId: FieldRef<"PrivateSession", 'Int'>
    readonly createdAt: FieldRef<"PrivateSession", 'DateTime'>
    readonly updatedAt: FieldRef<"PrivateSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PrivateSession findUnique
   */
  export type PrivateSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSession
     */
    select?: PrivateSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSession
     */
    omit?: PrivateSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionInclude<ExtArgs> | null
    /**
     * Filter, which PrivateSession to fetch.
     */
    where: PrivateSessionWhereUniqueInput
  }

  /**
   * PrivateSession findUniqueOrThrow
   */
  export type PrivateSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSession
     */
    select?: PrivateSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSession
     */
    omit?: PrivateSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionInclude<ExtArgs> | null
    /**
     * Filter, which PrivateSession to fetch.
     */
    where: PrivateSessionWhereUniqueInput
  }

  /**
   * PrivateSession findFirst
   */
  export type PrivateSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSession
     */
    select?: PrivateSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSession
     */
    omit?: PrivateSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionInclude<ExtArgs> | null
    /**
     * Filter, which PrivateSession to fetch.
     */
    where?: PrivateSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateSessions to fetch.
     */
    orderBy?: PrivateSessionOrderByWithRelationInput | PrivateSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateSessions.
     */
    cursor?: PrivateSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateSessions.
     */
    distinct?: PrivateSessionScalarFieldEnum | PrivateSessionScalarFieldEnum[]
  }

  /**
   * PrivateSession findFirstOrThrow
   */
  export type PrivateSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSession
     */
    select?: PrivateSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSession
     */
    omit?: PrivateSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionInclude<ExtArgs> | null
    /**
     * Filter, which PrivateSession to fetch.
     */
    where?: PrivateSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateSessions to fetch.
     */
    orderBy?: PrivateSessionOrderByWithRelationInput | PrivateSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateSessions.
     */
    cursor?: PrivateSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateSessions.
     */
    distinct?: PrivateSessionScalarFieldEnum | PrivateSessionScalarFieldEnum[]
  }

  /**
   * PrivateSession findMany
   */
  export type PrivateSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSession
     */
    select?: PrivateSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSession
     */
    omit?: PrivateSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionInclude<ExtArgs> | null
    /**
     * Filter, which PrivateSessions to fetch.
     */
    where?: PrivateSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateSessions to fetch.
     */
    orderBy?: PrivateSessionOrderByWithRelationInput | PrivateSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrivateSessions.
     */
    cursor?: PrivateSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateSessions.
     */
    distinct?: PrivateSessionScalarFieldEnum | PrivateSessionScalarFieldEnum[]
  }

  /**
   * PrivateSession create
   */
  export type PrivateSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSession
     */
    select?: PrivateSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSession
     */
    omit?: PrivateSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a PrivateSession.
     */
    data: XOR<PrivateSessionCreateInput, PrivateSessionUncheckedCreateInput>
  }

  /**
   * PrivateSession createMany
   */
  export type PrivateSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrivateSessions.
     */
    data: PrivateSessionCreateManyInput | PrivateSessionCreateManyInput[]
  }

  /**
   * PrivateSession createManyAndReturn
   */
  export type PrivateSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSession
     */
    select?: PrivateSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSession
     */
    omit?: PrivateSessionOmit<ExtArgs> | null
    /**
     * The data used to create many PrivateSessions.
     */
    data: PrivateSessionCreateManyInput | PrivateSessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateSession update
   */
  export type PrivateSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSession
     */
    select?: PrivateSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSession
     */
    omit?: PrivateSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a PrivateSession.
     */
    data: XOR<PrivateSessionUpdateInput, PrivateSessionUncheckedUpdateInput>
    /**
     * Choose, which PrivateSession to update.
     */
    where: PrivateSessionWhereUniqueInput
  }

  /**
   * PrivateSession updateMany
   */
  export type PrivateSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrivateSessions.
     */
    data: XOR<PrivateSessionUpdateManyMutationInput, PrivateSessionUncheckedUpdateManyInput>
    /**
     * Filter which PrivateSessions to update
     */
    where?: PrivateSessionWhereInput
    /**
     * Limit how many PrivateSessions to update.
     */
    limit?: number
  }

  /**
   * PrivateSession updateManyAndReturn
   */
  export type PrivateSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSession
     */
    select?: PrivateSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSession
     */
    omit?: PrivateSessionOmit<ExtArgs> | null
    /**
     * The data used to update PrivateSessions.
     */
    data: XOR<PrivateSessionUpdateManyMutationInput, PrivateSessionUncheckedUpdateManyInput>
    /**
     * Filter which PrivateSessions to update
     */
    where?: PrivateSessionWhereInput
    /**
     * Limit how many PrivateSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateSession upsert
   */
  export type PrivateSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSession
     */
    select?: PrivateSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSession
     */
    omit?: PrivateSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the PrivateSession to update in case it exists.
     */
    where: PrivateSessionWhereUniqueInput
    /**
     * In case the PrivateSession found by the `where` argument doesn't exist, create a new PrivateSession with this data.
     */
    create: XOR<PrivateSessionCreateInput, PrivateSessionUncheckedCreateInput>
    /**
     * In case the PrivateSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrivateSessionUpdateInput, PrivateSessionUncheckedUpdateInput>
  }

  /**
   * PrivateSession delete
   */
  export type PrivateSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSession
     */
    select?: PrivateSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSession
     */
    omit?: PrivateSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionInclude<ExtArgs> | null
    /**
     * Filter which PrivateSession to delete.
     */
    where: PrivateSessionWhereUniqueInput
  }

  /**
   * PrivateSession deleteMany
   */
  export type PrivateSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateSessions to delete
     */
    where?: PrivateSessionWhereInput
    /**
     * Limit how many PrivateSessions to delete.
     */
    limit?: number
  }

  /**
   * PrivateSession.bookings
   */
  export type PrivateSession$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSessionBooking
     */
    select?: PrivateSessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSessionBooking
     */
    omit?: PrivateSessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionBookingInclude<ExtArgs> | null
    where?: PrivateSessionBookingWhereInput
    orderBy?: PrivateSessionBookingOrderByWithRelationInput | PrivateSessionBookingOrderByWithRelationInput[]
    cursor?: PrivateSessionBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateSessionBookingScalarFieldEnum | PrivateSessionBookingScalarFieldEnum[]
  }

  /**
   * PrivateSession without action
   */
  export type PrivateSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSession
     */
    select?: PrivateSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSession
     */
    omit?: PrivateSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionInclude<ExtArgs> | null
  }


  /**
   * Model PrivateSessionBooking
   */

  export type AggregatePrivateSessionBooking = {
    _count: PrivateSessionBookingCountAggregateOutputType | null
    _avg: PrivateSessionBookingAvgAggregateOutputType | null
    _sum: PrivateSessionBookingSumAggregateOutputType | null
    _min: PrivateSessionBookingMinAggregateOutputType | null
    _max: PrivateSessionBookingMaxAggregateOutputType | null
  }

  export type PrivateSessionBookingAvgAggregateOutputType = {
    id: number | null
    privateSessionId: number | null
    studentId: number | null
    amountPaid: number | null
  }

  export type PrivateSessionBookingSumAggregateOutputType = {
    id: number | null
    privateSessionId: number | null
    studentId: number | null
    amountPaid: number | null
  }

  export type PrivateSessionBookingMinAggregateOutputType = {
    id: number | null
    privateSessionId: number | null
    studentId: number | null
    paid: boolean | null
    paidAt: Date | null
    amountPaid: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrivateSessionBookingMaxAggregateOutputType = {
    id: number | null
    privateSessionId: number | null
    studentId: number | null
    paid: boolean | null
    paidAt: Date | null
    amountPaid: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrivateSessionBookingCountAggregateOutputType = {
    id: number
    privateSessionId: number
    studentId: number
    paid: number
    paidAt: number
    amountPaid: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PrivateSessionBookingAvgAggregateInputType = {
    id?: true
    privateSessionId?: true
    studentId?: true
    amountPaid?: true
  }

  export type PrivateSessionBookingSumAggregateInputType = {
    id?: true
    privateSessionId?: true
    studentId?: true
    amountPaid?: true
  }

  export type PrivateSessionBookingMinAggregateInputType = {
    id?: true
    privateSessionId?: true
    studentId?: true
    paid?: true
    paidAt?: true
    amountPaid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrivateSessionBookingMaxAggregateInputType = {
    id?: true
    privateSessionId?: true
    studentId?: true
    paid?: true
    paidAt?: true
    amountPaid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrivateSessionBookingCountAggregateInputType = {
    id?: true
    privateSessionId?: true
    studentId?: true
    paid?: true
    paidAt?: true
    amountPaid?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PrivateSessionBookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateSessionBooking to aggregate.
     */
    where?: PrivateSessionBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateSessionBookings to fetch.
     */
    orderBy?: PrivateSessionBookingOrderByWithRelationInput | PrivateSessionBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrivateSessionBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateSessionBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateSessionBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrivateSessionBookings
    **/
    _count?: true | PrivateSessionBookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrivateSessionBookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrivateSessionBookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivateSessionBookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivateSessionBookingMaxAggregateInputType
  }

  export type GetPrivateSessionBookingAggregateType<T extends PrivateSessionBookingAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivateSessionBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivateSessionBooking[P]>
      : GetScalarType<T[P], AggregatePrivateSessionBooking[P]>
  }




  export type PrivateSessionBookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateSessionBookingWhereInput
    orderBy?: PrivateSessionBookingOrderByWithAggregationInput | PrivateSessionBookingOrderByWithAggregationInput[]
    by: PrivateSessionBookingScalarFieldEnum[] | PrivateSessionBookingScalarFieldEnum
    having?: PrivateSessionBookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivateSessionBookingCountAggregateInputType | true
    _avg?: PrivateSessionBookingAvgAggregateInputType
    _sum?: PrivateSessionBookingSumAggregateInputType
    _min?: PrivateSessionBookingMinAggregateInputType
    _max?: PrivateSessionBookingMaxAggregateInputType
  }

  export type PrivateSessionBookingGroupByOutputType = {
    id: number
    privateSessionId: number
    studentId: number
    paid: boolean
    paidAt: Date | null
    amountPaid: number | null
    createdAt: Date
    updatedAt: Date
    _count: PrivateSessionBookingCountAggregateOutputType | null
    _avg: PrivateSessionBookingAvgAggregateOutputType | null
    _sum: PrivateSessionBookingSumAggregateOutputType | null
    _min: PrivateSessionBookingMinAggregateOutputType | null
    _max: PrivateSessionBookingMaxAggregateOutputType | null
  }

  type GetPrivateSessionBookingGroupByPayload<T extends PrivateSessionBookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivateSessionBookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivateSessionBookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivateSessionBookingGroupByOutputType[P]>
            : GetScalarType<T[P], PrivateSessionBookingGroupByOutputType[P]>
        }
      >
    >


  export type PrivateSessionBookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    privateSessionId?: boolean
    studentId?: boolean
    paid?: boolean
    paidAt?: boolean
    amountPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    privateSession?: boolean | PrivateSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateSessionBooking"]>

  export type PrivateSessionBookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    privateSessionId?: boolean
    studentId?: boolean
    paid?: boolean
    paidAt?: boolean
    amountPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    privateSession?: boolean | PrivateSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateSessionBooking"]>

  export type PrivateSessionBookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    privateSessionId?: boolean
    studentId?: boolean
    paid?: boolean
    paidAt?: boolean
    amountPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    privateSession?: boolean | PrivateSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateSessionBooking"]>

  export type PrivateSessionBookingSelectScalar = {
    id?: boolean
    privateSessionId?: boolean
    studentId?: boolean
    paid?: boolean
    paidAt?: boolean
    amountPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PrivateSessionBookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "privateSessionId" | "studentId" | "paid" | "paidAt" | "amountPaid" | "createdAt" | "updatedAt", ExtArgs["result"]["privateSessionBooking"]>
  export type PrivateSessionBookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    privateSession?: boolean | PrivateSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type PrivateSessionBookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    privateSession?: boolean | PrivateSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type PrivateSessionBookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    privateSession?: boolean | PrivateSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $PrivateSessionBookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrivateSessionBooking"
    objects: {
      privateSession: Prisma.$PrivateSessionPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      privateSessionId: number
      studentId: number
      paid: boolean
      paidAt: Date | null
      amountPaid: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["privateSessionBooking"]>
    composites: {}
  }

  type PrivateSessionBookingGetPayload<S extends boolean | null | undefined | PrivateSessionBookingDefaultArgs> = $Result.GetResult<Prisma.$PrivateSessionBookingPayload, S>

  type PrivateSessionBookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrivateSessionBookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrivateSessionBookingCountAggregateInputType | true
    }

  export interface PrivateSessionBookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrivateSessionBooking'], meta: { name: 'PrivateSessionBooking' } }
    /**
     * Find zero or one PrivateSessionBooking that matches the filter.
     * @param {PrivateSessionBookingFindUniqueArgs} args - Arguments to find a PrivateSessionBooking
     * @example
     * // Get one PrivateSessionBooking
     * const privateSessionBooking = await prisma.privateSessionBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrivateSessionBookingFindUniqueArgs>(args: SelectSubset<T, PrivateSessionBookingFindUniqueArgs<ExtArgs>>): Prisma__PrivateSessionBookingClient<$Result.GetResult<Prisma.$PrivateSessionBookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrivateSessionBooking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrivateSessionBookingFindUniqueOrThrowArgs} args - Arguments to find a PrivateSessionBooking
     * @example
     * // Get one PrivateSessionBooking
     * const privateSessionBooking = await prisma.privateSessionBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrivateSessionBookingFindUniqueOrThrowArgs>(args: SelectSubset<T, PrivateSessionBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrivateSessionBookingClient<$Result.GetResult<Prisma.$PrivateSessionBookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateSessionBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateSessionBookingFindFirstArgs} args - Arguments to find a PrivateSessionBooking
     * @example
     * // Get one PrivateSessionBooking
     * const privateSessionBooking = await prisma.privateSessionBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrivateSessionBookingFindFirstArgs>(args?: SelectSubset<T, PrivateSessionBookingFindFirstArgs<ExtArgs>>): Prisma__PrivateSessionBookingClient<$Result.GetResult<Prisma.$PrivateSessionBookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateSessionBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateSessionBookingFindFirstOrThrowArgs} args - Arguments to find a PrivateSessionBooking
     * @example
     * // Get one PrivateSessionBooking
     * const privateSessionBooking = await prisma.privateSessionBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrivateSessionBookingFindFirstOrThrowArgs>(args?: SelectSubset<T, PrivateSessionBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrivateSessionBookingClient<$Result.GetResult<Prisma.$PrivateSessionBookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrivateSessionBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateSessionBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivateSessionBookings
     * const privateSessionBookings = await prisma.privateSessionBooking.findMany()
     * 
     * // Get first 10 PrivateSessionBookings
     * const privateSessionBookings = await prisma.privateSessionBooking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const privateSessionBookingWithIdOnly = await prisma.privateSessionBooking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrivateSessionBookingFindManyArgs>(args?: SelectSubset<T, PrivateSessionBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateSessionBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrivateSessionBooking.
     * @param {PrivateSessionBookingCreateArgs} args - Arguments to create a PrivateSessionBooking.
     * @example
     * // Create one PrivateSessionBooking
     * const PrivateSessionBooking = await prisma.privateSessionBooking.create({
     *   data: {
     *     // ... data to create a PrivateSessionBooking
     *   }
     * })
     * 
     */
    create<T extends PrivateSessionBookingCreateArgs>(args: SelectSubset<T, PrivateSessionBookingCreateArgs<ExtArgs>>): Prisma__PrivateSessionBookingClient<$Result.GetResult<Prisma.$PrivateSessionBookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrivateSessionBookings.
     * @param {PrivateSessionBookingCreateManyArgs} args - Arguments to create many PrivateSessionBookings.
     * @example
     * // Create many PrivateSessionBookings
     * const privateSessionBooking = await prisma.privateSessionBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrivateSessionBookingCreateManyArgs>(args?: SelectSubset<T, PrivateSessionBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrivateSessionBookings and returns the data saved in the database.
     * @param {PrivateSessionBookingCreateManyAndReturnArgs} args - Arguments to create many PrivateSessionBookings.
     * @example
     * // Create many PrivateSessionBookings
     * const privateSessionBooking = await prisma.privateSessionBooking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrivateSessionBookings and only return the `id`
     * const privateSessionBookingWithIdOnly = await prisma.privateSessionBooking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrivateSessionBookingCreateManyAndReturnArgs>(args?: SelectSubset<T, PrivateSessionBookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateSessionBookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrivateSessionBooking.
     * @param {PrivateSessionBookingDeleteArgs} args - Arguments to delete one PrivateSessionBooking.
     * @example
     * // Delete one PrivateSessionBooking
     * const PrivateSessionBooking = await prisma.privateSessionBooking.delete({
     *   where: {
     *     // ... filter to delete one PrivateSessionBooking
     *   }
     * })
     * 
     */
    delete<T extends PrivateSessionBookingDeleteArgs>(args: SelectSubset<T, PrivateSessionBookingDeleteArgs<ExtArgs>>): Prisma__PrivateSessionBookingClient<$Result.GetResult<Prisma.$PrivateSessionBookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrivateSessionBooking.
     * @param {PrivateSessionBookingUpdateArgs} args - Arguments to update one PrivateSessionBooking.
     * @example
     * // Update one PrivateSessionBooking
     * const privateSessionBooking = await prisma.privateSessionBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrivateSessionBookingUpdateArgs>(args: SelectSubset<T, PrivateSessionBookingUpdateArgs<ExtArgs>>): Prisma__PrivateSessionBookingClient<$Result.GetResult<Prisma.$PrivateSessionBookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrivateSessionBookings.
     * @param {PrivateSessionBookingDeleteManyArgs} args - Arguments to filter PrivateSessionBookings to delete.
     * @example
     * // Delete a few PrivateSessionBookings
     * const { count } = await prisma.privateSessionBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrivateSessionBookingDeleteManyArgs>(args?: SelectSubset<T, PrivateSessionBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateSessionBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateSessionBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivateSessionBookings
     * const privateSessionBooking = await prisma.privateSessionBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrivateSessionBookingUpdateManyArgs>(args: SelectSubset<T, PrivateSessionBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateSessionBookings and returns the data updated in the database.
     * @param {PrivateSessionBookingUpdateManyAndReturnArgs} args - Arguments to update many PrivateSessionBookings.
     * @example
     * // Update many PrivateSessionBookings
     * const privateSessionBooking = await prisma.privateSessionBooking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrivateSessionBookings and only return the `id`
     * const privateSessionBookingWithIdOnly = await prisma.privateSessionBooking.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrivateSessionBookingUpdateManyAndReturnArgs>(args: SelectSubset<T, PrivateSessionBookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateSessionBookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrivateSessionBooking.
     * @param {PrivateSessionBookingUpsertArgs} args - Arguments to update or create a PrivateSessionBooking.
     * @example
     * // Update or create a PrivateSessionBooking
     * const privateSessionBooking = await prisma.privateSessionBooking.upsert({
     *   create: {
     *     // ... data to create a PrivateSessionBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivateSessionBooking we want to update
     *   }
     * })
     */
    upsert<T extends PrivateSessionBookingUpsertArgs>(args: SelectSubset<T, PrivateSessionBookingUpsertArgs<ExtArgs>>): Prisma__PrivateSessionBookingClient<$Result.GetResult<Prisma.$PrivateSessionBookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrivateSessionBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateSessionBookingCountArgs} args - Arguments to filter PrivateSessionBookings to count.
     * @example
     * // Count the number of PrivateSessionBookings
     * const count = await prisma.privateSessionBooking.count({
     *   where: {
     *     // ... the filter for the PrivateSessionBookings we want to count
     *   }
     * })
    **/
    count<T extends PrivateSessionBookingCountArgs>(
      args?: Subset<T, PrivateSessionBookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivateSessionBookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrivateSessionBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateSessionBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrivateSessionBookingAggregateArgs>(args: Subset<T, PrivateSessionBookingAggregateArgs>): Prisma.PrismaPromise<GetPrivateSessionBookingAggregateType<T>>

    /**
     * Group by PrivateSessionBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateSessionBookingGroupByArgs} args - Group by arguments.
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
      T extends PrivateSessionBookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivateSessionBookingGroupByArgs['orderBy'] }
        : { orderBy?: PrivateSessionBookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrivateSessionBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivateSessionBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrivateSessionBooking model
   */
  readonly fields: PrivateSessionBookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivateSessionBooking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrivateSessionBookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    privateSession<T extends PrivateSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrivateSessionDefaultArgs<ExtArgs>>): Prisma__PrivateSessionClient<$Result.GetResult<Prisma.$PrivateSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PrivateSessionBooking model
   */
  interface PrivateSessionBookingFieldRefs {
    readonly id: FieldRef<"PrivateSessionBooking", 'Int'>
    readonly privateSessionId: FieldRef<"PrivateSessionBooking", 'Int'>
    readonly studentId: FieldRef<"PrivateSessionBooking", 'Int'>
    readonly paid: FieldRef<"PrivateSessionBooking", 'Boolean'>
    readonly paidAt: FieldRef<"PrivateSessionBooking", 'DateTime'>
    readonly amountPaid: FieldRef<"PrivateSessionBooking", 'Float'>
    readonly createdAt: FieldRef<"PrivateSessionBooking", 'DateTime'>
    readonly updatedAt: FieldRef<"PrivateSessionBooking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PrivateSessionBooking findUnique
   */
  export type PrivateSessionBookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSessionBooking
     */
    select?: PrivateSessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSessionBooking
     */
    omit?: PrivateSessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionBookingInclude<ExtArgs> | null
    /**
     * Filter, which PrivateSessionBooking to fetch.
     */
    where: PrivateSessionBookingWhereUniqueInput
  }

  /**
   * PrivateSessionBooking findUniqueOrThrow
   */
  export type PrivateSessionBookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSessionBooking
     */
    select?: PrivateSessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSessionBooking
     */
    omit?: PrivateSessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionBookingInclude<ExtArgs> | null
    /**
     * Filter, which PrivateSessionBooking to fetch.
     */
    where: PrivateSessionBookingWhereUniqueInput
  }

  /**
   * PrivateSessionBooking findFirst
   */
  export type PrivateSessionBookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSessionBooking
     */
    select?: PrivateSessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSessionBooking
     */
    omit?: PrivateSessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionBookingInclude<ExtArgs> | null
    /**
     * Filter, which PrivateSessionBooking to fetch.
     */
    where?: PrivateSessionBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateSessionBookings to fetch.
     */
    orderBy?: PrivateSessionBookingOrderByWithRelationInput | PrivateSessionBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateSessionBookings.
     */
    cursor?: PrivateSessionBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateSessionBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateSessionBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateSessionBookings.
     */
    distinct?: PrivateSessionBookingScalarFieldEnum | PrivateSessionBookingScalarFieldEnum[]
  }

  /**
   * PrivateSessionBooking findFirstOrThrow
   */
  export type PrivateSessionBookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSessionBooking
     */
    select?: PrivateSessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSessionBooking
     */
    omit?: PrivateSessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionBookingInclude<ExtArgs> | null
    /**
     * Filter, which PrivateSessionBooking to fetch.
     */
    where?: PrivateSessionBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateSessionBookings to fetch.
     */
    orderBy?: PrivateSessionBookingOrderByWithRelationInput | PrivateSessionBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateSessionBookings.
     */
    cursor?: PrivateSessionBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateSessionBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateSessionBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateSessionBookings.
     */
    distinct?: PrivateSessionBookingScalarFieldEnum | PrivateSessionBookingScalarFieldEnum[]
  }

  /**
   * PrivateSessionBooking findMany
   */
  export type PrivateSessionBookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSessionBooking
     */
    select?: PrivateSessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSessionBooking
     */
    omit?: PrivateSessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionBookingInclude<ExtArgs> | null
    /**
     * Filter, which PrivateSessionBookings to fetch.
     */
    where?: PrivateSessionBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateSessionBookings to fetch.
     */
    orderBy?: PrivateSessionBookingOrderByWithRelationInput | PrivateSessionBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrivateSessionBookings.
     */
    cursor?: PrivateSessionBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateSessionBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateSessionBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateSessionBookings.
     */
    distinct?: PrivateSessionBookingScalarFieldEnum | PrivateSessionBookingScalarFieldEnum[]
  }

  /**
   * PrivateSessionBooking create
   */
  export type PrivateSessionBookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSessionBooking
     */
    select?: PrivateSessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSessionBooking
     */
    omit?: PrivateSessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionBookingInclude<ExtArgs> | null
    /**
     * The data needed to create a PrivateSessionBooking.
     */
    data: XOR<PrivateSessionBookingCreateInput, PrivateSessionBookingUncheckedCreateInput>
  }

  /**
   * PrivateSessionBooking createMany
   */
  export type PrivateSessionBookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrivateSessionBookings.
     */
    data: PrivateSessionBookingCreateManyInput | PrivateSessionBookingCreateManyInput[]
  }

  /**
   * PrivateSessionBooking createManyAndReturn
   */
  export type PrivateSessionBookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSessionBooking
     */
    select?: PrivateSessionBookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSessionBooking
     */
    omit?: PrivateSessionBookingOmit<ExtArgs> | null
    /**
     * The data used to create many PrivateSessionBookings.
     */
    data: PrivateSessionBookingCreateManyInput | PrivateSessionBookingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionBookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateSessionBooking update
   */
  export type PrivateSessionBookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSessionBooking
     */
    select?: PrivateSessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSessionBooking
     */
    omit?: PrivateSessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionBookingInclude<ExtArgs> | null
    /**
     * The data needed to update a PrivateSessionBooking.
     */
    data: XOR<PrivateSessionBookingUpdateInput, PrivateSessionBookingUncheckedUpdateInput>
    /**
     * Choose, which PrivateSessionBooking to update.
     */
    where: PrivateSessionBookingWhereUniqueInput
  }

  /**
   * PrivateSessionBooking updateMany
   */
  export type PrivateSessionBookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrivateSessionBookings.
     */
    data: XOR<PrivateSessionBookingUpdateManyMutationInput, PrivateSessionBookingUncheckedUpdateManyInput>
    /**
     * Filter which PrivateSessionBookings to update
     */
    where?: PrivateSessionBookingWhereInput
    /**
     * Limit how many PrivateSessionBookings to update.
     */
    limit?: number
  }

  /**
   * PrivateSessionBooking updateManyAndReturn
   */
  export type PrivateSessionBookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSessionBooking
     */
    select?: PrivateSessionBookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSessionBooking
     */
    omit?: PrivateSessionBookingOmit<ExtArgs> | null
    /**
     * The data used to update PrivateSessionBookings.
     */
    data: XOR<PrivateSessionBookingUpdateManyMutationInput, PrivateSessionBookingUncheckedUpdateManyInput>
    /**
     * Filter which PrivateSessionBookings to update
     */
    where?: PrivateSessionBookingWhereInput
    /**
     * Limit how many PrivateSessionBookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionBookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateSessionBooking upsert
   */
  export type PrivateSessionBookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSessionBooking
     */
    select?: PrivateSessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSessionBooking
     */
    omit?: PrivateSessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionBookingInclude<ExtArgs> | null
    /**
     * The filter to search for the PrivateSessionBooking to update in case it exists.
     */
    where: PrivateSessionBookingWhereUniqueInput
    /**
     * In case the PrivateSessionBooking found by the `where` argument doesn't exist, create a new PrivateSessionBooking with this data.
     */
    create: XOR<PrivateSessionBookingCreateInput, PrivateSessionBookingUncheckedCreateInput>
    /**
     * In case the PrivateSessionBooking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrivateSessionBookingUpdateInput, PrivateSessionBookingUncheckedUpdateInput>
  }

  /**
   * PrivateSessionBooking delete
   */
  export type PrivateSessionBookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSessionBooking
     */
    select?: PrivateSessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSessionBooking
     */
    omit?: PrivateSessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionBookingInclude<ExtArgs> | null
    /**
     * Filter which PrivateSessionBooking to delete.
     */
    where: PrivateSessionBookingWhereUniqueInput
  }

  /**
   * PrivateSessionBooking deleteMany
   */
  export type PrivateSessionBookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateSessionBookings to delete
     */
    where?: PrivateSessionBookingWhereInput
    /**
     * Limit how many PrivateSessionBookings to delete.
     */
    limit?: number
  }

  /**
   * PrivateSessionBooking without action
   */
  export type PrivateSessionBookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateSessionBooking
     */
    select?: PrivateSessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateSessionBooking
     */
    omit?: PrivateSessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateSessionBookingInclude<ExtArgs> | null
  }


  /**
   * Model InstructorEarning
   */

  export type AggregateInstructorEarning = {
    _count: InstructorEarningCountAggregateOutputType | null
    _avg: InstructorEarningAvgAggregateOutputType | null
    _sum: InstructorEarningSumAggregateOutputType | null
    _min: InstructorEarningMinAggregateOutputType | null
    _max: InstructorEarningMaxAggregateOutputType | null
  }

  export type InstructorEarningAvgAggregateOutputType = {
    id: number | null
    instructorId: number | null
    month: number | null
    year: number | null
    totalRevenue: number | null
    earningAmount: number | null
  }

  export type InstructorEarningSumAggregateOutputType = {
    id: number | null
    instructorId: number | null
    month: number | null
    year: number | null
    totalRevenue: number | null
    earningAmount: number | null
  }

  export type InstructorEarningMinAggregateOutputType = {
    id: number | null
    instructorId: number | null
    month: number | null
    year: number | null
    totalRevenue: number | null
    earningAmount: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstructorEarningMaxAggregateOutputType = {
    id: number | null
    instructorId: number | null
    month: number | null
    year: number | null
    totalRevenue: number | null
    earningAmount: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstructorEarningCountAggregateOutputType = {
    id: number
    instructorId: number
    month: number
    year: number
    totalRevenue: number
    earningAmount: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InstructorEarningAvgAggregateInputType = {
    id?: true
    instructorId?: true
    month?: true
    year?: true
    totalRevenue?: true
    earningAmount?: true
  }

  export type InstructorEarningSumAggregateInputType = {
    id?: true
    instructorId?: true
    month?: true
    year?: true
    totalRevenue?: true
    earningAmount?: true
  }

  export type InstructorEarningMinAggregateInputType = {
    id?: true
    instructorId?: true
    month?: true
    year?: true
    totalRevenue?: true
    earningAmount?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstructorEarningMaxAggregateInputType = {
    id?: true
    instructorId?: true
    month?: true
    year?: true
    totalRevenue?: true
    earningAmount?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstructorEarningCountAggregateInputType = {
    id?: true
    instructorId?: true
    month?: true
    year?: true
    totalRevenue?: true
    earningAmount?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InstructorEarningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstructorEarning to aggregate.
     */
    where?: InstructorEarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorEarnings to fetch.
     */
    orderBy?: InstructorEarningOrderByWithRelationInput | InstructorEarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructorEarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorEarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstructorEarnings
    **/
    _count?: true | InstructorEarningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstructorEarningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstructorEarningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorEarningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorEarningMaxAggregateInputType
  }

  export type GetInstructorEarningAggregateType<T extends InstructorEarningAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructorEarning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructorEarning[P]>
      : GetScalarType<T[P], AggregateInstructorEarning[P]>
  }




  export type InstructorEarningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorEarningWhereInput
    orderBy?: InstructorEarningOrderByWithAggregationInput | InstructorEarningOrderByWithAggregationInput[]
    by: InstructorEarningScalarFieldEnum[] | InstructorEarningScalarFieldEnum
    having?: InstructorEarningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorEarningCountAggregateInputType | true
    _avg?: InstructorEarningAvgAggregateInputType
    _sum?: InstructorEarningSumAggregateInputType
    _min?: InstructorEarningMinAggregateInputType
    _max?: InstructorEarningMaxAggregateInputType
  }

  export type InstructorEarningGroupByOutputType = {
    id: number
    instructorId: number
    month: number
    year: number
    totalRevenue: number
    earningAmount: number
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: InstructorEarningCountAggregateOutputType | null
    _avg: InstructorEarningAvgAggregateOutputType | null
    _sum: InstructorEarningSumAggregateOutputType | null
    _min: InstructorEarningMinAggregateOutputType | null
    _max: InstructorEarningMaxAggregateOutputType | null
  }

  type GetInstructorEarningGroupByPayload<T extends InstructorEarningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorEarningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorEarningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorEarningGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorEarningGroupByOutputType[P]>
        }
      >
    >


  export type InstructorEarningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    month?: boolean
    year?: boolean
    totalRevenue?: boolean
    earningAmount?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorEarning"]>

  export type InstructorEarningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    month?: boolean
    year?: boolean
    totalRevenue?: boolean
    earningAmount?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorEarning"]>

  export type InstructorEarningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    month?: boolean
    year?: boolean
    totalRevenue?: boolean
    earningAmount?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorEarning"]>

  export type InstructorEarningSelectScalar = {
    id?: boolean
    instructorId?: boolean
    month?: boolean
    year?: boolean
    totalRevenue?: boolean
    earningAmount?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InstructorEarningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instructorId" | "month" | "year" | "totalRevenue" | "earningAmount" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["instructorEarning"]>
  export type InstructorEarningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }
  export type InstructorEarningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }
  export type InstructorEarningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }

  export type $InstructorEarningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstructorEarning"
    objects: {
      instructor: Prisma.$InstructorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instructorId: number
      month: number
      year: number
      totalRevenue: number
      earningAmount: number
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["instructorEarning"]>
    composites: {}
  }

  type InstructorEarningGetPayload<S extends boolean | null | undefined | InstructorEarningDefaultArgs> = $Result.GetResult<Prisma.$InstructorEarningPayload, S>

  type InstructorEarningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructorEarningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructorEarningCountAggregateInputType | true
    }

  export interface InstructorEarningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstructorEarning'], meta: { name: 'InstructorEarning' } }
    /**
     * Find zero or one InstructorEarning that matches the filter.
     * @param {InstructorEarningFindUniqueArgs} args - Arguments to find a InstructorEarning
     * @example
     * // Get one InstructorEarning
     * const instructorEarning = await prisma.instructorEarning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructorEarningFindUniqueArgs>(args: SelectSubset<T, InstructorEarningFindUniqueArgs<ExtArgs>>): Prisma__InstructorEarningClient<$Result.GetResult<Prisma.$InstructorEarningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstructorEarning that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructorEarningFindUniqueOrThrowArgs} args - Arguments to find a InstructorEarning
     * @example
     * // Get one InstructorEarning
     * const instructorEarning = await prisma.instructorEarning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructorEarningFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructorEarningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructorEarningClient<$Result.GetResult<Prisma.$InstructorEarningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstructorEarning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorEarningFindFirstArgs} args - Arguments to find a InstructorEarning
     * @example
     * // Get one InstructorEarning
     * const instructorEarning = await prisma.instructorEarning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructorEarningFindFirstArgs>(args?: SelectSubset<T, InstructorEarningFindFirstArgs<ExtArgs>>): Prisma__InstructorEarningClient<$Result.GetResult<Prisma.$InstructorEarningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstructorEarning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorEarningFindFirstOrThrowArgs} args - Arguments to find a InstructorEarning
     * @example
     * // Get one InstructorEarning
     * const instructorEarning = await prisma.instructorEarning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructorEarningFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructorEarningFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructorEarningClient<$Result.GetResult<Prisma.$InstructorEarningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstructorEarnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorEarningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstructorEarnings
     * const instructorEarnings = await prisma.instructorEarning.findMany()
     * 
     * // Get first 10 InstructorEarnings
     * const instructorEarnings = await prisma.instructorEarning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructorEarningWithIdOnly = await prisma.instructorEarning.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstructorEarningFindManyArgs>(args?: SelectSubset<T, InstructorEarningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorEarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstructorEarning.
     * @param {InstructorEarningCreateArgs} args - Arguments to create a InstructorEarning.
     * @example
     * // Create one InstructorEarning
     * const InstructorEarning = await prisma.instructorEarning.create({
     *   data: {
     *     // ... data to create a InstructorEarning
     *   }
     * })
     * 
     */
    create<T extends InstructorEarningCreateArgs>(args: SelectSubset<T, InstructorEarningCreateArgs<ExtArgs>>): Prisma__InstructorEarningClient<$Result.GetResult<Prisma.$InstructorEarningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstructorEarnings.
     * @param {InstructorEarningCreateManyArgs} args - Arguments to create many InstructorEarnings.
     * @example
     * // Create many InstructorEarnings
     * const instructorEarning = await prisma.instructorEarning.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructorEarningCreateManyArgs>(args?: SelectSubset<T, InstructorEarningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstructorEarnings and returns the data saved in the database.
     * @param {InstructorEarningCreateManyAndReturnArgs} args - Arguments to create many InstructorEarnings.
     * @example
     * // Create many InstructorEarnings
     * const instructorEarning = await prisma.instructorEarning.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstructorEarnings and only return the `id`
     * const instructorEarningWithIdOnly = await prisma.instructorEarning.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructorEarningCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructorEarningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorEarningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstructorEarning.
     * @param {InstructorEarningDeleteArgs} args - Arguments to delete one InstructorEarning.
     * @example
     * // Delete one InstructorEarning
     * const InstructorEarning = await prisma.instructorEarning.delete({
     *   where: {
     *     // ... filter to delete one InstructorEarning
     *   }
     * })
     * 
     */
    delete<T extends InstructorEarningDeleteArgs>(args: SelectSubset<T, InstructorEarningDeleteArgs<ExtArgs>>): Prisma__InstructorEarningClient<$Result.GetResult<Prisma.$InstructorEarningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstructorEarning.
     * @param {InstructorEarningUpdateArgs} args - Arguments to update one InstructorEarning.
     * @example
     * // Update one InstructorEarning
     * const instructorEarning = await prisma.instructorEarning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructorEarningUpdateArgs>(args: SelectSubset<T, InstructorEarningUpdateArgs<ExtArgs>>): Prisma__InstructorEarningClient<$Result.GetResult<Prisma.$InstructorEarningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstructorEarnings.
     * @param {InstructorEarningDeleteManyArgs} args - Arguments to filter InstructorEarnings to delete.
     * @example
     * // Delete a few InstructorEarnings
     * const { count } = await prisma.instructorEarning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructorEarningDeleteManyArgs>(args?: SelectSubset<T, InstructorEarningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstructorEarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorEarningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstructorEarnings
     * const instructorEarning = await prisma.instructorEarning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructorEarningUpdateManyArgs>(args: SelectSubset<T, InstructorEarningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstructorEarnings and returns the data updated in the database.
     * @param {InstructorEarningUpdateManyAndReturnArgs} args - Arguments to update many InstructorEarnings.
     * @example
     * // Update many InstructorEarnings
     * const instructorEarning = await prisma.instructorEarning.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstructorEarnings and only return the `id`
     * const instructorEarningWithIdOnly = await prisma.instructorEarning.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstructorEarningUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructorEarningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorEarningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstructorEarning.
     * @param {InstructorEarningUpsertArgs} args - Arguments to update or create a InstructorEarning.
     * @example
     * // Update or create a InstructorEarning
     * const instructorEarning = await prisma.instructorEarning.upsert({
     *   create: {
     *     // ... data to create a InstructorEarning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstructorEarning we want to update
     *   }
     * })
     */
    upsert<T extends InstructorEarningUpsertArgs>(args: SelectSubset<T, InstructorEarningUpsertArgs<ExtArgs>>): Prisma__InstructorEarningClient<$Result.GetResult<Prisma.$InstructorEarningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstructorEarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorEarningCountArgs} args - Arguments to filter InstructorEarnings to count.
     * @example
     * // Count the number of InstructorEarnings
     * const count = await prisma.instructorEarning.count({
     *   where: {
     *     // ... the filter for the InstructorEarnings we want to count
     *   }
     * })
    **/
    count<T extends InstructorEarningCountArgs>(
      args?: Subset<T, InstructorEarningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorEarningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstructorEarning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorEarningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstructorEarningAggregateArgs>(args: Subset<T, InstructorEarningAggregateArgs>): Prisma.PrismaPromise<GetInstructorEarningAggregateType<T>>

    /**
     * Group by InstructorEarning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorEarningGroupByArgs} args - Group by arguments.
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
      T extends InstructorEarningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructorEarningGroupByArgs['orderBy'] }
        : { orderBy?: InstructorEarningGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstructorEarningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorEarningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstructorEarning model
   */
  readonly fields: InstructorEarningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstructorEarning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructorEarningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructor<T extends InstructorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstructorDefaultArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InstructorEarning model
   */
  interface InstructorEarningFieldRefs {
    readonly id: FieldRef<"InstructorEarning", 'Int'>
    readonly instructorId: FieldRef<"InstructorEarning", 'Int'>
    readonly month: FieldRef<"InstructorEarning", 'Int'>
    readonly year: FieldRef<"InstructorEarning", 'Int'>
    readonly totalRevenue: FieldRef<"InstructorEarning", 'Float'>
    readonly earningAmount: FieldRef<"InstructorEarning", 'Float'>
    readonly notes: FieldRef<"InstructorEarning", 'String'>
    readonly createdAt: FieldRef<"InstructorEarning", 'DateTime'>
    readonly updatedAt: FieldRef<"InstructorEarning", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InstructorEarning findUnique
   */
  export type InstructorEarningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorEarning
     */
    select?: InstructorEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorEarning
     */
    omit?: InstructorEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorEarningInclude<ExtArgs> | null
    /**
     * Filter, which InstructorEarning to fetch.
     */
    where: InstructorEarningWhereUniqueInput
  }

  /**
   * InstructorEarning findUniqueOrThrow
   */
  export type InstructorEarningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorEarning
     */
    select?: InstructorEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorEarning
     */
    omit?: InstructorEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorEarningInclude<ExtArgs> | null
    /**
     * Filter, which InstructorEarning to fetch.
     */
    where: InstructorEarningWhereUniqueInput
  }

  /**
   * InstructorEarning findFirst
   */
  export type InstructorEarningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorEarning
     */
    select?: InstructorEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorEarning
     */
    omit?: InstructorEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorEarningInclude<ExtArgs> | null
    /**
     * Filter, which InstructorEarning to fetch.
     */
    where?: InstructorEarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorEarnings to fetch.
     */
    orderBy?: InstructorEarningOrderByWithRelationInput | InstructorEarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstructorEarnings.
     */
    cursor?: InstructorEarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorEarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstructorEarnings.
     */
    distinct?: InstructorEarningScalarFieldEnum | InstructorEarningScalarFieldEnum[]
  }

  /**
   * InstructorEarning findFirstOrThrow
   */
  export type InstructorEarningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorEarning
     */
    select?: InstructorEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorEarning
     */
    omit?: InstructorEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorEarningInclude<ExtArgs> | null
    /**
     * Filter, which InstructorEarning to fetch.
     */
    where?: InstructorEarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorEarnings to fetch.
     */
    orderBy?: InstructorEarningOrderByWithRelationInput | InstructorEarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstructorEarnings.
     */
    cursor?: InstructorEarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorEarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstructorEarnings.
     */
    distinct?: InstructorEarningScalarFieldEnum | InstructorEarningScalarFieldEnum[]
  }

  /**
   * InstructorEarning findMany
   */
  export type InstructorEarningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorEarning
     */
    select?: InstructorEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorEarning
     */
    omit?: InstructorEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorEarningInclude<ExtArgs> | null
    /**
     * Filter, which InstructorEarnings to fetch.
     */
    where?: InstructorEarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorEarnings to fetch.
     */
    orderBy?: InstructorEarningOrderByWithRelationInput | InstructorEarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstructorEarnings.
     */
    cursor?: InstructorEarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorEarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstructorEarnings.
     */
    distinct?: InstructorEarningScalarFieldEnum | InstructorEarningScalarFieldEnum[]
  }

  /**
   * InstructorEarning create
   */
  export type InstructorEarningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorEarning
     */
    select?: InstructorEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorEarning
     */
    omit?: InstructorEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorEarningInclude<ExtArgs> | null
    /**
     * The data needed to create a InstructorEarning.
     */
    data: XOR<InstructorEarningCreateInput, InstructorEarningUncheckedCreateInput>
  }

  /**
   * InstructorEarning createMany
   */
  export type InstructorEarningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstructorEarnings.
     */
    data: InstructorEarningCreateManyInput | InstructorEarningCreateManyInput[]
  }

  /**
   * InstructorEarning createManyAndReturn
   */
  export type InstructorEarningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorEarning
     */
    select?: InstructorEarningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorEarning
     */
    omit?: InstructorEarningOmit<ExtArgs> | null
    /**
     * The data used to create many InstructorEarnings.
     */
    data: InstructorEarningCreateManyInput | InstructorEarningCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorEarningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstructorEarning update
   */
  export type InstructorEarningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorEarning
     */
    select?: InstructorEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorEarning
     */
    omit?: InstructorEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorEarningInclude<ExtArgs> | null
    /**
     * The data needed to update a InstructorEarning.
     */
    data: XOR<InstructorEarningUpdateInput, InstructorEarningUncheckedUpdateInput>
    /**
     * Choose, which InstructorEarning to update.
     */
    where: InstructorEarningWhereUniqueInput
  }

  /**
   * InstructorEarning updateMany
   */
  export type InstructorEarningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstructorEarnings.
     */
    data: XOR<InstructorEarningUpdateManyMutationInput, InstructorEarningUncheckedUpdateManyInput>
    /**
     * Filter which InstructorEarnings to update
     */
    where?: InstructorEarningWhereInput
    /**
     * Limit how many InstructorEarnings to update.
     */
    limit?: number
  }

  /**
   * InstructorEarning updateManyAndReturn
   */
  export type InstructorEarningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorEarning
     */
    select?: InstructorEarningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorEarning
     */
    omit?: InstructorEarningOmit<ExtArgs> | null
    /**
     * The data used to update InstructorEarnings.
     */
    data: XOR<InstructorEarningUpdateManyMutationInput, InstructorEarningUncheckedUpdateManyInput>
    /**
     * Filter which InstructorEarnings to update
     */
    where?: InstructorEarningWhereInput
    /**
     * Limit how many InstructorEarnings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorEarningIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstructorEarning upsert
   */
  export type InstructorEarningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorEarning
     */
    select?: InstructorEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorEarning
     */
    omit?: InstructorEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorEarningInclude<ExtArgs> | null
    /**
     * The filter to search for the InstructorEarning to update in case it exists.
     */
    where: InstructorEarningWhereUniqueInput
    /**
     * In case the InstructorEarning found by the `where` argument doesn't exist, create a new InstructorEarning with this data.
     */
    create: XOR<InstructorEarningCreateInput, InstructorEarningUncheckedCreateInput>
    /**
     * In case the InstructorEarning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructorEarningUpdateInput, InstructorEarningUncheckedUpdateInput>
  }

  /**
   * InstructorEarning delete
   */
  export type InstructorEarningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorEarning
     */
    select?: InstructorEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorEarning
     */
    omit?: InstructorEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorEarningInclude<ExtArgs> | null
    /**
     * Filter which InstructorEarning to delete.
     */
    where: InstructorEarningWhereUniqueInput
  }

  /**
   * InstructorEarning deleteMany
   */
  export type InstructorEarningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstructorEarnings to delete
     */
    where?: InstructorEarningWhereInput
    /**
     * Limit how many InstructorEarnings to delete.
     */
    limit?: number
  }

  /**
   * InstructorEarning without action
   */
  export type InstructorEarningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorEarning
     */
    select?: InstructorEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorEarning
     */
    omit?: InstructorEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorEarningInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const InstructorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    earningType: 'earningType',
    fixedSalary: 'fixedSalary',
    revenueShare: 'revenueShare',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InstructorScalarFieldEnum = (typeof InstructorScalarFieldEnum)[keyof typeof InstructorScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    title: 'title',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    monthlyPrice: 'monthlyPrice',
    schedule: 'schedule',
    instructorId: 'instructorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    groupId: 'groupId',
    isActive: 'isActive',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    enrollmentId: 'enrollmentId',
    month: 'month',
    year: 'year',
    amountDue: 'amountDue',
    amountPaid: 'amountPaid',
    status: 'status',
    paidAt: 'paidAt',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const PrivateSessionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    sessionDate: 'sessionDate',
    durationHours: 'durationHours',
    price: 'price',
    instructorId: 'instructorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PrivateSessionScalarFieldEnum = (typeof PrivateSessionScalarFieldEnum)[keyof typeof PrivateSessionScalarFieldEnum]


  export const PrivateSessionBookingScalarFieldEnum: {
    id: 'id',
    privateSessionId: 'privateSessionId',
    studentId: 'studentId',
    paid: 'paid',
    paidAt: 'paidAt',
    amountPaid: 'amountPaid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PrivateSessionBookingScalarFieldEnum = (typeof PrivateSessionBookingScalarFieldEnum)[keyof typeof PrivateSessionBookingScalarFieldEnum]


  export const InstructorEarningScalarFieldEnum: {
    id: 'id',
    instructorId: 'instructorId',
    month: 'month',
    year: 'year',
    totalRevenue: 'totalRevenue',
    earningAmount: 'earningAmount',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InstructorEarningScalarFieldEnum = (typeof InstructorEarningScalarFieldEnum)[keyof typeof InstructorEarningScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'EarningType'
   */
  export type EnumEarningTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EarningType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    
  /**
   * Deep Input Types
   */


  export type InstructorWhereInput = {
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    id?: IntFilter<"Instructor"> | number
    name?: StringFilter<"Instructor"> | string
    phone?: StringNullableFilter<"Instructor"> | string | null
    email?: StringNullableFilter<"Instructor"> | string | null
    earningType?: EnumEarningTypeFilter<"Instructor"> | $Enums.EarningType
    fixedSalary?: FloatNullableFilter<"Instructor"> | number | null
    revenueShare?: FloatNullableFilter<"Instructor"> | number | null
    createdAt?: DateTimeFilter<"Instructor"> | Date | string
    updatedAt?: DateTimeFilter<"Instructor"> | Date | string
    groups?: GroupListRelationFilter
    privateSessions?: PrivateSessionListRelationFilter
    instructorEarnings?: InstructorEarningListRelationFilter
  }

  export type InstructorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    earningType?: SortOrder
    fixedSalary?: SortOrderInput | SortOrder
    revenueShare?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groups?: GroupOrderByRelationAggregateInput
    privateSessions?: PrivateSessionOrderByRelationAggregateInput
    instructorEarnings?: InstructorEarningOrderByRelationAggregateInput
  }

  export type InstructorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    name?: StringFilter<"Instructor"> | string
    phone?: StringNullableFilter<"Instructor"> | string | null
    earningType?: EnumEarningTypeFilter<"Instructor"> | $Enums.EarningType
    fixedSalary?: FloatNullableFilter<"Instructor"> | number | null
    revenueShare?: FloatNullableFilter<"Instructor"> | number | null
    createdAt?: DateTimeFilter<"Instructor"> | Date | string
    updatedAt?: DateTimeFilter<"Instructor"> | Date | string
    groups?: GroupListRelationFilter
    privateSessions?: PrivateSessionListRelationFilter
    instructorEarnings?: InstructorEarningListRelationFilter
  }, "id" | "email">

  export type InstructorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    earningType?: SortOrder
    fixedSalary?: SortOrderInput | SortOrder
    revenueShare?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InstructorCountOrderByAggregateInput
    _avg?: InstructorAvgOrderByAggregateInput
    _max?: InstructorMaxOrderByAggregateInput
    _min?: InstructorMinOrderByAggregateInput
    _sum?: InstructorSumOrderByAggregateInput
  }

  export type InstructorScalarWhereWithAggregatesInput = {
    AND?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    OR?: InstructorScalarWhereWithAggregatesInput[]
    NOT?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Instructor"> | number
    name?: StringWithAggregatesFilter<"Instructor"> | string
    phone?: StringNullableWithAggregatesFilter<"Instructor"> | string | null
    email?: StringNullableWithAggregatesFilter<"Instructor"> | string | null
    earningType?: EnumEarningTypeWithAggregatesFilter<"Instructor"> | $Enums.EarningType
    fixedSalary?: FloatNullableWithAggregatesFilter<"Instructor"> | number | null
    revenueShare?: FloatNullableWithAggregatesFilter<"Instructor"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Instructor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Instructor"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    name?: StringFilter<"Student"> | string
    title?: StringNullableFilter<"Student"> | string | null
    phone?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    enrollments?: EnrollmentListRelationFilter
    privateSessionBookings?: PrivateSessionBookingListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrderInput | SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enrollments?: EnrollmentOrderByRelationAggregateInput
    privateSessionBookings?: PrivateSessionBookingOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    title?: StringNullableFilter<"Student"> | string | null
    phone?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    enrollments?: EnrollmentListRelationFilter
    privateSessionBookings?: PrivateSessionBookingListRelationFilter
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrderInput | SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    name?: StringWithAggregatesFilter<"Student"> | string
    title?: StringNullableWithAggregatesFilter<"Student"> | string | null
    phone?: StringWithAggregatesFilter<"Student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    monthlyPrice?: FloatFilter<"Group"> | number
    schedule?: StringNullableFilter<"Group"> | string | null
    instructorId?: IntFilter<"Group"> | number
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    instructor?: XOR<InstructorScalarRelationFilter, InstructorWhereInput>
    enrollments?: EnrollmentListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    monthlyPrice?: SortOrder
    schedule?: SortOrderInput | SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructor?: InstructorOrderByWithRelationInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    monthlyPrice?: FloatFilter<"Group"> | number
    schedule?: StringNullableFilter<"Group"> | string | null
    instructorId?: IntFilter<"Group"> | number
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    instructor?: XOR<InstructorScalarRelationFilter, InstructorWhereInput>
    enrollments?: EnrollmentListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    monthlyPrice?: SortOrder
    schedule?: SortOrderInput | SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Group"> | number
    name?: StringWithAggregatesFilter<"Group"> | string
    description?: StringNullableWithAggregatesFilter<"Group"> | string | null
    monthlyPrice?: FloatWithAggregatesFilter<"Group"> | number
    schedule?: StringNullableWithAggregatesFilter<"Group"> | string | null
    instructorId?: IntWithAggregatesFilter<"Group"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    studentId?: IntFilter<"Enrollment"> | number
    groupId?: IntFilter<"Enrollment"> | number
    isActive?: BoolFilter<"Enrollment"> | boolean
    startDate?: DateTimeFilter<"Enrollment"> | Date | string
    endDate?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    subscriptions?: SubscriptionListRelationFilter
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_groupId?: EnrollmentStudentIdGroupIdCompoundUniqueInput
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    studentId?: IntFilter<"Enrollment"> | number
    groupId?: IntFilter<"Enrollment"> | number
    isActive?: BoolFilter<"Enrollment"> | boolean
    startDate?: DateTimeFilter<"Enrollment"> | Date | string
    endDate?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    subscriptions?: SubscriptionListRelationFilter
  }, "id" | "studentId_groupId">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Enrollment"> | number
    studentId?: IntWithAggregatesFilter<"Enrollment"> | number
    groupId?: IntWithAggregatesFilter<"Enrollment"> | number
    isActive?: BoolWithAggregatesFilter<"Enrollment"> | boolean
    startDate?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Enrollment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: IntFilter<"Subscription"> | number
    enrollmentId?: IntFilter<"Subscription"> | number
    month?: IntFilter<"Subscription"> | number
    year?: IntFilter<"Subscription"> | number
    amountDue?: FloatFilter<"Subscription"> | number
    amountPaid?: FloatFilter<"Subscription"> | number
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    paidAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    notes?: StringNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    enrollment?: XOR<EnrollmentScalarRelationFilter, EnrollmentWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    enrollmentId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enrollment?: EnrollmentOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    enrollmentId_month_year?: SubscriptionEnrollmentIdMonthYearCompoundUniqueInput
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    enrollmentId?: IntFilter<"Subscription"> | number
    month?: IntFilter<"Subscription"> | number
    year?: IntFilter<"Subscription"> | number
    amountDue?: FloatFilter<"Subscription"> | number
    amountPaid?: FloatFilter<"Subscription"> | number
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    paidAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    notes?: StringNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    enrollment?: XOR<EnrollmentScalarRelationFilter, EnrollmentWhereInput>
  }, "id" | "enrollmentId_month_year">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    enrollmentId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subscription"> | number
    enrollmentId?: IntWithAggregatesFilter<"Subscription"> | number
    month?: IntWithAggregatesFilter<"Subscription"> | number
    year?: IntWithAggregatesFilter<"Subscription"> | number
    amountDue?: FloatWithAggregatesFilter<"Subscription"> | number
    amountPaid?: FloatWithAggregatesFilter<"Subscription"> | number
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    paidAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type PrivateSessionWhereInput = {
    AND?: PrivateSessionWhereInput | PrivateSessionWhereInput[]
    OR?: PrivateSessionWhereInput[]
    NOT?: PrivateSessionWhereInput | PrivateSessionWhereInput[]
    id?: IntFilter<"PrivateSession"> | number
    title?: StringFilter<"PrivateSession"> | string
    description?: StringNullableFilter<"PrivateSession"> | string | null
    sessionDate?: DateTimeFilter<"PrivateSession"> | Date | string
    durationHours?: FloatFilter<"PrivateSession"> | number
    price?: FloatFilter<"PrivateSession"> | number
    instructorId?: IntFilter<"PrivateSession"> | number
    createdAt?: DateTimeFilter<"PrivateSession"> | Date | string
    updatedAt?: DateTimeFilter<"PrivateSession"> | Date | string
    instructor?: XOR<InstructorScalarRelationFilter, InstructorWhereInput>
    bookings?: PrivateSessionBookingListRelationFilter
  }

  export type PrivateSessionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    sessionDate?: SortOrder
    durationHours?: SortOrder
    price?: SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructor?: InstructorOrderByWithRelationInput
    bookings?: PrivateSessionBookingOrderByRelationAggregateInput
  }

  export type PrivateSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrivateSessionWhereInput | PrivateSessionWhereInput[]
    OR?: PrivateSessionWhereInput[]
    NOT?: PrivateSessionWhereInput | PrivateSessionWhereInput[]
    title?: StringFilter<"PrivateSession"> | string
    description?: StringNullableFilter<"PrivateSession"> | string | null
    sessionDate?: DateTimeFilter<"PrivateSession"> | Date | string
    durationHours?: FloatFilter<"PrivateSession"> | number
    price?: FloatFilter<"PrivateSession"> | number
    instructorId?: IntFilter<"PrivateSession"> | number
    createdAt?: DateTimeFilter<"PrivateSession"> | Date | string
    updatedAt?: DateTimeFilter<"PrivateSession"> | Date | string
    instructor?: XOR<InstructorScalarRelationFilter, InstructorWhereInput>
    bookings?: PrivateSessionBookingListRelationFilter
  }, "id">

  export type PrivateSessionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    sessionDate?: SortOrder
    durationHours?: SortOrder
    price?: SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PrivateSessionCountOrderByAggregateInput
    _avg?: PrivateSessionAvgOrderByAggregateInput
    _max?: PrivateSessionMaxOrderByAggregateInput
    _min?: PrivateSessionMinOrderByAggregateInput
    _sum?: PrivateSessionSumOrderByAggregateInput
  }

  export type PrivateSessionScalarWhereWithAggregatesInput = {
    AND?: PrivateSessionScalarWhereWithAggregatesInput | PrivateSessionScalarWhereWithAggregatesInput[]
    OR?: PrivateSessionScalarWhereWithAggregatesInput[]
    NOT?: PrivateSessionScalarWhereWithAggregatesInput | PrivateSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PrivateSession"> | number
    title?: StringWithAggregatesFilter<"PrivateSession"> | string
    description?: StringNullableWithAggregatesFilter<"PrivateSession"> | string | null
    sessionDate?: DateTimeWithAggregatesFilter<"PrivateSession"> | Date | string
    durationHours?: FloatWithAggregatesFilter<"PrivateSession"> | number
    price?: FloatWithAggregatesFilter<"PrivateSession"> | number
    instructorId?: IntWithAggregatesFilter<"PrivateSession"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PrivateSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PrivateSession"> | Date | string
  }

  export type PrivateSessionBookingWhereInput = {
    AND?: PrivateSessionBookingWhereInput | PrivateSessionBookingWhereInput[]
    OR?: PrivateSessionBookingWhereInput[]
    NOT?: PrivateSessionBookingWhereInput | PrivateSessionBookingWhereInput[]
    id?: IntFilter<"PrivateSessionBooking"> | number
    privateSessionId?: IntFilter<"PrivateSessionBooking"> | number
    studentId?: IntFilter<"PrivateSessionBooking"> | number
    paid?: BoolFilter<"PrivateSessionBooking"> | boolean
    paidAt?: DateTimeNullableFilter<"PrivateSessionBooking"> | Date | string | null
    amountPaid?: FloatNullableFilter<"PrivateSessionBooking"> | number | null
    createdAt?: DateTimeFilter<"PrivateSessionBooking"> | Date | string
    updatedAt?: DateTimeFilter<"PrivateSessionBooking"> | Date | string
    privateSession?: XOR<PrivateSessionScalarRelationFilter, PrivateSessionWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type PrivateSessionBookingOrderByWithRelationInput = {
    id?: SortOrder
    privateSessionId?: SortOrder
    studentId?: SortOrder
    paid?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    amountPaid?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    privateSession?: PrivateSessionOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type PrivateSessionBookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    privateSessionId_studentId?: PrivateSessionBookingPrivateSessionIdStudentIdCompoundUniqueInput
    AND?: PrivateSessionBookingWhereInput | PrivateSessionBookingWhereInput[]
    OR?: PrivateSessionBookingWhereInput[]
    NOT?: PrivateSessionBookingWhereInput | PrivateSessionBookingWhereInput[]
    privateSessionId?: IntFilter<"PrivateSessionBooking"> | number
    studentId?: IntFilter<"PrivateSessionBooking"> | number
    paid?: BoolFilter<"PrivateSessionBooking"> | boolean
    paidAt?: DateTimeNullableFilter<"PrivateSessionBooking"> | Date | string | null
    amountPaid?: FloatNullableFilter<"PrivateSessionBooking"> | number | null
    createdAt?: DateTimeFilter<"PrivateSessionBooking"> | Date | string
    updatedAt?: DateTimeFilter<"PrivateSessionBooking"> | Date | string
    privateSession?: XOR<PrivateSessionScalarRelationFilter, PrivateSessionWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id" | "privateSessionId_studentId">

  export type PrivateSessionBookingOrderByWithAggregationInput = {
    id?: SortOrder
    privateSessionId?: SortOrder
    studentId?: SortOrder
    paid?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    amountPaid?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PrivateSessionBookingCountOrderByAggregateInput
    _avg?: PrivateSessionBookingAvgOrderByAggregateInput
    _max?: PrivateSessionBookingMaxOrderByAggregateInput
    _min?: PrivateSessionBookingMinOrderByAggregateInput
    _sum?: PrivateSessionBookingSumOrderByAggregateInput
  }

  export type PrivateSessionBookingScalarWhereWithAggregatesInput = {
    AND?: PrivateSessionBookingScalarWhereWithAggregatesInput | PrivateSessionBookingScalarWhereWithAggregatesInput[]
    OR?: PrivateSessionBookingScalarWhereWithAggregatesInput[]
    NOT?: PrivateSessionBookingScalarWhereWithAggregatesInput | PrivateSessionBookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PrivateSessionBooking"> | number
    privateSessionId?: IntWithAggregatesFilter<"PrivateSessionBooking"> | number
    studentId?: IntWithAggregatesFilter<"PrivateSessionBooking"> | number
    paid?: BoolWithAggregatesFilter<"PrivateSessionBooking"> | boolean
    paidAt?: DateTimeNullableWithAggregatesFilter<"PrivateSessionBooking"> | Date | string | null
    amountPaid?: FloatNullableWithAggregatesFilter<"PrivateSessionBooking"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"PrivateSessionBooking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PrivateSessionBooking"> | Date | string
  }

  export type InstructorEarningWhereInput = {
    AND?: InstructorEarningWhereInput | InstructorEarningWhereInput[]
    OR?: InstructorEarningWhereInput[]
    NOT?: InstructorEarningWhereInput | InstructorEarningWhereInput[]
    id?: IntFilter<"InstructorEarning"> | number
    instructorId?: IntFilter<"InstructorEarning"> | number
    month?: IntFilter<"InstructorEarning"> | number
    year?: IntFilter<"InstructorEarning"> | number
    totalRevenue?: FloatFilter<"InstructorEarning"> | number
    earningAmount?: FloatFilter<"InstructorEarning"> | number
    notes?: StringNullableFilter<"InstructorEarning"> | string | null
    createdAt?: DateTimeFilter<"InstructorEarning"> | Date | string
    updatedAt?: DateTimeFilter<"InstructorEarning"> | Date | string
    instructor?: XOR<InstructorScalarRelationFilter, InstructorWhereInput>
  }

  export type InstructorEarningOrderByWithRelationInput = {
    id?: SortOrder
    instructorId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalRevenue?: SortOrder
    earningAmount?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructor?: InstructorOrderByWithRelationInput
  }

  export type InstructorEarningWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    instructorId_month_year?: InstructorEarningInstructorIdMonthYearCompoundUniqueInput
    AND?: InstructorEarningWhereInput | InstructorEarningWhereInput[]
    OR?: InstructorEarningWhereInput[]
    NOT?: InstructorEarningWhereInput | InstructorEarningWhereInput[]
    instructorId?: IntFilter<"InstructorEarning"> | number
    month?: IntFilter<"InstructorEarning"> | number
    year?: IntFilter<"InstructorEarning"> | number
    totalRevenue?: FloatFilter<"InstructorEarning"> | number
    earningAmount?: FloatFilter<"InstructorEarning"> | number
    notes?: StringNullableFilter<"InstructorEarning"> | string | null
    createdAt?: DateTimeFilter<"InstructorEarning"> | Date | string
    updatedAt?: DateTimeFilter<"InstructorEarning"> | Date | string
    instructor?: XOR<InstructorScalarRelationFilter, InstructorWhereInput>
  }, "id" | "instructorId_month_year">

  export type InstructorEarningOrderByWithAggregationInput = {
    id?: SortOrder
    instructorId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalRevenue?: SortOrder
    earningAmount?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InstructorEarningCountOrderByAggregateInput
    _avg?: InstructorEarningAvgOrderByAggregateInput
    _max?: InstructorEarningMaxOrderByAggregateInput
    _min?: InstructorEarningMinOrderByAggregateInput
    _sum?: InstructorEarningSumOrderByAggregateInput
  }

  export type InstructorEarningScalarWhereWithAggregatesInput = {
    AND?: InstructorEarningScalarWhereWithAggregatesInput | InstructorEarningScalarWhereWithAggregatesInput[]
    OR?: InstructorEarningScalarWhereWithAggregatesInput[]
    NOT?: InstructorEarningScalarWhereWithAggregatesInput | InstructorEarningScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InstructorEarning"> | number
    instructorId?: IntWithAggregatesFilter<"InstructorEarning"> | number
    month?: IntWithAggregatesFilter<"InstructorEarning"> | number
    year?: IntWithAggregatesFilter<"InstructorEarning"> | number
    totalRevenue?: FloatWithAggregatesFilter<"InstructorEarning"> | number
    earningAmount?: FloatWithAggregatesFilter<"InstructorEarning"> | number
    notes?: StringNullableWithAggregatesFilter<"InstructorEarning"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InstructorEarning"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InstructorEarning"> | Date | string
  }

  export type InstructorCreateInput = {
    name: string
    phone?: string | null
    email?: string | null
    earningType?: $Enums.EarningType
    fixedSalary?: number | null
    revenueShare?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutInstructorInput
    privateSessions?: PrivateSessionCreateNestedManyWithoutInstructorInput
    instructorEarnings?: InstructorEarningCreateNestedManyWithoutInstructorInput
  }

  export type InstructorUncheckedCreateInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    earningType?: $Enums.EarningType
    fixedSalary?: number | null
    revenueShare?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutInstructorInput
    privateSessions?: PrivateSessionUncheckedCreateNestedManyWithoutInstructorInput
    instructorEarnings?: InstructorEarningUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type InstructorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    earningType?: EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType
    fixedSalary?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueShare?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutInstructorNestedInput
    privateSessions?: PrivateSessionUpdateManyWithoutInstructorNestedInput
    instructorEarnings?: InstructorEarningUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    earningType?: EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType
    fixedSalary?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueShare?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutInstructorNestedInput
    privateSessions?: PrivateSessionUncheckedUpdateManyWithoutInstructorNestedInput
    instructorEarnings?: InstructorEarningUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorCreateManyInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    earningType?: $Enums.EarningType
    fixedSalary?: number | null
    revenueShare?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstructorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    earningType?: EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType
    fixedSalary?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueShare?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    earningType?: EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType
    fixedSalary?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueShare?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    name: string
    title?: string | null
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    privateSessionBookings?: PrivateSessionBookingCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    name: string
    title?: string | null
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    privateSessionBookings?: PrivateSessionBookingUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    privateSessionBookings?: PrivateSessionBookingUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    privateSessionBookings?: PrivateSessionBookingUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    name: string
    title?: string | null
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    name: string
    description?: string | null
    monthlyPrice: number
    schedule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: InstructorCreateNestedOneWithoutGroupsInput
    enrollments?: EnrollmentCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    monthlyPrice: number
    schedule?: string | null
    instructorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: InstructorUpdateOneRequiredWithoutGroupsNestedInput
    enrollments?: EnrollmentUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    instructorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    monthlyPrice: number
    schedule?: string | null
    instructorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    instructorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateInput = {
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutEnrollmentsInput
    group: GroupCreateNestedOneWithoutEnrollmentsInput
    subscriptions?: SubscriptionCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: number
    studentId: number
    groupId: number
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUpdateInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutEnrollmentsNestedInput
    group?: GroupUpdateOneRequiredWithoutEnrollmentsNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentCreateManyInput = {
    id?: number
    studentId: number
    groupId: number
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateManyMutationInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    month: number
    year: number
    amountDue: number
    amountPaid?: number
    status?: $Enums.SubscriptionStatus
    paidAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollment: EnrollmentCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: number
    enrollmentId: number
    month: number
    year: number
    amountDue: number
    amountPaid?: number
    status?: $Enums.SubscriptionStatus
    paidAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollment?: EnrollmentUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: number
    enrollmentId: number
    month: number
    year: number
    amountDue: number
    amountPaid?: number
    status?: $Enums.SubscriptionStatus
    paidAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateSessionCreateInput = {
    title: string
    description?: string | null
    sessionDate: Date | string
    durationHours?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: InstructorCreateNestedOneWithoutPrivateSessionsInput
    bookings?: PrivateSessionBookingCreateNestedManyWithoutPrivateSessionInput
  }

  export type PrivateSessionUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    sessionDate: Date | string
    durationHours?: number
    price: number
    instructorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: PrivateSessionBookingUncheckedCreateNestedManyWithoutPrivateSessionInput
  }

  export type PrivateSessionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: InstructorUpdateOneRequiredWithoutPrivateSessionsNestedInput
    bookings?: PrivateSessionBookingUpdateManyWithoutPrivateSessionNestedInput
  }

  export type PrivateSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    instructorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: PrivateSessionBookingUncheckedUpdateManyWithoutPrivateSessionNestedInput
  }

  export type PrivateSessionCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    sessionDate: Date | string
    durationHours?: number
    price: number
    instructorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrivateSessionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    instructorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateSessionBookingCreateInput = {
    paid?: boolean
    paidAt?: Date | string | null
    amountPaid?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    privateSession: PrivateSessionCreateNestedOneWithoutBookingsInput
    student: StudentCreateNestedOneWithoutPrivateSessionBookingsInput
  }

  export type PrivateSessionBookingUncheckedCreateInput = {
    id?: number
    privateSessionId: number
    studentId: number
    paid?: boolean
    paidAt?: Date | string | null
    amountPaid?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrivateSessionBookingUpdateInput = {
    paid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    privateSession?: PrivateSessionUpdateOneRequiredWithoutBookingsNestedInput
    student?: StudentUpdateOneRequiredWithoutPrivateSessionBookingsNestedInput
  }

  export type PrivateSessionBookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    privateSessionId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateSessionBookingCreateManyInput = {
    id?: number
    privateSessionId: number
    studentId: number
    paid?: boolean
    paidAt?: Date | string | null
    amountPaid?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrivateSessionBookingUpdateManyMutationInput = {
    paid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateSessionBookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    privateSessionId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorEarningCreateInput = {
    month: number
    year: number
    totalRevenue: number
    earningAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: InstructorCreateNestedOneWithoutInstructorEarningsInput
  }

  export type InstructorEarningUncheckedCreateInput = {
    id?: number
    instructorId: number
    month: number
    year: number
    totalRevenue: number
    earningAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstructorEarningUpdateInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    earningAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: InstructorUpdateOneRequiredWithoutInstructorEarningsNestedInput
  }

  export type InstructorEarningUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructorId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    earningAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorEarningCreateManyInput = {
    id?: number
    instructorId: number
    month: number
    year: number
    totalRevenue: number
    earningAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstructorEarningUpdateManyMutationInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    earningAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorEarningUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructorId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    earningAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumEarningTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EarningType | EnumEarningTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EarningType[]
    notIn?: $Enums.EarningType[]
    not?: NestedEnumEarningTypeFilter<$PrismaModel> | $Enums.EarningType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type PrivateSessionListRelationFilter = {
    every?: PrivateSessionWhereInput
    some?: PrivateSessionWhereInput
    none?: PrivateSessionWhereInput
  }

  export type InstructorEarningListRelationFilter = {
    every?: InstructorEarningWhereInput
    some?: InstructorEarningWhereInput
    none?: InstructorEarningWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrivateSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstructorEarningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstructorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    earningType?: SortOrder
    fixedSalary?: SortOrder
    revenueShare?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstructorAvgOrderByAggregateInput = {
    id?: SortOrder
    fixedSalary?: SortOrder
    revenueShare?: SortOrder
  }

  export type InstructorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    earningType?: SortOrder
    fixedSalary?: SortOrder
    revenueShare?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstructorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    earningType?: SortOrder
    fixedSalary?: SortOrder
    revenueShare?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstructorSumOrderByAggregateInput = {
    id?: SortOrder
    fixedSalary?: SortOrder
    revenueShare?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type EnumEarningTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EarningType | EnumEarningTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EarningType[]
    notIn?: $Enums.EarningType[]
    not?: NestedEnumEarningTypeWithAggregatesFilter<$PrismaModel> | $Enums.EarningType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEarningTypeFilter<$PrismaModel>
    _max?: NestedEnumEarningTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type PrivateSessionBookingListRelationFilter = {
    every?: PrivateSessionBookingWhereInput
    some?: PrivateSessionBookingWhereInput
    none?: PrivateSessionBookingWhereInput
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrivateSessionBookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type InstructorScalarRelationFilter = {
    is?: InstructorWhereInput
    isNot?: InstructorWhereInput
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    monthlyPrice?: SortOrder
    schedule?: SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
    monthlyPrice?: SortOrder
    instructorId?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    monthlyPrice?: SortOrder
    schedule?: SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    monthlyPrice?: SortOrder
    schedule?: SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
    monthlyPrice?: SortOrder
    instructorId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentStudentIdGroupIdCompoundUniqueInput = {
    studentId: number
    groupId: number
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type EnrollmentScalarRelationFilter = {
    is?: EnrollmentWhereInput
    isNot?: EnrollmentWhereInput
  }

  export type SubscriptionEnrollmentIdMonthYearCompoundUniqueInput = {
    enrollmentId: number
    month: number
    year: number
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    enrollmentId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    enrollmentId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    enrollmentId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    enrollmentId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    enrollmentId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type PrivateSessionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sessionDate?: SortOrder
    durationHours?: SortOrder
    price?: SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrivateSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    durationHours?: SortOrder
    price?: SortOrder
    instructorId?: SortOrder
  }

  export type PrivateSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sessionDate?: SortOrder
    durationHours?: SortOrder
    price?: SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrivateSessionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sessionDate?: SortOrder
    durationHours?: SortOrder
    price?: SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrivateSessionSumOrderByAggregateInput = {
    id?: SortOrder
    durationHours?: SortOrder
    price?: SortOrder
    instructorId?: SortOrder
  }

  export type PrivateSessionScalarRelationFilter = {
    is?: PrivateSessionWhereInput
    isNot?: PrivateSessionWhereInput
  }

  export type PrivateSessionBookingPrivateSessionIdStudentIdCompoundUniqueInput = {
    privateSessionId: number
    studentId: number
  }

  export type PrivateSessionBookingCountOrderByAggregateInput = {
    id?: SortOrder
    privateSessionId?: SortOrder
    studentId?: SortOrder
    paid?: SortOrder
    paidAt?: SortOrder
    amountPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrivateSessionBookingAvgOrderByAggregateInput = {
    id?: SortOrder
    privateSessionId?: SortOrder
    studentId?: SortOrder
    amountPaid?: SortOrder
  }

  export type PrivateSessionBookingMaxOrderByAggregateInput = {
    id?: SortOrder
    privateSessionId?: SortOrder
    studentId?: SortOrder
    paid?: SortOrder
    paidAt?: SortOrder
    amountPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrivateSessionBookingMinOrderByAggregateInput = {
    id?: SortOrder
    privateSessionId?: SortOrder
    studentId?: SortOrder
    paid?: SortOrder
    paidAt?: SortOrder
    amountPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrivateSessionBookingSumOrderByAggregateInput = {
    id?: SortOrder
    privateSessionId?: SortOrder
    studentId?: SortOrder
    amountPaid?: SortOrder
  }

  export type InstructorEarningInstructorIdMonthYearCompoundUniqueInput = {
    instructorId: number
    month: number
    year: number
  }

  export type InstructorEarningCountOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalRevenue?: SortOrder
    earningAmount?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstructorEarningAvgOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalRevenue?: SortOrder
    earningAmount?: SortOrder
  }

  export type InstructorEarningMaxOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalRevenue?: SortOrder
    earningAmount?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstructorEarningMinOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalRevenue?: SortOrder
    earningAmount?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstructorEarningSumOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalRevenue?: SortOrder
    earningAmount?: SortOrder
  }

  export type GroupCreateNestedManyWithoutInstructorInput = {
    create?: XOR<GroupCreateWithoutInstructorInput, GroupUncheckedCreateWithoutInstructorInput> | GroupCreateWithoutInstructorInput[] | GroupUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutInstructorInput | GroupCreateOrConnectWithoutInstructorInput[]
    createMany?: GroupCreateManyInstructorInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type PrivateSessionCreateNestedManyWithoutInstructorInput = {
    create?: XOR<PrivateSessionCreateWithoutInstructorInput, PrivateSessionUncheckedCreateWithoutInstructorInput> | PrivateSessionCreateWithoutInstructorInput[] | PrivateSessionUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: PrivateSessionCreateOrConnectWithoutInstructorInput | PrivateSessionCreateOrConnectWithoutInstructorInput[]
    createMany?: PrivateSessionCreateManyInstructorInputEnvelope
    connect?: PrivateSessionWhereUniqueInput | PrivateSessionWhereUniqueInput[]
  }

  export type InstructorEarningCreateNestedManyWithoutInstructorInput = {
    create?: XOR<InstructorEarningCreateWithoutInstructorInput, InstructorEarningUncheckedCreateWithoutInstructorInput> | InstructorEarningCreateWithoutInstructorInput[] | InstructorEarningUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: InstructorEarningCreateOrConnectWithoutInstructorInput | InstructorEarningCreateOrConnectWithoutInstructorInput[]
    createMany?: InstructorEarningCreateManyInstructorInputEnvelope
    connect?: InstructorEarningWhereUniqueInput | InstructorEarningWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<GroupCreateWithoutInstructorInput, GroupUncheckedCreateWithoutInstructorInput> | GroupCreateWithoutInstructorInput[] | GroupUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutInstructorInput | GroupCreateOrConnectWithoutInstructorInput[]
    createMany?: GroupCreateManyInstructorInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type PrivateSessionUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<PrivateSessionCreateWithoutInstructorInput, PrivateSessionUncheckedCreateWithoutInstructorInput> | PrivateSessionCreateWithoutInstructorInput[] | PrivateSessionUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: PrivateSessionCreateOrConnectWithoutInstructorInput | PrivateSessionCreateOrConnectWithoutInstructorInput[]
    createMany?: PrivateSessionCreateManyInstructorInputEnvelope
    connect?: PrivateSessionWhereUniqueInput | PrivateSessionWhereUniqueInput[]
  }

  export type InstructorEarningUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<InstructorEarningCreateWithoutInstructorInput, InstructorEarningUncheckedCreateWithoutInstructorInput> | InstructorEarningCreateWithoutInstructorInput[] | InstructorEarningUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: InstructorEarningCreateOrConnectWithoutInstructorInput | InstructorEarningCreateOrConnectWithoutInstructorInput[]
    createMany?: InstructorEarningCreateManyInstructorInputEnvelope
    connect?: InstructorEarningWhereUniqueInput | InstructorEarningWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumEarningTypeFieldUpdateOperationsInput = {
    set?: $Enums.EarningType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<GroupCreateWithoutInstructorInput, GroupUncheckedCreateWithoutInstructorInput> | GroupCreateWithoutInstructorInput[] | GroupUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutInstructorInput | GroupCreateOrConnectWithoutInstructorInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutInstructorInput | GroupUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: GroupCreateManyInstructorInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutInstructorInput | GroupUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutInstructorInput | GroupUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type PrivateSessionUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<PrivateSessionCreateWithoutInstructorInput, PrivateSessionUncheckedCreateWithoutInstructorInput> | PrivateSessionCreateWithoutInstructorInput[] | PrivateSessionUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: PrivateSessionCreateOrConnectWithoutInstructorInput | PrivateSessionCreateOrConnectWithoutInstructorInput[]
    upsert?: PrivateSessionUpsertWithWhereUniqueWithoutInstructorInput | PrivateSessionUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: PrivateSessionCreateManyInstructorInputEnvelope
    set?: PrivateSessionWhereUniqueInput | PrivateSessionWhereUniqueInput[]
    disconnect?: PrivateSessionWhereUniqueInput | PrivateSessionWhereUniqueInput[]
    delete?: PrivateSessionWhereUniqueInput | PrivateSessionWhereUniqueInput[]
    connect?: PrivateSessionWhereUniqueInput | PrivateSessionWhereUniqueInput[]
    update?: PrivateSessionUpdateWithWhereUniqueWithoutInstructorInput | PrivateSessionUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: PrivateSessionUpdateManyWithWhereWithoutInstructorInput | PrivateSessionUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: PrivateSessionScalarWhereInput | PrivateSessionScalarWhereInput[]
  }

  export type InstructorEarningUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<InstructorEarningCreateWithoutInstructorInput, InstructorEarningUncheckedCreateWithoutInstructorInput> | InstructorEarningCreateWithoutInstructorInput[] | InstructorEarningUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: InstructorEarningCreateOrConnectWithoutInstructorInput | InstructorEarningCreateOrConnectWithoutInstructorInput[]
    upsert?: InstructorEarningUpsertWithWhereUniqueWithoutInstructorInput | InstructorEarningUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: InstructorEarningCreateManyInstructorInputEnvelope
    set?: InstructorEarningWhereUniqueInput | InstructorEarningWhereUniqueInput[]
    disconnect?: InstructorEarningWhereUniqueInput | InstructorEarningWhereUniqueInput[]
    delete?: InstructorEarningWhereUniqueInput | InstructorEarningWhereUniqueInput[]
    connect?: InstructorEarningWhereUniqueInput | InstructorEarningWhereUniqueInput[]
    update?: InstructorEarningUpdateWithWhereUniqueWithoutInstructorInput | InstructorEarningUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: InstructorEarningUpdateManyWithWhereWithoutInstructorInput | InstructorEarningUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: InstructorEarningScalarWhereInput | InstructorEarningScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GroupUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<GroupCreateWithoutInstructorInput, GroupUncheckedCreateWithoutInstructorInput> | GroupCreateWithoutInstructorInput[] | GroupUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutInstructorInput | GroupCreateOrConnectWithoutInstructorInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutInstructorInput | GroupUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: GroupCreateManyInstructorInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutInstructorInput | GroupUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutInstructorInput | GroupUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type PrivateSessionUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<PrivateSessionCreateWithoutInstructorInput, PrivateSessionUncheckedCreateWithoutInstructorInput> | PrivateSessionCreateWithoutInstructorInput[] | PrivateSessionUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: PrivateSessionCreateOrConnectWithoutInstructorInput | PrivateSessionCreateOrConnectWithoutInstructorInput[]
    upsert?: PrivateSessionUpsertWithWhereUniqueWithoutInstructorInput | PrivateSessionUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: PrivateSessionCreateManyInstructorInputEnvelope
    set?: PrivateSessionWhereUniqueInput | PrivateSessionWhereUniqueInput[]
    disconnect?: PrivateSessionWhereUniqueInput | PrivateSessionWhereUniqueInput[]
    delete?: PrivateSessionWhereUniqueInput | PrivateSessionWhereUniqueInput[]
    connect?: PrivateSessionWhereUniqueInput | PrivateSessionWhereUniqueInput[]
    update?: PrivateSessionUpdateWithWhereUniqueWithoutInstructorInput | PrivateSessionUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: PrivateSessionUpdateManyWithWhereWithoutInstructorInput | PrivateSessionUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: PrivateSessionScalarWhereInput | PrivateSessionScalarWhereInput[]
  }

  export type InstructorEarningUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<InstructorEarningCreateWithoutInstructorInput, InstructorEarningUncheckedCreateWithoutInstructorInput> | InstructorEarningCreateWithoutInstructorInput[] | InstructorEarningUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: InstructorEarningCreateOrConnectWithoutInstructorInput | InstructorEarningCreateOrConnectWithoutInstructorInput[]
    upsert?: InstructorEarningUpsertWithWhereUniqueWithoutInstructorInput | InstructorEarningUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: InstructorEarningCreateManyInstructorInputEnvelope
    set?: InstructorEarningWhereUniqueInput | InstructorEarningWhereUniqueInput[]
    disconnect?: InstructorEarningWhereUniqueInput | InstructorEarningWhereUniqueInput[]
    delete?: InstructorEarningWhereUniqueInput | InstructorEarningWhereUniqueInput[]
    connect?: InstructorEarningWhereUniqueInput | InstructorEarningWhereUniqueInput[]
    update?: InstructorEarningUpdateWithWhereUniqueWithoutInstructorInput | InstructorEarningUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: InstructorEarningUpdateManyWithWhereWithoutInstructorInput | InstructorEarningUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: InstructorEarningScalarWhereInput | InstructorEarningScalarWhereInput[]
  }

  export type EnrollmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type PrivateSessionBookingCreateNestedManyWithoutStudentInput = {
    create?: XOR<PrivateSessionBookingCreateWithoutStudentInput, PrivateSessionBookingUncheckedCreateWithoutStudentInput> | PrivateSessionBookingCreateWithoutStudentInput[] | PrivateSessionBookingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PrivateSessionBookingCreateOrConnectWithoutStudentInput | PrivateSessionBookingCreateOrConnectWithoutStudentInput[]
    createMany?: PrivateSessionBookingCreateManyStudentInputEnvelope
    connect?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type PrivateSessionBookingUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<PrivateSessionBookingCreateWithoutStudentInput, PrivateSessionBookingUncheckedCreateWithoutStudentInput> | PrivateSessionBookingCreateWithoutStudentInput[] | PrivateSessionBookingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PrivateSessionBookingCreateOrConnectWithoutStudentInput | PrivateSessionBookingCreateOrConnectWithoutStudentInput[]
    createMany?: PrivateSessionBookingCreateManyStudentInputEnvelope
    connect?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
  }

  export type EnrollmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentInput | EnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentInput | EnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentInput | EnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type PrivateSessionBookingUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PrivateSessionBookingCreateWithoutStudentInput, PrivateSessionBookingUncheckedCreateWithoutStudentInput> | PrivateSessionBookingCreateWithoutStudentInput[] | PrivateSessionBookingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PrivateSessionBookingCreateOrConnectWithoutStudentInput | PrivateSessionBookingCreateOrConnectWithoutStudentInput[]
    upsert?: PrivateSessionBookingUpsertWithWhereUniqueWithoutStudentInput | PrivateSessionBookingUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PrivateSessionBookingCreateManyStudentInputEnvelope
    set?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
    disconnect?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
    delete?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
    connect?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
    update?: PrivateSessionBookingUpdateWithWhereUniqueWithoutStudentInput | PrivateSessionBookingUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PrivateSessionBookingUpdateManyWithWhereWithoutStudentInput | PrivateSessionBookingUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PrivateSessionBookingScalarWhereInput | PrivateSessionBookingScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentInput | EnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentInput | EnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentInput | EnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type PrivateSessionBookingUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PrivateSessionBookingCreateWithoutStudentInput, PrivateSessionBookingUncheckedCreateWithoutStudentInput> | PrivateSessionBookingCreateWithoutStudentInput[] | PrivateSessionBookingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PrivateSessionBookingCreateOrConnectWithoutStudentInput | PrivateSessionBookingCreateOrConnectWithoutStudentInput[]
    upsert?: PrivateSessionBookingUpsertWithWhereUniqueWithoutStudentInput | PrivateSessionBookingUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PrivateSessionBookingCreateManyStudentInputEnvelope
    set?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
    disconnect?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
    delete?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
    connect?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
    update?: PrivateSessionBookingUpdateWithWhereUniqueWithoutStudentInput | PrivateSessionBookingUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PrivateSessionBookingUpdateManyWithWhereWithoutStudentInput | PrivateSessionBookingUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PrivateSessionBookingScalarWhereInput | PrivateSessionBookingScalarWhereInput[]
  }

  export type InstructorCreateNestedOneWithoutGroupsInput = {
    create?: XOR<InstructorCreateWithoutGroupsInput, InstructorUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutGroupsInput
    connect?: InstructorWhereUniqueInput
  }

  export type EnrollmentCreateNestedManyWithoutGroupInput = {
    create?: XOR<EnrollmentCreateWithoutGroupInput, EnrollmentUncheckedCreateWithoutGroupInput> | EnrollmentCreateWithoutGroupInput[] | EnrollmentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutGroupInput | EnrollmentCreateOrConnectWithoutGroupInput[]
    createMany?: EnrollmentCreateManyGroupInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<EnrollmentCreateWithoutGroupInput, EnrollmentUncheckedCreateWithoutGroupInput> | EnrollmentCreateWithoutGroupInput[] | EnrollmentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutGroupInput | EnrollmentCreateOrConnectWithoutGroupInput[]
    createMany?: EnrollmentCreateManyGroupInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InstructorUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<InstructorCreateWithoutGroupsInput, InstructorUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutGroupsInput
    upsert?: InstructorUpsertWithoutGroupsInput
    connect?: InstructorWhereUniqueInput
    update?: XOR<XOR<InstructorUpdateToOneWithWhereWithoutGroupsInput, InstructorUpdateWithoutGroupsInput>, InstructorUncheckedUpdateWithoutGroupsInput>
  }

  export type EnrollmentUpdateManyWithoutGroupNestedInput = {
    create?: XOR<EnrollmentCreateWithoutGroupInput, EnrollmentUncheckedCreateWithoutGroupInput> | EnrollmentCreateWithoutGroupInput[] | EnrollmentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutGroupInput | EnrollmentCreateOrConnectWithoutGroupInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutGroupInput | EnrollmentUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: EnrollmentCreateManyGroupInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutGroupInput | EnrollmentUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutGroupInput | EnrollmentUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<EnrollmentCreateWithoutGroupInput, EnrollmentUncheckedCreateWithoutGroupInput> | EnrollmentCreateWithoutGroupInput[] | EnrollmentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutGroupInput | EnrollmentCreateOrConnectWithoutGroupInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutGroupInput | EnrollmentUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: EnrollmentCreateManyGroupInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutGroupInput | EnrollmentUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutGroupInput | EnrollmentUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<StudentCreateWithoutEnrollmentsInput, StudentUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutEnrollmentsInput
    connect?: StudentWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<GroupCreateWithoutEnrollmentsInput, GroupUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutEnrollmentsInput
    connect?: GroupWhereUniqueInput
  }

  export type SubscriptionCreateNestedManyWithoutEnrollmentInput = {
    create?: XOR<SubscriptionCreateWithoutEnrollmentInput, SubscriptionUncheckedCreateWithoutEnrollmentInput> | SubscriptionCreateWithoutEnrollmentInput[] | SubscriptionUncheckedCreateWithoutEnrollmentInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutEnrollmentInput | SubscriptionCreateOrConnectWithoutEnrollmentInput[]
    createMany?: SubscriptionCreateManyEnrollmentInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutEnrollmentInput = {
    create?: XOR<SubscriptionCreateWithoutEnrollmentInput, SubscriptionUncheckedCreateWithoutEnrollmentInput> | SubscriptionCreateWithoutEnrollmentInput[] | SubscriptionUncheckedCreateWithoutEnrollmentInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutEnrollmentInput | SubscriptionCreateOrConnectWithoutEnrollmentInput[]
    createMany?: SubscriptionCreateManyEnrollmentInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StudentUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<StudentCreateWithoutEnrollmentsInput, StudentUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutEnrollmentsInput
    upsert?: StudentUpsertWithoutEnrollmentsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutEnrollmentsInput, StudentUpdateWithoutEnrollmentsInput>, StudentUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type GroupUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<GroupCreateWithoutEnrollmentsInput, GroupUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutEnrollmentsInput
    upsert?: GroupUpsertWithoutEnrollmentsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutEnrollmentsInput, GroupUpdateWithoutEnrollmentsInput>, GroupUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type SubscriptionUpdateManyWithoutEnrollmentNestedInput = {
    create?: XOR<SubscriptionCreateWithoutEnrollmentInput, SubscriptionUncheckedCreateWithoutEnrollmentInput> | SubscriptionCreateWithoutEnrollmentInput[] | SubscriptionUncheckedCreateWithoutEnrollmentInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutEnrollmentInput | SubscriptionCreateOrConnectWithoutEnrollmentInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutEnrollmentInput | SubscriptionUpsertWithWhereUniqueWithoutEnrollmentInput[]
    createMany?: SubscriptionCreateManyEnrollmentInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutEnrollmentInput | SubscriptionUpdateWithWhereUniqueWithoutEnrollmentInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutEnrollmentInput | SubscriptionUpdateManyWithWhereWithoutEnrollmentInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutEnrollmentNestedInput = {
    create?: XOR<SubscriptionCreateWithoutEnrollmentInput, SubscriptionUncheckedCreateWithoutEnrollmentInput> | SubscriptionCreateWithoutEnrollmentInput[] | SubscriptionUncheckedCreateWithoutEnrollmentInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutEnrollmentInput | SubscriptionCreateOrConnectWithoutEnrollmentInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutEnrollmentInput | SubscriptionUpsertWithWhereUniqueWithoutEnrollmentInput[]
    createMany?: SubscriptionCreateManyEnrollmentInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutEnrollmentInput | SubscriptionUpdateWithWhereUniqueWithoutEnrollmentInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutEnrollmentInput | SubscriptionUpdateManyWithWhereWithoutEnrollmentInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type EnrollmentCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<EnrollmentCreateWithoutSubscriptionsInput, EnrollmentUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSubscriptionsInput
    connect?: EnrollmentWhereUniqueInput
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type EnrollmentUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<EnrollmentCreateWithoutSubscriptionsInput, EnrollmentUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSubscriptionsInput
    upsert?: EnrollmentUpsertWithoutSubscriptionsInput
    connect?: EnrollmentWhereUniqueInput
    update?: XOR<XOR<EnrollmentUpdateToOneWithWhereWithoutSubscriptionsInput, EnrollmentUpdateWithoutSubscriptionsInput>, EnrollmentUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type InstructorCreateNestedOneWithoutPrivateSessionsInput = {
    create?: XOR<InstructorCreateWithoutPrivateSessionsInput, InstructorUncheckedCreateWithoutPrivateSessionsInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutPrivateSessionsInput
    connect?: InstructorWhereUniqueInput
  }

  export type PrivateSessionBookingCreateNestedManyWithoutPrivateSessionInput = {
    create?: XOR<PrivateSessionBookingCreateWithoutPrivateSessionInput, PrivateSessionBookingUncheckedCreateWithoutPrivateSessionInput> | PrivateSessionBookingCreateWithoutPrivateSessionInput[] | PrivateSessionBookingUncheckedCreateWithoutPrivateSessionInput[]
    connectOrCreate?: PrivateSessionBookingCreateOrConnectWithoutPrivateSessionInput | PrivateSessionBookingCreateOrConnectWithoutPrivateSessionInput[]
    createMany?: PrivateSessionBookingCreateManyPrivateSessionInputEnvelope
    connect?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
  }

  export type PrivateSessionBookingUncheckedCreateNestedManyWithoutPrivateSessionInput = {
    create?: XOR<PrivateSessionBookingCreateWithoutPrivateSessionInput, PrivateSessionBookingUncheckedCreateWithoutPrivateSessionInput> | PrivateSessionBookingCreateWithoutPrivateSessionInput[] | PrivateSessionBookingUncheckedCreateWithoutPrivateSessionInput[]
    connectOrCreate?: PrivateSessionBookingCreateOrConnectWithoutPrivateSessionInput | PrivateSessionBookingCreateOrConnectWithoutPrivateSessionInput[]
    createMany?: PrivateSessionBookingCreateManyPrivateSessionInputEnvelope
    connect?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
  }

  export type InstructorUpdateOneRequiredWithoutPrivateSessionsNestedInput = {
    create?: XOR<InstructorCreateWithoutPrivateSessionsInput, InstructorUncheckedCreateWithoutPrivateSessionsInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutPrivateSessionsInput
    upsert?: InstructorUpsertWithoutPrivateSessionsInput
    connect?: InstructorWhereUniqueInput
    update?: XOR<XOR<InstructorUpdateToOneWithWhereWithoutPrivateSessionsInput, InstructorUpdateWithoutPrivateSessionsInput>, InstructorUncheckedUpdateWithoutPrivateSessionsInput>
  }

  export type PrivateSessionBookingUpdateManyWithoutPrivateSessionNestedInput = {
    create?: XOR<PrivateSessionBookingCreateWithoutPrivateSessionInput, PrivateSessionBookingUncheckedCreateWithoutPrivateSessionInput> | PrivateSessionBookingCreateWithoutPrivateSessionInput[] | PrivateSessionBookingUncheckedCreateWithoutPrivateSessionInput[]
    connectOrCreate?: PrivateSessionBookingCreateOrConnectWithoutPrivateSessionInput | PrivateSessionBookingCreateOrConnectWithoutPrivateSessionInput[]
    upsert?: PrivateSessionBookingUpsertWithWhereUniqueWithoutPrivateSessionInput | PrivateSessionBookingUpsertWithWhereUniqueWithoutPrivateSessionInput[]
    createMany?: PrivateSessionBookingCreateManyPrivateSessionInputEnvelope
    set?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
    disconnect?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
    delete?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
    connect?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
    update?: PrivateSessionBookingUpdateWithWhereUniqueWithoutPrivateSessionInput | PrivateSessionBookingUpdateWithWhereUniqueWithoutPrivateSessionInput[]
    updateMany?: PrivateSessionBookingUpdateManyWithWhereWithoutPrivateSessionInput | PrivateSessionBookingUpdateManyWithWhereWithoutPrivateSessionInput[]
    deleteMany?: PrivateSessionBookingScalarWhereInput | PrivateSessionBookingScalarWhereInput[]
  }

  export type PrivateSessionBookingUncheckedUpdateManyWithoutPrivateSessionNestedInput = {
    create?: XOR<PrivateSessionBookingCreateWithoutPrivateSessionInput, PrivateSessionBookingUncheckedCreateWithoutPrivateSessionInput> | PrivateSessionBookingCreateWithoutPrivateSessionInput[] | PrivateSessionBookingUncheckedCreateWithoutPrivateSessionInput[]
    connectOrCreate?: PrivateSessionBookingCreateOrConnectWithoutPrivateSessionInput | PrivateSessionBookingCreateOrConnectWithoutPrivateSessionInput[]
    upsert?: PrivateSessionBookingUpsertWithWhereUniqueWithoutPrivateSessionInput | PrivateSessionBookingUpsertWithWhereUniqueWithoutPrivateSessionInput[]
    createMany?: PrivateSessionBookingCreateManyPrivateSessionInputEnvelope
    set?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
    disconnect?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
    delete?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
    connect?: PrivateSessionBookingWhereUniqueInput | PrivateSessionBookingWhereUniqueInput[]
    update?: PrivateSessionBookingUpdateWithWhereUniqueWithoutPrivateSessionInput | PrivateSessionBookingUpdateWithWhereUniqueWithoutPrivateSessionInput[]
    updateMany?: PrivateSessionBookingUpdateManyWithWhereWithoutPrivateSessionInput | PrivateSessionBookingUpdateManyWithWhereWithoutPrivateSessionInput[]
    deleteMany?: PrivateSessionBookingScalarWhereInput | PrivateSessionBookingScalarWhereInput[]
  }

  export type PrivateSessionCreateNestedOneWithoutBookingsInput = {
    create?: XOR<PrivateSessionCreateWithoutBookingsInput, PrivateSessionUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PrivateSessionCreateOrConnectWithoutBookingsInput
    connect?: PrivateSessionWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutPrivateSessionBookingsInput = {
    create?: XOR<StudentCreateWithoutPrivateSessionBookingsInput, StudentUncheckedCreateWithoutPrivateSessionBookingsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPrivateSessionBookingsInput
    connect?: StudentWhereUniqueInput
  }

  export type PrivateSessionUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<PrivateSessionCreateWithoutBookingsInput, PrivateSessionUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PrivateSessionCreateOrConnectWithoutBookingsInput
    upsert?: PrivateSessionUpsertWithoutBookingsInput
    connect?: PrivateSessionWhereUniqueInput
    update?: XOR<XOR<PrivateSessionUpdateToOneWithWhereWithoutBookingsInput, PrivateSessionUpdateWithoutBookingsInput>, PrivateSessionUncheckedUpdateWithoutBookingsInput>
  }

  export type StudentUpdateOneRequiredWithoutPrivateSessionBookingsNestedInput = {
    create?: XOR<StudentCreateWithoutPrivateSessionBookingsInput, StudentUncheckedCreateWithoutPrivateSessionBookingsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPrivateSessionBookingsInput
    upsert?: StudentUpsertWithoutPrivateSessionBookingsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutPrivateSessionBookingsInput, StudentUpdateWithoutPrivateSessionBookingsInput>, StudentUncheckedUpdateWithoutPrivateSessionBookingsInput>
  }

  export type InstructorCreateNestedOneWithoutInstructorEarningsInput = {
    create?: XOR<InstructorCreateWithoutInstructorEarningsInput, InstructorUncheckedCreateWithoutInstructorEarningsInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutInstructorEarningsInput
    connect?: InstructorWhereUniqueInput
  }

  export type InstructorUpdateOneRequiredWithoutInstructorEarningsNestedInput = {
    create?: XOR<InstructorCreateWithoutInstructorEarningsInput, InstructorUncheckedCreateWithoutInstructorEarningsInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutInstructorEarningsInput
    upsert?: InstructorUpsertWithoutInstructorEarningsInput
    connect?: InstructorWhereUniqueInput
    update?: XOR<XOR<InstructorUpdateToOneWithWhereWithoutInstructorEarningsInput, InstructorUpdateWithoutInstructorEarningsInput>, InstructorUncheckedUpdateWithoutInstructorEarningsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumEarningTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EarningType | EnumEarningTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EarningType[]
    notIn?: $Enums.EarningType[]
    not?: NestedEnumEarningTypeFilter<$PrismaModel> | $Enums.EarningType
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEarningTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EarningType | EnumEarningTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EarningType[]
    notIn?: $Enums.EarningType[]
    not?: NestedEnumEarningTypeWithAggregatesFilter<$PrismaModel> | $Enums.EarningType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEarningTypeFilter<$PrismaModel>
    _max?: NestedEnumEarningTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type GroupCreateWithoutInstructorInput = {
    name: string
    description?: string | null
    monthlyPrice: number
    schedule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutInstructorInput = {
    id?: number
    name: string
    description?: string | null
    monthlyPrice: number
    schedule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutInstructorInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutInstructorInput, GroupUncheckedCreateWithoutInstructorInput>
  }

  export type GroupCreateManyInstructorInputEnvelope = {
    data: GroupCreateManyInstructorInput | GroupCreateManyInstructorInput[]
  }

  export type PrivateSessionCreateWithoutInstructorInput = {
    title: string
    description?: string | null
    sessionDate: Date | string
    durationHours?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: PrivateSessionBookingCreateNestedManyWithoutPrivateSessionInput
  }

  export type PrivateSessionUncheckedCreateWithoutInstructorInput = {
    id?: number
    title: string
    description?: string | null
    sessionDate: Date | string
    durationHours?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: PrivateSessionBookingUncheckedCreateNestedManyWithoutPrivateSessionInput
  }

  export type PrivateSessionCreateOrConnectWithoutInstructorInput = {
    where: PrivateSessionWhereUniqueInput
    create: XOR<PrivateSessionCreateWithoutInstructorInput, PrivateSessionUncheckedCreateWithoutInstructorInput>
  }

  export type PrivateSessionCreateManyInstructorInputEnvelope = {
    data: PrivateSessionCreateManyInstructorInput | PrivateSessionCreateManyInstructorInput[]
  }

  export type InstructorEarningCreateWithoutInstructorInput = {
    month: number
    year: number
    totalRevenue: number
    earningAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstructorEarningUncheckedCreateWithoutInstructorInput = {
    id?: number
    month: number
    year: number
    totalRevenue: number
    earningAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstructorEarningCreateOrConnectWithoutInstructorInput = {
    where: InstructorEarningWhereUniqueInput
    create: XOR<InstructorEarningCreateWithoutInstructorInput, InstructorEarningUncheckedCreateWithoutInstructorInput>
  }

  export type InstructorEarningCreateManyInstructorInputEnvelope = {
    data: InstructorEarningCreateManyInstructorInput | InstructorEarningCreateManyInstructorInput[]
  }

  export type GroupUpsertWithWhereUniqueWithoutInstructorInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutInstructorInput, GroupUncheckedUpdateWithoutInstructorInput>
    create: XOR<GroupCreateWithoutInstructorInput, GroupUncheckedCreateWithoutInstructorInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutInstructorInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutInstructorInput, GroupUncheckedUpdateWithoutInstructorInput>
  }

  export type GroupUpdateManyWithWhereWithoutInstructorInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutInstructorInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    monthlyPrice?: FloatFilter<"Group"> | number
    schedule?: StringNullableFilter<"Group"> | string | null
    instructorId?: IntFilter<"Group"> | number
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
  }

  export type PrivateSessionUpsertWithWhereUniqueWithoutInstructorInput = {
    where: PrivateSessionWhereUniqueInput
    update: XOR<PrivateSessionUpdateWithoutInstructorInput, PrivateSessionUncheckedUpdateWithoutInstructorInput>
    create: XOR<PrivateSessionCreateWithoutInstructorInput, PrivateSessionUncheckedCreateWithoutInstructorInput>
  }

  export type PrivateSessionUpdateWithWhereUniqueWithoutInstructorInput = {
    where: PrivateSessionWhereUniqueInput
    data: XOR<PrivateSessionUpdateWithoutInstructorInput, PrivateSessionUncheckedUpdateWithoutInstructorInput>
  }

  export type PrivateSessionUpdateManyWithWhereWithoutInstructorInput = {
    where: PrivateSessionScalarWhereInput
    data: XOR<PrivateSessionUpdateManyMutationInput, PrivateSessionUncheckedUpdateManyWithoutInstructorInput>
  }

  export type PrivateSessionScalarWhereInput = {
    AND?: PrivateSessionScalarWhereInput | PrivateSessionScalarWhereInput[]
    OR?: PrivateSessionScalarWhereInput[]
    NOT?: PrivateSessionScalarWhereInput | PrivateSessionScalarWhereInput[]
    id?: IntFilter<"PrivateSession"> | number
    title?: StringFilter<"PrivateSession"> | string
    description?: StringNullableFilter<"PrivateSession"> | string | null
    sessionDate?: DateTimeFilter<"PrivateSession"> | Date | string
    durationHours?: FloatFilter<"PrivateSession"> | number
    price?: FloatFilter<"PrivateSession"> | number
    instructorId?: IntFilter<"PrivateSession"> | number
    createdAt?: DateTimeFilter<"PrivateSession"> | Date | string
    updatedAt?: DateTimeFilter<"PrivateSession"> | Date | string
  }

  export type InstructorEarningUpsertWithWhereUniqueWithoutInstructorInput = {
    where: InstructorEarningWhereUniqueInput
    update: XOR<InstructorEarningUpdateWithoutInstructorInput, InstructorEarningUncheckedUpdateWithoutInstructorInput>
    create: XOR<InstructorEarningCreateWithoutInstructorInput, InstructorEarningUncheckedCreateWithoutInstructorInput>
  }

  export type InstructorEarningUpdateWithWhereUniqueWithoutInstructorInput = {
    where: InstructorEarningWhereUniqueInput
    data: XOR<InstructorEarningUpdateWithoutInstructorInput, InstructorEarningUncheckedUpdateWithoutInstructorInput>
  }

  export type InstructorEarningUpdateManyWithWhereWithoutInstructorInput = {
    where: InstructorEarningScalarWhereInput
    data: XOR<InstructorEarningUpdateManyMutationInput, InstructorEarningUncheckedUpdateManyWithoutInstructorInput>
  }

  export type InstructorEarningScalarWhereInput = {
    AND?: InstructorEarningScalarWhereInput | InstructorEarningScalarWhereInput[]
    OR?: InstructorEarningScalarWhereInput[]
    NOT?: InstructorEarningScalarWhereInput | InstructorEarningScalarWhereInput[]
    id?: IntFilter<"InstructorEarning"> | number
    instructorId?: IntFilter<"InstructorEarning"> | number
    month?: IntFilter<"InstructorEarning"> | number
    year?: IntFilter<"InstructorEarning"> | number
    totalRevenue?: FloatFilter<"InstructorEarning"> | number
    earningAmount?: FloatFilter<"InstructorEarning"> | number
    notes?: StringNullableFilter<"InstructorEarning"> | string | null
    createdAt?: DateTimeFilter<"InstructorEarning"> | Date | string
    updatedAt?: DateTimeFilter<"InstructorEarning"> | Date | string
  }

  export type EnrollmentCreateWithoutStudentInput = {
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutEnrollmentsInput
    subscriptions?: SubscriptionCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateWithoutStudentInput = {
    id?: number
    groupId: number
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentCreateOrConnectWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentCreateManyStudentInputEnvelope = {
    data: EnrollmentCreateManyStudentInput | EnrollmentCreateManyStudentInput[]
  }

  export type PrivateSessionBookingCreateWithoutStudentInput = {
    paid?: boolean
    paidAt?: Date | string | null
    amountPaid?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    privateSession: PrivateSessionCreateNestedOneWithoutBookingsInput
  }

  export type PrivateSessionBookingUncheckedCreateWithoutStudentInput = {
    id?: number
    privateSessionId: number
    paid?: boolean
    paidAt?: Date | string | null
    amountPaid?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrivateSessionBookingCreateOrConnectWithoutStudentInput = {
    where: PrivateSessionBookingWhereUniqueInput
    create: XOR<PrivateSessionBookingCreateWithoutStudentInput, PrivateSessionBookingUncheckedCreateWithoutStudentInput>
  }

  export type PrivateSessionBookingCreateManyStudentInputEnvelope = {
    data: PrivateSessionBookingCreateManyStudentInput | PrivateSessionBookingCreateManyStudentInput[]
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutStudentInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutStudentInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    studentId?: IntFilter<"Enrollment"> | number
    groupId?: IntFilter<"Enrollment"> | number
    isActive?: BoolFilter<"Enrollment"> | boolean
    startDate?: DateTimeFilter<"Enrollment"> | Date | string
    endDate?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
  }

  export type PrivateSessionBookingUpsertWithWhereUniqueWithoutStudentInput = {
    where: PrivateSessionBookingWhereUniqueInput
    update: XOR<PrivateSessionBookingUpdateWithoutStudentInput, PrivateSessionBookingUncheckedUpdateWithoutStudentInput>
    create: XOR<PrivateSessionBookingCreateWithoutStudentInput, PrivateSessionBookingUncheckedCreateWithoutStudentInput>
  }

  export type PrivateSessionBookingUpdateWithWhereUniqueWithoutStudentInput = {
    where: PrivateSessionBookingWhereUniqueInput
    data: XOR<PrivateSessionBookingUpdateWithoutStudentInput, PrivateSessionBookingUncheckedUpdateWithoutStudentInput>
  }

  export type PrivateSessionBookingUpdateManyWithWhereWithoutStudentInput = {
    where: PrivateSessionBookingScalarWhereInput
    data: XOR<PrivateSessionBookingUpdateManyMutationInput, PrivateSessionBookingUncheckedUpdateManyWithoutStudentInput>
  }

  export type PrivateSessionBookingScalarWhereInput = {
    AND?: PrivateSessionBookingScalarWhereInput | PrivateSessionBookingScalarWhereInput[]
    OR?: PrivateSessionBookingScalarWhereInput[]
    NOT?: PrivateSessionBookingScalarWhereInput | PrivateSessionBookingScalarWhereInput[]
    id?: IntFilter<"PrivateSessionBooking"> | number
    privateSessionId?: IntFilter<"PrivateSessionBooking"> | number
    studentId?: IntFilter<"PrivateSessionBooking"> | number
    paid?: BoolFilter<"PrivateSessionBooking"> | boolean
    paidAt?: DateTimeNullableFilter<"PrivateSessionBooking"> | Date | string | null
    amountPaid?: FloatNullableFilter<"PrivateSessionBooking"> | number | null
    createdAt?: DateTimeFilter<"PrivateSessionBooking"> | Date | string
    updatedAt?: DateTimeFilter<"PrivateSessionBooking"> | Date | string
  }

  export type InstructorCreateWithoutGroupsInput = {
    name: string
    phone?: string | null
    email?: string | null
    earningType?: $Enums.EarningType
    fixedSalary?: number | null
    revenueShare?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    privateSessions?: PrivateSessionCreateNestedManyWithoutInstructorInput
    instructorEarnings?: InstructorEarningCreateNestedManyWithoutInstructorInput
  }

  export type InstructorUncheckedCreateWithoutGroupsInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    earningType?: $Enums.EarningType
    fixedSalary?: number | null
    revenueShare?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    privateSessions?: PrivateSessionUncheckedCreateNestedManyWithoutInstructorInput
    instructorEarnings?: InstructorEarningUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type InstructorCreateOrConnectWithoutGroupsInput = {
    where: InstructorWhereUniqueInput
    create: XOR<InstructorCreateWithoutGroupsInput, InstructorUncheckedCreateWithoutGroupsInput>
  }

  export type EnrollmentCreateWithoutGroupInput = {
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutEnrollmentsInput
    subscriptions?: SubscriptionCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateWithoutGroupInput = {
    id?: number
    studentId: number
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentCreateOrConnectWithoutGroupInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutGroupInput, EnrollmentUncheckedCreateWithoutGroupInput>
  }

  export type EnrollmentCreateManyGroupInputEnvelope = {
    data: EnrollmentCreateManyGroupInput | EnrollmentCreateManyGroupInput[]
  }

  export type InstructorUpsertWithoutGroupsInput = {
    update: XOR<InstructorUpdateWithoutGroupsInput, InstructorUncheckedUpdateWithoutGroupsInput>
    create: XOR<InstructorCreateWithoutGroupsInput, InstructorUncheckedCreateWithoutGroupsInput>
    where?: InstructorWhereInput
  }

  export type InstructorUpdateToOneWithWhereWithoutGroupsInput = {
    where?: InstructorWhereInput
    data: XOR<InstructorUpdateWithoutGroupsInput, InstructorUncheckedUpdateWithoutGroupsInput>
  }

  export type InstructorUpdateWithoutGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    earningType?: EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType
    fixedSalary?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueShare?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    privateSessions?: PrivateSessionUpdateManyWithoutInstructorNestedInput
    instructorEarnings?: InstructorEarningUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    earningType?: EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType
    fixedSalary?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueShare?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    privateSessions?: PrivateSessionUncheckedUpdateManyWithoutInstructorNestedInput
    instructorEarnings?: InstructorEarningUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutGroupInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutGroupInput, EnrollmentUncheckedUpdateWithoutGroupInput>
    create: XOR<EnrollmentCreateWithoutGroupInput, EnrollmentUncheckedCreateWithoutGroupInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutGroupInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutGroupInput, EnrollmentUncheckedUpdateWithoutGroupInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutGroupInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutGroupInput>
  }

  export type StudentCreateWithoutEnrollmentsInput = {
    name: string
    title?: string | null
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    privateSessionBookings?: PrivateSessionBookingCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    name: string
    title?: string | null
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    privateSessionBookings?: PrivateSessionBookingUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutEnrollmentsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutEnrollmentsInput, StudentUncheckedCreateWithoutEnrollmentsInput>
  }

  export type GroupCreateWithoutEnrollmentsInput = {
    name: string
    description?: string | null
    monthlyPrice: number
    schedule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: InstructorCreateNestedOneWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    name: string
    description?: string | null
    monthlyPrice: number
    schedule?: string | null
    instructorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupCreateOrConnectWithoutEnrollmentsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutEnrollmentsInput, GroupUncheckedCreateWithoutEnrollmentsInput>
  }

  export type SubscriptionCreateWithoutEnrollmentInput = {
    month: number
    year: number
    amountDue: number
    amountPaid?: number
    status?: $Enums.SubscriptionStatus
    paidAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutEnrollmentInput = {
    id?: number
    month: number
    year: number
    amountDue: number
    amountPaid?: number
    status?: $Enums.SubscriptionStatus
    paidAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutEnrollmentInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutEnrollmentInput, SubscriptionUncheckedCreateWithoutEnrollmentInput>
  }

  export type SubscriptionCreateManyEnrollmentInputEnvelope = {
    data: SubscriptionCreateManyEnrollmentInput | SubscriptionCreateManyEnrollmentInput[]
  }

  export type StudentUpsertWithoutEnrollmentsInput = {
    update: XOR<StudentUpdateWithoutEnrollmentsInput, StudentUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<StudentCreateWithoutEnrollmentsInput, StudentUncheckedCreateWithoutEnrollmentsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutEnrollmentsInput, StudentUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type StudentUpdateWithoutEnrollmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    privateSessionBookings?: PrivateSessionBookingUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    privateSessionBookings?: PrivateSessionBookingUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type GroupUpsertWithoutEnrollmentsInput = {
    update: XOR<GroupUpdateWithoutEnrollmentsInput, GroupUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<GroupCreateWithoutEnrollmentsInput, GroupUncheckedCreateWithoutEnrollmentsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutEnrollmentsInput, GroupUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type GroupUpdateWithoutEnrollmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: InstructorUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    instructorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutEnrollmentInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutEnrollmentInput, SubscriptionUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<SubscriptionCreateWithoutEnrollmentInput, SubscriptionUncheckedCreateWithoutEnrollmentInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutEnrollmentInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutEnrollmentInput, SubscriptionUncheckedUpdateWithoutEnrollmentInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutEnrollmentInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutEnrollmentInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: IntFilter<"Subscription"> | number
    enrollmentId?: IntFilter<"Subscription"> | number
    month?: IntFilter<"Subscription"> | number
    year?: IntFilter<"Subscription"> | number
    amountDue?: FloatFilter<"Subscription"> | number
    amountPaid?: FloatFilter<"Subscription"> | number
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    paidAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    notes?: StringNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type EnrollmentCreateWithoutSubscriptionsInput = {
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutEnrollmentsInput
    group: GroupCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutSubscriptionsInput = {
    id?: number
    studentId: number
    groupId: number
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutSubscriptionsInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutSubscriptionsInput, EnrollmentUncheckedCreateWithoutSubscriptionsInput>
  }

  export type EnrollmentUpsertWithoutSubscriptionsInput = {
    update: XOR<EnrollmentUpdateWithoutSubscriptionsInput, EnrollmentUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<EnrollmentCreateWithoutSubscriptionsInput, EnrollmentUncheckedCreateWithoutSubscriptionsInput>
    where?: EnrollmentWhereInput
  }

  export type EnrollmentUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: EnrollmentWhereInput
    data: XOR<EnrollmentUpdateWithoutSubscriptionsInput, EnrollmentUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type EnrollmentUpdateWithoutSubscriptionsInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutEnrollmentsNestedInput
    group?: GroupUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutSubscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorCreateWithoutPrivateSessionsInput = {
    name: string
    phone?: string | null
    email?: string | null
    earningType?: $Enums.EarningType
    fixedSalary?: number | null
    revenueShare?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutInstructorInput
    instructorEarnings?: InstructorEarningCreateNestedManyWithoutInstructorInput
  }

  export type InstructorUncheckedCreateWithoutPrivateSessionsInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    earningType?: $Enums.EarningType
    fixedSalary?: number | null
    revenueShare?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutInstructorInput
    instructorEarnings?: InstructorEarningUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type InstructorCreateOrConnectWithoutPrivateSessionsInput = {
    where: InstructorWhereUniqueInput
    create: XOR<InstructorCreateWithoutPrivateSessionsInput, InstructorUncheckedCreateWithoutPrivateSessionsInput>
  }

  export type PrivateSessionBookingCreateWithoutPrivateSessionInput = {
    paid?: boolean
    paidAt?: Date | string | null
    amountPaid?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutPrivateSessionBookingsInput
  }

  export type PrivateSessionBookingUncheckedCreateWithoutPrivateSessionInput = {
    id?: number
    studentId: number
    paid?: boolean
    paidAt?: Date | string | null
    amountPaid?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrivateSessionBookingCreateOrConnectWithoutPrivateSessionInput = {
    where: PrivateSessionBookingWhereUniqueInput
    create: XOR<PrivateSessionBookingCreateWithoutPrivateSessionInput, PrivateSessionBookingUncheckedCreateWithoutPrivateSessionInput>
  }

  export type PrivateSessionBookingCreateManyPrivateSessionInputEnvelope = {
    data: PrivateSessionBookingCreateManyPrivateSessionInput | PrivateSessionBookingCreateManyPrivateSessionInput[]
  }

  export type InstructorUpsertWithoutPrivateSessionsInput = {
    update: XOR<InstructorUpdateWithoutPrivateSessionsInput, InstructorUncheckedUpdateWithoutPrivateSessionsInput>
    create: XOR<InstructorCreateWithoutPrivateSessionsInput, InstructorUncheckedCreateWithoutPrivateSessionsInput>
    where?: InstructorWhereInput
  }

  export type InstructorUpdateToOneWithWhereWithoutPrivateSessionsInput = {
    where?: InstructorWhereInput
    data: XOR<InstructorUpdateWithoutPrivateSessionsInput, InstructorUncheckedUpdateWithoutPrivateSessionsInput>
  }

  export type InstructorUpdateWithoutPrivateSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    earningType?: EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType
    fixedSalary?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueShare?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutInstructorNestedInput
    instructorEarnings?: InstructorEarningUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateWithoutPrivateSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    earningType?: EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType
    fixedSalary?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueShare?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutInstructorNestedInput
    instructorEarnings?: InstructorEarningUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type PrivateSessionBookingUpsertWithWhereUniqueWithoutPrivateSessionInput = {
    where: PrivateSessionBookingWhereUniqueInput
    update: XOR<PrivateSessionBookingUpdateWithoutPrivateSessionInput, PrivateSessionBookingUncheckedUpdateWithoutPrivateSessionInput>
    create: XOR<PrivateSessionBookingCreateWithoutPrivateSessionInput, PrivateSessionBookingUncheckedCreateWithoutPrivateSessionInput>
  }

  export type PrivateSessionBookingUpdateWithWhereUniqueWithoutPrivateSessionInput = {
    where: PrivateSessionBookingWhereUniqueInput
    data: XOR<PrivateSessionBookingUpdateWithoutPrivateSessionInput, PrivateSessionBookingUncheckedUpdateWithoutPrivateSessionInput>
  }

  export type PrivateSessionBookingUpdateManyWithWhereWithoutPrivateSessionInput = {
    where: PrivateSessionBookingScalarWhereInput
    data: XOR<PrivateSessionBookingUpdateManyMutationInput, PrivateSessionBookingUncheckedUpdateManyWithoutPrivateSessionInput>
  }

  export type PrivateSessionCreateWithoutBookingsInput = {
    title: string
    description?: string | null
    sessionDate: Date | string
    durationHours?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: InstructorCreateNestedOneWithoutPrivateSessionsInput
  }

  export type PrivateSessionUncheckedCreateWithoutBookingsInput = {
    id?: number
    title: string
    description?: string | null
    sessionDate: Date | string
    durationHours?: number
    price: number
    instructorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrivateSessionCreateOrConnectWithoutBookingsInput = {
    where: PrivateSessionWhereUniqueInput
    create: XOR<PrivateSessionCreateWithoutBookingsInput, PrivateSessionUncheckedCreateWithoutBookingsInput>
  }

  export type StudentCreateWithoutPrivateSessionBookingsInput = {
    name: string
    title?: string | null
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutPrivateSessionBookingsInput = {
    id?: number
    name: string
    title?: string | null
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutPrivateSessionBookingsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutPrivateSessionBookingsInput, StudentUncheckedCreateWithoutPrivateSessionBookingsInput>
  }

  export type PrivateSessionUpsertWithoutBookingsInput = {
    update: XOR<PrivateSessionUpdateWithoutBookingsInput, PrivateSessionUncheckedUpdateWithoutBookingsInput>
    create: XOR<PrivateSessionCreateWithoutBookingsInput, PrivateSessionUncheckedCreateWithoutBookingsInput>
    where?: PrivateSessionWhereInput
  }

  export type PrivateSessionUpdateToOneWithWhereWithoutBookingsInput = {
    where?: PrivateSessionWhereInput
    data: XOR<PrivateSessionUpdateWithoutBookingsInput, PrivateSessionUncheckedUpdateWithoutBookingsInput>
  }

  export type PrivateSessionUpdateWithoutBookingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: InstructorUpdateOneRequiredWithoutPrivateSessionsNestedInput
  }

  export type PrivateSessionUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    instructorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpsertWithoutPrivateSessionBookingsInput = {
    update: XOR<StudentUpdateWithoutPrivateSessionBookingsInput, StudentUncheckedUpdateWithoutPrivateSessionBookingsInput>
    create: XOR<StudentCreateWithoutPrivateSessionBookingsInput, StudentUncheckedCreateWithoutPrivateSessionBookingsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutPrivateSessionBookingsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutPrivateSessionBookingsInput, StudentUncheckedUpdateWithoutPrivateSessionBookingsInput>
  }

  export type StudentUpdateWithoutPrivateSessionBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutPrivateSessionBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type InstructorCreateWithoutInstructorEarningsInput = {
    name: string
    phone?: string | null
    email?: string | null
    earningType?: $Enums.EarningType
    fixedSalary?: number | null
    revenueShare?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutInstructorInput
    privateSessions?: PrivateSessionCreateNestedManyWithoutInstructorInput
  }

  export type InstructorUncheckedCreateWithoutInstructorEarningsInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    earningType?: $Enums.EarningType
    fixedSalary?: number | null
    revenueShare?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutInstructorInput
    privateSessions?: PrivateSessionUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type InstructorCreateOrConnectWithoutInstructorEarningsInput = {
    where: InstructorWhereUniqueInput
    create: XOR<InstructorCreateWithoutInstructorEarningsInput, InstructorUncheckedCreateWithoutInstructorEarningsInput>
  }

  export type InstructorUpsertWithoutInstructorEarningsInput = {
    update: XOR<InstructorUpdateWithoutInstructorEarningsInput, InstructorUncheckedUpdateWithoutInstructorEarningsInput>
    create: XOR<InstructorCreateWithoutInstructorEarningsInput, InstructorUncheckedCreateWithoutInstructorEarningsInput>
    where?: InstructorWhereInput
  }

  export type InstructorUpdateToOneWithWhereWithoutInstructorEarningsInput = {
    where?: InstructorWhereInput
    data: XOR<InstructorUpdateWithoutInstructorEarningsInput, InstructorUncheckedUpdateWithoutInstructorEarningsInput>
  }

  export type InstructorUpdateWithoutInstructorEarningsInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    earningType?: EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType
    fixedSalary?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueShare?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutInstructorNestedInput
    privateSessions?: PrivateSessionUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateWithoutInstructorEarningsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    earningType?: EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType
    fixedSalary?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueShare?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutInstructorNestedInput
    privateSessions?: PrivateSessionUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type GroupCreateManyInstructorInput = {
    id?: number
    name: string
    description?: string | null
    monthlyPrice: number
    schedule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrivateSessionCreateManyInstructorInput = {
    id?: number
    title: string
    description?: string | null
    sessionDate: Date | string
    durationHours?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstructorEarningCreateManyInstructorInput = {
    id?: number
    month: number
    year: number
    totalRevenue: number
    earningAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateWithoutInstructorInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateSessionUpdateWithoutInstructorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: PrivateSessionBookingUpdateManyWithoutPrivateSessionNestedInput
  }

  export type PrivateSessionUncheckedUpdateWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: PrivateSessionBookingUncheckedUpdateManyWithoutPrivateSessionNestedInput
  }

  export type PrivateSessionUncheckedUpdateManyWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorEarningUpdateWithoutInstructorInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    earningAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorEarningUncheckedUpdateWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    earningAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorEarningUncheckedUpdateManyWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    earningAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyStudentInput = {
    id?: number
    groupId: number
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrivateSessionBookingCreateManyStudentInput = {
    id?: number
    privateSessionId: number
    paid?: boolean
    paidAt?: Date | string | null
    amountPaid?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateWithoutStudentInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutEnrollmentsNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateSessionBookingUpdateWithoutStudentInput = {
    paid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    privateSession?: PrivateSessionUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type PrivateSessionBookingUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    privateSessionId?: IntFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateSessionBookingUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    privateSessionId?: IntFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyGroupInput = {
    id?: number
    studentId: number
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateWithoutGroupInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutEnrollmentsNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyEnrollmentInput = {
    id?: number
    month: number
    year: number
    amountDue: number
    amountPaid?: number
    status?: $Enums.SubscriptionStatus
    paidAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateWithoutEnrollmentInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateSessionBookingCreateManyPrivateSessionInput = {
    id?: number
    studentId: number
    paid?: boolean
    paidAt?: Date | string | null
    amountPaid?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrivateSessionBookingUpdateWithoutPrivateSessionInput = {
    paid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutPrivateSessionBookingsNestedInput
  }

  export type PrivateSessionBookingUncheckedUpdateWithoutPrivateSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateSessionBookingUncheckedUpdateManyWithoutPrivateSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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