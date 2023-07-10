import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInfo } from './personal-info.tsx'

const meta = {
  title: 'Profile/PersonalInformation',
  component: PersonalInfo,
  tags: ['autodocs'],
  args: {
    userEmail: 'bababa@gmail.com',
    userName: 'User',
    onLogout: () => console.log('logout'),
  },
} satisfies Meta<typeof PersonalInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
