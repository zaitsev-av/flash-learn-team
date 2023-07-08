import { Meta, StoryObj } from '@storybook/react'

import { DropdownMenu } from '@/components/ui/dropdown-menu/dropdown-menu.tsx'

const meta = {
  title: 'Components/Dropdown-menu',
  component: DropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Avatar_menu: Story = {
  args: {
    variant: 'avatar',
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
  },
}

export const Learn_menu: Story = {
  args: {
    variant: 'learn-menu',
  },
}
