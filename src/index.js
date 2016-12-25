import React from "react";
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import ReduxThunk from 'redux-thunk';
import Routes from './routes';
import Reducers from './reducers/root.reducer';
require("./utils");

const store = createStore(Reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById('container'));
