import Head from "next/head";

import Navigation from "@/components/Navigation";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";
import { projects, experiences, skills } from "@/data/data";

interface Props {
  projects: typeof projects;
  experiences: typeof experiences;
  skills: typeof skills;
}

export default function Home({ projects, experiences, skills }: Props) {
  return (
    <>
      <Head>
        <title>Julian Jozic</title>
        <meta name="description" content="Julian Jozic. Web Developer" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="canonical" href="https://www.julianjozic.com" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#cdd5fb" />
      </Head>
      <Navigation />
      <MainContent
        projects={projects}
        experiences={experiences}
        skills={skills}
      />

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  if (!projects) {
    return {
      projects: [
        {
          title: "Projects coming soon...",
          description: "",
        },
      ],
    };
  }

  return {
    props: {
      projects,
      experiences,
      skills,
    },
  };
}