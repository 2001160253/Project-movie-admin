import { combineReducers } from "redux";

import users from "./user";

import listFilm from "./listFilm";

const rootReducer = combineReducers({
  user: users,

  listFilm: listFilm,
});
export default rootReducer;
