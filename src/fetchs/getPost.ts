import { API_URL } from '@/lib/api/api'

export async function getPost(slug: string) {
  const url = `${API_URL}/posts/${slug}`
  try {
    const res = await fetch(url, { cache: 'no-store' })
    return res.json()
  } catch (err) {
    return null
  }
}
