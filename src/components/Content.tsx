import * as React from 'react'
import { css } from 'emotion'
import { reactive } from 'reactronic-toolkit-react'
import { Card, ReactiveCard } from './Card'
import { ColorSelector } from './ColorSelector'
import { appState } from '..'

const style = {
  container: css`
    height: 100%;
    display: grid;
    grid-template: repeat(10, 10%) / repeat(10, 10%);
    grid-template-areas:
      "part2 part2 part2 part2 part2 part2 part2 part2 part2 part2"
      ". . . . . . . . . ."
      "part4 . . . . . . . . part5"
      "part4 . . . . . . . . part5"
      "part4 . . . . . . . . part5"
      "part4 . . . . . . . . part5"
      "part4 . . . . . . . . part5"
      "part4 . . . . . . . . part5"
      ". . . . . . . . . ."
      "part3 part3 part3 part3 part3 part3 part3 part3 part3 part3";
  `,
  part1: css`
    grid-area: 4 / 4 / 8 / 8;
  `,
  part2: css`
    grid-area: part2;
  `,
  part3: css`
    grid-area: part3;
  `,
  part4: css`
    grid-area: part4;
  `,
  part5: css`
    grid-area: part5;
  `,
};

export function Content(): JSX.Element {
  return reactive(() => {
    const color = appState.delayedColor.get250MsDelay();
    return (
      <Card color={color.add(0, 200, 0)}>
        <div className={style.container}>
          <div className={style.part1}>
            <ReactiveCard model={appState.color}>
              <ColorSelector />
            </ReactiveCard>
          </div>
          <div className={style.part2}>
            <Card color={color.add(255, 0, 200)}/>
          </div>
          <div className={style.part3}>
            <Card color={color.add(255, 0, 200)}/>
          </div>
          <div className={style.part4}>
            <Card color={color.add(255, 200, 0)}/>
          </div>
          <div className={style.part5}>
            <Card color={color.add(255, 200, 0)}/>
          </div>
        </div>
      </Card>
    );
  });
}
