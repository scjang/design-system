const buttons = {
  default: {
    px: 3,
    py: 0,
    cursor: 'pointer',
    outline: 'none',
    ':active, :focus': {
      outline: 'none',
    },
    ':disabled': {
      bg: 'gray.1',
      cursor: 'default',
    },
    '&:active': {
      bg: 'gray.6',
    },
  },
  small: {
    variant: 'buttons.default',
    height: 36,
    fontSize: 2,
  },
  medium: {
    variant: 'buttons.default',
    height: 48,
    fontSize: 3,
  },
  large: {
    variant: 'buttons.default',
    height: 56,
    fontSize: 4,
  },
}

export default buttons
