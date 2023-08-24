import { FC, useEffect, useState } from 'react'

import { clsx } from 'clsx'

import s from './decks.module.scss'

import { useAppDispatch } from '@/common'
import { useSort } from '@/common/hooks/useSort.ts'
import { AddNewDeckModal, Button, Pagination, Typography } from '@/components'
import { DeckTable } from '@/components/ui/decks/table/deck-table.tsx'
import { FilterPanel } from '@/components/ui/filter-panel'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services'
import { decksActions } from '@/services/decks/decks-slice.ts'
import { useDecksFilter } from '@/services/decks/hooks/useDecksFilter.ts'

type PacksProps = {}
export const Decks: FC<PacksProps> = () => {
  const [isAddDeckModalOpen, setAddDeckModalOpen] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const { sort, handlerSort, setSortValue, setSort } = useSort()
  const {
    min,
    max,
    isMe,
    page,
    myDecks,
    orderBy,
    pageSize,
    searchQuery,
    sliderValues,
    debouncedSearchQuery,
    setPage,
    setMyDecks,
    setPageSize,
    setSliderRange,
    setSearchQuery,
    setSliderValues,
  } = useDecksFilter()
  const [createDeck] = useCreateDeckMutation()

  const { data } = useGetDecksQuery({
    authorId: myDecks,
    currentPage: page,
    itemsPerPage: pageSize,
    name: debouncedSearchQuery,
    minCardsCount: min,
    maxCardsCount: max,
    orderBy: orderBy,
  })

  const totalCount = data?.pagination.totalItems ?? 0

  const resetFilters = () => {
    setSearchQuery('')
    setMyDecks('')
    setSortValue(null, () => dispatch(decksActions.setQueryParams({ orderBy: '' })))
    setSort(null)
    if (data) {
      setSliderValues([0, data.maxCardsCount])
      setSliderRange([0, data.maxCardsCount])
    }
  }

  useEffect(() => {
    if (data) {
      setSliderValues([0, data.maxCardsCount])
      setSliderRange([0, data.maxCardsCount])
    }
  }, [data?.maxCardsCount])

  const classNames = {
    container: clsx(s.container),
    title: clsx(s.pageTitle),
    root: clsx(s.wrapper),
  }

  return (
    <>
      <div className={classNames.container}>
        <div className={classNames.title}>
          <Typography variant={'large'}>Decks list</Typography>
          <AddNewDeckModal
            trigger={<Button>Add New Deck</Button>}
            onSubmit={data => {
              createDeck(data)
            }}
            isOpen={isAddDeckModalOpen}
            setIsOpen={setAddDeckModalOpen}
          />
        </div>
        <FilterPanel
          searchValue={searchQuery ?? ''}
          setSearchValue={setSearchQuery}
          sliderValues={sliderValues}
          setSliderValues={setSliderValues}
          onValueCommit={setSliderRange}
          maxSliderValue={data?.maxCardsCount ?? 100}
          setMyDecks={setMyDecks}
          resetFilters={resetFilters}
          isMe={isMe ?? ''}
          myDecks={myDecks ?? ''}
        />

        <DeckTable
          isMe={isMe ?? ''}
          data={data?.items ?? []}
          sort={sort}
          pageSize={pageSize ?? 10}
          handlerSort={handlerSort}
          setSortValue={setSortValue}
        />
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
