import { setPage } from "@/entities/Post/model/postSlice";
import { getPosts } from "@/entities/Post/model/postThunks";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import React, { useState } from "react";

export default function LoadMoreButton(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const limit = 10;
  const { currentPage } = useAppSelector((state) => state.posts);
  const [noMorePosts, setNoMorePosts] = useState(false);
  const loadMore = async () => {
    const nextPage = currentPage + 1;
    const posts = await dispatch(getPosts({ page: nextPage, limit }));
    if (getPosts.fulfilled.match(posts)) {
      if (posts.payload.length === 0) {
        setNoMorePosts(true);
      } else {
        dispatch(setPage());
      }
    }
  };
  return (
    <div>
      <button
        onClick={loadMore}
        disabled={noMorePosts}
        style={{
          fontSize: "17px",
          background: noMorePosts ? "#ccc" : "gray",
          color: "white",
          cursor: noMorePosts ? "not-allowed" : "pointer",
          opacity: noMorePosts ? 0.5 : 1,
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
        }}
      >
        {noMorePosts ? "Все посты загружены" : "Загрузить больше"}
      </button>
    </div>
  );
}
