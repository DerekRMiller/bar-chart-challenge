import React from 'react';

import XAxisProps from './XAxis.types';
import * as S from './XAxis.styles';
import { createMonth } from '../../../shared/utility/utility';

const useXAxis = ({ maxRange, value }: XAxisProps) => {
  const month = createMonth(maxRange, value);
  const monthRender = Object.keys(month).map((day) => (
    <S.Scale key={day} maxRange={maxRange}>
      {day.split('-')[0]}
      <S.SubValue>{month[day]}</S.SubValue>
    </S.Scale>
  ));

  return { month, monthRender };
};

export default useXAxis;
