import React, { Fragment, useEffect } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getLayDanhSachPhim } from "../../reducers/listFilm";
import { Link, NavLink } from "react-router-dom";
import HomeTemplates from "../../Templates/adminTemplate/index";
import "./Film.scss";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function Film() {
  const { listFilm } = useSelector((state) => state.listFilm);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLayDanhSachPhim("gp01"));
  }, []);

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      with: "10%",
      sorter: (a, b) => a.maPhim - b.maPhim,
    },

    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      with: "30%",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase();
        let tenPhimB = b.tenPhim.toLowerCase();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
    },

    {
      title: "Mô tả",
      dataIndex: "moTa",
      with: "30%",

      render: (text, obj) => {
        return (
          <Fragment>
            {obj.moTa.length > 50 ? obj.moTa.substr(0, 50) + "..." : obj.moTa}
          </Fragment>
        );
      },
    },

    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      width: "10%",
      render: (text, obj) => {
        return (
          <img
            style={{ objectFit: "cover" }}
            width={80}
            height={100}
            src={obj.hinhAnh}
            alt={obj.hinhAnh}
          />
        );
      },
    },
    {
      title: "Trailer",
      dataIndex: "trailer",
      width: "10%",
      render: (text, obj) => {
        return <a href={obj.trailer}>Link</a>;
      },
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      width: "10%",
      render: (text, obj) => {
        return (
          <Fragment>
            <Link to="/them">
              <EditOutlined style={{ marginRight: "10px" }} />
            </Link>
            <Link to="/them">
              <DeleteOutlined style={{ color: "red" }} />
            </Link>
          </Fragment>
        );
      },
    },
  ];
  const data = listFilm;
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <div className="container-fluid d-flex">
        <HomeTemplates></HomeTemplates>
        <div className="wrapper">
          <h3 className="text-4xl">Quản Lý Phim</h3>
          <Link to="/them">
            <Button style={{ marginBottom: "10px" }}>Thêm phim</Button>
          </Link>

          <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
      </div>
    </div>
  );
}

export default Film;
