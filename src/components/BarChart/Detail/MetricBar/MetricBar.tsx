import React, { useContext } from 'react';

import { ReactComponent as Neutral } from '../../../../shared/images/trending-neutral.svg';
import { ReactComponent as Group } from '../../../../shared/images/group.svg';
import { createRangeAverage } from '../../../../shared/utility/utility';
import AppContext from '../../../../state/App/AppContext';
import * as S from './MetricBar.styles';

type DetailProps = {
  maxRange: number;
  number: string;
};

const trending = (formatNumber: number) => {
  let message = '';
  let icon = <Neutral />;

  switch (true) {
    case formatNumber < 50:
      message = `FALLING`;
      icon = <S.Falling />;
      break;
    case formatNumber > 50:
      message = 'RISING';
      icon = <S.Rising />;
      break;
    default:
      message = 'NEUTRAL';
  }
  return [icon, message];
};

const MetricBar = ({ maxRange, number }: DetailProps) => {
  const { state } = useContext(AppContext);
  const formatNumber = parseInt(number.toString(), 10) < 10 ? 0 + number : number;
  const rangeAverage = createRangeAverage(state.numbersArr, maxRange);

  return (
    <S.MetricBar rgb={state.rgb}>
      <div>
        {trending(parseInt(formatNumber.toString(), 10)).map((item, i) => (
          <div key={i} className={i === 0 ? `icon-container` : `${item}`}>
            {item}
          </div>
        ))}
      </div>
      <div>
        <div className="icon-container">
          <Group />
        </div>
        <div>
          {formatNumber} / {maxRange * 100}
        </div>
      </div>
      <div>
        <S.Pie rgb={state.rgb} rangeAverage={rangeAverage}>
          <div />
        </S.Pie>
        <div>RA: {rangeAverage}%</div>
      </div>
    </S.MetricBar>
  );
};

export default MetricBar;
