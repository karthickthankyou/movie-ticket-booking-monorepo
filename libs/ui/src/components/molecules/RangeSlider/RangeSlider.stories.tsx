import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Controller, useForm } from 'react-hook-form'

import { RangeSlider } from './RangeSlider'

export default {
  title: 'molecules/RangeSlider',
  component: RangeSlider,
} as ComponentMeta<typeof RangeSlider>

const Template: ComponentStory<typeof RangeSlider> = ({
  defaultValue,
  step,
}) => {
  const { control } = useForm({
    defaultValues: {
      slider: defaultValue,
    },
  })

  return (
    <div className="px-12 mt-24">
      <Controller
        name="slider"
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <RangeSlider
            step={step}
            defaultValue={defaultValue}
            onChange={onChange}
            value={value}
          />
        )}
      />
    </div>
  )
}
const LabelFormatTemplate: ComponentStory<typeof RangeSlider> = ({
  defaultValue,
  step,
}) => {
  const { control } = useForm({
    defaultValues: {
      slider: defaultValue,
    },
  })

  return (
    <div className="px-12 mt-24">
      <Controller
        name="slider"
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <RangeSlider
            step={step}
            onChange={onChange}
            value={value}
            defaultValue={defaultValue}
            valueLabelFormat={(sliderValue) =>
              `Rs.${sliderValue.toLocaleString()}`
            }
          />
        )}
      />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  defaultValue: [0, 10],
  step: 1,
}

export const LabelFormat = LabelFormatTemplate.bind({})
LabelFormat.args = {
  defaultValue: [0, 10_000_000],
  step: 10_000,
}
