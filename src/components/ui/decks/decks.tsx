import { FC, useEffect, useState } from 'react'

import { clsx } from 'clsx'
import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'

import s from './decks.module.scss'

import { useAppDispatch, useAppSelector } from '@/common'
import { useSort } from '@/common/hooks/useSort.ts'
import { AddNewPackModal, Button, Pagination, Table, Typography } from '@/components'
import { FilterPanel } from '@/components/ui/filter-panel'
import { TableActions } from '@/components/ui/table-action-buttons'
import { columns, transformDate } from '@/helpers'
import { useDebounce } from '@/helpers/hooks/useDebounce.ts'
import { useAuthMeQuery, useCreateDeckMutation, useGetDecksQuery } from '@/services'
import {
  selectGetAuthorId,
  selectGetCurrentPage,
  selectGetItemsPerPage,
  selectGetName,
  selectGetOrderBy,
} from '@/services/decks/decks-selectors.ts'
import { decksActions } from '@/services/decks/decks-slice.ts'

type PacksProps = {}
export const Decks: FC<PacksProps> = () => {
  const dispatch = useAppDispatch()
  const { sort, handlerSort, setSortValue, setSort } = useSort()
  const navigate = useNavigate()
  const [createDeck] = useCreateDeckMutation()
  const { data: authData } = useAuthMeQuery()

  const [sliderValues, setSliderValues] = useState<[number, number]>([0, 100])
  const [filterRange, setFilterRange] = useState<[number, number]>([0, 100])
  const isMe = authData?.id

  const searchQuery = useAppSelector(selectGetName)
  const myDecks = useAppSelector(selectGetAuthorId)
  const orderBy = useAppSelector(selectGetOrderBy)
  const page = useAppSelector(selectGetCurrentPage)
  const pageSize = useAppSelector(selectGetItemsPerPage)
  const debouncedSearchQuery = useDebounce(searchQuery, 500)

  const setPage = (value: number) => {
    dispatch(decksActions.setQueryParams({ currentPage: value }))
  }

  const setPageSize = (pageSize: string) => {
    dispatch(decksActions.setQueryParams({ itemsPerPage: +pageSize }))
  }
  const setMyDecks = (id: string) => {
    dispatch(decksActions.setQueryParams({ authorId: id }))
  }

  const setSearchQuery = (searchQuery: string) => {
    dispatch(decksActions.setQueryParams({ name: searchQuery }))
  }

  const { data } = useGetDecksQuery({
    authorId: myDecks ?? '',
    currentPage: page ?? 1,
    itemsPerPage: pageSize ?? 10,
    name: debouncedSearchQuery ?? '',
    minCardsCount: filterRange[0].toString(),
    maxCardsCount: filterRange[1].toString(),
    orderBy: orderBy ?? '',
  })

  const totalCount = data?.pagination.totalItems ?? 0

  const resetFilters = () => {
    setSearchQuery('')
    setMyDecks('')
    setSortValue(null, decksActions.setQueryParams)
    setSort(null)
    if (data) {
      setSliderValues([0, data.maxCardsCount])
      setFilterRange([0, data.maxCardsCount])
    }
  }

  useEffect(() => {
    if (data) {
      setSliderValues([0, data.maxCardsCount])
      setFilterRange([0, data.maxCardsCount])
    }
  }, [data?.maxCardsCount])

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
          searchValue={searchQuery ?? ''}
          setSearchValue={setSearchQuery}
          sliderValues={sliderValues}
          setSliderValues={setSliderValues}
          onValueCommit={setFilterRange}
          maxSliderValue={data?.maxCardsCount ?? 100}
          setMyDecks={setMyDecks}
          resetFilters={resetFilters}
          isMe={isMe ?? ''}
          myDecks={myDecks ?? ''}
        />

        <Table.Root>
          <Table.Head
            onSort={sort => setSortValue(sort, decksActions.setQueryParams)}
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
