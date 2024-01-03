import styles from './styles/landing.module.css'

import Header from '../components/Header/Header'
import Slider from '../components/Slider/Slider'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.presentaion}></section>
        <Slider />
      </main>
    </>
  )
}
