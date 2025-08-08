import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Links } from "../components/Links";
import { Headline } from "../components/Headline";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <Headline page={props.page}>
        {props.page} Page <code>pages/{props.page}.js</code>.
      </Headline>
      <Links />
    </main>
  );
}
