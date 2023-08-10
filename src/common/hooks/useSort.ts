import { useState } from 'react'

import { Sort } from '@/components'

export const useSort = () => {
  const [sort, setSort] = useState<Sort>(null)

  const handlerSort = (key: string, sortable?: boolean) => {
    if (!setSort || !sortable) return

    if (key !== sort?.columnKey) {
      return setSort({ columnKey: key, direction: 'asc' })
    }
    if (sort.direction === 'asc') {
      return setSort({ columnKey: key, direction: 'desc' })
    }

    setSort(null)
  }

  return {
    sort,
    setSort,
    handlerSort,
  }
}
