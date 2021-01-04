import {combineReducers} from 'redux';
import {LOG_OUT} from '../actions/types';
import authReducer from './authReducer';
import patientReducer from './patientReducer';

const appReducer = combineReducers({
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
