import { FaPagelines, FaGlobe, FaFish, FaMountainSun } from 'react-icons/fa6'

import styles from './info-card.module.css'

import { domine } from '@/lib/fonts/domine'

export default function InfoCard() {
  return (
    <div className={`${styles.container} ${domine.className}`}>
      <h4>Veja os elementos que compoem o Brasil:</h4>

      <div className={styles.icons}>
        <div>
          <FaFish />
          <span>Fauna</span>
        </div>
        <div>
          <FaPagelines />
          <span>Biodiversidade</span>
        </div>
        <div>
          <FaGlobe />
          <span>Cultura</span>
        </div>
        <div>
          <FaMountainSun />
          <span>Paisagens</span>
        </div>
      </div>
    </div>
  )
}
