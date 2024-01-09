import Image from 'next/image'

import styles from './presentation-map.module.css'

import { domine } from '../../../lib/fonts/domine'

import SizedContainer from '../../global/SizedContainer/SizedContainer'
import Button from '../../global/Button/Button'

const data = [
  {
    icon: '/landing/presentation_map/nature.svg',
    title: 'Natureza',
    description:
      'Natureza, a majestosa tapeçaria da vida, reflete a beleza e diversidade.',
    image: '/landing/presentation_map/nature.jpg',
  },
  {
    icon: '/landing/presentation_map/structure.svg',
    title: 'Estrutura',
    description:
      'Estruturas, esqueletos de pedra e aço, erguem-se como testemunhos da humanidade.',
    image: '/landing/presentation_map/structure.jpg',
  },
  {
    icon: '/landing/presentation_map/ruins.svg',
    title: 'Ruínas',
    description:
      'Ruínas, testemunhas que revelam a vida de civilizações antigas.',
    image: '/landing/presentation_map/ruins.jpg',
  },
]

export default function PresentationMap() {
  return (
    <SizedContainer className={styles.container}>
      <div className={styles.info}>
        <div>
          <h2 className={domine.className}>Explore o Mapa</h2>
          <h4 className={domine.className}>Descubra locais Fascinantes..</h4>

          <Button href="/discover" text="Acessar Mapa" />
        </div>
      </div>

      <div className={styles.cards}>
        {data.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardInfo}>
              <div className={styles.cardIcon}>
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={32}
                  height={32}
                />
                <span>{card.title}</span>
              </div>

              <p className={domine.className}>{card.description}</p>
            </div>

            <div className={styles.cardImage}>
              <Image
                src={card.image}
                alt={card.title}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
        ))}
      </div>
    </SizedContainer>
  )
}
