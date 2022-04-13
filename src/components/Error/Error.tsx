import React, { memo, useContext } from 'react';

import AppContext from '../../state/App/AppContext';
import * as S from './Error.styles';

const Error = () => {
  const { appState } = useContext(AppContext);

  return (
    <S.Error>
      <S.Eyes>&bull; &bull;</S.Eyes>
      <S.Frown>&#40;</S.Frown>
      <S.Title>Free API limits are a bummer.</S.Title>
      <p>{appState.numbersArr}</p>
      <p>
        <a href="https://www.random.org/quota/" rel="noreferrer" target="_blank">
          https://www.random.org/quota/
        </a>
      </p>
    </S.Error>
  );
};

export default memo(Error);
