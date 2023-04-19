import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { QuillEditor } from './QuillEditor'

export default {
  title: 'src/components/organisms/QuillEditor',
  component: QuillEditor,
} as ComponentMeta<typeof QuillEditor>

const Template: ComponentStory<typeof QuillEditor> = (args) => (
  <QuillEditor {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
