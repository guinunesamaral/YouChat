import { Reducer as colorReducer } from './color/Reducer';
import { Reducer as userReducer } from './user/Reducer';
import { Reducer as profileReducer } from './profile/Reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  colorReducer,
  userReducer,
  profileReducer,
});

export default rootReducer;
