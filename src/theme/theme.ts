import buttons from '~theme/buttons'
import radio from './forms/radio'
import checkbox from '~theme/forms/checkbox'
import colors from '~theme/colors'
import input from '~theme/forms/input'

export type Theme = typeof theme

export const theme = {
  breakpoints: ['36em', '48em', '62em', '75em'],
  fontSizes: [10, 12, 14, 16, 18, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  styles: {
    root: {
      fontSize: 2,
      lineHeight: 1,
    },
  },
  variants: {
    justifyCenter: {
      justifyContent: 'center',
    },
    alignCenter: {
      alignItems: 'center',
    },
    center: {
      variant: ['variants.justifyCenter', 'variants.alignCenter'],
    },
  },
  colors,
  buttons,
  forms: {
    input,
    radio,
    checkbox,
  },
}
