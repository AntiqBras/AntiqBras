'use client'

import L from 'leaflet'
import { useState } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { Place } from '@/lib/types/place'

import PlaceModal from '../PlaceModal/PlaceModal'
import Filter from '../Filter/Filter'
import SizedContainer from '../SizedContainer/SizedContainer'

import styles from './map.module.css'

import 'leaflet/dist/leaflet.css'

type Props = {
  data: Place[]
}

export default function Map({ data }: Props) {
  const [filteredData, setFilteredData] = useState(data)
  const [modal, setModal] = useState(false)
  const [currentPlace, setCurrentPlace] = useState<Place>()

  const handleDataTransformation = (activeFilters: string[]) => {
    setFilteredData(() =>
      data.filter(place => {
        const types = place.type.map(t => t.toString().toLowerCase())
        return activeFilters.every(filter => types.includes(filter))
      }),
    )
  }

  const icon = L.icon({
    iconUrl: '/map/marker.png',
    iconSize: [32, 32],
  })

  return (
    <SizedContainer className={styles.container}>
      <MapContainer
        className={styles.map}
        center={[-14, -50]}
        zoom={4}
        scrollWheelZoom={!L.Browser.mobile}
        dragging={!L.Browser.mobile}
        doubleClickZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Filter
          className={styles.filter}
          onFilterChange={handleDataTransformation}
        />

        {filteredData.map(place => (
          <Marker
            key={place.wikipedia}
            icon={icon}
            position={[place.coordinates[0], place.coordinates[1]]}
            title={place.name}
            eventHandlers={{
              click: () => {
                setModal(true)
                setCurrentPlace(place)
              },
            }}
          />
        ))}
      </MapContainer>

      {modal && (
        <PlaceModal
          data={currentPlace}
          onClickFunction={() => setModal(false)}
        />
      )}
    </SizedContainer>
  )
}
