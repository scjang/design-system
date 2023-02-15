import React, { useState } from 'react'

const useHandleInput = (initialValue?: string, validator?: (text: string) => boolean) => {
  const [value, setValue] = useState(initialValue || '')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: text },
    } = e
    if (validator) {
      const isValidate = validator(text)
      if (isValidate) setValue(text)
    } else {
      setValue(text)
    }
  }

  const clearValue = () => setValue('')

  return {
    value,
    onChange,
    setValue,
    clearValue,
  }
}

export default useHandleInput
