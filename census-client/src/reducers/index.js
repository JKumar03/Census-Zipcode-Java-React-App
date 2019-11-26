import { combineReducers } from "redux";
import queriesReducer from "./queriesReducer";
import outputReducer from "./outputReducer";

const rootReducer = combineReducers({
  queries: queriesReducer,
  output: outputReducer,
});

export default rootReducer;