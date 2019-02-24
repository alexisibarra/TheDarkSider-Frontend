import React from "react";
import Siths from "../../Images/siths.jpg";
import { routes } from "../../config/Routing/routesLiterals";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import SignUpForm from "../../Containers/SignUpForm/SignUpForm";

const SignUpPage = ({ history }) => (
  <div className="w-1/2">
    <img src={Siths} className="w-full" alt="logo" />

    <h1 className="text-2xl m-6">Join the dark side</h1>

    <SignUpForm />

    <p>
      Are you already a darksider?
      <button
        className="p-4 text-white underline"
        onClick={_ => history.push(routes.signin)}
      >
        Click here!
      </button>
    </p>
  </div>
);

SignUpPage.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(SignUpPage);
