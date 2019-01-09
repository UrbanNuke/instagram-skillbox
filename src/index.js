import img from './assets/logo.png';
import css from './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './containers/app';
import {reducer} from './reducers/reducer';

import {createStore} from 'redux';
import Index from './components';

const initialState = [];

// const store = createStore(reducer, initialState);

const application = (
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
);

ReactDOM.render(application, document.querySelector('#app')
);