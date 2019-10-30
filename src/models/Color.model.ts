import { State, action, monitor } from "reactronic";
import { Color } from "../data/color";
import { Monitors } from "./Monitors.model";

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
  @monitor(Monitors.colorChange)
  setRedComponent(value: number) {
    this.red = value;
  }

  @action
  @monitor(Monitors.colorChange)
  setGreenComponent(value: number) {
    this.green = value;
  }

  @action
  @monitor(Monitors.colorChange)
  setBlueComponent(value: number) {
    this.blue = value;
  }
}
