import styles from "@/styles/PageContent.module.scss";
import Projects from "@/components/Projects";
import Introduction from "@/components/Introduction";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

const PageContent = ({projects}) => {
  return (
    <div className={styles.wrapper}>
      <Introduction />
      <Projects projects={projects}/>
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default PageContent;
