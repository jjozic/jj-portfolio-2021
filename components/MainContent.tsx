import styles from "@/styles/PageContent.module.scss";
import Projects from "@/components/ProjectSection";
import Introduction from "@/components/IntroSection";
import Experience from "@/components/ExperienceSection";
import Skills from "@/components/SkillSection";
import { IExperience, IProject, ISkill } from "@/data/data";

interface Props {
  projects: IProject[];
  experiences: IExperience[];
  skills: ISkill[];
}

export default function MainContent({ projects, experiences, skills }: Props) {
  return (
    <main className={styles.wrapper}>
      <Introduction />
      <Projects data={projects} />
      <Experience data={experiences} />
      <Skills data={skills} />
      {/* <Contact /> */}
    </main>
  );
}
