import { domine } from '@/lib/fonts/domine'

import Header from '@/components/global/Header/Header'
import SizedContainer from '@/components/global/SizedContainer/SizedContainer'
import EmptyPosts from '@/components/blog/EmptyPosts/EmptyPosts'

import { getPosts } from '@/fetchs/getPosts'

import styles from '../styles/blog.module.css'

export default async function Blog() {
  const posts = await getPosts(1, 5)

  return (
    <>
      <Header />

      <SizedContainer className={`${styles.container} ${domine.className}`}>
        <div className={styles.info}>
          <h2>Blog</h2>
          <p>Veja os posts do Antiqbras!</p>
        </div>

        {posts.data > 0 ? <div></div> : <EmptyPosts />}
      </SizedContainer>
    </>
  )
}
