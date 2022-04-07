import styled from '@emotion/styled';

import pulseSeq from '../../shared/styles/animation/pulseSeq.styles';
import themeColors from '../../shared/styles/color/themeColors.styles';

type DotProps = {
  dotSize: number;
  show?: boolean;
};

export const Dots = styled.span(({ dotSize, show }: DotProps) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  justifyContent: 'center',
  opacity: !show ? 1 : 0,
  transition: 'opacity .125s ease',

  '> span, > span:after': {
    animation: `${pulseSeq} 1.5s infinite`
  },

  '> span': {
    background: `${themeColors.white}`,
    borderRadius: `${dotSize}rem`,
    height: `${dotSize}rem`,
    margin: `0 ${dotSize * 3}rem`,
    opacity: 0,
    position: 'relative',
    width: `${dotSize}rem`,

    '&:after': {
      border: `1px solid ${themeColors.white}`,
      borderRadius: `${dotSize * 4}rem`,
      content: `''`,
      height: `${dotSize * 4}rem`,
      left: `-${dotSize * 1.7}rem`,
      margin: '0 auto',
      opacity: 0,
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: `${dotSize * 4}rem`
    }
  },

  '> span:nth-of-type(2n), > span:nth-of-type(2n):after': {
    animationDelay: ' 0.33333333s'
  },

  '> span:nth-of-type(3n), > span:nth-of-type(3n):after': {
    animationDelay: ' 0.66666666s'
  }
}));
