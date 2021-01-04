import {
  CREATE_PATIENT,
  CREATE_PATIENT_FAIL,
  CREATE_PATIENT_SUCCESS,
  FETCH_PATIENTS,
  FETCH_PATIENTS_FAIL,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENT_DETAILS,
  FETCH_PATIENT_DETAIL_FAIL,
  FETCH_PATIENT_DETAIL_SUCCESS,
  GET_STATISTIQUES,
  GET_STATISTIQUES_FAIL,
  GET_STATISTIQUES_SUCCESS,
  GET_STATISTIQUE_ROUND_SUCCESS,
  SEND_MESSAGE_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  loadindDetails: false,
  loadingCreate: false,
  error: null,
  patients: [],
  patient: null,
  message: '',
  statLoader: false,
  statistiques: [],
  statsPosition: null,
  stats: {
    data: [],
    labels: [],
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PATIENTS:
      return {...state, loading: true};
    case FETCH_PATIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        patients: action.payload,
      };
    case FETCH_PATIENTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        isSignedIn: false,
      };
    case FETCH_PATIENT_DETAILS:
      return {
        ...state,
        loadindDetails: true,
      };
    case FETCH_PATIENT_DETAIL_SUCCESS: {
      return {
        ...state,
        loadindDetails: false,
        patient: action.payload,
      };
    }
    case FETCH_PATIENT_DETAIL_FAIL:
      return {...state, loadindDetails: false, error: action.payload};
    case SEND_MESSAGE_SUCCESS:
      return {...state, message: action.payload};

    case CREATE_PATIENT: {
      return {
        ...state,
        loadingCreate: true,
      };
    }
    case CREATE_PATIENT_SUCCESS: {
      return {
        ...state,
        patients: [action.payload, ...state.patients],
        loadingCreate: false,
      };
    }
    case CREATE_PATIENT_FAIL: {
      return {
        ...state,
        loadingCreate: false,
      };
    }
    case GET_STATISTIQUES:
      return {
        ...state,
        statLoader: true,
      };
    case GET_STATISTIQUES_SUCCESS: {
      let one = [];
      let two = [];
      action.payload.map((item) => {
        one = [...one, item.PatientCount];
        two = [...two, item.libelleRegion];
      });

      return {
        ...state,
        statistiques: action.payload,
        stats: {...state.stats, data: one, labels: two},
        statLoader: false,
      };
    }
    case GET_STATISTIQUES_FAIL:
      return {
        ...state,
        statLoader: false,
      };
    case GET_STATISTIQUE_ROUND_SUCCESS:
      return {
        ...state,
        statsPosition: action.payload,
      };
    default:
      return state;
  }
};
