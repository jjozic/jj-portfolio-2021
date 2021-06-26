import styles from "@/styles/PageContent.module.scss";
import Projects from "@/components/Projects";
import Introduction from "@/components/Introduction";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const PageContent = () => {
  return (
    <div className={styles.wrapper}>
      <Introduction />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default PageContent;
