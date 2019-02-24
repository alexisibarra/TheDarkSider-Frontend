import UserAPI from "../../API/UserAPI";
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

export const login = payload => dispatch => {
  return UserAPI.login(payload).then(
    ({ data: { id: token, userId, firstName, lastName, role } }) => {
      dispatch(update({ userId, token, firstName, lastName, role }));
    }
  );
};

export const logout = _ => dispatch => {
  return dispatch(clear());
};

// Selectors

const getToken = ({ auth: { token } }) => token;
const getFullname = ({ auth: { firstName, lastName } }) =>
  `${firstName} ${lastName}`;

export const isUserLoggedIn = createSelector(
  [getToken],
  token => !!token
);

export const getUserFullName = createSelector(
  [getFullname],
  fullName => fullName
);

const initialState = {
  userId: "",
  token: "",
  role: "",
  firstName: "",
  lastName: ""
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
