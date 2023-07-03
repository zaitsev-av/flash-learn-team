import { useState } from 'react'

import { Avatar } from '@radix-ui/react-avatar'

import { Pagination } from '@/components'

export const App = () => {
  const [page, setPage] = useState(1)

  return (
    <>
      <Avatar />
      <Pagination
        currentPage={page}
        pageSize={2}
        totalCount={30}
        siblingCount={1}
        onPageChange={setPage}
      />
    </>
  )
}
