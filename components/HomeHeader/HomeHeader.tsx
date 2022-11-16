import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

export function HomeHeader({ displayLogin }) {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>Excelsium</h1>
      </Link>

      <Link href="/precios">
        <h3>Excelsium</h3>
      </Link>

      {displayLogin && (
        <Link href="auth?login">
          <button>Login</button>
        </Link>
      )}
    </header>
  );
}
