import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import s from './table-action-buttons.module.scss'

import { EditIcon, PlayIcon, DeleteIcon } from '@/assets'
import { EditDeckModal, DeleteDialog, ItemType } from '@/components'
import { useUpdateDeckMutation } from '@/services'

type TableActionsProps = {
  editable?: boolean
  item: ItemType
}
export const TableActions: FC<TableActionsProps> = ({ item, editable = true }) => {
  const navigate = useNavigate()
  const [updateDeck] = useUpdateDeckMutation()

  return (
    <div className={s.container}>
      <button onClick={() => navigate('/learn')}>
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
            packName={item.title}
            isPrivate={item.isPrivate ?? false}
          >
            <button>
              <EditIcon />
            </button>
          </EditDeckModal>
          <DeleteDialog
            buttonTitle={'Delete Deck'}
            item={item}
            onClick={id => {
              console.log(id)
            }}
            title={'Delete Deck'}
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
