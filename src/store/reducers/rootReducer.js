import authReducer from './authReducer';
import testReducer from './testReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  test: testReducer,
  firestore: firestoreReducer
});

export default rootReducer;