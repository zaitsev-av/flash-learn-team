import { FC } from 'react'

import { Link } from 'react-router-dom'

import { DeleteIcon, LearnPackIcon, PencilIcon } from '@/assets'
import OpenDeckMenuIcon from '@/assets/icons/OpenPackMenuIcon.tsx'
import { DropdownMenu, EditDeckModal, Typography } from '@/components'
import s from '@/components/ui/dropdown-menu/dropdown-menu.module.scss'
import { MenuItem } from '@/components/ui/dropdown-menu/menu-item/menu-item.tsx'

type DeckEditMenuPropsType = {
  deckName: string
  onEdit: (name: string, isPrivate: boolean) => void
  onDelete: () => void
}

export const DeckEditMenu: FC<DeckEditMenuPropsType> = props => {
  const { onDelete, onEdit, deckName } = props

  return (
    <DropdownMenu trigger={<button className={s.icon_button}>{<OpenDeckMenuIcon />}</button>}>
      <MenuItem as={Link} to="/learn">
        <LearnPackIcon />
        <Typography variant={'caption'}>Learn</Typography>
      </MenuItem>
      <EditDeckModal
        isPrivate={false}
        deckName={deckName}
        onSubmit={({ newNamePack, isPrivate = false }) => onEdit(newNamePack, isPrivate)}
      >
        <MenuItem>
          <PencilIcon />
          <Typography variant={'caption'}>Edit</Typography>
        </MenuItem>
      </EditDeckModal>
      <MenuItem separator={false} onSelect={onDelete}>
        <DeleteIcon />
        <Typography variant={'caption'}>Delete</Typography>
      </MenuItem>
    </DropdownMenu>
  )
}
