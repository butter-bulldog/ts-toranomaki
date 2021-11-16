/**
 * アノテーション
 */
{
  // 関数の引数 戻り値
  function expo2(amount: number): number {
    return amount ** 2;
  }
  const result = expo2(2);

  // 値を返さないvoid
  function logger(message: string): void {
    console.log(message);
  }

  // 呼び出し元に返ってこない場合はnever型
  function error(message: string): never {
    throw new Error(message);
  }

  // boolean型
  let flag: boolean = false;

  // number型
  let decimal: number = 256;

  // string型
  let color: string = "white";

  // number
  let list: number[] = [1, 2, 3];
  let list2: Array<number> = [1, 2, 3];

  // tuple
  let x: [string, number];
  x = ["hello", 10]; // OK

  // object
  let objectType: object;

  // Union型 booleanかnumberかstring
  let value: boolean | number | string;
  value = false;
  value = 1;
  value = "2";

  // 配列要素をUnionにする場合
  let numberOrStrings: (number | string)[];
  numberOrStrings = [0, "1"];

  // Unionを使うとNullable型にできる
  let nullableString: string | null;
  nullableString = null;
  nullableString = "notNull";

  // 文字列リテラルとUnion型の組み合わせ
  let users: "taro" | "jiro" | "hanako";
  users = "hanako";
  // users = 'hanakosan' // Error

  // 数値リテラルとUnion型の組み合わせ
  let bit: 8 | 16 | 32 | 64;
  bit = 8;
  // bit = 12 // Error!
}
