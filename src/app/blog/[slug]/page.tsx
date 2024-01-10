import Markdown from 'react-markdown'
import Image from 'next/image'

import Header from '@/components/global/Header/Header'
import SizedContainer from '@/components/global/SizedContainer/SizedContainer'

import { Post } from '@/lib/types/post'
import { getPost } from '@/fetchs/getPost'

import styles from './page.module.css'
import { convertDate } from '@/lib/functions/convertDate'
import Footer from '@/components/global/Footer/Footer'

export default async function BlogPage({
  params,
}: {
  params: { slug: string }
}) {
  const post: Post = await getPost(params.slug)

  return (
    <>
      <Header />

      <div className={styles.main}>
        <SizedContainer className={styles.container}>
          <figure>
            <Image
              src={post.hero_image}
              alt={post.title}
              width={0}
              height={0}
              sizes="100vw"
            />
          </figure>

          <div className={styles.presentation}>
            <h1>{post.title}</h1>
            <p>{post.subtitle}</p>

            <div className={styles.infos}>
              <div>
                <span className={styles.published}>Escrito por</span>
                <span className={styles.other}>{post.writer_name}</span>
              </div>

              <div>
                <span className={styles.published}>Publicado em</span>
                <span className={styles.other}>
                  {convertDate(post.created_at)}
                </span>
              </div>
            </div>

            <Markdown className={styles.content}>{post.content}</Markdown>
          </div>
        </SizedContainer>
      </div>

      <Footer />
    </>
  )
}
