import { FaGithub, FaInstagram } from 'react-icons/fa6'
import Link from 'next/link'
import Image from 'next/image'

import SizedContainer from '../SizedContainer/SizedContainer'

import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <SizedContainer className={styles.container}>
        <Link href="/" className={styles.title}>
          <Image src="/icon.png" alt="icon" width={32} height={32} />
          <h3>antiqbras</h3>
        </Link>

        <div className={styles.links}>
          <Link href="/discover">
            <span>Mapa</span>
          </Link>
          <Link href="/blog">
            <span>Blog</span>
          </Link>
        </div>

        <div className={styles.socials}>
          <Link href="">
            <FaInstagram />
          </Link>
          <Link href="https://github.com/AntiqBras/AntiqBras/">
            <FaGithub />
          </Link>
        </div>
      </SizedContainer>
    </header>
  )
}
