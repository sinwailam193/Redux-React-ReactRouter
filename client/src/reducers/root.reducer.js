import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import featureReducer from "./feature.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  feature: featureReducer
});

export default rootReducer;
