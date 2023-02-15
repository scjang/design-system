import React, { ReactElement } from 'react'
import { Checkbox as BaseCheckbox, CheckboxProps as BaseCheckboxProps } from 'theme-ui'
import WithLabel from '~components/Atoms/WithLabel/WithLabel'
import { idGenerator } from '~utils'

export interface SelectboxProps extends BaseCheckboxProps {
  label: string | ReactElement
}

const CheckBox = ({ label, sx, disabled, onChange, ...props }: SelectboxProps) => {
  const id = idGenerator('check-box')

  const disabledSx = disabled
    ? {
        cursor: 'default',
        color: 'gray.50',
      }
    : {}

  const defaultHandler = () => {}

  return (
    <WithLabel id={id} label={label} sx={disabledSx}>
      <BaseCheckbox
        id={id}
        onChange={onChange || disabled ? onChange : defaultHandler}
        sx={{ ...sx, ...disabledSx }}
        {...props}
      />
    </WithLabel>
  )
}

export default CheckBox
