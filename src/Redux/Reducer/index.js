import { combineReducers } from 'redux';
import {demoReducer} from './demo';
import {userReducer} from './userReducer'


export default combineReducers({
  demoData: demoReducer,
  userData: userReducer
});
