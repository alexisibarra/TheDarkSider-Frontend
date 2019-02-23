import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import { routes } from "./routesLiterals";

import { isUserLoggedIn } from "../../Ducks/AuthReducer/AuthReducerIndex";

import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";


// import CreateRoomPage from "../../Pages/Resources/Rooms/CreateRoomPage/CreateRoomPage";
import Error404Page from '../../Pages/Error404Page/Error404Page';
import SignInPage from '../../Pages/SIgnInPage/SignInPage';
import SignUpPage from '../../Pages/SignUpPage/SignUpPage';

const Router = ({ userIsLoggedIn }) => {
  return (
    <BrowserRouter>
      <Switch>
        <UnauthenticatedRoute
          path={routes.signup}
          userIsLoggedIn={userIsLoggedIn}
          component={({ ...props }) => {
            return (
              <SignUpPage />
            );
          }}
        />
        <UnauthenticatedRoute
          path={routes.login}
          userIsLoggedIn={userIsLoggedIn}
          component={({ ...props }) => (
            <SignInPage />
          )}
        />
        {/* <AuthenticatedRoute
          path={routes.newRoom(":id")}
          userIsLoggedIn={userIsLoggedIn}
          component={({ ...props }) => {
            return (
              <CreateRoomPage />
            );
          }}
        /> */}
        {/* <Route
          path={routes.root}
          render={_ => (
            <FrontLayout unpadded>
              <FrontHomePage />
            </FrontLayout>
          )}
        /> */}
        <Route component={Error404Page} />
      </Switch>
    </BrowserRouter>
  );
};

Router.propTypes = {
  userIsLoggedIn: PropTypes.bool.isRequired
};

const mS = state => ({
  userIsLoggedIn: isUserLoggedIn(state)
});

const mD = {};

export default connect(
  mS,
  mD
)(Router);
