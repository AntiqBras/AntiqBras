import styles from './styles/landing.module.css'

import Header from '../components/Header/Header'
import Presentation from '../components/Presentation/Presentation'
import About from '../components/About/About'
import Slider from '../components/Slider/Slider'
import InfoCard from '@/components/InfoCard/InfoCard'

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.presentation}>
          <Presentation />
        </section>
        <section className={styles.infoCard}>
          <InfoCard />
        </section>
        <section className={styles.about}>
          <About />
        </section>
        {/* <section className={styles.slider}>
          <Slider />
        </section> */}
      </main>
    </>
  )
}
