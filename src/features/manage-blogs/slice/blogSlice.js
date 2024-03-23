import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { blogApi } from "../api/blogApi";

// Thunks for fetching data
export const fetchAllBlogs = createAsyncThunk(
  "blogs/fetchAllBlogs",
  async () => {
    const response = await blogApi.endpoints.getAllBlogs();
    return response.data;
  }
);

export const fetchAllBlogCategories = createAsyncThunk(
  "blogs/fetchAllBlogCategories",
  async () => {
    const response = await blogApi.endpoints.getAllBlogCategories();
    return response.data;
  }
);

export const addNewBlog = createAsyncThunk(
  "blogs/addNewBlog",
  async (blogData) => {
    const response = await blogApi.endpoints.addBlog(blogData);
    return response.data;
  }
);

export const addNewBlogCategory = createAsyncThunk(
  "blogs/addNewBlogCategory",
  async (categoryData) => {
    const response = await blogApi.endpoints.addBlogCategory(categoryData);
    console.log("Response from addNewBlogCategory:", response.data);
    return response.data;
  }
);

export const updateBlogCategory = createAsyncThunk(
  "blogs/updateBlogCategory",
  async (categoryData) => {
    const response = await blogApi.endpoints.updateBlogCategory(categoryData);
    return response.data;
  }
);

// Initial state
const initialState = {
  blogs: [],
  categories: [],
  status: "idle",
  error: null,
};

// Slice for managing state
const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    // Reducer for adding a new blog to the state
    addNewBlogToState: (state, action) => {
      state.blogs.push(action.payload);
    },
    // Reducer for adding a new category to the state
    addNewCategoryToState: (state, action) => {
      state.categories.push(action.payload);
    },
    // Reducer for updating a category in the state
    updateCategoryInState: (state, action) => {
      const updatedCategory = action.payload;
      state.categories = state.categories.map((category) =>
        category._id === updatedCategory._id ? updatedCategory : category
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blogs = action.payload;
      })
      .addCase(fetchAllBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchAllBlogCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllBlogCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchAllBlogCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewBlog.fulfilled, (state, action) => {
        state.blogs.push(action.payload);
      })
      .addCase(addNewBlogCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(updateBlogCategory.fulfilled, (state, action) => {
        const updatedCategory = action.payload;
        state.categories = state.categories.map((category) =>
          category._id === updatedCategory._id ? updatedCategory : category
        );
      });
  },
});

export const {
  addNewBlogToState,
  addNewCategoryToState,
  updateCategoryInState,
} = blogSlice.actions;

export default blogSlice.reducer;

// Selectors
export const selectAllBlogs = (state) => state.blogs.blogs;
export const selectAllBlogCategories = (state) => state.blogs.categories;
export const selectBlogsStatus = (state) => state.blogs.status;
export const selectBlogsError = (state) => state.blogs.error;
