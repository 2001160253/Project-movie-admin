import React, { useState } from "react";
import HomeTemplates from "../../../Templates/adminTemplate/index";
import "./addUser.scss";

// import { themPhimUpLoadHinh } from "../../reducers/addFilm";

import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";

function AddUser() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(undefined);

  const onChange = (newValue) => {
    setValue(newValue);
  };
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      hoTen: "",
      email: "",
      soDT: "",
      matKhau: "",
      maLoaiNguoiDung: "",

      maNhom: "GP01",
    },
    onSubmit: (value) => {
      console.log("formik", value);
      let formData = new FormData();

      for (let key in value) {
        if (key !== "hinhAnh") {
          formData.append(key, value[key]);
        }
      }

      //   if (dispatch(themPhimUpLoadHinh(formData))) alert("Them phim thanh cong");
    },
  });

  const [imgSrc, setImgSrc] = useState("");
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className="container-fluid d-flex">
      <HomeTemplates></HomeTemplates>
      <div className="wrapper">
        <h3 className="text-4xl">Thêm người dùng</h3>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          onSubmitCapture={formik.handleSubmit}
        >
          <Form.Item label="Tài khoản">
            <Input name="taiKhoan" onChange={formik.handleChange} />
          </Form.Item>
          <Form.Item label="Họ tên">
            <Input name="hoTen" onChange={formik.handleChange} />
          </Form.Item>
          <Form.Item label="Email">
            <Input name="email" onChange={formik.handleChange} />
          </Form.Item>
          <Form.Item label="Số điện thoại">
            <Input name="soDT" onChange={formik.handleChange} />
          </Form.Item>
          <Form.Item label="Mật khẩu">
            <Input name="matKhau" onChange={formik.handleChange} />
          </Form.Item>
          <Form.Item label="Loại người dùng">
            <Input name="maLoaiNguoiDung" onChange={formik.handleChange} />
          </Form.Item>

          <Form.Item label="Button">
            <button type="submit">Xác nhận</button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default AddUser;
