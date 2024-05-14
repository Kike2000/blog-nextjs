import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";
export default function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/20890490/pexels-photo-20890490/free-photo-of-monastiraki-square.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          nihil eius, atque officiis excepturi enim cupiditate, veniam ipsa
          doloremque voluptas nobis fugit dolore! Fuga nulla expedita sequi quam
          distinctio soluta.
        </p>
        <Link href="/blog/post" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}
