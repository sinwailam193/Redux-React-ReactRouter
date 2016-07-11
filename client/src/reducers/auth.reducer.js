import { AUTH_USER, UNAUTH_USER } from "../actions/constants";

const INITIAL_STATE = {authenticated: false};

export default function authReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UNAUTH_USER:
      return {...state, authenticated: false};
    case AUTH_USER:
      return {...state, authenticated: true};
    default:
      return state;
  }
}
