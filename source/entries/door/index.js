import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from '../../pages/Root';
import configureStore from '../../store/configureStore';
import { rootReducer, routes } from '../../pages/Door';
const store = configureStore(rootReducer);
const history = syncHistoryWithStore(hashHistory, store);
render(
  <Root store={store} history={history} routes={routes} />,
  document.getElementById('root')
);