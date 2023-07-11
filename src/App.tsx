import { useState } from 'react'

import { Button, Card, Checkbox, Pagination, Select, TextField } from '@/components'
import { Modal } from '@/components/ui/modal'

export const App = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Button />
      <Select items={['1', '2']} />

      <div style={{ margin: '0 auto', width: '500px' }}>
        <Card>
          <Select fullWidth items={['select1', 'select13', 'select12', 'select11']} />
        </Card>
      </div>
      <Modal
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        body={
          <div>
            <Select
              fullWidth
              label={'Choose a question format'}
              items={['select1', 'select2', 'select13', 'select133']}
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
        <Select
          value={'select1'}
          label={'Choose a question format'}
          items={['select1', 'select2', 'select3', 'select4']}
        />
      </div>

      <Pagination
        currentPage={1}
        totalCount={20}
        pageSize={100}
        siblingCount={2}
        onPageChange={() => {}}
        onPageSizeChange={() => {}}
      />
      <Pagination
        currentPage={1}
        totalCount={10}
        pageSize={10}
        siblingCount={2}
        onPageChange={() => {}}
        onPageSizeChange={() => {}}
      />
    </>
  )
}
