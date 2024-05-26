import { ISkill } from "@/data/data";
import styles from "@/styles/Skills.module.scss";

export default function Skills({ data }: { data: ISkill[] }) {
  return (
    <section>
      <h2 className="heading">
        Skills
        <span id="skills" className="anchorOffset"></span>
      </h2>
      <div className={styles.wrapper}>
        {data.map((s, index) => (
          <div key={index}>
            <h3>{s.name}</h3>
            <div className={styles.skills}>
              {s.skills?.map((language, index) => (
                <Skill name={language} key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skill({ name, key }: { name: string; key: number }) {
  return (
    <span className={styles.skillElement} key={key}>
      {name}
    </span>
  );
}
