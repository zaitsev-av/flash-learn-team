import { Meta, StoryObj } from '@storybook/react'

import { AddNewCard } from './add-new-card.tsx'

import { Button } from '@/components'

const meta = {
  title: 'Modals/Add New Card Modal',
  component: AddNewCard,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: <Button variant={'primary'}>Add New Pack</Button>,
    isOpen: false,
    setIsOpen: isOpen => !isOpen,
  },
} satisfies Meta<typeof AddNewCard>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: args => {
    return (
      <AddNewCard
        onSubmit={data => {
          // eslint-disable-next-line no-console
          console.log(data)
        }}
        isOpen={false}
        setIsOpen={() => {}}
      >
        {args.children}
      </AddNewCard>
    )
  },
}
