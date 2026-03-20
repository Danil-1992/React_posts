import React from "react";
import type { postType } from "../../types/postSchema";

export default function PostCard({
  post,
}: {
  post: postType;
}): React.JSX.Element {
  return (
    <div
      style={{
        border: "1px solid orange",
        width: "500px",
        height: "170px",
        borderRadius: "6px",
      }}
    >
      <h3 style={{ textAlign: "center" }}>{post.title}</h3>
      {post.body.length > 100 ? (
        <p style={{ paddingLeft: "15px" }}>{post.body.slice(0, 100)} ...</p>
      ) : (
        <p style={{ paddingLeft: "15px" }}>{post.body}</p>
      )}
      <p style={{textAlign: "center"}}>userId - {post.userId}</p>
    </div>
  );
}
