import { combineReducers } from "redux";
import auth from "../Ducks/AuthReducer/AuthReducerIndex";
import user from "./CreateUserReducer/UserReducerIndex";

const appReducer = combineReducers({
  auth,
  user,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
