import PostList from "@/widgets/post-list/ui/PostList";

export default function PostPage(): React.JSX.Element {
  return (
    <div>
      <p
        style={{ textAlign: "center", fontSize: "20px", fontWeight: "bolder" }}
      >
        Посты
      </p>
      <PostList />
    </div>
  );
}
