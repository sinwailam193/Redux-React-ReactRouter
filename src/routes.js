import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app.react';

import Greeting from './components/greeting.react';

function Greeting1() {
  return <div>HIiiiiiiiii!</div>;
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greeting} />
    <Route path="/greet" component={Greeting1} />
  </Route>
);
