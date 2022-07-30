import { combineReducers } from "redux";

import users from "./user";

import listFilm from "./listFilm";
<<<<<<< HEAD

import getFilm from "./getFilm";
import listUser from "./listUser";

const rootReducer = combineReducers({
  user: users,
  editFilm: getFilm,
=======
import userLogin from "./signin";
const rootReducer = combineReducers({
  user: users,
  login: userLogin,
>>>>>>> a7702ee56487545651c84a4a4a7db4bdc4d08531
  listFilm: listFilm,
  listUser: listUser,
});
export default rootReducer;
