import { FC } from 'react'

import { useParams } from 'react-router-dom'

import { Page } from '@/components'
import { LearnDesk } from '@/components/ui/learn-deck'
import { useLearnDeckQuery, useUpdateCardGradeMutation } from '@/services'

export const LearnDeckPage: FC = () => {
  const { id } = useParams()
  const { data } = useLearnDeckQuery(id ?? '')
  const [updateCardGrade] = useUpdateCardGradeMutation()

  console.log(data)
  const handleUpdateCardGrade = (value: string) => {
    updateCardGrade({ id: id ?? '', cardId: data?.id ?? '', grade: +value })
  }

  return (
    <Page>
      <LearnDesk
        packName={''}
        question={data?.question ?? ''}
        attempts={''}
        answer={data?.answer ?? ''}
        loadNextQuestion={() => {}}
        onChange={handleUpdateCardGrade}
        value={''}
      />
    </Page>
  )
}
