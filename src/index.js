import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './containers/app';
import {reducer} from './reducers/reducer';

import {createStore} from 'redux';

const initialState = [];

// const store = createStore(reducer, initialState);

ReactDOM.render(
  <App/>,
  document.querySelector('#app')
);