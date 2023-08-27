import { FC } from 'react'

import { motion } from 'framer-motion'
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
  isEditDeckModalOpen: boolean
  setDeleteModalOpen: (isDeleteModalOpen: boolean) => void
  setEditDeckModalOpen: (isEditDeckModalOpen: boolean) => void
}

export const DeckMenu: FC<DeckEditMenuPropsType> = props => {
  const {
    onDelete,
    onEdit,
    deckName,
    deckId,
    setDeleteModalOpen,
    isDeleteModalOpen,
    setEditDeckModalOpen,
    isEditDeckModalOpen,
  } = props

  return (
    <DropdownMenu trigger={<button className={s.icon_button}>{<OpenDeckMenuIcon />}</button>}>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <MenuItem as={Link} to={`/learn/${deckId}`}>
          <LearnPackIcon />
          <Typography variant={'caption'}>Learn</Typography>
        </MenuItem>
      </motion.div>
      <EditDeckModal
        setIsOpen={setEditDeckModalOpen}
        isOpen={isEditDeckModalOpen}
        isPrivate={false}
        deckName={deckName}
        onSubmit={({ newNameDeck, isPrivate = false }) => onEdit(newNameDeck, isPrivate)}
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <MenuItem>
            <PencilIcon />
            <Typography variant={'caption'}>Edit</Typography>
          </MenuItem>
        </motion.div>
      </EditDeckModal>
      <DeleteModal
        title={'Delete Deck'}
        isOpen={isDeleteModalOpen}
        onClick={() => onDelete(deckId)}
        setIsOpen={setDeleteModalOpen}
        buttonTitle={'Delete Deck'}
        itemName={deckName}
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MenuItem separator={false}>
            <DeleteIcon />
            <Typography variant={'caption'}>Delete</Typography>
          </MenuItem>
        </motion.div>
      </DeleteModal>
    </DropdownMenu>
  )
}
