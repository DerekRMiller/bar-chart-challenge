import React from 'react';

import Header from './Header/Header';
import MetricBar from './MetricBar/MetricBar';
import { calculatePercentage } from '../../shared/utility/utility';
import * as S from './Detail.styles';

type DetailProps = {
  index: number;
  maxRange: number;
  number: string;
};

const Detail = ({ index, maxRange, number }: DetailProps) => {
  const maxPercentage = Math.round(maxRange * 1e2) / 1e2;

  return (
    <S.Detail>
      <Header index={index} maxRange={maxRange} />
      <S.ConnectionRangePercentage>
        {calculatePercentage(maxPercentage, number.toString())}%
      </S.ConnectionRangePercentage>
      <MetricBar maxRange={maxRange} number={number} />
    </S.Detail>
  );
};

export default Detail;
