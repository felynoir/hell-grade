import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../../utils/authenticate';
export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { message: 'Please Login to Code!' },
            }}
          />
        )
      }
    />
  );
};
