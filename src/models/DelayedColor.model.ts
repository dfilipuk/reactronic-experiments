import { State, trigger, delay, cached } from "reactronic";
import { Color } from "../data/color";
import { ColorModel } from "./Color.model";
import { Monitors } from "./Monitors.model";

export class DelayedColorModel extends State {

  delay250Ms: Color;
  delay500Ms: Color;
  delay750Ms: Color;
  delay1000Ms: Color;

  constructor(private _model: ColorModel) {
    super();

    this.delay250Ms = this._model.color;
    this.delay500Ms = this._model.color;
    this.delay750Ms = this._model.color;
    this.delay1000Ms = this._model.color;
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
    if (!Monitors.colorDebounce.busy) {
      this.delay250Ms = this._model.color;
      // console.log('updateWith250MsDelay');
    }
  }

  @trigger
  @delay(500)
  private updateWith500MsDelay() {
    if (!Monitors.colorDebounce.busy) {
      this.delay500Ms = this._model.color;
      // console.log('updateWith500MsDelay');
    }
  }

  @trigger
  @delay(750)
  private updateWith750MsDelay() {
    if (!Monitors.colorDebounce.busy) {
      this.delay750Ms = this._model.color;
      // console.log('updateWith750MsDelay');
    }
  }

  @trigger
  @delay(1000)
  private updateWith1000MsDelay() {
    if (!Monitors.colorDebounce.busy) {
      this.delay1000Ms = this._model.color;
      // console.log('updateWith1000MsDelay');
    }
  }
}
