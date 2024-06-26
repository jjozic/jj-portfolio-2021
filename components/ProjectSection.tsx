import ExternalLink from "@/helpers/ExternalLink";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import styles from "@/styles/Projects.module.scss";
import { IProject } from "@/data/data";

export default function Projects({ data }: { data: IProject[] }) {
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
                <ExternalLink link={project.github} title="Github">
                  <FiGithub
                    className={styles.icon}
                    aria-hidden="true"
                    focusable="false"
                  />
                </ExternalLink>
              )}
              {project.website && (
                <ExternalLink link={project.website} title="Open Demo">
                  <FiExternalLink
                    className={styles.icon}
                    aria-hidden="true"
                    focusable="false"
                  />
                </ExternalLink>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
