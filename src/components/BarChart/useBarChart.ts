import { useState, KeyboardEvent, useContext } from 'react';

import AppContext from '../../state/App/AppContext';

const useBarChart = () => {
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

  return { appState, maxRange, inputError, handleKeyDown };
};

export default useBarChart;
