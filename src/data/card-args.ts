import { Color } from "./color";
import { ColorModel } from "../models/Color.model";

export interface CardArgs {
  color: Color;
  children?: JSX.Element;
}

export interface ReactiveCardArgs {
  model: ColorModel;
  children?: JSX.Element;
}
