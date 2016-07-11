import axios from "axios";
import { browserHistory } from "react-router";
import { ROOT_URL } from "../constants";

export function signinUser({email, password}) {
  // using redux-thunk to get access to the dispatch
  return function(dispatch) {
    axios.post(`${ROOT_URL}/api/auth/login`, {email, password})
      .then(data => {
        browserHistory.push("/feature");
      })
      .catch(error => {

      });
  }
}
