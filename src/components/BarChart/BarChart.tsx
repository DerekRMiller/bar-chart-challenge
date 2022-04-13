import React, { useState, KeyboardEvent, useContext } from 'react';

import Bars from './Bars/Bars';
import XAxis from './XAxis/XAxis';
import YAxis from './YAxis/YAxis';
import ButtonLink from '../ButtonLink/ButtonLink';
import Input from '../Input/Input';
import { handleClearLocal } from '../../shared/utility/utility';
import AppContext from '../../state/App/AppContext';
import * as S from './BarChart.styles';

const BarChart = () => {
  const { appState } = useContext(AppContext);
  const [maxRange, setMaxRange] = useState(31);
  const [inputError, setIsInputError] = useState('');
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const inputValue = (event.target as HTMLInputElement).value;
      const valueToNumber = Number(inputValue);
      if (Number.isNaN(valueToNumber)) {
        setIsInputError('Must be a number.');
      } else if (valueToNumber < 1 || valueToNumber > 31) {
        setIsInputError('Number must be between 1 and 31.');
      } else {
        setIsInputError('');
        setMaxRange(valueToNumber);
      }
    }
  };

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
