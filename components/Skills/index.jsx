import styles from "@/styles/Skills.module.scss";

const languages = ["JavaScript", "TypeScript", "HTML", "CSS", "C#", "Java"];
const technologies = ["ReactJS", "NodeJS", "NextJS", "VueJS", "jQuery", "SASS", "REST APIs", "Git"];
const others = ["Agile", "TDD", "FP", "UI Design"];

function Skill({ name, key }) {
  return (
    <span className={styles.skillElement} key={key}>
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section>
      <h2 className="heading">Skills</h2>
      <div className={styles.wrapper}>
        <div>
          <h3>Languages:</h3>
          <div className={styles.skills}>
            {languages.map((language, index) => (
              <Skill name={language} key={index} />
            ))}
          </div>
        </div>
        <div>
          <h3>Technologies:</h3>
          <div className={styles.skills}>
            {technologies.map((technology, index) => (
              <Skill name={technology} key={index} />
            ))}
          </div>
        </div>
        <div>
          <h3>Other:</h3>
          <div className={styles.skills}>
            {others.map((other, index) => (
              <Skill name={other} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
