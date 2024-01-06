import Link from 'next/link'

import styles from './button.module.css'

type Props = {
  href: string
  text: string
}

export default function Button({ href, text }: Props) {
  return (
    <Link className={styles.link} href={href}>
      {text}
    </Link>
  )
}
