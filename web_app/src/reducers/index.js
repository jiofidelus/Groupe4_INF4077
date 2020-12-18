import { combineReducers } from "redux";
import { LOG_OUT } from "../actions/type";
import authReducer from "./authReducer";
import navReducer from "./navReducer";
import patientReducer from "./patientReducer";

const appReducer = combineReducers({
  navState: navReducer,
  authState: authReducer,
  patientState: patientReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
