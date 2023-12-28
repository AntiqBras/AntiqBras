import { promises as fs } from 'fs'
import dynamic from 'next/dynamic'

import Header from '@/components/Header/Header'

import styles from './styles/discover.module.css'

export default async function Discover() {
  const file = await fs.readFile(
    process.cwd() + '/src/app/discover/data.json',
    'utf-8',
  )

  const data = JSON.parse(file)
  const MapNoSSR = dynamic(() => import('@/components/Map/Map'), { ssr: false })

  return (
    <main>
      <Header />
      <MapNoSSR data={data} />
    </main>
  )
}
