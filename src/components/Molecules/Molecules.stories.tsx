import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Box, InputProps } from 'theme-ui'
import InputWithClearComponent from '~components/Molecules/InputWithClear'
import InputWithTextComponent, { InputWithTextProps } from '~components/Molecules/InputWithText'

export default {
  title: 'Molecules/Input with item',
  decorators: [
    (StoryComponent) => (
      <Box sx={{ width: 250 }}>
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

const InputWithClearTemplate: Story<InputProps> = (props) => <InputWithClearComponent {...props} />
export const InputWithClear = InputWithClearTemplate.bind({})
InputWithClear.args = {
  placeholder: '여기에 입력하세요.',
}

const InputWithTextTemplate: Story<InputWithTextProps> = (props) => (
  <InputWithTextComponent {...props} />
)
export const InputWithText = InputWithTextTemplate.bind({})
InputWithText.args = {
  placeholder: '여기에 입력하세요.',
}
