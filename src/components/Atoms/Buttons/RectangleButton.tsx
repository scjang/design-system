import React from 'react'
import { Button, ButtonProps } from 'theme-ui'

const RectangleButton = ({ variant = 'medium', ...props }: ButtonProps) => {
  return (
    <Button
      variant={variant}
      bg="gray.40"
      sx={{
        borderRadius: 0,
      }}
      {...props}
    />
  )
}

export default RectangleButton
