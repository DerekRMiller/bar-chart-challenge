import React, { useState, useEffect, useMemo } from 'react';

import * as S from './App.styles';

import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';
import BarChart from '../BarChart/BarChart';
import Error from '../Error/Error';

import { createColorRGB } from '../../shared/utility/utility';
import useFetch from '../../shared/hooks/useFetch.hook';

const App = () => {
  const [isMounted, setIsMounted] = useState(true);
  const [show, setShow] = useState(true);
  const { getLocalStorage, numbersArr, refetch, responseError } = useFetch(
    'https://www.random.org/integers/?num=200&min=1&max=100&col=1&base=10&format=plain&rnd=new'
  );

  const memoCreateColorRGB = useMemo(() => createColorRGB(numbersArr), [numbersArr]);

  useEffect(() => {
    if (getLocalStorage === null) {
      setShow(false);
      setIsMounted(false);
      refetch();

      if (numbersArr) {
        setTimeout(() => {
          setShow(true);
          setIsMounted(true);
        }, 1100);
      }
    }
  }, []);

  const handleClick = () => {
    setShow(false);

    setTimeout(() => {
      refetch();
      setTimeout(() => {
        setShow(true);
      }, 1100);
    }, 1100);
  };

  return (
    <S.App className="app">
      <Nav />
      <Header />
      {isMounted === false && <Loading />}
      {responseError ? (
        <Error numbersArr={numbersArr} />
      ) : (
        <>
          <BarChart
            show={show}
            isMounted={isMounted}
            numbersArr={numbersArr}
            rgb={memoCreateColorRGB}
          />
          <Button
            isMounted={isMounted}
            show={show}
            onClick={handleClick}
            rgb={memoCreateColorRGB}
          />
        </>
      )}
      <Footer />
    </S.App>
  );
};

export default App;
