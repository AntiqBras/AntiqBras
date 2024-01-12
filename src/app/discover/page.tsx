'use client'

import data from '../../mock_data/locations.json'

import { Place } from '@/lib/types/place'

import Header from '@/components/global/Header/Header'
import Footer from '@/components/global/Footer/Footer'
import Map from '@/components/map/Map/Map'

import styles from '../styles/discover.module.css'

export default function Discover() {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <Map data={data as Place[]} />
      </main>

      <Footer />
    </>
  )
}
