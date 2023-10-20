import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blog: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    createNewBlog: (state, action) => {
      state.blog = [...state.user, action.payload];
    },
  },
});

export const { createNewBlog } = blogSlice.actions;

export default blogSlice.reducer;
