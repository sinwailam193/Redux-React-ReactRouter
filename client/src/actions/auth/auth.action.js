import axios from "axios";
import { browserHistory } from "react-router";
import { ROOT_URL, AUTH_USER } from "../constants";
import { set_cookie, get_cookie, delete_cookie } from "../../utils/cookie";

export function signinUser({email, password}) {
  // using redux-thunk to get access to the dispatch
  return function(dispatch) {
    axios.post(`${ROOT_URL}/api/auth/login`, {email, password})
      .then(response => {
        const token = response.data.token;
        dispatch({type: AUTH_USER});
        set_cookie("authtoken", token, 7);
        browserHistory.push("/feature");
      })
      .catch(error => {

      });
  }
}
