import Image from "next/image";
import styles from "./Links.module.css";
import { useCallback, useState } from "react";

export const Links = (props) => {
  return (
    <div className={styles.ctas}>
      {props.items.map((item) => {
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
};
