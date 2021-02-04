import { combineReducers } from "redux";
import leads from "./leads";
import errors from "./errors";
import message from "./messages";

export default combineReducers({
  leads,
  errors,
  message,
});
