import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: { size: { type: 'number' } },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const With_Image: Story = {
  args: {
    userName: 'User Name',
    src: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png',
  },
}
export const No_Image: Story = {
  args: {
    userName: 'User Name',
  },
}
