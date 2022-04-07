import React, { memo } from 'react';

import * as S from './Logo.styles';

type LogoProps = {
  showDate?: boolean;
  showIcon?: boolean;
};

const year = () => new Date().getFullYear();

const Logo = ({ showDate = true, showIcon = true }: LogoProps) => (
  <S.LogoContainer>
    <S.Logo showIcon={showIcon}>
      M.U.A.&nbsp;<S.LogoPipe>|</S.LogoPipe>&nbsp;
    </S.Logo>
    <S.LogoSub>Diagnostics</S.LogoSub>
    {showDate && `\u2003\u0040${year()}`}
  </S.LogoContainer>
);

Logo.defaultProps = {
  showDate: true,
  showIcon: true
};

export default memo(Logo);
