import React, { memo } from 'react';

import { year } from '../../shared/utility/utility';
import * as S from './Logo.styles';

type LogoProps = {
  showDate: boolean;
  showIcon: boolean;
};

const Logo = ({ showDate = true, showIcon = true }: LogoProps) => (
  <S.LogoContainer>
    <S.Logo showIcon={showIcon}>
      M.U.A.&nbsp;<S.LogoPipe>|</S.LogoPipe>&nbsp;
    </S.Logo>
    <S.LogoSub>Diagnostics</S.LogoSub>
    {showDate && `\u2003\u0040${year()}`}
  </S.LogoContainer>
);

export default memo(Logo);
