import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { TextField } from '@/components'

type ControlledTextFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<React.ComponentProps<typeof TextField>, 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledTextFieldProps<T>) => {
  const { field } = useController({ name, control })

  return <TextField {...field} {...rest} />
}
