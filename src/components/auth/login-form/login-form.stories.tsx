import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from '@/components/auth/login-form/login-form.tsx'

const meta = {
  title: 'Components/Forms/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
