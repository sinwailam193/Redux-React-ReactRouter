import axios from "axios";
import { FETCH } from "./constants";

export function fetch() {
  return async dispatch => {
    await axios.get("/api/sample")
      .then(response => {
        console.log("first");
        dispatch({type: FETCH, message: response.data.data});
      })
      .catch(error => {
        console.log(error);
      });
  }
}
