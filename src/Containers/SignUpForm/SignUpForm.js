import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "../../Components/Input/Input";
import { withRouter } from "react-router-dom";
import { routes } from "../../config/Routing/routesLiterals";

class SignUpForm extends Component {
  state = {};

  handleSubmit = event => {
    const { history } = this.props;
    // alert("A name was submitted: " + this.state.value);

    // if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test("asdf")) {
    //   console.log("Invalid email");
    // }
    event.preventDefault();

    history.push(routes.darkside);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input inputClasses={"mb-2"} label="Email" type="email" name="email" />

        <Input
          inputClasses={"mb-2"}
          label="Password"
          name="password"
          type="password"
        />

        <Input
          inputClasses={"mb-2"}
          label="Password confirmation"
          name="password-confirmation"
          type="password-confirmation"
        />
      </form>
    );
  }
}

SignUpForm.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(SignUpForm);
