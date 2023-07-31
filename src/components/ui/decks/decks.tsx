import { FC, useEffect, useState } from 'react'

import { clsx } from 'clsx'

import s from './decks.module.scss'

// import DeleteIcon from '@/assets/icons/DeleteIcon.tsx'
import {
  AddNewPackModal,
  Button,
  Pagination,
  Sort,
  Table,
  // TextField,
  Typography,
} from '@/components'
import { FilterPanel } from '@/components/ui/filter-panel'
// import { Slider } from '@/components/ui/slider'
import { columns } from '@/components/ui/table/table.stories.tsx'
import { TableActions } from '@/components/ui/table-action-buttons'
// import { Tabs } from '@/components/ui/tabs'
import { useGetDecksQuery } from '@/services'
// import { useDecks } from '@/services/decks/hooks/useDecks.ts'

type PacksProps = {}
export const Decks: FC<PacksProps> = () => {
  /*  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('10')
  const [sort, setSort] = useState<Sort>(null)
  const sortValue =
    sort?.direction === undefined || null ? '' : `${sort?.columnKey}-${sort?.direction}`
  const { data } = useGetDecksQuery({
    authorId: '',
    currentPage: page,
    itemsPerPage: +pageSize,
    name: '',
    maxCardsCount: '',
    minCardsCount: '',
    orderBy: sortValue,
  })*/
  // const { data, sort, page, pageSize, setPage, setSort, setPageSize } = useDecks()

  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('10')
  const [sort, setSort] = useState<Sort>(null)
  const [search, setSearch] = useState<string>('')
  const [sliderValues, setSliderValues] = useState<[number, number]>([0, 100])

  const sortValue =
    sort?.direction === undefined || null ? '' : `${sort?.columnKey}-${sort?.direction}`
  const { data } = useGetDecksQuery({
    authorId: '',
    currentPage: page,
    itemsPerPage: +pageSize,
    name: search,
    minCardsCount: sliderValues[0].toString(),
    maxCardsCount: sliderValues[1].toString(),
    orderBy: sortValue,
  })

  useEffect(() => {
    setSliderValues([0, data?.maxCardsCount ?? 100])
  }, [data?.maxCardsCount])

  console.log(data)
  console.log(sliderValues)
  // console.log('data', data)
  // console.log('error', error)
  // console.log('isLoading', isLoading)

  const classNames = {
    container: clsx(s.container, 'container'),
    title: clsx(s.pageTitle),
    root: clsx(s.wrapper),
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
        <FilterPanel
          searchValue={search}
          setSearchValue={setSearch}
          sliderValues={sliderValues}
          setSliderValues={setSliderValues}
        />
        {/*        <div className={classNames.root}>
          <TextField
            value={search}
            onChange={e => setSearch(e.currentTarget.value)}
            title={''}
            inputType={'search'}
            className={s.text_field}
          />
          <Tabs
            tabs={[
              { tabName: 'Me cards', value: '123' },
              { tabName: 'All cards', value: '456' },
            ]}
            label={'Show packs cards'}
            defaultValue={'456'}
            onValueChange={() => {}}
          />
          <Slider
            min={0}
            max={sliderValues[1]}
            minValue={sliderValues[0]}
            maxValue={sliderValues[1]}
            onValueCommit={() => {}}
            onChange={setSliderValues}
            label={'Number of cards'}
            value={sliderValues}
            className={s.slider}
            key={sliderValues[0] + sliderValues[1]}
          />
          <Button variant={'secondary'} className={s.btn}>
            <DeleteIcon />
            <Typography variant={'subtitle2'}>Clear Filter</Typography>
          </Button>
        </div>
        )*/}
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
