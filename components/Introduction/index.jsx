import { FiGithub, FiMail } from "react-icons/fi";
import Image from "next/image";
import profilePic from "./me.webp";

import ExternalLink from "helpers/ExternalLink";
import styles from "@/styles/Introduction.module.scss";

export default function Introduction() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.introduction}>
        <h1>
          Hi, I&apos;m <strong>Julian Jozic!</strong>
        </h1>
        <p>
          I&apos;m a Front End Developer, with a love for modern technologies &
          UIs!
        </p>
        <div className={styles.links}>
          <ExternalLink link="mailto:jjozic98@gmail.com">
            <FiMail aria-hidden="true" focusable="false" /> Contact Me
          </ExternalLink>
          <ExternalLink link="https://github.com/jjozic">
            <FiGithub aria-hidden="true" focusable="false" /> Github
          </ExternalLink>
        </div>
      </div>
      <div
        className={`${styles.imgWrapper}
        pattern-dots-md gray-light`}
      >
        <Image
          alt="Picture of me"
          src={profilePic}
          loading="eager"
          placeholder="blur"
          height={150}
          width={150}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </section>
  );
}
