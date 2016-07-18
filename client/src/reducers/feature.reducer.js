import { FETCH_AUTH_MESSAGE } from "../actions/constants";

const INITIAL_STATE = {message: ""};

export default function featureReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_AUTH_MESSAGE:
      return {...state, message: action.message};
    default:
      return state;
  }
}
