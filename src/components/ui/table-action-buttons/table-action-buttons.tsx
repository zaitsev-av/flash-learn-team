import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import s from './table-action-buttons.module.scss'

import { EditIcon, PlayIcon, DeleteIcon } from '@/assets'
import { AddNewPackModal } from '@/components/ui/modal/add-new-pack-modal'
import { DeleteDialog, ItemType } from '@/components/ui/modal/delete-dialog/delete-dialog.tsx'

type TableActionsProps = {
  editable?: boolean
  item: ItemType
}
export const TableActions: FC<TableActionsProps> = ({ item, editable = true }) => {
  const navigate = useNavigate()

  return (
    <div className={s.container}>
      <button onClick={() => navigate('/learn')}>
        <PlayIcon />
      </button>

      {editable && (
        <>
          <AddNewPackModal
            trigger={
              <button>
                <EditIcon />
              </button>
            }
            onSubmit={() => {}}
          />
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
