import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
// require('dotenv').config()

if (process.env.NODE_ENV !== 'production') {
  const getCSRFToken = () => {
    return fetch("/api/token");
  };

  getCSRFToken();
}

const store = configureStore();
if (process.env.NODE_ENV !== 'production') {
  window.store = store
}


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('container')
);
