import { useState, useCallback, useContext } from 'react';

import AppContext from '../state/App/AppContext';
import { setNumbersArr } from '../state/App/App.reducer';

const GetData = (url: string) => {
  const [responseError, setResponseError] = useState(false);
  const { dispatch } = useContext(AppContext);

  const refetchData = useCallback(async () => {
    if (localStorage.getItem('numbersArr')) localStorage.removeItem('numbersArr');
    try {
      const getResponse = await fetch(url);
      const stringResponse = await getResponse.text();
      if (getResponse.ok === false) {
        throw new Error(getResponse.statusText);
      }
      await dispatch(setNumbersArr(stringResponse.split('\n')));
    } catch (error) {
      setResponseError(true);
    }
  }, [url, dispatch]);

  return { refetchData, responseError };
};

export default GetData;
