import React from "react";
import { LoginOutlined } from "@ant-design/icons";
import { Tag } from "antd";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ModalLogin from "../../components/modals/ModalLogin";
const LoginAdmin = ({ showModal, setShowModal }) => {
  const { userLogin } = useSelector((state) => state.login);

  const handleLogoout = () => {
    setShowModal(true);
  };
  return (
    <>
      {userLogin === null ? (
        <>
          <NavLink to="signin">
            <Tag>
              <span>Login</span>
              <LoginOutlined className="fs-5" />
            </Tag>
          </NavLink>
          <ModalLogin
            showModal={showModal}
            setShowModal={setShowModal}
            lognin={true}
          >
            Bạn chưa đăng nhập !
            <br />
            taiKhoanAdmin: 4Hoangvuasdf132
            <br />
            matKhau:h4521369
            <br />
            <small>Bạn có muốn đăng nhập không ?</small>
          </ModalLogin>
        </>
      ) : (
        <>
          <Tag role="button" onClick={handleLogoout}>
            <span>
              {userLogin.hoTen.length > 10
                ? userLogin.hoTen.substring(0, 10) + "..."
                : userLogin.hoTen}
            </span>
            <LoginOutlined className="fs-5 text-danger" />
          </Tag>
          <ModalLogin
            showModal={showModal}
            setShowModal={setShowModal}
            lognin={false}
          >
            Bạn Muốn đăng xuất !
          </ModalLogin>
        </>
      )}
    </>
  );
};

export default LoginAdmin;
