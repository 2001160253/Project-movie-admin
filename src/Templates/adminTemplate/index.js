import { Fragment } from "react";
import React, { useState } from "react";
import Film from "../../pages/admin/Film";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
const HomeTemplates = () => {
  return (
    <Fragment>
      <div className="Slidebar">
        <div className="ul">
          <Link to={`/`}>
            <li>Films</li>
          </Link>
          <Link to={`/user`}>
            <li>User</li>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeTemplates;
