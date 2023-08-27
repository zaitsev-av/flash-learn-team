import { FC, useState } from 'react'

import { useParams } from 'react-router-dom'

import { Page } from '@/components'
import { LearnDesk } from '@/components/ui/learn-deck'
import { EmptyDeck } from '@/components/ui/loaders/empty-deck/empty-deck.tsx'
import { InitialLoader } from '@/components/ui/loaders/initial-loader/initial-loader.tsx'
import { useGetDeckQuery, useLearnDeckQuery, useUpdateCardGradeMutation } from '@/services'

export const LearnDeckPage: FC = () => {
  const [value, setValue] = useState<string>('')
  const { id } = useParams<{ id: string }>()
  const { data: cardData, isLoading: cardIsLoading } = useLearnDeckQuery(id ?? '')
  const [updateCardGrade] = useUpdateCardGradeMutation()
  const { data: deckData, isLoading: deckIsLoading } = useGetDeckQuery(id ?? '')

  const handleUpdateCardGrade = () => {
    if (id && cardData) {
      updateCardGrade({ id, cardId: cardData.id, grade: +value })
      setValue('')
    }
  }

  console.log(cardIsLoading)
  if (cardIsLoading && deckIsLoading) return <InitialLoader />

  console.log(cardData)
  if (cardData === undefined) {
    return (
      <Page>
        <EmptyDeck />
      </Page>
    )
  }

  return (
    <Page>
      {cardData && deckData && (
        <LearnDesk
          deckName={deckData.name}
          question={cardData.question}
          questionImg={cardData.questionImg}
          attempts={cardData.shots}
          answer={cardData.answer}
          answerImg={cardData.answerImg}
          loadNextQuestion={handleUpdateCardGrade}
          onChange={setValue}
          value={value}
        />
      )}
    </Page>
  )
}
