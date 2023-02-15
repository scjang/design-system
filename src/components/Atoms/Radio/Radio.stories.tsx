import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import RadioComponent, { RadioProps } from './Radio'

export default {
  title: 'Atoms/Radio',
} as Meta

const RadioTemplate: Story<RadioProps> = (props) => <RadioComponent {...props} />
export const Radio = RadioTemplate.bind({})
Radio.args = {
  label: '라벨 내용',
  checked: true,
  disabled: false,
}
