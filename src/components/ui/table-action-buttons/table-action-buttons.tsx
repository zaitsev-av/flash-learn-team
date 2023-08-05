import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import s from './table-action-buttons.module.scss'

import { DeleteIcon, EditIcon, PlayIcon } from '@/assets'
import { DeleteDialog, EditDeckModal, ItemType } from '@/components'
import { useDecks } from '@/services/decks/hooks/useDecks.ts'

type TableActionsProps = {
  editable?: boolean
  item: ItemType
}
export const TableActions: FC<TableActionsProps> = ({ item, editable = true }) => {
  const navigate = useNavigate()
  const { handleDeleteDeck, updateDeck } = useDecks()
  /*  const [updateDeck] = useUpdateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()

  const handleDeleteDeck = (id: string) => {
    deleteDeck(id)
      .unwrap()
      .then(res => {
        toast.success(`You have successfully removed the deck: ${res.name} 👍`)
      })
      .catch(error => {
        if (error.status === 404) {
          toast.error(`Sorry, something went wrong 🙈`)
        } else {
          console.warn(error)
        }
      })
  }*/

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
          <DeleteDialog
            buttonTitle={'Delete Deck'}
            item={item}
            onClick={id => handleDeleteDeck(id)}
            title={'Delete Deck'}
          >
            <button style={{ cursor: 'pointer' }}>
              <DeleteIcon />
            </button>
          </DeleteDialog>
        </>
      )}
    </div>
  )
}
