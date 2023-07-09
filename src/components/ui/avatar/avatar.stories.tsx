import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'User Name',
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
  },
}
