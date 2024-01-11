import Markdown from 'react-markdown'
import Image from 'next/image'

import { promises as fs } from 'fs'

import Header from '@/components/global/Header/Header'
import SizedContainer from '@/components/global/SizedContainer/SizedContainer'
import Footer from '@/components/global/Footer/Footer'

import { Post } from '@/lib/types/post'
import { convertDate } from '@/lib/functions/convertDate'
import { getPost } from '@/fetchs/getPost'

import styles from './page.module.css'

export default async function BlogPage({
  params,
}: {
  params: { slug: string }
}) {
  let post: Post | null = await getPost(params.slug)

  if (post === null) {
    const file = await fs.readFile(
      process.cwd() + '/src/mock_data/posts.json',
      'utf8',
    )

    const posts = JSON.parse(file)

    for (const mockPost of posts.data) {
      if (mockPost['slug'] === params.slug) {
        post = mockPost
      }
    }
  }

  return (
    <>
      <Header />

      <div className={styles.main}>
        <SizedContainer className={styles.container}>
          {post !== null ? (
            <>
              <figure>
                <Image
                  src={post.hero_image ? post.hero_image : '/placeholder.png'}
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
            </>
          ) : (
            <div className={styles.notFound}>
              <Image src="/icon.png" alt="icon" width={128} height={128} />
              <h3>Post não encontrado!</h3>
            </div>
          )}
        </SizedContainer>
      </div>

      <Footer />
    </>
  )
}
