import type { Meta, StoryObj } from '@storybook/react'

import { FilterPanel } from './filter-panel.tsx'

const meta = {
  title: 'Table/Filer panel',
  component: FilterPanel,
  tags: ['autodocs'],
  args: {
    userEmail: 'bababa@gmail.com',
    userName: 'User',
    sliderValues: [0, 100],
    searchValue: '',
    setSliderValues: value => console.log(value),
    setSearchValue: value => console.log(value),
  },
} satisfies Meta<typeof FilterPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
