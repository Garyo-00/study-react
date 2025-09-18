import { usePosts } from "../../hooks/usePosts";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

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
    <div className={styles.container}>
      <h1 className={styles.h1}>Posts</h1>
      <ol className={styles.ol}>
        {data.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
