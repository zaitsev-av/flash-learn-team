import { useState } from 'react'

import { Button, Checkbox, Select, TextField } from '@/components'
import { Modal } from '@/components/ui/modal'

export const App = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Button />
      <Select items={['1', '2']} />

      <div style={{ paddingLeft: '35%' }}>
        <Select items={['select1', 'select1', 'select1', 'select1']} width={210} />
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
            <Select
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
