import * as React from 'react'
import { css } from 'emotion'
import { reactive } from 'reactronic-toolkit-react'
import { Card } from './Card'
import { appState } from '..'

const style = {
  container: css`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(10, 10%);
    grid-template-rows: 50% 50%;
    grid-template-areas:
      "card1 card1 card1 card1 card1 . . . . ."
      ". . . . . card2 card2 card2 card2 card2";
  `,
  card1: css`
    grid-area: card1;
  `,
  card2: css`
    grid-area: card2;
  `,
  card3: css`
    grid-area: 2 / 2 / 2 / 5;
  `,
  card4: css`
    grid-area: 1 / 8 / 1 / 11;
  `,
}

export function Footer(): JSX.Element {
  return reactive(() => {
    const color = appState.getBaseColor1000Ms();
    return (
      <Card color={color.add(200, 200, 200)}>
        <div className={style.container}>
          <div className={style.card1}>
            <Card color={color.add(200, 150, 100)}/>
          </div>
          <div className={style.card2}>
            <Card color={color.add(100, 150, 200)}/>
          </div>
          <div className={style.card3}>
            <Card color={color.add(200, 150, 100)}/>
          </div>
          <div className={style.card4}>
            <Card color={color.add(150, 200, 150)}/>
          </div>
        </div>
      </Card>
    )
  })
}
