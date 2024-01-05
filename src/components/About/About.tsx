import styles from './about.module.css'

import { domine } from '../../lib/fonts/domine'

import SizedContainer from '../SizedContainer/SizedContainer'

const data = [
  {
    title: 'Conheça os tesouros nacionais',
    description:
      'Explore os tesouros nacionais, locais únicos e distintos que revelam a singularidade da nossa cultura e herança.',
  },
  {
    title: 'A diversidade cultural brasileira',
    description:
      'Descubra a riqueza da nacionalidade brasileira através da sua diversidade cultural, com influências indígenas, africanas, europeias e asiáticas que se uniram para criar uma identidade única e vibrante.',
  },
  {
    title: 'Belezas naturais do Brasil: um presente da nacionalidade',
    description:
      'Explore as deslumbrantes paisagens naturais do Brasil, desde a majestosa Floresta Amazônica até as espetaculares Cataratas do Iguaçu. A diversidade geográfica do país é um verdadeiro presente da nacionalidade brasileira.',
  },
]

export default function About() {
  return (
    <SizedContainer className={styles.container}>
      <h2 className={domine.className}>
        Explore profundamente a nossa <span>nacionalidade</span>
      </h2>

      <ul className={styles.cards}>
        {data.map((card, index) => (
          <li key={index} className={styles.card}>
            <span className={domine.className}>{index + 1}</span>
            <div>
              <h4 className={domine.className}>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </SizedContainer>
  )
}
