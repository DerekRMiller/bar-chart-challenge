import { useState, useEffect, useCallback } from 'react';

const useFetch = (url: string) => {
  const [responseError, setResponseError] = useState(false);
  const getLocalStorage = localStorage.getItem('numbersArr');
  let parseLocalStorage = [''];

  if (getLocalStorage) {
    parseLocalStorage = JSON.parse(getLocalStorage);
  }

  const [numbersArr, setNumbersArr] = useState(parseLocalStorage);

  const refetch = useCallback(async () => {
    localStorage.removeItem('numbersArr');
    try {
      const getResponse = await fetch(url);
      const stringResponse = await getResponse.text();
      await setNumbersArr(stringResponse.split('\n'));
      if (getResponse.ok === false) {
        throw new Error(getResponse.statusText);
      }
      setResponseError(false);
    } catch (error) {
      setResponseError(true);
    }
  }, [url]);

  useEffect(() => {
    if (numbersArr.length > 2 && !localStorage.getItem('numbersArr')) {
      localStorage.setItem('numbersArr', JSON.stringify(numbersArr));
    }
  }, [numbersArr]);

  return { getLocalStorage, numbersArr, refetch, responseError };
};

export default useFetch;
