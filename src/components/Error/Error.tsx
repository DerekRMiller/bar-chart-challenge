import React, { memo } from 'react';

import * as S from './Error.styles';

type ErrorProps = {
  numbersArr: string[];
};

const Error = ({ numbersArr }: ErrorProps) => (
  <S.Error>
    <S.Eyes>&bull; &bull;</S.Eyes>
    <S.Frown>&#40;</S.Frown>
    <S.Title>Free API limits are a bummer.</S.Title>
    <p>{numbersArr}</p>
    <p>
      <a href="https://www.random.org/quota/" rel="noreferrer" target="_blank">
        https://www.random.org/quota/
      </a>
    </p>
  </S.Error>
);

export default memo(Error);
