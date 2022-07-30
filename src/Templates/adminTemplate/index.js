import { Fragment } from "react";
import "antd/dist/antd.min.css";
import React, { useState, useEffect } from "react";
import Film from "../../pages/admin/Film";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LoginAdmin from "../../pages/LoginAdmin";

const HomeTemplates = () => {
  const [showModal, setShowModal] = useState();
  useEffect(() => {
    if (!localStorage.getItem("userAdmin")) {
      setTimeout(() => {
        setShowModal(true);
      }, 4000);
    }
  }, [showModal]);

  return (
    <Fragment>
      <div className="Slidebar">
        <div className="mt-2">
          <LoginAdmin showModal={showModal} setShowModal={setShowModal} />
        </div>

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
