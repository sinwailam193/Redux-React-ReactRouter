import { combineReducers } from 'redux';
import fetchReducer from "./sample.reducer";

const rootReducer = combineReducers({
  sample: fetchReducer
});

export default rootReducer;
