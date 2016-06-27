import { SAVE_COMMENT } from '../actions/types';
const initial_state = [];

export default function list(state = initial_state, action) {
  switch(action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
