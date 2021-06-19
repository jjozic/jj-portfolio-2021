import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'

import Navigation from '@/components/Navigation'
import PageContent from '@/components/PageContent'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Julian Jozic</title>
        <meta name="description" content="Julian Jozic. Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation/>
      <PageContent/>
      <Projects/>
      <Footer/>
    </>
  )
}
