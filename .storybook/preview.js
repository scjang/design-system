import React from 'react'
import { theme } from '~theme/theme'
import { ThemeProvider } from 'theme-ui'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]
