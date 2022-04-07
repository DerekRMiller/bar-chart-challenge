import styled from '@emotion/styled';

import themeColors from '../../../shared/styles/color/themeColors.styles';
import { minWidth } from '../../../shared/styles/layout/mediaQueries.styles';

type ScaleProps = {
  maxRange: number;
};

const sharedStyles = {
  display: 'flex',
  justifyContent: 'center'
};

export const XAxis = styled.div({
  bottom: '-3.125rem',
  flexDirection: 'row',
  height: '2rem',
  left: 0,
  padding: '0 0 0.25rem 0.125rem',
  position: 'absolute',
  right: 0,

  ...sharedStyles
});

export const Scale = styled.div(({ maxRange }: ScaleProps) => ({
  borderLeft: `1px solid ${themeColors.whiteAlpha15}`,
  color: `${themeColors.white}`,
  flexDirection: 'column',
  fontSize: '0.5rem',
  height: '1.375rem',
  fontWeight: 'bold',
  letterSpacing: '0.048em',
  margin: '0 auto',
  textTransform: 'uppercase',
  transition: 'width 0.06125s ease',
  width: `${100 / maxRange}%`,

  ...sharedStyles,

  '&:first-of-type': {
    border: 'none'
  },

  // 1921
  [minWidth(2)]: {
    fontSize: '0.625rem'
  }
}));

export const SubValue = styled.div({
  fontWeight: 'bold',
  marginTop: '0.25rem'
});
