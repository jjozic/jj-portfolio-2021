import React, { useState } from "react";
import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";

import styles from "@/styles/Navigation.module.scss";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <header className={styles.navElement}>
      <nav className={styles.wrapper}>
        <ul>
          <li>
            <Link href="projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact Me</Link>
          </li>
          <li className={styles.logoLi}>
            <Link href="/" passHref>
              <div className={styles.logo}>&#123;JJ&#125;</div>
            </Link>
          </li>
          <li>
            <Link href="#">Language</Link>
          </li>
          <li>
            <button className={styles.toggleBtn} onClick={handleClick}>
              {toggle ? <FiMoon /> : <FiSun />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
