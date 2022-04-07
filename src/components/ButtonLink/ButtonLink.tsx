import React from 'react';

import * as S from './ButtonLink.styles';

type ButtonLinkProps = {
  isMounted: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  rgb: string;
};

const ButtonLink = ({ isMounted, onClick, rgb }: ButtonLinkProps) => (
  <S.ButtonLinkContainer isMounted={isMounted}>
    <S.ButtonLink onClick={onClick} rgb={rgb} type="button">
      <span>CLEAR</span>
    </S.ButtonLink>
  </S.ButtonLinkContainer>
);

export default ButtonLink;
