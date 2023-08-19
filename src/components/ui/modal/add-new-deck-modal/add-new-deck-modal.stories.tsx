import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { AddNewDeckModal, Button } from '@/components'

const meta = {
  title: 'Modals/Add New Deck Modal',
  component: AddNewDeckModal,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    trigger: <Button variant={'primary'}>Add New Deck</Button>,
    setIsOpen: isOpen => console.log(isOpen),
    isOpen: false,
    onSubmit: data => console.log(data),
  },
} satisfies Meta<typeof AddNewDeckModal>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
      <AddNewDeckModal
        trigger={args.trigger}
        onSubmit={data => {
          // eslint-disable-next-line no-console
          console.log(data)
        }}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    )
  },
}
