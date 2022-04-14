import styled from '@emotion/styled';

import themeColors from '../../shared/styles/color/themeColors.styles';
import opacityFade from '../../shared/styles/animation/opacityFade.styles';
import { maxHeight } from '../../shared/styles/layout/mediaQueries.styles';

export const Detail = styled.div({
  alignItems: 'center',
  animation: `${opacityFade} 0.15s 1`,
  background: `${themeColors.appBackgroundDarkAlpha92}`,
  borderRadius: '0.5rem',
  boxShadow: `1px 1px 4px 2px ${themeColors.appBackgroundDarkAlpha25},
  3px 3px 8px 6px ${themeColors.appBackgroundDarkAlpha13}`,
  color: `${themeColors.white}`,
  display: 'flex',
  flexDirection: 'column',
  fontSize: '0.625rem',
  fontWeight: 700,
  height: 'auto',
  justifyContent: 'center',
  letterSpacing: '0.076em',
  lineHeight: '1.5em',
  pointerEvents: 'none',
  position: 'fixed',
  transitionDelay: '0 !important',
  width: '20rem',
  zIndex: 99
});

export const ConnectionRangePercentage = styled.div({
  color: `${themeColors.white}`,
  fontSize: '3rem',
  fontWeight: 200,
  lineHeight: '1.5em',
  margin: '1rem auto 1.5rem',

  // 1000
  [maxHeight(2)]: {
    fontSize: '2.5rem',
    fontWeight: 300,
    margin: '0.83333334rem auto 1.25rem'
  },

  // 800
  [maxHeight(1)]: {
    fontSize: '2rem',
    margin: '0.66666666rem auto 1rem'
  }
});
