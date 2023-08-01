import { FC } from 'react'

import { clsx } from 'clsx'
import { useNavigate } from 'react-router-dom'

import s from './decks.module.scss'

import { AddNewPackModal, Button, Pagination, Table, Typography } from '@/components'
import { FilterPanel } from '@/components/ui/filter-panel'
import { columns } from '@/components/ui/table/table.stories.tsx'
import { TableActions } from '@/components/ui/table-action-buttons'
import { useDecks } from '@/services/decks/hooks/useDecks.ts'

type PacksProps = {}
export const Decks: FC<PacksProps> = () => {
  const {
    data,
    sort,
    page,
    searchQuery,
    pageSize,
    myDecks,
    setPage,
    setSort,
    setPageSize,
    sliderValues,
    resetFilters,
    setFilterRange,
    setSliderValues,
    setSearchQuery,
    setMyDecks,
  } = useDecks()
  const navigate = useNavigate()

  const classNames = {
    container: clsx(s.container),
    title: clsx(s.pageTitle),
    root: clsx(s.wrapper),
  }

  const tableRows = data?.items.slice(0, +pageSize).map(el => (
    <Table.Row key={el.id}>
      <Table.DataCell onClick={() => navigate(`/cards/${el.id}`)} style={{ cursor: 'pointer' }}>
        {el.name}
      </Table.DataCell>
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
          <Typography variant={'large'}>Decks list</Typography>
          <AddNewPackModal
            trigger={<Button>Add New Deck</Button>}
            onSubmit={data => {
              // eslint-disable-next-line no-console
              console.log(data)
            }}
          />
        </div>
        <FilterPanel
          searchValue={searchQuery}
          setSearchValue={setSearchQuery}
          sliderValues={sliderValues}
          setSliderValues={setSliderValues}
          onValueCommit={setFilterRange}
          maxSliderValue={data?.maxCardsCount ?? 100}
          setMyDecks={setMyDecks}
          resetFilters={resetFilters}
          myDecks={myDecks}
        />

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
