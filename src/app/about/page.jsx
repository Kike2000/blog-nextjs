import Image from "next/image";
import React from "react";
import aboutImg from "../../../public/about.png";
import styles from "./about.module.css";
export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.description}>Testestestestestestestestestest</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button} href="/contact">
            Contact
          </button>
        </div>
        <div className={styles.brands}>
          <Image src="/about.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.brandImg} />
      </div>
    </div>
  );
}
