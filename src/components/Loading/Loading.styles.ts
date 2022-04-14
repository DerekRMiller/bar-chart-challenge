import styled from '@emotion/styled';

import { skewSeq1, skewSeq2 } from '../../shared/styles/animation/skewSeq.styles';
import themeColors from '../../shared/styles/color/themeColors.styles';
import { maxHeight } from '../../shared/styles/layout/mediaQueries.styles';
import DotsComponent from '../Dots/Dots';

const sharedStyles = {
  left: 0,
  right: 0
};

export const Loading = styled.h2({
  position: 'absolute',
  top: 'calc(50% + 4.25rem)',
  transform: 'translateY(-50%)',
  zIndex: 100,

  ...sharedStyles,

  '&:before, &:after': {
    borderRadius: '6rem',
    border: `4px solid ${themeColors.whiteAlpha15}`,
    content: `""`,
    height: '6rem',
    margin: '0 auto',
    position: 'absolute',
    top: '-8rem',
    width: '6rem',

    ...sharedStyles
  },

  '&:before': {
    transform: 'skew(-45deg, 0deg) rotate3d(1, 1, 1, 0deg)',
    animation: `${skewSeq2} 2s infinite alternate`
  },

  '&:after': {
    transform: 'skew(45deg, 180deg) rotate3d(1, 1, 1, 0deg)',
    animation: `${skewSeq1} 2s infinite`
  },

  // 1000
  [maxHeight(2)]: {
    fontSize: '1.125rem',
    top: 'calc(50% + 3.4375rem)',

    '&:before, &:after': {
      borderRadius: '4.5rem',
      borderWidth: '3px',
      height: '4.5rem',
      top: '-6rem',
      width: '4.5rem'
    }
  }
});

export const Dots = styled(DotsComponent)({
  marginTop: '1.5rem'
});
