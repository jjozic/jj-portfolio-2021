import styles from "@/styles/PageContent.module.scss";
import Projects from "@/components/Projects";
import Introduction from "@/components/Introduction";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

const PageContent = () => {
  return (
    <div className={styles.wrapper}>
      <Introduction />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default PageContent;
