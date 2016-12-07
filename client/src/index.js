import React, { Component } from "react";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import Routes from "./routes";
import Reducers from "./reducers/root.reducer";
import { get_cookie } from "./utils/cookie";
import { authUser } from "./actions/auth/auth.action";

const store = createStore(Reducers, applyMiddleware(ReduxThunk))
const token = get_cookie("authtoken");

if(token) {
  // This means that the user is logged in and we're going to update the state
  store.dispatch(authUser());
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById('container')
);
