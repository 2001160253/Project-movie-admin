import React, { Fragment, useEffect } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, LayDanhSachnguoiDung } from "../../../reducers/listUser";
import { NavLink } from "react-router-dom";
import HomeTemplates from "../../../Templates/adminTemplate/index";
import "./User.scss";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
// import { deleteFilm } from "../../reducers/deleteFilm";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

function User() {
  const { listUser } = useSelector((state) => state.listUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LayDanhSachnguoiDung());
  }, []);
  const { Search } = Input;

  const onSearch = (value) => {
    dispatch(LayDanhSachnguoiDung(value));
  };
  const data = listUser;
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      with: "5%",
      sorter: (a, b) => a.taiKhoan - b.taiKhoan,
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      with: "15%",
      sorter: (a, b) => a.hoTen - b.hoTen,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "10%",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDT",
      width: "10%",
    },
    {
      title: "Mã loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      width: "20%",
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      width: "10%",
      render: (text, obj) => {
        return (
          <Fragment>
            <NavLink key={1} to={`/user/editUser/${obj.taiKhoan}`}>
              <EditOutlined style={{ marginRight: "10px" }} />
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              to="/"
              onClick={() => {
                if (
                  window.confirm("Bạn có muốn xóa Tài khoản: " + obj.taiKhoan)
                ) {
                  dispatch(deleteUser(obj.taiKhoan));
                  dispatch(LayDanhSachnguoiDung());
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />
            </span>
          </Fragment>
        );
      },
    },
  ];
  return (
    <div>
      <div className="container-fluid d-flex">
        <HomeTemplates></HomeTemplates>
        <div className="wrapper">
          <h3 className="text-4xl">Quản Lý User</h3>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <NavLink to="/user/addUser">
              <Button style={{ marginBottom: "10px" }}>Thêm người dùng</Button>
            </NavLink>

            <Space direction="vertical">
              <Search
                placeholder="Nhập chính xác account"
                onSearch={onSearch}
                style={{ width: 220 }}
              />
            </Space>
          </div>
          <Table
            columns={columns}
            dataSource={data}
            onChange={onChange}
            rowKey={"taiKhoan"}
          />
        </div>
      </div>
    </div>
  );
}

export default User;
