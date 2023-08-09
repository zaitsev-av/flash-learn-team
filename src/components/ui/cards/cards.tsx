import { FC } from 'react'

import { clsx } from 'clsx'
import { Link } from 'react-router-dom'

import s from './cards.module.scss'

import { ArrowLeftIcon, DeleteIcon, EditIcon } from '@/assets'
import {
  Button,
  DeckEditMenu,
  DeleteDialog,
  Grade,
  GradeType,
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
import { transformDate } from '@/helpers'
import { CardsItem, CardsResponseType } from '@/services'
import { useDeleteCardMutation, useUpdateCardMutation } from '@/services/cards/cards-api.ts'
import { useCards } from '@/services/cards/useCards.ts'

type CardsPropsType = {}

export const Cards: FC<CardsPropsType> = () => {
  const {
    isMyDeck,
    cardsData,
    sort,
    setSort,
    deckName,
    pageSize,
    setPageSize,
    setPage,
    page,
    navigateBack,
    deckImg,
    deckId,
    handleUpdateDeck,
    handleDeleteDeck,
    handleCreateCard,
  } = useCards()

  const classNames = {
    container: clsx(s.container),
    btn: clsx(s.btn),
    back: clsx(s.back),
    header: clsx(s.headerPage),
    textField: clsx(s.textField),
    backArrow: clsx(s.content),
  }

  return (
    <div className={classNames.container}>
      <Button variant={'link'} onClick={navigateBack} className={classNames.back}>
        <Typography variant={'body2'} className={classNames.backArrow}>
          <ArrowLeftIcon /> Back to Decks List
        </Typography>
      </Button>

      <div className={classNames.header}>
        <RenderDeckHeading
          isMyDeck={isMyDeck}
          deckName={deckName}
          deckId={deckId}
          handleCreateCard={handleCreateCard}
          onDelete={handleDeleteDeck}
          onEdit={handleUpdateDeck}
        />
      </div>

      {deckImg && (
        <div style={{ width: '170px', height: '107px' }}>
          <img src={deckImg} alt="" style={{ width: '170px', height: '107px' }} />
        </div>
      )}

      <TextField inputType={'search'} className={classNames.textField} />

      <CardTable
        rowData={cardsData}
        sort={sort}
        setSort={setSort}
        isMyDeck={isMyDeck}
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
  isMyDeck: boolean
  pageSize: string
  sort: Sort
  rowData: CardsResponseType | undefined
  setSort: (sort: Sort) => void
}
const CardTable: FC<CardTablePropsType> = props => {
  const { rowData, setSort, isMyDeck, pageSize } = props
  const classNames = {
    head: clsx(s.tableHead),
    tableRot: clsx(s.tableRoot),
  }

  return (
    <Table.Root className={s.tableRoot}>
      <Table.Head columns={columns} onSort={setSort} className={classNames.head} />
      <Table.Body>
        {rowData?.items.slice(0, +pageSize).map(el => TableRows(el, isMyDeck))}
      </Table.Body>
    </Table.Root>
  )
}
const TableRows = (el: CardsItem, isMyDeck: boolean) => {
  return (
    <Table.Row key={el.id}>
      <Table.DataCell>{el.question}</Table.DataCell>
      <Table.DataCell>{el.answer}</Table.DataCell>
      <Table.DataCell>{transformDate(el.updated)}</Table.DataCell>
      <Table.DataCell>
        <Grade grade={el.grade as GradeType} />
      </Table.DataCell>
      <Table.DataCell style={{ padding: '6px 24px' }}>
        <TableActions
          question={el.question}
          answer={el.answer}
          item={{ id: el.id, title: el.question }}
          editable={isMyDeck}
        />
      </Table.DataCell>
    </Table.Row>
  )
}

type RenderDeckHeadingType = {
  deckId: string
  deckName: string
  isMyDeck: boolean
  onEdit: (name: string, isPrivate: boolean) => void
  onDelete: (id: string) => void
  handleCreateCard: (question: string, answer: string) => void
}

const RenderDeckHeading: FC<RenderDeckHeadingType> = props => {
  const { deckName, isMyDeck, handleCreateCard, onDelete, onEdit, deckId } = props

  const editMenu = isMyDeck && (
    <DeckEditMenu onEdit={onEdit} onDelete={onDelete} deckId={deckId} deckName={deckName} />
  )

  const addNewCardSection = isMyDeck && (
    <AddNewCard onSubmit={({ question, answer }) => handleCreateCard(question, answer)}>
      <Button variant={'primary'}>Add New Card</Button>
    </AddNewCard>
  )
  const learnToPackButton = !isMyDeck && (
    <Button variant={'primary'} as={Link} to={`/learn/${deckId}`}>
      Learn to Pack
    </Button>
  )

  return (
    <>
      <Typography variant={'large'} style={{ display: 'flex', gap: '16px' }}>
        {deckName}
        {editMenu}
      </Typography>
      {addNewCardSection}
      {learnToPackButton}
    </>
  )
}

type TableActionsProps = {
  item: ItemType
  question: string
  answer: string
  editable?: boolean
}
const TableActions: FC<TableActionsProps> = props => {
  const { item, editable = true, question, answer } = props
  const [updateCard] = useUpdateCardMutation()
  const [deleteCard] = useDeleteCardMutation()
  const classNames = {
    btn: clsx(s.btn),
  }

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {editable && (
        <>
          <EditCard
            question={question}
            answer={answer}
            onSubmit={({ question, answer }) => updateCard({ id: item.id, question, answer })}
          >
            <button className={classNames.btn}>
              <EditIcon />
            </button>
          </EditCard>
          <DeleteDialog
            buttonTitle={'Delete Card'}
            item={item}
            onClick={id => deleteCard(id)}
            title={'Delete Card'}
          >
            <button className={classNames.btn}>
              <DeleteIcon />
            </button>
          </DeleteDialog>
        </>
      )}
    </div>
  )
}
