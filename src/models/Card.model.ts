import { State } from "reactronic";
import { Color } from "../data/color";

export class CardModel extends State {
  color: Color;

  constructor(color: Color){
    super();

    this.color = color;
  }
}