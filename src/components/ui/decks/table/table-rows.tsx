import { FC, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import s from '../decks.module.scss'

import { DeleteIcon, EditIcon, PlayIcon } from '@/assets'
import { transformDate } from '@/common'
import { DeleteModal, EditDeckModal, Table } from '@/components'
import { ItemsType, useDeleteDeckMutation, useUpdateDeckMutation } from '@/services'

type TableRowsPropsType = {
  data: ItemsType[]
  pageSize: number
  isMe: string
}

export const TableRows: FC<TableRowsPropsType> = props => {
  const { data, pageSize, isMe } = props

  const navigate = useNavigate()
  const [updateDeck] = useUpdateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()
  const [selectedDeck, setSelectedDeck] = useState<ItemsType>({} as ItemsType)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)
  const [isEditDeckModalOpen, setEditDeckModalOpen] = useState<boolean>(false)

  const handleDeleteDeck = () => {
    deleteDeck({ id: selectedDeck.id })
      .unwrap()
      .then(res => {
        toast.success(`You have successfully removed the deck: ${res.name} 👍`)
      })
      .catch(error => {
        toast.error(`${error.message} 🙈`)
      })
  }

  return (
    <>
      <DeleteModal
        title={'Delete Deck'}
        itemName={selectedDeck.name}
        onClick={handleDeleteDeck}
        buttonTitle={'Delete Deck'}
        isOpen={isDeleteModalOpen}
        setIsOpen={setDeleteModalOpen}
      />

      <EditDeckModal
        onSubmit={data =>
          updateDeck({
            id: selectedDeck.id,
            name: data.newNameDeck,
            isPrivate: data.isPrivate ?? false,
          })
        }
        deckName={selectedDeck.name}
        isPrivate={selectedDeck.isPrivate}
        setIsOpen={setEditDeckModalOpen}
        isOpen={isEditDeckModalOpen}
      />

      {data.slice(0, pageSize).map(el => {
        const onClickDeleteHandler = () => {
          setSelectedDeck(el)
          setDeleteModalOpen(true)
        }

        const onClickEditHandler = () => {
          setSelectedDeck(el)
          setEditDeckModalOpen(true)
        }

        return (
          <Table.Row key={el.id}>
            <Table.DataCell onClick={() => navigate(`/cards/${el.id}`)}>
              <span
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                className={s.getCards}
              >
                {el.name}
                {el.cover === null ? '' : <img src={el.cover} alt="" width="70px" height="50px" />}
              </span>
            </Table.DataCell>
            <Table.DataCell>{el.cardsCount}</Table.DataCell>
            <Table.DataCell>{transformDate(el.updated)}</Table.DataCell>
            <Table.DataCell>{el.author.name}</Table.DataCell>
            <Table.DataCell>
              <div className={s.action_container}>
                <button
                  onClick={() => navigate(`/learn/${el.id}`)}
                  style={{ cursor: 'pointer' }}
                  className={s.action_button}
                >
                  <PlayIcon />
                </button>

                {el.userId === isMe && (
                  <>
                    <button
                      onClick={onClickEditHandler}
                      style={{ cursor: 'pointer' }}
                      className={s.action_button}
                    >
                      <EditIcon />
                    </button>

                    <button
                      onClick={onClickDeleteHandler}
                      className={s.action_button}
                      style={{ cursor: 'pointer' }}
                    >
                      <DeleteIcon />
                    </button>
                  </>
                )}
              </div>
            </Table.DataCell>
          </Table.Row>
        )
      })}
    </>
  )
}
