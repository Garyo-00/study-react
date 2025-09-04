import Image from "next/image";
import styles from "./Main.module.css";
import { Links } from "../Links";
import { Headline } from "../Headline";
import { useCallback, useState } from "react";

const ITEMS = [
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy now",
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Read our docs",
  },
  {
    href: "https://vercel.com/garyos-projects/~/activity",
    title: "My activity",
  },
  {
    href: "https://vercel.com/garyos-projects",
    title: "My projects",
  },
];

export const Main = (props) => {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => items.slice(0, prevItems.length - 1));
  }, [items]);

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
      <Headline page={props.page} handleReduce={handleReduce}>
        <code>{items.length}</code>.
      </Headline>
      <Links items={items} handleReduce={handleReduce} />
    </main>
  );
};
