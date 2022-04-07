import { keyframes } from '@emotion/react';
import themeColors from '../color/themeColors.styles';

const pulseSeq = keyframes`
  0% {
    opacity: 0;
    border-color: ${themeColors.white};
  }

  50% {
    opacity: 1;
    border-color: ${themeColors.whiteAlpha0};
  }

  100% {
    opacity: 0;
    border-color: ${themeColors.whiteAlpha0};
  }
`;

export default pulseSeq;
