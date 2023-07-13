import type { Meta, StoryObj } from '@storybook/react'

import { RegistrationForm } from '@/components/auth'

const meta = {
  title: 'Forms/Registration Form',
  component: RegistrationForm,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof RegistrationForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => {
      console.log(data)
    },
  },
}
