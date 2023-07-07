import { useState } from 'react'

import {
  Button,
  Checkbox,
  CustomSelect,
  DropdownMenu,
  Header,
  Pagination,
  TextField,
} from '@/components'
import { Modal } from '@/components/ui/modal'

export const App = () => {
  const [page, setPage] = useState(1)
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Header>
        <DropdownMenu />
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
      <div style={{ paddingLeft: '35%' }}>
        <CustomSelect items={['select1', 'select1', 'select1', 'select1']} width={210} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        body={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            <CustomSelect
              label={'Choose a question format'}
              items={['select1', 'select1', 'select1', 'select1']}
            />
            <TextField inputType={'text'} title={'Question'} />
            <TextField inputType={'text'} title={'Answer'} />
          </div>
        }
        footer={[
          <Button key={1} variant={'secondary'} onClick={() => setModalOpen(false)}>
            Cancel
          </Button>,
          <Button key={2} variant={'primary'}>
            Add new card
          </Button>,
        ]}
        trigger={<Button variant={'primary'}>modal</Button>}
        title={'Title'}
      />
      <div style={{ paddingLeft: '35%' }}>
        <Checkbox />
      </div>
    </>
  )
}
