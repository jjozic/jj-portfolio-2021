import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import ExternalLink from "@/helpers/ExternalLink";
import styles from "@/styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.links}>
        <ExternalLink link="mailto:jjozic98@gmail.com">
          <FiMail className={styles.icon} />
        </ExternalLink>
        <ExternalLink link="https://www.linkedin.com/in/jjozic">
          <FiLinkedin className={styles.icon} />
        </ExternalLink>
        <ExternalLink link="https://github.com/jjozic">
          <FiGithub className={styles.icon} />
        </ExternalLink>
      </div>
      <p>©2021 Julian Jozic - Built with Next.js</p>
    </footer>
  );
};

export default Footer;
