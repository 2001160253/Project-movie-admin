import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieAPI from "../../../Services/movieAPI";
import AddUser from "../addUser/AddUser";

const EditUser = () => {
  const { taiKhoan } = useParams();
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    const featchData = async () => {
      try {
        const data = await movieAPI.getInofUser(taiKhoan);
        setInfoUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    featchData();
  }, []);
  if (Object.keys(infoUser).length === 0) {
    return;
  }
  const checkType = () => {
    console.log(infoUser);
    if (infoUser.maLoaiNguoiDung === "KhachHang") {
      return 0;
    }
    return 1;
  };
  return (
    <>
      <AddUser
        edit={true}
        disabled={true}
        infoUser={infoUser}
        type={checkType()}
      />
    </>
  );
};

export default EditUser;
