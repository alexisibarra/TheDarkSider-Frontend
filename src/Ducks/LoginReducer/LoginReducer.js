// Constants
export const ACTIONS = {
  LOGIN: "login/UPDATE",
  UPDATE: "login/UPDATE",
  LOGIN_ERROR: "login/LOGIN_ERROR",
  LOGIN_SUCCESS: "login/LOGIN_SUCCESS"
};

// Actions
export const updateLogin = payload => ({
  type: ACTIONS.UPDATE,
  payload
});

const validateEmail = email =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) || email.lentgh === 0;

const validatePassword = password => password.length < 8;

export const validateFields = _ => (dispatch, getState) => {
  const { password, email } = getState().login;
  const newErrors = {};
  let disableSubmit = false;

  if (validateEmail(email)) {
    newErrors.email = "Invalid email";
    disableSubmit = true;
  }

  if (validatePassword(password)) {
    disableSubmit = true;
    newErrors.password = "Password must be at least 8 characters";
  }

  dispatch(updateLogin({ errors: newErrors, disableSubmit: disableSubmit }));
};

const initialState = {
  success: false,
  email: "",
  password: "",
  token: "",
  errors: {},
  active: { email: false, password: false },
  disableSubmit: true
};

const LoginReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case ACTIONS.LOGIN_SUCCESS: {
      return {
        ...initialState,
        success: true
      };
    }
    case ACTIONS.LOGIN_ERROR: {
      return {
        success: false,
        error: payload
      };
    }
    case ACTIONS.UPDATE: {
      return {
        ...state,
        ...payload
      };
    }
    default: {
      return state;
    }
  }
};

export default LoginReducer;
