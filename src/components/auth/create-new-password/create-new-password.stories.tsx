import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPassword } from '@/components/auth'

const meta = {
  title: 'Components/Forms/CreateNewPassword',
  component: CreateNewPassword,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => {
      console.log(data)
    },
  },
}
