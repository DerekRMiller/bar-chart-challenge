import React, { useState, useContext } from 'react';

import AppContext from '../../state/App/AppContext';
import * as S from './Button.styles';

type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ onClick }: ButtonProps) => {
  const { state } = useContext(AppContext);
  const [buttonHover, setButtonHover] = useState(false);
  const colorDefault = ['0,0,0,0', '255,255,255,.15'];
  const buttonColor = (color: number) =>
    `rgba(${buttonHover ? `${state.rgb}1` : colorDefault[color]})`;
  const overHandler = () => {
    setButtonHover(true);
  };
  const outHandler = () => {
    setButtonHover(false);
  };

  return (
    <S.ButtonContainer isMounted={state.isMounted}>
      <S.Button
        onClick={onClick}
        style={{ background: buttonColor(0), borderColor: buttonColor(1) }}
        onMouseOver={overHandler}
        onFocus={overHandler}
        onMouseOut={outHandler}
        onBlur={outHandler}
        type="button"
      >
        <S.ButtonText show={state.show}>:::&emsp;QUERY SNAPSHOT&emsp;:::</S.ButtonText>
        {!state.show && <S.Dots />}
      </S.Button>
    </S.ButtonContainer>
  );
};

export default Button;
