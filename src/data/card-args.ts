import { Color } from "./color";
import { CardModel } from "../models/Card.model";

export interface CardArgs {
  color: Color;
  children?: JSX.Element
}

export interface ReactiveCardArgs {
  model: CardModel;
  children?: JSX.Element
}
