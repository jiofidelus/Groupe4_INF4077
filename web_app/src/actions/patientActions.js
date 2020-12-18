import api from "../api";
import {
  FETCH_PATIENTS,
  FETCH_PATIENTS_FAIL,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENT_DETAILS,
  FETCH_PATIENT_DETAIL_FAIL,
  FETCH_PATIENT_DETAIL_SUCCESS,
} from "./type";

export const fetchPatients = () => async (dispatch) => {
  dispatch({ type: FETCH_PATIENTS });
  try {
    const response = await api("/patient");
    setTimeout(() => {
      dispatch({ type: FETCH_PATIENTS_SUCCESS, payload: response.data });
    }, 1000);
  } catch (error) {
    dispatch({ type: FETCH_PATIENTS_FAIL, payload: error });
  }
};

export const fetchPatient = (idPatient) => async (dispatch) => {
  dispatch({ type: FETCH_PATIENT_DETAILS });
  try {
    const response = await api(`/patient/${idPatient}`);
    dispatch({ type: FETCH_PATIENT_DETAIL_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PATIENT_DETAIL_FAIL, payload: error });
  }
};

export const sendMessage = (data) => async (dispatch) => {
  // try {
  //   const response = await api.post("/patient/message", data);
  //   dispatch({ type: SEND_MESSAGE_SUCCESS, payload: response.data });
  // } catch (error) {
  //   throw Error(error);
  // }
};
