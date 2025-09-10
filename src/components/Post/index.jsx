import { usePost } from "../../hooks/usePost";

export const Post = () => {
  const { post, error, isLoading, user } = usePost();

  if (isLoading) {
    return <ol>Loading...</ol>;
  }

  if (error) {
    return <ol>{error.message}</ol>;
  }

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      {user?.name ? <div>Created by {user?.name}</div> : null}
    </div>
  );
};
