import { combineReducers } from "redux";
import auth from "./AuthReducer/AuthReducer";
import user from "./CreateUserReducer/UserReducerIndex";
import login from './LoginReducer/LoginReducer';

const appReducer = combineReducers({
  auth,
  login,
  user
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
