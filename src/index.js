import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from './components/Style/StyledComponent.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>
);

reportWebVitals();