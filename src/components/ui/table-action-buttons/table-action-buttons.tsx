import { FC } from 'react'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import s from './table-action-buttons.module.scss'

import { DeleteIcon, EditIcon, PlayIcon } from '@/assets'
import { DeleteModal, EditDeckModal, ItemType } from '@/components'
import { useDeleteDeckMutation, useUpdateDeckMutation } from '@/services'

type TableActionsProps = {
  editable?: boolean
  item: ItemType
  isDeleteModalOpen: boolean
  setDeleteModalOpen: (isDeleteModalOpen: boolean) => void
}
export const TableActions: FC<TableActionsProps> = props => {
  const { item, editable = true, setDeleteModalOpen, isDeleteModalOpen } = props
  const navigate = useNavigate()
  const [updateDeck] = useUpdateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()

  const handleDeleteDeck = (id: string) => {
    deleteDeck({ id })
      .unwrap()
      .then(res => {
        toast.success(`You have successfully removed the deck: ${res.name} 👍`)
      })
      .catch(error => {
        toast.error(`${error.message} 🙈`)
      })
  }

  return (
    <div className={s.container}>
      <button onClick={() => navigate('/learn')} style={{ cursor: 'pointer' }}>
        <PlayIcon />
      </button>

      {editable && (
        <>
          <EditDeckModal
            onSubmit={data =>
              updateDeck({
                id: item.id,
                name: data.newNamePack,
                isPrivate: data.isPrivate ?? false,
              })
            }
            deckName={item.title}
            isPrivate={item.isPrivate ?? false}
          >
            <button style={{ cursor: 'pointer' }}>
              <EditIcon />
            </button>
          </EditDeckModal>
          <DeleteModal
            item={item}
            title={'Delete Deck'}
            onClick={id => handleDeleteDeck(id)}
            buttonTitle={'Delete Deck'}
            isOpen={isDeleteModalOpen}
            setIsOpen={setDeleteModalOpen}
          >
            <button style={{ cursor: 'pointer' }}>
              <DeleteIcon />
            </button>
          </DeleteModal>
        </>
      )}
    </div>
  )
}
