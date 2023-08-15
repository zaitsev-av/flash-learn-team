import type { Meta, StoryObj } from '@storybook/react'
import { v4 } from 'uuid'

import { TableActions } from '@/components/ui/table-action-buttons/table-action-buttons.tsx'

const meta = {
  title: 'Components/TableActions',
  component: TableActions,
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  args: {
    isDeleteModalOpen: false,
    isEditCardModalOpen: false,
    setDeleteModalOpen: isDeleteModalOpen => !isDeleteModalOpen,
    setEditCardModalOpen: isEditCardModalOpen => !isEditCardModalOpen,
  },
  argTypes: {},
} satisfies Meta<typeof TableActions>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { item: { id: v4(), title: 'title' } },
}
