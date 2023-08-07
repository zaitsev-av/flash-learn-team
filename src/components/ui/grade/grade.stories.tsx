import type { Meta, StoryObj } from '@storybook/react'

import { Grade } from '@/components/ui/grade/grade.tsx'

const meta = {
  title: 'Components/Grade',
  component: Grade,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof Grade>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { grade: 3 },
}
const ControlledGrade = () => {
  return <Grade grade={0} />
}

export const GradeWithControl: Story = {
  args: { grade: 0 },
  render: () => <ControlledGrade />,
}
