import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";

const inititalState = {
  listUser: [],
};

export const LayDanhSachnguoiDung = createAsyncThunk(
  "listUser/LayDanhSachnguoiDung",
  async (maNhom) => {
    const data = movieAPI.LayDanhSachnguoiDung(maNhom);
    return data;
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
  },
});
export default listUser.reducer;
