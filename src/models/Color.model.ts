import { State, action } from "reactronic";

export class ColorModel extends State {
  red: number;
  green: number;
  blue: number;

  constructor(r: number, g: number, b: number) {
    super();

    this.red = r;
    this.green = g;
    this.blue = b;
  }

  @action
  setRedComponent(value: number) {
    this.red = value;
  }

  @action
  setGreenComponent(value: number) {
    this.green = value;
  }

  @action
  setBlueComponent(value: number) {
    this.blue = value;
  }
}
