import React, { KeyboardEvent, memo } from 'react';

import * as S from './Input.styles';

type InputProps = {
  event: (event: KeyboardEvent<HTMLInputElement>) => void;
  inputError: string;
};

const Input = ({ event, inputError }: InputProps) => (
  <S.InputContainer>
    {inputError.length > 0 && (
      <S.InputErrorMessage className="message">{inputError}</S.InputErrorMessage>
    )}
    <S.Input type="tel" onKeyDown={event} placeholder="MAX" />
  </S.InputContainer>
);

export default memo(Input);
