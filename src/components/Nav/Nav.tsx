import React, { memo } from 'react';

import * as S from './Nav.styles';
import Logo from '../Logo/Logo';

const Nav = () => (
  <S.Nav>
    <Logo showDate={false} />
  </S.Nav>
);

export default memo(Nav);
