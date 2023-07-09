import { DeletePackIcon, LearnPackIcon, PencilIcon } from '@/assets'
import { Typography } from '@/components'
import { MenuItem } from '@/components/ui/dropdown-menu/menu-item/menu-item.tsx'

export const DeckEditMenu = () => {
  return (
    <>
      <MenuItem>
        <LearnPackIcon />
        <Typography variant={'caption'}>Learn</Typography>
      </MenuItem>
      <MenuItem>
        <PencilIcon />
        <Typography variant={'caption'}>Edit</Typography>
      </MenuItem>
      <MenuItem separator={false}>
        <DeletePackIcon />
        <Typography variant={'caption'}>Delete</Typography>
      </MenuItem>
    </>
  )
}
