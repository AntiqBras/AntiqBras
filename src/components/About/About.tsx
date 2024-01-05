import styles from './about.module.css'

import { domine } from '../../lib/fonts/domine'

import SizedContainer from '../SizedContainer/SizedContainer'

const data = [
  {
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quaerat nihil voluptatibus',
  },
  {
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quaerat nihil voluptatibus',
  },
  {
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quaerat nihil voluptatibus',
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
