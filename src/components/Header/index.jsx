import Link from "next/link";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
];

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        {NAV_ITEMS.map((item) => {
          return (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          );
        })}
      </header>
    </>
  );
};
