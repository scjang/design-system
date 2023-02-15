import React, { ReactElement } from 'react'
import { Flex, Label, SxStyleProp } from 'theme-ui'

interface WithLabelProps {
  children: ReactElement
  id: string
  label: ReactElement | string
  sx: SxStyleProp
}

const WithLabel = ({ id, children, label, sx }: WithLabelProps) => {
  return (
    <Flex variant="alignCenter">
      {children}
      <Label htmlFor={id} sx={sx}>
        {label}
      </Label>
    </Flex>
  )
}

export default WithLabel
