import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { routes } from "../../config/Routing/routesLiterals";
import { logout } from "../../Ducks/AuthReducer/AuthReducer";

class DarksidePage extends Component {
  componentWillMount() {
    console.log("hello world!");
  }

  render() {
    const { history, logout } = this.props;
    return (
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
  }
}

DarksidePage.propTypes = {
  prop: PropTypes.object
};

const mS = state => ({});

const mD = {
  logout
};

export default connect(
  mS,
  mD
)(withRouter(DarksidePage));
