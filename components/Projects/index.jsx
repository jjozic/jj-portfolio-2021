import Image from "next/image";
import ExternalLink from "helpers/ExternalLink";
import { FiGithub, FiGlobe } from "react-icons/fi";

import styles from "@/styles/Projects.module.scss";

export default function Projects({ projects }) {
  return (
    <section>
      <h2 className="heading">Personal Projects</h2>
      <div className={styles.wrapper}>
        {projects.map((project, index) => (
          <article key={index}>
            <h3>{project.title}</h3>
            {/* <Image src="https://picsum.photos/200/300/?blur" alt="test" width="300" height="200"/> */}
            <project>{project.description}</project>
            <div className="links">
              <ExternalLink href="github.com"><FiGithub/></ExternalLink>
              <ExternalLink href="test.com"><FiGlobe /></ExternalLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
