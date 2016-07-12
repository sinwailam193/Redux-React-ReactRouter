import axios from "axios";
import { FETCH } from "./constants";

export function fetch() {
  return function(dispatch) {
    axios.get("/api/sample")
      .then(response => {
        dispatch({type: FETCH, message: response.data.data});
      })
      .catch(error => {
        console.log(error);
      });
  }
}
