import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const blogCategorySlice = createSlice({
  name: "blogCategory",
  initialState,
  reducers: {
    updateCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { updateCategories } = blogCategorySlice.actions;
export default blogCategorySlice.reducer;


