'use client'

import { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6'

import styles from './pagination.module.css'

type Props = {
  onClickFunction: (arg: number) => void
  totalPages: number
}

export default function Pagination({ totalPages, onClickFunction }: Props) {
  const [currentPage, setCurrentPage] = useState(1)
  const maxPageButtons = 5

  const getPageNumbers = () => {
    let startPage = Math.max(1, currentPage - 2)
    let endPage = Math.min(totalPages, currentPage + 2)

    const range = []

    if (endPage - startPage + 1 < maxPageButtons) {
      if (startPage === 1) {
        endPage = Math.min(startPage + maxPageButtons - 1, totalPages)
      } else if (endPage === totalPages) {
        startPage = Math.max(endPage - maxPageButtons + 1, 1)
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      range.push(i)
    }
    return range
  }

  const handlePageClick = (page: number) => {
    setCurrentPage(page)
    onClickFunction(page)
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.arrow}
        onClick={() => handlePageClick(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <FaArrowLeft />
      </button>

      <div className={styles.pages}>
        {getPageNumbers().map(page => (
          <button
            key={page}
            className={styles.pageNum}
            onClick={() => handlePageClick(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={styles.arrow}
        onClick={() => handlePageClick(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        <FaArrowRight />
      </button>
    </div>
  )
}
