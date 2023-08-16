import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { LoginForm } from '@/components/auth'

const meta = {
  title: 'Forms/Login Form',
  component: LoginForm,
  render: () => <LoginForm onSubmit={data => console.log(data)} />,
  decorators: [withRouter],
  tags: ['autodocs'],
  /*decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],*/
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
