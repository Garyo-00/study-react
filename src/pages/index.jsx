import Head from "next/head";
import { Header } from "@/components/Header/index";
import styles from "../styles/Home.module.css";

const Index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1 className={styles.h1}>Next.jsで学ぶReact講座</h1>
      <p className={styles.p}>JSON PlaceholderのAPIを叩きます</p>
    </div>
  );
};

export default Index;
