/**
 * ダウンキャスト
 */
{
  // プロパティがLiteral Typesで固定されていることを期待するが…
  // constでオブジェクトは宣言されていてもプロパティは再代入可能なので型を固定できない
  const defaultTheme = {
    backgroundColor: "orange",
    borderColor: "red",
  };
  // 推論
  // const defaultTheme: {
  //   backgroundColor: string;
  //   borderColor: string;
  // };
}

{
  // つまりTypeScriptよりもプログラマのほうが型に詳しい場合。アサーションを使うとよい。
  // このように抽象的な型から詳細な型を付与することをダウンキャストと呼ぶ
  const defaultTheme = {
    backgroundColor: "orange" as "orange",
    borderColor: "red" as "red",
  };
  // defaultTheme.backgroundColor = "blue"; // Error!
}
