import React from 'react';

import Bars from './Bars/Bars';
import ButtonLink from '../ButtonLink/ButtonLink';
import Input from '../Input/Input';
import XAxis from './XAxis/XAxis';
import YAxis from './YAxis/YAxis';
import { handleClearLocal } from '../../shared/utility/utility';
import useBarChart from './useBarChart';
import * as S from './BarChart.styles';

const BarChart = () => {
  const { appState, maxRange, inputError, handleKeyDown } = useBarChart();

  return (
    <S.BarChart isMounted={appState.isMounted}>
      {!appState.show && appState.isMounted && <S.Loading className="loading" showDots={false} />}
      <S.Content>
        <YAxis maxRange={100} value={10} />
        <Bars maxRange={maxRange} />
        <XAxis maxRange={maxRange} value={1} />
        <ButtonLink onClick={handleClearLocal} />
        <Input event={handleKeyDown} inputError={inputError} />
      </S.Content>
    </S.BarChart>
  );
};

export default BarChart;
