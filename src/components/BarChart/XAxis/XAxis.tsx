import React, { memo } from 'react';

import * as S from './XAxis.styles';

import { createMonth } from '../../../shared/utility/utility';

type XAxisProps = {
  maxRange: number;
  value: number;
};

const XAxis = ({ maxRange, value }: XAxisProps) => {
  const month = createMonth(maxRange, value);

  const monthRender = Object.keys(month).map((day) => (
    <S.Scale key={day} maxRange={maxRange}>
      {day.split('-')[0]}
      <S.SubValue>{month[day]}</S.SubValue>
    </S.Scale>
  ));

  return <S.XAxis>{monthRender}</S.XAxis>;
};

export default memo(XAxis);
