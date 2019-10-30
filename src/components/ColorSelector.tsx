import * as React from 'react'
import { css } from 'emotion'
import { reactive } from 'reactronic-toolkit-react'
import { NativeColorPicker } from './NativeColorPicker'
import { appState } from '..'
import { CustomColorPicker } from './CustomColorPicker'

const style = {
  container: css`
    height: 100%;
    display: grid;
    grid-template: 50% 50% / 100%;
  `,
  nativeColorPicker: css`
    grid-area: 1 / 1 / 2 / 2;
    justify-self: center;
    align-self: center;
  `,
  customColorPicker: css`
    grid-area: 2 / 1 / 3 / 2;
  `,
};

export function ColorSelector(): JSX.Element {
  return reactive(() => {
    return (
      <div className={style.container}>
        <div className={style.nativeColorPicker}>
          <NativeColorPicker model={appState.color} />
        </div>
        <div className={style.customColorPicker}>
          <CustomColorPicker model={appState.color} />
        </div>
      </div>
    );
  });
}
