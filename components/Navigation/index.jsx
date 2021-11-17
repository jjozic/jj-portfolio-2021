import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

import styles from "@/styles/Navigation.module.scss";

const Navigation = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <header className={styles.navElement}>
      <nav className={styles.wrapper}>
        <ul>
          <li className={styles.logoLi}>
            <Link href="/" passHref onClick={() => window.scrollTo({ top: 0 })}>
              <div className={styles.logo}>JJ</div>
            </Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <button className={styles.toggleBtn} onClick={changeTheme}>
              {theme === "light" ? (
                <FiMoon aria-label="Change to light mode" />
              ) : (
                <FiSun aria-label="Change to dark mode" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
