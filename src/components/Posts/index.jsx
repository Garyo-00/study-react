import { usePosts } from "../../hooks/usePosts";

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    return <ol>Loading...</ol>;
  }

  if (error) {
    return <ol>{error.message}</ol>;
  }

  if (isEmpty) {
    return <ol>データは空です</ol>;
  }

  return (
    <>
      <ol>
        {data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ol>
    </>
  );
};
