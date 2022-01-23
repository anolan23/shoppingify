import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './sass/main.scss';
import StoreProvider from './context/store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
