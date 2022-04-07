import React, { useState } from 'react';

import * as S from './Button.styles';

type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  show: boolean;
  rgb: string;
  isMounted: boolean;
};

const Button = ({ show, onClick, rgb, isMounted }: ButtonProps) => {
  const [buttonHover, setButtonHover] = useState(false);

  const colorDefault = ['0,0,0,0', '255,255,255,.15'];
  const buttonColor = (color: number) => `rgba(${buttonHover ? `${rgb}1` : colorDefault[color]})`;

  const overHandler = () => {
    setButtonHover(true);
  };

  const outHandler = () => {
    setButtonHover(false);
  };

  return (
    <S.ButtonContainer isMounted={isMounted}>
      <S.Button
        onClick={onClick}
        style={{ background: buttonColor(0), borderColor: buttonColor(1) }}
        onMouseOver={overHandler}
        onFocus={overHandler}
        onMouseOut={outHandler}
        onBlur={outHandler}
        type="button"
      >
        <S.ButtonText show={show}>:::&emsp;QUERY SNAPSHOT&emsp;:::</S.ButtonText>
        {!show && <S.Dots show={show} />}
      </S.Button>
    </S.ButtonContainer>
  );
};

export default Button;
