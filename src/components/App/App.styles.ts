import styled from '@emotion/styled';

import { maxHeight } from '../../shared/styles/layout/mediaQueries.styles';

export const App = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '1000px',
  padding: '5.125rem 4rem 2.7187rem',
  position: 'relative',
  textAlign: 'center',

  // 800
  [maxHeight(1)]: {
    padding: '10rem 4rem 2.7187rem'
  }
});
