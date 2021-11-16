/**
 * 型推論
 */

// let
{
  let user = "Taro";
  let value = 0;
  let flag = false;
  // 適用された型推論
  // let user: string;
  // let value: number;
  // let flag: boolean;
}

// const
{
  const user = "Taro";
  const value = 0;
  const flag = false;
  // 適用された型推論
  // 再代入不可なのでLiteral Typesで推論される
  // const user: "Taro";
  // const value: 0;
  // const flag: false;
}

// array
{
  const a1 = [true, false];
  const a2 = [0, 1, "2"];
  const a3 = [false, 1, "2"];
  // 適用された型推論
  // const a1: boolean[];
  // const a2: (string | number)[];
  // const a3: (string | number | boolean)[];
}

// obj
{
  const obj = {
    foo: false,
    bar: 1,
    baz: "2",
  };
  // 適用された型推論
  // Objectのプロパティは再代入可能なので、Literal Typesとして推論されない
  // const obj: {
  //   foo: boolean;
  //   bar: number;
  //   baz: string;
  // };
}

// 関数の戻り型推論
{
  function getPriceLabel(amount: number, tax: number) {
    return `￥${amount * tax}`;
  }
  // 推論結果
  // function getPriceLabel(amount: number, tax: number): string;

  // 関数内に条件分岐がある場合などはUnion Typesで型推論が適用される
  function getScore(score: number) {
    if (score < 0 || score > 100) return null;
    return score;
  }
  // 推論結果
  // function getScore(score: number): number | null;
}

// Promise
{
  // 関数戻り型アノテーションで指定
  function wait(duration: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`${duration}ms passed`), duration);
    });
  }
  wait(1000).then((res) => {}); // resはstring型
}
{
  // Promiseインスタンス作成時に型を付与;
  function wait(duration: number) {
    return new Promise<string>((resolve) => {
      setTimeout(() => resolve(`${duration}ms passed`), duration);
    });
  }
  wait(1000).then((res) => {}); // resはstring型
}
