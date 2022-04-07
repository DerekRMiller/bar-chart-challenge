import React from 'react';

import * as S from './Bars.styles';

type BarsProps = {
  numbersArr: string[];
  maxRange: number;
  show: boolean;
  rgb: string;
};

const Bars = ({ numbersArr, maxRange, show, rgb }: BarsProps) => (
  <S.Bars>
    {numbersArr.slice(0, maxRange).map((number, index) => {
      const formatNumber = parseInt(number, 10) < 10 ? 0 + number : number;

      return (
        <S.Bar
          maxRange={maxRange}
          formatNumber={formatNumber}
          index={index}
          key={index}
          rgb={rgb}
          show={show}
        >
          {formatNumber}
        </S.Bar>
      );
    })}
  </S.Bars>
);

export default Bars;
