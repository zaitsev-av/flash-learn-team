import { Meta, StoryObj } from '@storybook/react'

import { CustomSlider } from '@/components/ui/slider/custom-slider.tsx'

const meta = {
  title: 'Components/Slider',
  component: CustomSlider,
  tags: ['autodocs'],
} satisfies Meta<typeof CustomSlider>

export default meta
type Story = StoryObj<typeof meta>

export const Slider: Story = {
  args: {},
}
