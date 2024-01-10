import Image from 'next/image'
import Link from 'next/link'

import { convertDate } from '@/lib/functions/convertDate'
import { Post } from '@/lib/types/post'

import styles from './post-card.module.css'

type Props = {
  post: Post
}

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.post}>
      <div className={styles.postImage}>
        <Image
          src={post.hero_image ? post.hero_image : '/placeholder.png'}
          alt={post.title}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className={styles.postInfo}>
        <h3>{post.title}</h3>
        <h4>{post.subtitle}</h4>

        <div className={styles.author}>
          <span>
            feito por <b>{post.writer_name}</b> · {convertDate(post.created_at)}
          </span>
        </div>
      </div>
    </Link>
  )
}
