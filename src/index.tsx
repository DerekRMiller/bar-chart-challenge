import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';

import globalDef from './shared/styles/global/globalDef.styles';

import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalDef} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
