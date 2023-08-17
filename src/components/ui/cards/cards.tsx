import { FC, useState } from 'react'

import { clsx } from 'clsx'
import { Link, useNavigate } from 'react-router-dom'

import s from './cards.module.scss'

import { ArrowLeftIcon, DeleteIcon, EditIcon } from '@/assets'
import { transformDate, useAppDispatch, useSort } from '@/common'
import {
  Button,
  DeckEditMenu,
  DeleteModal,
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
import { CardsItem, CardsResponseType, useGetCardsQuery } from '@/services'
import { useDeleteCardMutation, useUpdateCardMutation } from '@/services/cards/cards-api.ts'
import { cardsAction } from '@/services/cards/cards-slice.ts'
import { useCards } from '@/services/cards/useCards.ts'

type CardsPropsType = {}

export const Cards: FC<CardsPropsType> = () => {
  const { handlerSort, sort, setSortValue } = useSort()
  const navigate = useNavigate()

  const {
    page,
    answer,
    deckId,
    orderBy,
    deckImg,
    isMyDeck,
    deckName,
    pageSize,
    question,
    totalCount,
    setPage,
    setPageSize,
    handleUpdateDeck,
    handleDeleteDeck,
    handleCreateCard,
  } = useCards()

  const navigateBack = () => {
    navigate(-1)
  }

  const { data: cardsData } = useGetCardsQuery({
    id: deckId,
    answer: answer,
    question: question,
    itemsPerPage: pageSize,
    currentPage: page,
    orderBy,
  })

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
          deckId={deckId ?? ''}
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
        handlerSort={handlerSort}
        isMyDeck={isMyDeck}
        pageSize={pageSize ?? 10}
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
  )
}

type CardTablePropsType = {
  isMyDeck: boolean
  pageSize: number
  sort: Sort
  rowData: CardsResponseType | undefined
  setSortValue: (sort: Sort, handler: (sort: string) => void) => void
  handlerSort: (key: string, sortable?: boolean) => void
}
const CardTable: FC<CardTablePropsType> = props => {
  const dispatch = useAppDispatch()
  const { rowData, isMyDeck, pageSize, sort, handlerSort, setSortValue } = props
  const classNames = {
    head: clsx(s.tableHead),
    tableRot: clsx(s.tableRoot),
  }

  return (
    <Table.Root className={s.tableRoot}>
      <Table.Head
        columns={columns}
        onSort={sort =>
          setSortValue(sort, sort => dispatch(cardsAction.setQueryParams({ orderBy: sort })))
        }
        sort={sort}
        handlerSort={handlerSort}
        className={classNames.head}
      />
      <Table.Body>
        {rowData?.items.slice(0, pageSize).map(el => TableRows(el, isMyDeck))}
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
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)
  const [isAddCardModalOpen, setAddCardModalOpen] = useState<boolean>(false)
  const [isEditDeckModalOpen, setEditDeckModalOpen] = useState<boolean>(false)
  const { deckName, isMyDeck, handleCreateCard, onDelete, onEdit, deckId } = props

  const editMenu = isMyDeck && (
    <DeckEditMenu
      isEditDeckModalOpen={isEditDeckModalOpen}
      setEditDeckModalOpen={setEditDeckModalOpen}
      deckId={deckId}
      onEdit={onEdit}
      onDelete={onDelete}
      deckName={deckName}
      isDeleteModalOpen={isDeleteModalOpen}
      setDeleteModalOpen={setDeleteModalOpen}
    />
  )

  const addNewCardSection = isMyDeck && (
    <AddNewCard
      onSubmit={({ question, answer }) => handleCreateCard(question, answer)}
      setIsOpen={setAddCardModalOpen}
      isOpen={isAddCardModalOpen}
    >
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
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)
  const [isEditCardModalOpen, setEditCardModalOpen] = useState<boolean>(false)

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
            isOpen={isEditCardModalOpen}
            setIsOpen={setEditCardModalOpen}
          >
            <button className={classNames.btn}>
              <EditIcon />
            </button>
          </EditCard>
          <DeleteModal
            isOpen={isDeleteModalOpen}
            setIsOpen={setDeleteModalOpen}
            buttonTitle={'Delete Card'}
            item={item}
            onClick={id => deleteCard(id)}
            title={'Delete Card'}
          >
            <button className={classNames.btn}>
              <DeleteIcon />
            </button>
          </DeleteModal>
        </>
      )}
    </div>
  )
}
