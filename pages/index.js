import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'

import Navigation from '@/components/Navigation'
import PageContent from '@/components/PageContent'
import Footer from '@/components/Footer'
import { projects, experiences } from '../data/data'

export default function Home({ projects, experiences }) {
  return (
    <>
      <Head>
        <title>Julian Jozic</title>
        <meta name="description" content="Julian Jozic. Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <PageContent projects={projects} experiences={experiences}/>
     
      <Footer />
    </>
  )
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
      experiences
    },
  };
}
