import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import ExternalLink from "@/helpers/ExternalLink";
import styles from "@/styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.links}>
        <ExternalLink link="mailto:jjozic98@gmail.com" title="My Email">
          <FiMail className={styles.icon} />
        </ExternalLink>
        <ExternalLink
          link="https://www.linkedin.com/in/jjozic"
          title="LinkedIn Profile"
        >
          <FiLinkedin className={styles.icon} />
        </ExternalLink>
        <ExternalLink link="https://github.com/jjozic" title="Github profile">
          <FiGithub className={styles.icon} />
        </ExternalLink>
      </div>
      <p>©{new Date().getFullYear()} Julian Jozic - Built with Next.js</p>
    </footer>
  );
};

export default Footer;
