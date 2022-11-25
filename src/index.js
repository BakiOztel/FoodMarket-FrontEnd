import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './Redux/store.js';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './components/Style/StyledComponent.js';
import { Provider } from "react-redux";
import { ApiProvider } from '@reduxjs/toolkit/query/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider >
);

reportWebVitals();
