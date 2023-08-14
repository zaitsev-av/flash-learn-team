import { FC } from 'react'

import { Link } from 'react-router-dom'

import { DeleteIcon, LearnPackIcon, PencilIcon } from '@/assets'
import OpenDeckMenuIcon from '@/assets/icons/OpenPackMenuIcon.tsx'
import { DeleteModal, DropdownMenu, EditDeckModal, Typography } from '@/components'
import s from '@/components/ui/dropdown-menu/dropdown-menu.module.scss'
import { MenuItem } from '@/components/ui/dropdown-menu/menu-item/menu-item.tsx'

type DeckEditMenuPropsType = {
  deckName: string
  deckId: string
  onEdit: (name: string, isPrivate: boolean) => void
  onDelete: (id: string) => void
  isDeleteModalOpen: boolean
  setDeleteModalOpen: (isDeleteModalOpen: boolean) => void
}

export const DeckEditMenu: FC<DeckEditMenuPropsType> = props => {
  const { onDelete, onEdit, deckName, deckId, setDeleteModalOpen, isDeleteModalOpen } = props

  return (
    <DropdownMenu trigger={<button className={s.icon_button}>{<OpenDeckMenuIcon />}</button>}>
      <MenuItem as={Link} to={`/learn/${deckId}`}>
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
      <DeleteModal
        item={{ id: deckId, title: deckName }}
        title={'Delete Deck'}
        isOpen={isDeleteModalOpen}
        onClick={onDelete}
        setIsOpen={setDeleteModalOpen}
        buttonTitle={'Delete Deck'}
      >
        <MenuItem separator={false}>
          <DeleteIcon />
          <Typography variant={'caption'}>Delete</Typography>
        </MenuItem>
      </DeleteModal>
    </DropdownMenu>
  )
}
