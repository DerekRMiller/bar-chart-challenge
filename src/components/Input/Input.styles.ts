import styled from '@emotion/styled';

import themeColors from '../../shared/styles/color/themeColors.styles';
import { minWidth, maxHeight } from '../../shared/styles/layout/mediaQueries.styles';

export const InputContainer = styled.div({
  fontSize: '.75rem',
  position: 'absolute',
  right: 0,
  textAlign: 'right',
  top: '-3.625rem',
  width: '24rem',

  [minWidth(2)]: {
    fontSize: '1rem'
  }
});

export const InputErrorMessage = styled.div({
  color: `${themeColors.yellow}`,
  position: 'absolute',
  right: 0,
  textAlign: 'right',
  top: '-2rem',

  [maxHeight(0)]: {
    right: '4.5rem',
    textAlign: 'right',
    top: 0
  }
});

export const Input = styled.input({
  background: 'none',
  border: 'none',
  borderBottom: `1px solid ${themeColors.whiteAlpha15}`,
  color: `${themeColors.white}`,
  fontSize: '.75rem',
  outline: 'none',
  paddingBottom: '0.375em',
  textAlign: 'right',
  width: '4rem',

  '&:focus, &:hover, &:active': {
    border: 'none',
    borderBottom: `1px solid ${themeColors.whiteAlpha15}`
  },

  '&:focus, &:active': {
    borderBottomColor: `${themeColors.white}`
  },

  '&::placeholder, &::-webkit-input-placeholder, &:-moz-placeholder': {
    textAlign: 'right'
  },

  [minWidth(2)]: {
    fontSize: '1rem'
  }
});
