import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ModalSuccess from "../components/modals/ModalSuccess";
import movieAPI from "../Services/movieAPI";
let user = null;
if (localStorage.getItem("userAdmin")) {
  user = JSON.parse(localStorage.getItem("userAdmin"));
}
const inititalState = {
  userLogin: user,
};

export const userLoginActive = createAsyncThunk(
  "userLogin/userLoginActive",
  async (info) => {
    const data = await movieAPI.accountUser(info);
    return data;
  }
);

const userSlice = createSlice({
  name: "userLogin",
  initialState: inititalState,
  reducers: {
    deleteUserLoginAdmin: (state) => {
      state.userLogin = null;
      localStorage.removeItem("userAdmin");
    },
  },
  extraReducers: {
    [userLoginActive.fulfilled]: (state, { payload }) => {
      if (payload.maLoaiNguoiDung === "QuanTri") {
        state.userLogin = payload;
        localStorage.setItem("userAdmin", JSON.stringify(payload));
      } else {
        alert("Bạn không Có quyền truy cập trang này");
      }
    },
    [userLoginActive.rejected]: (state, { payload }) => {
      alert("Tài khoản hoặc mật khẩu không chính xác");
    },
  },
});
export const { deleteUserLoginAdmin } = userSlice.actions;
export default userSlice.reducer;
