import React, { createContext } from 'react';
import AppActions from './AppActions';
import { IApp, initialAppState } from './App.state';

const AppContext = createContext<{
  state: IApp;
  dispatch: React.Dispatch<AppActions>;
}>({
  state: initialAppState,
  dispatch: () => undefined
});

export default AppContext;
