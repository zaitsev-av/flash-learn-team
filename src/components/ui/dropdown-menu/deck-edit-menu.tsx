import { FC } from 'react'

import { DeletePackIcon, LearnPackIcon, PencilIcon } from '@/assets'
import OpenPackMenuIcon from '@/assets/icons/OpenPackMenuIcon.tsx'
import { DropdownMenu, Typography } from '@/components'
import s from '@/components/ui/dropdown-menu/dropdown-menu.module.scss'
import { MenuItem } from '@/components/ui/dropdown-menu/menu-item/menu-item.tsx'

type DeckEditMenuPropsType = {
  onEdit: () => void
  onDelete: () => void
}

export const DeckEditMenu: FC<DeckEditMenuPropsType> = props => {
  const { onDelete, onEdit } = props

  return (
    <DropdownMenu trigger={<button className={s.icon_button}>{<OpenPackMenuIcon />}</button>}>
      <MenuItem as={'a'} href={'#'}>
        <LearnPackIcon />
        <Typography variant={'caption'}>Learn</Typography>
      </MenuItem>
      <MenuItem onSelect={onEdit}>
        <PencilIcon />
        <Typography variant={'caption'}>Edit</Typography>
      </MenuItem>
      <MenuItem separator={false} onSelect={onDelete}>
        <DeletePackIcon />
        <Typography variant={'caption'}>Delete</Typography>
      </MenuItem>
    </DropdownMenu>
  )
}
