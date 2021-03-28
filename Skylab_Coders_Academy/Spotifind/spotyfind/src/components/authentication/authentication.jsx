import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Dashboard from '../dashboard/dashboard';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component,
      { onRedirecting: () => <Dashboard /> })}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...args}
  />
);
export default PrivateRoute;
