// src/reducers/index.js
import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { multiplyReducer } from './multiply';

const rootReducer = combineReducers({
  // 状態ごとのReducer
  counterReducer,
  multiplyReducer
})

export default rootReducer;
