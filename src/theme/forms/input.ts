const input = {
  default: {
    px: 16,
    py: 12,
    border: '2px solid',
    borderColor: 'gray.30',
    borderRadius: 4,
    ':placeholder': {
      color: 'gray.60',
    },
    ':focus': {
      outline: 'none',
      borderColor: 'black',
    },
    ':disabled': {
      color: 'gray.40',
      backgroundColor: 'gray.20',
    },
  },
  success: {
    variant: 'forms.input.default',
    borderColor: 'system.green.50',
  },
  error: {
    variant: 'forms.input.default',
    borderColor: 'system.red.50',
  },
  withAbsoluteBox: {
    position: 'absolute',
    top: '50%',
    right: 12,
    transform: 'translate(0, -50%)',
    cursor: 'pointer',
  },
}

export default input
