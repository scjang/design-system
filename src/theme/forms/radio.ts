const radio = {
  width: 20,
  height: 20,
  cursor: 'pointer',
  outline: 'none',

  '::after': {
    content: '""',
    border: 'solid 2px #312',
    borderColor: 'red',
  },
  ':disabled': {
    color: 'gray.4',
    bg: 'gray.4',
  },
  ':focus': {
    // border: '2px dashed #444',
    outline: 'none',
  },
}

export default radio
