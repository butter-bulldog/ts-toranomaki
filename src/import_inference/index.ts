/**
 * import構文の型推論
 */
import { value, label, returnFalse } from "./test";
const v1 = value;
const v2 = label;
const v3 = returnFalse;

//【推論結果】
// const v1: 10;
// const v2: "label";
// const v3: () => boolean;

// import構文は型推論の対象となる。require構文では型推論は行われない
