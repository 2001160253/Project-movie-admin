import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";

const inititalState = {
  listFilm: [],
};

export const getLayDanhSachPhim = createAsyncThunk(
  "listFilm/getLayDanhSachPhim",
  async (maNhom) => {
    const data = movieAPI.getLayDanhSachPhim(maNhom);
    return data;
  }
);
const listFilm = createSlice({
  name: "listFilm",
  initialState: inititalState,
  reducers: {},
  extraReducers: {
    [getLayDanhSachPhim.fulfilled]: (state, { payload }) => {
      state.listFilm = payload;
    },
  },
});
export default listFilm.reducer;
