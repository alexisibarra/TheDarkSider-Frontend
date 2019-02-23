import React from "react";
import { Route, Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";
import { routes } from "./routesLiterals";

const AuthenticatedRoute = ({
  userIsLoggedIn,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={args =>
      userIsLoggedIn ? (
        <Component {...args} />
      ) : (
        <Redirect
          to={{
            pathname: routes.login,
            state: { from: args.location }
          }}
        />
      )
    }
  />
);

AuthenticatedRoute.propTypes = {
  userIsLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

export default AuthenticatedRoute;
