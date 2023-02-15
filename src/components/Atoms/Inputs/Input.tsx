import React from 'react'
import { Input as ThemeInput, InputProps } from 'theme-ui'
import useHandleInput from '~hooks/useHandleInput'

const Input = ({ variant = 'forms.input.default', ...props }: InputProps) => {
  const { value, onChange } = useHandleInput()
  return <ThemeInput variant={variant} value={value} onChange={onChange} {...props} />
}

export default Input
