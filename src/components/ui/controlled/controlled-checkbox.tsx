import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components'

type ControlledCheckboxProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'rules' | 'defaultValues'
> &
  Omit<CheckboxProps, 'onChange' | 'value'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  name,
  shouldUnregister,
  ...rest
}: ControlledCheckboxProps<T>) => {
  const {
    field: { value, onChange: onChange },
  } = useController({
    name,
    control,
    shouldUnregister,
  })

  const handleChange = onChange as (value: boolean) => void

  return <Checkbox checked={value} onChange={handleChange} {...rest} />
}
