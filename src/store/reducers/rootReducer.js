import authReducer from './authReducer';
import testReducer from './testReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  test: testReducer
});

export default rootReducer;