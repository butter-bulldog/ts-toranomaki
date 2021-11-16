/**
 * オブジェクトが保持する値を読み込み専用とする
 */

// プロパティをreadonlyにする
{
  type State = {
    readonly id: number;
    name: string;
  };
  const state: State = {
    id: 1,
    name: "Taro",
  };
  state.name = "Hanako";
  // state.id = 2; // Error!
}

// 全プロパティをreadonlyにする
{
  type State = {
    id: number;
    name: string;
  };
  const state: Readonly<State> = {
    id: 1,
    name: "Taro",
  };
  //state.name = "Hanako"; // Error!
  //state.id = 2; // Error!
}
