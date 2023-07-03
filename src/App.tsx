import { useState } from 'react'

import { AvatarDropdownMenu, Button, CustomSelect, Header, Pagination } from '@/components'

export const App = () => {
  const [page, setPage] = useState(1)

  return (
    <>
      <Header>
        <AvatarDropdownMenu />
      </Header>
      <Button />
      <CustomSelect items={['1', '2']} />
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
