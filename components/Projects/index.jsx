import Image from "next/image";
import Link from 'next/link';

import styles from "@/styles/Projects.module.scss";

export default function Projects({ projects }) {
  return (
    <section>
      <h2 className="heading">Personal Projects</h2>
      <div className={styles.wrapper}>
        {projects.map((p, i) => (
          <article key={i}>
            <h3>{p.title}</h3>
            {/* <Image src="https://picsum.photos/200/300/?blur" alt="test" width="300" height="200"/> */}
            <p>{p.description}</p>
            <div className="links">
              <Link href="github.com">Github</Link>
              <Link href="test.com">Live</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
