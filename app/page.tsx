import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { experiences, projects, skills } from "@/data/data";

import { Metadata, Viewport } from "next";
import MainContent from "@/components/MainContent";

export const metadata: Metadata = {
  title: "Julian Jozic",
  description: "Julian Jozic. My porfolio website",
  creator: "Julian Jozic",
};

export const viewport: Viewport = {
  themeColor: "#cdd5fb",
};

async function getData() {
  return {
    projects,
    experiences,
    skills,
  };
}
export default async function Page() {
  const data = await getData();

  return (
    <>
      <Navigation />
      <MainContent
        projects={data.projects}
        experiences={data.experiences}
        skills={data.skills}
      />
      <Footer />
    </>
  );
}
