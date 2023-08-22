import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { CardEditorModal } from './card-editor-modal.tsx'

import { Button } from '@/components'

const meta = {
  title: 'Modals/Card Editor Modal',
  component: CardEditorModal,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: <Button variant={'primary'}>Add New Card</Button>,
    isOpen: false,
    setIsOpen: isOpen => !isOpen,
    buttonName: 'Add New Card',
    modalTitle: 'Add New Card',
  },
} satisfies Meta<typeof CardEditorModal>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
      <CardEditorModal
        onSubmit={data => {
          // eslint-disable-next-line no-console
          console.log(data)
        }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalTitle={'Add New Card'}
        buttonName={'Add New Card'}
      >
        {args.children}
      </CardEditorModal>
    )
  },
}
