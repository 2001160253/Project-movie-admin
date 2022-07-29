import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import HomeTemplates from "./Templates/adminTemplate";
import AddFilm from "./pages/addFilm/addFilm";
import Signin from "./components/Signin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/them" element={<AddFilm />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
