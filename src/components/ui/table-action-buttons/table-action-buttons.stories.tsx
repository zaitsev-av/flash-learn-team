import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import { withRouter } from 'storybook-addon-react-router-v6'
import { v4 } from 'uuid'

import { store } from '@/app/store.ts'
import { TableActions } from '@/components/ui/table-action-buttons/table-action-buttons.tsx'

const meta = {
  title: 'Components/TableActions',
  component: TableActions,
  render: () => (
    <Provider store={store}>
      <TableActions
        item={{ id: v4(), title: 'title' }}
        isDeleteModalOpen={false}
        setDeleteModalOpen={isDeleteModalOpen => !isDeleteModalOpen}
        isEditCardModalOpen={false}
        setEditCardModalOpen={isEditCardModalOpen => !isEditCardModalOpen}
      />
    </Provider>
  ),
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
    withRouter,
  ],
  tags: ['autodocs'],
  args: {
    item: { id: v4(), title: 'title' },
    isDeleteModalOpen: false,
    isEditCardModalOpen: false,
    setDeleteModalOpen: isDeleteModalOpen => !isDeleteModalOpen,
    setEditCardModalOpen: isEditCardModalOpen => !isEditCardModalOpen,
  },
  argTypes: {},
} satisfies Meta<typeof TableActions>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
