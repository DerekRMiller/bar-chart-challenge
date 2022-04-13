import React, { useReducer, useMemo } from 'react';

import { initialAppState } from './AppState';
import { appReducer } from './AppReducer';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppContext.Provider value={useMemo(() => ({ appState, appDispatch }), [appState])}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
