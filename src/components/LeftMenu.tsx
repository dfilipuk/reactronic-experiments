import * as React from 'react'
import { css } from 'emotion'
import { reactive } from 'reactronic-toolkit-react'
import { Card } from './Card'
import { appState } from '..'

const style = {
  container: css`
    height: 100%;
    display: grid;
    grid-template: 50% 50% / 100%;
  `,
  topPart: css`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  `,
  bottomPart: css`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  `,
};

export function LeftMenu(): JSX.Element {
  return reactive(() => {
    const color = appState.delayedColor.delay500Ms;
    return (
      <Card color={color.add(200, 0, 0)}>
        <div className={style.container}>
          <div className={style.topPart}>
            <Card color={color.add(10, 10, 10)}>
              <Card color={color.add(20, 30, 40)}>
                <Card color={color.add(30, 50, 70)}>
                  <Card color={color.add(40, 70, 100)}>
                    <Card color={color.add(50, 90, 130)}>
                      <Card color={color.add(60, 110, 160)}>
                        <Card color={color.add(70, 130, 190)}>
                          <Card color={color.add(80, 150, 210)}></Card>
                        </Card>
                      </Card>
                    </Card>
                  </Card>
                </Card>
              </Card>
            </Card>
          </div>
          <div className={style.bottomPart}>
            <Card color={color.add(20, 20, 20)}>
              <Card color={color.add(40, 40, 40)}>
                <Card color={color.add(60, 60, 60)}>
                  <Card color={color.add(80, 80, 80)}>
                    <Card color={color.add(100, 100, 100)}>
                      <Card color={color.add(120, 120, 120)}>
                        <Card color={color.add(140, 140, 140)}>
                          <Card color={color.add(160, 160, 160)}></Card>
                        </Card>
                      </Card>
                    </Card>
                  </Card>
                </Card>
              </Card>
            </Card>
          </div>
        </div>
      </Card>
    );
  });
}
