import { FC } from 'react'

import { useParams } from 'react-router-dom'

import { Page } from '@/components'
import { LearnDesk } from '@/components/ui/learn-deck'
import { useLearnDeckQuery } from '@/services'

export const LearnDeckPage: FC = () => {
  const { id } = useParams()
  const { data } = useLearnDeckQuery(id ?? '')

  console.log(data)

  return (
    <Page>
      <LearnDesk
        packName={''}
        question={data?.question ?? ''}
        attempts={''}
        answer={data?.answer ?? ''}
        loadNextQuestion={() => {}}
        onChange={() => {}}
        value={''}
      />
    </Page>
  )
}
