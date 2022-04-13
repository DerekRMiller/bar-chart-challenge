import React, { createContext } from 'react';
import AppActions from './AppActions';
import { IApp, initialAppState } from './AppState';

const AppContext = createContext<{
  appState: IApp;
  appDispatch: React.Dispatch<AppActions>;
}>({
  appState: initialAppState,
  appDispatch: () => undefined
});

export default AppContext;
