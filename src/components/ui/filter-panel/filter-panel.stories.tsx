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
    isMe: '',
    // eslint-disable-next-line no-console
    setSliderValues: value => console.log(value),
    // eslint-disable-next-line no-console
    setSearchValue: value => console.log(value),
    maxSliderValue: 0,
    // eslint-disable-next-line no-console
    onValueCommit: values => console.log(values),
    myDecks: '',
    // eslint-disable-next-line no-console
    setMyDecks: value => console.log(value),
  },
} satisfies Meta<typeof FilterPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
