import styled from '@emotion/styled';

import themeColors from '../../shared/styles/color/themeColors.styles';

export const Footer = styled.footer({
  backgroundColor: `${themeColors.containerBackground}`,
  bottom: 0,
  boxShadow: `-1px -2px 8px 8px ${themeColors.blackAlpha04}`,
  fontSize: '0.625rem',
  left: 0,
  padding: '1rem',
  position: 'fixed',
  right: 0
});
