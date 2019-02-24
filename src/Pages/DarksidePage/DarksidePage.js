import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { routes } from "../../config/Routing/routesLiterals";
import { logout } from "../../Ducks/AuthReducer/AuthReducer";

const DarksidePage = ({ history, logout }) => (
  <div>
    DarkSide
    <p>
      <button
        className="p-4 text-white underline"
        onClick={async _ => {
          await logout();
          history.push(routes.signin);
        }}
      >
        Logout
      </button>
    </p>
  </div>
);

DarksidePage.propTypes = {
  prop: PropTypes.object,
  logout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mS = state => ({});

const mD = {
  logout
};

export default connect(
  mS,
  mD
)(withRouter(DarksidePage));
