import { State, action, cached, trigger } from "reactronic";
import { Color } from "../data/color";
import { CardModel } from "./Card.model";
import { ColorModel } from "./Color.model";
import { DelayedColorModel } from "./DelayedColor.model";

export class AppModel extends State {
  private _color: Color;

  card: CardModel;
  delayedColor: DelayedColorModel;
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
  private synchronizeColorPickers() {
    this.colorFromCustomColorPicker.setColor(this._color);
    this.colorFromNativeColorPicker.setColor(this._color);
  }

  @trigger
  private updatedDelayedColor() {
    this.delayedColor.updateColor(this._color);
    // console.log('updatedDelayedColor');
  }

  @trigger
  private updateCardModel() {
    this.card.color = this._color;

    // --- Doesn't work because subscription is made to properties
    // --- of object but don't to object itsef
    // this.card = new CardModel(this._color);

    // --- Doesn't work because Color class does not extends state
    // this.card.color.r = this._color.r;
    // this.card.color.g = this._color.g;
    // this.card.color.b = this._color.b;
  }
}
