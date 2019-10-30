import { State, action, monitor } from "reactronic";
import { Color } from "../data/color";
import { Monitors } from "./Monitors.model";

export class ColorModel extends State {

  constructor(private _color: Color) {
    super();
  }

  get color(): Color {
    return this._color;
  }

  @action
  setColor(newColor: Color) {
    this._color = newColor;
  }

  @action
  @monitor(Monitors.colorChange)
  setRedComponent(value: number) {
    this._color = new Color(value, this._color.g, this._color.b);
  }

  @action
  @monitor(Monitors.colorChange)
  setGreenComponent(value: number) {
    this._color = new Color(this._color.r, value, this._color.b);
  }

  @action
  @monitor(Monitors.colorChange)
  setBlueComponent(value: number) {
    this._color = new Color(this._color.r, this._color.g, value);
  }
}
