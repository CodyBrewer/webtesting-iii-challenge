import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store'
import Dashboard from './dashboard/Dashboard';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store()}>
    <Dashboard />
  </Provider>,
  rootElement
);
