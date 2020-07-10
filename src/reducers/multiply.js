// src/reducers/counter.js
import { MULTIPLY } from '../actions/multiply';

const initialState = {
  buttons: ["Button"]
};

export function multiplyReducer(state = initialState, action){
  let number = Math.floor(Math.random() * 2);
  let components = ["Button", "Button2"];
  switch(action.type) {
    case MULTIPLY:
      return {
        ...state,
        buttons: [...state.buttons, components[number]],
      };
    default:
      return state;
  }
}
