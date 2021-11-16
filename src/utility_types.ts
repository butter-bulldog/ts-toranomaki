/**
 * 組み込み Utility TYpes
 */

interface User {
  name: string;
  age: number | null;
  gender: "male" | "female" | "other";
  birthplace?: string;
}

/**
 * Readonly型
 * Objectのプロパティをすべてreadonlyに変換し、新しい型を生成する型
 */
type ReadonlyWrapUser = Readonly<User>;

/* 推論結果
type RequiredWrapUser = {
  readonly name: string;
  readonly age: number | null;
  readonly gender: "male" | "female" | "other";
  readonly birthplace?: string | undefined;
};
*/

/**
 * Partial型
 * Object型のプロパティを、すべてoptionalに変換し、新しい型を生成する型
 */
type PartialWrapUser = Partial<User>;

/* 推論結果
type PartialWrapUser = {
  name?: string | undefined;
  age?: number | null | undefined;
  gender?: "male" | "female" | "other" | undefined;
  birthplace?: string | undefined;
};
*/

/**
 * Required型
 * Object型のプロパティから、すべてoptionalを取り除き、新しい型を生成する型
 */
type RequiredWrapUser = Required<User>;

/* 推論結果
type RequiredWrapUser = {
  name: string;
  age: number | null;
  gender: "male" | "female" | "other";
  birthplace: string;
};
 */

/**
 * Record型
 * 第一Genericsに指定したプロパティ名称で、新しいObject型を生成する型です
 */
type UserRecord = Record<"user", User>;

/* 推論結果
type UserRecord = {
  user: User;
};
 */

/**
 * Pick型
 * 第二Genericsに指定した名称のプロパティ型を、第一Genericsに指定した型から抽出し、新しいObject型を生成する型
 */
type UserGender = Pick<User, "gender">;
/* 推論結果
type UserGender = {
  gender: "male" | "female" | "other";
};
 */

/**
 * Omit型
 * 第二Genericsに指定した名称のプロパティ型を、第一Genericsから取り除き、新しいObject型を生成する型
 */
type WithoutBirthplace = Omit<User, "birthplace">;
/* 推論結果
type WithoutBirthplace = {
  name: string;
  age: number | null;
  gender: "male" | "female" | "other";
};
*/

/**
 * Exclued型
 * T型からU型と互換性のある型を除き、新しい型を生成
 */
{
  type X = Exclude<"a" | "b", "b">; // "a"
  type Y = Exclude<"a" | (() => void), Function>; // "a"
}

/**
 * Extract型
 * T型からU 型と互換性のある型を残し、新しい型を生成
 */
{
  type X = Extract<"a" | "b", "b">; // "b"
  type Y = Extract<"a" | (() => void), Function>; // () => void
}

/**
 * NonNullable型
 * T型からnullおよびundefinedを除いた、新しい型を生成
 */
{
  type X = NonNullable<string | null | undefined>; // string
}

/**
 * ReturnType型
 * 関数型であるT型の戻り型を抽出し、新しい型を生成します。関数型以外を
 * Genericsに指定した場合は、コンパイルエラーとなる
 */
{
  type X = ReturnType<() => string>; // string
  // type Y = ReturnType<string>; // Error!
}

/**
 * InstanceType型
 * コンストラクター関数型のインスタンス型を取得
 */
class C {
  x = 0;
  y = 0;
}
type X = InstanceType<typeof C>;
const n = {} as X; // { x: number; y: number }
