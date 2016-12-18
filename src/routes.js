import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app.react';
import Greeting from './components/greeting.react';
import Home from "./components/home.react";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/greet" component={Greeting} />
  </Route>
);
