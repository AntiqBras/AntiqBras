import Link from 'next/link'
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6'

import styles from './footer.module.css'

import SizedContainer from '../SizedContainer/SizedContainer'

export default function Footer() {
  return (
    <SizedContainer className={styles.container}>
      <div className={styles.about}>
        <h3>antiqbras</h3>

        <div className={styles.socials}>
          <Link href="https://github.com/isaacszf/AntiqBras">
            <FaGithub />
          </Link>
          <Link href="/">
            <FaTwitter />
          </Link>
          <Link href="/">
            <FaInstagram />
          </Link>
        </div>
      </div>

      <div className={styles.more}>
        <h3>Veja Mais</h3>

        <div className={styles.multipleLinks}>
          <Link href="">O que é AntiqBras</Link>
          <Link href="">Nosso Blog</Link>
          <Link href="">Mapa Interativo</Link>
        </div>
      </div>

      <div className={styles.contact}>
        <h3>Entre em Contato</h3>

        <div className={styles.multipleLinks}>
          <span>antiqbras@email.com</span>
          <span>55 (31) 98888-8888</span>
        </div>
      </div>
    </SizedContainer>
  )
}
