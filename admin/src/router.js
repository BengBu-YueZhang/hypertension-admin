import React from 'react';
import { Router, Route, Switch } from 'dva/router';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
