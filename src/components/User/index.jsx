import { useUser } from "../../hooks/useUser";
import styles from "../../styles/Children.module.css";

export const User = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <ol>Loading...</ol>;
  }

  if (error) {
    return <ol>{error.message}</ol>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{user?.name}</h1>
      <p className={styles.p}>Username : {user?.username}</p>
      <ol className={styles.ol}>
        <li>Company : {user?.company.name}</li>
        <li>Website : {user?.website}</li>
        <li>Email : {user?.email}</li>
        <li>Phone : {user?.phone}</li>
      </ol>
    </div>
  );
};
