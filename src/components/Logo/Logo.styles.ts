import styled from '@emotion/styled';

import themeColors from '../../shared/styles/color/themeColors.styles';

type LogoProps = {
  showIcon?: boolean;
};

export const LogoContainer = styled.span({
  color: `${themeColors.white}`,
  fontSize: ' 0.625rem',
  fontWeight: 400,
  letterSpacing: '0.16em',
  textTransform: 'uppercase'
});

export const Logo = styled.span(({ showIcon }: LogoProps) => ({
  fontSize: ' 0.75rem',
  fontWeight: 900,
  letterSpacing: '0.48em',
  textTransform: 'lowercase',

  '&:before, &:after': {
    borderRadius: '1rem',
    border: `1px solid ${themeColors.white}`,
    content: `''`,
    display: showIcon ? 'block' : 'none',
    height: '1.5rem',
    left: '2rem',
    position: 'absolute',
    top: '1.77rem',
    width: '1.5rem'
  },

  '&:after': { transform: 'skew(45deg)' }
}));

export const LogoPipe = styled.span({
  color: `${themeColors.whiteAlpha15}`
});

export const LogoSub = styled.span({
  letterSpacing: '0.48em'
});
