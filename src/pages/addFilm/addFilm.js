import React, { useState } from "react";
import HomeTemplates from "../../Templates/adminTemplate/index";
import "./addFilm.scss";
import { themPhimUpLoadHinh } from "../../reducers/addFilm";

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

function AddFilm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      danhGia: 0,
      hinhAnh: {},
      maNhom: "GP01",
    },
    onSubmit: (value) => {
      console.log("formik", value);
      let formData = new FormData();

      for (let key in value) {
        if (key !== "hinhAnh") {
          formData.append(key, value[key]);
        } else {
          formData.append("file", value.hinhAnh, value.hinhAnh.name);
        }
      }

      if (dispatch(themPhimUpLoadHinh(formData))) alert("Them phim thanh cong");
    },
  });

  const handleChangeDatePicker = (value) => {
    console.log("data", moment(value).format("DD/MM/YYYY"));
    let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImgSrc(e.target.result);
    };
    formik.setFieldValue("hinhAnh", file);
  };

  const [imgSrc, setImgSrc] = useState("");
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className="container-fluid d-flex">
      <HomeTemplates></HomeTemplates>
      <div className="wrapper">
        <h3 className="text-4xl">Th??m Phim</h3>
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
          <Form.Item label="T??n phim">
            <Input name="tenPhim" onChange={formik.handleChange} />
          </Form.Item>
          <Form.Item label="Trailer">
            <Input name="trailer" onChange={formik.handleChange} />
          </Form.Item>
          <Form.Item label="M?? t???">
            <Input name="moTa" onChange={formik.handleChange} />
          </Form.Item>
          <Form.Item label="Ng??y kh???i chi???u">
            <DatePicker
              format={"DD/MM/YYYY"}
              onChange={handleChangeDatePicker}
            />
          </Form.Item>

          <Form.Item label="??ang chi???u" valuePropName="checked">
            <Switch
              name="dangChieu"
              onChange={handleChangeSwitch("dangChieu")}
            />
          </Form.Item>
          <Form.Item label="S???p chi???u" valuePropName="checked">
            <Switch name="sapChieu" onChange={handleChangeSwitch("sapChieu")} />
          </Form.Item>
          <Form.Item label="Hot" valuePropName="checked">
            <Switch name="hot" onChange={handleChangeSwitch("hot")} />
          </Form.Item>

          <Form.Item label="S??? sao">
            <InputNumber
              name="danhGia"
              onChange={handleChangeSwitch("danhGia")}
              min={0}
              max={10}
            />
          </Form.Item>

          <Form.Item label="H??nh ???nh">
            <input type="file" onChange={handleChangeFile} />
            <br />
            <img
              style={{ width: 110, height: 130, objectFit: "cover" }}
              src={imgSrc}
              alt="pic"
            ></img>
          </Form.Item>

          <Form.Item label="Button">
            <button type="submit">X??c nh???n</button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default AddFilm;
