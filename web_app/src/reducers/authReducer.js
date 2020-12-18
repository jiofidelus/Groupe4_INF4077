import {
  CHECK_TOKEN_VALIDITY,
  CHECK_TOKEN_VALIDITY_FAIL,
  CHECK_TOKEN_VALIDITY_SUCCESS,
  EMAIL_LOGIN,
  EMAIL_LOGIN_FAIL,
  EMAIL_LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/type";

const INITIAL_STATE = {
  isSignedIn: false,
  loading: false,
  token: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECK_TOKEN_VALIDITY:
      return { ...state, isLoadingToken: true };

    case CHECK_TOKEN_VALIDITY_SUCCESS:
      return { ...state, isSignedIn: true, isLoadingToken: false };
    case CHECK_TOKEN_VALIDITY_FAIL:
      return {
        ...state,
        isSignedIn: false,
        loading: false,
        token: null,
        error: "",
      };
    case EMAIL_LOGIN:
      return { ...state, loading: true, error: "" };
    case EMAIL_LOGIN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        token: action.payload.token,
        loading: false,
      };
    case EMAIL_LOGIN_FAIL:
      return { ...state, error: action.payload, loading: false };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        token: null,
        isSignedIn: false,
        error: "",
      };
    default:
      return state;
  }
};
