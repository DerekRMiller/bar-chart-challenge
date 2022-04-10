import { css } from '@emotion/react';

import themeColors from '../color/themeColors.styles';
import { maxHeightArr, maxHeightMinWidth, maxHeightMaxWidth } from '../layout/mediaQueries.styles';

const typographyDef = css`
  h1,
  h2 {
    color: ${themeColors.white};
    text-transform: uppercase;
  }

  h1 {
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 0.2em;
    line-height: 1.5em;
    margin: 3rem auto 6rem;
    transition: font-size 0.125s ease, top 0.125s ease, right 0.125s ease;

    .h1_sub {
      font-size: 4rem;
      font-weight: 100;
      letter-spacing: 0.36em;
      line-height: 1.75em;
      transition: font-size 0.125s ease, top 0.125s ease, right 0.125s ease;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 0.2em;
    line-height: 1.25em;
    margin: 1rem auto;
  }

  p {
    font-weight: 400;
    line-height: 1.5em;
  }

  a {
    color: ${themeColors.blue};
  }

  // 1000
  ${maxHeightArr[1]} {
    h1 {
      font-size: 0.75rem;
      margin: 3rem auto 4rem;
      .h1_sub {
        font-size: 3rem;
      }
    }
  }

  // 800
  ${maxHeightArr[0]} {
    h1 {
      font-size: 0.625rem;
      margin: 2.6rem auto;
      position: fixed;
      right: 1.5rem;
      text-align: right;
      top: -0.44rem;
      width: 19.8rem;
      z-index: 99;

      .h1_sub {
        font-size: 2rem;
        font-weight: 200;
        line-height: 1.25em;
      }
    }
  }

  // 800 1001
  ${maxHeightMinWidth(0, 0)} {
    .h1_sub {
      left: 0;
      position: fixed;
      right: 0;
      text-align: center;
      top: 1.34rem;
    }
  }

  //800 1000
  ${maxHeightMaxWidth(0, 0)} {
    h1 {
      left: auto;
      right: 1rem;
      text-align: right;
      top: -1.44rem;
      width: auto;
    }
  }
`;

export default typographyDef;
