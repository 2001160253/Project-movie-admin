import React, { useEffect, useState } from "react";
import HomeTemplates from "../../Templates/adminTemplate/index";
import "./editFilm.scss";
import { themPhimUpLoadHinh } from "../../reducers/addFilm";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../../reducers/getFilm";
import { capNhatPhimUpLoadHinh } from "../../reducers/editFilm";
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
function EditFilm() {
  const { editFilm } = useSelector((state) => state.editFilm);

  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    const id = params.id;
    dispatch(getMovieDetail(id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: editFilm?.maPhim,
      tenPhim: editFilm?.tenPhim,
      trailer: editFilm?.trailer,
      moTa: editFilm?.moTa,
      ngayKhoiChieu: editFilm?.ngayKhoiChieu,
      dangChieu: editFilm?.dangChieu,
      sapChieu: editFilm?.sapChieu,
      danhGia: editFilm?.danhGia,
      hinhAnh: null,
      maNhom: "GP01",
    },
    onSubmit: (value) => {
      console.log("formik", value);
      let formData = new FormData();

      for (let key in value) {
        if (key !== "hinhAnh") {
          formData.append(key, value[key]);
        } else {
          if (value.hinhAnh !== null) {
            formData.append("file", value.hinhAnh, value.hinhAnh.name);
          }
        }
      }

      if (dispatch(capNhatPhimUpLoadHinh(formData))) {
        alert("Cap nhat thanh cong");
      } else {
        alert("Cap nhat that bai");
      }
    },
  });

  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value);
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
        <h3 className="text-4xl">Ch???nh S???a Phim</h3>
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
            <Input
              name="tenPhim"
              onChange={formik.handleChange}
              value={formik.values.tenPhim}
            />
          </Form.Item>
          <Form.Item label="Trailer">
            <Input
              name="trailer"
              onChange={formik.handleChange}
              value={formik.values.trailer}
            />
          </Form.Item>
          <Form.Item label="M?? t???">
            <Input
              name="moTa"
              onChange={formik.handleChange}
              value={formik.values.moTa}
            />
          </Form.Item>
          <Form.Item label="Ng??y kh???i chi???u">
            <DatePicker
              format={"DD/MM/YYYY"}
              onChange={handleChangeDatePicker}
              value={moment(formik.values.ngayKhoiChieu)}
            />
          </Form.Item>

          <Form.Item label="??ang chi???u" valuePropName="checked">
            <Switch
              name="dangChieu"
              onChange={handleChangeSwitch("dangChieu")}
              checked={formik.values.dangChieu}
            />
          </Form.Item>
          <Form.Item label="S???p chi???u" valuePropName="checked">
            <Switch
              name="sapChieu"
              onChange={handleChangeSwitch("sapChieu")}
              checked={formik.values.sapChieu}
            />
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
              value={formik.values.danhGia}
            />
          </Form.Item>

          <Form.Item label="H??nh ???nh">
            <input type="file" onChange={handleChangeFile} />
            <br />
            <img
              style={{ width: 110, height: 130, objectFit: "cover" }}
              src={imgSrc === "" ? editFilm.hinhAnh : imgSrc}
              alt="pic"
            ></img>
          </Form.Item>

          <Form.Item label="T??c v???">
            <button type="submit">C???p nh???t</button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default EditFilm;
