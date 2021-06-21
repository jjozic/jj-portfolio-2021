

import styles from "@/styles/PageContent.module.scss";
import Projects from "@/components/Projects";
import Introduction from "../Introduction";

const PageContent = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Introduction />
        <Projects />
      </div>
    </>
  );
};

export default PageContent;
