import type { Meta, StoryObj } from '@storybook/react'

import { TableActions } from '@/components/ui/table-action-buttons/table-action-buttons.tsx'

const meta = {
  title: 'Components/TableActions',
  component: TableActions,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TableActions>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
