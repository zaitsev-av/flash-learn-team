import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { CheckEmail } from '@/components/auth'

const meta = {
  title: 'Forms/Check Email',
  component: CheckEmail,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { email: 'test@email.com' },
  render: () => {
    return (
      <BrowserRouter>
        <CheckEmail email={'test@email.com'} />
      </BrowserRouter>
    )
  },
}
