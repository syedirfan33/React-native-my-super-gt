import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import CreateAccountReducer from './CreateAccountReducer';

export default combineReducers({
  auth: AuthReducer,
  createAccount: CreateAccountReducer,
});
