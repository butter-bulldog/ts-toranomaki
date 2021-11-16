/**
 * アサーション
 */

{
  // プログラマー自身が型の詳細をわかっているときは、アサーションで型チェックできる
  let someValue: any = "this is a string";
  let strLength: number = (someValue as string).length;
}
