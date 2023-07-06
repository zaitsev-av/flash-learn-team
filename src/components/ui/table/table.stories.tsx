import { Meta, StoryObj } from '@storybook/react'

import { Table } from '@/components'

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Select_default: Story = {
  args: {},
  render: args => <Table {...args} />,
}
