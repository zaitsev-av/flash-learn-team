import { FC, useState } from 'react'

import { clsx } from 'clsx'

import s from './cards.module.scss'

import { ArrowLeftIcon } from '@/assets'
import {
  Button,
  DeckEditMenu,
  Grade,
  Pagination,
  Sort,
  Table,
  TextField,
  Typography,
} from '@/components'
import { AddNewCard } from '@/components/ui/modal/add-new-card'
import { TableActions } from '@/components/ui/table-action-buttons'
import { columns } from '@/pages/cards/table-columns.ts'
import { testData } from '@/pages/cards/test-data.ts'

type CardsPropsType = {
  userId: string
  img?: string
}

export const Cards: FC<CardsPropsType> = ({ userId, img }) => {
  const [sort, setSort] = useState<Sort>(null)
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('10')
  //раскомментировать когда подключим роуты
  // const navigate = useNavigate()
  //userId - только для тестирования функционала
  const back = () => {
    // eslint-disable-next-line no-console
    console.log('back')
    // navigate(-1)
  }
  const classNames = {
    header: clsx(s.headerPage),
    textField: clsx(s.textField),
    back: clsx(s.back),
  }

  // eslint-disable-next-line no-console
  console.log(sort)

  return (
    <div style={{ width: '100%' }}>
      <Button variant={'link'} onClick={back}>
        <Typography variant={'body2'} className={classNames.back}>
          <ArrowLeftIcon /> Back to Packs List
        </Typography>
      </Button>
      <div className={classNames.header}>{renderDeckHeading(userId)}</div>
      {img && (
        <div style={{ width: '170px', height: '107px' }}>
          <img src={img} alt="" style={{ width: '170px', height: '107px' }} />
        </div>
      )}
      <TextField inputType={'search'} className={classNames.textField} />
      <CardTable
        rowData={testData}
        sort={sort}
        setSort={setSort}
        userId={userId}
        pageSize={pageSize}
      />
      <Pagination
        currentPage={page}
        totalCount={14}
        pageSize={+pageSize}
        siblingCount={3}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  )
}

type CardTablePropsType = {
  rowData: any
  userId: string
  pageSize: string
  sort: Sort
  setSort: (sort: Sort) => void
}
const CardTable: FC<CardTablePropsType> = props => {
  const { rowData, sort, setSort, userId, pageSize } = props
  const classNames = {
    head: clsx(s.tableHead),
  }

  return (
    <Table.Root style={{ width: '100%', marginBottom: '25px' }}>
      <Table.Head columns={columns} sort={sort} onSort={setSort} className={classNames.head} />
      <Table.Body>{rowData.slice(0, +pageSize).map((el: any) => TableRows(el, userId))}</Table.Body>
    </Table.Root>
  )
}
const TableRows = (el: any, userId: string) => {
  return (
    <Table.Row key={el.question}>
      <Table.DataCell>{el.question}</Table.DataCell>
      <Table.DataCell>{el.answer}</Table.DataCell>
      <Table.DataCell>{el.updated}</Table.DataCell>
      <Table.DataCell>
        <Grade onClick={id => console.log(id)} grade={5} />
      </Table.DataCell>
      <Table.DataCell>
        <TableActions item={{ id: el.id, title: el.question }} editable={userId === '1'} />
      </Table.DataCell>
    </Table.Row>
  )
}

const renderDeckHeading = (userId: string) => {
  const me = {
    id: '1',
  }

  return userId === me.id ? (
    <>
      <Typography variant={'large'} style={{ display: 'flex', gap: '16px' }}>
        My pack
        <DeckEditMenu
          onEdit={() => console.log('onEdit called')}
          onDelete={() => console.log('onDelete called')}
        />
      </Typography>
      <AddNewCard onSubmit={data => console.log(data)}>
        <Button variant={'primary'}>Add New Card</Button>
      </AddNewCard>
    </>
  ) : (
    <>
      <Typography variant={'large'} style={{ display: 'flex', gap: '16px' }}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Friend's Pack
      </Typography>
      <Button variant={'primary'} as={'a'} href={'#'}>
        Learn to Pack
      </Button>
    </>
  )
}
