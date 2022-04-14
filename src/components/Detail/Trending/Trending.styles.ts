import styled from '@emotion/styled';

import { ReactComponent as TrendingDown } from '../../../shared/images/trending-down.svg';
import { ReactComponent as TrendingUp } from '../../../shared/images/trending-up.svg';
import themeColors from '../../../shared/styles/color/themeColors.styles';

export const Trending = styled.div({
  '.FALLING': {
    color: `${themeColors.red} !important`
  },

  '.RISING': {
    color: `${themeColors.green} !important`
  }
});

export const Falling = styled(TrendingDown)({
  fill: `${themeColors.red} !important`
});

export const Rising = styled(TrendingUp)({
  fill: `${themeColors.green} !important`
});
