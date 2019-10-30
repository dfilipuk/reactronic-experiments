import { State, action, trigger, delay, cached } from "reactronic";
import { Color } from "../data/color";

export class DelayedColorModel extends State {
  private _color: Color;

  delay250Ms: Color;
  delay500Ms: Color;
  delay750Ms: Color;
  delay1000Ms: Color;

  constructor(r: number, g: number, b: number) {
    super();

    this._color = new Color(r, g, b);
    this.delay250Ms = this._color;
    this.delay500Ms = this._color;
    this.delay750Ms = this._color;
    this.delay1000Ms = this._color;
  }

  @action
  updateColor(newColor: Color) {
    this._color = newColor;
  }

  @cached
  get250MsDelay(): Color {
    return this.delay250Ms;
  }

  @cached
  get500MsDelay(): Color {
    return this.delay500Ms;
  }

  @cached
  get750MsDelay(): Color {
    return this.delay750Ms;
  }

  @cached
  get1000MsDelay(): Color {
    return this.delay1000Ms;
  }

  @trigger
  @delay(250)
  private updateWith250MsDelay() {
    this.delay250Ms = this._color;
  }

  @trigger
  @delay(500)
  private updateWith500MsDelay() {
    this.delay500Ms = this._color;
  }

  @trigger
  @delay(750)
  private updateWith750MsDelay() {
    this.delay750Ms = this._color;
  }

  @trigger
  @delay(1000)
  private updateWith1000MsDelay() {
    this.delay1000Ms = this._color;
  }
}