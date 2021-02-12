import { combineReducers } from "redux";
import latestmovie from "./Main";

export default combineReducers({
  latest: latestmovie,
});
