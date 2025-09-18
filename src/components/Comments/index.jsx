import Link from "next/link";
import { useComments } from "../../hooks/useComments";
import styles from "../../styles/Home.module.css";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (error) {
    return <ol>{error.message}</ol>;
  }

  if (isLoading) {
    return <ol>Loading...</ol>;
  }

  if (isEmpty) {
    return <ol>データは空です</ol>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Comments</h1>
      <ol className={styles.ol}>
        {data.map((comment) => {
          return (
            <li key={comment.id}>
              <Link href={`/comments/${comment.id}`}>{comment.name}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
