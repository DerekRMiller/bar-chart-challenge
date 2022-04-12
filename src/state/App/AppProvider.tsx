import React, { useReducer, useMemo } from 'react';

import { initialAppState } from './App.state';
import { reducer } from './App.reducer';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAppState);

  return (
    <AppContext.Provider value={useMemo(() => ({ state, dispatch }), [state])}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
