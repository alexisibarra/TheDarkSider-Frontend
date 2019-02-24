import React, { Component } from "react";
import PropTypes from "prop-types";

class DarksidePage extends Component {
  componentWillMount() {
    console.log("hello world!");
  }

  render() {
    return <div>DarkSide</div>;
  }
}

DarksidePage.propTypes = {
  prop: PropTypes.object
};

export default DarksidePage;
