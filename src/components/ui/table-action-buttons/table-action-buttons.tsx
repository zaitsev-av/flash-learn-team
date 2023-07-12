import { FC } from 'react'

import s from './table-action-buttons.module.scss'

import { EditIcon, PlayIcon, DeleteIcon } from '@/assets'
import { AddNewPackModal } from '@/components/ui/modal/add-new-pack-modal'
import { DeleteDialog, ItemType } from '@/components/ui/modal/delete-dialog/delete-dialog.tsx'

type TableActionsProps = {
  editable?: boolean
  item: ItemType
}
export const TableActions: FC<TableActionsProps> = ({ item, editable = true }) => {
  return (
    <div className={s.container}>
      <AddNewPackModal
        trigger={
          <button>
            <PlayIcon />
          </button>
        }
        onSubmit={() => {}}
      />
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
            trigger={
              <button>
                <DeleteIcon />
              </button>
            }
            buttonTitle={'Delete Pack'}
            item={item}
            onClick={id => {
              console.log(id)
            }}
            title={'Delete Pack'}
          />
        </>
      )}
    </div>
  )
}
