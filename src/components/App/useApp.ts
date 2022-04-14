import { useEffect, useContext } from 'react';

import {
  createColorRGB,
  getLocalStorageNumArr,
  setLocalStorageNumArr
} from '../../shared/utility/utility';
import useGetData from '../../services/useGetData';
import { setIsMounted, setShow, setNumbersArr, setRgb } from '../../state/App/AppReducer';
import AppContext from '../../state/App/AppContext';

const useApp = () => {
  const { appState, appDispatch } = useContext(AppContext);
  const { refetchData, responseError } = useGetData(
    'https://www.random.org/integers/?num=31&min=1&max=100&col=1&base=10&format=plain&rnd=new'
  );
  const checkLocalStorage = getLocalStorageNumArr();

  useEffect(() => {
    if (checkLocalStorage === null) {
      appDispatch(setIsMounted(false));
      appDispatch(setShow(false));
      refetchData();

      setTimeout(() => {
        appDispatch(setIsMounted(true));
        appDispatch(setShow(true));
      }, 1100);
    } else {
      appDispatch(setNumbersArr(JSON.parse(checkLocalStorage)));
    }
  }, []);

  useEffect(() => {
    const getColorRGB = createColorRGB(appState.numbersArr);
    appDispatch(setRgb(getColorRGB));
    setLocalStorageNumArr(appState.numbersArr);
  }, [appDispatch, appState.numbersArr]);

  const handleClick = () => {
    appDispatch(setShow(false));
    setTimeout(() => {
      refetchData();
      setTimeout(() => {
        appDispatch(setShow(true));
      }, 1100);
    }, 1100);
  };

  return {
    appState,
    responseError,
    handleClick
  };
};

export default useApp;
