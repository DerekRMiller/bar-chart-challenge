import React from 'react';

import BarChart from '../BarChart/BarChart';
import Button from '../Button/Button';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import Nav from '../Nav/Nav';
import useApp from './useApp';
import * as S from './App.styles';

const App = () => {
  const { appState, responseError, handleClick } = useApp();

  return (
    <S.App className="app">
      <Nav />
      <Header />
      {appState.isMounted === false && <Loading />}
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
