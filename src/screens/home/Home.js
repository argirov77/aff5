// src/screens/home/Home.js
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'

import Header from 'components/header'
import Hero from 'components/hero'
import Services from 'components/services'
import Choose from 'components/choose'
import Adv from 'components/adv'
import CTA from 'components/cta'
import Footer from 'components/footer'
import stl from './Home.module.scss'

export default function Home() {
  return (
    <div className={stl.wrapper}>
      <Head>
        <title>
          Axantra Consult Limited – Affiliate Marketing &amp; Google Ads
        </title>
        <meta
          name="description"
          content="Axantra Consult Limited — эксперты в affiliate-маркетинге и Google Ads. Увеличиваем продажи и оптимизируем бюджеты."
        />
      </Head>

      <div className="wrapper">
        <Header />

        <main className="page">
          <Hero />
          <Services />
          <Choose />
          <Adv />
          <CTA />
        </main>

        <Footer />
      </div>
    </div>
  )
}
