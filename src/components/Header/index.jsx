import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">Index</Link>
        <Link href="/about">About</Link>
      </header>
    </>
  );
}
