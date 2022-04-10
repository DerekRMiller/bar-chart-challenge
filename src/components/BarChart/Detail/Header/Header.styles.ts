import styled from '@emotion/styled';

import DetailStyleProps from '../Detail.styles.types';

import themeColors from '../../../../shared/styles/color/themeColors.styles';

export const Header = styled.div(({ rgb }: DetailStyleProps) => {
  return {
    alignItems: 'center',
    color: `${themeColors.whiteAlpha65}`,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '.75rem 1rem 0',
    width: '100%',

    'div:nth-of-type(2n)': {
      color: `rgba(${rgb}1)`,
      left: 0,
      margin: '0 auto',
      position: 'absolute',
      right: 0
    }
  };
});
