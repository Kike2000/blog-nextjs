import React from "react";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Enrique CR</div>
      <div className={styles.text}>ESTO ES EL FOOTER</div>
    </div>
  );
}
