import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';

import Dashboard from './dashboard/Dashboard';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  rootElement
);
