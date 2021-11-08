import styles from "@/styles/PageContent.module.scss";
import Projects from "@/components/Projects";
import Introduction from "@/components/Introduction";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

const PageContent = ({projects, experiences, skills}) => {
  return (
    <main className={styles.wrapper}>
      <Introduction />
      <Projects data={projects}/>
      <Experience data={experiences}/>
      <Skills data={skills}/>
      {/* <Contact /> */}
    </main>
  );
};

export default PageContent;
