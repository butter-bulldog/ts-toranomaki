/**
 * 型に名前をつける
 */
{
  // 型は合併型で複数列挙できる
  type BirthYear = number | string;

  // 型には値も設定できる
  type FoodMenu = "北極" | "冷やし味噌";

  // 変数や関数の引数で使える
  const birthday: BirthYear = "平成";
}

// 型を宣言するにはinterfaceかtypeを使える
// interfaceは open endedに準拠しているため、同一名称を宣言するとオーバーロードが可能
// typeはopen endedに準拠していないため、同一名称の型宣言は失敗する
{
  interface User {
    name: string;
  }
  interface User {
    age: number;
  }
  // 最終的な型宣言
  // interface User {
  //   name: string;
  //   age: number;
  // }
}
{
  // type User = {
  //   // Error!
  //   name: string;
  // };
  // type User = {
  //   // Error!
  //   age: number;
  // };
}

{
  // nameは必須だが、それ以外のプロパティを自由に追加したい場合、以下のように書く
  // k: stringをインデックスシグネチャと呼ぶ
  type User = {
    name: string;
    [k: string]: any;
  };
  const userA: User = {
    name: "Taro",
    age: 26,
  };
  const x = userA.name; // const x: string
  const y = userA.age; // const y: any
}

{
  // プロパティ名称を制約したい場合はK in を使う
  // こうするとenqueteのプロパティ名は"exercise_habits" | "time_of_sleeping"のどちらかしか指定できない
  type Question = "exercise_habits" | "time_of_sleeping";
  type Answer = "mighty" | "lot" | "few" | "entirely";
  type User = {
    name: string;
    enquete: { [K in Question]?: Answer };
  };
}

/**
 * 型の互換性
 */
{
  // String Literal Typesはstring型の派生型
  // 詳細な型に抽象的な型を代入するとコンパイルエラーとなる
  let s1: "test" = "test";
  let s2: string = s1; // No Error
  let s3: string = "test";
  // let s4: "test" = s3; // Error!
}

{
  // Numeric Literal Typesはnumber型の派生型
  // 詳細な型に抽象的な型を代入するとコンパイルエラーとなる
  let n1: 0 = 0;
  let n2: number = n1; // No Error
  let n3: number = 0;
  // let n4: 0 = n3; // Error!
}
