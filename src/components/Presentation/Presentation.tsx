import Link from 'next/link'
import Image from 'next/image'

import styles from './presentation.module.css'

import { domine } from '../../lib/fonts/domine'
import SizedContainer from '../SizedContainer/SizedContainer'

export default function Presentation() {
  return (
    <SizedContainer className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.contentTitles} ${domine.className}`}>
          <h4>Antiguidades nacionais</h4>
          <h2>explore o Brasil!</h2>
        </div>

        <p>
          Explorar as antiguidades nacionais é uma jornada fascinante que nos
          permite mergulhar na rica história e cultura do Brasil.
        </p>

        <div className={styles.contentButtons}>
          <Link href="/discover">Acessar Mapa</Link>
        </div>
      </div>

      <div className={styles.hero}>
        <Image
          src="/landing/hero.png"
          alt="hero"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </SizedContainer>
  )
}
