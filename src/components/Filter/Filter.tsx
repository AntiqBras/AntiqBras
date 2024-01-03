import { ChangeEvent, useEffect, useState } from 'react'

import styles from './filter.module.css'
import { normalizeStr } from '@/lib/functions/normalizeStr'

const filters = [
  'Incomum',
  'Cultural',
  'Ruínas',
  'Cidade',
  'Arqueológico',
  'Estrutura',
  'Natural',
]

type Props = {
  onFilterChange: (activeFilters: string[]) => void
  className: string
}

export default function Filter({ onFilterChange, className }: Props) {
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
    <div className={`${styles.filters} ${className}`}>
      {filters.map(filter => {
        const normalizedFilter = normalizeStr(filter)

        return (
          <label key={normalizedFilter}>
            <input
              type="checkbox"
              name={normalizedFilter}
              value={normalizedFilter}
              onChange={handleActiveFilters}
            />
            {filter}
          </label>
        )
      })}
    </div>
  )
}
