import { promises as fs } from 'fs'

import { getPosts } from '@/fetchs/getPosts'
import { Post } from '@/lib/types/post'
import { domine } from '@/lib/fonts/domine'

import SizedContainer from '../../global/SizedContainer/SizedContainer'
import Button from '../../global/Button/Button'
import PostCard from '../PostCard/PostCard'

import styles from './presentation-blog.module.css'

export default async function PresentationBlog() {
  let posts = await getPosts(1, 2)

  if (posts.data.length <= 0) {
    const file = await fs.readFile(
      process.cwd() + '/src/mock_data/presentation_posts.json',
      'utf8',
    )

    const data = JSON.parse(file)
    posts = data
  }

  return (
    <SizedContainer className={styles.container}>
      <div className={`${styles.info} ${domine.className}`}>
        <h2>Veja o Blog</h2>
        <h4>Conheça mais sobre o Brasil vendo os nossos posts!</h4>
      </div>

      <div className={styles.blog}>
        <div className={styles.posts}>
          {posts.data.map((post: Post) => (
            <PostCard post={post} />
          ))}
        </div>

        <Button text="Acessar Blog" href="/blog" />
      </div>
    </SizedContainer>
  )
}
