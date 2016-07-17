import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from "../actions/constants";

const INITIAL_STATE = {authenticated: false, error: ""};

export default function authReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UNAUTH_USER:
      return {...state, authenticated: false};
    case AUTH_USER:
      return {...state, authenticated: true};
    case AUTH_ERROR:
      return {...state, error: action.error};
    default:
      return state;
  }
}
