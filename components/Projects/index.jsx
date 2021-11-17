import ExternalLink from "helpers/ExternalLink";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import styles from "@/styles/Projects.module.scss";

export default function Projects({ data }) {
  return (
    <section>
      <h2 className="heading">
        Personal Projects
        <span id="projects" className="anchorOffset"></span>
      </h2>
      <div className={styles.wrapper}>
        {data.map((project, index) => (
          <article key={index}>
            <h3 className={styles.heading}>{project.title}</h3>
            <div className={styles.desc}>{project.description}</div>
            {project.stack && (
              <div className={styles.stack}>
                <b>Stack:</b> {project.stack}
              </div>
            )}
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
