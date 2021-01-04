import AsyncStorage from '@react-native-community/async-storage';
import api from '../api';
import {
  CHECK_PROFILE,
  CHECK_TOKEN_VALIDITY,
  CHECK_TOKEN_VALIDITY_FAIL,
  CHECK_TOKEN_VALIDITY_SUCCESS,
  CREATE_PATIENT,
  CREATE_PATIENT_FAIL,
  CREATE_PATIENT_SUCCESS,
  EMAIL_LOGIN,
  EMAIL_LOGIN_FAIL,
  EMAIL_LOGIN_SUCCESS,
  FETCH_PATIENTS,
  FETCH_PATIENTS_FAIL,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENT_DETAILS,
  FETCH_PATIENT_DETAIL_FAIL,
  FETCH_PATIENT_DETAIL_SUCCESS,
  GET_STATISTIQUES,
  GET_STATISTIQUES_FAIL,
  GET_STATISTIQUES_SUCCESS,
  LOGOUT,
  SEND_MESSAGE_SUCCESS,
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

export const fetchPatients = () => async (dispatch) => {
  dispatch({type: FETCH_PATIENTS});
  try {
    const response = await api('/patient');
    setTimeout(() => {
      dispatch({type: FETCH_PATIENTS_SUCCESS, payload: response.data});
    }, 1000);
  } catch (error) {
    dispatch({type: FETCH_PATIENTS_FAIL, payload: error});
  }
};

export const fetchPatient = (idPatient) => async (dispatch) => {
  dispatch({type: FETCH_PATIENT_DETAILS});
  try {
    const response = await api(`/patient/${idPatient}`);
    dispatch({type: FETCH_PATIENT_DETAIL_SUCCESS, payload: response.data});
  } catch (error) {
    dispatch({type: FETCH_PATIENT_DETAIL_FAIL, payload: error});
  }
};

export const sendMessage = (data) => async (dispatch) => {
  try {
    const response = await api.post('/patient/message', data);
    dispatch({type: SEND_MESSAGE_SUCCESS, payload: response.data});
  } catch (error) {
    throw Error(error);
  }
};

export const createPatient = (data) => async (dispatch) => {
  dispatch({type: CREATE_PATIENT});
  try {
    const response = await api.post('/patient', data);
    dispatch({type: CREATE_PATIENT_SUCCESS, payload: response.data});
  } catch (error) {
    dispatch({type: CREATE_PATIENT_FAIL, payload: error});
  }
};

export const getStatOne = (_) => async (dispatch) => {
  dispatch({type: GET_STATISTIQUES});
  try {
    const response = await api.get('/regions/statone');
    dispatch({type: GET_STATISTIQUES_SUCCESS, payload: response.data});
  } catch (error) {
    dispatch({type: GET_STATISTIQUES_FAIL, payload: error});
  }
};

export const getStateTwo = (_) => async (dispatch) => {};
