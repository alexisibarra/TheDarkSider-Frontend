import UserAPI from "../../API/UserAPI";

// Actions
export const ACTIONS = {
  UPDATE: "user/UPDATE",
  CLEAR: "user/CLEAR"
};

// Action Creator
export const updateUser = payload => ({
  type: ACTIONS.UPDATE,
  payload
});

export const clearUser = _ => {
  return {
    type: ACTIONS.CLEAR
  };
};

export const createUser = payload => (dispatch, getState) => {
  return UserAPI.create(null, payload);
};

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  passwordConfirm: ""
};

const UserReducer = (state = initialState, action) => {
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

export default UserReducer;
