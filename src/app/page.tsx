import styles from './styles/landing.module.css'

import Header from '@/components/Header/Header'
import Presentation from '@/components/Presentation/Presentation'
import About from '@/components/About/About'
import InfoCard from '@/components/InfoCard/InfoCard'
import PresentationMap from '@/components/PresentationMap/PresentationMap'
import Footer from '@/components/Footer/Footer'
import PresentationBlog from '@/components/PresentationBlog/PresentationBlog'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.presentation}>
          <Header />
          <Presentation />
        </section>
        <section className={styles.infoCard}>
          <InfoCard />
        </section>
        <section className={styles.about}>
          <About />
        </section>
        <section className={styles.presentationBlog}>
          <PresentationBlog />
        </section>
        <section className={styles.presentationMap}>
          <PresentationMap />
        </section>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </main>
    </>
  )
}
