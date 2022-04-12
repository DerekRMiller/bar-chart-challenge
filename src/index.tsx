import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';

import App from './components/App/App';
import AppProvider from './state/App/AppProvider';
import globalDef from './shared/styles/global/globalDef.styles';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Global styles={globalDef} />
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
