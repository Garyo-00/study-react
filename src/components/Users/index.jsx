import { useUsers } from "../../hooks/useUsers";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export const Users = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

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
      <h1 className={styles.h1}>Users</h1>
      <ol className={styles.ol}>
        {data.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
