import { combineReducers } from "redux";
import create from "./CreateUserReducer";

const userReducers = combineReducers({
  create
});

export default userReducers;
