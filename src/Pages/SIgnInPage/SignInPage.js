import React from "react";
import Siths from "../../Images/siths.jpg";
import SignInForm from "../../Containers/SignInForm/SignInForm";
import { routes } from "../../config/Routing/routesLiterals";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const SignInPage = ({ history }) => (
  <div className="w-1/2">
    <img src={Siths} className="w-full" alt="logo" />

    <h1 className="text-2xl m-6">Sign in</h1>

    <SignInForm />

    <p>
      Haven't you joined yet?
      <button
        className="p-4 text-white underline"
        onClick={_ => history.push(routes.signup)}
      >
        Come here, we have cookies!
      </button>
    </p>
  </div>
);

SignInPage.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(SignInPage);
