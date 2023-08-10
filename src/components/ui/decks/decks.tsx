import { FC } from 'react'

import { clsx } from 'clsx'
import { useNavigate } from 'react-router-dom'

import s from './decks.module.scss'

import { useSort } from '@/common/hooks/useSort.ts'
import { AddNewPackModal, Button, Pagination, Table, Typography } from '@/components'
import { FilterPanel } from '@/components/ui/filter-panel'
import { TableActions } from '@/components/ui/table-action-buttons'
import { columns, transformDate } from '@/helpers'
import { useCreateDeckMutation } from '@/services'
import { useDecks } from '@/services/decks/hooks/useDecks.ts'

type PacksProps = {}
export const Decks: FC<PacksProps> = () => {
  const {
    isMe,
    data,
    page,
    searchQuery = '',
    pageSize,
    myDecks,
    totalCount,
    setPage,
    setSort,
    setPageSize,
    sliderValues,
    handleResetFilters,
    setFilterRange,
    setSliderValues,
    setSearchQuery,
    setMyDecks,
  } = useDecks()
  const { sort, handlerSort } = useSort()
  const navigate = useNavigate()
  const [createDeck] = useCreateDeckMutation()

  const classNames = {
    container: clsx(s.container),
    title: clsx(s.pageTitle),
    root: clsx(s.wrapper),
  }

  const tableRows = data?.items.slice(0, pageSize).map(el => (
    <Table.Row key={el.id}>
      <Table.DataCell onClick={() => navigate(`/cards/${el.id}`)} style={{ cursor: 'pointer' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {el.name}
          {el.cover === null ? '' : <img src={el.cover} alt="" width="70px" height="50px" />}
        </span>
      </Table.DataCell>
      <Table.DataCell>{el.cardsCount}</Table.DataCell>
      <Table.DataCell>{transformDate(el.updated)}</Table.DataCell>
      <Table.DataCell>{el.author.name}</Table.DataCell>
      <Table.DataCell>
        <TableActions
          editable={el.userId === isMe}
          item={{ id: el.id, title: el.name, isPrivate: el.isPrivate }}
        />
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
              createDeck({ name: data.namePack, isPrivate: data.private ?? false })
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
          resetFilters={handleResetFilters}
          isMe={isMe ?? ''}
          myDecks={myDecks}
        />

        <Table.Root>
          <Table.Head
            onSort={setSort}
            sort={sort}
            handlerSort={handlerSort}
            columns={columns}
          ></Table.Head>
          <Table.Body>{tableRows}</Table.Body>
        </Table.Root>
        <Pagination
          currentPage={page ?? 1}
          totalCount={totalCount}
          pageSize={pageSize ?? 10}
          siblingCount={3}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      </div>
    </>
  )
}
