import { FiGithub, FiInstagram, FiMail } from "react-icons/fi";

import ExternalLink from "@/helpers/ExternalLink";
import styles from "@/styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.links}>
        <ExternalLink link="mailto:jjozic98@gmail.com">
          <FiMail className={styles.icon}/>
        </ExternalLink>
        <ExternalLink link="https://instagram.com/julianjozic">
          <FiInstagram className={styles.icon}/>
        </ExternalLink>
        <ExternalLink link="https://github.com/jjozic">
          <FiGithub className={styles.icon}/>
        </ExternalLink>
      </div>
    </footer>
  );
};

export default Footer;
