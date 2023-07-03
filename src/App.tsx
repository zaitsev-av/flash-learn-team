import { useState } from 'react'

import { AvatarDropdownMenu, Button, Header, Pagination } from '@/components'

export const App = () => {
  const [page, setPage] = useState(1)

  return (
    <>
      <Header>
        <AvatarDropdownMenu />
      </Header>
      <Button />
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
