import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from '@/components/auth'

const meta = {
  title: 'Forms/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => {
      console.log(data)
    },
  },
}
