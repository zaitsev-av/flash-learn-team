import { useState } from 'react'

import { Meta } from '@storybook/react'

import { CustomSlider } from '@/components/ui/slider/custom-slider.tsx'

const meta = {
  title: 'Components/Slider',
  component: CustomSlider,
  tags: ['autodocs'],
  argTypes: {
    minValue: { control: 'number' },
    maxValue: { control: 'number' },
    onValueCommit: () => {},
    onChange: () => {},
  },
} satisfies Meta<typeof CustomSlider>

export default meta

export const Slider_ = {
  render: () => {
    const [values, setValues] = useState<[number, number]>([0, 100])

    const changeSliderValues = (values: [number, number]) => setValues(values)

    const showSliderValues = (values: [number, number]) => {
      console.log(values)
    }

    return (
      <CustomSlider
        minValue={values[0]}
        maxValue={values[1]}
        onValueCommit={showSliderValues}
        onChange={changeSliderValues}
      />
    )
  },
}
