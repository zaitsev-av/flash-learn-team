import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { CheckEmail } from '@/components/auth'

const meta = {
  title: 'Forms/CheckEmail',
  component: CheckEmail,
  tags: ['autodocs'],
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
