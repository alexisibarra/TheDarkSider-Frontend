// Constants
export const ACTIONS = {
  UPDATE: "modal/UPDATE",
  CLEAR: "modal/CLEAR"
};

// Actions
export const update = payload => ({
  type: ACTIONS.UPDATE,
  payload
});

export const clear = _ => ({
  type: ACTIONS.CLEAR
});

export const open = message => ({
  type: ACTIONS.UPDATE,
  payload: { open: true, message }
});

const initialState = {
  open: false,
  message: ""
};

const ModalReducer = (state = initialState, action) => {
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

export default ModalReducer;
