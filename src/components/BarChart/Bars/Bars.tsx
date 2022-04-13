import React, { useState, useContext } from 'react';

import Detail from '../../Detail/Detail';
import AppContext from '../../../state/App/AppContext';
import * as S from './Bars.styles';

type BarsProps = {
  maxRange: number;
};

const Bars = ({ maxRange }: BarsProps) => {
  const { appState } = useContext(AppContext);
  const [showDetail, setShowDetail] = useState<null | number>(null);

  return (
    <S.Bars>
      {appState.numbersArr.slice(0, maxRange).map((number, index) => {
        const formatNumber = parseInt(number, 10) < 10 ? 0 + number : number;
        return (
          <S.Bar
            maxRange={maxRange}
            formatNumber={formatNumber}
            index={index}
            key={index}
            rgb={appState.rgb}
            show={appState.show}
            onMouseEnter={() => setShowDetail(index)}
            onMouseLeave={() => setShowDetail(null)}
          >
            {formatNumber}
            {showDetail === index && <Detail maxRange={maxRange} number={number} index={index} />}
          </S.Bar>
        );
      })}
    </S.Bars>
  );
};

export default Bars;
