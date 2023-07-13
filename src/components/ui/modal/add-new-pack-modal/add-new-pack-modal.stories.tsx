import { Meta, StoryObj } from '@storybook/react'

import { AddNewPackModal } from './add-new-pack-modal.tsx'

import { Button } from '@/components'

const meta = {
  title: 'Modals/Add New Pack Modal',
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
    trigger: <Button variant={'primary'}>Add New Pack</Button>,
  },
} satisfies Meta<typeof AddNewPackModal>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: args => {
    return (
      <AddNewPackModal
        trigger={args.trigger}
        onSubmit={data => {
          // eslint-disable-next-line no-console
          console.log(data)
        }}
      />
    )
  },
}
