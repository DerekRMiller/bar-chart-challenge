import { useState, useCallback, useContext } from 'react';

import AppContext from '../state/App/AppContext';
import { setNumbersArr } from '../state/App/AppReducer';

const useGetData = (url: string) => {
  const [responseError, setResponseError] = useState(false);
  const { appDispatch } = useContext(AppContext);

  const refetchData = useCallback(async () => {
    if (localStorage.getItem('numbersArr')) localStorage.removeItem('numbersArr');
    try {
      const getResponse = await fetch(url);
      const stringResponse = await getResponse.text();
      if (getResponse.ok === false) {
        throw new Error(getResponse.statusText);
      }
      await appDispatch(setNumbersArr(stringResponse.split('\n')));
    } catch (error) {
      setResponseError(true);
    }
  }, [url, appDispatch]);

  return { refetchData, responseError };
};

export default useGetData;
