import * as React from 'react'
import { Color } from '../data/color';
import { ColorModel } from '../models/Color.model';

export function NativeColorPicker(p: { model: ColorModel }): JSX.Element {
  return (
    <input type="color" onChange={(e) => valueChanged(e, p)}></input>
  )
}

function valueChanged(e: React.ChangeEvent<HTMLInputElement>, p: { model: ColorModel }) {
  const color = getColor(e.target.value);

  if (color) {
    p.model.setColor(color);
  }
}

function getColor(hexColor: string): Color | null {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
  return result ? new Color (parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)) : null;
}
