import { FiGithub, FiMail } from "react-icons/fi";
import Image from "next/image";
import profilePic from "./me.png";

import ExternalLink from "helpers/ExternalLink";
import styles from "@/styles/Introduction.module.scss";

export default function Introduction() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.introduction}>
        <h1>Hi, I&apos;m <strong>Julian Jozic!</strong></h1>
        <p>
          I&apos;m a frontend-engineer, who also likes designing and working
          with the backend if I need to!
        </p>
        <div className={styles.links}>
          <ExternalLink link="mailto:jjozic98@gmail.com">
            <FiMail /> Contact Me
          </ExternalLink>
          <ExternalLink link="https://github.com/jjozic">
            <FiGithub /> Github
          </ExternalLink>
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <Image src={profilePic} alt="Picture of me" height={150} width={150} />
      </div>
    </div>
  );
}
