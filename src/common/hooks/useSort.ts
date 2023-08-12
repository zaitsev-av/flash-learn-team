import { useState } from 'react'

import { useAppDispatch } from '@/common'
import { Sort } from '@/components'

export const useSort = () => {
  const dispatch = useAppDispatch()
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
  //todo типизация!
  const setSortValue = (sort: Sort, action: any) => {
    const sortValue =
      sort?.direction === undefined || null ? '' : `${sort?.columnKey}-${sort?.direction}`

    dispatch(action({ orderBy: sortValue }))
  }

  return {
    sort,
    setSort,
    handlerSort,
    setSortValue,
  }
}
