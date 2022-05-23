import { combineReducers } from "redux";
import { usersReducer } from "./slice/users";

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;