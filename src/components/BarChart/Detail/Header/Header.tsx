import React from 'react';

import { createMonth } from '../../../../shared/utility/utility';

import * as S from './Header.styles';

type HeaderProps = {
  index: number;
  maxRange: number;
  rgb: string;
};

const Header = ({ index, maxRange, rgb }: HeaderProps) => {
  const getDay = createMonth(maxRange, 1, false);
  const dayArr = Object.keys(getDay)[index].split('-');

  return (
    <S.Header rgb={rgb}>
      <div>{dayArr[0]}</div>
      <div>&#58;&#58;&#58;</div>
      <div>January, {[dayArr[1]]}</div>
    </S.Header>
  );
};

export default Header;
