// src/reducers/counter.js
import { INCREMENT, DECREMENT } from '../actions/counter';

const initialState = {
  count: 10,
  note: 'default'
};

export function counterReducer(state = initialState, action){
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        count: ++state.count,
        note: 'increment'
      };
    case DECREMENT:
      return {
        ...state,
        count: --state.count,
        note: 'decrement'
      };
    default:
      return state;
  }
}
