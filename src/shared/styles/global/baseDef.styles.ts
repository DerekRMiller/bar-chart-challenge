import { css } from '@emotion/react';

import themeColors from '../color/themeColors.styles';

const baseDef = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 16px;
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

  body,
  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  #root {
    display: flex;
    flex-direction: row;
  }
`;

export default baseDef;
