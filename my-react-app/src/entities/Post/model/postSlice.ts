import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postThunks";
import type { postType } from "../types/postSchema";

type initialStateType = {
  posts: Record<number, postType[]> | null;
  loading: boolean;
  loadingMore: boolean;
  error: string | null;
  currentPage: number;
};

const initialState: initialStateType = {
  posts: null,
  loading: false,
  loadingMore: false,
  error: null,
  currentPage: 1,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPage(state) {
      state.currentPage = state.currentPage + 1;
    },
    setPageBack(state) {
      state.currentPage -= 1;
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(getPosts.pending, (state) => {
        if (state.posts === null) {
          state.loading = true;
        } else {
          state.loadingMore = true;
        }
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        if (payload.length > 0) {
          if (state.posts === null) {
            state.posts = { [state.currentPage]: payload };
          } else {
            state.posts = { ...state.posts, [state.currentPage]: payload };
          }
        }
        state.loading = false;
        state.loadingMore = false;
        state.error = null;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.loadingMore = false;
        state.error = action.error.message ?? "Ошибка при загрузк постов";
      });
  },
});

export default postsSlice.reducer;
export const { setPage, setPageBack } = postsSlice.actions;
