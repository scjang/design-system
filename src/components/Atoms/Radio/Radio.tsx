import React, { ReactElement } from 'react'
import { Radio as BaseRadio, RadioProps as BaseRadioProps } from 'theme-ui'
import { idGenerator } from '~utils'
import WithLabel from '~components/Atoms/WithLabel/WithLabel'

export interface RadioProps extends BaseRadioProps {
  label: string | ReactElement
}

const Radio = ({ label, sx, disabled, onChange, ...props }: RadioProps) => {
  const id = idGenerator('radio')

  const disabledSx = disabled
    ? {
        cursor: 'default',
        color: 'gray.50',
      }
    : {}

  const defaultHandler = () => {}

  return (
    <WithLabel id={id} label={label} sx={disabledSx}>
      <BaseRadio
        id={id}
        onChange={onChange || disabled ? onChange : defaultHandler}
        sx={{ ...sx, ...disabledSx }}
        {...props}
      />
    </WithLabel>
  )
}

export default Radio
