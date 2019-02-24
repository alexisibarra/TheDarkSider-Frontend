import UserAPI from "../../API/UserAPI";
import { update as updateAuth } from "../AuthReducer/AuthReducer";
import { open as openModal } from "../ModalReducer/ModalReducer";
// Constants
export const ACTIONS = {
  UPDATE: "login/UPDATE",
  CLEAR: "login/CLEAR"
};

// Actions
export const updateLogin = payload => ({
  type: ACTIONS.UPDATE,
  payload
});

export const clear = _ => ({
  type: ACTIONS.CLEAR
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

export const login = _ => (dispatch, getState) => {
  const {
    login: { email, password, errors }
  } = getState();

  return UserAPI.login({ user: { email, password } })
    .then(({ data: { user: { _id: userId, email, token } } }) => {
      return Promise.all([
        dispatch(updateAuth({ userId, token, email })),
        dispatch(clear()),
        dispatch(openModal("Welcome to the Dark Side"))
      ]);
    })
    .catch(response => {
      const formErrors = response.response.data.errors.form;

      dispatch(updateLogin({ errors: { ...errors, form: formErrors } }));
    });
};

const initialState = {
  email: "ar.ibarrasalas@gmail.com",
  password: "password",
  errors: {},
  active: { email: false, password: false },
  disableSubmit: true
};

const LoginReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case ACTIONS.CLEAR: {
      return {
        ...initialState
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
