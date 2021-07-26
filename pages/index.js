import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import { useEffect } from "react"

import Navigation from '@/components/Navigation'
import PageContent from '@/components/PageContent'
import Footer from '@/components/Footer'
import { project } from '../data/data'

export default function Home({ projects }) {
  useEffect(() => {
    console.log(projects);
  }, [projects]);
  return (
    <>
      <Head>
        <title>Julian Jozic</title>
        <meta name="description" content="Julian Jozic. Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <PageContent projects={projects}/>
     
      <Footer />
    </>
  )
}

export async function getStaticProps() {

  if (!project) {
    return {
      projects: [
        {
          title: "Projects coming soon...",
          image: "https://picsum.photos/200/300/?blur",
          description: "",
        },
      ],
    };
  }

  return {
    props: {
      projects: project,
    },
  };
}
