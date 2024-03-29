'use client'

import { useEffect, useState } from 'react'

import mockPosts from '../../mock_data/posts.json'

import { domine } from '@/lib/fonts/domine'

import { getPosts } from '@/fetchs/getPosts'
import { Post } from '@/lib/types/post'

import Header from '@/components/global/Header/Header'
import SizedContainer from '@/components/global/SizedContainer/SizedContainer'
import PostCard from '@/components/blog/PostCard/PostCard'
import Pagination from '@/components/blog/Pagination/Pagination'
import Footer from '@/components/global/Footer/Footer'

import styles from '../styles/blog.module.css'

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1)
  const [posts, setPosts] = useState<{ data: Post[]; totalPages: number }>({
    data: [],
    totalPages: 1,
  })

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts(currentPage, 5)

      if (posts.data.length <= 0) {
        setPosts(mockPosts)
        return
      }
      setPosts(posts)
    }

    fetchPosts()
  }, [currentPage])

  return (
    <>
      <Header />

      <div className={styles.main}>
        <SizedContainer className={styles.container}>
          <div className={`${styles.info} ${domine.className}`}>
            <h2>Blog</h2>
            <p>Veja os posts do Antiqbras! 🇧🇷</p>
          </div>

          <div className={styles.posts}>
            {posts.data.map((post: Post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          <Pagination
            onClickFunction={num => setCurrentPage(num)}
            totalPages={posts.totalPages}
          />
        </SizedContainer>
      </div>

      <Footer />
    </>
  )
}
