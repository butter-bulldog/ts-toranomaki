/**
 * クラス
 */
class Creature {
  numberOfHands: number;
  numberOfFeet: number;
  constructor(numberOfHands: number, numberOfFeet: number) {
    this.numberOfHands = numberOfHands;
    this.numberOfFeet = numberOfFeet;
  }
}
const creature = new Creature(0, 4);

class Human extends Creature {
  protected name: string;
  constructor(name: string) {
    super(2, 2);
    this.name = name;
  }
  protected greet() {
    return `Hello! I'm ${this.name}.`;
  }
  public shakeHands() {
    console.log(this.greet());
  }
}
