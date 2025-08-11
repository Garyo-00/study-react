import Image from "next/image";
import styles from "./Main.module.css";
import { Links } from "../Links";
import { Headline } from "../Headline";
import { useCallback, useEffect } from "react";

export function Main(props) {
  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "#eaeaea";

    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

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
