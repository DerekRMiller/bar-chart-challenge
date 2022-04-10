import styled from '@emotion/styled';

import themeColors from '../../../shared/styles/color/themeColors.styles';
import { minWidth } from '../../../shared/styles/layout/mediaQueries.styles';

export const YAxis = styled.div({
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
  left: '-2.125rem',
  position: 'absolute'
});

export const Scale = styled.div({
  color: `${themeColors.white}`,
  fontSize: '0.5rem',
  fontWeight: 700,
  letterSpacing: '0.048em',
  lineHeight: '0.125em',
  position: 'relative',
  width: '1.125rem',

  '&:last-of-type': {
    '&:after': {
      bottom: 0,
      top: 'initial'
    }
  },

  '&:after': {
    background: `${themeColors.whiteAlpha15}`,
    content: `''`,
    display: 'block',
    height: '1px',
    marginRight: '-0.9375rem',
    position: 'absolute',
    right: 0,
    top: 0,
    width: ' 0.25rem'
  },

  // 1921
  [minWidth(2)]: {
    fontSize: ' 0.625rem'
  }
});
