import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";

const inititalState = {
  addFilm: [],
};

export const themPhimUpLoadHinh = createAsyncThunk(
  "listFilm/getLayDanhSachPhim",
  async (fmdata) => {
    const data = movieAPI.themPhimUpLoadHinh(fmdata);
    return data;
  }
);
const addFilm = createSlice({
  name: "addFilm",
  initialState: inititalState,
  reducers: {},
  extraReducers: {
    [themPhimUpLoadHinh.fulfilled]: (state, { payload }) => {
      state.addFilm = payload;
    },
  },
});
export default addFilm.reducer;
