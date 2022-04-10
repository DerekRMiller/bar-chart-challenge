import React from 'react';

import Header from './Header/Header';
import MetricBar from './MetricBar/MetricBar';

import { calculatePercentage } from '../../../shared/utility/utility';

import * as S from './Detail.styles';

type DetailProps = {
  index: number;
  maxRange: number;
  number: string;
  numbersArr: string[];
  rgb: string;
};

const Detail = ({ index, maxRange, number, numbersArr, rgb }: DetailProps) => {
  const maxPercentage = Math.round(maxRange * 1e2) / 1e2;

  return (
    <S.Detail>
      <Header index={index} maxRange={maxRange} rgb={rgb} />
      <S.ConnectionRangePercentage>
        {calculatePercentage(maxPercentage, number.toString())}%
      </S.ConnectionRangePercentage>
      <MetricBar numbersArr={numbersArr} maxRange={maxRange} number={number} rgb={rgb} />
    </S.Detail>
  );
};

export default Detail;
