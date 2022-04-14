import { css } from '@emotion/react';

import themeColors from '../color/themeColors.styles';
import {
  maxHeightMinWidth,
  maxHeightMaxWidth,
  maxHeight,
  maxHeightOrMaxWidth
} from '../layout/mediaQueries.styles';

const typographyDef = css`
  html,
  body {
    font-size: 18px;
  }

  body,
  button {
    font-family: 'Urbanist', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  code {
    font-family: 'Source Code Pro', Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  h1,
  h2 {
    color: ${themeColors.white};
    font-weight: 900;
  }

  .h1_sub,
  h2 {
    letter-spacing: 0.36em;
  }

  h1,
  p {
    line-height: 1.5em;
  }

  h1 {
    font-size: 1rem;
    letter-spacing: 0.48em;
    margin: 3rem auto 6rem;
    transition: font-size 0.125s ease, top 0.125s ease, right 0.125s ease;
    text-transform: lowercase;

    .h1_sub {
      font-size: 4rem;
      font-weight: 100;
      line-height: 1.75em;
      transition: font-size 0.125s ease, top 0.125s ease, right 0.125s ease;
      text-transform: uppercase;
    }
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.25em;
    margin: 1rem auto;
    text-transform: uppercase;
  }

  p {
    font-weight: 400;
  }

  a {
    color: ${themeColors.blue};
  }

  // 1000 1200
  ${maxHeightOrMaxWidth(2, 1)} {
    html,
    body {
      font-size: 17px;
    }
  }

  // 1000
  ${maxHeight(2)} {
    h1 {
      font-size: 0.75rem;
      margin: 3rem auto 4rem;
      .h1_sub {
        font-size: 3rem;
      }
    }
  }

  // 800
  ${maxHeight(1)} {
    h1 {
      font-size: 0.75rem;
      margin: 2.6rem auto;
      position: fixed;
      right: 1.5rem;
      text-align: right;
      top: -0.6rem;
      width: 19.8rem;
      z-index: 99;

      .h1_sub {
        font-size: 2rem;
        font-weight: 200;
        line-height: 1.4em;
      }
    }
  }

  // 800 1001
  ${maxHeightMinWidth(1, 0)} {
    .h1_sub {
      left: 0;
      position: fixed;
      right: 0;
      text-align: center;
      top: 1.2rem;
    }
  }

  //800 1000
  ${maxHeightMaxWidth(1, 0)} {
    h1 {
      left: auto;
      right: 1rem;
      text-align: right;
      top: -1.8rem;
      width: auto;
    }
  }

  // 600 1000
  ${maxHeightOrMaxWidth(0, 0)} {
    html,
    body {
      font-size: 16px;
    }
  }
`;

export default typographyDef;
