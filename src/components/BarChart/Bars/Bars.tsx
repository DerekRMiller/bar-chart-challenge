import React, { useState } from 'react';

import Detail from '../Detail/Detail';

import * as S from './Bars.styles';

type BarsProps = {
  numbersArr: string[];
  maxRange: number;
  show: boolean;
  rgb: string;
};

const Bars = ({ numbersArr, maxRange, show, rgb }: BarsProps) => {
  const [showDetail, setShowDetail] = useState<null | number>(null);

  return (
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
            onMouseEnter={() => setShowDetail(index)}
            onMouseLeave={() => setShowDetail(null)}
          >
            {formatNumber}

            {showDetail === index && (
              <Detail
                numbersArr={numbersArr}
                maxRange={maxRange}
                number={number}
                index={index}
                rgb={rgb}
              />
            )}
          </S.Bar>
        );
      })}
    </S.Bars>
  );
};

export default Bars;
