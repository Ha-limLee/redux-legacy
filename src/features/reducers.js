import { combineReducers } from 'redux';
import todoReducer from './todo/reducer';
import userReducer from './user/reducer';

export default combineReducers({
  todoReducer,
  userReducer,
});