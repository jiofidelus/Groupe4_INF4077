import api from "../api";
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOG_OUT } from "./type";

export const login = (username, password) => async (dispatch) => {
  dispatch({ type: LOGIN });
  try {
    const response = await api.post("/token-auth/", { username, password });
    localStorage.setItem("token", response.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    setTimeout(() => {
      dispatch({
        type: LOGIN_FAIL,
        payload: "Erreur verifiez vos informations",
      });
    }, 3000);
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOG_OUT });
  // history.push("/");
};
