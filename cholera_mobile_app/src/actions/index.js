import AsyncStorage from '@react-native-community/async-storage';
import api from '../api';
import {
  CHECK_PROFILE,
  CHECK_TOKEN_VALIDITY,
  CHECK_TOKEN_VALIDITY_FAIL,
  CHECK_TOKEN_VALIDITY_SUCCESS,
  EMAIL_LOGIN,
  EMAIL_LOGIN_FAIL,
  EMAIL_LOGIN_SUCCESS,
  LOGOUT,
} from './types';

export const login = (email, password) => async (dispatch) => {
  dispatch({type: EMAIL_LOGIN});
  try {
    const response = await api.post('/users/login', {
      email,
      password,
    });
    AsyncStorage.setItem('token', response.data.token);
    AsyncStorage.setItem('user', JSON.stringify(response.data.user));
    dispatch({type: EMAIL_LOGIN_SUCCESS, payload: response.data});
    dispatch({type: CHECK_PROFILE, payload: response.data.user});
  } catch (error) {
    dispatch({type: EMAIL_LOGIN_FAIL, payload: error.response.data.error});
  }
};

const clearLocalStorage = async () => {
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('role');
  await AsyncStorage.removeItem('user');
};

export const logout = () => (dispatch) => {
  clearLocalStorage();
  dispatch({type: LOGOUT});
};

export const TokenValidity = () => async (dispatch) => {
  try {
    dispatch({type: CHECK_TOKEN_VALIDITY});
    await api.get('/users/me');
    dispatch({type: CHECK_TOKEN_VALIDITY_SUCCESS});
    dispatch({
      type: CHECK_PROFILE,
      payload: JSON.parse(AsyncStorage.getItem('user')),
    });
  } catch (error) {
    clearLocalStorage();
    dispatch({type: CHECK_TOKEN_VALIDITY_FAIL, payload: error});
  }
};
