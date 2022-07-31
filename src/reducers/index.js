import { combineReducers } from "redux";

import users from "./user";

import listFilm from "./listFilm";

import getFilm from "./getFilm";
import listUser from "./listUser";

import userLogin from "./signin";
const rootReducer = combineReducers({
  user: users,
  editFilm: getFilm,
  login: userLogin,
  listFilm: listFilm,
  listUser: listUser,
});
export default rootReducer;
