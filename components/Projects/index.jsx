import { useState } from "react";
import Image from "next/image";

import styles from "@/styles/Projects.module.scss";
import { project } from "../../data/projects.js";

export const getStaticProps = async () => {
  return {
    props: {
      data: project,
    },
  };
};

export default function Projects({ data }) {
  return (
    <section>
      <h2 className="heading">Personal Projects</h2>
      <div className={styles.wrapper}>
        {data.map((p) => {
          <article>
            <h3>{p.title}</h3>
            <Image src={p.image} alt="test" />
            <p>{p.description}</p>
          </article>;
        })}
      </div>
    </section>
  );
}
