import styles from "@/styles/Skills.module.scss";

const languages = ["JavaScript", "TypeScript", "HTML", "CSS", "C#", "Java"];
const technologies = ["ReactJS", "NodeJS", "NextJS", "VueJS", "jQuery", "SASS", "REST APIs", "Git"];
const others = ["Agile", "TDD", "FP", "UI Design"];

function Skill({ name, key }) {
  return (
    <div className={styles.skillElement} key={key}>
      {name}
    </div>
  );
}

export default function Skills() {
  return (
    <div>
      <h2 className="heading">Skills</h2>
      <div className={styles.wrapper}>
        <p>
          Languages:
          {languages.map((language, index) => (
            <Skill name={language} key={index} />
          ))}
        </p>
        <p>
          Technologies:
          {technologies.map((technology, index) => (
            <Skill name={technology} key={index} />
          ))}
        </p>
        <p>
          Other:
          {others.map((other, index) => (
            <Skill name={other} key={index} />
          ))}
        </p>
      </div>
    </div>
  );
}
