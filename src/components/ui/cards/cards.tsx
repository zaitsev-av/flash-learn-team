import { FC, useState } from 'react'

import { clsx } from 'clsx'
import { Link, useNavigate } from 'react-router-dom'

import s from './cards.module.scss'

import { ArrowLeftIcon } from '@/assets'
import { useImageOpen, useSort } from '@/common'
import {
  Button,
  CardEditorModal,
  DeckEditMenu,
  ImageModal,
  Pagination,
  TextField,
  Typography,
} from '@/components'
import { CardTable } from '@/components/ui/cards/cards-table/cards-table.tsx'
import { useGetCardsQuery } from '@/services'
import { useCards } from '@/services/cards/useCards.ts'

type CardsPropsType = {}

export const Cards: FC<CardsPropsType> = () => {
  const { handlerSort, sort, setSortValue } = useSort()
  const navigate = useNavigate()
  const { openImageInModal, setImageModalOpen, image, isImageModalOpen } = useImageOpen()

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
    setAnswer,
    handleUpdateDeck,
    handleDeleteDeck,
    handleCreateCard,
    debounceAnswerValue,
  } = useCards()

  const navigateBack = () => {
    navigate(-1)
  }

  const { data: cardsData } = useGetCardsQuery({
    id: deckId,
    answer: debounceAnswerValue,
    question: question,
    itemsPerPage: pageSize,
    currentPage: page,
    orderBy,
  })

  const deckImage = deckImg && (
    <div style={{ width: '170px', height: '107px' }} onClick={() => openImageInModal(deckImg)}>
      <img src={deckImg} alt="" style={{ width: '170px', height: '107px', cursor: 'pointer' }} />
    </div>
  )

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
      <ImageModal
        src={image}
        alt={'image'}
        isOpen={isImageModalOpen}
        setIsOpen={setImageModalOpen}
      />
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

      {deckImage}

      <TextField
        inputType={'search'}
        placeholder={'search'}
        value={answer}
        onChange={e => setAnswer(e.currentTarget.value)}
        className={classNames.textField}
      />

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

type RenderDeckHeadingType = {
  deckId: string
  deckName: string
  isMyDeck: boolean
  onEdit: (name: string, isPrivate: boolean) => void
  onDelete: (id: string) => void
  handleCreateCard: (data: FormData) => void
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
    <CardEditorModal
      buttonName={'Add New Card'}
      modalTitle={'Add New Card'}
      onSubmit={data => handleCreateCard(data)}
      setIsOpen={setAddCardModalOpen}
      isOpen={isAddCardModalOpen}
    >
      <Button variant={'primary'}>Add New Card</Button>
    </CardEditorModal>
  )
  const learnToPackButton = !isMyDeck && (
    <Button variant={'primary'} as={Link} to={`/learn/${deckId}`}>
      Learn the deck
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
