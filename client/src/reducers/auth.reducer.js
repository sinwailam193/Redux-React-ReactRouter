import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, AUTH_EMAIL_ERROR, HANDLE_CHANGE } from "../actions/constants";

const INITIAL_STATE = {
  authenticated: false,
  error: "",
  email: ""
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UNAUTH_USER:
      return {...state, authenticated: false};
    case AUTH_USER:
      return {...state, authenticated: true};
    case AUTH_ERROR:
      return {...state, error: action.error};
    case AUTH_EMAIL_ERROR:
      return {...state, errorEmail: action.error};
    case HANDLE_CHANGE:
      return {...state, ...action.value};
    default:
      return state;
  }
}