import React from 'react';

import HeaderProps from './Header.types';
import useHeader from './useHeader';
import * as S from './Header.styles';

const Header = ({ index, maxRange }: HeaderProps) => {
  const { appState, dayArr } = useHeader({ index, maxRange });

  return (
    <S.Header rgb={appState.rgb}>
      <div>{dayArr[0]}</div>
      <div>&#58;&#58;&#58;</div>
      <div>January, {[dayArr[1]]}</div>
    </S.Header>
  );
};

export default Header;
