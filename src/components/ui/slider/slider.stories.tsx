import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Slider } from '@/components/ui/slider/slider.tsx'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  decorators: [
    Story => (
      <div style={{ margin: '3rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    value: [],
    minValue: { control: 'number' },
    maxValue: { control: 'number' },
    onValueCommit: () => {},
    onChange: () => {},
  },
} satisfies Meta<typeof Slider>

export default meta

export const Slider_ = {
  render: () => {
    const [values, setValues] = useState<[number, number]>([0, 100])

    const changeSliderValues = (values: [number, number]) => setValues(values)

    const showSliderValues = (values: [number, number]) => {
      console.log(values)
    }

    return (
      <Slider
        label={'this label'}
        value={values}
        minValue={values[0]}
        maxValue={values[1]}
        onValueCommit={showSliderValues}
        onChange={changeSliderValues}
      />
    )
  },
}
