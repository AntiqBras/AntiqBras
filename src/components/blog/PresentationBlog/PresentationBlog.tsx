import { getPosts } from '@/fetchs/getPosts'
import { Post } from '@/lib/types/post'
import { domine } from '@/lib/fonts/domine'

import SizedContainer from '../../global/SizedContainer/SizedContainer'
import Button from '../../global/Button/Button'
import PostCard from '../PostCard/PostCard'

import styles from './presentation-blog.module.css'
import EmptyPosts from '../EmptyPosts/EmptyPosts'

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
              <PostCard post={post} />
            ))}
          </div>

          <Button text="Acessar Blog" href="/blog" />
        </div>
      ) : (
        <EmptyPosts />
      )}
    </SizedContainer>
  )
}
