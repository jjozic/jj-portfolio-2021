import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'

import Navigation from '@/components/Navigation'
import PageContent from '@/components/PageContent'
import Footer from '@/components/Footer'
import { projects, experiences, skills } from '../data/data'

export default function Home({ projects, experiences }) {
  return (
    <>
      <Head>
        <title>Julian Jozic</title>
        <meta name="description" content="Julian Jozic. Web Developer" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navigation />
      <PageContent projects={projects} experiences={experiences} skills={skills} />

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
      experiences,
      skills
    },
  };
}
