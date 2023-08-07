import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { LearnDesk } from '@/components/ui/learn-deck/learn-desk.tsx'

const meta = {
  title: 'Modals/Learn desk',
  component: LearnDesk,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LearnDesk>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    deckName: 'Deck Name',
    question: 'How "This" works in JavaScript?',
    attempts: 10,
    answer: 'This is how "This" works in JavaScript',
    loadNextQuestion: () => {},
    onChange: () => {},
    value: '',
  },
  render: ({ answer, attempts, question, loadNextQuestion, deckName }) => {
    const [value, setValue] = useState('value1')

    return (
      <LearnDesk
        deckName={deckName}
        question={question}
        attempts={attempts}
        answer={answer}
        loadNextQuestion={loadNextQuestion}
        onChange={setValue}
        value={value}
      />
    )
  },
}
