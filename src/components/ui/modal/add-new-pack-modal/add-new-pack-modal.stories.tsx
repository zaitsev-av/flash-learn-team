import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { AddNewPackModal } from './add-new-pack-modal.tsx'

import { Button } from '@/components'

const meta = {
  title: 'Modals/AddNewPackModal',
  component: AddNewPackModal,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    trigger: <Button variant={'primary'}>modal</Button>,
  },
} satisfies Meta<typeof AddNewPackModal>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: args => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
      <AddNewPackModal
        trigger={args.trigger}
        isOpen={modalOpen}
        onOpenChange={setModalOpen}
        onSubmit={data => data}
      />
    )
  },
}
