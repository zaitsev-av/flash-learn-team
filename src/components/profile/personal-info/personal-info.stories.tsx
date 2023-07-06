import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInfo } from '@/components/profile/personal-info/personal-info.tsx'

const meta = {
  title: 'Components/Profile/PersonalInformation',
  component: PersonalInfo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PersonalInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
