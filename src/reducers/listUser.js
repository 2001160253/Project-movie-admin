import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";

const inititalState = {
  listUser: [],
  infoUser: {},
};

export const LayDanhSachnguoiDung = createAsyncThunk(
  "listUser/LayDanhSachnguoiDung",
  async (maNhom) => {
    const data = movieAPI.LayDanhSachnguoiDung(maNhom);
    return data;
  }
);
export const addUser = createAsyncThunk(
  "listUser/addUser",
  async (userInfo) => {
    return await movieAPI.addUser(userInfo);
  }
);

export const updateInfoUser = createAsyncThunk(
  "listUser/updateInfoUser",
  async (userInfo) => {
    return await movieAPI.updateInfoUser(userInfo);
  }
);
export const deleteUser = createAsyncThunk(
  "listUser/deleteUser",
  async (account) => {
    return await movieAPI.deleteUser(account);
  }
);
const listUser = createSlice({
  name: "listUser",
  initialState: inititalState,
  reducers: {},
  extraReducers: {
    [LayDanhSachnguoiDung.fulfilled]: (state, { payload }) => {
      state.listUser = payload;
    },
    [addUser.fulfilled]: (state, { payload }) => {
      alert("Đăng ký thành công");
    },
    [addUser.rejected]: (state, { payload }) => {
      alert("Tài khoản hoặc email đã tồn tại!");
    },

    [updateInfoUser.fulfilled]: (state, { payload }) => {
      alert("Cập nhật thành công");
    },
    [updateInfoUser.rejected]: (state, { payload }) => {
      alert(payload);
    },
    [deleteUser.rejected]: () => {
      alert(
        "Tài khoản đã quá cổ lên không thể xóa!Mời bạn tạo thêm người dùng"
      );
    },
  },
});
export default listUser.reducer;
