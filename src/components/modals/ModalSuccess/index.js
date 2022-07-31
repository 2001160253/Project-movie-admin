import { Modal } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
const ModalSuccess = () => {
  const navigate = useNavigate();
  const success = () => {
    Modal.success({
      title: "Đăng nhập thành công",
      afterClose: () => {
        navigate("/");
      },
    });
  };
  return <div onClick={success()}></div>;
};

export default ModalSuccess;
