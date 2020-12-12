import { combineReducers } from "redux";
import navReducer from "../reducers/navReducer";

const appReducer = combineReducers({
  navState: navReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "logout") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
