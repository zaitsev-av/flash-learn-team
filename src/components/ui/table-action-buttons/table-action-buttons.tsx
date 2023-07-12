import { FC } from 'react'

import s from './table-action-buttons.module.scss'

import { EditIcon, PlayIcon, DeleteIcon } from '@/assets'

type TableActionsProps = {
  editable?: boolean
}
export const TableActions: FC<TableActionsProps> = ({ editable = true }) => {
  return (
    <div className={s.container}>
      <button>
        <PlayIcon />
      </button>
      {editable && (
        <>
          <button>
            <EditIcon />
          </button>
          <button>
            <DeleteIcon />
          </button>
        </>
      )}
    </div>
  )
}
