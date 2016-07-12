import { FETCH } from "../actions/constants";

const INITIAL_STATE = {message: ""};

export default function fetchReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH:
      return {...state, message: action.message};
    default:
      return state;
  }
}
