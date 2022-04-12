import React, { useEffect, useContext } from 'react';

import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';
import BarChart from '../BarChart/BarChart';
import Error from '../Error/Error';
import {
  createColorRGB,
  getLocalStorageNumArr,
  setLocalStorageNumArr
} from '../../shared/utility/utility';
import GetData from '../../services/GetData';
import { setIsMounted, setShow, setNumbersArr, setRgb } from '../../state/App/App.reducer';
import AppContext from '../../state/App/AppContext';
import * as S from './App.styles';

const App = () => {
  const { state, dispatch } = useContext(AppContext);
  const { refetchData, responseError } = GetData(
    'https://www.random.org/integers/?num=200&min=1&max=100&col=1&base=10&format=plain&rnd=new'
  );
  const checkLocalStorage = getLocalStorageNumArr();

  useEffect(() => {
    if (checkLocalStorage === null) {
      dispatch(setIsMounted(false));
      dispatch(setShow(false));
      refetchData();

      setTimeout(() => {
        dispatch(setIsMounted(true));
        dispatch(setShow(true));
      }, 1100);
    } else {
      dispatch(setNumbersArr(JSON.parse(checkLocalStorage)));
    }
  }, []);

  useEffect(() => {
    const memoCreateColorRGB = createColorRGB(state.numbersArr);
    dispatch(setRgb(memoCreateColorRGB));
    setLocalStorageNumArr(state.numbersArr);
  }, [dispatch, state.numbersArr]);

  const handleClick = () => {
    dispatch(setShow(false));

    setTimeout(() => {
      refetchData();
      setTimeout(() => {
        dispatch(setShow(true));
      }, 1100);
    }, 1100);
  };

  return (
    <S.App className="app">
      <Nav />
      <Header />
      {state.isMounted === false && <Loading />}
      {responseError ? (
        <Error />
      ) : (
        <>
          <BarChart />
          <Button onClick={handleClick} />
        </>
      )}
      <Footer />
    </S.App>
  );
};

export default App;
