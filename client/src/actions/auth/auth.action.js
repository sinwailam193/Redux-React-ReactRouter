import axios from "axios";
import { browserHistory } from "react-router";
import { ROOT_URL, AUTH_USER, AUTH_ERROR, UNAUTH_USER, AUTH_EMAIL_ERROR, HANDLE_CHANGE } from "../constants";
import { set_cookie, get_cookie, delete_cookie } from "../../utils/cookie";

export function authUser() {
  return {
    type: AUTH_USER
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    error
  };
}

export function authErrorEmail(error) {
  return {
    type: AUTH_EMAIL_ERROR,
    error
  };
}

export function handleChange(value) {
  return {
    type: HANDLE_CHANGE,
    value
  };
}

export function signUser(form, api) {
  // using redux-thunk to get access to the dispatch
  return function(dispatch) {
    axios.post(`${ROOT_URL}/api/auth/${api}`, form)
      .then(response => {
        const token = response.data.token;
        dispatch(authUser());
        set_cookie("authtoken", token, 1);
        browserHistory.push("/feature");
      })
      .catch(error => {
        if(error && error.data && error.data.error) {
          dispatch(authErrorEmail(error.data.error));
        }
        else {
          dispatch(authError("Bad Login Info"));
        }
      });
  }
}

export function signoutUser() {
  return function(dispatch) {
    dispatch({type: UNAUTH_USER});
    delete_cookie("authtoken");
    setTimeout(() => {
      browserHistory.push("/");
    }, 1000)
  }
}
