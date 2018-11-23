import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router'
import BloodPressure from './routes/BloodPressure'
import BodyWeight from './routes/BodyWeight'
import Login from './routes/Login'
import { isHaveSessionStorage } from './utils/sessionStorage'

function isAuth () {
  return isHaveSessionStorage('token')
}

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Redirect from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route render={ props => isAuth() ? <BodyWeight {...props} /> : <Redirect to={`/login`} /> } />
        <Route render={ props => isAuth() ? <BloodPressure {...props} /> : <Redirect to={`/login`} /> } />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
