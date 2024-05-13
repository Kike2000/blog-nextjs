import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        Logo
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
}
