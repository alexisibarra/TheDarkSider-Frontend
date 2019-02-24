import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import "./style.css";

const transition = `transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out;`;

const TransitionDiv = styled.div`
  ${transition}
`;

const TransitionInput = styled.input`
  ${transition}
`;

const Input = ({
  inputClasses,
  type,
  name,
  onChange,
  onFocus,
  onBlur,
  value,
  error,
  label,
  active
}) => {
  const fieldClassName = `w-full rounded relative field
    ${error ? "bg-red-lighter" : "bg-grey-darkest"}
    ${(active || value) && "active"}  ${inputClasses}`;

  return (
    <TransitionDiv className={fieldClassName}>
      <TransitionInput
        type={type}
        name={name}
        value={value}
        placeholder={label}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-full h-16 relative px-4 border-none rounded-sm bg-transparent color-grey-darkest outline-none"
      />
      <label htmlFor={1} className={error && "error"}>
        {error || label}
      </label>
    </TransitionDiv>
  );
};

Input.propTypes = {
  active: PropTypes.bool,
  error: PropTypes.string,
  inputClasses: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

Input.defaultProps = {
  active: false,
  error: "",
  inputClasses: "PropTypes.string",
  label: "",
  type: "text",
  value: ""
};

export default Input;
