import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostService } from "../api/post.service";

export const getPosts = createAsyncThunk(
  "posts/limit",
  async ({ page, limit }: { page: number; limit: number }) => {
    const result = PostService.getPost(page, limit);
    return result;
  }
);
