import { getPosts } from "@/entities/Post/model/postThunks";
import PostCard from "@/entities/Post/ui/PostCard/PostCard";
import LoadMoreButton from "@/features/LoadMore/ui/LoadMoreButton";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import React, { useEffect } from "react";
import styles from "./postList.module.css";

export default function PostList(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const { posts, error, currentPage, loading, loadingMore } = useAppSelector(
    (state) => state.posts
  );
  const limit = 10;
  const currentPosts = posts?.[currentPage];

  useEffect(() => {
    dispatch(getPosts({ page: currentPage, limit }));
  }, [currentPage]);

  if (loading) {
    return <div className={styles.loadingOverlay}>Загрузка...</div>;
  }
  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorText}>{error}</div>
        <div>
          <LoadMoreButton />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.cardPlace}>
        {currentPosts?.map((post) => (
          <div key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
      {loadingMore && (
        <div className={styles.spinner}>
          <img src="/src/assets/icons8-спиннер.gif" alt="Спиннер" />
        </div>
      )}
      <div className={styles.placeButton}>
        <LoadMoreButton />
      </div>
    </div>
  );
}
