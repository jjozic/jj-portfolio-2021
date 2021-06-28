import Image from "next/image";

import styles from "@/styles/Projects.module.scss";
import { project } from "../../data/data";

export default function Projects({ projects }) {
  return (
    <section>
      <h2 className="heading">Personal Projects</h2>
      <div className={styles.wrapper}>
        {projects.map((p, i) => (
          <article key={i}>
            <h3>{p.title}</h3>
            <Image src={p.image} alt="test" layout="fill" />
            <p>{p.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
