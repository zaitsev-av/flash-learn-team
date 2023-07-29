import { FC, useState } from 'react'

import { clsx } from 'clsx'

import s from './packs.module.scss'

import { AddNewPackModal, Button, Pagination, Sort, Table, Typography } from '@/components'
import { FilterPanel } from '@/components/ui/filter-panel'
import { columns } from '@/components/ui/table/table.stories.tsx'
import { TableActions } from '@/components/ui/table-action-buttons'
import { useGetDecksQuery } from '@/services'

type PacksProps = {}
export const Decks: FC<PacksProps> = () => {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('7')
  const [sort, setSort] = useState<Sort>(null)
  const { data } = useGetDecksQuery({
    authorId: '',
    currentPage: page,
    itemsPerPage: +pageSize,
    name: '',
    maxCardsCount: '',
    minCardsCount: '',
    orderBy: '',
  })

  console.log(data)
  // console.log('data', data)
  // console.log('error', error)
  // console.log('isLoading', isLoading)

  const classNames = {
    container: clsx(s.container, 'container'),
    title: clsx(s.pageTitle),
  }

  const tableRows = data?.items.slice(0, +pageSize).map(el => (
    <Table.Row key={el.id}>
      <Table.DataCell>{el.name}</Table.DataCell>
      <Table.DataCell>{el.cardsCount}</Table.DataCell>
      <Table.DataCell>{el.updated}</Table.DataCell>
      <Table.DataCell>{el.author.name}</Table.DataCell>
      <Table.DataCell>
        <TableActions editable={false} item={{ id: el.id, title: el.name }} />
      </Table.DataCell>
    </Table.Row>
  ))

  return (
    <>
      <div className={classNames.container}>
        <div className={classNames.title}>
          <Typography variant={'large'}>Pack list</Typography>
          <AddNewPackModal
            trigger={<Button>Add New Pack</Button>}
            onSubmit={data => {
              console.log(data)
            }}
          />
        </div>

        <FilterPanel />

        <Table.Root>
          <Table.Head sort={sort} onSort={setSort} columns={columns}></Table.Head>
          <Table.Body>{tableRows}</Table.Body>
        </Table.Root>

        <Pagination
          currentPage={page}
          totalCount={400}
          pageSize={+pageSize}
          siblingCount={3}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      </div>
    </>
  )
}
