import React, { useState } from "react";
import HomeTemplates from "../../Templates/adminTemplate/index";
import "./addFilm.scss";

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

function AddFilm() {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div className="container-fluid d-flex">
      <HomeTemplates></HomeTemplates>
      <div className="wrapper">
        <h3 className="text-4xl">Thêm Phim</h3>
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
        >
          <Form.Item label="Mã phim">
            <Input name="maPhim" />
          </Form.Item>
          <Form.Item label="Tên phim">
            <Input name="tenPhim" />
          </Form.Item>
          <Form.Item label="Trailer">
            <Input name="trailer" />
          </Form.Item>
          <Form.Item label="Mô tả">
            <Input name="moTa" />
          </Form.Item>
          <Form.Item label="Ngày khởi chiếu">
            <DatePicker />
          </Form.Item>

          <Form.Item label="Ngày khởi chiếu" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Đang chiếu" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Hot" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item label="Số sao">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Hình ảnh">
            <input type="file" />
          </Form.Item>

          <Form.Item label="Button">
            <Button>Xác nhận</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default AddFilm;
