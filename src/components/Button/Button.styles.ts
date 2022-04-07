import styled from '@emotion/styled';

import themeColors from '../../shared/styles/color/themeColors.styles';
import { maxHeight } from '../../shared/styles/layout/mediaQueries.styles';

import DotsComponent from '../Dots/Dots';

type ButtonTextProps = {
  show: boolean;
};

type ButtonContainerProps = {
  isMounted: boolean;
};

export const ButtonContainer = styled.div(({ isMounted }: ButtonContainerProps) => ({
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  opacity: isMounted ? 1 : 0,
  transition: '.125s opacity ease'
}));

export const Button = styled.button({
  background: `${themeColors.whiteAlpha0}`,
  border: `2px solid ${themeColors.white}`,
  borderBottomColor: `${themeColors.whiteAlpha0} !important`,
  borderRadius: '4rem',
  borderTopColor: `${themeColors.whiteAlpha0} !important`,
  color: `${themeColors.white}`,
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 500,
  letterSpacing: '0.24em',
  margin: '3rem auto',
  outline: 'none',
  padding: '1rem 1.125rem 1rem 1.75rem',
  position: 'relative',
  transition: 'background 0.075s ease, color 0.075s ease, border-color 0.075s ease',

  '&:hover': {
    color: `${themeColors.appBackground}`
  },

  // 1000
  [maxHeight(1)]: {
    fontSize: '0.875rem',
    margin: '2rem auto'
  }
});

export const ButtonText = styled.span(({ show }: ButtonTextProps) => ({
  opacity: show ? 1 : 0,
  transition: 'opacity 0.125s ease'
}));

export const Dots = styled(DotsComponent)({
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  width: '100%'
});
