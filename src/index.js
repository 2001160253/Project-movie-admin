import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import HomeTemplates from "./Templates/adminTemplate";
import AddFilm from "./pages/addFilm/addFilm";
import EditFilm from "./pages/editFilm/editFilm";
import Film from "./pages/admin/Film";
import User from "./pages/UserManagement/admin/User";
import AddUser from "./pages/UserManagement/addUser/AddUser";
import Signin from "./components/Signin";
import ShowTime from "./pages/ShowTime";
import EditUser from "./pages/UserManagement/editUser";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Film />} />
        <Route path="/film/addFilm" element={<AddFilm />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/addUser" element={<AddUser />} />
        <Route path="/user/editUser/:taiKhoan" element={<EditUser />} />
        <Route path="/film/editFilm/:id" element={<EditFilm />} />
        <Route path="/film/showtime/:id/:tenPhim" element={<ShowTime />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
