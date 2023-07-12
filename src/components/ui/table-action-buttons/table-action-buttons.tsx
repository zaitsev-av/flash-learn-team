import { FC } from 'react'

import s from './table-action-buttons.module.scss'

import { EditIcon, PlayIcon, DeleteIcon } from '@/assets'
import { AddNewPackModal } from '@/components/ui/modal/add-new-pack-modal'

type TableActionsProps = {
  editable?: boolean
}
export const TableActions: FC<TableActionsProps> = ({ editable = true }) => {
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
          <AddNewPackModal
            trigger={
              <button>
                <DeleteIcon />
              </button>
            }
            onSubmit={() => {}}
          />
        </>
      )}
    </div>
  )
}
