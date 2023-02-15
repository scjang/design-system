import React, { useState } from 'react'
import { Box, InputProps } from 'theme-ui'
import Input from '~components/Atoms/Inputs/Input'
import Clear from '~components/Atoms/Icons/Clear'
import useHandleInput from '~hooks/useHandleInput'

const InputWithClear = ({ variant = 'forms.input.default', ...props }: InputProps) => {
  const [isVisibleIcon, setIsVisibleIcon] = useState(false)

  const { value, onChange, clearValue } = useHandleInput()

  const handleClear = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    clearValue()
  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault()
    setIsVisibleIcon(true)
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault()
    setIsVisibleIcon(false)
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <Input
        variant={variant}
        sx={{ pr: 32 }}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {isVisibleIcon && (
        <Box variant="forms.input.withAbsoluteBox" onClick={handleClear}>
          <Clear />
        </Box>
      )}
    </Box>
  )
}

export default InputWithClear
