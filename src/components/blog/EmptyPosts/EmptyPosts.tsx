import Image from 'next/image'

import styles from './empty-posts.module.css'

export default function EmptyPosts() {
  return (
    <div className={styles.notFound}>
      <Image
        src="/icon.png"
        alt="icon"
        width={128}
        height={128}
        draggable={false}
      />
      <h4>Nenhuma postagem por aqui...</h4>
    </div>
  )
}
