import React from "react";
import { Route, Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";
import { routes } from "./routesLiterals";

const UnauthenticatedRoute = ({
  userIsLoggedIn,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      userIsLoggedIn ? (
        <Redirect to={{ pathname: routes.signin }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

UnauthenticatedRoute.propTypes = {
  userIsLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

export default UnauthenticatedRoute;
