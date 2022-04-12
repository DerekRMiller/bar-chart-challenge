import React, { memo } from 'react';

import * as S from './Footer.styles';
import Logo from '../Logo/Logo';

const Footer = () => (
  <S.Footer>
    <Logo showIcon={false} />
  </S.Footer>
);

export default memo(Footer);
