import { Fragment } from "react";
import React, { useState } from "react";
import Film from "../../pages/admin/Film";
import "./index.scss";
const HomeTemplates = () => {
  return (
    <Fragment>
      <div className="Slidebar">
        <div className="ul">
          <li>Films</li>
          <li>User</li>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeTemplates;
