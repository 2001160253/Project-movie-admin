import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";

const inititalState = {
  editFilm: [],
};

export const getMovieDetail = createAsyncThunk(
  "edit/LayThongTinPhim",
  async (id) => {
    const data = movieAPI.getMovieDetail(id);
    return data;
  }
);
const getFilm = createSlice({
  name: "edit",
  initialState: inititalState,
  reducers: {},
  extraReducers: {
    [getMovieDetail.fulfilled]: (state, { payload }) => {
      state.editFilm = payload;
    },
  },
});
export default getFilm.reducer;
