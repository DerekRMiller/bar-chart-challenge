import React from 'react';

import useButton from './useButton';
import * as S from './Button.styles';

type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ onClick }: ButtonProps) => {
  const { appState, buttonColor, overHandler, outHandler } = useButton();

  return (
    <S.ButtonContainer isMounted={appState.isMounted}>
      <S.Button
        onClick={onClick}
        style={{ background: buttonColor(0), borderColor: buttonColor(1) }}
        onMouseOver={overHandler}
        onFocus={overHandler}
        onMouseOut={outHandler}
        onBlur={outHandler}
        type="button"
      >
        <S.ButtonText show={appState.show}>
          <span>&#58;&#58;&#58;</span>&emsp;QUERY SNAPSHOT&emsp;<span>&#58;&#58;&#58;</span>
        </S.ButtonText>
        {!appState.show && <S.Dots />}
      </S.Button>
    </S.ButtonContainer>
  );
};

export default Button;
