'use client'

import L, { divIcon } from 'leaflet'
import { ChangeEvent, useState } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { Place, PlaceType } from '@/lib/types/place'

import PlaceModal from '../PlaceModal/PlaceModal'
import SizedContainer from '../SizedContainer/SizedContainer'

import styles from './map.module.css'
import 'leaflet/dist/leaflet.css'

type Props = {
  data: Place[]
}

const filtersObj: Record<string, boolean> = {
  incomum: false,
  cultural: false,
  ruinas: false,
  cidade: false,
  arqueologico: false,
  estrutura: false,
  natural: false,
}

export default function Map({ data }: Props) {
  const [filteredData, setFilteredData] = useState(data)
  const [filters, setFilters] = useState(filtersObj)
  const [modal, setModal] = useState(false)
  const [currentPlace, setCurrentPlace] = useState<Place>()

  const handleCheboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const updatedFilters = { ...filters, [value]: !filters[value] }

    setFilters(updatedFilters)
  }

  const icon = L.icon({
    iconUrl: '/marker.png',
    iconSize: [32, 32],
  })

  return (
    <SizedContainer className={styles.container}>
      <div className={styles.filters}>
        {Object.keys(filters).map((key, i) => (
          <label key={i}>
            <input
              type="checkbox"
              checked={filters[key]}
              onChange={handleCheboxChange}
              name={key}
              value={key}
            />
            {key}
          </label>
        ))}
      </div>

      <MapContainer
        className={styles.map}
        center={[-17, -55]}
        zoom={4}
        scrollWheelZoom={!L.Browser.mobile}
        dragging={!L.Browser.mobile}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
