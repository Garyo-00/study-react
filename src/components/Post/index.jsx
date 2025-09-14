import { usePost } from "../../hooks/usePost";
import styles from "../../styles/Children.module.css";

export const Post = () => {
  const { post, error, isLoading, user } = usePost();

  if (isLoading) {
    return <ol>Loading...</ol>;
  }

  if (error) {
    return <ol>{error.message}</ol>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{post?.title}</h1>
      <p className={styles.p}>{post?.body}</p>
      {user?.name ? <div>Created by {user?.name}</div> : null}
    </div>
  );
};
