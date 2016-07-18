import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app.react";
import Greeting from "./components/greeting.react";
import Feature from "./components/feature.react";
import RequireAuth from "./components/auth/require_auth.react";
import Signin from "./components/auth/signin.react";
import Signout from "./components/auth/signout.react";
import Signup from "./components/auth/signup.react";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greeting} />
    <Route path="/feature" component={RequireAuth(Feature)} />
    <Route path="/signin" component={Signin} />
    <Route path="/signout" component={Signout} />
    <Route path="/signup" component={Signup} />
  </Route>
);
