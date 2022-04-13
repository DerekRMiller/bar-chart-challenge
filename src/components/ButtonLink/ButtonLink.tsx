import React, { useContext } from 'react';

import AppContext from '../../state/App/AppContext';
import * as S from './ButtonLink.styles';

type ButtonLinkProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonLink = ({ onClick }: ButtonLinkProps) => {
  const { appState } = useContext(AppContext);

  return (
    <S.ButtonLinkContainer isMounted={appState.isMounted}>
      <S.ButtonLink onClick={onClick} rgb={appState.rgb} type="button">
        <span>CLEAR</span>
      </S.ButtonLink>
    </S.ButtonLinkContainer>
  );
};

export default ButtonLink;
