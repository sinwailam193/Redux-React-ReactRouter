import axios from "axios";
import { browserHistory } from "react-router";
import { ROOT_URL, FETCH_AUTH_MESSAGE } from "../constants";
import { get_cookie } from "../../utils/cookie";

export function fetchRequireAuth() {
  return async function(dispatch) {
    await axios.get(`${ROOT_URL}/api/auth`, {
      headers: {authorization: get_cookie("authtoken")}
    })
      .then(response => {
        console.log("before");
        dispatch({
          type: FETCH_AUTH_MESSAGE,
          message: response.data.response
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
