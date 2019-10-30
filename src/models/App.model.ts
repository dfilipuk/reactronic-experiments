import { State, action, cached, trigger } from "reactronic";
import { Color } from "../data/color";
import { CardModel } from "./Card.model";
import { ColorModel } from "./Color.model";
import { DelayedColorModel } from "./DelayedColor.model";

export class AppModel extends State {
  private _baseColor: Color;

  baseColor: Color;

  delayedColor: DelayedColorModel;
  card: CardModel;
  colorFromCustomColorPicker: ColorModel;

  constructor() {
    super();

    this._baseColor = new Color(0, 0, 0);
    this.baseColor = this._baseColor;
    this.delayedColor = new DelayedColorModel(0, 0, 0);
    this.card = new CardModel(this._baseColor);
    this.colorFromCustomColorPicker = new ColorModel(0, 0, 0);
  }

  @action
  setBaseColor(newColor: Color) {
    this._baseColor = newColor;

    // --- Doesn't work because Color class does not extends state
    // this._baseColor.r = newColor.r;
    // this._baseColor.g = newColor.g;
    // this._baseColor.b = newColor.b;
  }

  @trigger
  updateBaseColorFromColorPicker() {
    this._baseColor = new Color(
      this.colorFromCustomColorPicker.red,
      this.colorFromCustomColorPicker.green,
      this.colorFromCustomColorPicker.blue
    );
  }

  @trigger
  updateCardModel() {
    this.card.color = this._baseColor;

    // --- Doesn't work because subscription is made to properties
    // --- of object but don't to object itsef
    // this.card = new CardModel(this._baseColor);

    // --- Doesn't work because Color class does not extends state
    // this.card.color.r = this._baseColor.r;
    // this.card.color.g = this._baseColor.g;
    // this.card.color.b = this._baseColor.b;
  }

  @trigger
  updateBaseColor() {
    this.baseColor = this._baseColor;
    //console.log('updateBaseColor')
  }

  @trigger
  updatedDelayedColor() {
    this.delayedColor.updateColor(this._baseColor);
  }

  @cached
  getBaseColor(): Color {
    return this.baseColor;
  }
}
