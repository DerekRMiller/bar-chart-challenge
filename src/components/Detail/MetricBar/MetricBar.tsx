import React from 'react';

import { ReactComponent as Group } from '../../../shared/images/group.svg';
import Trending from '../Trending/Trending';
import MetricBarProps from './MetricBar.types';
import useMetricBar from './useMetricBar';
import * as S from './MetricBar.styles';

const MetricBar = ({ maxRange, number }: MetricBarProps) => {
  const { appState, formatNumber, rangeAverage } = useMetricBar({ maxRange, number });

  return (
    <S.MetricBar rgb={appState.rgb}>
      <Trending formatNumber={formatNumber} />
      <div>
        <div className="icon-container">
          <Group />
        </div>
        <div>
          {formatNumber} / {maxRange * 100}
        </div>
      </div>
      <div>
        <S.Pie rgb={appState.rgb} rangeAverage={rangeAverage}>
          <div />
        </S.Pie>
        <div>RA: {rangeAverage}%</div>
      </div>
    </S.MetricBar>
  );
};

export default MetricBar;
