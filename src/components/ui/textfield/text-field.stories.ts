import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: { title: 'test', inputType: 'text' },
}

export const Disabled: Story = {
  args: { disabled: true, title: 'test', inputType: 'text' },
}
