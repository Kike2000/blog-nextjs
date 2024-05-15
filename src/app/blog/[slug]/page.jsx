import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

export default function SinglePost() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/20890490/pexels-photo-20890490/free-photo-of-monastiraki-square.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/20890490/pexels-photo-20890490/free-photo-of-monastiraki-square.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Enrique CR</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          perferendis omnis architecto, quam illo voluptate, officiis sunt,
          commodi ipsa aliquid similique exercitationem quaerat quis suscipit
          maxime voluptatum! Eaque, modi reiciendis.
        </div>
      </div>
    </div>
  );
}
