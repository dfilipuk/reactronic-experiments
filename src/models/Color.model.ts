import { State, action } from "reactronic";
import { Color } from "../data/color";

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

  get color(): Color {
    return new Color(this.red, this.green, this.blue);
  }

  @action
  setColor(newColor: Color) {
    this.red = newColor.r;
    this.green = newColor.g;
    this.blue = newColor.b;
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
