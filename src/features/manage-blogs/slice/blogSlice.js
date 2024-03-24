import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { blogApi } from "../api/blogApi";


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
    try {
      const response = await blogApi.endpoints.getAllBlogCategories();

      console.log('responseee', response);
      return response.data; 
    } catch (error) {
      throw new Error("Failed to fetch blog categories: " + error);
    }
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
export const deleteBlogCategory = createAsyncThunk(
  "blogs/deleteBlogCategory",
  async (categoryId) => {
    const response = await blogApi.endpoints.deleteBlogCategory(categoryId);
    console.log('dattttaaaaaaa',response)
    return response.data;
  }
);
const initialState = {
  blogs: [],
  categories: [],
  status: "idle",
  error: null,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
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
      })
      .addCase(deleteBlogCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = state.categories.filter(
          (category) => category._id !== action.payload.categoryId
        );
      });
  },
});

export default blogSlice.reducer;

export const selectAllBlogs = (state) => state.blogs.blogs;
export const selectAllBlogCategories = (state) => state.blogs.categories;
export const selectBlogsStatus = (state) => state.blogs.status;
export const selectBlogsError = (state) => state.blogs.error;
