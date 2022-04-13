import { keyframes } from '@emotion/react';

import themeColors from '../color/themeColors.styles';

export const skewSeq1 = keyframes`
  0% {
    border-color: ${themeColors.whiteAlpha15};
    transform: skew(45deg, 180deg) rotate3d(1, 1, 1, 0deg);
  }

  25% {
    border-color: ${themeColors.whiteAlpha05};
    transform: skew(45deg, 180deg) rotate3d(1, 1, 1, 0deg);
  }

  50% {
    border-color: ${themeColors.white};
    transform: skew(45deg, 0deg) rotate3d(1, 1, 1, 0deg);
  }

  100% {
    border-color: ${themeColors.whiteAlpha05};
    transform: skew(45deg, 0deg) rotate3d(1, 1, 1, 360deg);
  }
`;

export const skewSeq2 = keyframes`
  0% {
    border-color:  ${themeColors.whiteAlpha15};
    transform: skew(-45deg, 0deg) rotate3d(1, 1, 1, 0deg);
  }

  25% {
    border-color: ${themeColors.whiteAlpha05};
    transform: skew(-45deg, 0deg) rotate3d(1, 1, 1, 0deg);
  }

  50% {
    border-color: ${themeColors.white};
    transform: skew(-45deg, -180deg) rotate3d(1, 1, 1, 0deg);
  }

  100% {
    border-color: ${themeColors.whiteAlpha05};
    transform: skew(-45deg, -180deg) rotate3d(1, 1, 1, -360deg);
  }
`;
