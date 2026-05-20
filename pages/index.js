import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import Testimonial from '../components/Testimonial'
import CTA from '../components/CTA'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Opervia | Soluciones tecnológicas para negocios</title>
        <meta name="description" content="Soporte web, automatización de procesos y soluciones tecnológicas para empresas que necesitan rapidez, continuidad y resultados." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Opervia | Soluciones tecnológicas para negocios" />
        <meta property="og:description" content="Soporte web, automatización de procesos y soluciones tecnológicas para empresas que necesitan rapidez, continuidad y resultados." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Opervia" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Testimonial />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
