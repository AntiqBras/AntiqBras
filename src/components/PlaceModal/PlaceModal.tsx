import Image from 'next/image'
import { MouseEventHandler } from 'react'
import { FaX } from 'react-icons/fa6'

import { Place, PlaceType } from '@/lib/types/place'
import { convertCoordinates } from '@/lib/functions/convertCoordinates'

import styles from './place-modal.module.css'

type Props = {
  onClickFunction: MouseEventHandler<HTMLButtonElement>
  data: Place | undefined
}

export default function PlaceModal({ onClickFunction, data: place }: Props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={place?.img ? place?.img : '/map/placeholder.png'}
            alt={place?.name!}
            width={0}
            height={0}
            className={styles.img}
            sizes="100vw"
          />
        </div>
        <div className={styles.info}>
          <div className={styles.infoTitle}>
            <div className={styles.infoLocation}>
              <h4>{place?.name}</h4>
              <h6>
                {place?.state} - {convertCoordinates(place?.coordinates!)}
              </h6>
            </div>

            <button onClick={onClickFunction}>
              <FaX />
            </button>
          </div>

          <div className={styles.infoDescription}>
            <p>{place?.description}</p>
          </div>

          <div className={styles.tags}>
            {place?.type.map(tag => (
              <span key={tag}>{PlaceType[tag as keyof typeof PlaceType]}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
