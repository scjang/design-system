import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { RadioProps } from '~components/Atoms/Radio/Radio'
import CheckBoxComponent from '~components/Atoms/CheckBox/CheckBox'

export default {
  title: 'Atoms/Checkbox',
} as Meta

const CheckboxTemplate: Story<RadioProps> = (props) => <CheckBoxComponent {...props} />
export const Checkbox = CheckboxTemplate.bind({})
Checkbox.args = {
  label: '라벨 내용',
  checked: true,
  disabled: false,
}
