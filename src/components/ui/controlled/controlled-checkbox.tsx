import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { CustomCheckbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/tetx-field'

type ControlledTextFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<React.ComponentProps<typeof TextField>, 'onChange' | 'value'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledTextFieldProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({ name, control })

  const handleChange = onChange as (value: boolean) => boolean

  return <CustomCheckbox checked={value} onChange={handleChange} {...rest} />
}
