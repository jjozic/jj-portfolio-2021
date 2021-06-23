import React from "react";
import Link from "next/link";

import styles from "@/styles/Navigation.module.scss";

const Navigation = () => {
  return (
    <header className={styles.navElement}>
      <nav className={styles.wrapper}>
        <ul>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact Me</Link>
          </li>
          <li className={styles.logoLi}>
            <div className={styles.logo}>JJ</div>
          </li>
          <li>
            <Link href="#projects">Language</Link>
          </li>
          <li>
            <Link href="#resume">Dark Mode</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
