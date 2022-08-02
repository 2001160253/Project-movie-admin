import axiosClient from "./axiosClient";
const maNhom = "GP01";
const movieAPI = {
  getMovieShowing: (moviePage) => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhimPhanTrang", {
      params: {
        soTrang: moviePage,
        soPhanTuTrenTrang: 12,
      },
    });
  },
  getMovieDetail: (movieID) => {
    return axiosClient.get("QuanLyPhim/LayThongTinPhim", {
      params: {
        maPhim: movieID,
      },
    });
  },
  getThongTinLichChieuPhim: (maPhim) => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        maPhim: maPhim,
      },
    });
  },
  getMovieBanner: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
  },

  getShowTimeTheaterInfo: (theater) => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maHeThongRap: theater,
      },
    });
  },
  getListTheater: () => {
    return axiosClient.get("QuanLyRap/LayThongTinHeThongRap");
  },
  getListTheaterInfo: (theater) => {
    return axiosClient.get("QuanLyRap/LayThongTinCumRapTheoHeThong", {
      params: {
        maHeThongRap: theater,
      },
    });
  },

  getLayDanhSachPhim: (tenPhim = "") => {
    if (tenPhim.trim() != "") {
      return axiosClient.get(
        `QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}&tenPhim=${tenPhim}`
      );
    }
    return axiosClient.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`);
  },
  themPhimUpLoadHinh: (data) => {
    return axiosClient.post("QuanLyPhim/ThemPhimUploadHinh", data);
  },
  capNhatPhimUpLoadHinh: (data) => {
    return axiosClient.post("QuanLyPhim/CapNhatPhimUpload", data);
  },
  deleteFilm: (maPhim) => {
    return axiosClient.delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  },

  LayDanhSachnguoiDung: (account = "") => {
    if (account.trim() != "") {
      return axiosClient.get(
        `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}&tuKhoa=${account}`
      );
    }
    return axiosClient.get(
      `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`
    );
  },
  addUser: (userInfo) => {
    return axiosClient.post("QuanLyNguoiDung/ThemNguoiDung", userInfo);
  },
  getInofUser: (account) => {
    return axiosClient.post(
      `QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${account}`
    );
  },
  updateInfoUser: (infoUser) => {
    return axiosClient.post(
      "QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      infoUser
    );
  },
  deleteUser: (account) => {
    return axiosClient.delete(
      `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${account}`
    );
  },
  accountUser: (info) => {
    return axiosClient.post("QuanLyNguoiDung/DangNhap", info);
  },

  createShowTimeTheater: (data) => {
    return axiosClient.post("QuanLyDatVe/TaoLichChieu", data);
  },
};
export default movieAPI;
