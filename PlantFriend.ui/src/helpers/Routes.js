import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Plants from '../views/Plants';
import User from '../views/User';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (remainder) => (user
    ? (<Component {...remainder} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: remainder.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

export default function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute
          exact
          path='/plants'
          user={user}
          component={() => <Plants user={user}/>}
        />
        <PrivateRoute
          exact
          path='/user'
          user={user}
          component={() => <User user={user}/>}
        />
        <Route path='*' component = {NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any
};
