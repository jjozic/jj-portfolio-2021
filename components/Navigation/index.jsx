import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

import styles from "@/styles/Navigation.module.scss";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className={styles.navElement}>
      <nav className={styles.wrapper}>
        <div>
          <Link href="/" passHref onClick={() => window.scrollTo({ top: 0 })}>
            <div className={styles.logo}>JJ</div>
          </Link>
          <ul className={styles.sectionsWrapper}>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#experience">Experience</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
          </ul>
          <button className={styles.toggleBtn} onClick={changeTheme}>
            {theme === "light" ? (
              <FiMoon aria-label="Change to light mode" />
            ) : (
              <FiSun aria-label="Change to dark mode" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
