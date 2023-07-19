import type { Meta, StoryObj } from '@storybook/react'

import { SignUpForm } from '@/components/auth'

const meta = {
  title: 'Forms/SignUp Form',
  component: SignUpForm,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => {
      console.log(data)
    },
  },
}
