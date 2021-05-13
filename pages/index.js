import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navigation from '../components/Navigation/Navigation'
import PageContent from '../components/PageContent/PageContent'
import Footer from '../components/Footer/Footer'

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
      <Footer/>
    </>
  )
}
