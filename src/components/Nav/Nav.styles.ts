import styled from '@emotion/styled';

import themeColors from '../../shared/styles/color/themeColors.styles';

export const Nav = styled.nav({
  alignItems: 'center',
  backgroundColor: `${themeColors.containerBackground}`,
  boxShadow: `1px 2px 4px 2px ${themeColors.blackAlpha20}`,
  display: 'flex',
  fontSize: ' 0.625rem',
  left: 0,
  lineHeight: '5em',
  padding: '1rem 1rem 1rem 5.1rem',
  position: 'fixed',
  right: 0,
  top: 0,
  zIndex: 99
});
