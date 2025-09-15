import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useComments } from "../../hooks/useComments";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Commments = () => {
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
    <>
      <title>comments</title>
      <Header />
      <h1 className={styles.h1}>Commments</h1>
      <ol className={styles.ol}>
        {data.map((comment) => {
          return (
            <li key={comment.id}>
              <Link href={`/commments/${comment.id}`}>{comment.name}</Link>
            </li>
          );
        })}
      </ol>

      <Footer />
    </>
  );
};

export default Commments;
