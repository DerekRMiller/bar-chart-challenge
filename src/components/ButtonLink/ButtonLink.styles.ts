import styled from '@emotion/styled';

import { minWidth } from '../../shared/styles/layout/mediaQueries.styles';

type ButtonLinkContainer = {
  isMounted: boolean;
};

type ButtonLink = {
  rgb: string;
};

export const ButtonLinkContainer = styled.div(({ isMounted }: ButtonLinkContainer) => ({
  left: '-2.625rem',
  opacity: isMounted ? 1 : 0,
  position: 'absolute',
  top: '-3.5rem'
}));

export const ButtonLink = styled.button(({ rgb }: ButtonLink) => ({
  background: 'none',
  border: 'none',
  color: `rgba(${rgb}1)`,
  cursor: 'pointer',
  fontSize: '.5rem',
  fontWeight: 600,
  letterSpacing: '0.048em',
  transition: 'opacity .125s ease, color .125s ease',

  '&:after': {
    background: `rgba(${rgb}1)`,
    content: `''`,
    display: 'block',
    height: '1px',
    margin: '.25em auto 0',
    width: '100%'
  },

  '&:hover': {
    opacity: '0.7'
  },

  // 1921
  [minWidth(2)]: {
    fontSize: '.625rem'
  }
}));
