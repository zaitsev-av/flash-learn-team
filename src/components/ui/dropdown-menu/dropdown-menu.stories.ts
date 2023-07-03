import { Meta, StoryObj } from '@storybook/react'

import { AvatarDropdownMenu } from '@/components/ui/dropdown-menu/dropdown-menu.tsx'

const meta = {
  title: 'Components/Dropdown-menu',
  component: AvatarDropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarDropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const DropdownMenu: Story = {
  args: {},
}
