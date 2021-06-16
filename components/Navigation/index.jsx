import React from "react";
import Link from "next/link";

import styles from '@/styles/Navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.navElement}>
      <div className={styles.wrapper}>
        <div>img</div>
        <div>
          <Link href="#projects">Projects</Link>
          <Link href="#resume">Resumé</Link>
          <Link href="#contact">Contact Me</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
