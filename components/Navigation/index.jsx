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
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact Me</Link>
          </li>
          <li className={styles.logoLi}>
            <Link href="/" passHref>
              <div className={styles.logo}>JJ</div>
            </Link>
          </li>
          <li>
            <Link href="#">Language</Link>
          </li>
          <li>
            <button className={styles.toggleBtn} onClick={changeTheme}>
              {theme === "light" ? <FiMoon /> : <FiSun />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
