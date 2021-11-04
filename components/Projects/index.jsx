import Image from "next/image";
import ExternalLink from "helpers/ExternalLink";
import { FiGithub, FiGlobe } from "react-icons/fi";

import styles from "@/styles/Projects.module.scss";

export default function Projects({ data }) {
  return (
    <section id="projects">
      <h2 className="heading">Personal Projects</h2>
      <div className={styles.wrapper}>
        {data.map((project, index) => (
          <article key={index}>
            <h3>{project.title}</h3>
            <div>{project.description}</div>
            <div className={styles.links}>
              <ExternalLink link={project.github}>
                <FiGithub className={styles.icon} />
              </ExternalLink>
              <ExternalLink link={project.website}>
                <FiGlobe className={styles.icon} />
              </ExternalLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
