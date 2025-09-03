import Image from "next/image";
import styles from "./Links.module.css";
import { useCallback, useState } from "react";

export function Links({ items, handleReduce }) {
  return (
    <div className={styles.ctas}>
      {items.map((item) => {
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
