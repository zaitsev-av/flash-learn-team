import { Meta, StoryObj } from '@storybook/react'

import { AddNewDeckModal, Button } from '@/components'

const meta = {
  title: 'Modals/Add New Pack Modal',
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
    trigger: <Button variant={'primary'}>Add New Pack</Button>,
    setIsOpen: isOpen => console.log(isOpen),
    isOpen: false,
    onSubmit: data => console.log(data),
  },
} satisfies Meta<typeof AddNewDeckModal>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: args => {
    return (
      <AddNewDeckModal
        trigger={args.trigger}
        onSubmit={data => {
          // eslint-disable-next-line no-console
          console.log(data)
        }}
        setIsOpen={() => {}}
        isOpen={false}
      />
    )
  },
}
