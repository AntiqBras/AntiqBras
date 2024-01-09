import { API_URL } from '@/lib/api/api'

export async function getPosts(page: number, numOfPosts: number) {
  const url = `${API_URL}/posts?page=${page}&pageSize=${numOfPosts}`
  try {
    const res = await fetch(url, { cache: 'no-store' })
    return res.json()
  } catch (err) {
    return { data: [] }
  }
}
