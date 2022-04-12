import React, { useContext } from 'react';

import { createMonth } from '../../../../shared/utility/utility';
import AppContext from '../../../../state/App/AppContext';
import * as S from './Header.styles';

type HeaderProps = {
  index: number;
  maxRange: number;
};

const Header = ({ index, maxRange }: HeaderProps) => {
  const { state } = useContext(AppContext);
  const getDay = createMonth(maxRange, 1, false);
  const dayArr = Object.keys(getDay)[index].split('-');

  return (
    <S.Header rgb={state.rgb}>
      <div>{dayArr[0]}</div>
      <div>&#58;&#58;&#58;</div>
      <div>January, {[dayArr[1]]}</div>
    </S.Header>
  );
};

export default Header;
