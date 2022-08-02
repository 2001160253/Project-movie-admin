import React, { useRef } from "react";
import HomeTemplates from "../../../Templates/adminTemplate/index";
import "./addUser.scss";

import { Button, Form, Input, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addUser, updateInfoUser } from "../../../reducers/listUser";

function AddUser({ edit, infoUser, disabled, type }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "" || infoUser?.taiKhoan,
      hoTen: "" || infoUser?.hoTen,
      email: "" || infoUser?.email,
      soDt: "" || infoUser?.soDT,
      matKhau: "" || infoUser?.matKhau,
      maLoaiNguoiDung: "" || infoUser?.loaiNguoiDung.maLoaiNguoiDung,

      maNhom: "GP01",
    },
    onSubmit: (value) => {
      if (edit) {
        dispatch(updateInfoUser(value));
      } else {
        dispatch(addUser(value));
      }
    },
    validate: (values) => {
      let errors = {};
      if (!values.taiKhoan) {
        errors.taiKhoan = "* Tài khoản không được để trống";
      } else if (
        !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/i.test(values.taiKhoan)
      ) {
        errors.taiKhoan =
          "* Tài khoản ít nhất năm ký tự, ít nhất một chữ cái và một số:";
      }
      if (!values.hoTen) {
        errors.hoTen = "* Họ tên không được để trống";
      }
      if (!values.email) {
        errors.email = "* Email không được để trống";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "* Email sai dinh dang";
      }
      if (!values.soDt) {
        errors.soDt = "* Số điện thoại không được để trống";
      } else if (!/[0-9]{10}$/i.test(values.soDt)) {
        errors.soDt = "* Số điện thoại chỉ gồm số và đủ 10 số";
      }
      if (!values.matKhau) {
        errors.matKhau = "* Mật khẩu không được để trống";
      } else if (
        !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.matKhau)
      ) {
        errors.matKhau =
          "* Mật khẩu tối thiểu tám ký tự, ít nhất một chữ cái và một số";
      }
      if (!values.maLoaiNguoiDung) {
        errors.maLoaiNguoiDung = "* Loại người dùng không được để trống";
      }
      return errors;
    },
  });
  const dataType = [
    { name: "Khách Hàng", value: "KhachHang" },
    { name: "Quản Trị", value: "QuanTri" },
  ];
  const converDataType = () => {
    return dataType.map((type) => ({
      label: type.name,
      value: type.value,
    }));
  };
  const handleChangeType = (value) => {
    formik.setFieldValue("maLoaiNguoiDung", value);
  };
  return (
    <div className="container-fluid d-flex">
      <HomeTemplates></HomeTemplates>
      <div className="d-flex flex-column w-50 m-5 ">
        <h3 className="text-4xl">
          {disabled ? "Sửa thông tin " : "Thêm "}người dùng
        </h3>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 20,
          }}
          layout="horizontal"
          initialValues={{
            size: "default",
          }}
          size="default"
          onFinish={formik.handleSubmit}
        >
          <Form.Item label="Tài khoản">
            <Input
              disabled={disabled}
              name="taiKhoan"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.taiKhoan}
            />
            {formik.errors.taiKhoan ? (
              <small className="text-danger d-block">
                {formik.errors.taiKhoan}
              </small>
            ) : null}
          </Form.Item>
          <Form.Item label="Họ tên">
            <Input
              name="hoTen"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.hoTen}
            />
            {formik.errors.hoTen ? (
              <small className="text-danger d-block">
                {formik.errors.hoTen}
              </small>
            ) : null}
          </Form.Item>
          <Form.Item label="Email">
            <Input
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <small className="text-danger d-block">
                {formik.errors.email}
              </small>
            ) : null}
          </Form.Item>
          <Form.Item label="Số điện thoại">
            <Input
              name="soDt"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.soDt}
              maxLength={10}
            />
            {formik.errors.soDt ? (
              <small className="text-danger d-block">
                {formik.errors.soDt}
              </small>
            ) : null}
          </Form.Item>
          <Form.Item label="Mật khẩu">
            <Input.Password
              name="matKhau"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.matKhau}
            />
            {formik.errors.matKhau ? (
              <small className="text-danger d-block">
                {formik.errors.matKhau}
              </small>
            ) : null}
          </Form.Item>
          <Form.Item
            label="Loại người dùng"
            wrapperCol={{
              span: 5,
            }}
          >
            <Select
              name="maLoaiNguoiDung"
              options={converDataType()}
              defaultValue={dataType[type || null]}
              onBlur={formik.handleBlur}
              onChange={handleChangeType}
            />
            {formik.errors.maLoaiNguoiDung ? (
              <small className="text-danger d-block">
                {formik.errors.maLoaiNguoiDung}
              </small>
            ) : null}
          </Form.Item>

          <Form.Item label="Button">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default AddUser;
