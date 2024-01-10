import SizedContainer from '@/components/global/SizedContainer/SizedContainer'

import styles from './pagination.module.css'

type Props = {
  onClickFunction: (arg: number) => void
  totalPages: number
}

export default function Pagination({ totalPages, onClickFunction }: Props) {
  const pages = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <span
        key={i}
        className={styles.pageNum}
        onClick={() => onClickFunction(i)}
      >
        {i}
      </span>,
    )
  }

  return <SizedContainer className={styles.container}>{pages}</SizedContainer>
}
