import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { ButtonProps } from 'theme-ui'
import PillButton from './PillButton'
import RectangleButton from './RectangleButton'
import CircleButton from './CircleButton'

export default {
  title: 'Atoms/Button',
  parameters: {},
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
    },
    backgroundColor: {
      control: 'color',
    },
  },
} as Meta

const PillButtonTemplate: Story<ButtonProps> = (props) => <PillButton {...props} />
export const PillSecondaryButton = PillButtonTemplate.bind({})
PillSecondaryButton.args = {
  children: 'PillSecondaryButton',
  variant: 'medium',
  disabled: false,
}

const RectangleButtonTemplate: Story<ButtonProps> = (props) => <RectangleButton {...props} />
export const RectangleSecondaryButton = RectangleButtonTemplate.bind({})
RectangleSecondaryButton.args = {
  children: 'RectangleSecondaryButton',
  variant: 'medium',
  disabled: false,
}

const CircleButtonTemplate: Story<ButtonProps> = (props) => <CircleButton {...props} />
export const CircleSecondaryButton = CircleButtonTemplate.bind({})
CircleSecondaryButton.args = {
  children: '01',
  variant: 'medium',
  disabled: false,
}
