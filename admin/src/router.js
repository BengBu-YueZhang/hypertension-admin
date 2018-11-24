import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router'
import BloodPressure from './routes/BloodPressure'
import BodyWeight from './routes/BodyWeight'
import Login from './routes/Login'
import { isHaveSessionStorage } from './utils/sessionStorage'
import LayoutView from './components/Layout/index'

function isAuth () {
  // return isHaveSessionStorage('token')
  return true
}

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <LayoutView>
          <Route path="/bw" render={ props => isAuth() ? <BodyWeight {...props} /> : <Redirect to={`/login`} /> } />
          <Route path="/bp" render={ props => isAuth() ? <BloodPressure {...props} /> : <Redirect to={`/login`} /> } />
        </LayoutView>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
