import ExternalLink from "helpers/ExternalLink";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import styles from "@/styles/Projects.module.scss";

export default function Projects({ data }) {
  return (
    <section id="projects">
      <h2 className="heading">Personal Projects</h2>
      <div className={styles.wrapper}>
        {data.map((project, index) => (
          <article key={index}>
            <h3>{project.title}</h3>
            <div>{project.stack}</div>
            <div className={styles.links}>
              {project.github && (
                <ExternalLink link={project.github}>
                  <FiGithub className={styles.icon} />
                </ExternalLink>
              )}
              {project.website && (
                <ExternalLink link={project.website}>
                  <FiExternalLink className={styles.icon} />
                </ExternalLink>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
