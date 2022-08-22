// Import createAsyncThunk and createSlice here.
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Create loadCommentsForArticleId here.
export const loadCommentsForArticleId = createAsyncThunk(
  "comments/loadCommentsForArticleId",
  async (id, thunkAPI) => {
    const response = await fetch(`api/articles/${id}/comments`);
    const json = await response.json();
    console.log(json);
    return json;
  }
);
// Create postCommentForArticleId here.

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    // Add initial state properties here.
    byArticleId: {},
    isLoadingComments: false,
    failedToLoadComments: false,
  },
  // Add extraReducers here.
  extraReducers: {
    [loadCommentsForArticleId.pending]: (state) => {
      state.isLoadingComments = true;
    },
    [loadCommentsForArticleId.fulfilled]: (state, action) => {
      state.isLoadingComments = false;
      state.failedToLoadComments = false;
      console.log(action.payload);
      const commentsArr = action.payload.comments.map((obj) => obj.text);
      state.byArticleId = {
        [action.payload.articleId]: commentsArr,
      };
    },
    [loadCommentsForArticleId.rejected]: (state) => {
      state.failedToLoadComments = true;
    },
  },
});

export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const createCommentIsPending = (state) =>
  state.comments.createCommentIsPending;

export default commentsSlice.reducer;
