import { combineReducers } from "redux";

import users from "./user";

import listFilm from "./listFilm";

import getFilm from "./getFilm";
import listUser from "./listUser";

const rootReducer = combineReducers({
  user: users,
  editFilm: getFilm,
  listFilm: listFilm,
  listUser: listUser,
});
export default rootReducer;
