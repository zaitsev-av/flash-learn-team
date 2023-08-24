import { FC, useState } from 'react'

import { clsx } from 'clsx'

import { useAppDispatch } from '@/common'
import { CardEditorModal, DeleteModal, ImageModal, Sort, Table } from '@/components'
import { CardsTableRows } from '@/components/ui/cards/cards-table/cards-table-rows.tsx'
import s from '@/components/ui/cards/cards.module.scss'
import { columns } from '@/components/ui/cards/table-columns.ts'
import { CardsItem, CardsResponseType } from '@/services'
import { useDeleteCardMutation, useUpdateCardMutation } from '@/services/cards/cards-api.ts'
import { cardsAction } from '@/services/cards/cards-slice.ts'

type CardTablePropsType = {
  isMyDeck: boolean
  pageSize: number
  sort: Sort
  rowData: CardsResponseType | undefined
  setSortValue: (sort: Sort, handler: (sort: string) => void) => void
  handlerSort: (key: string, sortable?: boolean) => void
}
export const CardTable: FC<CardTablePropsType> = props => {
  const dispatch = useAppDispatch()
  const [selectedCard, setSelectedCard] = useState<CardsItem>({} as CardsItem)
  const [isEditCardModalOpen, setEditCardModalOpen] = useState<boolean>(false)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)
  const [isImageModalOpen, setImageModalOpen] = useState<boolean>(false)
  const [image, setImage] = useState<string>('')

  const [updateCard] = useUpdateCardMutation()
  const [deleteCard] = useDeleteCardMutation()

  const { rowData, isMyDeck, pageSize, sort, handlerSort, setSortValue } = props

  const handlerUpdateCard = (data: FormData) => {
    updateCard({ id: selectedCard.id, data })
  }
  const handlerDeleteCard = () => {
    deleteCard(selectedCard.id)
  }
  const openImageInModal = (src: string) => {
    setImageModalOpen(true)
    setImage(src)
  }

  const classNames = {
    head: clsx(s.tableHead),
    tableRot: clsx(s.tableRoot),
  }

  return (
    <>
      <CardEditorModal
        answer={selectedCard.answer}
        question={selectedCard.question}
        answerImg={selectedCard.answerImg}
        questionImg={selectedCard.questionImg}
        buttonName={'Edit Card'}
        modalTitle={'Edit Card'}
        onSubmit={data => handlerUpdateCard(data)}
        isOpen={isEditCardModalOpen}
        setIsOpen={setEditCardModalOpen}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        setIsOpen={setDeleteModalOpen}
        buttonTitle={'Delete Card'}
        onClick={handlerDeleteCard}
        title={'Delete Card'}
        itemName={selectedCard.question}
      />
      <ImageModal
        src={image}
        alt={'image'}
        isOpen={isImageModalOpen}
        setIsOpen={setImageModalOpen}
      />
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
          {rowData?.items.slice(0, pageSize).map(el => {
            const onClickEditHandler = () => {
              setSelectedCard(el)
              setEditCardModalOpen(true)
            }
            const onClickDeleteHandler = () => {
              setSelectedCard(el)
              setDeleteModalOpen(true)
            }

            return (
              <CardsTableRows
                key={el.id}
                item={el}
                isMyDeck={isMyDeck}
                onClickEditHandler={onClickEditHandler}
                onClickDeleteHandler={onClickDeleteHandler}
                openImageInModal={openImageInModal}
              />
            )
          })}
        </Table.Body>
      </Table.Root>
    </>
  )
}
