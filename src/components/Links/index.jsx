import Image from "next/image";
import styles from "./Links.module.css";

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

export function Links() {
  return (
    <div className={styles.ctas}>
      {ITEMS.map((item) => {
        return (
          <a key={item.href} href={item.href} className={styles.primary}>
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            {item.title}
          </a>
        );
      })}
    </div>
  );
}
