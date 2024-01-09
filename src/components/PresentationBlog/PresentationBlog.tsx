import Image from 'next/image'
import Link from 'next/link'

import { getPosts } from '@/fetchs/getPosts'
import { Post } from '@/lib/types/post'
import { domine } from '@/lib/fonts/domine'
import { convertDate } from '@/lib/functions/convertDate'

import SizedContainer from '../SizedContainer/SizedContainer'
import Button from '../Button/Button'

import styles from './presentation-blog.module.css'

export default async function PresentationBlog() {
  const posts = await getPosts(1, 2)

  return (
    <SizedContainer className={styles.container}>
      <div className={`${styles.info} ${domine.className}`}>
        <h2>Veja o Blog</h2>
        <h4>Conheça mais sobre o Brasil vendo os nossos posts!</h4>
      </div>

      {posts.data.length > 0 ? (
        <div className={styles.blog}>
          <div className={styles.posts}>
            {posts.data.map((post: Post) => (
              <Link href={`/blog/${post.slug}`} className={styles.post}>
                <div className={styles.postImage}>
                  <Image
                    src={post.hero_image}
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
                      feito por <b>{post.writer_name}</b> ·{' '}
                      {convertDate(post.created_at)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Button text="Acessar Blog" href="/blog" />
        </div>
      ) : (
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
      )}
    </SizedContainer>
  )
}
