import { ChangeEvent, useEffect, useState } from 'react'

import styles from './filter.module.css'

const filters = [
  'incomum',
  'cultural',
  'ruinas',
  'cidade',
  'arqueologico',
  'estrutura',
  'natural',
]

type Props = {
  onFilterChange: (activeFilters: string[]) => void
}

export default function Filter({ onFilterChange }: Props) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const handleActiveFilters = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    if (checked) {
      setActiveFilters(prev => [...prev, value])
      return
    }

    setActiveFilters(prev => prev.filter(filter => filter !== value))
  }

  useEffect(() => onFilterChange(activeFilters), [activeFilters])

  return (
    <div className={styles.filters}>
      {filters.map(filter => (
        <label key={filter}>
          <input
            type="checkbox"
            name={filter}
            value={filter}
            onChange={handleActiveFilters}
          />
          {filter}
        </label>
      ))}
    </div>
  )
}
