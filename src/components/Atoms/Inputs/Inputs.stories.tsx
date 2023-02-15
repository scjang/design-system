import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Box, InputProps } from 'theme-ui'
import InputComponent from '~components/Atoms/Inputs/Input'

export default {
  title: 'Atoms/Input',
  decorators: [
    (StoryComponent) => (
      <Box sx={{ width: 200 }}>
        <StoryComponent />
      </Box>
    ),
  ],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['forms.input.default', 'forms.input.success', 'forms.input.error'],
      },
    },
  },
} as Meta

const InputTemplate: Story<InputProps> = (props) => <InputComponent {...props} />
export const Input = InputTemplate.bind({})
Input.args = {
  placeholder: '여기에 입력하세요.',
  disabled: true,
}
