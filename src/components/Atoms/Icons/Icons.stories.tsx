import React, { SVGProps } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import CaretDownComponent from '~components/Atoms/Icons/CaretDown'
import ClearComponent from '~components/Atoms/Icons/Clear'

export default {
  title: 'Atoms/Icons',
  parameters: {},
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} as Meta

const CaretDownTemplate: Story<SVGProps<SVGElement>> = (props) => <CaretDownComponent {...props} />
export const CaretDown = CaretDownTemplate.bind({})

const ClearTemplate: Story<SVGProps<SVGElement>> = () => <ClearComponent />
export const Clear = ClearTemplate.bind({})
