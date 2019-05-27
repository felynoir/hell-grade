import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthorize } from '../../utils/authenticate';
export const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthorize('Admin') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }
    />
  );
};
