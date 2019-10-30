import { State, action, cached, trigger } from "reactronic";
import { Color } from "../data/color";
import { CardModel } from "./Card.model";
import { ColorModel } from "./Color.model";
import { DelayedColorModel } from "./DelayedColor.model";

export class AppModel extends State {
  private _color: Color;

  delayedColor: DelayedColorModel;
  card: CardModel;
  colorFromCustomColorPicker: ColorModel;
  colorFromNativeColorPicker: ColorModel;

  constructor() {
    super();

    this._color = new Color(0, 0, 0);
    this.delayedColor = new DelayedColorModel(0, 0, 0);
    this.card = new CardModel(this._color);
    this.colorFromCustomColorPicker = new ColorModel(0, 0, 0);
    this.colorFromNativeColorPicker = new ColorModel(0, 0, 0);
  }

  @trigger
  private setColorFromCustomColorPicker() {
    this._color = this.colorFromCustomColorPicker.color;
  }

  @trigger
  private setColorFromNativeColorPicker() {
    this._color = this.colorFromNativeColorPicker.color;
  }

  @trigger
  updatedDelayedColor() {
    this.delayedColor.updateColor(this._color);
  }

  @trigger
  updateCardModel() {
    this.card.color = this._color;

    // --- Doesn't work because subscription is made to properties
    // --- of object but don't to object itsef
    // this.card = new CardModel(this._baseColor);

    // --- Doesn't work because Color class does not extends state
    // this.card.color.r = this._baseColor.r;
    // this.card.color.g = this._baseColor.g;
    // this.card.color.b = this._baseColor.b;
  }
}
