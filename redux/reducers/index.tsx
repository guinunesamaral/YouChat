import { Reducer as colorReducer } from './color/Reducer';
import { Reducer as userReducer } from './user/Reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ colorReducer, userReducer });

export default rootReducer;
