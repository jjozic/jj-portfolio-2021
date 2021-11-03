import styles from "@/styles/Experience.module.scss";

export default function Experience() {
  return (
    <section>
      <h2 className="heading">Work Experience</h2>
      <div className={styles.experience}>
        <div className={styles.expHeader}>
          <div className={styles.date}>Jul 2020 - Current</div>
          <div className={styles.name}>RIS GMBH</div>
          <div className={styles.role}>Front-End Developer</div>
        </div>
        <ul className={styles.expDescription}>
          <li>
            Main contributor for the custom CMS system which is used to create the content for the 2,000+ Gemeinden
            (municipalities) that use our services. This content gets viewed 100,000+ times a month.
          </li>
          <li>
            Designing and implementing new Web Designs for different projects (e.g. Landing page for the GEM2GO app with
            React)
          </li>
          <li>Stack: JavaScript, TypeScript, jQuery, React, SCSS, Semantic + Accessible HTML, Adobe XD, SQL Server</li>
        </ul>
      </div>
      <div className={styles.experience}>
        <div className={styles.expHeader}>
          <div className={styles.date}>2018 - 2019</div>
          <div className={styles.name}>Cosmo Consult GMBH</div>
          <div className={styles.role}>Full-Stack Developer</div>
        </div>
        <ul className={styles.expDescription}>
          <li>
            Designing custom plugins for Microsoft Dynamics CRM for different big Austrian companies (e.g. Manner, KTM){" "}
          </li>
          <li>Stack: C#, JavaScript, SQL Server</li>
        </ul>
      </div>
    </section>
  );
}
