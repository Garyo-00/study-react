import { useComment } from "../../hooks/useComment";
import styles from "../../styles/Children.module.css";

export const Comment = () => {
  const { comment, error, isLoading } = useComment();

  if (isLoading) {
    return <ol>Loading...</ol>;
  }

  if (error) {
    return <ol>{error.message}</ol>;
  }

  if (!comment) {
    return <ol>データは空です</ol>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{comment?.name}</h1>
      <p className={styles.p}>{comment?.body}</p>
    </div>
  );
};
