import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Input from "../../Components/Input/Input";
import { withRouter } from "react-router-dom";
import { routes } from "../../config/Routing/routesLiterals";
import { TransitionButton } from "../../Components/TransitionButton/TransitionButton";
import {
  signup,
  update,
  validateFields
} from "../../Ducks/SignUpReducer/SignUpReducer";

class SignUpForm extends Component {
  handleSubmit = event => {
    const { history, signup } = this.props;

    event.preventDefault();

    signup().then(_ => {
      const { errors } = this.props;

      if (Object.keys(errors).length === 0) {
        history.push(routes.signin);
      }
    });
  };

  handleChange = event => {
    const { value, name } = event.target;
    const { update, validateFields } = this.props;

    update({ [name]: value });

    validateFields();
  };

  render() {
    const {
      password,
      email,
      errors,
      update,
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
            onBlur={_ => update({ active: { ...active, email: false } })}
            onFocus={_ => {
              update({ active: { ...active, email: true } });
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
            onBlur={_ => update({ active: { ...active, password: false } })}
            onFocus={_ => {
              update({ active: { ...active, password: true } });
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

SignUpForm.propTypes = {
  history: PropTypes.object.isRequired
};

const mS = state => ({
  active: state.signup.active,
  disableSubmit: state.signup.disableSubmit,
  email: state.signup.email,
  errors: state.signup.errors,
  password: state.signup.password
});

const mD = { signup, update, validateFields };

export default connect(
  mS,
  mD
)(withRouter(SignUpForm));
