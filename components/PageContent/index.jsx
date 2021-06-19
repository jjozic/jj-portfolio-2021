import { FiGithub, FiMail } from "react-icons/fi";

import styles from "@/styles/PageContent.module.scss";
import ExternalLink from "helpers/ExternalLink";

const PageContent = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1>Hi, I&apos;m Julian Jozic!</h1>
        <p>
          I&apos;m a frontend-engineer, who also likes designing and working
          with the backend if I need to!
        </p>
        <div className={styles.links}>
          <ExternalLink link="mailto:jjozic98@gmail.com"><FiMail /> Contact Me</ExternalLink>
          <ExternalLink link="https://github.com/jjozic"><FiGithub /> Github</ExternalLink>
        </div>
      </div>
    </>
  );
};

export default PageContent;
