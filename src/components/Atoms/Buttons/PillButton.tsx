import React from 'react'
import { Button, ButtonProps } from 'theme-ui'

const PillButton = ({ variant = 'medium', ...props }: ButtonProps) => {
  return (
    <Button
      variant={variant}
      bg="gray.40"
      sx={{
        borderRadius: 36,
      }}
      {...props}
    />
  )
}

export default PillButton
