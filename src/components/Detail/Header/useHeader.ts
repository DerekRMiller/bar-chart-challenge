import { useContext } from 'react';

import HeaderProps from './Header.types';
import { createMonth } from '../../../shared/utility/utility';
import AppContext from '../../../state/App/AppContext';

const useHeader = ({ index, maxRange }: HeaderProps) => {
  const { appState } = useContext(AppContext);
  const getDay = createMonth(maxRange, 1, false);
  const dayArr = Object.keys(getDay)[index].split('-');

  return { appState, dayArr };
};

export default useHeader;
