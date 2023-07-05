import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { InputProps, TextField } from '@/components'

type ControlledTextFieldProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'rules' | 'defaultValues'
> &
  Omit<InputProps, 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledTextFieldProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control })

  return <TextField {...field} error={error?.message} {...rest} />
}
