import { combineReducers } from "redux";
import reducer from "./reducer";

const root = combineReducers({
  tG: reducer,
});
export default root;
