import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";

const inititalState = {
  updateFilm: [],
};

export const capNhatPhimUpLoadHinh = createAsyncThunk(
  "listFilm/getLayDanhSachPhim",
  async (fmdata) => {
    const data = movieAPI.capNhatPhimUpLoadHinh(fmdata);
    return data;
  }
);
const updateFilm = createSlice({
  name: "updateFilm",
  initialState: inititalState,
  reducers: {},
  extraReducers: {
    [capNhatPhimUpLoadHinh.fulfilled]: (state, { payload }) => {
      state.updateFilm = payload;
    },
  },
});
export default updateFilm.reducer;
