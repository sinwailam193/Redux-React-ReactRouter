import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app.react";
import Greeting from "./components/greeting.react";
import Signin from "./components/auth/signin.react";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greeting} />
    <Route path="/signin" component={Signin} />
  </Route>
);
