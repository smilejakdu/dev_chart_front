import { combineReducers } from "redux";
import user from "./user";
import chart from "./chart";

export default combineReducers({
  user,
  chart,
});
