import styled from '@emotion/styled';

import DetailStyleProps from '../Detail.styles.types';

import { ReactComponent as TrendingDown } from '../../../../shared/images/trending-down.svg';
import { ReactComponent as TrendingUp } from '../../../../shared/images/trending-up.svg';
import themeColors from '../../../../shared/styles/color/themeColors.styles';

export const MetricBar = styled.div(({ rgb }: DetailStyleProps) => {
  return {
    alignItems: 'top',
    background: `rgba(${rgb}.06)`,
    borderTop: `1px solid rgba(${rgb}.25)`,
    color: `${themeColors.white}`,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '.375rem 1rem .75rem',
    top: '0',
    width: '100%',

    svg: {
      fill: `rgba(${rgb}1)`,
      height: '2.25rem',
      width: '2.25rem'
    },

    '.icon-container': {
      height: '2.25rem',
      margin: '0 auto',
      width: '2.25rem'
    },

    '.FALLING': {
      color: `${themeColors.red} !important`
    },

    '.RISING': {
      color: `${themeColors.green} !important`
    }
  };
});

export const Pie = styled.div(({ rgb, rangeAverage }: DetailStyleProps) => {
  const shared = {
    borderRadius: '50%',
    content: `''`,
    display: 'block',
    height: '1.375rem',
    inset: 0,
    width: '1.375rem'
  };

  return {
    alignItems: 'center',
    display: 'flex',
    height: '2.25rem',
    justifyContent: 'center',
    margin: '0 auto',
    width: '2.25rem',

    '> div': {
      background: `conic-gradient(rgba(${rgb}.25) calc(100*1%),#0000 0)`,
      ...shared,

      '&:after': {
        background: `conic-gradient(rgba(${rgb}1) calc(${rangeAverage}*1%),#0000 0)`,
        ...shared
      }
    }
  };
});

export const Falling = styled(TrendingDown)({
  fill: `${themeColors.red} !important`
});

export const Rising = styled(TrendingUp)({
  fill: `${themeColors.green} !important`
});
