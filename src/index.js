import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import HomeTemplates from "./Templates/adminTemplate";
import AddFilm from "./pages/addFilm/addFilm";
<<<<<<< HEAD
import EditFilm from "./pages/editFilm/editFilm";
import Film from "./pages/admin/Film";
import User from "./pages/UserManagement/admin/User";
import AddUser from "./pages/UserManagement/addUser/AddUser";
=======
import Signin from "./components/Signin";
>>>>>>> a7702ee56487545651c84a4a4a7db4bdc4d08531

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Film />} />
        <Route path="/film/addFilm" element={<AddFilm />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/addUser" element={<AddUser />} />
        <Route path="/film/editFilm/:id" element={<EditFilm />} />
=======
        <Route path="/" element={<App />} />
        <Route path="/them" element={<AddFilm />} />
        <Route path="signin" element={<Signin />} />
>>>>>>> a7702ee56487545651c84a4a4a7db4bdc4d08531
      </Routes>
    </BrowserRouter>
  </Provider>
);
