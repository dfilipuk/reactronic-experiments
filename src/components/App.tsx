import * as React from 'react'
import { css } from 'emotion'
import { reactive } from 'reactronic-toolkit-react'
import { Header } from './Header'
import { Footer } from './Footer'
import { LeftMenu } from './LeftMenu'
import { RightMenu } from './RightMenu'
import { Content } from './Content'

const style = {
  layout: css`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 20% auto 15%;
    grid-template-rows: 15% auto 12%;
  `,
  header: css`
    grid-column: 1 / span 3;
    grid-row: 1 / span 1;
  `,
  footer: css`
    grid-column: 1 / span 3;
    grid-row: 3 / span 1;
  `,
  leftMenu: css`
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
  `,
  rightMenu: css`
    grid-column: 3 / span 1;
    grid-row: 2 / span 1;
  `,
  content: css`
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
  `,
};

export function App(): JSX.Element {
  return reactive(() => {
    return (
      <div className={style.layout}>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.footer}>
          <Footer />
        </div>
        <div className={style.leftMenu}>
          <LeftMenu />
        </div>
        <div className={style.rightMenu}>
          <RightMenu />
        </div>
        <div className={style.content}>
          <Content />
        </div>
      </div>
    );
  });
}
