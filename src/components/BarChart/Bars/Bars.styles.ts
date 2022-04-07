import styled from '@emotion/styled';

import themeColors from '../../../shared/styles/color/themeColors.styles';
import { maxWidth } from '../../../shared/styles/layout/mediaQueries.styles';

type BarProps = {
  formatNumber: string;
  index: number;
  maxRange: number;
  rgb: string;
  show: boolean;
};

export const Bars = styled.div({
  alignItems: 'inherit',
  display: 'inherit',
  flex: 'inherit',
  height: '100%',
  width: 'inherit'
});

export const Bar = styled.div(({ formatNumber, index, maxRange, rgb, show }: BarProps) => {
  const colorFormat =
    parseInt(formatNumber, 10) > 60 ? `${themeColors.appBackground}` : `${themeColors.white}`;

  return {
    alignItems: formatNumber < '06' ? 'flex-end' : 'center',
    background: `rgba(${rgb}${formatNumber !== '100' ? `.${formatNumber}` : '1'})`,
    borderRadius: '0.5rem 0.5rem 0 0',
    color: show ? colorFormat : `${themeColors.whiteAlpha0}`,
    display: 'flex',
    fontSize: '1rem',
    height: show ? `${formatNumber}%` : 0,
    justifyContent: 'center',
    margin: '0 0.125rem',
    transition: 'height 0.5s ease, color 0.5s ease, width 0.06125s ease',
    transitionDelay: `${index * 20}ms`,
    width: `${100 / maxRange}%`,

    [maxWidth(1)]: {
      fontSize: '.75rem'
    }
  };
});
