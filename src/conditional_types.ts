/**
 * Conditional Types
 * 型を条件分岐にかけ、型推論を導出する型
 */

{
  // 三項演算子と同じ感じで型を設定できる
  type IsString<T> = T extends string ? true : false;
  type X = IsString<"test">; // type X = true
  type Y = IsString<0>; // type Y = faslse
}

{
  interface Properties {
    name: string;
    age: number;
    flag: boolean;
  }
  type IsType<T, U> = {
    [K in keyof T]: T[K] extends U ? true : false;
  };

  type IsString = IsType<Properties, string>;
  type IsNumber = IsType<Properties, number>;
  type IsBoolean = IsType<Properties, boolean>;

  /*
  型推論
  type IsString = {
    name: true;
    age: false;
    flag: false;
  };
  type IsNumber = {
    name: false;
    age: true;
    flag: false;
  };
  type IsBoolean = {
    name: false;
    age: false;
    flag: true;
  };
  */
}

{
  interface Properties {
    name: string;
    age: number;
    walk: () => void;
    jump: () => Promise<void>;
  }
  type Filter<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never;
  }[keyof T];

  type StringKeys = Filter<Properties, string>;
  type NumberKeys = Filter<Properties, number>;
  type FunctionKeys = Filter<Properties, Function>;
  type ReturnPromiseKeys = Filter<Properties, () => Promise<any>>;

  // 推論結果
  /*
  type StringKeys = "name"
  type NumberKeys = "age"
  type FunctionKeys = "walk" | "jump"
  type ReturnPromiseKeys = "jump"
  */
}

{
  interface DeepNest {
    deep: { nest: { value: string } };
  }
  interface ShallowNest {
    shallow: { value: string };
  }
  interface Properties {
    deep: DeepNest;
    shallow: ShallowNest;
  }

  type Salvage<T extends DeepNest> = T["deep"]["nest"]["value"];
  type DeepDive<T> = {
    [K in keyof T]: T[K] extends DeepNest ? Salvage<T[K]> : never;
  }[keyof T];
  type X = DeepDive<Properties>; // type X = string
}
