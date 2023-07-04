import { Meta, StoryObj } from '@storybook/react'

import { CustomSelect } from '@/components/ui/select/custom-select.tsx'

const meta = {
  title: 'Components/Select',
  component: CustomSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof CustomSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Select_default: Story = {
  args: {
    items: ['select1', 'select1', 'select1', 'select1'],
  },
}

export const Select_disabled: Story = {
  args: {
    items: ['select1', 'select1', 'select1', 'select1'],
    disabled: true,
  },
}
