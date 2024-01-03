import Link from 'next/link'

import SizedContainer from '../SizedContainer/SizedContainer'

import styles from './header.module.css'

export default function Header() {
  return (
    <header>
      <SizedContainer className={styles.container}>
        <Link href="/" className={`${styles.link} ${styles.titleLink}`}>
          <h3>antiqbras</h3>
        </Link>

        <div>
          <Link
            href="/discover"
            className={`${styles.link} ${styles.discoverLink}`}
          >
            <span>Discover</span>
          </Link>
        </div>
      </SizedContainer>
    </header>
  )
}
