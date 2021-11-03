import styles from "@/styles/Experience.module.scss";

export default function Experience({ data }) {
  return (
    <section>
      <h2 className="heading">Work Experience</h2>
      {data?.map((experience, index) => (
        <div key={index} className={styles.experience}>
          <div className={styles.expHeader}>
            <div className={styles.duration}>{experience.duration}</div>
            <div className={styles.name}>{experience.name}</div>
            <div className={styles.role}>{experience.role}</div>
          </div>
          <ul className={styles.expDescription}>
            {experience?.points?.map((point, index) => (
              <li key={index}>{point.content}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
