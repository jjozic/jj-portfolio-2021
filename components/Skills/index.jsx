import styles from "@/styles/Skills.module.scss";

function Skill({ name, key }) {
  return (
    <span className={styles.skillElement} key={key}>
      {name}
    </span>
  );
}

export default function Skills({ data }) {
  return (
    <section>
      <h2 className="heading">Skills</h2>
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
