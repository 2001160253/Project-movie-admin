import { combineReducers } from "redux";

import users from "./user";

import listFilm from "./listFilm";
import userLogin from "./signin";
const rootReducer = combineReducers({
  user: users,
  login: userLogin,
  listFilm: listFilm,
});
export default rootReducer;
