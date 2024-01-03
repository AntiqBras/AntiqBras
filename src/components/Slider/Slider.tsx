'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import styles from './slider.module.css'

const data = [
  {
    title: 'Descubra sobre as Ruínas!',
    logo: '/slider/logos/ruins.png',
    bg: '/slider/bg/ruins.jpg',
    description:
      'Ruínas, testemunhas silenciosas do tempo, revelam a vida de civilizações antigas.',
  },
  {
    title: 'Explore locais exóticos!',
    logo: '/slider/logos/exotic.png',
    bg: '/slider/bg/exotic.jpg',
    description:
      'Descubra exóticos locais brasileiros, da vibrante Amazônia às dunas nordestinas.',
  },
  {
    title: 'Interaja com o mapa do Brasil!',
    logo: '/slider/logos/map.png',
    bg: '/slider/bg/map.jpg',
    description:
      'Interaja com o mapa do Brasil, explorando sua vasta diversidade cultural e natural.',
  },
]

export default function Slider() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    slides: { origin: 'center', perView: 1.55, spacing: 10 },
  })

  return (
    <section ref={ref} className={`${styles.slides} keen-slider`}>
      {data.map((entry, i) => (
        <div
          className={`${styles.slide} keen-slider__slide`}
          key={i}
          style={{ backgroundImage: `url(${entry.bg}` }}
        >
          <div className={styles.content}>
            <div className={styles.slideImgContainer}>
              <img src={entry.logo} alt="Logo" />
            </div>

            <h3>{entry.title}</h3>
            <p>{entry.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
