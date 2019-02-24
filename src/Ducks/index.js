import { combineReducers } from "redux";
import auth from "./AuthReducer/AuthReducer";
import user from "./CreateUserReducer/UserReducerIndex";
import login from "./LoginReducer/LoginReducer";
import signup from "./SignUpReducer/SignUpReducer";
import modal from "./ModalReducer/ModalReducer";

const appReducer = combineReducers({
  auth,
  login,
  modal,
  signup,
  user
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
