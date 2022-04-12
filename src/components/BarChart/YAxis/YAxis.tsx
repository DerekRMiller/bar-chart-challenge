import React, { memo } from 'react';

import * as S from './YAxis.styles';
import { createArr } from '../../../shared/utility/utility';

type YAxisProps = {
  maxRange: number;
  value: number;
};

const YAxis = ({ maxRange, value }: YAxisProps) => {
  const arr = createArr(maxRange, value);

  return (
    <S.YAxis>
      {arr.reverse().map((val) => {
        return <S.Scale key={val}>{val}</S.Scale>;
      })}
    </S.YAxis>
  );
};

export default memo(YAxis);
