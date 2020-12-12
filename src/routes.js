import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './views/About';
import Home from './views/Home';
import Todo from './views/Todo';
import Weather from './views/Weather';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/todo" exact component={Todo} />
      <Route path="/Weather" exact component={Weather} />
    </Switch>
  );
}

export default Routes;
