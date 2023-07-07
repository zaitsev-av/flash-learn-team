import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Grade, GradeType } from '@/components/ui/grade/grade.tsx'

const meta = {
  title: 'Components/Grade',
  component: Grade,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Grade>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { grade: 3 },
}
const ControlledGrade = () => {
  const [rating, setRating] = useState<GradeType>(0)

  return <Grade grade={rating} onClick={setRating} />
}

export const GradeWithControl: Story = {
  args: { grade: 0 },
  render: () => <ControlledGrade />,
}
