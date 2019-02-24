import { createSelector } from "reselect";

// Constants
export const ACTIONS = {
  LOGIN: "auth/UPDATE",
  CLEAR: "auth/CLEAR",
  UPDATE: "auth/UPDATE"
};

// Actions
export const update = payload => ({
  type: ACTIONS.UPDATE,
  payload
});

export const clear = _ => ({
  type: ACTIONS.CLEAR
});

export const logout = _ => dispatch => {
  return dispatch(clear());
};

// Selectors

const getToken = ({ auth: { token } }) => token;

export const isUserLoggedIn = createSelector(
  [getToken],
  token => !!token
);

const initialState = {
  userId: "",
  token: "",
  email: ""
};

const AuthReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case ACTIONS.UPDATE: {
      return {
        ...state,
        ...payload
      };
    }
    case ACTIONS.CLEAR: {
      return {
        ...initialState
      };
    }
    default: {
      return state;
    }
  }
};

export default AuthReducer;
