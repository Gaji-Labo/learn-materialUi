// src/reducers/index.js
import { combineReducers } from 'redux';
import { counterReducer } from './counter';

const rootReducer = combineReducers({
  // 状態ごとのReducer
  counterReducer,
})

export default rootReducer;
