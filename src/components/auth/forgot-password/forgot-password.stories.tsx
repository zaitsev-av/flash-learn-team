import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from '@/components/auth'

const meta = {
  title: 'Forms/Forgot Password',
  component: ForgotPassword,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => {
      console.log(data)
    },
  },
}
