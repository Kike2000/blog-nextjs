"use client";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { title } from "process";
import path from "path";

export default function Links() {
  const Links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  const [open, setOpen] = useState(false);
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {Links.map((link, index) => (
          <NavLink key={index} item={link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/Login" }} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {Links.map((link, index) => (
            <NavLink key={index} item={link} />
          ))}{" "}
        </div>
      )}
    </div>
  );
}
