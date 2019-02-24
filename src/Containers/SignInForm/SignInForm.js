import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { routes } from "../../config/Routing/routesLiterals";
import Input from "../../Components/Input/Input";
import {
  updateLogin,
  validateFields,
  login
} from "../../Ducks/LoginReducer/LoginReducer";
import { TransitionButton } from "../../Components/TransitionButton/TransitionButton";

class SignInForm extends Component {
  handleSubmit = event => {
    const { history, login } = this.props;

    event.preventDefault();

    login().then(_ => {
      history.push(routes.darkside);
    });
  };

  handleChange = event => {
    const { value, name } = event.target;
    const { updateLogin, validateFields } = this.props;

    updateLogin({ [name]: value });

    validateFields();
  };

  render() {
    const {
      password,
      email,
      errors,
      updateLogin,
      active,
      validateFields,
      disableSubmit
    } = this.props;

    return (
      <Fragment>
        {this.props.errors.form && (
          <h4 className="text-red m-4">{this.props.errors.form}</h4>
        )}
        <form onSubmit={this.handleSubmit}>
          <Input
            inputClasses={"mb-2"}
            label="Email"
            type="email"
            name="email"
            value={email}
            error={errors.email}
            onChange={this.handleChange}
            active={active.email}
            onBlur={_ => updateLogin({ active: { ...active, email: false } })}
            onFocus={_ => {
              updateLogin({ active: { ...active, email: true } });
              validateFields();
            }}
          />

          <Input
            inputClasses={"mb-2"}
            label="Password"
            name="password"
            type="password"
            value={password}
            error={errors.password}
            onChange={this.handleChange}
            active={active.password}
            onBlur={_ =>
              updateLogin({ active: { ...active, password: false } })
            }
            onFocus={_ => {
              updateLogin({ active: { ...active, password: true } });
              validateFields();
            }}
          />

          <TransitionButton
            type="submit"
            readOnly
            disabled={disableSubmit}
            onClick={this.handleSubmit}
            className={`w-full my-2 outline-none rounded-sm  p-4 ${
              disableSubmit
                ? "bg-grey text-grey-darkest hover:bg-grey-dark"
                : "bg-black text-yellow hover:bg-grey-darkest "
              }`}
          >
            Submit
          </TransitionButton>
        </form>
      </Fragment>
    );
  }
}

SignInForm.propTypes = {
  active: PropTypes.object.isRequired,
  disableSubmit: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  password: PropTypes.string.isRequired,
  updateLogin: PropTypes.func.isRequired,
  validateFields: PropTypes.func.isRequired
};

const mS = state => ({
  active: state.login.active,
  disableSubmit: state.login.disableSubmit,
  email: state.login.email,
  errors: state.login.errors,
  password: state.login.password
});

const mD = {
  login,
  updateLogin,
  validateFields
};

export default connect(
  mS,
  mD
)(withRouter(SignInForm));
