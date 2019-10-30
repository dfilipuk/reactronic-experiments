import { State, trigger } from "reactronic";
import { Color } from "../data/color";
import { CardModel } from "./Card.model";
import { ColorModel } from "./Color.model";
import { DelayedColorModel } from "./DelayedColor.model";

export class AppModel extends State {
  private _color: Color;

  card: CardModel;
  delayedColor: DelayedColorModel;
  colorFromColorPicker: ColorModel;

  constructor() {
    super();

    this._color = new Color(0, 0, 0);
    this.delayedColor = new DelayedColorModel(0, 0, 0);
    this.card = new CardModel(this._color);
    this.colorFromColorPicker = new ColorModel(0, 0, 0);
  }

  @trigger
  private setColorFromColorPicker() {
    this._color = this.colorFromColorPicker.color;
    // console.log('setColorFromColorPicker');
  }

  @trigger
  private updatedDelayedColor() {
    this.delayedColor.updateColor(this._color);
    // console.log('updatedDelayedColor');
  }

  @trigger
  private updateCardModel() {
    this.card.color = this._color;

    // console.log('updateCardModel');

    // --- Doesn't work because subscription is made to properties
    // --- of object but don't to object itsef
    // this.card = new CardModel(this._color);

    // --- Doesn't work because Color class does not extends state
    // this.card.color.r = this._color.r;
    // this.card.color.g = this._color.g;
    // this.card.color.b = this._color.b;
  }
}
