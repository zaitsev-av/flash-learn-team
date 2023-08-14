import { FC } from 'react'

import { useAppDispatch } from '@/common'
import { Sort, Table } from '@/components'
import { columns } from '@/components/ui/decks/table/columns-deck-table.ts'
import { TableRows } from '@/components/ui/decks/table/table-rows.tsx'
import { ItemsType } from '@/services'
import { decksActions } from '@/services/decks/decks-slice.ts'

type DeckTablePropsType = {
  isMe: string
  data: ItemsType[]
  sort: Sort
  setSortValue: (sort: Sort, handler: (sort: string) => void) => void
  pageSize: number
  handlerSort: (key: string, sortable?: boolean) => void
}

export const DeckTable: FC<DeckTablePropsType> = props => {
  const dispatch = useAppDispatch()
  const { setSortValue, sort, handlerSort, data, pageSize, isMe } = props

  return (
    <Table.Root>
      <Table.Head
        onSort={sort =>
          setSortValue(sort, sort => dispatch(decksActions.setQueryParams({ orderBy: sort })))
        }
        sort={sort}
        handlerSort={handlerSort}
        columns={columns}
      ></Table.Head>
      <Table.Body>
        <TableRows data={data} pageSize={pageSize} isMe={isMe} />
      </Table.Body>
    </Table.Root>
  )
}
