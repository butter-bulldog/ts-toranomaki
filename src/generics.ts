/**
 * ジェネリクス
 * 型の決定を遅延でき、型における変数のような機能を果たす
 */

// 変数のジェネリクス
{
  // Genericsを利用する型の宣言
  interface Box<T> {
    value: T;
  }
  // const box0: Box = { value: "test" }; // Error! Genericsを指定していない
  const box1: Box<string> = { value: "test" };
  // const box2: Box<number> = { value: "test" }; // Error! number型でなければならない
}

{
  // 初期Genericsの指定
  interface Box<T = string> {
    value: T;
  }

  const box0: Box = { value: "test" }; // NoError. Genericsを省略できる
  const box1: Box<string> = { value: "test" };
  // const box2: Box<number> = { value: "test" }; // Error! number型でなければならな
}

{
  // extendsシグネチャを付与すると指定可能な型を制約できる
  interface Box<T extends string | number> {
    value: T;
  }
  const box0: Box<string> = { value: "test" };
  const box1: Box<number> = { value: 0 };
  // const box2: Box<boolean> = { value: false }; // Error! string | number型でなければならない
}

// 関数のGenerics

{
  // こんな漢字で関数内部の処理は型安全であることが保証される
  // 例えばProps型を満たしていることが確約されているため、numberに備わっているtoFixed関数を実行できる
  interface Props {
    amount: number;
  }
  function boxed<T extends Props>(props: T) {
    return { value: props.amount.toFixed(1) };
  }
  const box1 = boxed({ amount: 0 });
  //const box2 = boxed({ value: 0 }); // Error! Props型を満たしていない
  //const box3 = boxed({ amount: "test" }); // Error! amountがnumber型でない
}

{
  // K型は第一引数Tのプロパティ名称であることが確約される
  function pick<T, K extends keyof T>(props: T, key: K) {
    return props[key];
  }

  const obj = {
    name: "Taro",
    amount: 0,
    flag: false,
  };
  const value1 = pick(obj, "name"); // const value1: string
  const value2 = pick(obj, "amount"); // const value2: number
  const value3 = pick(obj, "flag"); // const value3: boolean
  // const value4 = pick(obj, "test"); // Error! 'test'プロパティはない
}

// クラスのGenerics
{
  class Person<T extends string> {
    name: T;
    constructor(name: T) {
      this.name = name;
    }
  }

  const person = new Person("Taro");
  const personName = person.name; // const personName: "Taro"
}

{
  interface PersonProps {
    name: string;
    age: number;
    gender: "male" | "female" | "other";
  }
  class Person<T extends PersonProps> {
    name: T["name"];
    age: T["age"];
    gender: T["gender"];
    constructor(props: T) {
      this.name = props.name;
      this.age = props.age;
      this.gender = props.gender;
    }
  }
  const person = new Person({
    name: "Taro",
    age: 28,
    gender: "male",
  });
}
