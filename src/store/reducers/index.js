import { combineReducers } from 'redux';
import cryptoReducer from './cryptoReducer';

export default combineReducers({
  data: cryptoReducer
})
