import React from 'react'
import { Button, ButtonProps } from 'theme-ui'

const CircleButton = ({ variant, ...props }: ButtonProps) => {
  const width = () => {
    switch (variant) {
      case 'small':
        return 36
      case 'large':
        return 56
      default:
        return 48
    }
  }
  return (
    <Button
      variant={variant}
      p={0}
      bg="gray.40"
      sx={{ width: width(), borderRadius: '50%' }}
      {...props}
    />
  )
}

export default CircleButton
