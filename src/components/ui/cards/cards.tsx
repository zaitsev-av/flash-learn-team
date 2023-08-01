import { FC, useState } from 'react'

import { clsx } from 'clsx'
import { useNavigate } from 'react-router-dom'

import s from './cards.module.scss'

import { ArrowLeftIcon, DeleteIcon, EditIcon } from '@/assets'
import {
  Button,
  DeckEditMenu,
  DeleteDialog,
  Grade,
  ItemType,
  Pagination,
  Sort,
  Table,
  TextField,
  Typography,
} from '@/components'
import { columns } from '@/components/ui/cards/table-columns.ts'
import { testData } from '@/components/ui/cards/test-data.ts'
import { AddNewCard } from '@/components/ui/modal/add-new-card'
import { EditCard } from '@/components/ui/modal/edit-card'

type CardsPropsType = {
  userId: string
  img?: string
}

export const Cards: FC<CardsPropsType> = ({ userId, img }) => {
  const [sort, setSort] = useState<Sort>(null)
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('10')
  //todo раскомментировать когда подключим роуты
  const navigate = useNavigate()
  //userId - только для тестирования функционала
  const navigateBack = () => {
    navigate(-1)
  }
  //todo заменить переменную packName на имя колоды
  const packName = "Friend's pack"
  const classNames = {
    header: clsx(s.headerPage),
    textField: clsx(s.textField),
    back: clsx(s.back),
    btn: clsx(s.btn),
    container: clsx(s.container),
  }

  return (
    <div className={classNames.container}>
      <Button variant={'link'} onClick={navigateBack}>
        <Typography variant={'body2'} className={classNames.back}>
          <ArrowLeftIcon /> Back to Packs List
        </Typography>
      </Button>

      <div className={classNames.header}>{renderDeckHeading(userId, packName)}</div>

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
    tableRot: clsx(s.tableRoot),
  }

  return (
    <Table.Root className={s.tableRoot}>
      <Table.Head columns={columns} sort={sort} onSort={setSort} className={classNames.head} />
      <Table.Body>{rowData.slice(0, +pageSize).map((el: any) => TableRows(el, userId))}</Table.Body>
    </Table.Root>
  )
}
//todo типизация
const TableRows = (el: any, userId: string) => {
  return (
    <Table.Row key={el.question}>
      <Table.DataCell>{el.question}</Table.DataCell>
      <Table.DataCell>{el.answer}</Table.DataCell>
      <Table.DataCell>{el.updated}</Table.DataCell>
      <Table.DataCell>
        <Grade onClick={id => console.log(id)} grade={5} />
      </Table.DataCell>
      <Table.DataCell style={{ padding: '6px 24px' }}>
        <TableActions
          question={el.question}
          answer={el.answer}
          item={{ id: el.id, title: el.question }}
          editable={userId === '1'}
        />
      </Table.DataCell>
    </Table.Row>
  )
}

const renderDeckHeading = (userId: string, packName: string) => {
  const isMyPack = userId === '1'
  const headingText = isMyPack ? 'My pack' : packName
  const editMenu = isMyPack && (
    <DeckEditMenu
      onEdit={() => console.log('onEdit called')}
      onDelete={() => console.log('onDelete called')}
    />
  )
  const addNewCardSection = isMyPack && (
    <AddNewCard onSubmit={data => console.log(data)}>
      <Button variant={'primary'}>Add New Card</Button>
    </AddNewCard>
  )
  const learnToPackButton = !isMyPack && (
    <Button variant={'primary'} as={'a'} href={'#'}>
      Learn to Pack
    </Button>
  )

  return (
    <>
      <Typography variant={'large'} style={{ display: 'flex', gap: '16px' }}>
        {headingText}
        {editMenu}
      </Typography>
      {addNewCardSection}
      {learnToPackButton}
    </>
  )
}

type TableActionsProps = {
  editable?: boolean
  question: string
  answer: string
  item: ItemType
}
const TableActions: FC<TableActionsProps> = props => {
  const { item, editable = true, question, answer } = props

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {editable && (
        <>
          <EditCard question={question} answer={answer} onSubmit={data => console.log(data)}>
            <button>
              <EditIcon />
            </button>
          </EditCard>
          <DeleteDialog
            buttonTitle={'Delete Card'}
            item={item}
            onClick={id => {
              console.log(id)
            }}
            title={'Delete Card'}
          >
            <button>
              <DeleteIcon />
            </button>
          </DeleteDialog>
        </>
      )}
    </div>
  )
}