import * as React from 'react'
import { css } from 'emotion'
import { reactive } from 'reactronic-toolkit-react'
import { Card } from './Card'
import { appState } from '..'

export function RightMenu(): JSX.Element {
  return reactive(() => {
    const color = appState.delayedColor.get500MsDelay();
    const startColor = color.add(50, 170, 140);
    return (
      <Card color={color.add(0, 0, 255)}>
        <Card color={startColor.add(20, 20, 20)}>
          <Card color={startColor.add(40, 30, 25)}>
            <Card color={startColor.add(60, 40, 30)}>
              <Card color={startColor.add(80, 50, 40)}>
                <Card color={startColor.add(100, 60, 45)}>
                  <Card color={startColor.add(120, 70, 50)}>
                    <Card color={startColor.add(140, 80, 55)}>
                      <Card color={startColor.add(160, 90, 60)}></Card>
                    </Card>
                  </Card>
                </Card>
              </Card>
            </Card>
          </Card>
        </Card>
      </Card>
    )
  })
}
