import { State, trigger } from "reactronic";
import { Color } from "../data/color";
import { ColorModel } from "./Color.model";
import { DelayedColorModel } from "./DelayedColor.model";

export class AppModel extends State {
  
  color: ColorModel;
  delayedColor: DelayedColorModel;

  constructor() {
    super();

    this.color = new ColorModel(new Color(0, 0, 0));
    this.delayedColor = new DelayedColorModel(this.color);
  }
}
