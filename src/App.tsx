import { useState } from 'react'

import { DropdownMenu, Button, Header, Pagination, CustomSelect } from '@/components'

export const App = () => {
  const [page, setPage] = useState(1)

  return (
    <>
      <Header>
        <DropdownMenu />
      </Header>
      <Button />
      <Pagination
        currentPage={page}
        pageSize={2}
        totalCount={30}
        siblingCount={1}
        onPageChange={setPage}
      />
      <div style={{ paddingLeft: '35%' }}>
        <CustomSelect items={['select1', 'select1', 'select1', 'select1']} />
      </div>
    </>
  )
}
