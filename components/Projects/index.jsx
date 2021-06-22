import styles from "@/styles/Projects.module.scss";

export default function Projects() {
  return (
    <div>
      <h2 className="heading">Personal Projects</h2>
      <div className={styles.wrapper}>
        <article>Project1</article>
        <article>Project2</article>
        <article>Project3</article>
        <article>Project4</article>
        <article>Project5</article>
      </div>
    </div>
  );
}
