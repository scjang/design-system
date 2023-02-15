import React from 'react'
import { Box, Text, InputProps } from 'theme-ui'
import DefaultInput from '~components/Atoms/Inputs/Input'

export interface InputWithTextProps extends InputProps {
  text: string
}

const InputWithText = ({
  variant = 'forms.input.default',
  text = '원',
  ...props
}: InputWithTextProps) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <DefaultInput variant={variant} sx={{ pr: 32 }} {...props} />
      <Box variant="forms.input.withAbsoluteBox" sx={{ cursor: 'auto' }}>
        <Text>{text}</Text>
      </Box>
    </Box>
  )
}

export default InputWithText
