import * as React from 'react'
import { Color } from '../data/color';
import { ColorModel } from '../models/Color.model';
import { reactive } from 'reactronic-toolkit-react';

export function NativeColorPicker(p: { model: ColorModel }): JSX.Element {
  return reactive(() => {
    return (
      <input
        type="color"
        value={`#${numberToHex(p.model.red)}${numberToHex(p.model.green)}${numberToHex(p.model.blue)}`}
        onChange={(e) => valueChanged(e, p)}
      />
    );
  });
}

function valueChanged(e: React.ChangeEvent<HTMLInputElement>, p: { model: ColorModel }) {
  const color = hexToRgb(e.target.value);

  if (color) {
    p.model.setColor(color);
  }
}

function hexToRgb(hexColor: string): Color | null {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
  return result ? new Color (parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)) : null;
}

function numberToHex(value: number): string {
  const hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
