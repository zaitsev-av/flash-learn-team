import type { Meta, StoryObj } from '@storybook/react'

import { CustomTabs } from './'

const meta = {
  title: 'Components/Custom-tabs',
  component: CustomTabs,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    defaultValue: {
      options: [0, 1],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof CustomTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabs: ['my packs', 'all packs'],
  },
}

export const Disabled: Story = {
  args: {
    tabs: ['my packs', 'all packs'],
    disabled: true,
  },
}
