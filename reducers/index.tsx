import { Reducer as colorReducer } from './color/Reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ colorReducer });

export default rootReducer;
