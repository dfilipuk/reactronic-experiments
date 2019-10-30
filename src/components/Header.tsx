import * as React from 'react'
import { css } from 'emotion'
import { reactive } from 'reactronic-toolkit-react'
import { Card } from './Card'
import { appState } from '..'

const style = {
  container: css`
    height: 100%;
    display: grid;
    grid-template: 100% / auto;
    grid-column-gap: 10px;
  `,
  part1: css`
    grid-area: 1 / 1 / 2 / 2;
    display: grid;
    grid-template: repeat(2, 50%) / repeat(5, 20%);
    grid-auto-flow: row;
  `,
  part2: css`
    grid-area: 1 / 2 / 2 / 3;
    display: grid;
    grid-template: repeat(2, 50%) / repeat(5, 20%);
    grid-auto-flow: dense;
  `,
  part3: css`
    grid-area: 1 / 3 / 2 / 4;
    display: grid;
    grid-template: repeat(2, 50%) / repeat(5, 20%);
    grid-auto-flow: column;
  `,
  item1: css`
    grid-area: 1 / 1 / 3 / 2;
  `,
  item2: css`
    grid-area: 1 / 3 / 3 / 4;
  `,
};

export function Header(): JSX.Element {
  return reactive(() => {
    const color = appState.delayedColor.get750MsDelay();
    return (
      <Card color={color.add(200, 200, 0)}>
        <div className={style.container}>
          <div className={style.part1}>
            <div className={style.item1}>
              <Card color={color.add(255, 153, 100)}/>
            </div>
            <div className={style.item2}>
              <Card color={color.add(204, 102, 255)}/>
            </div>
            <Card color={color.add(0, 0, 255)}/>
            <Card color={color.add(255, 0, 0)}/>
            <Card color={color.add(0, 255, 0)}/>
          </div>
          <div className={style.part2}>
            <div className={style.item1}>
              <Card color={color.add(255, 153, 100)}/>
            </div>
            <div className={style.item2}>
              <Card color={color.add(204, 102, 255)}/>
            </div>
            <Card color={color.add(0, 0, 255)}/>
            <Card color={color.add(255, 0, 0)}/>
            <Card color={color.add(0, 255, 0)}/>
          </div>
          <div className={style.part3}>
            <div className={style.item1}>
              <Card color={color.add(255, 153, 100)}/>
            </div>
            <div className={style.item2}>
              <Card color={color.add(204, 102, 255)}/>
            </div>
            <Card color={color.add(0, 0, 255)}/>
            <Card color={color.add(255, 0, 0)}/>
            <Card color={color.add(0, 255, 0)}/>
          </div>
        </div>
      </Card>
    );
  });
}
