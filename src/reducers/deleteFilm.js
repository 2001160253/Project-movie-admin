import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";

const inititalState = {
  xoaPhim: [],
};

export const deleteFilm = createAsyncThunk(
  "xoaPhim/xoaPhim",
  async (fmdata) => {
    const data = movieAPI.deleteFilm(fmdata);
    return data;
  }
);
const xoaPhim = createSlice({
  name: "xoaPhim",
  initialState: inititalState,
  reducers: {},
  extraReducers: {
    [deleteFilm.fulfilled]: (state, { payload }) => {
      state.xoaPhim = payload;
    },
  },
});
export default xoaPhim.reducer;
