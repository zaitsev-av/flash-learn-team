import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { EditIcon } from '@/assets'
import { EditDeckModal } from '@/components'

const meta = {
  title: 'Modals/Edit Deck Modal',
  component: EditDeckModal,
  args: {
    deckName: 'EditedDeckName',
    isPrivate: true,
    children: <EditIcon />,
    onSubmit: data => {
      // eslint-disable-next-line no-console
      console.log(data)
    },
    isOpen: false,
    setIsOpen: () => {},
  },
  parameters: {
    controls: {
      exclude: /(?:\b|')(children)(?:\b|')/g,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EditDeckModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
      <EditDeckModal
        deckName={'EditedDeckName'}
        isPrivate={false}
        onSubmit={data => {
          // eslint-disable-next-line no-console
          console.log(data)
        }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        {args.children}
      </EditDeckModal>
    )
  },
}
