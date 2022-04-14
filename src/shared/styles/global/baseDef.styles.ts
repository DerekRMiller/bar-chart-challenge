import { css } from '@emotion/react';

import themeColors from '../color/themeColors.styles';

const baseDef = css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root,
  .app {
    background: ${themeColors.appBackground};
    height: 100vh;
    margin: 0 auto;
    width: 100vw;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    display: flex;
    flex-direction: row;
  }
`;

export default baseDef;
