import {
  Button,
  Checkbox,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Select,
  Card,
  Space,
} from "antd";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieAPI from "../../Services/movieAPI";
import moment from "moment";
import HomeTemplates from "../../Templates/adminTemplate";
const { Meta } = Card;
const ShowTime = () => {
  const { id } = useParams();
  const formik = useFormik({
    initialValues: {
      maPhim: id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: async (value) => {
      try {
        console.log(value);
        const result = await movieAPI.createShowTimeTheater(value);
        alert(result);
      } catch (error) {
        alert(error.response.data.content);
      }
    },
    validate: (values) => {
      let errors = {};
      if (values.ngayChieuGioChieu.length === 0) {
        errors.ngayChieuGioChieu = "* Ngày giờ chiếu không được để trống";
      }
      if (values.maRap.length === 0) {
        errors.maRap = "* Cụm rạp không được để trống";
      }
      if (values.giaVe.length === 0) {
        errors.giaVe = "* Giá vé không được để trống";
      }
      return errors;
    },
  });

  const [state, setState] = useState({
    heThongRapChieu: [],
    cumChieuRap: [],
  });
  const [isCheck, setIsCheck] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await movieAPI.getListTheater();
        setState((state) => ({ ...state, heThongRapChieu: result }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleChangeListTheater = async (theater) => {
    try {
      let result = await movieAPI.getListTheaterInfo(theater);
      setState((state) => ({ ...state, cumChieuRap: result }));
      setIsCheck(false);
    } catch (error) {
      console.log(error);
    }
  };
  const converDataListTheater = () => {
    return state.cumChieuRap?.map((lTheater) => ({
      label: lTheater.tenCumRap,
      value: lTheater.maCumRap,
    }));
  };

  const handleChangePicker = (values) => {
    console.log(moment(values).format("DD/MM/YYYY hh:mm:ss"));
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
  };
  const handleChangePrice = (values) => {
    formik.setFieldValue("giaVe", values);
  };
  const convertDataTheater = () => {
    return state.heThongRapChieu?.map((theater, index) => ({
      label: theater.tenHeThongRap,
      value: theater.maHeThongRap,
    }));
  };
  const handleChangeListTheaterInfo = (values) => {
    formik.setFieldValue("maRap", values);
  };

  let film = {};
  if (localStorage.getItem("filmParams")) {
    film = JSON.parse(localStorage.getItem("filmParams"));
  }
  return (
    <>
      <div className="container-fluid d-flex">
        <HomeTemplates />
        <div className="wrapper">
          <h3 className="text-center mt-5">{`Tạo lịch chiếu - ${film.tenPhim}`}</h3>
          <Space
            align="left"
            direction="horizontal"
            size="middle"
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <Card
              hoverable
              style={{
                width: "31.25rem",
                marginTop: "5rem",
              }}
              cover={<img alt={film.tenPhim} src={film.hinhAnh} />}
            >
              <Meta
                title={moment(film.ngayKhoiChieu).format("DD/MM/YYYY hh:mm:ss")}
                description={film.trailer}
              />
            </Card>
            <Form
              name="basic"
              labelCol={{
                span: 10,
              }}
              wrapperCol={{
                span: 20,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={formik.handleSubmit}
            >
              <Form.Item label="Hệ thống rạp">
                <Select
                  options={convertDataTheater()}
                  onChange={handleChangeListTheater}
                  placeholder="Chọn hệ thống rạp"
                />
                {isCheck && (
                  <small className="text-danger d-block">
                    * Vui lòng chọn hệ thống rạp
                  </small>
                )}
              </Form.Item>
              <Form.Item label="Cụm rạp">
                <Select
                  options={converDataListTheater()}
                  onChange={handleChangeListTheaterInfo}
                  placeholder="Chọn cụm rạp"
                />
                {formik.errors.maRap ? (
                  <small className="text-danger d-block">
                    {formik.errors.maRap}
                  </small>
                ) : null}
              </Form.Item>
              <Form.Item label="Ngày chiếu giờ chiếu">
                <DatePicker
                  format="DD/MM/YYYY hh:mm:ss"
                  showTime
                  onChange={handleChangePicker}
                />
                {formik.errors.ngayChieuGioChieu ? (
                  <small className="text-danger d-block">
                    {formik.errors.ngayChieuGioChieu}
                  </small>
                ) : null}
              </Form.Item>
              <Form.Item label="Giá vé">
                <InputNumber
                  min={75000}
                  max={150000}
                  // defaultValue={75000}
                  onChange={handleChangePrice}
                />
                {formik.errors.giaVe ? (
                  <small className="text-danger d-block">
                    {formik.errors.giaVe}
                  </small>
                ) : null}
              </Form.Item>
              <Form.Item label="Chức năng">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </div>
      </div>
    </>
  );
};

export default ShowTime;
