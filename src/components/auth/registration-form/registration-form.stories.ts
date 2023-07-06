import type { Meta, StoryObj } from '@storybook/react'

import { RegistrationForm } from '@/components/auth'

const meta = {
  title: 'Forms/RegistrationForm',
  component: RegistrationForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RegistrationForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
