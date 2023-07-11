import { Meta, StoryObj } from '@storybook/react'

import { Select } from '@/components'

const meta = {
  title: 'Components/Select',
  component: Select,
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    width: { control: 'number' },
  },
  args: {
    label: '',
    onChange: value => console.log(value),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Select_default: Story = {
  args: {
    items: ['select1', 'select2', 'select3', 'select4'],
  },
}

export const Select_disabled: Story = {
  args: {
    items: ['select1', 'select1', 'select1', 'select1'],
    disabled: true,
  },
}
