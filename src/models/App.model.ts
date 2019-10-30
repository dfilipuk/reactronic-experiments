import { State, action, cached, trigger, delay, reentrance, Reentrance } from "reactronic";
import { Color } from "../data/color";
import { CardModel } from "./Card.model";
import { ColorModel } from "./Color.model";

export class AppModel extends State {
  private _baseColor: Color;

  baseColor: Color;
  baseColor250Ms: Color;
  baseColor500Ms: Color;
  baseColor750Ms: Color;
  baseColor1000Ms: Color;

  card: CardModel;
  colorFromCustomColorPicker: ColorModel;

  constructor() {
    super();

    this._baseColor = new Color(0, 0, 0);
    this.baseColor = this._baseColor;
    this.baseColor250Ms = this._baseColor;
    this.baseColor500Ms = this._baseColor;
    this.baseColor750Ms = this._baseColor;
    this.baseColor1000Ms = this._baseColor;
    this.card = new CardModel(this._baseColor);
    this.colorFromCustomColorPicker = new ColorModel(0, 0, 0);
  }

  @action
  setBaseColor(newColor: Color) {
    this._baseColor = newColor;
    this.synchronizeColorPickers(newColor);

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
  @delay(250)
  updateBaseColor250Ms() {
    this.baseColor250Ms = this._baseColor;
  }

  @trigger
  @delay(500)
  updateBaseColor500Ms() {
    this.baseColor500Ms = this._baseColor;
  }

  @trigger
  @delay(750)
  updateBaseColor750Ms() {
    this.baseColor750Ms = this._baseColor;
  }

  @trigger
  @delay(1000)
  updateBaseColor1000Ms() {
    this.baseColor1000Ms = this._baseColor;
    console.log('updateBaseColor1000Ms')
  }

  @cached
  getBaseColor(): Color {
    return this.baseColor;
  }

  @cached
  getBaseColor250Ms(): Color {
    return this.baseColor250Ms;
  }

  @cached
  getBaseColor500Ms(): Color {
    return this.baseColor500Ms;
  }

  @cached
  getBaseColor750Ms(): Color {
    return this.baseColor750Ms;
  }

  @cached
  getBaseColor1000Ms(): Color {
    return this.baseColor1000Ms;
  }

  private synchronizeColorPickers(newColor: Color) {
    this.colorFromCustomColorPicker.red = newColor.r;
    this.colorFromCustomColorPicker.green = newColor.g;
    this.colorFromCustomColorPicker.blue = newColor.b;
  }
}
