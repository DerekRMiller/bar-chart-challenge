import { useContext } from 'react';

import MetricBarProps from './MetricBar.types';
import { createRangeAverage } from '../../../shared/utility/utility';
import AppContext from '../../../state/App/AppContext';

const useMetricBar = ({ maxRange, number }: MetricBarProps) => {
  const { appState } = useContext(AppContext);
  const formatNumber = parseInt(number.toString(), 10) < 10 ? 0 + number : number;
  const rangeAverage = createRangeAverage(appState.numbersArr, maxRange);

  return { appState, formatNumber, rangeAverage };
};

export default useMetricBar;
