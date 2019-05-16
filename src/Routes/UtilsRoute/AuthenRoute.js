import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../../utils/authenticate';
export const AuthenRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/main',
            }}
          />
        )
      }
    />
  );
};
