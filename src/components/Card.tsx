import * as React from 'react'
import { css } from 'emotion'
import { CardArgs, ReactiveCardArgs } from '../data/card-args'
import { reactive } from 'reactronic-toolkit-react'

const style = {
  container: css`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
  `,
  item: css`
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    border-radius: 10px;
    margin: 10px;
  `,
};

export function Card(p: CardArgs): JSX.Element {
  return (
    <div className={style.container}>
      <div
        className={style.item}
        style={{background: `rgb(${p.color.r},${p.color.g},${p.color.b}`}}
      >
        {p.children}
      </div>
    </div>
  );
}

export function ReactiveCard(p: ReactiveCardArgs): JSX.Element {
  return reactive(() => {
    return (
      <div className={style.container}>
        <div
          className={style.item}
          style={{background: `rgb(${p.model.color.r},${p.model.color.g},${p.model.color.b}`}}
        >
          {p.children}
        </div>
      </div>
    );
  });
}
