import { FC } from 'react'

import { Page } from '@/components'
import { EmptyDeck } from '@/components/ui/loaders/empty-deck/empty-deck.tsx'

export const EmptyDeckPage: FC = () => {
  return (
    <Page>
      <EmptyDeck />
    </Page>
  )
}
