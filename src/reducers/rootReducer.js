import { combineReducers } from "redux";
import movies from "./moviesListReducer";
import credits from "./movieCreditsReducer";

export default combineReducers({
  movies,
  credits
});