import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Film from "./pages/admin/Film";
import "./App.css";
import { createBrowserHistory } from "history";
import HomeTemplates from "./Templates/adminTemplate";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Film></Film>
    </Fragment>
  );
}

export default App;
