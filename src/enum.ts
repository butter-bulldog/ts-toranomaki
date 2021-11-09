/**
 * ENUM
 */

// 数値列挙
enum Direction {
  Up, // (enum member) Direction.Up = 0
  Down, // (enum member) Direction.Down = 1
  Left, // (enum member) Direction.Left = 2
  Right, // (enum member) Direction.Right = 3
}
const left = Direction.Left;
console.log(Direction.Down); // 0

// 文字列列挙
enum Ports {
  USER_SERVICE = "8080",
  REGISTER_SERVICE = "8081",
  MEDIA_SERVICE = "8888",
}
const port = Ports.MEDIA_SERVICE;
console.log(port); // 8888

// 文字列列挙は異なるブロックで宣言できる
enum Ports2 {
  USER_SERVICE = "8080",
}
enum Ports2 {
  REGISTER_SERVICE = "8081",
}
enum Ports2 {
  MEDIA_SERVICE = "8888",
}
