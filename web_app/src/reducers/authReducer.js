import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from "../actions/type";

const INITIAL_STATE = {
  isSignedIn: false,
  loading: false,
  token: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        token: action.payload,
        loading: false,
        error: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        isSignedIn: false,
      };
    default:
      return state;
  }
};
