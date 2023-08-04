import { FC } from 'react'

import { clsx } from 'clsx'

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
import { AddNewCard } from '@/components/ui/modal/add-new-card'
import { EditCard } from '@/components/ui/modal/edit-card'
import { CardsItem, CardsResponseType } from '@/services/cards/cards-types.ts'
import { useCards } from '@/services/cards/useCards.ts'

type CardsPropsType = {
  userId: string
  img?: string
}

export const Cards: FC<CardsPropsType> = ({ userId, img }) => {
  const { cardsData, sort, setSort, deckName, pageSize, setPageSize, setPage, page, navigateBack } =
    useCards()
  const classNames = {
    container: clsx(s.container),
    btn: clsx(s.btn),
    back: clsx(s.back),
    header: clsx(s.headerPage),
    textField: clsx(s.textField),
  }

  return (
    <div className={classNames.container}>
      <Button variant={'link'} onClick={navigateBack}>
        <Typography variant={'body2'} className={classNames.back}>
          <ArrowLeftIcon /> Back to Decks List
        </Typography>
      </Button>

      <div className={classNames.header}>{renderDeckHeading(userId, deckName)}</div>

      {img && (
        <div style={{ width: '170px', height: '107px' }}>
          <img src={img} alt="" style={{ width: '170px', height: '107px' }} />
        </div>
      )}

      <TextField inputType={'search'} className={classNames.textField} />

      <CardTable
        rowData={cardsData}
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
  rowData: CardsResponseType | undefined
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
      <Table.Body>
        {rowData?.items.slice(0, +pageSize).map((el: any) => TableRows(el, userId))}
      </Table.Body>
    </Table.Root>
  )
}
const TableRows = (el: CardsItem, userId: string) => {
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
