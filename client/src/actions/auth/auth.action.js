import axios from "axios";
import { browserHistory } from "react-router";
import { ROOT_URL, AUTH_USER, AUTH_ERROR, UNAUTH_USER } from "../constants";
import { set_cookie, get_cookie, delete_cookie } from "../../utils/cookie";

export function authError(error) {
  return {
    type: AUTH_ERROR,
    error
  };
}

export function signinUser({email, password}) {
  // using redux-thunk to get access to the dispatch
  return function(dispatch) {
    axios.post(`${ROOT_URL}/api/auth/login`, {email, password})
      .then(response => {
        const token = response.data.token;
        dispatch({type: AUTH_USER});
        set_cookie("authtoken", token, 1);
        browserHistory.push("/feature");
      })
      .catch(() => {
        dispatch(authError("Bad Login Info"));
      });
  }
}

export function authUser() {
  return {type: AUTH_USER};
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
