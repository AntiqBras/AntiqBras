'use client'

import data from '../../mock_data/locations.json'

import { Place } from '@/lib/types/place'

import Header from '@/components/global/Header/Header'
import Map from '@/components/map/Map/Map'

import styles from './styles/discover.module.css'

export default async function Discover() {
  return (
    <>
      <Header />
      <Map data={data as Place[]} />
    </>
  )
}
