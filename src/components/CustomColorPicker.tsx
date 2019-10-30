import * as React from 'react'
import { css } from 'emotion'
import { reactive } from 'reactronic-toolkit-react'
import { ColorModel } from '../models/Color.model';

const style = {
  container: css`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template: 1fr 1fr 1fr / 1fr;
  `,
  red: css`
    grid-area: 1 / 1 / 2 / 2;
    justify-self: center;
    background: red;
  `,
  green: css`
    grid-area: 2 / 1 / 3 / 2;
    justify-self: center;
    background: green;
  `,
  blue: css`
    grid-area: 3 / 1 / 4 / 2;
    justify-self: center;
    background: blue;
  `,
}

export function CustomColorPicker(p: { model: ColorModel }): JSX.Element {
  return reactive(() => {
    return (
      <div className={style.container}>
        <div className={style.red}>
          <input type="range" min="0" max="255" value={p.model.red} 
            onChange={(e) => p.model.setRedComponent(parseInt(e.target.value, 10))}
          ></input>
        </div>
        <div className={style.green}>
          <input type="range" min="0" max="255" value={p.model.green} 
            onChange={(e) => p.model.setGreenComponent(parseInt(e.target.value, 10))}
          ></input>
        </div>
        <div className={style.blue}>
          <input type="range" min="0" max="255" value={p.model.blue} 
            onChange={(e) => p.model.setBlueComponent(parseInt(e.target.value, 10))}
          ></input>
        </div>
      </div>
    )
  });
}
